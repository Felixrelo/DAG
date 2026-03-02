import type { Metadata } from "next";
import { FunnelIframe } from "@/components/funnel-iframe";

export const metadata: Metadata = {
  title: "Vielen Dank | DAG Dahoam Logistik",
  description: "Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.",
};

export default function DankePage() {
  return <FunnelIframe src="https://funnel.relofair.com/?utm_source=dag&lang=de&resume=true" />;
}
