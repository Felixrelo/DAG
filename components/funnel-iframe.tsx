"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { appendAttribution } from "@/lib/funnel-attribution";
import { track } from "@/lib/tracking";

interface FunnelIframeProps {
  src: string;
  title?: string;
  /**
   * Optional path to navigate to once contact details are submitted. Empty
   * (default) keeps the user inside the funnel so it runs end-to-end with its
   * full in-memory state — matches the Relofunnel/Ibra reference setup.
   */
  redirectTo?: string;
}

export function FunnelIframe({ src, title = "Angebot anfordern", redirectTo = "" }: FunnelIframeProps) {
  const router = useRouter();
  // Append captured Google Ads click ids client-side, then render the iframe
  // once with the final URL (no base-then-attributed reload that would
  // double-count funnel events).
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);

  useEffect(() => {
    setResolvedSrc(appendAttribution(src));
  }, [src]);

  // Relay Relofunnel postMessage events into Google Ads conversions. The funnel
  // posts (see relofunnel/lib/conversionPostMessage):
  //   funnel:start             -> "Funnel gestartet"               (secondary)
  //   funnel:contact_submitted -> "Funnel Kontaktdetails erhalten" (primary)
  //   funnel:complete          -> "Funnel abgeschlossen"           (secondary)
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      const type = event.data?.type;
      if (!type) return;

      if (type === "funnel:start") {
        track({ eventName: "funnel_start", labelKey: "funnelStart" });
      } else if (type === "funnel:contact_submitted" || type === "funnel_conversion") {
        // Enhanced Conversions: user data is present once the funnel includes
        // the user's email/phone in its postMessage payload.
        const { email, phone } = event.data || {};
        track({
          eventName: "generate_lead",
          labelKey: "funnelContactSubmitted",
          params: { lead_type: "funnel_contact" },
          userData: email || phone ? { email, phone_number: phone } : undefined,
        });
        if (redirectTo) router.push(redirectTo);
      } else if (type === "funnel:complete") {
        track({ eventName: "funnel_complete", labelKey: "funnelComplete" });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [router, redirectTo]);

  if (!resolvedSrc) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-800" />
      </div>
    );
  }

  return (
    <iframe
      src={resolvedSrc}
      className="fixed inset-0 w-full h-full z-[100] border-0"
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
