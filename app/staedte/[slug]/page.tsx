import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/cities";
import brandConfig from "@/brand.json";

interface PageProps {
  params: Promise<{ slug: string }>;
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
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";
  const ctaUrl = "/angebot";
  const services = brandConfig.services || [];
  const serviceImages: Record<string, string> = (brandConfig as any).media?.serviceImages || {};
  const heroImage = city.heroImage || "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1600&q=80";
  const galleryImages =
    city.gallery && city.gallery.length > 0
      ? city.gallery
      : (Object.values(serviceImages) as string[]).slice(0, 6);

  const trustBadges = ["Kostenlose Besichtigung", "Festpreisgarantie", "100% Versichert"];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative text-white py-20 overflow-hidden">
          <img
            src={heroImage}
            alt={`Umzugsunternehmen in ${city.name}`}
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
                  href={`tel:${brandConfig.company.phone}`}
                  className="inline-flex items-center bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" /> Jetzt anrufen
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="font-semibold ml-1">4.9</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-300">{city.population} Einwohner</span>
              </div>
            </div>
          </div>
        </section>

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
                href={`tel:${brandConfig.company.phone}`}
                className="inline-flex items-center justify-center border-2 px-8 py-4 rounded-xl font-semibold transition-colors"
                style={{ borderColor: primaryColor, color: primaryColor }}
              >
                <Phone className="mr-2 h-5 w-5" /> {brandConfig.company.phone}
              </a>
            </div>
          </div>
        </section>

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
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
