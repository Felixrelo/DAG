"use client";

import { useState } from "react";
import { X, Send, Loader2, MessageSquare } from "lucide-react";
import brandConfig from "@/brand.json";

export function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";
  const secondaryColor = brandConfig.theme?.colors?.secondary || "#ec4899";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 md:bottom-8 z-40 flex items-center gap-2 px-4 py-3 rounded-full text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        style={{ backgroundColor: secondaryColor }}
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden md:inline font-semibold">Nachricht senden</span>
      </button>

      {/* Dialog Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={resetForm}
          />

          {/* Dialog */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Kontakt aufnehmen</h3>
              <button
                onClick={resetForm}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Vielen Dank!</h4>
                  <p className="text-gray-600 mb-6">Wir melden uns schnellstmöglich bei Ihnen.</p>
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
                  <div>
                    <label htmlFor="dialog-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="dialog-name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ outlineColor: primaryColor }}
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="dialog-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="dialog-phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ outlineColor: primaryColor }}
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label htmlFor="dialog-email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="dialog-email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={{ outlineColor: primaryColor }}
                      placeholder="Ihre E-Mail"
                    />
                  </div>

                  <div>
                    <label htmlFor="dialog-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Nachricht
                    </label>
                    <textarea
                      id="dialog-message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                      style={{ outlineColor: primaryColor }}
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="dialog-privacy"
                      name="privacy"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="dialog-privacy" className="text-xs text-gray-500">
                      Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *
                    </label>
                  </div>

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
                        Nachricht senden
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
