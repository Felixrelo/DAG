import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { cities } from "@/lib/cities";
import brandConfig from "@/brand.json";

export const metadata: Metadata = {
  title: `Servicegebiet - DAG Dahoam Logistik`,
  description: `Wir führen Umzüge in der gesamten Region durch. Entdecken Sie unser Servicegebiet.`,
};

// Group cities by state
const citiesByState = cities.reduce((acc, city) => {
  if (!acc[city.state]) acc[city.state] = [];
  acc[city.state].push(city);
  return acc;
}, {} as Record<string, typeof cities>);

export default function StaedtePage() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Servicegebiet</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Von unserem Standort aus bedienen wir {cities.length}+ Städte und Gemeinden.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {Object.entries(citiesByState).map(([state, stateCities]) => (
              <div key={state} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6" style={{ color: primaryColor }} />
                  {state}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stateCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/staedte/${city.slug}`}
                      className="group bg-white rounded-xl border hover:border-gray-300 hover:shadow-lg transition-all p-6"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700">{city.name}</h3>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:translate-x-1 transition-transform" style={{ color: primaryColor }} />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Users className="h-4 w-4" />
                        <span>{city.population} Einwohner</span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{city.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
