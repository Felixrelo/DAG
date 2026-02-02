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

  const trustBadges = ["Kostenlose Besichtigung", "Festpreisgarantie", "100% Versichert"];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Kostenloses Angebot <ArrowRight className="ml-2 h-5 w-5" />
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
              {services.slice(0, 6).map((service: string) => (
                <div key={service} className="bg-gray-50 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
                    <CheckCircle className="h-5 w-5" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                  <p className="text-gray-600 text-sm">Professioneller {service}-Service in {city.name} und Umgebung.</p>
                </div>
              ))}
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
                Kostenloses Angebot <ArrowRight className="ml-2 h-5 w-5" />
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
