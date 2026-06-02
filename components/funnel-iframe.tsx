"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { appendAttribution } from "@/lib/funnel-attribution";

interface FunnelIframeProps {
  src: string;
  title?: string;
}

export function FunnelIframe({ src, title = "Angebot anfordern" }: FunnelIframeProps) {
  const router = useRouter();
  // Append captured Google Ads click ids client-side, then render the iframe
  // once with the final URL (no base-then-attributed reload that would
  // double-count funnel events).
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);

  useEffect(() => {
    setResolvedSrc(appendAttribution(src));
  }, [src]);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type === "funnel_conversion") {
        router.push("/danke");
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [router]);

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
