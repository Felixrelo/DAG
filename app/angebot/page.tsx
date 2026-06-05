import type { Metadata } from "next";
import brandConfig from "@/brand.json";
import { FunnelIframe } from "@/components/funnel-iframe";

export const metadata: Metadata = {
  title: "Kostenloses Angebot anfordern | DAG Dahoam Logistik",
  description: "Fordern Sie jetzt Ihr kostenloses und unverbindliches Umzugsangebot an. Festpreisgarantie und schnelle Antwort innerhalb von 24 Stunden.",
};

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function QuotePage({ searchParams }: PageProps) {
  // The funnel is EMBEDDED here (same-origin page) so funnel-iframe.tsx can relay
  // its postMessage events into Google Ads conversions. The homepage hero widget
  // routes here too (angebotUrl="/angebot") instead of redirecting off-site, so
  // the conversion relay actually runs. Forward the hero's address prefill and ad
  // params into the funnel; utm_source/lang stay as the DAG client identifier.
  const base = brandConfig.cta?.primary?.url || "https://funnel.relofair.com/?utm_source=dag&lang=de";
  const url = new URL(base);
  const sp = await searchParams;
  const forward = ["from", "to", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  for (const k of forward) {
    const v = sp[k];
    if (typeof v === "string" && v) url.searchParams.set(k, v);
  }

  return <FunnelIframe src={url.toString()} />;
}
