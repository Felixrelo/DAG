import { CheckCircle, Shield, Clock, Users, Award, Truck, ThumbsUp, HeartHandshake } from "lucide-react";
import brandConfig from "@/brand.json";

const features = [
  { icon: CheckCircle, title: "Festpreisgarantie", description: "Keine versteckten Kosten. Der vereinbarte Preis ist der Endpreis." },
  { icon: Shield, title: "Vollversichert", description: "Ihr Hab und Gut ist während des gesamten Umzugs versichert." },
  { icon: Clock, title: "Pünktlich & Zuverlässig", description: "Wir halten uns an vereinbarte Termine und Zeitfenster." },
  { icon: Users, title: "Erfahrenes Team", description: "Geschulte Mitarbeiter mit jahrelanger Umzugserfahrung." },
];

// Icon Row variant (compact horizontal)
function TrustIconRow({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature) => (
        <div key={feature.title} className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: `${secondaryColor}15` }}>
            <feature.icon className="h-7 w-7" style={{ color: secondaryColor }} />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

// Card Grid variant (larger cards with more visual presence)
function TrustCardGrid({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
            style={{ backgroundColor: `${secondaryColor}15` }}
          >
            <feature.icon className="h-8 w-8" style={{ color: secondaryColor }} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>

          {/* Decorative element */}
          <div className="mt-4 h-1 w-12 rounded-full" style={{ backgroundColor: `${primaryColor}30` }} />
        </div>
      ))}
    </div>
  );
}

// Banner variant (horizontal strip with icons)
function TrustBanner({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor: string }) {
  const shortFeatures = [
    { icon: CheckCircle, text: "Festpreisgarantie" },
    { icon: Shield, text: "Vollversichert" },
    { icon: Clock, text: "Pünktlich" },
    { icon: ThumbsUp, text: "Erfahrenes Team" },
  ];

  return (
    <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: `${primaryColor}08` }}>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        {shortFeatures.map((feature, index) => (
          <div key={feature.text} className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${secondaryColor}20` }}
            >
              <feature.icon className="h-5 w-5" style={{ color: secondaryColor }} />
            </div>
            <span className="font-semibold text-gray-800">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Trust() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";

  // Get layout variant
  const trustVariant = (brandConfig as any).layout?.variants?.trust || "icon-row";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {trustVariant === "icon-row" && <TrustIconRow primaryColor={primaryColor} secondaryColor={secondaryColor} />}
        {trustVariant === "card-grid" && <TrustCardGrid primaryColor={primaryColor} secondaryColor={secondaryColor} />}
        {trustVariant === "banner" && <TrustBanner primaryColor={primaryColor} secondaryColor={secondaryColor} />}
      </div>
    </section>
  );
}
