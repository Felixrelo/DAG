"use client";

import { useState } from "react";
import { X, Send, Loader2, Building2 } from "lucide-react";
import brandConfig from "@/brand.json";

interface FirmenumzugDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FirmenumzugDialog({ isOpen, onClose }: FirmenumzugDialogProps) {
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
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      fromAddress: formData.get("fromAddress"),
      toAddress: formData.get("toAddress"),
      workstations: formData.get("workstations"),
      date: formData.get("date"),
      notes: formData.get("notes"),
    };

    try {
      const response = await fetch("/api/firmenumzug", {
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
              <Building2 className="w-5 h-5" style={{ color: primaryColor }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Firmenumzug anfragen</h3>
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
                  <label htmlFor="firmenumzug-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ansprechpartner *
                  </label>
                  <input
                    type="text"
                    id="firmenumzug-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="firmenumzug-company" className="block text-sm font-medium text-gray-700 mb-1">
                    Firma *
                  </label>
                  <input
                    type="text"
                    id="firmenumzug-company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="Firmenname"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firmenumzug-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="firmenumzug-phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label htmlFor="firmenumzug-email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="firmenumzug-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="Ihre E-Mail-Adresse"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="firmenumzug-from" className="block text-sm font-medium text-gray-700 mb-1">
                  Aktueller Standort *
                </label>
                <input
                  type="text"
                  id="firmenumzug-from"
                  name="fromAddress"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: primaryColor }}
                  placeholder="Straße, PLZ Ort"
                />
              </div>

              <div>
                <label htmlFor="firmenumzug-to" className="block text-sm font-medium text-gray-700 mb-1">
                  Neuer Standort *
                </label>
                <input
                  type="text"
                  id="firmenumzug-to"
                  name="toAddress"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ outlineColor: primaryColor }}
                  placeholder="Straße, PLZ Ort"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firmenumzug-workstations" className="block text-sm font-medium text-gray-700 mb-1">
                    Anzahl Arbeitsplätze
                  </label>
                  <input
                    type="number"
                    id="firmenumzug-workstations"
                    name="workstations"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                    placeholder="z.B. 15"
                  />
                </div>
                <div>
                  <label htmlFor="firmenumzug-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Wunschtermin
                  </label>
                  <input
                    type="date"
                    id="firmenumzug-date"
                    name="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ outlineColor: primaryColor }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="firmenumzug-notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Besonderheiten
                </label>
                <textarea
                  id="firmenumzug-notes"
                  name="notes"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                  style={{ outlineColor: primaryColor }}
                  placeholder="z.B. Server, sensible Geräte, IT-Ausstattung..."
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
