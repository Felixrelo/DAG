import brandConfig from "@/brand.json";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type LabelKey = "leadCallback" | "phoneClick" | "whatsappClick";

// Plaintext user data for Google Ads Enhanced Conversions. gtag.js normalizes
// and SHA-256 hashes these client-side before sending — never hash here.
interface UserData {
  email?: string;
  phone_number?: string;
  address?: {
    first_name?: string;
    last_name?: string;
  };
}

interface TrackOptions {
  eventName: string;
  labelKey: LabelKey;
  params?: Record<string, unknown>;
  userData?: UserData;
}

export function track({ eventName, labelKey, params, userData }: TrackOptions): void {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, params || {});

  const conversionId = brandConfig.tracking?.googleAdsConversionId;
  const labels = brandConfig.tracking?.googleAdsLabels as
    | Record<LabelKey, string | null>
    | undefined;
  const label = labels?.[labelKey];
  if (conversionId && label) {
    // Enhanced Conversions: attach user data to the upcoming conversion.
    if (userData && (userData.email || userData.phone_number)) {
      window.gtag("set", "user_data", userData);
    }
    window.gtag("event", "conversion", {
      send_to: `${conversionId}/${label}`,
      ...(params || {}),
    });
  }
}
