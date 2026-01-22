import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import brandConfig from "@/brand.json";

const services = [
  { name: "Privatumzug", href: "/privatumzug" },
  { name: "Fernumzug", href: "/fernumzug" },
  { name: "Entrümpelung", href: "/entruempelung" },
  { name: "Möbelmontage", href: "/moebelmontage" },
  { name: "Halteverbotszone", href: "/halteverbotszone" },
];

const legal = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
];

export function Footer() {
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
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-4">{brandConfig.company.tagline || "Ihr zuverlässiger Partner für professionelle Umzüge."}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center"><Phone className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />{brandConfig.company.phone}</div>
              <div className="flex items-center"><Mail className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />{brandConfig.company.email}</div>
              <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" style={{ color: secondaryColor }} />{brandConfig.company.address?.city}, {brandConfig.company.address?.state}</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}><Link href={service.href} className="hover:text-white transition-colors">{service.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicegebiete</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/staedte" className="hover:text-white transition-colors">Alle Standorte</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-white transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© {new Date().getFullYear()} {brandConfig.company.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
