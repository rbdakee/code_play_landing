declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackWhatsAppClick(location: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "whatsapp_click", {
    location,
    event_category: "engagement",
    event_label: location,
  });
}
