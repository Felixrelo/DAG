"use client";

import { useParams, notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { CheckCircle, Phone, ArrowRight, Truck, Building2, Trash2, Wrench, ShieldCheck, Package, Warehouse, Users } from "lucide-react";
import brandConfig from "@/brand.json";

const serviceData: Record<string, {
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  content: string[];
  icon: any;
}> = {
  privatumzug: {
    title: "Privatumzug",
    headline: "Ihr stressfreier Privatumzug in Bayern",
    description: "Von der ersten Kiste bis zum letzten Möbelstück – wir kümmern uns um Ihren kompletten Umzug.",
    benefits: [
      "Komplettservice von A bis Z",
      "Professionelle Verpackung",
      "Möbelmontage inklusive",
      "Festpreisgarantie",
    ],
    content: [
      "Ein Umzug ist mehr als nur der Transport von Möbeln – es ist der Beginn eines neuen Lebensabschnitts. Bei DAG Dahoam Logistik verstehen wir das und behandeln Ihr Hab und Gut mit größter Sorgfalt.",
      "Unser erfahrenes Team aus Augsburg übernimmt alle Aufgaben rund um Ihren Privatumzug: Von der kostenlosen Besichtigung über das professionelle Verpacken bis hin zur Möbelmontage in Ihrer neuen Wohnung.",
      "Als bayerisches Familienunternehmen legen wir großen Wert auf Zuverlässigkeit und persönlichen Service. Bei uns sind Sie keine Nummer – wir nehmen uns Zeit für Ihre individuellen Wünsche.",
    ],
    icon: Truck,
  },
  fernumzug: {
    title: "Fernumzug",
    headline: "Deutschlandweite Umzüge aus Bayern",
    description: "Sicher und zuverlässig – wir bringen Sie überall hin, egal wie weit.",
    benefits: [
      "Deutschlandweite Umzüge",
      "Erfahrene Fernfahrer",
      "Lückenlose Transportversicherung",
      "Termingarantie",
    ],
    content: [
      "Sie ziehen von Bayern in eine andere Stadt? Kein Problem! DAG Dahoam Logistik führt Fernumzüge in ganz Deutschland durch – professionell, pünktlich und zu fairen Preisen.",
      "Unsere erfahrenen Teams kennen sich bestens mit den Herausforderungen von Langstreckenumzügen aus. Wir planen Ihre Route optimal und sorgen dafür, dass Ihre Möbel sicher am Ziel ankommen.",
      "Auch bei Fernumzügen bieten wir Ihnen unseren bewährten Komplettservice: Verpackung, Transport, Möbelmontage und auf Wunsch auch Entrümpelung am alten Standort.",
    ],
    icon: Truck,
  },
  entruempelung: {
    title: "Entrümpelung",
    headline: "Professionelle Entrümpelung in Augsburg",
    description: "Schnell, sauber und umweltgerecht – wir räumen für Sie auf.",
    benefits: [
      "Schnelle Terminvergabe",
      "Umweltgerechte Entsorgung",
      "Besenreine Übergabe",
      "Wertanrechnung möglich",
    ],
    content: [
      "Ob Haushaltsauflösung, Kellerentrümpelung oder Nachlassverwertung – unser Team räumt zuverlässig und diskret für Sie auf.",
      "Wir sortieren vor Ort, was noch verwendbar ist und was entsorgt werden muss. Brauchbare Gegenstände können wir auf Wunsch für Sie verkaufen oder spenden – der Erlös wird mit den Kosten verrechnet.",
      "Nach der Entrümpelung übergeben wir die Räume besenrein. So können Sie oder Ihre Mieter direkt mit der Renovierung beginnen.",
    ],
    icon: Trash2,
  },
  moebelmontage: {
    title: "Möbelmontage",
    headline: "Fachgerechte Möbelmontage vom Profi",
    description: "Aufbau und Abbau Ihrer Möbel – schnell, sicher und ohne Beschädigungen.",
    benefits: [
      "Professionelles Werkzeug",
      "Erfahrene Monteure",
      "Alle Möbelarten",
      "Beschädigungsfreie Demontage",
    ],
    content: [
      "Nicht jeder hat Zeit oder Lust, Möbel selbst auf- und abzubauen. Unsere geschulten Monteure übernehmen das gerne für Sie – schnell, sauber und fachgerecht.",
      "Egal ob IKEA-Schrank, Einbauküche oder antiker Kleiderschrank: Wir haben das richtige Werkzeug und die Erfahrung für jeden Möbeltyp.",
      "Bei der Demontage achten wir besonders darauf, dass alle Teile beschädigungsfrei bleiben und später wieder korrekt zusammengebaut werden können.",
    ],
    icon: Wrench,
  },
  halteverbotszone: {
    title: "Halteverbotszone",
    headline: "Halteverbotszone beantragen leicht gemacht",
    description: "Wir kümmern uns um die Genehmigung und Einrichtung Ihrer Halteverbotszone.",
    benefits: [
      "Komplette Abwicklung",
      "Behördenkontakte",
      "Rechtzeitige Aufstellung",
      "Überwachung am Umzugstag",
    ],
    content: [
      "Eine Halteverbotszone direkt vor Ihrer Tür spart Zeit, Nerven und Geld am Umzugstag. Wir übernehmen die komplette Beantragung bei der Stadt.",
      "Unser Service umfasst: Antragstellung bei der Behörde, Aufstellen der Schilder mindestens 3 Tage vorher sowie die Überwachung am Umzugstag.",
      "Falls doch mal ein Fahrzeug im Weg steht, kümmern wir uns darum – damit Ihr Umzug reibungslos ablaufen kann.",
    ],
    icon: ShieldCheck,
  },
  einlagerung: {
    title: "Einlagerung",
    headline: "Sichere Einlagerung für Ihre Möbel",
    description: "Flexible Zwischenlagerung in unseren trockenen und sicheren Lagerräumen.",
    benefits: [
      "Trockene Lagerräume",
      "24/7 Überwachung",
      "Flexible Laufzeiten",
      "Versicherter Lagerbestand",
    ],
    content: [
      "Manchmal passt der Auszugstermin nicht zum Einzugstermin. Kein Problem – wir lagern Ihre Möbel sicher zwischen.",
      "Unsere Lagerräume in Augsburg sind trocken, sauber und rund um die Uhr überwacht. Ihr Hab und Gut ist bei uns in besten Händen.",
      "Sie bestimmen die Lagerdauer – ob wenige Tage oder mehrere Monate. Wir sind flexibel und passen uns Ihren Bedürfnissen an.",
    ],
    icon: Warehouse,
  },
  verpackungsservice: {
    title: "Verpackungsservice",
    headline: "Professioneller Verpackungsservice",
    description: "Wir verpacken Ihren gesamten Hausrat sicher und transportsicher.",
    benefits: [
      "Hochwertiges Verpackungsmaterial",
      "Professionelle Techniken",
      "Beschriftung aller Kartons",
      "Zeitersparnis für Sie",
    ],
    content: [
      "Das Verpacken ist oft der zeitaufwändigste Teil eines Umzugs. Überlassen Sie diese Arbeit unseren Profis und sparen Sie wertvolle Zeit.",
      "Wir verwenden nur hochwertiges Verpackungsmaterial: stabile Umzugskartons, Luftpolsterfolie für Zerbrechliches und spezielle Hüllen für Kleidung und Matratzen.",
      "Jeder Karton wird beschriftet, damit Sie in der neuen Wohnung sofort wissen, was wo hingehört. So wird das Auspacken zum Kinderspiel.",
    ],
    icon: Package,
  },
};

export default function ServicePage() {
  const params = useParams();
  const serviceSlug = params.service as string;
  const service = serviceData[serviceSlug];
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";
  const ctaUrl = brandConfig.cta?.primary?.url || "https://funnel.relofair.com";

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative text-white py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/augsburg-hero.jpg')" }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${primaryColor}E6` }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <Icon className="h-8 w-8 text-sky-200" />
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20">
                  {service.title}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                {service.headline}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {service.benefits.slice(0, 3).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-sky-200" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
                  style={{ color: primaryColor }}
                >
                  Kostenlos anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href={`tel:${brandConfig.company.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-lg transition-colors border-2 border-white text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
                    <CheckCircle className="h-7 w-7" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{service.title} mit DAG Dahoam Logistik</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              {service.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl" style={{ backgroundColor: `${primaryColor}10` }}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jetzt unverbindlich anfragen</h3>
              <p className="text-gray-600 mb-6">
                Fordern Sie jetzt Ihr kostenloses Angebot an. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Kostenloses Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
