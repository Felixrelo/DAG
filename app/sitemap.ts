import type { MetadataRoute } from 'next';
import { cities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dag-logistik.de';

  // Static pages
  const staticPages = [
    '',
    '/angebot',
    '/privatumzug',
    '/firmenumzug',
    '/entruempelung',
    '/moebelmontage',
    '/halteverbotszone',
    '/impressum',
    '/datenschutz',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // City pages
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/staedte/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages];
}
