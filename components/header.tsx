"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import brandConfig from "@/brand.json";

const services = [
  { name: "Privatumzug", href: "/privatumzug" },
  { name: "Fernumzug", href: "/fernumzug" },
  { name: "Transport", href: "/transport" },
  { name: "Entrümpelung", href: "/entruempelung" },
  { name: "Möbelmontage", href: "/moebelmontage" },
  { name: "Halteverbotszone", href: "/halteverbotszone" },
  { name: "Einlagerung", href: "/einlagerung" },
  { name: "Verpackungsservice", href: "/verpackungsservice" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

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
              className="h-14 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 text-gray-700 hover:opacity-80 transition-colors">
                Leistungen
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border py-2 min-w-[200px]">
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setServicesOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/staedte" className="text-gray-700 hover:opacity-80 transition-colors">Servicegebiet</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${brandConfig.company.phone}`} className="flex items-center font-semibold text-gray-700 hover:opacity-80 transition-colors">
              <Phone className="h-4 w-4 mr-2" />{brandConfig.company.phone}
            </a>
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: primaryColor }}>
              Kostenloses Angebot
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-gray-700">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <div className="text-gray-900 font-medium">Leistungen</div>
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="text-gray-600 pl-4" onClick={() => setIsOpen(false)}>{service.name}</Link>
              ))}
              <Link href="/staedte" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>Servicegebiet</Link>
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="text-white px-4 py-3 rounded-xl font-medium text-center" style={{ backgroundColor: primaryColor }} onClick={() => setIsOpen(false)}>
                Kostenloses Angebot
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
