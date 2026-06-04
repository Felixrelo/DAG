"use client";

import { useEffect } from "react";
import { track } from "@/lib/tracking";

// Global click delegation: fires the Google Ads "Phone Click" / "Whatsapp Klick"
// conversions for any tel: or wa.me link anywhere on the site, including links
// rendered by server components (header, service/city pages, footer). Centralized
// here so individual links stay markup-only and nothing is double-wired.
export function ClickTracker() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.("a[href]") as
        | HTMLAnchorElement
        | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        track({ eventName: "phone_click", labelKey: "phoneClick" });
      } else if (/(wa\.me\/|api\.whatsapp\.com|whatsapp:)/i.test(href)) {
        track({ eventName: "whatsapp_click", labelKey: "whatsappClick" });
      }
    };

    // Capture phase so the conversion fires before navigation hands off the tab.
    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
