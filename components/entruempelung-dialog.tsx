"use client";

import { useState } from "react";
import { X, Send, Loader2, Trash2 } from "lucide-react";
import brandConfig from "@/brand.json";

const propertyTypes = [
  "Wohnung",
  "Haus",
  "Keller",
  "Dachboden",
  "Garage",
  "Büro / Gewerbe",
  "Sonstiges",
];

interface EntruempelungDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EntruempelungDialog({ isOpen, onClose }: EntruempelungDialogProps) {
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
      propertyType: formData.get("propertyType"),
      address: formData.get("address"),
      size: formData.get("size"),
      date: formData.get("date"),
      notes: formData.get("notes"),
    };

    try {
      const response = await fetch("/api/entruempelung", {
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

  const resetForm = () => {
    setIsSubmitted(false);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={resetForm}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <Trash2 className="w-5 h-5" style={{ color: primaryColor }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Entrümpelung anfragen</h3>
          </div>
          <button
            onClick={resetForm}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Anfrage erhalten!</h4>
              <p className="text-gray-600 mb-6">
                Wir melden uns innerhalb von 24 Stunden mit einem Angebot bei Ihnen.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2 rounded-lg font-medium text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="entruempelung-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="entruempelung-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="entruempelung-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="entruempelung-phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="entruempelung-email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="entruempelung-email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: primaryColor }}
                  placeholder="Ihre E-Mail-Adresse"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="entruempelung-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Art der Immobilie *
                  </label>
                  <select
                    id="entruempelung-type"
                    name="propertyType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                  >
                    <option value="">Bitte wählen</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="entruempelung-size" className="block text-sm font-medium text-gray-700 mb-1">
                    Größe (ca. m²)
                  </label>
                  <input
                    type="text"
                    id="entruempelung-size"
                    name="size"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="z.B. 80"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="entruempelung-address" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse der Entrümpelung *
                </label>
                <input
                  type="text"
                  id="entruempelung-address"
                  name="address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: primaryColor }}
                  placeholder="Straße, PLZ Ort"
                />
              </div>

              <div>
                <label htmlFor="entruempelung-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Wunschtermin
                </label>
                <input
                  type="date"
                  id="entruempelung-date"
                  name="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: primaryColor }}
                />
              </div>

              <div>
                <label htmlFor="entruempelung-notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Besonderheiten / Anmerkungen
                </label>
                <textarea
                  id="entruempelung-notes"
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                  style={{ outlineColor: primaryColor }}
                  placeholder="z.B. Sperrmüll, Elektrogeräte, Sondermüll..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
                style={{ backgroundColor: primaryColor }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Anfrage senden
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
