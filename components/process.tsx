"use client";

import { ClipboardList, Users, Truck, ArrowRight } from "lucide-react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";

const stepIcons = [ClipboardList, Users, Truck];

// Numbered circles variant (default)
function ProcessNumbered({ primaryColor, steps, language }: { primaryColor: string; steps: any[]; language: string }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, index) => {
        const Icon = stepIcons[index] || ClipboardList;
        return (
          <div key={index} className="text-center relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
            )}

            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
              <Icon className="h-8 w-8" style={{ color: primaryColor }} />
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center shadow-lg" style={{ backgroundColor: primaryColor }}>
                {index + 1}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}

// Timeline variant
function ProcessTimeline({ primaryColor, steps }: { primaryColor: string; steps: any[] }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = stepIcons[index] || ClipboardList;
            return (
              <div key={index} className="relative flex gap-6">
                {/* Circle with number */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-3 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5" style={{ color: primaryColor }} />
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Cards variant
function ProcessCards({ primaryColor, steps, language }: { primaryColor: string; steps: any[]; language: string }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, index) => {
        const Icon = stepIcons[index] || ClipboardList;
        return (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background number */}
            <div
              className="absolute -right-4 -top-4 text-8xl font-bold opacity-5"
              style={{ color: primaryColor }}
            >
              {index + 1}
            </div>

            <div className="relative z-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <Icon className="h-6 w-6" style={{ color: primaryColor }} />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-sm font-bold px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  {language === "de" ? `Schritt ${index + 1}` : `Step ${index + 1}`}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="h-6 w-6 text-gray-300" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Process() {
  const { t, language } = useLanguage();
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  // Get layout variant
  const processVariant = (brandConfig as any).layout?.variants?.process || "numbered";

  const steps = language === "de" ? [
    { title: "Online-Besichtigung", description: "Füllen Sie unseren Funnel aus und erhalten Sie direkt Ihren ersten Preis." },
    { title: "Beratung & Finalisierung", description: "Unsere Umzugsexperten besprechen alle Details und finalisieren Ihr Angebot." },
    { title: "Umzugstag & Fertig", description: "Wir kümmern uns um alles – Sie kommen stressfrei Dahoam an." },
  ] : [
    { title: "Online Inspection", description: "Fill out our form and receive your initial quote directly." },
    { title: "Consultation & Finalization", description: "Our moving experts discuss all details and finalize your quote." },
    { title: "Moving Day & Done", description: "We take care of everything – you arrive stress-free at your new home." },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.process.title}</h2>
          <p className="text-lg text-gray-600">{t.process.subtitle}</p>
        </div>

        {processVariant === "numbered" && <ProcessNumbered primaryColor={primaryColor} steps={steps} language={language} />}
        {processVariant === "timeline" && <ProcessTimeline primaryColor={primaryColor} steps={steps} />}
        {processVariant === "cards" && <ProcessCards primaryColor={primaryColor} steps={steps} language={language} />}
      </div>
    </section>
  );
}
