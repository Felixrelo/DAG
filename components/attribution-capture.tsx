"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/funnel-attribution";

// Persists Google Ads click ids on landing so they can be forwarded into the
// funnel iframe later (see lib/funnel-attribution.ts). Renders nothing.
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
