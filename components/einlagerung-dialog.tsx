"use client";

import { useState } from "react";
import { X, Send, Loader2, Warehouse } from "lucide-react";
import brandConfig from "@/brand.json";

const storageTypes = [
  "Möbel",
  "Hausrat / Kartons",
  "Elektrogeräte",
  "Sportgeräte",
  "Saisonartikel",
  "Akten / Dokumente",
  "Sonstiges",
];

interface EinlagerungDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EinlagerungDialog({ isOpen, onClose }: EinlagerungDialogProps) {
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
      storageType: formData.getAll("storageType"),
      volume: formData.get("volume"),
      pickupAddress: formData.get("pickupAddress"),
      startDate: formData.get("startDate"),
      duration: formData.get("duration"),
      notes: formData.get("notes"),
    };

    try {
      const response = await fetch("/api/einlagerung", {
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
              <Warehouse className="w-5 h-5" style={{ color: primaryColor }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Einlagerung anfragen</h3>
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
                  <label htmlFor="einlagerung-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="einlagerung-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="einlagerung-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="einlagerung-phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="einlagerung-email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="einlagerung-email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: primaryColor }}
                  placeholder="Ihre E-Mail-Adresse"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Was soll eingelagert werden? *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {storageTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="storageType"
                        value={type}
                        className="w-4 h-4 rounded border-gray-300"
                        style={{ accentColor: primaryColor }}
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="einlagerung-volume" className="block text-sm font-medium text-gray-700 mb-1">
                    Geschätztes Volumen
                  </label>
                  <select
                    id="einlagerung-volume"
                    name="volume"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="1-5">1-5 m³ (wenige Möbel/Kartons)</option>
                    <option value="5-10">5-10 m³ (1 Zimmer)</option>
                    <option value="10-20">10-20 m³ (2-3 Zimmer)</option>
                    <option value="20-40">20-40 m³ (Wohnung)</option>
                    <option value="40+">40+ m³ (Haus)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="einlagerung-duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Voraussichtliche Dauer
                  </label>
                  <select
                    id="einlagerung-duration"
                    name="duration"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="1-4 Wochen">1-4 Wochen</option>
                    <option value="1-3 Monate">1-3 Monate</option>
                    <option value="3-6 Monate">3-6 Monate</option>
                    <option value="6-12 Monate">6-12 Monate</option>
                    <option value="Länger als 1 Jahr">Länger als 1 Jahr</option>
                    <option value="Unbekannt">Noch unbekannt</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="einlagerung-pickup" className="block text-sm font-medium text-gray-700 mb-1">
                  Abholadresse
                </label>
                <input
                  type="text"
                  id="einlagerung-pickup"
                  name="pickupAddress"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: primaryColor }}
                  placeholder="Straße, PLZ Ort (falls Abholung gewünscht)"
                />
              </div>

              <div>
                <label htmlFor="einlagerung-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Gewünschter Starttermin
                </label>
                <input
                  type="date"
                  id="einlagerung-date"
                  name="startDate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: primaryColor }}
                />
              </div>

              <div>
                <label htmlFor="einlagerung-notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Besonderheiten / Anmerkungen
                </label>
                <textarea
                  id="einlagerung-notes"
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                  style={{ outlineColor: primaryColor }}
                  placeholder="z.B. empfindliche Gegenstände, Klimatisierung benötigt..."
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
