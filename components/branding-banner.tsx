"use client";

import Image from "next/image";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";

// Augsburg Zirbelnuss (Pine Cone) - the city's symbol
function Zirbelnuss({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="currentColor" className={className}>
      <path d="M12 0C12 0 8 4 8 8C8 10 9 11 10 12C8 13 6 15 6 18C6 21 8 23 10 24C8 25 6 27 6 30C6 31 7 32 8 32H16C17 32 18 31 18 30C18 27 16 25 14 24C16 23 18 21 18 18C18 15 16 13 14 12C15 11 16 10 16 8C16 4 12 0 12 0ZM12 4C13 5.5 14 7 14 8C14 9 13.5 10 12 10C10.5 10 10 9 10 8C10 7 11 5.5 12 4ZM12 14C14 14 16 16 16 18C16 20 14 22 12 22C10 22 8 20 8 18C8 16 10 14 12 14ZM12 26C13.5 26 15 27.5 15.5 29H8.5C9 27.5 10.5 26 12 26Z"/>
    </svg>
  );
}

export function BrandingBanner() {
  const { language } = useLanguage();
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

  return (
    <section className="py-6 relative overflow-hidden" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-8">
          <Image
            src="/images/logo.png"
            alt="DAG Dahoam Logistik"
            width={160}
            height={64}
            className="h-24 w-auto brightness-0 invert"
            priority
          />
          <div className="text-white">
            <p className="text-xl md:text-2xl font-bold">DAG Dahoam Logistik</p>
            {/* Augsburg badge */}
            <div className="flex items-center gap-2 mt-1">
              <Zirbelnuss className="h-4 w-4 text-white/80" />
              <span className="text-sm text-white/80">
                {language === "de" ? "Stolz aus Augsburg" : "Proudly from Augsburg"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
