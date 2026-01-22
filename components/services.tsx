import Link from "next/link";
import Image from "next/image";
import { Truck, Building2, Trash2, Wrench, ShieldCheck, Package, Warehouse, ArrowRight, Users, Piano, Clock } from "lucide-react";
import brandConfig from "@/brand.json";

const serviceIcons: Record<string, any> = {
  "Privatumzug": Truck,
  "Firmenumzug": Building2,
  "Fernumzug": Truck,
  "Entrümpelung": Trash2,
  "Möbelmontage": Wrench,
  "Halteverbotszone": ShieldCheck,
  "Einlagerung": Warehouse,
  "Verpackungsservice": Package,
  "Seniorenumzug": Users,
  "Klaviertransport": Piano,
};

const serviceDescriptions: Record<string, string> = {
  "Privatumzug": "Stressfreier Umzug für Ihr Zuhause. Von der Verpackung bis zur Möbelmontage.",
  "Firmenumzug": "Professionelle Büroumzüge mit minimaler Ausfallzeit.",
  "Fernumzug": "Deutschlandweite Umzüge sicher und zuverlässig.",
  "Entrümpelung": "Schnelle und umweltgerechte Entrümpelung.",
  "Möbelmontage": "Fachgerechte Demontage und Montage Ihrer Möbel.",
  "Halteverbotszone": "Beantragung und Einrichtung von Halteverbotszonen.",
  "Einlagerung": "Sichere Zwischenlagerung für Ihre Möbel.",
  "Verpackungsservice": "Professionelles Verpacken Ihres gesamten Hausrats.",
  "Seniorenumzug": "Einfühlsamer Umzugsservice für ältere Menschen.",
  "Klaviertransport": "Sicherer Transport von Klavieren und Flügeln.",
};

// Placeholder paths for service images (not used currently)
const servicePlaceholders: Record<string, string> = {};

// Icon Cards variant (default)
function ServicesIconCards({ services, primaryColor }: { services: string[]; primaryColor: string }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.slice(0, 6).map((service: string) => {
        const Icon = serviceIcons[service] || Truck;
        const slug = service.toLowerCase().replace(/ü/g, "ue").replace(/ö/g, "oe").replace(/ä/g, "ae").replace(/ß/g, "ss").replace(/\s+/g, "-");
        return (
          <Link key={service} href={`/${slug}`} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-colors group-hover:scale-110" style={{ backgroundColor: `${primaryColor}15` }}>
              <Icon className="h-6 w-6" style={{ color: primaryColor }} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service}</h3>
            <p className="text-gray-600 mb-4">{serviceDescriptions[service] || `Professioneller ${service}-Service.`}</p>
            <div className="flex items-center font-medium" style={{ color: primaryColor }}>
              Mehr erfahren <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// Image Cards variant
function ServicesImageCards({ services, primaryColor, serviceImages }: { services: string[]; primaryColor: string; serviceImages: Record<string, string> }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.slice(0, 6).map((service: string) => {
        const Icon = serviceIcons[service] || Truck;
        const slug = service.toLowerCase().replace(/ü/g, "ue").replace(/ö/g, "oe").replace(/ä/g, "ae").replace(/ß/g, "ss").replace(/\s+/g, "-");
        const imageUrl = serviceImages[service] || servicePlaceholders[service];

        return (
          <Link key={service} href={`/${slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={service}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}10` }}>
                  <Icon className="h-16 w-16 opacity-50" style={{ color: primaryColor }} />
                </div>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Progress bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: primaryColor }}>
                <div className="h-full w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: primaryColor }} />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: `${primaryColor}15` }}>
                  <Icon className="h-5 w-5" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-2">{serviceDescriptions[service] || `Professioneller ${service}-Service.`}</p>
              <div className="flex items-center font-medium" style={{ color: primaryColor }}>
                Mehr erfahren <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function Services() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const services = brandConfig.services || [];

  // Get layout variant
  const servicesVariant = (brandConfig as any).layout?.variants?.services || "icon-cards";
  const serviceImages = (brandConfig as any).media?.serviceImages || {};

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-gray-600">Alles für Ihren erfolgreichen Umzug – von A bis Z professionell betreut.</p>
        </div>

        {servicesVariant === "icon-cards" && <ServicesIconCards services={services} primaryColor={primaryColor} />}
        {servicesVariant === "image-cards" && <ServicesImageCards services={services} primaryColor={primaryColor} serviceImages={serviceImages} />}
      </div>
    </section>
  );
}
