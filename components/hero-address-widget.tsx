"use client";

import { useEffect, useMemo, useRef } from "react";
import { appendAttribution } from "@/lib/funnel-attribution";

interface HeroAddressWidgetProps {
  src: string;
  angebotUrl?: string;
}

function withPortalDropdown(src: string): string {
  try {
    const u = new URL(src);
    u.searchParams.set("portalDropdown", "true");
    return u.toString();
  } catch {
    return src;
  }
}

export function HeroAddressWidget({ src, angebotUrl }: HeroAddressWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeSrc = useMemo(() => withPortalDropdown(src), [src]);

  useEffect(() => {
    if (!iframeRef.current) return;
    const frame: HTMLIFrameElement = iframeRef.current;

    const overlays: Record<string, HTMLDivElement> = {};
    const lastRects: Record<string, { top: number; left: number; width: number; height: number }> = {};

    function ensureOverlay(field: string) {
      if (overlays[field]) return overlays[field];
      const ov = document.createElement("div");
      ov.setAttribute("data-relofair-overlay", field);
      ov.style.cssText = [
        "position:fixed",
        "z-index:2147483646",
        "background:#fff",
        "border:1px solid #e5e7eb",
        "border-radius:10px",
        "box-shadow:0 12px 32px rgba(0,0,0,0.18)",
        "max-height:260px",
        "overflow-y:auto",
        "font-family:inherit",
        "font-size:14px",
        "color:#111827",
        "display:none",
      ].join(";");
      document.body.appendChild(ov);
      overlays[field] = ov;
      return ov;
    }

    function positionOverlay(field: string) {
      const ov = overlays[field];
      const rect = lastRects[field];
      if (!ov || !rect) return;
      const ifr = frame.getBoundingClientRect();
      ov.style.top = ifr.top + rect.top + rect.height + 4 + "px";
      ov.style.left = ifr.left + rect.left + "px";
      ov.style.width = rect.width + "px";
    }

    function renderOverlay(field: string, predictions: { place_id: string; description: string }[]) {
      const ov = ensureOverlay(field);
      ov.innerHTML = "";
      predictions.forEach((p) => {
        const item = document.createElement("div");
        item.style.cssText = "padding:11px 14px;cursor:pointer;border-bottom:1px solid #f3f4f6";
        item.textContent = p.description;
        item.addEventListener("mouseover", () => { item.style.background = "#f9fafb"; });
        item.addEventListener("mouseout", () => { item.style.background = "#fff"; });
        item.addEventListener("mousedown", (ev) => {
          ev.preventDefault();
          if (frame.contentWindow) {
            frame.contentWindow.postMessage({
              type: "relofair:hero-address:dropdown:select",
              field,
              place_id: p.place_id,
              description: p.description,
            }, "*");
          }
          hideOverlay(field);
        });
        ov.appendChild(item);
      });
      positionOverlay(field);
      ov.style.display = predictions.length ? "block" : "none";
    }

    function hideOverlay(field: string) {
      if (overlays[field]) overlays[field].style.display = "none";
    }
    function hideAll() {
      Object.keys(overlays).forEach(hideOverlay);
    }

    function onDocMouseDown(e: MouseEvent) {
      const target = e.target as Node;
      if (frame === target || frame.contains(target)) return;
      let inOverlay = false;
      Object.keys(overlays).forEach((f) => {
        if (overlays[f] && overlays[f].contains(target)) inOverlay = true;
      });
      if (inOverlay) return;
      hideAll();
      if (frame.contentWindow) {
        (["from", "to"] as const).forEach((f) => {
          frame.contentWindow!.postMessage({ type: "relofair:hero-address:dropdown:dismiss", field: f }, "*");
        });
      }
    }

    function reposAll() {
      Object.keys(overlays).forEach((f) => {
        if (overlays[f] && overlays[f].style.display !== "none") positionOverlay(f);
      });
    }

    function onMessage(e: MessageEvent) {
      const d = e.data;
      if (!d || typeof d !== "object") return;

      // Note: the widget's height message is intentionally ignored here. It
      // fires once, early, before this React listener attaches (hydration
      // race), and it over-reports the one-row layout (150px for ~100px of
      // content). The wrapper below sizes the iframe with reliable per-breakpoint
      // CSS instead. Heights measured from the widget: 172px stacked (≤448px
      // iframe), 150px one row — cropped to its real content height.

      if (d.type === "relofair:hero-address:dropdown" && d.field) {
        lastRects[d.field] = d.rect;
        renderOverlay(d.field, d.predictions || []);
        return;
      }

      if (d.type === "relofair:hero-address:dropdown:close" && d.field) {
        hideOverlay(d.field);
        return;
      }

      if (d.type === "relofair:hero-address:submit" && d.from && d.to) {
        hideAll();
        const ang = angebotUrl || "/angebot";
        const u = new URL(ang, window.location.origin);
        u.searchParams.set("from", (d.from.description || "") + "~" + (d.from.place_id || ""));
        u.searchParams.set("to", (d.to.description || "") + "~" + (d.to.place_id || ""));
        const p = new URLSearchParams(window.location.search);
        ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
          const v = p.get(k);
          if (v) u.searchParams.set(k, v);
        });
        // Forward captured Google Ads click ids (gclid/gbraid/...) so the shared
        // funnel can tag this DAG lead as google_ads.
        window.location.href = appendAttribution(u.toString());
      }
    }

    document.addEventListener("mousedown", onDocMouseDown);
    window.addEventListener("scroll", reposAll, { passive: true });
    window.addEventListener("resize", reposAll);
    window.addEventListener("message", onMessage);

    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      window.removeEventListener("scroll", reposAll);
      window.removeEventListener("resize", reposAll);
      window.removeEventListener("message", onMessage);
      Object.keys(overlays).forEach((f) => {
        if (overlays[f] && overlays[f].parentNode) overlays[f].parentNode!.removeChild(overlays[f]);
      });
    };
  }, [angebotUrl]);

  return (
    // Fixed, breakpoint-specific height crops the widget's self-padded dead
    // space (one-row layout) while giving the stacked mobile layout the room it
    // needs. Switch point matches the widget's own (iframe width ~448px ≈ 480px
    // viewport).
    <div className="overflow-hidden h-[176px] min-[480px]:h-[112px]">
      <iframe
        ref={iframeRef}
        src={iframeSrc}
        data-relofair="hero-address"
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
        title="Umzugsanfrage"
      />
    </div>
  );
}
