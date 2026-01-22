export interface CityData {
  slug: string;
  name: string;
  state: string;
  population: string;
  area?: string;
  districts?: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const cities: CityData[] = [
  {
    "slug": "augsburg",
    "name": "Augsburg",
    "state": "Bayern",
    "population": "300.000",
    "description": "Als Ihr lokaler Umzugspartner direkt vor Ort kennen wir Augsburg und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Augsburg - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Augsburg. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "muenchen",
    "name": "München",
    "state": "Bayern",
    "population": "1.5 Mio.",
    "districts": [
      "Altstadt-Lehel",
      "Ludwigsvorstadt",
      "Maxvorstadt",
      "Schwabing",
      "Au-Haidhausen",
      "Sendling",
      "Neuhausen",
      "Bogenhausen",
      "Berg am Laim",
      "Trudering",
      "Riem",
      "Pasing",
      "Laim"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir München und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen München - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in München. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "nuernberg",
    "name": "Nürnberg",
    "state": "Bayern",
    "population": "520.000",
    "districts": [
      "Altstadt",
      "Gostenhof",
      "St. Johannis",
      "Ziegelstein",
      "Langwasser",
      "Maxfeld",
      "Schweinau"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir Nürnberg und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Nürnberg - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Nürnberg. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "regensburg",
    "name": "Regensburg",
    "state": "Bayern",
    "population": "153.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Regensburg und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Regensburg - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Regensburg. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "ingolstadt",
    "name": "Ingolstadt",
    "state": "Bayern",
    "population": "140.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Ingolstadt und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Ingolstadt - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Ingolstadt. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "wuerzburg",
    "name": "Würzburg",
    "state": "Bayern",
    "population": "130.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Würzburg und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Würzburg - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Würzburg. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "frankfurt",
    "name": "Frankfurt am Main",
    "state": "Hessen",
    "population": "760.000",
    "districts": [
      "Innenstadt",
      "Sachsenhausen",
      "Bockenheim",
      "Nordend",
      "Westend",
      "Bornheim",
      "Höchst",
      "Niederrad",
      "Gallus",
      "Ostend"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir Frankfurt am Main und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Frankfurt am Main - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Frankfurt am Main. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "wiesbaden",
    "name": "Wiesbaden",
    "state": "Hessen",
    "population": "280.000",
    "districts": [
      "Mitte",
      "Westend",
      "Nordost",
      "Südost",
      "Biebrich",
      "Schierstein",
      "Dotzheim",
      "Klarenthal",
      "Kastel",
      "Kostheim"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir Wiesbaden und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Wiesbaden - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Wiesbaden. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "stuttgart",
    "name": "Stuttgart",
    "state": "Baden-Württemberg",
    "population": "635.000",
    "districts": [
      "Mitte",
      "Nord",
      "Ost",
      "Süd",
      "West",
      "Bad Cannstatt",
      "Feuerbach",
      "Vaihingen",
      "Möhringen",
      "Zuffenhausen"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir Stuttgart und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Stuttgart - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Stuttgart. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "mannheim",
    "name": "Mannheim",
    "state": "Baden-Württemberg",
    "population": "310.000",
    "districts": [
      "Innenstadt",
      "Jungbusch",
      "Neckarau",
      "Lindenhof",
      "Schwetzingerstadt",
      "Oststadt",
      "Feudenheim",
      "Käfertal",
      "Vogelstang"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir Mannheim und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Mannheim - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Mannheim. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "erfurt",
    "name": "Erfurt",
    "state": "Thüringen",
    "population": "215.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Erfurt und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Erfurt - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Erfurt. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "jena",
    "name": "Jena",
    "state": "Thüringen",
    "population": "110.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Jena und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Jena - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Jena. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "leipzig",
    "name": "Leipzig",
    "state": "Sachsen",
    "population": "600.000",
    "districts": [
      "Mitte",
      "West",
      "Alt-West",
      "Nordwest",
      "Nord",
      "Nordost",
      "Ost",
      "Südost",
      "Süd",
      "Südwest"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir Leipzig und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Leipzig - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Leipzig. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "dresden",
    "name": "Dresden",
    "state": "Sachsen",
    "population": "555.000",
    "districts": [
      "Altstadt",
      "Neustadt",
      "Pieschen",
      "Klotzsche",
      "Loschwitz",
      "Blasewitz",
      "Leuben",
      "Prohlis",
      "Plauen",
      "Cotta"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir Dresden und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Dresden - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Dresden. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "fuerth",
    "name": "Fürth",
    "state": "Bayern",
    "population": "130.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Fürth und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Fürth - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Fürth. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "erlangen",
    "name": "Erlangen",
    "state": "Bayern",
    "population": "112.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Erlangen und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Erlangen - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Erlangen. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "aschaffenburg",
    "name": "Aschaffenburg",
    "state": "Bayern",
    "population": "72.000",
    "districts": [
      "Innenstadt",
      "Damm",
      "Schweinheim",
      "Nilkheim",
      "Gailbach",
      "Obernau"
    ],
    "description": "Als Ihr  Umzugspartner  kennen wir Aschaffenburg und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Aschaffenburg - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Aschaffenburg. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "rosenheim",
    "name": "Rosenheim",
    "state": "Bayern",
    "population": "65.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Rosenheim und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Rosenheim - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Rosenheim. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "freising",
    "name": "Freising",
    "state": "Bayern",
    "population": "50.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Freising und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Freising - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Freising. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  },
  {
    "slug": "dachau",
    "name": "Dachau",
    "state": "Bayern",
    "population": "48.000",
    "description": "Als Ihr  Umzugspartner  kennen wir Dachau und Umgebung bestens. Professionelle Umzüge zum Festpreis – sicher, schnell und zuverlässig.",
    "metaTitle": "Umzugsunternehmen Dachau - DAG Dahoam Logistik",
    "metaDescription": "Professionelle Umzüge in Dachau. ✓ Festpreisgarantie ✓ Kostenlose Besichtigung ✓ Komplett versichert. Jetzt Angebot anfordern!"
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
