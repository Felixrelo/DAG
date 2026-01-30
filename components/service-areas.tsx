"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Navigation, Truck } from "lucide-react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";

const nearbyAreas = [
  "Friedberg",
  "Königsbrunn",
  "Stadtbergen",
  "Gersthofen",
  "Neusäß",
  "Bobingen",
  "Schwabmünchen",
  "Mering",
];

// Augsburg Skyline Silhouette featuring Rathaus, Perlachturm, and Dom
function AugsburgSkyline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice" className={className} fill="currentColor">
      {/* Base line */}
      <rect x="0" y="195" width="1200" height="5" />

      {/* Left buildings - residential */}
      <rect x="20" y="160" width="40" height="35" />
      <polygon points="20,160 40,140 60,160" />
      <rect x="70" y="150" width="35" height="45" />
      <rect x="115" y="165" width="45" height="30" />
      <polygon points="115,165 137,145 160,165" />

      {/* Church spire left */}
      <rect x="180" y="130" width="25" height="65" />
      <polygon points="180,130 192,90 205,130" />

      {/* More residential */}
      <rect x="220" y="155" width="50" height="40" />
      <rect x="280" y="145" width="40" height="50" />
      <polygon points="280,145 300,120 320,145" />

      {/* Augsburg Dom (Cathedral) - twin towers */}
      <rect x="350" y="100" width="30" height="95" />
      <polygon points="350,100 365,60 380,100" />
      <rect x="385" y="120" width="50" height="75" />
      <rect x="440" y="100" width="30" height="95" />
      <polygon points="440,100 455,60 470,100" />

      {/* Residential between landmarks */}
      <rect x="490" y="160" width="45" height="35" />
      <rect x="545" y="150" width="35" height="45" />
      <polygon points="545,150 562,130 580,150" />

      {/* Perlachturm (tall tower) */}
      <rect x="610" y="40" width="35" height="155" />
      <rect x="605" y="35" width="45" height="10" />
      <polygon points="615,35 627,10 640,35" />
      {/* Tower windows */}
      <rect x="620" y="50" width="15" height="20" opacity="0.3" />
      <rect x="620" y="80" width="15" height="20" opacity="0.3" />
      <rect x="620" y="110" width="15" height="20" opacity="0.3" />

      {/* Rathaus (Town Hall) - Renaissance building */}
      <rect x="660" y="90" width="120" height="105" />
      {/* Rathaus towers */}
      <rect x="660" y="70" width="25" height="25" />
      <polygon points="660,70 672,50 685,70" />
      <rect x="755" y="70" width="25" height="25" />
      <polygon points="755,70 767,50 780,70" />
      {/* Rathaus center dome */}
      <ellipse cx="720" cy="90" rx="30" ry="15" />
      <rect x="715" y="75" width="10" height="20" />
      {/* Rathaus windows */}
      <rect x="675" y="110" width="20" height="30" opacity="0.3" />
      <rect x="710" y="110" width="20" height="30" opacity="0.3" />
      <rect x="745" y="110" width="20" height="30" opacity="0.3" />
      <rect x="675" y="155" width="20" height="25" opacity="0.3" />
      <rect x="710" y="155" width="20" height="25" opacity="0.3" />
      <rect x="745" y="155" width="20" height="25" opacity="0.3" />

      {/* Buildings to the right */}
      <rect x="800" y="150" width="50" height="45" />
      <polygon points="800,150 825,125 850,150" />
      <rect x="860" y="140" width="40" height="55" />
      <rect x="910" y="160" width="55" height="35" />
      <polygon points="910,160 937,140 965,160" />

      {/* Small church right */}
      <rect x="985" y="135" width="30" height="60" />
      <polygon points="985,135 1000,100 1015,135" />

      {/* More residential right */}
      <rect x="1030" y="155" width="45" height="40" />
      <rect x="1085" y="165" width="40" height="30" />
      <polygon points="1085,165 1105,145 1125,165" />
      <rect x="1140" y="160" width="50" height="35" />
    </svg>
  );
}

export function ServiceAreas() {
  const { t, language } = useLanguage();
  const areas = brandConfig.serviceAreas || [];
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";
  const googleMapsUrl = brandConfig.links?.googleMaps || "#";
  const ctaUrl = brandConfig.cta?.primary?.url || "/angebot";

  return (
    <section id="service-areas" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}DD 50%, ${primaryColor}BB 100%)`
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 bg-white" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10 bg-white" />
      </div>

      {/* Augsburg Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <AugsburgSkyline className="w-full h-auto text-white/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Navigation className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === "de" ? "Ihr Umzugspartner in Bayern" : "Your Moving Partner in Bavaria"}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.serviceAreas.title}
            </h2>

            <p className="text-xl text-white/90 mb-8">
              {language === "de"
                ? "Von Augsburg aus sind wir für Sie in ganz Bayern und deutschlandweit im Einsatz. Kurze Wege, schnelle Hilfe – Ihr Umzug ist bei uns in besten Händen."
                : "From Augsburg, we are at your service throughout Bavaria and Germany-wide. Short distances, fast help – your move is in the best hands with us."
              }
            </p>

            {/* Main areas */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
                {language === "de" ? "Hauptstandort" : "Main Location"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {areas.map((area: string) => (
                  <div key={area} className="flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl shadow-lg">
                    <MapPin className="h-5 w-5" style={{ color: primaryColor }} />
                    <span className="font-semibold">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                {t.cta.getQuote} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-white/50 text-white hover:bg-white/10 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                {language === "de" ? "Auf Google Maps" : "View on Google Maps"}
              </a>
            </div>
          </div>

          {/* Right side - Visual card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {language === "de" ? "Wir kommen zu Ihnen" : "We Come to You"}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {language === "de" ? "Im Umkreis von 100km und weiter" : "Within 100km radius and beyond"}
                  </p>
                </div>
              </div>

              {/* Nearby areas grid */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-3">
                  {language === "de" ? "Weitere Servicegebiete" : "More Service Areas"}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {nearbyAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-white/90 py-2">
                      <div className="w-2 h-2 rounded-full bg-sky-300" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom note */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  <span className="font-semibold text-white">
                    {language === "de" ? "Ihr Ort nicht dabei?" : "Your location not listed?"}
                  </span>{" "}
                  {language === "de"
                    ? "Kein Problem! Wir führen Umzüge in ganz Deutschland durch. Kontaktieren Sie uns für ein individuelles Angebot."
                    : "No problem! We conduct moves throughout Germany. Contact us for a custom quote."
                  }
                </p>
              </div>

              {/* Link to all areas */}
              <Link
                href="/staedte"
                className="inline-flex items-center gap-2 mt-4 text-sky-300 hover:text-white transition-colors font-medium"
              >
                {language === "de" ? "Alle Servicegebiete ansehen" : "View all service areas"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Decorative badge */}
            <div className="absolute -top-4 -right-4 bg-sky-400 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              100+ {language === "de" ? "Orte" : "Locations"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
