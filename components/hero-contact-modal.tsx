"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle, Phone, PhoneIncoming } from "lucide-react";
import brandConfig from "@/brand.json";
import { useLanguage } from "@/lib/language-context";
import { track } from "@/lib/tracking";

const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

interface HeroContactModalProps {
  phone: string;
  callLabel: string;
  callbackLabel: string;
  variant?: "hero" | "compact";
}

function leadSourceFromUrl(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const p = new URLSearchParams(window.location.search);
  if (p.get("gclid") || p.get("gbraid") || p.get("wbraid") || p.get("gad_source")) {
    return "google_ads";
  }
  return p.get("utm_source") || undefined;
}

export function HeroContactModal({ phone, callLabel, callbackLabel, variant = "hero" }: HeroContactModalProps) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const de = language === "de";
  const tx = {
    title: de ? "Rückruf anfordern" : "Request a callback",
    subtitle: de
      ? "Hinterlassen Sie Ihre Kontaktdaten und wir rufen Sie zurück."
      : "Leave your details and we'll call you back.",
    firstName: de ? "Vorname" : "First name",
    lastName: de ? "Nachname" : "Last name",
    email: "E-Mail",
    phone: de ? "Telefon" : "Phone",
    wishDate: de ? "Wunschdatum" : "Preferred date",
    wishTime: de ? "Wunschzeit" : "Preferred time",
    asap: de ? "Schnellstmöglich" : "As soon as possible",
    morning: de ? "Vormittag (8–12 Uhr)" : "Morning (8am–12pm)",
    afternoon: de ? "Nachmittag (12–17 Uhr)" : "Afternoon (12–5pm)",
    evening: de ? "Abend (17–20 Uhr)" : "Evening (5–8pm)",
    privacy: de ? "Ich stimme der " : "I agree to the ",
    privacyLink: de ? "Datenschutzerklärung" : "privacy policy",
    privacyAfter: de
      ? " zu und bin mit der Kontaktaufnahme einverstanden."
      : " and consent to being contacted.",
    submit: de ? "Rückruf anfordern" : "Request callback",
    sending: de ? "Wird gesendet..." : "Sending...",
    error: de
      ? "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
      : "Something went wrong. Please try again.",
    successTitle: de ? "Vielen Dank!" : "Thank you!",
    successBody: de ? "Wir melden uns schnellstmöglich bei Ihnen." : "We'll get back to you as soon as possible.",
  };

  const close = () => {
    setIsOpen(false);
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phone") as string;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: phoneNumber,
          email,
          callbackDate: formData.get("callbackDate"),
          callbackSlot: formData.get("callbackSlot"),
          leadSource: leadSourceFromUrl(),
        }),
      });

      if (!res.ok) throw new Error();
      track({
        eventName: "generate_lead",
        labelKey: "leadCallback",
        params: { lead_type: "callback_request" },
        userData: {
          email,
          phone_number: phoneNumber,
          address: { first_name: firstName, last_name: lastName },
        },
      });
      setStatus("success");
      form.reset();
      setTimeout(close, 2500);
    } catch {
      setStatus("error");
    }
  };

  const trigger = variant === "compact" ? (
    <div className="inline-flex items-stretch overflow-hidden rounded-lg border border-gray-200">
      <a
        href={`tel:${phone}`}
        aria-label={callLabel}
        className="inline-flex items-center justify-center w-10 h-10 text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <Phone className="h-5 w-5" />
      </a>
      <div className="w-px bg-gray-200" aria-hidden="true" />
      <button
        onClick={() => setIsOpen(true)}
        aria-label={callbackLabel}
        className="inline-flex items-center justify-center w-10 h-10 text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <PhoneIncoming className="h-5 w-5" />
      </button>
    </div>
  ) : (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <a
        href={`tel:${phone}`}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-colors whitespace-nowrap"
      >
        <Phone className="h-5 w-5" /> {callLabel}
      </a>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-colors whitespace-nowrap"
      >
        <PhoneIncoming className="h-5 w-5" /> {callbackLabel}
      </button>
    </div>
  );

  return (
    <>
      {trigger}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-auto">
            <div className="flex items-start justify-between p-4 sm:p-6 border-b">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{tx.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{tx.subtitle}</p>
              </div>
              <button onClick={close} aria-label="Close" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4 sm:p-6">
              {status === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{tx.successTitle}</h4>
                  <p className="text-gray-600">{tx.successBody}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">{tx.firstName} *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full h-11 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent appearance-none" style={{ outlineColor: primaryColor }} placeholder="Max" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">{tx.lastName} *</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full h-11 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent appearance-none" style={{ outlineColor: primaryColor }} placeholder="Mustermann" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">{tx.email} *</label>
                    <input type="email" id="lead-email" name="email" required className="w-full h-11 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent appearance-none" style={{ outlineColor: primaryColor }} placeholder="max@beispiel.de" />
                  </div>
                  <div>
                    <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">{tx.phone} *</label>
                    <input type="tel" id="lead-phone" name="phone" required className="w-full h-11 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent appearance-none" style={{ outlineColor: primaryColor }} placeholder="0821 12345678" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="lead-callback-date" className="block text-sm font-medium text-gray-700 mb-1">{tx.wishDate}</label>
                      <input
                        type="date"
                        id="lead-callback-date"
                        name="callbackDate"
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full h-11 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent appearance-none bg-white"
                        style={{ outlineColor: primaryColor }}
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-callback-slot" className="block text-sm font-medium text-gray-700 mb-1">{tx.wishTime}</label>
                      <select
                        id="lead-callback-slot"
                        name="callbackSlot"
                        defaultValue=""
                        className="w-full h-11 px-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent bg-white appearance-none"
                        style={{ outlineColor: primaryColor }}
                      >
                        <option value="">{tx.asap}</option>
                        <option value={tx.morning}>{tx.morning}</option>
                        <option value={tx.afternoon}>{tx.afternoon}</option>
                        <option value={tx.evening}>{tx.evening}</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="lead-privacy" name="privacy" required className="mt-1 shrink-0" />
                    <label htmlFor="lead-privacy" className="text-xs text-gray-500">
                      {tx.privacy}
                      <a href="/datenschutz" className="underline" style={{ color: primaryColor }}>{tx.privacyLink}</a>
                      {tx.privacyAfter} *
                    </label>
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-500">{tx.error}</p>
                  )}
                  <button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center gap-2 h-12 px-6 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity" style={{ backgroundColor: primaryColor }}>
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> {tx.sending}</>
                    ) : (
                      tx.submit
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
