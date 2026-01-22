import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport Augsburg | Möbeltransport & Gütertransport | DAG Dahoam Logistik",
  description: "Professionelle Transporte in Augsburg, München und Bayern. Möbeltransport, Gerätetransport, Sperrgut - versichert und termingerecht. Jetzt Transportanfrage stellen!",
  keywords: [
    "Transport Augsburg",
    "Möbeltransport Augsburg",
    "Transportunternehmen Bayern",
    "Gütertransport München",
    "Spedition Augsburg",
    "Lieferservice Bayern",
    "Sperrgut Transport",
    "Gerätetransport",
  ],
  openGraph: {
    title: "Transport Augsburg | DAG Dahoam Logistik",
    description: "Professionelle Transporte in Augsburg und Bayern. Versichert, termingerecht, faire Preise.",
    type: "website",
    locale: "de_DE",
  },
};

export default function TransportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
