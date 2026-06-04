"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { buildCityFaqs } from "@/lib/city-faq";

export { buildCityFaqs } from "@/lib/city-faq";
export type { CityFaqItem } from "@/lib/city-faq";

export function CityFaq({ city }: { city: { name: string; districts?: string[]; nearby?: string[] } }) {
  const faqs = buildCityFaqs(city);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Häufige Fragen zum Umzug in {city.name}
          </h2>
          <p className="text-lg text-gray-600">
            Alles Wichtige rund um Ihren Umzug in {city.name} – kurz und verständlich beantwortet.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
