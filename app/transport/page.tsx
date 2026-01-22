"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";
import { CheckCircle, Truck, Package, Clock, Shield, Phone, ArrowRight, Send } from "lucide-react";
import brandConfig from "@/brand.json";

const benefits = [
  { icon: Truck, title: "Flexible Transporte", description: "Vom Einzelstück bis zur kompletten Ladung" },
  { icon: Shield, title: "Versichert", description: "Volle Transportversicherung inklusive" },
  { icon: Clock, title: "Termingerecht", description: "Pünktliche Lieferung garantiert" },
  { icon: Package, title: "Sorgfältig", description: "Professionelle Handhabung Ihrer Güter" },
];

const transportTypes = [
  "Möbeltransport",
  "Gerätetransport",
  "Baumaterialien",
  "Sperrgut",
  "Paletten",
  "Sonstiges",
];

export default function TransportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      transportType: formData.get("transportType"),
      fromAddress: formData.get("fromAddress"),
      toAddress: formData.get("toAddress"),
      date: formData.get("date"),
      description: formData.get("description"),
    };

    try {
      const response = await fetch("/api/transport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Es gab einen Fehler. Bitte versuchen Sie es erneut.");
      }
    } catch {
      setError("Es gab einen Fehler. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Augsburg Panorama */}
        <section className="relative text-white py-20 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/augsburg-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <Truck className="h-8 w-8" style={{ color: primaryColor }} />
                <span className="text-sm font-medium px-3 py-1 rounded-full" style={{ backgroundColor: `${primaryColor}30` }}>
                  Transportservice
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professionelle Transporte in <span style={{ color: primaryColor }}>Bayern</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Von Einzelstücken bis zu kompletten Ladungen – wir transportieren Ihre Güter sicher und zuverlässig.
                Als bayerisches Transportunternehmen kennen wir jede Straße.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Versichert", "Termingerecht", "Faire Preise"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>{badge}</span>
                  </div>
                ))}
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

        {/* Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Transportanfrage stellen</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Beschreiben Sie Ihren Transport und wir melden uns innerhalb von 24 Stunden mit einem
                  unverbindlichen Angebot bei Ihnen.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${primaryColor}15` }}>
                      <span className="font-bold" style={{ color: primaryColor }}>1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Anfrage ausfüllen</h3>
                      <p className="text-gray-600">Beschreiben Sie was transportiert werden soll.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${primaryColor}15` }}>
                      <span className="font-bold" style={{ color: primaryColor }}>2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Angebot erhalten</h3>
                      <p className="text-gray-600">Wir erstellen ein individuelles Angebot für Sie.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${primaryColor}15` }}>
                      <span className="font-bold" style={{ color: primaryColor }}>3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Transport durchführen</h3>
                      <p className="text-gray-600">Wir holen ab und liefern pünktlich.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border">
                  <p className="font-semibold text-gray-900 mb-2">Lieber telefonisch?</p>
                  <a href={`tel:${brandConfig.company.phone}`} className="inline-flex items-center gap-2 text-lg font-bold" style={{ color: primaryColor }}>
                    <Phone className="h-5 w-5" />
                    {brandConfig.company.phone}
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white rounded-2xl shadow-sm p-8 border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: `${primaryColor}15` }}>
                      <CheckCircle className="h-8 w-8" style={{ color: primaryColor }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Anfrage erhalten!</h3>
                    <p className="text-gray-600">
                      Vielen Dank für Ihre Transportanfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                          style={{ outlineColor: primaryColor }}
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                          style={{ outlineColor: primaryColor }}
                          placeholder="Ihre Telefonnummer"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                        style={{ outlineColor: primaryColor }}
                        placeholder="Ihre E-Mail-Adresse"
                      />
                    </div>

                    <div>
                      <label htmlFor="transportType" className="block text-sm font-medium text-gray-700 mb-1">Art des Transports *</label>
                      <select
                        id="transportType"
                        name="transportType"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                        style={{ outlineColor: primaryColor }}
                      >
                        <option value="">Bitte wählen</option>
                        {transportTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fromAddress" className="block text-sm font-medium text-gray-700 mb-1">Abholadresse *</label>
                        <input
                          type="text"
                          id="fromAddress"
                          name="fromAddress"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                          style={{ outlineColor: primaryColor }}
                          placeholder="PLZ / Stadt"
                        />
                      </div>
                      <div>
                        <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700 mb-1">Lieferadresse *</label>
                        <input
                          type="text"
                          id="toAddress"
                          name="toAddress"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                          style={{ outlineColor: primaryColor }}
                          placeholder="PLZ / Stadt"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Wunschtermin</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                        style={{ outlineColor: primaryColor }}
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Was soll transportiert werden? *</label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                        style={{ outlineColor: primaryColor }}
                        placeholder="Beschreiben Sie die zu transportierenden Gegenstände (Größe, Gewicht, Menge...)"
                      />
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {isSubmitting ? (
                        "Wird gesendet..."
                      ) : (
                        <>
                          Transportanfrage senden <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
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
    </>
  );
}
