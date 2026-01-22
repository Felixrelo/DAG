import { Truck, Building2, Trash2, Wrench, ShieldCheck, Package, Warehouse, ArrowRight, Users, Piano } from "lucide-react";
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
function ServicesIconCards({ services, primaryColor, ctaUrl }: { services: string[]; primaryColor: string; ctaUrl: string }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.slice(0, 6).map((service: string) => {
        const Icon = serviceIcons[service] || Truck;
        return (
          <div key={service} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
              <Icon className="h-6 w-6" style={{ color: primaryColor }} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service}</h3>
            <p className="text-gray-600">{serviceDescriptions[service] || `Professioneller ${service}-Service.`}</p>
          </div>
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
        const imageUrl = serviceImages[service] || servicePlaceholders[service];

        return (
          <div key={service} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={service}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}10` }}>
                  <Icon className="h-16 w-16 opacity-50" style={{ color: primaryColor }} />
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: `${primaryColor}15` }}>
                  <Icon className="h-5 w-5" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
              </div>
              <p className="text-gray-600">{serviceDescriptions[service] || `Professioneller ${service}-Service.`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Services() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const services = brandConfig.services || [];
  const ctaUrl = brandConfig.cta?.primary?.url || "/angebot";

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

        {servicesVariant === "icon-cards" && <ServicesIconCards services={services} primaryColor={primaryColor} ctaUrl={ctaUrl} />}
        {servicesVariant === "image-cards" && <ServicesImageCards services={services} primaryColor={primaryColor} serviceImages={serviceImages} />}

        <div className="text-center mt-12">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
            style={{ backgroundColor: primaryColor }}
          >
            Jetzt Angebot anfordern <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
