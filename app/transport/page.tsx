"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { TransportDialog } from "@/components/transport-dialog";
import { CheckCircle, Truck, Package, Clock, Shield, Phone, ArrowRight } from "lucide-react";
import brandConfig from "@/brand.json";

const benefits = [
  { icon: Truck, title: "Flexible Transporte", description: "Vom Einzelstück bis zur kompletten Ladung" },
  { icon: Shield, title: "Versichert", description: "Volle Transportversicherung inklusive" },
  { icon: Clock, title: "Termingerecht", description: "Pünktliche Lieferung garantiert" },
  { icon: Package, title: "Sorgfältig", description: "Professionelle Handhabung Ihrer Güter" },
];

export default function TransportPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative text-white py-24 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/augsburg-hero.jpg')" }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `${primaryColor}E6` }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <Truck className="h-8 w-8 text-sky-200" />
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/20">
                  Transportservice
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Professionelle Transporte in <span className="text-sky-200">Bayern</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Von Einzelstücken bis zu kompletten Ladungen – wir transportieren Ihre Güter sicher und zuverlässig.
                Als bayerisches Transportunternehmen kennen wir jede Straße.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Versichert", "Termingerecht", "Faire Preise"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-sky-200" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
                  style={{ color: primaryColor }}
                >
                  Transport anfragen <ArrowRight className="ml-2 h-5 w-5" />
                </button>
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

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
                    <benefit.icon className="h-7 w-7" style={{ color: primaryColor }} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">So funktioniert's</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
                  <span className="font-bold text-lg" style={{ color: primaryColor }}>1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Anfrage stellen</h3>
                <p className="text-gray-600">Beschreiben Sie was transportiert werden soll.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
                  <span className="font-bold text-lg" style={{ color: primaryColor }}>2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Angebot erhalten</h3>
                <p className="text-gray-600">Wir erstellen ein individuelles Angebot für Sie.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${primaryColor}15` }}>
                  <span className="font-bold text-lg" style={{ color: primaryColor }}>3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Transport durchführen</h3>
                <p className="text-gray-600">Wir holen ab und liefern pünktlich.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="inline-flex items-center justify-center text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Jetzt Transport anfragen <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Transportunternehmen in Augsburg und Bayern</h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                <strong>DAG Dahoam Logistik</strong> ist Ihr zuverlässiger Partner für professionelle Transporte in Augsburg,
                München und ganz Bayern. Ob Möbeltransport, Gerätetransport oder Sperrgut – wir transportieren Ihre Güter
                sicher und termingerecht an jeden Ort.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Unsere Transportleistungen</h3>
              <ul className="space-y-2">
                <li><strong>Möbeltransport:</strong> Einzelne Möbelstücke oder komplette Einrichtungen</li>
                <li><strong>Gerätetransport:</strong> Waschmaschinen, Kühlschränke und andere Haushaltsgeräte</li>
                <li><strong>Baumaterialien:</strong> Transport von Baustoffen zur Baustelle</li>
                <li><strong>Sperrgut:</strong> Übergroße Gegenstände die besondere Handhabung erfordern</li>
                <li><strong>Palettentransport:</strong> Gewerbliche Transporte auf Paletten</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Warum DAG Dahoam Logistik?</h3>
              <p>
                Als bayerisches Familienunternehmen legen wir großen Wert auf Zuverlässigkeit und persönlichen Service.
                Unsere erfahrenen Fahrer kennen die Region und sorgen dafür, dass Ihre Güter sicher und pünktlich ankommen.
              </p>
              <ul className="space-y-2">
                <li><CheckCircle className="inline h-5 w-5 mr-2" style={{ color: primaryColor }} />Vollständig versicherte Transporte</li>
                <li><CheckCircle className="inline h-5 w-5 mr-2" style={{ color: primaryColor }} />Faire und transparente Preise</li>
                <li><CheckCircle className="inline h-5 w-5 mr-2" style={{ color: primaryColor }} />Flexible Terminvereinbarung</li>
                <li><CheckCircle className="inline h-5 w-5 mr-2" style={{ color: primaryColor }} />Erfahrene und geschulte Mitarbeiter</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Servicegebiet</h3>
              <p>
                Wir führen Transporte in ganz Bayern durch, mit Schwerpunkt auf Augsburg, München, Ingolstadt,
                Ulm und Umgebung. Auch deutschlandweite Transporte sind auf Anfrage möglich.
              </p>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />

      <TransportDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
