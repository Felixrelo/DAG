"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const faqsDe = [
  { question: "Was kostet ein Umzug?", answer: "Die Kosten hängen von verschiedenen Faktoren ab: Wohnungsgröße, Entfernung und Zusatzleistungen. Fordern Sie ein kostenloses Angebot an." },
  { question: "Wie lange dauert ein Umzug?", answer: "Ein typischer Umzug einer 2-3 Zimmer Wohnung dauert ca. 4-6 Stunden. Bei größeren Wohnungen entsprechend länger." },
  { question: "Sind meine Möbel versichert?", answer: "Ja, alle Umzüge sind durch unsere Transportversicherung abgedeckt." },
  { question: "Bieten Sie auch Verpackungsmaterial an?", answer: "Ja, wir stellen Umzugskartons und Verpackungsmaterial zur Verfügung." },
  { question: "Wie früh sollte ich buchen?", answer: "Wir empfehlen 2-4 Wochen im Voraus zu buchen." },
];

const faqsEn = [
  { question: "How much does a move cost?", answer: "Costs depend on various factors: apartment size, distance, and additional services. Request a free quote." },
  { question: "How long does a move take?", answer: "A typical move for a 2-3 room apartment takes about 4-6 hours. Larger apartments take correspondingly longer." },
  { question: "Are my belongings insured?", answer: "Yes, all moves are covered by our transport insurance." },
  { question: "Do you also provide packing materials?", answer: "Yes, we provide moving boxes and packing materials." },
  { question: "How early should I book?", answer: "We recommend booking 2-4 weeks in advance." },
];

export function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = language === "de" ? faqsDe : faqsEn;

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.faq.title}</h2>
          <p className="text-lg text-gray-600">{t.faq.subtitle}</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
