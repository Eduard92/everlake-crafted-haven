// Lightweight tracking helper for GA4 + Meta Pixel.
// Both providers are loaded in index.html (gtag G-XRPMZTPYYW, fbq 760845936505991).

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export const getDevice = (): "mobile" | "desktop" => {
  if (typeof window === "undefined") return "desktop";
  return window.matchMedia("(max-width: 768px)").matches ? "mobile" : "desktop";
};

export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {},
) => {
  const device = getDevice();
  const payload = { ...params, device };

  try {
    window.gtag?.("event", eventName, payload);
  } catch {
    // no-op
  }

  try {
    window.fbq?.("trackCustom", eventName, payload);
  } catch {
    // no-op
  }
};
