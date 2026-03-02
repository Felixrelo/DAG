import type { Metadata } from "next";
import brandConfig from "@/brand.json";
import { FunnelIframe } from "@/components/funnel-iframe";

export const metadata: Metadata = {
  title: "Kostenloses Angebot anfordern | DAG Dahoam Logistik",
  description: "Fordern Sie jetzt Ihr kostenloses und unverbindliches Umzugsangebot an. Festpreisgarantie und schnelle Antwort innerhalb von 24 Stunden.",
};

export default function QuotePage() {
  const funnelUrl = brandConfig.cta?.primary?.url || "https://funnel.relofair.com/?utm_source=dag&lang=de";

  return <FunnelIframe src={funnelUrl} />;
}
