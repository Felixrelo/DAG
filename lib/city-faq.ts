export type CityFaqItem = { question: string; answer: string };

// Builds city-specific FAQ entries (unique content per landing page = better SEO).
// Pure data helper — safe to import from both server and client components.
export function buildCityFaqs(city: {
  name: string;
  districts?: string[];
  nearby?: string[];
}): CityFaqItem[] {
  const name = city.name;
  const areaList = [...(city.districts || []), ...(city.nearby || [])]
    .slice(0, 6)
    .join(", ");
  const areaSentence = areaList
    ? `Wir sind in ganz ${name} und Umgebung unterwegs – unter anderem in ${areaList} und allen weiteren Stadtteilen.`
    : `Wir sind in ganz ${name} und im gesamten Umland für Sie im Einsatz.`;

  return [
    {
      question: `Was kostet ein Umzug in ${name}?`,
      answer: `Die Kosten für Ihren Umzug in ${name} hängen von Wohnungsgröße, Etage, Entfernung und den gewünschten Zusatzleistungen wie Verpackung oder Möbelmontage ab. Für eine 2-Zimmer-Wohnung beginnen die Preise in der Regel bei ca. 400–600 €. Nach einer kostenlosen Besichtigung – auf Wunsch per Video – erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Kosten.`,
    },
    {
      question: `Wie schnell können Sie meinen Umzug in ${name} durchführen?`,
      answer: `Ein typischer Umzug einer 2- bis 3-Zimmer-Wohnung in ${name} dauert etwa 4–6 Stunden. Wir empfehlen, den Termin 2–4 Wochen im Voraus zu buchen, besonders zum Monatsende und in der Hauptsaison. Für kurzfristige Umzüge in ${name} finden wir aber meist trotzdem eine Lösung.`,
    },
    {
      question: `Übernehmen Sie die Halteverbotszone in ${name}?`,
      answer: `Ja. Eine Halteverbotszone reserviert den Parkplatz direkt vor Ihrer Tür für den Umzugswagen – gerade in den dicht bebauten Vierteln von ${name} spart das viel Zeit. Wir kümmern uns um die komplette Beantragung bei der Stadt ${name}, das Aufstellen der Schilder und die fristgerechte Abwicklung.`,
    },
    {
      question: `Sind meine Möbel beim Umzug in ${name} versichert?`,
      answer: `Ja, jeder Umzug ist über unsere Transportversicherung vollständig abgedeckt. Wir haften für Schäden, die während des Transports entstehen, und arbeiten mit geschultem Personal und professionellem Equipment, um Schäden von vornherein zu vermeiden.`,
    },
    {
      question: `Bieten Sie auch Entrümpelung und Einlagerung in ${name} an?`,
      answer: `Ja. Neben dem klassischen Umzug bieten wir in ${name} auch Entrümpelung, Haushaltsauflösung und sichere Einlagerung an. Unsere Lagerräume sind trocken, sauber und videoüberwacht – ideal für die Zeit zwischen zwei Wohnungen oder während einer Renovierung.`,
    },
    {
      question: `Führen Sie auch Firmen- und Büroumzüge in ${name} durch?`,
      answer: `Ja, wir sind auf Firmen- und Büroumzüge in ${name} spezialisiert und planen den Ablauf so, dass Ihre Ausfallzeiten minimal bleiben – auf Wunsch auch am Wochenende. IT-Equipment, Akten und Büromöbel transportieren wir sicher und bauen sie am neuen Standort wieder auf.`,
    },
    {
      question: `In welchen Stadtteilen von ${name} sind Sie tätig?`,
      answer: areaSentence,
    },
  ];
}
