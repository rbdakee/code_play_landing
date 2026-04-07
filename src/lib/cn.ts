export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
