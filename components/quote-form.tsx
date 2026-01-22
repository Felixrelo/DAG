"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import brandConfig from "@/brand.json";

export function QuoteForm({ className = "" }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const primaryColor = brandConfig.theme?.colors?.primary || "#7c3aed";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-center ${className}`}>
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Vielen Dank!</h3>
        <p className="text-gray-600">Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style={{ outlineColor: primaryColor }} placeholder="Ihr Name" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style={{ outlineColor: primaryColor }} placeholder="Ihre Telefonnummer" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
        <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style={{ outlineColor: primaryColor }} placeholder="Ihre E-Mail" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">Umzug von *</label>
          <input type="text" id="from" name="from" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style={{ outlineColor: primaryColor }} placeholder="PLZ / Stadt" />
        </div>
        <div>
          <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">Umzug nach *</label>
          <input type="text" id="to" name="to" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style={{ outlineColor: primaryColor }} placeholder="PLZ / Stadt" />
        </div>
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Wunschtermin</label>
        <input type="date" id="date" name="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent" style={{ outlineColor: primaryColor }} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
        <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-none" style={{ outlineColor: primaryColor }} placeholder="Beschreiben Sie Ihren Umzug..." />
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity" style={{ backgroundColor: primaryColor }}>
        {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" />Wird gesendet...</> : <><Send className="w-5 h-5" />Kostenloses Angebot anfordern</>}
      </button>
      <p className="text-xs text-gray-500 text-center">Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.</p>
    </form>
  );
}
