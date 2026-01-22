"use client";

import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import brandConfig from "@/brand.json";

const trustBadges = ["Kostenlose Besichtigung", "Festpreisgarantie", "100% Versichert"];

export function Hero() {
  const ctaUrl = brandConfig.cta?.primary?.url || "/angebot";
  const ctaText = brandConfig.cta?.primary?.text || "Angebot anfordern";
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

  return (
    <section className="relative min-h-[600px] lg:h-[70vh] lg:max-h-[700px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/augsburg-hero.jpg')" }}
      />

      {/* Dark overlay with brand color */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{ backgroundColor: `${primaryColor}CC` }}
      />

      {/* Desktop: dark gradient from left to right */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: `linear-gradient(to right, ${primaryColor}E6 0%, ${primaryColor}B3 40%, ${primaryColor}4D 70%, transparent 100%)`
        }}
      />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-12 lg:py-0">
        <div className="max-w-2xl">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <CheckCircle className="h-4 w-4 mr-2 text-white" />
                <span className="text-sm font-medium text-white">{badge}</span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            Endlich{" "}
            <span className="text-sky-200">Dahoam</span>
            <br />
            ankommen.
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl drop-shadow">
            Ihr bayerischer Umzugspartner aus Augsburg. Von Bayern, für Bayern – wir bringen Sie sicher und stressfrei in Ihr neues Zuhause.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
              style={{ color: primaryColor }}
            >
              {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href={`tel:${brandConfig.company.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-lg transition-colors border-2 border-white text-white hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" /> Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
