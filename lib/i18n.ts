import { en } from "@/messages/en";
import { fr } from "@/messages/fr";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

const dictionaries = {
  fr,
  en,
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function swapLocaleInPath(pathname: string, nextLocale: Locale) {
  if (!pathname || pathname === "/") {
    return `/${nextLocale}`;
  }

  const segments = pathname.split("/");

  if (segments[1] && isLocale(segments[1])) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
