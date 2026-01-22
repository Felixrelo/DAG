export type City = {
  name: string;
  slug: string;
  state?: string;
  population?: string;
  description?: string;
  districts?: string[];
  postalCodes?: string[];
};

export const cities: City[] = [
  {
    "name": "Augsburg",
    "slug": "augsburg",
    "description": "Professionelle Umzüge in Augsburg und Umgebung"
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
