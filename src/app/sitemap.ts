import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo/siteUrl";

const PATHS = [
  "",
  "/privacy-policy",
  "/terms",
  "/consent-to-data-processing",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const now = new Date();

  return PATHS.flatMap((path) => {
    const ruUrl = `${site}${path || "/"}`;
    const enUrl = `${site}/en${path}`;
    const languages = {
      ru: ruUrl,
      en: enUrl,
      "x-default": ruUrl,
    };
    return [
      {
        url: ruUrl,
        lastModified: now,
        changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
        priority: path === "" ? 1 : 0.5,
        alternates: { languages },
      },
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
        priority: path === "" ? 0.9 : 0.4,
        alternates: { languages },
      },
    ];
  });
}
