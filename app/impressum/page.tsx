"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";
import brandConfig from "@/brand.json";

export default function ImpressumPage() {
  const { language } = useLanguage();
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

  return (
    <>
      <Header />
      <main className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8" style={{ color: primaryColor }}>
            {language === "de" ? "Impressum" : "Imprint"}
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {language === "de" ? "Angaben gemäß § 5 TMG" : "Information according to § 5 TMG"}
              </h2>
              <p className="text-gray-700">
                Fadime Dag<br />
                Dag Logistik<br />
                Viktoriastraße 3b<br />
                86156 Augsburg
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {language === "de" ? "Kontakt" : "Contact"}
              </h2>
              <p className="text-gray-700">
                {language === "de" ? "Telefon" : "Phone"}: 0821 999 766 23<br />
                {language === "de" ? "Telefax" : "Fax"}: 0821 999 766 24<br />
                E-Mail: info@dag-logistik.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {language === "de" ? "Umsatzsteuer-ID" : "VAT ID"}
              </h2>
              <p className="text-gray-700">
                {language === "de"
                  ? "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:"
                  : "VAT identification number according to § 27 a of the German VAT Act:"}
                <br />
                DE370017381
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {language === "de"
                  ? "Verbraucherstreitbeilegung / Universalschlichtungsstelle"
                  : "Consumer Dispute Resolution / Universal Arbitration Board"}
              </h2>
              <p className="text-gray-700">
                {language === "de"
                  ? "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
                  : "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."}
              </p>
            </section>

            <section className="pt-4 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                {language === "de" ? "Quelle" : "Source"}: e-recht24.de
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
