import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import brandConfig from "@/brand.json";

export function Contact() {
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  return (
    <section id="contact" className="py-20 text-white" style={{ backgroundColor: primaryColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Jetzt Kontakt aufnehmen</h2>
          <p className="text-lg text-white/80">Wir beraten Sie gerne kostenlos und unverbindlich zu Ihrem Umzug.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href={`tel:${brandConfig.company.phone}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4"><Phone className="h-6 w-6" /></div>
            <h3 className="font-semibold mb-1">Telefon</h3>
            <p className="text-white/80 text-sm mb-2">Mo-Sa 8:00-18:00</p>
            <p className="font-bold text-lg">{brandConfig.company.phone}</p>
          </a>

          <a href={`https://wa.me/${brandConfig.company.whatsapp || brandConfig.company.phone?.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4"><MessageCircle className="h-6 w-6" /></div>
            <h3 className="font-semibold mb-1">WhatsApp</h3>
            <p className="text-white/80 text-sm mb-2">Schnelle Antwort</p>
            <p className="font-bold text-lg">Jetzt schreiben</p>
          </a>

          <a href={`mailto:${brandConfig.company.email}`} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4"><Mail className="h-6 w-6" /></div>
            <h3 className="font-semibold mb-1">E-Mail</h3>
            <p className="text-white/80 text-sm mb-2">24h Antwortzeit</p>
            <p className="font-bold text-lg">{brandConfig.company.email}</p>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/70">
          <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" />{brandConfig.company.address?.city}, {brandConfig.company.address?.state}</div>
          <div className="flex items-center"><Clock className="h-4 w-4 mr-2" />Mo-Sa 8:00-18:00 Uhr</div>
        </div>
      </div>
    </section>
  );
}
