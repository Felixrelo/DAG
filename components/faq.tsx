"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const faqsDe = [
  { question: "Was kostet ein Umzug in Augsburg?", answer: "Die Kosten für einen Umzug in Augsburg hängen von verschiedenen Faktoren ab: Wohnungsgröße, Etage, Entfernung zum neuen Wohnort und gewünschte Zusatzleistungen wie Möbelmontage oder Verpackungsservice. Für eine 2-Zimmer-Wohnung in Augsburg beginnen die Preise bei ca. 400-600€. Wir erstellen Ihnen nach einer kostenlosen Besichtigung ein verbindliches Festpreisangebot ohne versteckte Kosten." },
  { question: "Wie lange dauert ein Umzug?", answer: "Ein typischer Umzug einer 2-3 Zimmer Wohnung in Augsburg dauert ca. 4-6 Stunden. Bei größeren Wohnungen, Häusern oder wenn zusätzliche Leistungen wie Möbelabbau und -aufbau gewünscht sind, kann es entsprechend länger dauern. Bei Fernumzügen planen wir in der Regel einen ganzen Tag ein." },
  { question: "Sind meine Möbel beim Umzug versichert?", answer: "Ja, alle Umzüge sind durch unsere Transportversicherung vollständig abgedeckt. Wir haften für alle Schäden, die während des Transports entstehen. Zusätzlich arbeiten wir mit professionellem Equipment und geschultem Personal, um Schäden von vornherein zu vermeiden." },
  { question: "Bieten Sie auch Verpackungsmaterial und Umzugskartons an?", answer: "Ja, wir stellen hochwertiges Verpackungsmaterial zur Verfügung: stabile Umzugskartons in verschiedenen Größen, Luftpolsterfolie, Packpapier, Klebeband und spezielle Kartons für Kleidung und Gläser. Auf Wunsch übernehmen wir auch das komplette Ein- und Auspacken für Sie." },
  { question: "Wie früh sollte ich meinen Umzug buchen?", answer: "Wir empfehlen, Ihren Umzug 2-4 Wochen im Voraus zu buchen. In der Hauptsaison (Frühjahr und Sommer) sowie zu Monatsenden ist die Nachfrage besonders hoch – hier sollten Sie möglichst früh anfragen. Für kurzfristige Umzüge finden wir aber meist auch eine Lösung." },
  { question: "Welche Gebiete in Bayern bedienen Sie?", answer: "Unser Hauptstandort ist Augsburg, von wo aus wir die gesamte Region bedienen: Friedberg, Königsbrunn, Stadtbergen, Gersthofen, Neusäß, Bobingen, Schwabmünchen, Mering und viele weitere Orte im Umkreis von 100km. Für Fernumzüge sind wir deutschlandweit im Einsatz – von Augsburg nach München, Berlin, Hamburg oder jede andere Stadt." },
  { question: "Was ist eine Halteverbotszone und brauche ich eine?", answer: "Eine Halteverbotszone reserviert Parkplätze direkt vor Ihrer Wohnung für den Umzugswagen. Das spart Zeit und Wege, besonders in der Augsburger Innenstadt oder dicht bebauten Wohngebieten. Wir kümmern uns um die komplette Beantragung bei der Stadt Augsburg, das Aufstellen der Schilder und die fristgerechte Abwicklung – Sie müssen sich um nichts kümmern." },
  { question: "Bieten Sie auch Entrümpelung und Haushaltsauflösung an?", answer: "Ja, wir bieten professionelle Entrümpelung und Haushaltsauflösung in Augsburg und Umgebung an. Ob Wohnung, Keller, Dachboden oder ganzes Haus – wir räumen schnell und gründlich. Brauchbare Gegenstände werden auf Wunsch gespendet, der Rest fachgerecht entsorgt. Sie erhalten vorab einen Festpreis." },
  { question: "Kann ich Möbel bei Ihnen einlagern?", answer: "Ja, wir bieten sichere Einlagerung in Augsburg an. Unsere Lagerräume sind trocken, sauber und videoüberwacht. Ideal für Möbel zwischen zwei Wohnungen, bei Renovierung oder wenn Sie temporär weniger Platz benötigen. Flexible Laufzeiten ab einem Monat möglich." },
  { question: "Führen Sie auch Firmenumzüge und Büroumzüge durch?", answer: "Ja, wir sind spezialisiert auf Firmenumzüge und Büroumzüge in Augsburg und Bayern. Wir planen den Umzug so, dass Ihre Ausfallzeiten minimal bleiben – auf Wunsch auch am Wochenende oder nachts. IT-Equipment, Akten und Büromöbel werden sicher transportiert und am neuen Standort wieder aufgebaut." },
  { question: "Was unterscheidet DAG Dahoam Logistik von anderen Umzugsunternehmen?", answer: "Als Augsburger Familienunternehmen kennen wir die Region wie unsere Westentasche. Bei uns bekommen Sie persönliche Beratung, faire Festpreise ohne versteckte Kosten und ein erfahrenes Team, das Ihren Umzug wie den eigenen behandelt. Mit über 11 Jahren Erfahrung und mehr als 2000 erfolgreichen Umzügen sind wir Ihr zuverlässiger Partner." },
  { question: "Helfen Sie auch beim Möbelaufbau und Möbelabbau?", answer: "Ja, unsere Möbelmontage gehört zu unseren Kernleistungen. Wir bauen Ihre Möbel in der alten Wohnung fachgerecht ab und in der neuen Wohnung wieder auf – inklusive Küchen, Schränke, Betten und komplexe Möbelsysteme. So ist Ihr neues Zuhause sofort bezugsfertig." },
];

const faqsEn = [
  { question: "How much does a move in Augsburg cost?", answer: "The cost of a move in Augsburg depends on various factors: apartment size, floor level, distance to the new location, and desired additional services such as furniture assembly or packing service. For a 2-room apartment in Augsburg, prices start at around 400-600€. After a free inspection, we provide you with a binding fixed price quote with no hidden costs." },
  { question: "How long does a move take?", answer: "A typical move for a 2-3 room apartment in Augsburg takes about 4-6 hours. For larger apartments, houses, or when additional services like furniture disassembly and assembly are required, it may take longer. For long-distance moves, we usually plan for a full day." },
  { question: "Are my belongings insured during the move?", answer: "Yes, all moves are fully covered by our transport insurance. We are liable for all damage that occurs during transport. Additionally, we work with professional equipment and trained staff to prevent damage from the start." },
  { question: "Do you provide packing materials and moving boxes?", answer: "Yes, we provide high-quality packing materials: sturdy moving boxes in various sizes, bubble wrap, packing paper, tape, and special boxes for clothing and glassware. On request, we also handle the complete packing and unpacking for you." },
  { question: "How early should I book my move?", answer: "We recommend booking your move 2-4 weeks in advance. During peak season (spring and summer) and at the end of months, demand is particularly high – you should inquire as early as possible. However, we usually find a solution for short-notice moves as well." },
  { question: "Which areas in Bavaria do you serve?", answer: "Our main location is Augsburg, from where we serve the entire region: Friedberg, Königsbrunn, Stadtbergen, Gersthofen, Neusäß, Bobingen, Schwabmünchen, Mering, and many other locations within a 100km radius. For long-distance moves, we operate throughout Germany – from Augsburg to Munich, Berlin, Hamburg, or any other city." },
  { question: "What is a no-parking zone and do I need one?", answer: "A no-parking zone reserves parking spaces directly in front of your apartment for the moving truck. This saves time and effort, especially in Augsburg city center or densely built residential areas. We handle the complete application with the city of Augsburg, setting up the signs, and timely processing – you don't have to worry about anything." },
  { question: "Do you offer clearance and house clearance services?", answer: "Yes, we offer professional clearance and house clearance in Augsburg and the surrounding area. Whether apartment, basement, attic, or entire house – we clear quickly and thoroughly. Usable items can be donated upon request, the rest is disposed of properly. You receive a fixed price in advance." },
  { question: "Can I store furniture with you?", answer: "Yes, we offer secure storage in Augsburg. Our storage rooms are dry, clean, and video-monitored. Ideal for furniture between two apartments, during renovation, or when you temporarily need less space. Flexible terms starting from one month are available." },
  { question: "Do you also handle office moves and company relocations?", answer: "Yes, we specialize in company moves and office relocations in Augsburg and Bavaria. We plan the move to minimize your downtime – on weekends or at night if desired. IT equipment, files, and office furniture are safely transported and reassembled at the new location." },
  { question: "What sets DAG Dahoam Logistik apart from other moving companies?", answer: "As an Augsburg family business, we know the region like the back of our hand. With us, you get personal advice, fair fixed prices with no hidden costs, and an experienced team that treats your move like their own. With over 11 years of experience and more than 2000 successful moves, we are your reliable partner." },
  { question: "Do you help with furniture assembly and disassembly?", answer: "Yes, furniture assembly is one of our core services. We professionally disassemble your furniture in the old apartment and reassemble it in the new one – including kitchens, wardrobes, beds, and complex furniture systems. This way, your new home is ready to move into immediately." },
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
