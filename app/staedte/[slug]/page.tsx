import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Stats } from "@/components/stats";
import { Trust } from "@/components/trust";
import { Process } from "@/components/process";
import { Reviews } from "@/components/reviews";
import { CityFaq } from "@/components/city-faq";
import { buildCityFaqs } from "@/lib/city-faq";
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/cities";
import brandConfig from "@/brand.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Reusable, brand-neutral German moving-scene library (see scripts/gen-city-images.mjs)
const MOVING_LIBRARY = [
  "/images/moving/mov-01.webp",
  "/images/moving/mov-02.webp",
  "/images/moving/mov-03.webp",
  "/images/moving/mov-04.webp",
  "/images/moving/mov-05.webp",
  "/images/moving/mov-06.webp",
];

// Pick a stable, varied pair of moving images per city (so neighbours differ).
function movingPair(slug: string): string[] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const a = h % MOVING_LIBRARY.length;
  const b = (a + 2) % MOVING_LIBRARY.length;
  return [MOVING_LIBRARY[a], MOVING_LIBRARY[b]];
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/staedte/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      images: city.heroImage ? [{ url: city.heroImage }] : undefined,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#1E4785";
  const ctaUrl = "/angebot";
  const services = brandConfig.services || [];
  const serviceImages: Record<string, string> = (brandConfig as any).media?.serviceImages || {};
  const heroImage = city.heroImage || "/images/cities/muenchen-hero.webp";

  // Gallery: landmark + two authentic moving scenes (or the city's own photo set).
  const galleryImages =
    city.gallery && city.gallery.length >= 3
      ? city.gallery
      : [heroImage, ...movingPair(city.slug)];

  const trustBadges = ["Kostenlose Besichtigung", "Festpreisgarantie", "100% Versichert"];

  // Structured data for SEO (LocalBusiness + FAQ + Breadcrumb).
  const faqs = buildCityFaqs(city);
  const phone = brandConfig.company.phone;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        name: `${brandConfig.company.name} – Umzüge in ${city.name}`,
        description: city.metaDescription,
        telephone: phone,
        email: brandConfig.company.email,
        url: `https://www.dag-logistik.de/staedte/${city.slug}`,
        image: `https://www.dag-logistik.de${heroImage}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: brandConfig.company.address.street,
          addressLocality: brandConfig.company.address.city,
          postalCode: brandConfig.company.address.postalCode,
          addressRegion: brandConfig.company.address.state,
          addressCountry: "DE",
        },
        areaServed: { "@type": "City", name: city.name },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: (brandConfig as any).reviews?.averageRating || 4.9,
          reviewCount: (brandConfig as any).reviews?.totalReviews || 50,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.dag-logistik.de/" },
          { "@type": "ListItem", position: 2, name: "Städte", item: "https://www.dag-logistik.de/staedte" },
          { "@type": "ListItem", position: 3, name: city.name, item: `https://www.dag-logistik.de/staedte/${city.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative text-white py-20 overflow-hidden">
          <img
            src={heroImage}
            alt={`Umzugsunternehmen in ${city.name}${city.landmark ? ` – ${city.landmark}` : ""}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-900/55" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-3 mb-6">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />
                    <span className="text-sm font-medium">{badge}</span>
                  </div>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Umzugsunternehmen <span style={{ color: secondaryColor }}>{city.name}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">{city.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={ctaUrl}
                  className="inline-flex items-center text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: secondaryColor }}
                >
                  Preis berechnen <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" /> Jetzt anrufen
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="font-semibold ml-1">4.9</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-300">{city.population} Einwohner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats – social proof, same as homepage */}
        <Stats />

        {/* Trust badges */}
        <Trust />

        {/* SEO content – unique per city */}
        {city.seoBody && city.seoBody.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ihr Umzugsunternehmen in {city.name}
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                {city.seoBody.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Leistungen in {city.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service: string) => {
                const img = serviceImages[service];
                return (
                  <div key={service} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="relative h-44 overflow-hidden bg-gray-100">
                      {img ? (
                        <img
                          src={img}
                          alt={`${service} in ${city.name}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}10` }}>
                          <CheckCircle className="h-12 w-12 opacity-60" style={{ color: primaryColor }} />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                      <p className="text-gray-600 text-sm">Professioneller {service}-Service in {city.name} und Umgebung.</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process – same 3-step flow as homepage */}
        <Process />

        {/* Districts */}
        {city.districts && city.districts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Umzüge in allen Stadtteilen von {city.name}</h2>
              <p className="text-gray-600 mb-8">Wir kennen jeden Stadtteil und jede Straße. Egal wo in {city.name} Sie wohnen – wir sind für Sie da.</p>
              <div className="flex flex-wrap gap-3">
                {city.districts.map((district: string) => (
                  <div key={district} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                    <MapPin className="h-4 w-4" style={{ color: primaryColor }} />
                    <span className="font-medium text-gray-700">{district}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Nearby areas */}
        {city.nearby && city.nearby.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Auch im Umland von {city.name} für Sie da</h2>
              <p className="text-gray-600 mb-8">Wir führen Umzüge in {city.name} und der gesamten Umgebung durch – schnelle Wege, kurze Reaktionszeiten.</p>
              <div className="flex flex-wrap gap-3">
                {city.nearby.map((place: string) => (
                  <div key={place} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full shadow-sm border">
                    <MapPin className="h-4 w-4" style={{ color: primaryColor }} />
                    <span className="font-medium text-gray-700">{place}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Reviews */}
        <Reviews />

        {/* Gallery / Media */}
        {galleryImages.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Eindrücke aus {city.name} und Umgebung</h2>
              <p className="text-gray-600 mb-8">Ein erfahrenes Team, sauberes Equipment und sorgfältiges Arbeiten – so sieht ein Umzug mit DAG aus.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((src: string, i: number) => (
                  <div key={i} className="relative h-48 md:h-56 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={src}
                      alt={`DAG Umzug ${city.name} – Eindruck ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bereit für Ihren Umzug in {city.name}?</h2>
            <p className="text-gray-600 mb-8">Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ctaUrl}
                className="inline-flex items-center justify-center text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: secondaryColor }}
              >
                Preis berechnen <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center border-2 px-8 py-4 rounded-xl font-semibold transition-colors"
                style={{ borderColor: primaryColor, color: primaryColor }}
              >
                <Phone className="mr-2 h-5 w-5" /> {brandConfig.company.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* City-specific FAQ */}
        <CityFaq city={city} />

        {/* Other Cities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Weitere Standorte</h2>
            <div className="flex flex-wrap gap-3">
              {cities
                .filter((c) => c.slug !== city.slug)
                .slice(0, 12)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/staedte/${c.slug}`}
                    className="px-4 py-2 bg-gray-50 rounded-full border hover:border-gray-300 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              <Link
                href="/staedte"
                className="px-4 py-2 rounded-full font-medium"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                Alle Städte →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
