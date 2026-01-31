"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "./language-switcher";

const serviceKeys = [
  "Privatumzug",
  "Firmenumzug",
  "Fernumzug",
  "Transport",
  "Entrümpelung",
  "Möbelmontage",
  "Halteverbotszone",
  "Einlagerung",
] as const;

const serviceHrefs: Record<string, string> = {
  "Privatumzug": "/privatumzug",
  "Firmenumzug": "/firmenumzug",
  "Fernumzug": "/fernumzug",
  "Transport": "/transport",
  "Entrümpelung": "/entruempelung",
  "Möbelmontage": "/moebelmontage",
  "Halteverbotszone": "/halteverbotszone",
  "Einlagerung": "/einlagerung",
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const ctaUrl = brandConfig.cta?.primary?.url || "/angebot";
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt={brandConfig.company.name}
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 text-gray-700 hover:opacity-80 transition-colors">
                {t.nav.services}
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border py-2 min-w-[200px]">
                  {serviceKeys.map((key) => (
                    <Link key={key} href={serviceHrefs[key]} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setServicesOpen(false)}>
                      {t.services[key]?.name || key}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/staedte" className="text-gray-700 hover:opacity-80 transition-colors">{t.nav.serviceArea}</Link>
            <Link href="/umzugsratgeber" className="text-gray-700 hover:opacity-80 transition-colors">{t.nav.guide}</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href={`tel:${brandConfig.company.phone}`} className="flex items-center font-semibold text-gray-700 hover:opacity-80 transition-colors">
              <Phone className="h-4 w-4 mr-2" />{brandConfig.company.phoneDisplay || brandConfig.company.phone}
            </a>
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: primaryColor }}>
              {t.nav.freeQuote}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <div className="text-gray-900 font-medium">{t.nav.services}</div>
              {serviceKeys.map((key) => (
                <Link key={key} href={serviceHrefs[key]} className="text-gray-600 pl-4" onClick={() => setIsOpen(false)}>
                  {t.services[key]?.name || key}
                </Link>
              ))}
              <Link href="/staedte" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>{t.nav.serviceArea}</Link>
              <Link href="/umzugsratgeber" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>{t.nav.guide}</Link>
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="text-white px-4 py-3 rounded-xl font-medium text-center" style={{ backgroundColor: primaryColor }} onClick={() => setIsOpen(false)}>
                {t.nav.freeQuote}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
