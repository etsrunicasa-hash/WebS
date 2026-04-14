import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const siteConfig = {
  name: "ETS RUNI",
  shortName: "RUNI",
  domain: "etsruni.com",
  url: "https://etsruni.com",
} as const;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function localizedPath(locale: Locale, path = "") {
  const normalizedPath = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "";

  return `/${locale}${normalizedPath}`;
}

export function buildAlternates(locale: Locale, path = "") {
  return {
    canonical: absoluteUrl(localizedPath(locale, path)),
    languages: {
      fr: absoluteUrl(localizedPath("fr", path)),
      en: absoluteUrl(localizedPath("en", path)),
    },
  };
}

type MetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
}: MetadataInput): Metadata {
  const url = absoluteUrl(localizedPath(locale, path));

  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: locale === "fr" ? "fr_MA" : "en_US",
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl("/R.png"),
          width: 512,
          height: 512,
          alt: `${siteConfig.shortName} monogram`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/R.png")],
    },
  };
}
