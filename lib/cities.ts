export interface CityData {
  slug: string;
  name: string;
  state: string;
  population: string;
  area?: string;
  districts?: string[];
  /** Nearby towns we also serve – used for local-SEO copy and internal context. */
  nearby?: string[];
  /** Recognizable landmark shown in the hero image (used for alt text). */
  landmark?: string;
  /** Short, unique hero subline. */
  description: string;
  /** Longer, unique SEO body copy (rendered as paragraphs). */
  seoBody?: string[];
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  gallery?: string[];
}

export const cities: CityData[] = [
  {
    slug: "augsburg",
    name: "Augsburg",
    state: "Bayern",
    population: "300.000",
    nearby: ["Friedberg", "Stadtbergen", "Neusäß", "Gersthofen", "Königsbrunn", "Bobingen"],
    landmark: "Augsburger Rathaus und Perlachturm",
    description:
      "DAG Dahoam Logistik ist Ihr Umzugsunternehmen direkt aus Augsburg. Von Lechhausen über Pfersee bis Haunstetten kennen wir jede Straße – und bringen Sie zum Festpreis sicher in Ihr neues Zuhause.",
    seoBody: [
      "Als Augsburger Familienunternehmen sind wir seit über 11 Jahren in der Fuggerstadt und der gesamten Region Schwaben im Einsatz. Ob Studentenwohnung in der Innenstadt, Familienumzug in Göggingen oder ein kompletter Hausumzug ins Umland nach Friedberg, Stadtbergen oder Königsbrunn – wir planen jeden Umzug individuell und übernehmen auf Wunsch Verpackung, Möbelmontage und die Halteverbotszone.",
      "Augsburgs historische Altstadt mit ihren engen Gassen rund um Rathaus und Perlachturm fordert Umzugsteams immer wieder heraus. Dank ortskundiger Mitarbeiter, passendem Equipment und rechtzeitig reservierten Halteverbotszonen läuft Ihr Umzug in Augsburg trotzdem schnell und reibungslos – zum garantierten Festpreis und voll versichert.",
    ],
    metaTitle: "Umzugsunternehmen Augsburg - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Augsburg ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge aus Augsburg. Jetzt Angebot anfordern!",
    heroImage: "/images/augsburg-hero.webp",
    gallery: [
      "/images/augsburg-rathaus.jpg",
      "/images/augsburg-merkurbrunnen.webp",
      "/images/moving/mov-01.webp",
      "/images/moving/mov-04.webp",
      "/images/moving/mov-09.webp",
      "/images/moving/mov-12.webp",
    ],
  },
  {
    slug: "muenchen",
    name: "München",
    state: "Bayern",
    population: "1.5 Mio.",
    districts: [
      "Altstadt-Lehel", "Ludwigsvorstadt", "Maxvorstadt", "Schwabing", "Au-Haidhausen",
      "Sendling", "Neuhausen", "Bogenhausen", "Berg am Laim", "Trudering", "Riem", "Pasing", "Laim",
    ],
    nearby: ["Garching", "Unterhaching", "Ottobrunn", "Unterschleißheim", "Starnberg", "Germering"],
    landmark: "Marienplatz mit Neuem Rathaus und Frauenkirche",
    description:
      "Umzug in München – stressfrei zum Festpreis. Von Schwabing über Haidhausen bis Pasing kennen wir die Landeshauptstadt und ihre Tücken: enge Altbauten, knappe Parkplätze und volle Straßen.",
    seoBody: [
      "München ist eines der anspruchsvollsten Pflaster für einen Umzug in Deutschland. Hohe Altbauten ohne Aufzug in der Maxvorstadt, enge Hinterhöfe in der Au und Dauerstau auf dem Mittleren Ring verlangen Erfahrung und gute Planung. Genau die bringen wir mit: Unsere Teams sind in allen Stadtteilen von Altstadt-Lehel über Schwabing bis Trudering und Riem regelmäßig unterwegs.",
      "Für Ihren Umzug in München reservieren wir rechtzeitig eine Halteverbotszone direkt vor der Haustür, stellen bei Bedarf einen Möbellift bereit und übernehmen auf Wunsch den kompletten Auf- und Abbau Ihrer Möbel. So sparen Sie Zeit, Nerven und die leidige Parkplatzsuche – und zahlen dank Festpreisgarantie keinen Cent mehr als vereinbart.",
    ],
    metaTitle: "Umzugsunternehmen München - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in München ✓ Festpreisgarantie ✓ Halteverbotszone ✓ Komplett versichert. Privat- & Firmenumzüge in allen Stadtteilen. Jetzt Angebot anfordern!",
    heroImage: "/images/cities/muenchen-hero.webp",
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    state: "Bayern",
    population: "520.000",
    districts: ["Altstadt", "Gostenhof", "St. Johannis", "Ziegelstein", "Langwasser", "Maxfeld", "Schweinau"],
    nearby: ["Fürth", "Erlangen", "Stein", "Zirndorf", "Schwabach"],
    landmark: "Nürnberger Kaiserburg über der Altstadt",
    description:
      "Ihr Umzugsunternehmen in Nürnberg: Ob in der historischen Altstadt, im lebhaften Gostenhof oder in Langwasser – wir übernehmen Ihren Umzug komplett, sicher und zum Festpreis.",
    seoBody: [
      "Nürnberg verbindet mittelalterliche Altstadt mit moderner Metropolregion. Rund um Kaiserburg und Hauptmarkt sind die Gassen eng und die Parkmöglichkeiten knapp – in Vierteln wie St. Johannis oder Gostenhof dominieren sanierte Altbauten ohne Aufzug. Unsere ortskundigen Teams kennen diese Bedingungen und planen Ihren Umzug entsprechend vorausschauend.",
      "Vom Studentenumzug in Gostenhof über die Familienwohnung in Ziegelstein bis zum Büroumzug im Großraum Nürnberg-Fürth-Erlangen übernehmen wir alles aus einer Hand: Verpackung, Möbelmontage, Halteverbotszone und Transport – termingerecht, voll versichert und zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Nürnberg - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Nürnberg ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge in der Metropolregion. Jetzt anfragen!",
    heroImage: "/images/cities/nuernberg-hero.webp",
  },
  {
    slug: "regensburg",
    name: "Regensburg",
    state: "Bayern",
    population: "153.000",
    nearby: ["Neutraubling", "Lappersdorf", "Pentling", "Bad Abbach"],
    landmark: "Steinerne Brücke und Dom an der Donau",
    description:
      "Umzug in Regensburg – in der UNESCO-Welterbe-Altstadt und drumherum. Wir bringen Ihr Hab und Gut sicher durch enge Gassen ans Ziel, zum Festpreis und voll versichert.",
    seoBody: [
      "Regensburgs mittelalterliche Altstadt gehört zum UNESCO-Welterbe – wunderschön, aber für Umzüge eine echte Herausforderung. Enge Kopfsteinpflastergassen, Einbahnstraßen und denkmalgeschützte Häuser ohne Aufzug verlangen Fingerspitzengefühl und die richtige Ausrüstung. Unsere Teams sind genau darauf eingestellt und bewegen Ihre Möbel sicher durch jede Engstelle.",
      "Ob Wohnungsumzug nahe der Steinernen Brücke, Studentenumzug an der Universität oder Firmenumzug im Gewerbegebiet – wir organisieren Ihren kompletten Umzug in Regensburg inklusive Halteverbotszone, Verpackungsservice und Möbelmontage. Sie erhalten vorab ein verbindliches Festpreisangebot ohne versteckte Kosten.",
    ],
    metaTitle: "Umzugsunternehmen Regensburg - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Regensburg ✓ Festpreisgarantie ✓ Erfahrung in der Welterbe-Altstadt ✓ Komplett versichert. Jetzt kostenloses Angebot anfordern!",
    heroImage: "/images/cities/regensburg-hero.webp",
  },
  {
    slug: "ingolstadt",
    name: "Ingolstadt",
    state: "Bayern",
    population: "140.000",
    nearby: ["Gaimersheim", "Manching", "Großmehring", "Lenting"],
    landmark: "Neues Schloss und Kreuztor",
    description:
      "Ihr Umzugspartner in Ingolstadt: Von der historischen Altstadt bis in die modernen Wohngebiete rund um die Audi-Stadt organisieren wir Ihren Umzug komplett und zum Festpreis.",
    seoBody: [
      "Ingolstadt an der Donau wächst – als Audi-Standort zieht die Stadt viele Fach- und Führungskräfte an. Entsprechend häufig sind hier Umzüge aus anderen Städten oder ins Umland. Ob denkmalgeschützte Altstadt rund um Kreuztor und Neues Schloss oder Neubaugebiete am Stadtrand: Wir kennen Ingolstadt und planen Ihren Umzug passgenau.",
      "Wir übernehmen Privat- und Firmenumzüge in Ingolstadt komplett – inklusive Verpackung, Möbelmontage, Halteverbotszone und auf Wunsch Einlagerung. Auch für Fernumzüge, etwa beim beruflichen Wechsel nach oder von Ingolstadt, sind wir deutschlandweit für Sie unterwegs. Immer zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Ingolstadt - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Ingolstadt ✓ Festpreisgarantie ✓ Privat- & Firmenumzüge ✓ Komplett versichert. Auch Fernumzüge. Jetzt kostenloses Angebot anfordern!",
    heroImage: "/images/cities/ingolstadt-hero.webp",
  },
  {
    slug: "wuerzburg",
    name: "Würzburg",
    state: "Bayern",
    population: "130.000",
    nearby: ["Höchberg", "Veitshöchheim", "Rottendorf", "Gerbrunn"],
    landmark: "Festung Marienberg über dem Main",
    description:
      "Umzug in Würzburg – in der Studenten- und Weinstadt am Main. Ob enge Altstadtwohnung oder Haus im Grünen, wir bringen Sie sicher und zum Festpreis ans Ziel.",
    seoBody: [
      "Würzburg ist geprägt von der Universität, der barocken Residenz und steilen Hanglagen über dem Main. Gerade in den Altstadtvierteln und an den Weinberghängen sind die Zufahrten eng und die Treppen lang. Unsere Teams sind auf solche Bedingungen eingestellt und sorgen dafür, dass Ihre Möbel auch durch enge Treppenhäuser unbeschadet ins neue Zuhause kommen.",
      "Als Universitätsstadt zählt Würzburg viele Studierende und Berufseinsteiger – für sie organisieren wir schnelle, günstige Umzüge zum Festpreis. Genauso übernehmen wir Familien- und Firmenumzüge in Würzburg und Umgebung, komplett mit Verpackung, Möbelmontage und Halteverbotszone.",
    ],
    metaTitle: "Umzugsunternehmen Würzburg - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Würzburg ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Studenten-, Privat- & Firmenumzüge. Jetzt anfragen!",
    heroImage: "/images/cities/wuerzburg-hero.webp",
  },
  {
    slug: "frankfurt",
    name: "Frankfurt am Main",
    state: "Hessen",
    population: "760.000",
    districts: [
      "Innenstadt", "Sachsenhausen", "Bockenheim", "Nordend", "Westend",
      "Bornheim", "Höchst", "Niederrad", "Gallus", "Ostend",
    ],
    nearby: ["Offenbach", "Eschborn", "Bad Homburg", "Neu-Isenburg", "Oberursel"],
    landmark: "Frankfurter Skyline am Main",
    description:
      "Ihr Umzugsunternehmen in Frankfurt am Main. Zwischen Hochhäusern, dichtem Verkehr und engen Altbauvierteln planen wir Ihren Umzug professionell – zum Festpreis und voll versichert.",
    seoBody: [
      "Frankfurt ist Deutschlands internationalste Stadt: Bankenmetropole, Messestandort und Heimat zehntausender Zuzügler pro Jahr. Das macht Umzüge hier alltäglich – aber nicht einfach. Dichter Verkehr, knappe Parkplätze in Bornheim oder im Nordend und Hochhauswohnungen mit Aufzugsregeln verlangen genaue Planung. Wir koordinieren Ihren Umzug in Frankfurt zuverlässig vom ersten Karton bis zum Möbelaufbau.",
      "Ob Wohnungswechsel im Westend, Studentenumzug in Bockenheim oder internationaler Firmenumzug ins Bankenviertel – wir übernehmen alles aus einer Hand und sprechen auf Wunsch auch Englisch mit Ihren Mitarbeitern. Halteverbotszone, Verpackung und Versicherung inklusive, zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Frankfurt am Main - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Frankfurt am Main ✓ Festpreisgarantie ✓ Halteverbotszone ✓ Komplett versichert. Privat- & Firmenumzüge in allen Stadtteilen. Jetzt anfragen!",
    heroImage: "/images/cities/frankfurt-hero.webp",
  },
  {
    slug: "wiesbaden",
    name: "Wiesbaden",
    state: "Hessen",
    population: "280.000",
    districts: [
      "Mitte", "Westend", "Nordost", "Südost", "Biebrich",
      "Schierstein", "Dotzheim", "Klarenthal", "Kastel", "Kostheim",
    ],
    nearby: ["Mainz", "Taunusstein", "Hofheim", "Walluf", "Eltville"],
    landmark: "Kurhaus Wiesbaden",
    description:
      "Umzug in Wiesbaden – in der eleganten Landeshauptstadt von Hessen. Von den Gründerzeitvillen im Westend bis nach Biebrich übernehmen wir Ihren Umzug komplett und zum Festpreis.",
    seoBody: [
      "Wiesbaden ist bekannt für seine prachtvollen Gründerzeit- und Jugendstilhäuser. Diese eleganten Altbauten haben oft hohe Decken, schwere Türen und keine Aufzüge – ein anspruchsvolles Umfeld, in dem Erfahrung zählt. Unsere Teams gehen besonders sorgfältig mit Stuck, Parkett und wertvollem Mobiliar um und schützen alles fachgerecht für den Transport.",
      "Ob Umzug innerhalb Wiesbadens, über den Rhein nach Mainz oder in den Taunus – wir organisieren alles inklusive Verpackungsservice, Möbelmontage und Halteverbotszone. Diskret, termingerecht und voll versichert, mit einem verbindlichen Festpreis ohne böse Überraschungen.",
    ],
    metaTitle: "Umzugsunternehmen Wiesbaden - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Wiesbaden ✓ Festpreisgarantie ✓ Sorgfalt bei Altbau & Villa ✓ Komplett versichert. Privat- & Firmenumzüge. Jetzt Angebot anfordern!",
    heroImage: "/images/cities/wiesbaden-hero.webp",
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    state: "Baden-Württemberg",
    population: "635.000",
    districts: [
      "Mitte", "Nord", "Ost", "Süd", "West",
      "Bad Cannstatt", "Feuerbach", "Vaihingen", "Möhringen", "Zuffenhausen",
    ],
    nearby: ["Esslingen", "Ludwigsburg", "Fellbach", "Leinfelden-Echterdingen", "Waiblingen"],
    landmark: "Schlossplatz mit Neuem Schloss",
    description:
      "Ihr Umzugsunternehmen in Stuttgart – Spezialist für Kessellage und Hanglagen. Stäffele, enge Straßen und steile Zufahrten meistern wir routiniert, zum Festpreis und voll versichert.",
    seoBody: [
      "Kaum eine Großstadt ist topografisch so anspruchsvoll wie Stuttgart: Die berühmte Kessellage bedeutet steile Hanglagen, enge Serpentinen und die typischen „Stäffele\". Wohnungen in Stuttgart-Süd oder am Killesberg sind oft nur über lange Treppen erreichbar. Unsere Teams sind genau auf diese Bedingungen vorbereitet und setzen bei Bedarf einen Möbellift ein, damit Ihr Umzug zügig vorangeht.",
      "Ob Stadtwohnung in Mitte, Familienhaus in Vaihingen oder Firmenumzug im Großraum Stuttgart bis Esslingen und Ludwigsburg – wir übernehmen Ihren kompletten Umzug inklusive Verpackung, Möbelmontage und Halteverbotszone. Sie erhalten vorab Ihren garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Stuttgart - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Stuttgart ✓ Festpreisgarantie ✓ Erfahrung mit Hanglage & Stäffele ✓ Möbellift ✓ Komplett versichert. Jetzt kostenloses Angebot anfordern!",
    heroImage: "/images/cities/stuttgart-hero.webp",
  },
  {
    slug: "mannheim",
    name: "Mannheim",
    state: "Baden-Württemberg",
    population: "310.000",
    districts: [
      "Innenstadt", "Jungbusch", "Neckarau", "Lindenhof", "Schwetzingerstadt",
      "Oststadt", "Feudenheim", "Käfertal", "Vogelstang",
    ],
    nearby: ["Ludwigshafen", "Heidelberg", "Viernheim", "Weinheim", "Schwetzingen"],
    landmark: "Mannheimer Wasserturm",
    description:
      "Umzug in Mannheim – in der Quadratestadt zwischen Rhein und Neckar. Vom Jungbusch bis Feudenheim organisieren wir Ihren Umzug schnell, sicher und zum Festpreis.",
    seoBody: [
      "Mannheims berühmte Quadrate machen die Orientierung einzigartig – und das Umzugsumfeld dicht bebaut. In der Innenstadt und in Vierteln wie der Schwetzingerstadt ist Parkraum knapp, weshalb eine rechtzeitig beantragte Halteverbotszone Gold wert ist. Darum kümmern wir uns für Sie, genau wie um Verpackung und Möbelmontage.",
      "Als Teil der Metropolregion Rhein-Neckar führen wir Umzüge in Mannheim und ins direkte Umland nach Ludwigshafen, Heidelberg oder Weinheim durch. Ob kompakte Stadtwohnung, Familienhaus oder Büroumzug – Sie bekommen alles aus einer Hand, voll versichert und zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Mannheim - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Mannheim ✓ Festpreisgarantie ✓ Halteverbotszone ✓ Komplett versichert. Privat- & Firmenumzüge in der Region Rhein-Neckar. Jetzt anfragen!",
    heroImage: "/images/cities/mannheim-hero.webp",
  },
  {
    slug: "erfurt",
    name: "Erfurt",
    state: "Thüringen",
    population: "215.000",
    nearby: ["Weimar", "Arnstadt", "Sömmerda", "Apolda"],
    landmark: "Krämerbrücke",
    description:
      "Ihr Umzugsunternehmen in Erfurt, der Landeshauptstadt Thüringens. Von der mittelalterlichen Altstadt bis in die Plattenbauviertel übernehmen wir Ihren Umzug komplett und zum Festpreis.",
    seoBody: [
      "Erfurt besitzt eine der besterhaltenen mittelalterlichen Altstädte Deutschlands – mit der Krämerbrücke, engen Gassen und vielen Fachwerkhäusern ohne Aufzug. Für Umzüge in diesem historischen Umfeld braucht es Erfahrung und das passende Equipment. Gleichzeitig kennen wir die großen Wohngebiete im Erfurter Norden und Südosten ebenso gut.",
      "Wir übernehmen Privat- und Firmenumzüge in Erfurt und Umgebung – von Weimar bis Arnstadt – komplett mit Verpackung, Möbelmontage, Halteverbotszone und auf Wunsch Einlagerung. Termingerecht, voll versichert und mit einem verbindlichen Festpreis ohne versteckte Kosten.",
    ],
    metaTitle: "Umzugsunternehmen Erfurt - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Erfurt ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge in Thüringen. Jetzt Angebot anfordern!",
    heroImage: "/images/cities/erfurt-hero.webp",
  },
  {
    slug: "jena",
    name: "Jena",
    state: "Thüringen",
    population: "110.000",
    nearby: ["Weimar", "Stadtroda", "Kahla", "Bad Berka"],
    landmark: "JenTower am Markt",
    description:
      "Umzug in Jena – in der Universitäts- und Wissenschaftsstadt im Saaletal. Ob Studentenwohnung oder Familienumzug, wir bringen Sie zuverlässig und zum Festpreis ans Ziel.",
    seoBody: [
      "Jena ist Universitäts- und Hightech-Standort, geprägt von Optik-Industrie und vielen Studierenden. Die Stadt liegt eng im Saaletal, was steile Zufahrten und enge Wohnstraßen mit sich bringt. Vom WG-Zimmer in der Innenstadt bis zur Familienwohnung am Hang planen wir Ihren Umzug passgenau für die Gegebenheiten in Jena.",
      "Neben günstigen Studenten- und Privatumzügen übernehmen wir auch Büro- und Firmenumzüge für die Forschungs- und Technologieunternehmen der Region. Verpackung, Möbelmontage und Halteverbotszone gehören selbstverständlich dazu – alles zum garantierten Festpreis und voll versichert.",
    ],
    metaTitle: "Umzugsunternehmen Jena - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Jena ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Studenten-, Privat- & Firmenumzüge. Jetzt Angebot anfordern!",
    heroImage: "/images/cities/jena-hero.webp",
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    state: "Sachsen",
    population: "600.000",
    districts: [
      "Mitte", "West", "Alt-West", "Nordwest", "Nord",
      "Nordost", "Ost", "Südost", "Süd", "Südwest",
    ],
    nearby: ["Halle", "Markkleeberg", "Schkeuditz", "Taucha", "Markranstädt"],
    landmark: "Markt mit Altem Rathaus",
    description:
      "Ihr Umzugsunternehmen in Leipzig – einer der am schnellsten wachsenden Städte Deutschlands. In den Gründerzeitvierteln und drumherum organisieren wir Ihren Umzug zum Festpreis.",
    seoBody: [
      "Leipzig boomt: Kaum eine Stadt zieht so viele Neu-Leipziger an. Die typischen Gründerzeit-Altbauten in Plagwitz, Connewitz oder im Waldstraßenviertel sind beliebt – aber mit hohen Decken und langen Treppenhäusern ohne Aufzug auch eine Herausforderung beim Umzug. Unsere Teams kennen diese Häuser und arbeiten entsprechend sorgfältig.",
      "Ob Zuzug von außerhalb, Umzug innerhalb Leipzigs oder Firmenumzug – wir organisieren alles komplett, inklusive Halteverbotszone, Verpackungsservice und Möbelmontage. Auch für Fernumzüge nach oder von Leipzig sind wir deutschlandweit unterwegs. Immer mit garantiertem Festpreis und voller Versicherung.",
    ],
    metaTitle: "Umzugsunternehmen Leipzig - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Leipzig ✓ Festpreisgarantie ✓ Erfahrung mit Gründerzeit-Altbau ✓ Komplett versichert. Privat- & Firmenumzüge. Jetzt Angebot anfordern!",
    heroImage: "/images/cities/leipzig-hero.webp",
  },
  {
    slug: "dresden",
    name: "Dresden",
    state: "Sachsen",
    population: "555.000",
    districts: [
      "Altstadt", "Neustadt", "Pieschen", "Klotzsche", "Loschwitz",
      "Blasewitz", "Leuben", "Prohlis", "Plauen", "Cotta",
    ],
    nearby: ["Radebeul", "Freital", "Pirna", "Coswig", "Heidenau"],
    landmark: "Altstadt-Silhouette mit Frauenkirche an der Elbe",
    description:
      "Umzug in Dresden – in Elbflorenz zwischen barocker Altstadt und lebendiger Neustadt. Wir übernehmen Ihren Umzug komplett, sorgfältig und zum garantierten Festpreis.",
    seoBody: [
      "Dresden vereint barocke Pracht mit lebendigen Szenevierteln. In der Äußeren Neustadt reihen sich sanierte Gründerzeithäuser dicht aneinander, während die Villenviertel in Blasewitz und Loschwitz großzügige, aber empfindliche Altbauten bieten. Wir gehen mit wertvollem Mobiliar besonders sorgfältig um und schützen alles fachgerecht für den Transport.",
      "Vom Studentenumzug in der Neustadt über die Familienwohnung in Striesen bis zum Firmenumzug am Stadtrand übernehmen wir Ihren kompletten Umzug in Dresden und Umgebung. Halteverbotszone, Verpackung und Möbelmontage inklusive, voll versichert und zum verbindlichen Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Dresden - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Dresden ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge in allen Stadtteilen. Jetzt anfragen!",
    heroImage: "/images/cities/dresden-hero.webp",
  },
  {
    slug: "fuerth",
    name: "Fürth",
    state: "Bayern",
    population: "130.000",
    nearby: ["Nürnberg", "Erlangen", "Zirndorf", "Stein", "Oberasbach"],
    landmark: "Fürther Rathaus mit Turm",
    description:
      "Ihr Umzugsunternehmen in Fürth: In der Kleeblattstadt mit ihrer denkmalgeschützten Altstadt organisieren wir Ihren Umzug komplett und zum Festpreis.",
    seoBody: [
      "Fürth besitzt eine der denkmalreichsten Altstädte Bayerns – sanierte Sandsteinhäuser, enge Gassen und viele Wohnungen ohne Aufzug. Direkt benachbart zu Nürnberg und Erlangen ist Fürth Teil einer dynamischen Metropolregion, in der Umzüge an der Tagesordnung sind. Unsere ortskundigen Teams planen Ihren Umzug passend zu diesen Bedingungen.",
      "Ob Wohnungsumzug in der Südstadt, Familienumzug ins Umland oder Büroumzug – wir übernehmen alles aus einer Hand, inklusive Verpackung, Möbelmontage und Halteverbotszone. Termingerecht, voll versichert und zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Fürth - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Fürth ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge in der Metropolregion. Jetzt anfragen!",
    heroImage: "/images/cities/fuerth-hero.webp",
  },
  {
    slug: "erlangen",
    name: "Erlangen",
    state: "Bayern",
    population: "112.000",
    nearby: ["Nürnberg", "Fürth", "Herzogenaurach", "Baiersdorf"],
    landmark: "Erlanger Schloss und Schlossgarten",
    description:
      "Umzug in Erlangen – in der Universitäts- und Siemens-Stadt. Ob Studenten-, Privat- oder Firmenumzug, wir bringen Sie zuverlässig und zum Festpreis ans Ziel.",
    seoBody: [
      "Erlangen ist geprägt von der Friedrich-Alexander-Universität und als Medizin- und Technologiestandort von Siemens. Viele Studierende, Forschende und Fachkräfte ziehen jedes Jahr hierher – Umzüge gehören in Erlangen zum Alltag. Von der barocken Planstadt rund um den Schlossgarten bis zu den modernen Wohngebieten kennen wir die Stadt genau.",
      "Wir organisieren günstige Studentenumzüge ebenso wie Familien- und Firmenumzüge im Großraum Erlangen-Nürnberg-Fürth. Verpackung, Möbelmontage, Halteverbotszone und auf Wunsch Einlagerung gehören dazu – alles zum garantierten Festpreis und voll versichert.",
    ],
    metaTitle: "Umzugsunternehmen Erlangen - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Erlangen ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Studenten-, Privat- & Firmenumzüge. Jetzt anfragen!",
    heroImage: "/images/cities/erlangen-hero.webp",
  },
  {
    slug: "aschaffenburg",
    name: "Aschaffenburg",
    state: "Bayern",
    population: "72.000",
    districts: ["Innenstadt", "Damm", "Schweinheim", "Nilkheim", "Gailbach", "Obernau"],
    nearby: ["Hösbach", "Goldbach", "Stockstadt", "Mainaschaff", "Großostheim"],
    landmark: "Schloss Johannisburg am Main",
    description:
      "Ihr Umzugsunternehmen in Aschaffenburg – am bayerischen Untermain. Von der Innenstadt bis Schweinheim übernehmen wir Ihren Umzug komplett und zum Festpreis.",
    seoBody: [
      "Aschaffenburg liegt am Tor zum Spessart und ist als „Bayerisches Nizza\" bekannt. Die Lage am Main und die hügeligen Stadtteile wie Schweinheim oder Gailbach bringen enge Straßen und Hanglagen mit sich. Unsere Teams sind mit der Region rund um Schloss Johannisburg bestens vertraut und planen Ihren Umzug entsprechend.",
      "Ob Wohnungsumzug in der Innenstadt, Hausumzug nach Nilkheim oder Firmenumzug im Gewerbegebiet – wir übernehmen alles aus einer Hand, inklusive Verpackung, Möbelmontage und Halteverbotszone. Zum garantierten Festpreis, termingerecht und voll versichert.",
    ],
    metaTitle: "Umzugsunternehmen Aschaffenburg - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Aschaffenburg ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge am Untermain. Jetzt anfragen!",
    heroImage: "/images/cities/aschaffenburg-hero.webp",
  },
  {
    slug: "rosenheim",
    name: "Rosenheim",
    state: "Bayern",
    population: "65.000",
    nearby: ["Kolbermoor", "Stephanskirchen", "Raubling", "Bad Aibling", "Prien am Chiemsee"],
    landmark: "Mittertor in der Altstadt",
    description:
      "Umzug in Rosenheim – im Herzen des Oberlands zwischen München und den Alpen. Wir organisieren Ihren Privat- oder Firmenumzug komplett und zum Festpreis.",
    seoBody: [
      "Rosenheim verbindet alpenländisches Flair mit guter Anbindung an München. Die charakteristische Altstadt mit ihren Inn-Salzach-Bauten und Laubengängen rund um das Mittertor ist eng und denkmalgeschützt – ideal für Umzüge mit ortskundigem Team und passendem Equipment. Genau das bringen wir mit.",
      "Vom Wohnungsumzug in der Innenstadt über den Hausumzug ins Umland bis zum Firmenumzug übernehmen wir Ihren kompletten Umzug in Rosenheim und im gesamten Oberland. Auch Fernumzüge nach oder von München organisieren wir zuverlässig – immer zum garantierten Festpreis und voll versichert.",
    ],
    metaTitle: "Umzugsunternehmen Rosenheim - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Rosenheim ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge im Oberland. Jetzt anfragen!",
    heroImage: "/images/cities/rosenheim-hero.webp",
  },
  {
    slug: "freising",
    name: "Freising",
    state: "Bayern",
    population: "50.000",
    nearby: ["Neufahrn", "Hallbergmoos", "Moosburg", "Eching", "Garching"],
    landmark: "Freisinger Dom auf dem Domberg",
    description:
      "Ihr Umzugspartner in Freising – nördlich von München nahe dem Flughafen. Vom Domberg bis in die Neubaugebiete organisieren wir Ihren Umzug zum Festpreis.",
    seoBody: [
      "Freising ist eine der ältesten Städte Bayerns und liegt strategisch günstig nahe dem Flughafen München und der TU-Fakultät Weihenstephan. Die historische Altstadt am Fuße des Dombergs ist eng, während rundherum moderne Wohngebiete entstehen. Wir kennen beide Welten und planen Ihren Umzug entsprechend.",
      "Ob Studentenumzug in Weihenstephan, Familienumzug oder Firmenumzug im Umfeld des Flughafens – wir übernehmen alles komplett, inklusive Verpackung, Möbelmontage und Halteverbotszone. Termingerecht, voll versichert und zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Freising - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Freising ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge nahe München. Jetzt anfragen!",
    heroImage: "/images/cities/freising-hero.webp",
  },
  {
    slug: "dachau",
    name: "Dachau",
    state: "Bayern",
    population: "48.000",
    nearby: ["Karlsfeld", "Bergkirchen", "Hebertshausen", "Petershausen", "Markt Indersdorf"],
    landmark: "Schloss Dachau",
    description:
      "Umzug in Dachau – im Landkreis direkt nordwestlich von München. Von der Altstadt am Schlossberg bis in die Wohngebiete übernehmen wir Ihren Umzug zum Festpreis.",
    seoBody: [
      "Dachau ist eine beliebte Wohnstadt im Speckgürtel von München – gut angebunden über die S-Bahn und doch mit eigenem Charakter rund um die historische Altstadt und das Schloss. Viele Pendler ziehen hierher, weshalb Umzüge zwischen Dachau und München zu unseren häufigsten Aufträgen gehören.",
      "Wir übernehmen Ihren kompletten Privat- oder Firmenumzug in Dachau und Umgebung – mit Verpackung, Möbelmontage und Halteverbotszone. Ob Wohnung, ganzes Haus oder Büro: Sie erhalten vorab Ihren garantierten Festpreis, voll versichert und ohne versteckte Kosten.",
    ],
    metaTitle: "Umzugsunternehmen Dachau - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Dachau ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge nahe München. Jetzt anfragen!",
    heroImage: "/images/cities/dachau-hero.webp",
  },
  {
    slug: "fuerstenfeldbruck",
    name: "Fürstenfeldbruck",
    state: "Bayern",
    population: "38.000",
    districts: ["Innenstadt", "Buchenau", "Neulindach", "Puch"],
    nearby: ["Germering", "Olching", "Emmering", "Eichenau", "Maisach"],
    landmark: "Kloster Fürstenfeld",
    description:
      "Westlich von München gelegen, ist Fürstenfeldbruck fester Teil unseres Einsatzgebiets. Ob Privat- oder Firmenumzug – wir organisieren Ihren kompletten Umzug zum Festpreis.",
    seoBody: [
      "Fürstenfeldbruck im Münchner Westen ist als Pendlerstadt mit hoher Lebensqualität gefragt – rund um das barocke Kloster Fürstenfeld und entlang der Amper. Über die S-Bahn ist die Stadt eng mit München verbunden, weshalb Umzüge in beide Richtungen zu unserem Alltag gehören.",
      "Wir übernehmen Ihren kompletten Umzug in Fürstenfeldbruck mit Verpackung, Möbelmontage, Halteverbotszone und voller Versicherung – termingerecht und stressfrei. Ob Wohnung in Buchenau oder Haus am Stadtrand: Sie zahlen einen garantierten Festpreis ohne versteckte Kosten.",
    ],
    metaTitle: "Umzugsunternehmen Fürstenfeldbruck - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Fürstenfeldbruck ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge nahe München. Jetzt anfragen!",
    heroImage: "/images/cities/fuerstenfeldbruck-hero.webp",
  },
  {
    slug: "gersthofen",
    name: "Gersthofen",
    state: "Bayern",
    population: "23.000",
    nearby: ["Augsburg", "Neusäß", "Gablingen", "Langweid", "Stadtbergen"],
    landmark: "Gersthofen bei Augsburg",
    description:
      "Direkt nördlich von Augsburg gelegen, gehört Gersthofen zu unserer Heimatregion. Als lokaler Umzugspartner übernehmen wir Ihren Privat- oder Firmenumzug komplett zum Festpreis.",
    seoBody: [
      "Gersthofen grenzt unmittelbar an Augsburg und ist als Wohn- und Wirtschaftsstandort im Landkreis Augsburg fest etabliert. Als Augsburger Familienunternehmen sind wir hier praktisch vor der Haustür im Einsatz – mit kurzen Anfahrtswegen und genauer Ortskenntnis vom Ballonmuseum bis in die Wohngebiete.",
      "Vom Einpacken über den Transport bis zum Möbelaufbau übernehmen wir Ihren kompletten Umzug in Gersthofen. Ob Wohnung, Haus oder Büro – Sie erhalten einen garantierten Festpreis, voll versichert und ohne versteckte Kosten.",
    ],
    metaTitle: "Umzugsunternehmen Gersthofen - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Gersthofen ✓ Festpreisgarantie ✓ Lokal aus der Region Augsburg ✓ Komplett versichert. Privat- & Firmenumzüge. Jetzt anfragen!",
    heroImage: "/images/cities/gersthofen-hero.webp",
  },
  {
    slug: "garching",
    name: "Garching",
    state: "Bayern",
    population: "18.000",
    districts: ["Garching-Hochbrück", "Dirnismaning"],
    nearby: ["Unterschleißheim", "Ismaning", "Oberschleißheim", "Eching", "Freising"],
    landmark: "Garching bei München",
    description:
      "In Garching bei München, dem Forschungs- und Hochschulstandort, sind wir Ihr zuverlässiger Umzugspartner – für Privat- und Firmenumzüge zum Festpreis.",
    seoBody: [
      "Garching nördlich von München ist einer der bedeutendsten Wissenschaftsstandorte Deutschlands – mit dem Forschungscampus der TU München und zahlreichen Instituten. Viele Studierende, Forschende und internationale Fachkräfte ziehen hierher, was Umzüge in Garching besonders häufig macht.",
      "Wir führen Privat- und Firmenumzüge in Garching komplett und versichert durch – sorgfältig, termingerecht und zum Festpreis. Verpackung, Möbelmontage und Halteverbotszone gehören selbstverständlich dazu, auf Wunsch auch englischsprachige Betreuung für internationale Kunden.",
    ],
    metaTitle: "Umzugsunternehmen Garching - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Garching bei München ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge. Jetzt anfragen!",
    heroImage: "/images/cities/garching-hero.webp",
  },
  {
    slug: "germering",
    name: "Germering",
    state: "Bayern",
    population: "41.000",
    districts: ["Unterpfaffenhofen", "Nebel", "Harthaus"],
    nearby: ["Fürstenfeldbruck", "Puchheim", "Gröbenzell", "Gauting", "Planegg"],
    landmark: "Germering im Münchner Westen",
    description:
      "Germering im Landkreis Fürstenfeldbruck, westlich von München, gehört zu unserem Kerngebiet. Wir übernehmen Ihren kompletten Umzug zum garantierten Festpreis.",
    seoBody: [
      "Germering ist eine der größten Städte im Münchner Umland und über die S-Bahn bestens mit der Landeshauptstadt verbunden. Als beliebte Wohnstadt für Familien und Pendler gehören Umzüge zwischen Germering und München zu unseren häufigsten Aufträgen.",
      "Vom Haushaltsumzug in Unterpfaffenhofen bis zum Büroumzug übernehmen wir alles komplett – mit Verpackungsservice, Möbelmontage und voller Versicherung. Sie erhalten vorab Ihren garantierten Festpreis ohne versteckte Kosten.",
    ],
    metaTitle: "Umzugsunternehmen Germering - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Germering ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge nahe München. Jetzt anfragen!",
    heroImage: "/images/cities/germering-hero.webp",
  },
  {
    slug: "ottobrunn",
    name: "Ottobrunn",
    state: "Bayern",
    population: "22.000",
    nearby: ["Neubiberg", "Hohenbrunn", "Unterhaching", "Putzbrunn", "Höhenkirchen"],
    landmark: "Ottobrunn südöstlich von München",
    description:
      "Südöstlich von München gelegen, ist Ottobrunn fest in unserem Einsatzgebiet. Ob Wohnung, ganzes Haus oder Büro – wir führen Ihren Umzug komplett und zum Festpreis durch.",
    seoBody: [
      "Ottobrunn zählt zu den begehrtesten Wohnorten im Südosten Münchens – grün, ruhig und mit hoher Lebensqualität, dazu ein wichtiger Standort der Luft- und Raumfahrtindustrie. Viele Familien und Fachkräfte ziehen hierher, weshalb Umzüge in Ottobrunn und ins benachbarte München zu unserem Alltag gehören.",
      "Wir planen und führen Ihren Umzug komplett durch – termingerecht und voll versichert, ohne versteckte Kosten. Verpackung, Möbelmontage und Halteverbotszone inklusive, zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Ottobrunn - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Ottobrunn ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge nahe München. Jetzt anfragen!",
    heroImage: "/images/cities/ottobrunn-hero.webp",
  },
  {
    slug: "unterhaching",
    name: "Unterhaching",
    state: "Bayern",
    population: "25.000",
    nearby: ["Taufkirchen", "Ottobrunn", "Oberhaching", "Neubiberg", "Grünwald"],
    landmark: "Unterhaching im Münchner Süden",
    description:
      "Unterhaching im Münchner Süden ist eine unserer Stammregionen. Wir übernehmen Privat- und Firmenumzüge von A bis Z – inklusive Möbelmontage und Festpreisgarantie.",
    seoBody: [
      "Unterhaching liegt direkt südlich von München und ist über S-Bahn und Autobahn hervorragend angebunden. Als attraktive Wohngemeinde mit Blick Richtung Alpen zieht der Ort viele Familien an – Umzüge zwischen Unterhaching und München gehören zu unseren häufigsten Aufträgen.",
      "Wir übernehmen Ihren kompletten Umzug in Unterhaching inklusive Verpackung, Möbelmontage und Halteverbotszone – ohne versteckte Kosten und zum garantierten Festpreis. Ob Wohnung oder ganzes Haus: Ihr Hab und Gut ist bei uns voll versichert.",
    ],
    metaTitle: "Umzugsunternehmen Unterhaching - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Unterhaching ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge nahe München. Jetzt anfragen!",
    heroImage: "/images/cities/unterhaching-hero.webp",
  },
  {
    slug: "koenigsbrunn",
    name: "Königsbrunn",
    state: "Bayern",
    population: "28.000",
    nearby: ["Augsburg", "Bobingen", "Stadtbergen", "Haunstetten", "Mering"],
    landmark: "Königsbrunn bei Augsburg",
    description:
      "Südlich von Augsburg gelegen, gehört Königsbrunn zu unserer Heimatregion. Als lokales Umzugsunternehmen kümmern wir uns um Ihren kompletten Umzug zum garantierten Festpreis.",
    seoBody: [
      "Königsbrunn ist eine der größten Städte im Landkreis Augsburg und liegt nur wenige Minuten südlich der Fuggerstadt. Als Augsburger Familienunternehmen sind wir hier praktisch vor Ort – mit kurzen Wegen, genauer Ortskenntnis und schneller Verfügbarkeit.",
      "Ob Wohnungsumzug, Hausumzug oder Firmenumzug – wir kümmern uns um Ihren kompletten Umzug in Königsbrunn, sicher, termingerecht und voll versichert. Verpackung, Möbelmontage und Halteverbotszone inklusive, zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Königsbrunn - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Königsbrunn ✓ Festpreisgarantie ✓ Lokal aus der Region Augsburg ✓ Komplett versichert. Privat- & Firmenumzüge. Jetzt anfragen!",
    heroImage: "/images/cities/koenigsbrunn-hero.webp",
  },
  {
    slug: "unterschleissheim",
    name: "Unterschleißheim",
    state: "Bayern",
    population: "29.000",
    nearby: ["Garching", "Oberschleißheim", "Eching", "Ismaning", "Neufahrn"],
    landmark: "Unterschleißheim nördlich von München",
    description:
      "Unterschleißheim nördlich von München gehört zu unserem festen Einsatzgebiet. Vom kompletten Haushalt bis zum Büroumzug organisieren wir alles zum Festpreis.",
    seoBody: [
      "Unterschleißheim ist ein wachsender Wohn- und Wirtschaftsstandort im Münchner Norden, gut erreichbar über S-Bahn und Autobahn. Die Nähe zu Garching und zum Flughafen macht den Ort für Fachkräfte und Unternehmen attraktiv – und Umzüge entsprechend häufig.",
      "Wir organisieren Ihren kompletten Umzug in Unterschleißheim – mit Verpackungsservice, Möbelmontage und voller Versicherung, zum Festpreis. Ob Wohnung, Haus oder Büro: Sie zahlen genau den vereinbarten Preis, ohne versteckte Kosten.",
    ],
    metaTitle: "Umzugsunternehmen Unterschleißheim - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Unterschleißheim ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Privat- & Firmenumzüge nahe München. Jetzt anfragen!",
    heroImage: "/images/cities/unterschleissheim-hero.webp",
  },
  {
    slug: "starnberg",
    name: "Starnberg",
    state: "Bayern",
    population: "23.000",
    districts: ["Söcking", "Percha", "Perchting"],
    nearby: ["Gauting", "Tutzing", "Pöcking", "Berg", "Gilching"],
    landmark: "Starnberger See",
    description:
      "Am Starnberger See südwestlich von München sind wir Ihr Umzugspartner für anspruchsvolle Privat- und Firmenumzüge – diskret, sorgfältig und zum Festpreis.",
    seoBody: [
      "Starnberg am gleichnamigen See gehört zu den exklusivsten Wohnlagen Deutschlands. Großzügige Villen, hochwertiges Mobiliar und gepflegte Anwesen verlangen beim Umzug besondere Sorgfalt und Diskretion. Genau darauf sind unsere Teams eingestellt – mit fachgerechtem Schutz für Kunst, Antiquitäten und empfindliche Einrichtung.",
      "Ob Umzug innerhalb des Fünfseenlands, nach München oder deutschlandweit – wir übernehmen Ihren kompletten Umzug am Starnberger See, diskret, sorgfältig und voll versichert. Verpackung, Möbelmontage und Halteverbotszone inklusive, zum garantierten Festpreis.",
    ],
    metaTitle: "Umzugsunternehmen Starnberg - DAG Dahoam Logistik",
    metaDescription:
      "Umzugsunternehmen in Starnberg ✓ Festpreisgarantie ✓ Diskret & sorgfältig ✓ Komplett versichert. Hochwertige Privat- & Firmenumzüge. Jetzt anfragen!",
    heroImage: "/images/cities/starnberg-hero.webp",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
