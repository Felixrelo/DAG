"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";

export function MobileCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";
  const ctaUrl = brandConfig.cta?.primary?.url || "/angebot";

  // Only show after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector("section")?.offsetHeight || 500;
      setIsVisible(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg pb-safe animate-in slide-in-from-bottom duration-300">
      <div className="grid grid-cols-2 divide-x">
        {/* Phone */}
        <a
          href={`tel:${brandConfig.company.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: primaryColor }}
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">{t.cta.call}</span>
        </a>

        {/* CTA */}
        <a
          href={ctaUrl}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: secondaryColor }}
        >
          <ArrowRight className="w-5 h-5" />
          <span className="text-xs font-medium">{t.cta.getQuote}</span>
        </a>
      </div>
    </div>
  );
}
