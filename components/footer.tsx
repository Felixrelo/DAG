"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";

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

export function Footer() {
  const { t } = useLanguage();
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/logo.png"
              alt={brandConfig.company.name}
              width={160}
              height={55}
              className="h-24 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-4">{brandConfig.company.tagline || "Ihr zuverlässiger Partner für professionelle Umzüge."}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center"><Phone className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />{brandConfig.company.phone}</div>
              <div className="flex items-center"><Mail className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />{brandConfig.company.email}</div>
              <div className="flex items-start"><MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: secondaryColor }} /><span>{brandConfig.company.address?.street}<br />{brandConfig.company.address?.postalCode} {brandConfig.company.address?.city}</span></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link href={serviceHrefs[key]} className="hover:text-white transition-colors">
                    {t.services[key]?.name || key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.serviceAreas}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/staedte" className="hover:text-white transition-colors">{t.footer.allLocations}</Link></li>
            </ul>
            <h4 className="text-white font-semibold mb-4 mt-6">{t.footer.guide}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/umzugsratgeber" className="hover:text-white transition-colors">{t.nav.guide}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">{t.footer.imprint}</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">{t.footer.privacy}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© {new Date().getFullYear()} {brandConfig.company.name}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
