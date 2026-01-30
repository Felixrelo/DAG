"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { EntruempelungDialog } from "@/components/entruempelung-dialog";
import { FirmenumzugDialog } from "@/components/firmenumzug-dialog";
import { EinlagerungDialog } from "@/components/einlagerung-dialog";
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
      "Ein Umzug ist mehr als nur der Transport von Möbeln – es ist der Beginn eines neuen Lebensabschnitts. Bei DAG Dahoam Logistik verstehen wir das und behandeln Ihr Hab und Gut mit größter Sorgfalt. Als Ihr Umzugsunternehmen in Augsburg und ganz Bayern stehen wir Ihnen mit einem erfahrenen Team zur Seite, das jeden Privatumzug individuell plant und durchführt.",
      "Unser erfahrenes Team aus Augsburg übernimmt alle Aufgaben rund um Ihren Privatumzug: Von der kostenlosen Besichtigung über das professionelle Verpacken bis hin zur Möbelmontage in Ihrer neuen Wohnung. Wir bieten Ihnen einen Rundum-Service, der keine Wünsche offen lässt. Ob Wohnungsumzug, Hausumzug oder der Umzug aus einer WG – wir haben die passende Lösung für Sie.",
      "Als bayerisches Familienunternehmen legen wir großen Wert auf Zuverlässigkeit und persönlichen Service. Bei uns sind Sie keine Nummer – wir nehmen uns Zeit für Ihre individuellen Wünsche. Unsere Umzugshelfer sind geschult, freundlich und gehen sorgsam mit Ihrem Eigentum um.",
      "Was kostet ein Privatumzug in Augsburg? Diese Frage hören wir oft. Bei DAG Dahoam Logistik erhalten Sie nach der kostenlosen Besichtigung einen transparenten Festpreis – ohne versteckte Kosten. So wissen Sie von Anfang an, was Ihr Umzug kostet, und können entspannt planen.",
      "Unsere Leistungen beim Privatumzug umfassen: Demontage und Montage Ihrer Möbel, professionelles Verpacken von Geschirr, Gläsern und empfindlichen Gegenständen, den sicheren Transport mit modernen Umzugswagen, das Aufstellen und Einräumen am Zielort sowie auf Wunsch die Entsorgung von Verpackungsmaterial.",
      "Wir sind Ihr Umzugsunternehmen für Augsburg, München, Ingolstadt, Ulm und ganz Schwaben. Egal ob Sie innerhalb der Stadt umziehen oder in einen anderen Stadtteil wechseln – wir kennen die Region und wissen, worauf es ankommt. Vertrauen Sie auf unsere lokale Expertise und jahrelange Erfahrung im Umzugsgeschäft.",
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
      "Sie ziehen von Bayern in eine andere Stadt? Kein Problem! DAG Dahoam Logistik führt Fernumzüge in ganz Deutschland durch – professionell, pünktlich und zu fairen Preisen. Als erfahrenes Umzugsunternehmen aus Augsburg haben wir bereits hunderte Fernumzüge erfolgreich durchgeführt.",
      "Unsere erfahrenen Teams kennen sich bestens mit den Herausforderungen von Langstreckenumzügen aus. Wir planen Ihre Route optimal und sorgen dafür, dass Ihre Möbel sicher am Ziel ankommen. Dabei berücksichtigen wir Faktoren wie Verkehrslage, Ruhezeiten und die beste Anfahrt zu Ihrem neuen Zuhause.",
      "Auch bei Fernumzügen bieten wir Ihnen unseren bewährten Komplettservice: Verpackung, Transport, Möbelmontage und auf Wunsch auch Entrümpelung am alten Standort. Sie müssen sich um nichts kümmern – wir erledigen alles für Sie.",
      "Beliebte Fernumzugsstrecken unserer Kunden sind: Augsburg nach Berlin, München nach Hamburg, Ulm nach Köln, Ingolstadt nach Frankfurt und viele weitere Verbindungen in alle deutschen Großstädte. Egal wohin Ihr Weg Sie führt – wir bringen Sie sicher ans Ziel.",
      "Bei einem Fernumzug ist die richtige Planung entscheidend. Unsere Umzugsberater erstellen für Sie einen detaillierten Ablaufplan, koordinieren alle Termine und sorgen dafür, dass am Umzugstag alles reibungslos läuft. Sie erhalten von uns einen verbindlichen Festpreis, sodass Sie Ihr Budget sicher planen können.",
      "Ihre Möbel und Habseligkeiten sind während des gesamten Transports vollständig versichert. Unsere modernen Umzugsfahrzeuge sind mit Luftfederung ausgestattet und bieten optimalen Schutz für empfindliche Gegenstände. Polstermöbel werden in spezielle Schutzdecken gehüllt, Elektrogeräte transportsicher verpackt.",
      "Sie ziehen beruflich bedingt um? Viele Arbeitgeber übernehmen die Umzugskosten. Wir stellen Ihnen eine detaillierte Rechnung aus, die Sie bei Ihrem Arbeitgeber einreichen können. Gerne beraten wir Sie auch zu steuerlichen Aspekten beim Umzug.",
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
      "Ob Haushaltsauflösung, Kellerentrümpelung oder Nachlassverwertung – unser Team räumt zuverlässig und diskret für Sie auf. Als Entrümpelungsfirma in Augsburg und Umgebung sind wir Ihr kompetenter Partner für alle Räumungsarbeiten. Wir entrümpeln Wohnungen, Häuser, Keller, Dachböden, Garagen und Gewerberäume.",
      "Wir sortieren vor Ort, was noch verwendbar ist und was entsorgt werden muss. Brauchbare Gegenstände können wir auf Wunsch für Sie verkaufen oder spenden – der Erlös wird mit den Kosten verrechnet. So können Sie bei der Entrümpelung sogar Geld sparen.",
      "Nach der Entrümpelung übergeben wir die Räume besenrein. So können Sie oder Ihre Mieter direkt mit der Renovierung beginnen. Auf Wunsch übernehmen wir auch kleinere Renovierungsarbeiten wie Streichen oder Bodenbeläge entfernen.",
      "Wann ist eine professionelle Entrümpelung sinnvoll? Bei Haushaltsauflösungen nach einem Todesfall, beim Auszug aus einer Mietwohnung, bei der Vorbereitung eines Hausverkaufs, bei Messie-Wohnungen oder einfach wenn sich über die Jahre zu viel angesammelt hat. Wir gehen in jedem Fall sensibel und diskret vor.",
      "Die Kosten für eine Entrümpelung in Augsburg hängen von verschiedenen Faktoren ab: Größe der Räumlichkeiten, Menge des Entrümpelungsguts, Zugänglichkeit (Stockwerk, Aufzug vorhanden?) und Art der zu entsorgenden Gegenstände. Nach einer kostenlosen Besichtigung erhalten Sie von uns einen verbindlichen Festpreis.",
      "Wir entsorgen fachgerecht: Möbel, Elektrogeräte, Sperrmüll, Bauschutt, Gartenabfälle und vieles mehr. Dabei achten wir auf umweltgerechte Entsorgung und Recycling. Schadstoffe wie Farben, Lacke oder Chemikalien werden ordnungsgemäß bei den zuständigen Sammelstellen abgegeben.",
      "Unser Entrümpelungsservice in der Region: Wir entrümpeln in Augsburg, Friedberg, Königsbrunn, Stadtbergen, Gersthofen, Neusäß, Bobingen und im gesamten Landkreis Augsburg. Auch in München, Ulm und Ingolstadt sind wir für Sie im Einsatz.",
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
      "Nicht jeder hat Zeit oder Lust, Möbel selbst auf- und abzubauen. Unsere geschulten Monteure übernehmen das gerne für Sie – schnell, sauber und fachgerecht. Der Möbelaufbau-Service von DAG Dahoam Logistik ist die ideale Lösung für alle, die ihre Zeit sinnvoller nutzen möchten.",
      "Egal ob IKEA-Schrank, Einbauküche oder antiker Kleiderschrank: Wir haben das richtige Werkzeug und die Erfahrung für jeden Möbeltyp. Unsere Monteure kennen die Besonderheiten verschiedener Hersteller und wissen genau, worauf es beim Aufbau ankommt.",
      "Bei der Demontage achten wir besonders darauf, dass alle Teile beschädigungsfrei bleiben und später wieder korrekt zusammengebaut werden können. Schrauben, Dübel und Kleinteile werden sorgfältig sortiert und beschriftet, sodass beim Wiederaufbau nichts fehlt.",
      "Unsere Möbelmontage-Leistungen im Überblick: IKEA-Möbel aufbauen, Schlafzimmerschränke montieren, Küchen ab- und aufbauen, Betten und Boxspringbetten aufbauen, Regalsysteme installieren, Büromöbel montieren und vieles mehr.",
      "Wann lohnt sich ein professioneller Möbelaufbau? Wenn Sie neu gekaufte Möbel geliefert bekommen, beim Umzug in eine neue Wohnung, wenn die Zeit knapp ist oder wenn komplizierte Möbelstücke wie begehbare Kleiderschränke oder Einbauküchen montiert werden müssen.",
      "Die Kosten für die Möbelmontage richten sich nach Art und Anzahl der Möbelstücke sowie dem Zeitaufwand. Gerne erstellen wir Ihnen ein unverbindliches Angebot. In Kombination mit einem Umzug erhalten Sie attraktive Paketpreise.",
      "Unser Möbelmontage-Service ist in Augsburg und Umgebung verfügbar: Augsburg, München, Friedberg, Königsbrunn, Mering, Kissing, Dasing und im gesamten Großraum Augsburg-München. Flexible Terminvereinbarung auch am Wochenende möglich.",
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
      "Eine Halteverbotszone direkt vor Ihrer Tür spart Zeit, Nerven und Geld am Umzugstag. Wir übernehmen die komplette Beantragung bei der Stadt. Das Einrichten einer Halteverbotszone für Ihren Umzug ist in den meisten Fällen sinnvoll und oft günstiger als gedacht.",
      "Unser Service umfasst: Antragstellung bei der Behörde, Aufstellen der Schilder mindestens 3 Tage vorher sowie die Überwachung am Umzugstag. Sie müssen sich um nichts kümmern – wir erledigen alle Formalitäten für Sie.",
      "Falls doch mal ein Fahrzeug im Weg steht, kümmern wir uns darum – damit Ihr Umzug reibungslos ablaufen kann. Wir dokumentieren die Situation und veranlassen bei Bedarf das Abschleppen des Fahrzeugs.",
      "Warum eine Halteverbotszone beim Umzug? Ohne reservierten Parkplatz riskieren Sie, dass der Umzugswagen weit entfernt parken muss. Das bedeutet längere Laufwege, mehr Zeitaufwand und höhere Kosten. Mit einer Halteverbotszone ist der Platz direkt vor Ihrer Tür garantiert frei.",
      "So funktioniert die Beantragung: Sie nennen uns Ihre Adresse und den gewünschten Umzugstermin. Wir stellen den Antrag bei der zuständigen Behörde (in Augsburg beim Ordnungsamt). Nach Genehmigung stellen wir die Verkehrsschilder fristgerecht auf. Am Umzugstag kontrollieren wir die Zone.",
      "Die Kosten für eine Halteverbotszone setzen sich zusammen aus: Behördengebühren, Kosten für die Beschilderung und unserem Servicehonorar. In Augsburg liegen die Gesamtkosten je nach Länge der Zone zwischen 80 und 150 Euro – eine Investition, die sich durch den reibungslosen Ablauf schnell bezahlt macht.",
      "Wir richten Halteverbotszonen ein in: Augsburg (alle Stadtteile), Friedberg, Königsbrunn, Stadtbergen, Gersthofen, Neusäß, Bobingen, Schwabmünchen und weiteren Gemeinden im Landkreis Augsburg. Auch in München und Umgebung sind wir für Sie tätig.",
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
      "Manchmal passt der Auszugstermin nicht zum Einzugstermin. Kein Problem – wir lagern Ihre Möbel sicher zwischen. Unser Möbellager in Augsburg bietet Ihnen die perfekte Lösung für kurz- und langfristige Einlagerung.",
      "Unsere Lagerräume in Augsburg sind trocken, sauber und rund um die Uhr überwacht. Ihr Hab und Gut ist bei uns in besten Händen. Moderne Sicherheitstechnik mit Videoüberwachung und Alarmanlage schützt Ihre Möbel zuverlässig.",
      "Sie bestimmen die Lagerdauer – ob wenige Tage oder mehrere Monate. Wir sind flexibel und passen uns Ihren Bedürfnissen an. Es gibt keine Mindestlaufzeit, und Sie können Ihre Sachen jederzeit abholen oder erweitern.",
      "Wann ist eine Möbeleinlagerung sinnvoll? Bei zeitlicher Lücke zwischen Auszug und Einzug, während einer Renovierung oder eines Umbaus, bei einem längeren Auslandsaufenthalt, wenn die neue Wohnung kleiner ist als die alte, oder als dauerhafte Lösung für selten benötigte Gegenstände.",
      "Was kann eingelagert werden? Möbel aller Art, Hausrat und Kartons, Elektrogeräte und Elektronik, Sportgeräte wie Fahrräder oder Skiausrüstung, Saisonartikel wie Gartenmöbel oder Winterreifen, Akten und Dokumente für Unternehmen.",
      "Unser Einlagerungsservice beinhaltet: Abholung Ihrer Möbel, fachgerechtes Verpacken für die Lagerung, sichere Einlagerung in unseren Räumen, Inventarliste für Sie, Auslieferung zum Wunschtermin. Auf Wunsch bieten wir auch Selbsteinlagerung (Self Storage) an.",
      "Die Kosten für die Möbeleinlagerung richten sich nach dem benötigten Platz und der Lagerdauer. Wir berechnen fair nach Kubikmeter. Gerne erstellen wir Ihnen ein individuelles Angebot. Bei längerer Lagerung erhalten Sie attraktive Rabatte.",
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
      "Das Verpacken ist oft der zeitaufwändigste Teil eines Umzugs. Überlassen Sie diese Arbeit unseren Profis und sparen Sie wertvolle Zeit. Unser Verpackungsservice nimmt Ihnen die mühsame Arbeit ab und sorgt dafür, dass alles sicher am Ziel ankommt.",
      "Wir verwenden nur hochwertiges Verpackungsmaterial: stabile Umzugskartons, Luftpolsterfolie für Zerbrechliches und spezielle Hüllen für Kleidung und Matratzen. Jedes Material ist auf den jeweiligen Verwendungszweck abgestimmt.",
      "Jeder Karton wird beschriftet, damit Sie in der neuen Wohnung sofort wissen, was wo hingehört. So wird das Auspacken zum Kinderspiel. Auf Wunsch erstellen wir auch eine detaillierte Inventarliste für Sie.",
      "Was wir für Sie verpacken: Geschirr, Gläser und Porzellan (mit speziellem Packpapier), Bücher und Akten, Kleidung (in Kleiderboxen mit Kleiderstange), Elektrogeräte und Elektronik, Bilder und Kunstgegenstände, Lampen und Dekorationen, Pflanzen (in speziellen Transportbehältern).",
      "Unsere Verpackungsprofis arbeiten schnell und sorgfältig. Ein durchschnittlicher 3-Zimmer-Haushalt ist in etwa 4-6 Stunden vollständig verpackt. Sie können in der Zeit entspannen oder sich um andere wichtige Dinge kümmern.",
      "Verpackungsmaterial können Sie bei uns auch einzeln bestellen: Umzugskartons in verschiedenen Größen, Bücherkartons (extra stabil), Kleiderboxen mit Kleiderstange, Luftpolsterfolie und Packpapier, Klebeband und Marker, Matratzenhüllen und Möbeldecken.",
      "Nach dem Umzug holen wir das Verpackungsmaterial auf Wunsch wieder ab und entsorgen es fachgerecht. So müssen Sie sich um nichts kümmern. Umweltfreundlich: Unsere Kartons werden recycelt und wiederverwendet.",
    ],
    icon: Package,
  },
  firmenumzug: {
    title: "Firmenumzug",
    headline: "Professioneller Firmenumzug in Bayern",
    description: "Minimale Ausfallzeit, maximale Effizienz – wir ziehen Ihr Unternehmen um.",
    benefits: [
      "Minimale Betriebsunterbrechung",
      "IT-gerechter Transport",
      "Wochenend-Umzüge möglich",
      "Komplette Projektplanung",
    ],
    content: [
      "Ein Firmenumzug erfordert präzise Planung und professionelle Durchführung. Bei DAG Dahoam Logistik sind wir auf Büro- und Gewerbeumzüge spezialisiert. Als erfahrenes Umzugsunternehmen für Firmen in Augsburg und Bayern wissen wir, worauf es ankommt.",
      "Wir koordinieren den kompletten Umzug so, dass Ihre Betriebsabläufe möglichst wenig gestört werden. Auf Wunsch führen wir den Umzug auch am Wochenende oder nachts durch. So können Ihre Mitarbeiter am Montag direkt am neuen Standort weiterarbeiten.",
      "Sensible IT-Ausstattung, Server und Büromöbel werden fachgerecht demontiert, transportiert und am neuen Standort wieder aufgebaut. Ihr Team kann direkt weiterarbeiten. Wir arbeiten eng mit Ihrem IT-Team zusammen, um einen reibungslosen Übergang zu gewährleisten.",
      "Unsere Firmenumzug-Leistungen: Detaillierte Umzugsplanung und Projektmanagement, Demontage und Montage von Büromöbeln, IT-gerechter Transport von Computern und Servern, Einrichtung der Arbeitsplätze am neuen Standort, Entsorgung alter Möbel und Geräte, Reinigung der alten Räume.",
      "Welche Unternehmen vertrauen uns? Vom kleinen Start-up bis zum mittelständischen Unternehmen – wir haben Erfahrung mit Firmenumzügen jeder Größe. Arztpraxen, Kanzleien, Agenturen, Handwerksbetriebe und viele weitere Branchen zählen zu unseren zufriedenen Kunden.",
      "Die Kosten für einen Firmenumzug hängen von vielen Faktoren ab: Größe des Unternehmens, Menge der Möbel und Geräte, Entfernung zwischen den Standorten, gewünschter Zeitrahmen. Nach einer Vor-Ort-Besichtigung erstellen wir Ihnen ein detailliertes Angebot mit Festpreis.",
      "Unser Einzugsgebiet für Firmenumzüge: Augsburg, München, Ingolstadt, Ulm, Donauwörth, Landsberg am Lech und ganz Schwaben. Auch Fernumzüge für Unternehmen führen wir deutschlandweit durch. Sprechen Sie uns an – wir finden eine Lösung für Ihren Firmenumzug.",
    ],
    icon: Building2,
  },
};

export default function ServicePage() {
  const params = useParams();
  const serviceSlug = params.service as string;
  const service = serviceData[serviceSlug];
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";
  const ctaUrl = brandConfig.cta?.primary?.url || "https://funnel.relofair.com";

  const [entruempelungOpen, setEntruempelungOpen] = useState(false);
  const [firmenumzugOpen, setFirmenumzugOpen] = useState(false);
  const [einlagerungOpen, setEinlagerungOpen] = useState(false);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const hasCustomDialog = serviceSlug === "entruempelung" || serviceSlug === "firmenumzug" || serviceSlug === "einlagerung";

  const handleCtaClick = () => {
    if (serviceSlug === "entruempelung") {
      setEntruempelungOpen(true);
    } else if (serviceSlug === "firmenumzug") {
      setFirmenumzugOpen(true);
    } else if (serviceSlug === "einlagerung") {
      setEinlagerungOpen(true);
    }
  };

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
                {hasCustomDialog ? (
                  <button
                    onClick={handleCtaClick}
                    className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
                    style={{ color: primaryColor }}
                  >
                    Kostenlos anfragen <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <a
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
                    style={{ color: primaryColor }}
                  >
                    Kostenlos anfragen <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                )}
                <a
                  href={`tel:${brandConfig.company.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-lg transition-colors border-2 border-white text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" /> Jetzt anrufen
                </a>
              </div>

              {/* Google Rating */}
              <a
                href="https://share.google/vsxFjKz2x0A6nG8Zu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-white">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </a>
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
              {hasCustomDialog ? (
                <button
                  onClick={handleCtaClick}
                  className="inline-flex items-center justify-center text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  Kostenloses Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              ) : (
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  Kostenloses Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />

      <EntruempelungDialog isOpen={entruempelungOpen} onClose={() => setEntruempelungOpen(false)} />
      <FirmenumzugDialog isOpen={firmenumzugOpen} onClose={() => setFirmenumzugOpen(false)} />
      <EinlagerungDialog isOpen={einlagerungOpen} onClose={() => setEinlagerungOpen(false)} />
    </>
  );
}
