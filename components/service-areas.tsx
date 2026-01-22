import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import brandConfig from "@/brand.json";

export function ServiceAreas() {
  const areas = brandConfig.serviceAreas || [];
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const googleMapsUrl = brandConfig.links?.googleMaps || "#";

  return (
    <section id="service-areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unser Servicegebiet</h2>
          <p className="text-lg text-gray-600">Wir sind für Sie in der gesamten Region unterwegs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex flex-wrap gap-3">
              {areas.map((area: string) => (
                <div key={area} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                  <MapPin className="h-4 w-4" style={{ color: primaryColor }} />
                  <span className="font-medium text-gray-700">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                Auch wenn Ihr Ort nicht aufgeführt ist – kontaktieren Sie uns!
                Wir führen Umzüge in ganz Deutschland durch.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/staedte" className="inline-flex items-center gap-2 font-semibold" style={{ color: primaryColor }}>
                  Alle Servicegebiete ansehen <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-gray-600 hover:text-gray-900">
                  <MapPin className="h-5 w-5" />
                  Auf Google Maps
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-gray-400 text-center p-8">
              <MapPin className="h-12 w-12 mx-auto mb-2" style={{ color: primaryColor }} />
              <p>Karte wird geladen...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
