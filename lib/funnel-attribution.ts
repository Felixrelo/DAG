// Capture Google Ads click identifiers on landing and forward them into the
// funnel iframe URL so the shared funnel (funnel.relofair.com) can tag DAG
// leads as "google_ads". utm_source stays "dag" (set on the funnel base URL),
// so leads still route to the DAG table — the click id is the only ad signal
// that survives, since the funnel forces utm_source to the client slug.

const STORAGE_KEY = "dag_attr";
const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid", "gad_source"] as const;

type Stored = Record<string, string>;

function read(): Stored {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as Stored)
      : {};
  } catch {
    return {};
  }
}

// Persist any click ids present on the current URL. Runs on every page so the
// id (which lands on the homepage, not /angebot) survives in-site navigation.
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const stored = read();
    let changed = false;
    for (const key of CLICK_ID_KEYS) {
      const v = params.get(key);
      if (v && stored[key] !== v) {
        stored[key] = v;
        changed = true;
      }
    }
    if (changed) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    /* storage unavailable — ignore */
  }
}

// Returns the funnel base URL with any captured click ids appended (live URL
// first, then the persisted values).
export function appendAttribution(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;
  try {
    const url = new URL(baseUrl);
    const params = new URLSearchParams(window.location.search);
    const stored = read();
    for (const key of CLICK_ID_KEYS) {
      const v = params.get(key) || stored[key];
      if (v && !url.searchParams.has(key)) url.searchParams.set(key, v);
    }
    return url.toString();
  } catch {
    return baseUrl;
  }
}
