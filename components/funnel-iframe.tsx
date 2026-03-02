"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface FunnelIframeProps {
  src: string;
  title?: string;
}

export function FunnelIframe({ src, title = "Angebot anfordern" }: FunnelIframeProps) {
  const router = useRouter();

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type === "funnel_conversion") {
        router.push("/danke");
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [router]);

  return (
    <iframe
      src={src}
      className="fixed inset-0 w-full h-full z-[100] border-0"
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
