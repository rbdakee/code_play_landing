export const BRAND_COLORS = {
  primary: "#60C849",
  primaryLight: "#E8F9E3",
  background: "#FFFFFF",
  foreground: "#212121",
  secondaryBg: "#F2F2F2",
  muted: "#888888",
  mutedLight: "#C0C0C0",
} as const;

export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "2.5rem",
  "3xl": "3rem",
  "4xl": "4rem",
} as const;

export const BREAKPOINTS = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const FONT_SIZES = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "3rem",
} as const;

export const ANIMATIONS = {
  fadeIn: "fadeIn 0.3s ease-in",
  slideInUp: "slideInUp 0.4s ease-out",
  slideInDown: "slideInDown 0.4s ease-out",
} as const;

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
export const WHATSAPP_DISPLAY = process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+7 777 227 0088";
export const TELEGRAM_HANDLE = "@playincode_school";
export const TELEGRAM_URL = "https://t.me/playincode_school";
export const INSTAGRAM_HANDLE = "@playincode.school";
export const INSTAGRAM_URL = "https://instagram.com/playincode.school";

