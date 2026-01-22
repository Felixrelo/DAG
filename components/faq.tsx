"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Was kostet ein Umzug?", answer: "Die Kosten hängen von verschiedenen Faktoren ab: Wohnungsgröße, Entfernung und Zusatzleistungen. Fordern Sie ein kostenloses Angebot an." },
  { question: "Wie lange dauert ein Umzug?", answer: "Ein typischer Umzug einer 2-3 Zimmer Wohnung dauert ca. 4-6 Stunden. Bei größeren Wohnungen entsprechend länger." },
  { question: "Sind meine Möbel versichert?", answer: "Ja, alle Umzüge sind durch unsere Transportversicherung abgedeckt." },
  { question: "Bieten Sie auch Verpackungsmaterial an?", answer: "Ja, wir stellen Umzugskartons und Verpackungsmaterial zur Verfügung." },
  { question: "Wie früh sollte ich buchen?", answer: "Wir empfehlen 2-4 Wochen im Voraus zu buchen." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Häufige Fragen</h2>
          <p className="text-lg text-gray-600">Antworten auf die wichtigsten Fragen.</p>
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
