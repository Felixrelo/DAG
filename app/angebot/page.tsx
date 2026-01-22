import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { QuoteForm } from "@/components/quote-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenloses Angebot anfordern | COMPANY_NAME",
  description: "Fordern Sie jetzt Ihr kostenloses und unverbindliches Umzugsangebot an. Festpreisgarantie und schnelle Antwort innerhalb von 24 Stunden.",
};

export default function QuotePage() {
  return (
    <>
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kostenloses Angebot anfordern
            </h1>
            <p className="text-lg text-gray-600">
              Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden
              ein unverbindliches Angebot zum Festpreis.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <QuoteForm />
          </div>
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
