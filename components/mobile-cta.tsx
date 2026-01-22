"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import brandConfig from "@/brand.json";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";
  const ctaUrl = brandConfig.cta?.primary?.url || "/angebot";
  const ctaText = brandConfig.cta?.primary?.text || "Angebot";
  const whatsappNumber = brandConfig.company.whatsapp || brandConfig.company.phone?.replace(/[^0-9]/g, "");

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
      <div className="grid grid-cols-3 divide-x">
        {/* Phone */}
        <a
          href={`tel:${brandConfig.company.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: primaryColor }}
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Anrufen</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:opacity-90 transition-opacity bg-green-500"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>

        {/* CTA */}
        <a
          href={ctaUrl}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: secondaryColor }}
        >
          <ArrowRight className="w-5 h-5" />
          <span className="text-xs font-medium">{ctaText}</span>
        </a>
      </div>
    </div>
  );
}
