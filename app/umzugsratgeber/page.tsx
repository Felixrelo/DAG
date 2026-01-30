"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle, Download, Clock, Package, Truck, Home, FileText, Phone, Calendar, AlertCircle, ArrowRight } from "lucide-react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";

const timelineStepsDe = [
  {
    time: "8 Wochen vorher",
    tasks: [
      "Umzugstermin festlegen",
      "Umzugsunternehmen anfragen und vergleichen",
      "Urlaub für den Umzugstag beantragen",
      "Kündigung der alten Wohnung (Kündigungsfrist beachten)",
      "Entrümpeln: Was kann weg, was wird mitgenommen?",
      "Grundriss der neuen Wohnung besorgen",
    ],
  },
  {
    time: "6 Wochen vorher",
    tasks: [
      "Umzugsunternehmen beauftragen",
      "Halteverbotszone beantragen (lassen)",
      "Nachsendeauftrag bei der Post einrichten",
      "Sperrmülltermin vereinbaren",
      "Verpackungsmaterial besorgen oder bestellen",
      "Kinder/Haustiere für den Umzugstag organisieren",
    ],
  },
  {
    time: "4 Wochen vorher",
    tasks: [
      "Mit dem Packen beginnen (selten genutzte Sachen zuerst)",
      "Adressänderungen vorbereiten (Liste erstellen)",
      "Strom, Gas, Internet für neue Wohnung anmelden",
      "Alte Verträge kündigen bzw. ummelden",
      "Handwerker für neue Wohnung organisieren (falls nötig)",
      "Möbel ausmessen – passen sie in die neue Wohnung?",
    ],
  },
  {
    time: "2 Wochen vorher",
    tasks: [
      "Kühlschrank und Gefriertruhe leeren/abtauen planen",
      "Wertsachen und wichtige Dokumente separat packen",
      "Umzugshelfer final bestätigen",
      "Parkplatz/Halteverbot kontrollieren",
      "Schlüsselübergabe-Termine vereinbaren",
      "Lebensmittelvorräte aufbrauchen",
    ],
  },
  {
    time: "1 Woche vorher",
    tasks: [
      "Koffer für die ersten Tage packen (Kleidung, Hygieneartikel)",
      "Elektronik abbauen und Kabel beschriften",
      "Letzte Kartons packen",
      "Kühlschrank abtauen und reinigen",
      "Wohnungsübergabe alte Wohnung vorbereiten",
      "Bargeld für Trinkgeld/Verpflegung bereithalten",
    ],
  },
  {
    time: "Umzugstag",
    tasks: [
      "Zählerstände in alter und neuer Wohnung ablesen",
      "Wohnung vor dem Auszug fotografieren",
      "Umzugshelfer einweisen und koordinieren",
      "Verpflegung für alle Helfer bereitstellen",
      "Wohnungsübergabe mit Protokoll durchführen",
      "Alle Schlüssel übergeben und Übergabe dokumentieren",
    ],
  },
];

const timelineStepsEn = [
  {
    time: "8 Weeks Before",
    tasks: [
      "Set moving date",
      "Request and compare moving companies",
      "Request time off for moving day",
      "Cancel old apartment (observe notice period)",
      "Declutter: What goes, what stays?",
      "Get floor plan of new apartment",
    ],
  },
  {
    time: "6 Weeks Before",
    tasks: [
      "Hire moving company",
      "Apply for no-parking zone",
      "Set up mail forwarding",
      "Schedule bulky waste pickup",
      "Get or order packing materials",
      "Organize kids/pets for moving day",
    ],
  },
  {
    time: "4 Weeks Before",
    tasks: [
      "Start packing (rarely used items first)",
      "Prepare address changes (make a list)",
      "Register electricity, gas, internet for new apartment",
      "Cancel or transfer old contracts",
      "Organize handymen for new apartment (if needed)",
      "Measure furniture – will it fit in the new apartment?",
    ],
  },
  {
    time: "2 Weeks Before",
    tasks: [
      "Plan to empty/defrost fridge and freezer",
      "Pack valuables and important documents separately",
      "Confirm moving helpers",
      "Check parking/no-parking zone",
      "Schedule key handover appointments",
      "Use up food supplies",
    ],
  },
  {
    time: "1 Week Before",
    tasks: [
      "Pack suitcase for first days (clothes, toiletries)",
      "Disconnect electronics and label cables",
      "Pack last boxes",
      "Defrost and clean fridge",
      "Prepare old apartment handover",
      "Have cash ready for tips/refreshments",
    ],
  },
  {
    time: "Moving Day",
    tasks: [
      "Read meter readings in old and new apartment",
      "Photograph apartment before moving out",
      "Brief and coordinate moving helpers",
      "Provide refreshments for all helpers",
      "Conduct apartment handover with protocol",
      "Hand over all keys and document handover",
    ],
  },
];

const stepIcons = [Calendar, FileText, Package, Clock, Home, Truck];

const packingTipsDe = [
  { title: "Schwere Sachen in kleine Kartons", description: "Bücher und schwere Gegenstände gehören in kleine Kartons, damit sie tragbar bleiben." },
  { title: "Kartons beschriften", description: "Beschriften Sie jeden Karton mit Inhalt und Zielraum. Das spart beim Auspacken enorm Zeit." },
  { title: "Zerbrechliches polstern", description: "Verwenden Sie Zeitungspapier, Luftpolsterfolie oder Handtücher zum Polstern von Glas und Porzellan." },
  { title: "Kleidung in Müllsäcken", description: "Hängende Kleidung kann direkt vom Schrank in große Müllsäcke – spart Kartons und Zeit." },
  { title: "Schrauben in Tüten", description: "Schrauben und Kleinteile von Möbeln in beschriftete Tüten und am Möbelstück befestigen." },
  { title: "Erste-Nacht-Box packen", description: "Packen Sie eine Box mit allem, was Sie am ersten Abend brauchen: Bettwäsche, Handtücher, Ladekabel, Snacks." },
];

const packingTipsEn = [
  { title: "Heavy items in small boxes", description: "Books and heavy items belong in small boxes so they remain portable." },
  { title: "Label boxes", description: "Label each box with contents and destination room. This saves a lot of time when unpacking." },
  { title: "Cushion fragile items", description: "Use newspaper, bubble wrap, or towels to cushion glass and porcelain." },
  { title: "Clothes in garbage bags", description: "Hanging clothes can go directly from the closet into large garbage bags – saves boxes and time." },
  { title: "Screws in bags", description: "Put screws and small parts from furniture in labeled bags and attach to the furniture." },
  { title: "Pack a first-night box", description: "Pack a box with everything you need on the first evening: bedding, towels, chargers, snacks." },
];

const costFactorsDe = [
  { factor: "Wohnungsgröße", description: "Je mehr Zimmer, desto höher der Aufwand" },
  { factor: "Entfernung", description: "Lokalumzug vs. Fernumzug beeinflusst den Preis" },
  { factor: "Etage & Aufzug", description: "Hohe Stockwerke ohne Aufzug bedeuten mehr Arbeit" },
  { factor: "Zusatzleistungen", description: "Verpackung, Möbelmontage, Entrümpelung kosten extra" },
  { factor: "Zeitpunkt", description: "Monatsende und Sommer sind teurer als Nebensaison" },
];

const costFactorsEn = [
  { factor: "Apartment Size", description: "More rooms mean more effort" },
  { factor: "Distance", description: "Local vs. long-distance move affects the price" },
  { factor: "Floor & Elevator", description: "High floors without elevator mean more work" },
  { factor: "Additional Services", description: "Packing, furniture assembly, clearance cost extra" },
  { factor: "Timing", description: "End of month and summer are more expensive than off-season" },
];

export default function UmzugsratgeberPage() {
  const { t, language } = useLanguage();
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";
  const ctaUrl = brandConfig.cta?.primary?.url || "/angebot";

  const timelineSteps = language === "de" ? timelineStepsDe : timelineStepsEn;
  const packingTips = language === "de" ? packingTipsDe : packingTipsEn;
  const costFactors = language === "de" ? costFactorsDe : costFactorsEn;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}DD 100%)` }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.guide.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.guide.subtitle}
            </p>
            <a
              href="#checkliste"
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
              style={{ color: primaryColor }}
            >
              <Download className="h-5 w-5" />
              {t.guide.toChecklist}
            </a>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.guide.introTitle}</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>{t.guide.introText1}</p>
              <p>{t.guide.introText2}</p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50" id="checkliste">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.guide.checklistTitle}</h2>
              <p className="text-lg text-gray-600">{t.guide.checklistSubtitle}</p>
            </div>

            <div className="space-y-8">
              {timelineSteps.map((step, index) => {
                const Icon = stepIcons[index] || Calendar;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${primaryColor}15` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: primaryColor }} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.time}</h3>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: primaryColor }} />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Download CTA */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <Download className="h-12 w-12 mb-4" style={{ color: primaryColor }} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.guide.downloadTitle}</h3>
                <p className="text-gray-600 mb-4">{t.guide.downloadText}</p>
                <a
                  href="/downloads/umzugscheckliste.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Download className="h-5 w-5" />
                  {t.guide.downloadButton}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Packing Tips Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.guide.packingTitle}</h2>
              <p className="text-lg text-gray-600">{t.guide.packingSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {packingTips.map((tip, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.guide.costTitle}</h2>
              <p className="text-lg text-gray-600">{t.guide.costSubtitle}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <div className="space-y-4">
                {costFactors.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <span className="font-bold text-sm" style={{ color: primaryColor }}>{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.factor}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-1">{t.guide.costTip}</h4>
                  <p className="text-amber-800 text-sm">{t.guide.costTipText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing Moving Company */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.guide.chooseTitle}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>{t.guide.chooseIntro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" style={{ color: primaryColor }} />
                  {t.guide.lookFor}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {language === "de" ? (
                    <>
                      <li>• Transparente Preisgestaltung mit Festpreis</li>
                      <li>• Positive Bewertungen auf Google</li>
                      <li>• Transportversicherung vorhanden</li>
                      <li>• Kostenlose Vor-Ort-Besichtigung</li>
                      <li>• Professionelles Auftreten bei Anfragen</li>
                      <li>• Erfahrung und Referenzen</li>
                    </>
                  ) : (
                    <>
                      <li>• Transparent pricing with fixed price</li>
                      <li>• Positive reviews on Google</li>
                      <li>• Transport insurance available</li>
                      <li>• Free on-site inspection</li>
                      <li>• Professional approach to inquiries</li>
                      <li>• Experience and references</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  {t.guide.warnings}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {language === "de" ? (
                    <>
                      <li>• Kein schriftliches Angebot</li>
                      <li>• Ungewöhnlich niedrige Preise</li>
                      <li>• Keine Versicherung nachweisbar</li>
                      <li>• Vorkasse wird verlangt</li>
                      <li>• Keine feste Geschäftsadresse</li>
                      <li>• Schlechte oder keine Bewertungen</li>
                    </>
                  ) : (
                    <>
                      <li>• No written quote</li>
                      <li>• Unusually low prices</li>
                      <li>• No verifiable insurance</li>
                      <li>• Advance payment required</li>
                      <li>• No fixed business address</li>
                      <li>• Poor or no reviews</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* After Move Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.guide.afterTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">{t.guide.authorities}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {language === "de" ? (
                    <>
                      <li>• Ummeldung beim Einwohnermeldeamt (innerhalb 2 Wochen)</li>
                      <li>• Personalausweis & Führerschein aktualisieren</li>
                      <li>• Kfz ummelden (falls anderer Zulassungsbezirk)</li>
                      <li>• Hund anmelden (falls vorhanden)</li>
                    </>
                  ) : (
                    <>
                      <li>• Register at residents' office (within 2 weeks)</li>
                      <li>• Update ID card & driver's license</li>
                      <li>• Re-register vehicle (if different district)</li>
                      <li>• Register dog (if applicable)</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">{t.guide.addressChanges}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {language === "de" ? (
                    <>
                      <li>• Arbeitgeber informieren</li>
                      <li>• Bank und Versicherungen</li>
                      <li>• Krankenkasse</li>
                      <li>• Abos und Online-Shops</li>
                      <li>• Vereine und Mitgliedschaften</li>
                    </>
                  ) : (
                    <>
                      <li>• Inform employer</li>
                      <li>• Bank and insurance companies</li>
                      <li>• Health insurance</li>
                      <li>• Subscriptions and online shops</li>
                      <li>• Clubs and memberships</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: primaryColor }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{t.guide.readyTitle}</h2>
            <p className="text-xl text-white/90 mb-8">{t.guide.readySubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors"
                style={{ color: primaryColor }}
              >
                {t.cta.freeQuote} <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={`tel:${brandConfig.company.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {brandConfig.company.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
