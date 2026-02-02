"use client";

import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t, language } = useLanguage();
  const ctaUrl = "/angebot";
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

  const trustBadges = [t.trust.freeQuote, t.trust.fixedPrice, "100% " + (language === "de" ? "Versichert" : "Insured")];

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
            {language === "de" ? (
              <>
                Endlich{" "}
                <span className="text-sky-200">Dahoam</span>
                <br />
                ankommen.
              </>
            ) : (
              <>
                Finally{" "}
                <span className="text-sky-200">Home</span>
                <br />
                at last.
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl drop-shadow">
            {language === "de"
              ? "Ihr bayerischer Umzugspartner aus Augsburg. Von Bayern, für Bayern – wir bringen Sie sicher und stressfrei in Ihr neues Zuhause."
              : "Your Bavarian moving partner from Augsburg. From Bavaria, for Bavaria – we get you safely and stress-free to your new home."
            }
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaUrl}
              className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
              style={{ color: primaryColor }}
            >
              {t.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href={`tel:${brandConfig.company.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-lg transition-colors border-2 border-white text-white hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" /> {t.hero.callNow}
            </a>
          </div>

          {/* Google Rating */}
          <a
            href="https://share.google/vsxFjKz2x0A6nG8Zu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-white">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
