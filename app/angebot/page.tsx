import type { Metadata } from "next";
import brandConfig from "@/brand.json";

export const metadata: Metadata = {
  title: "Kostenloses Angebot anfordern | DAG Dahoam Logistik",
  description: "Fordern Sie jetzt Ihr kostenloses und unverbindliches Umzugsangebot an. Festpreisgarantie und schnelle Antwort innerhalb von 24 Stunden.",
};

export default function QuotePage() {
  const funnelUrl = brandConfig.cta?.primary?.url || "https://funnel.relofair.com/?utm_source=dag&lang=de";

  return (
    <iframe
      src={funnelUrl}
      className="fixed inset-0 w-full h-full z-[100] border-0"
      title="Angebot anfordern"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
