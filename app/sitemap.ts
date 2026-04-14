import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { absoluteUrl, localizedPath } from "@/lib/utils";

const routes = ["", "/catalog", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, route)),
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.72,
      alternates: {
        languages: {
          fr: absoluteUrl(localizedPath("fr", route)),
          en: absoluteUrl(localizedPath("en", route)),
        },
      },
    })),
  );
}
