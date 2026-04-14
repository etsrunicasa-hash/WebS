"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n";
import { swapLocaleInPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const languageOptions: Array<{ code: Locale; flag: string; name: string }> = [
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "en", flag: "🇺🇸", name: "English" },
  ];

  return (
    <div
      aria-label={label}
      className="inline-flex items-center rounded-md border border-white/50 bg-white/60 p-1 shadow-[0_18px_40px_rgba(17,24,20,0.06)] backdrop-blur-xl"
      role="group"
    >
      {languageOptions.map((entry) => {
        const isActive = entry.code === locale;

        return (
          <Link
            aria-current={isActive ? "true" : undefined}
            aria-label={entry.name}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-[6px] text-[1.35rem] leading-none transition",
              isActive
                ? "bg-brand-primary text-white"
                : "text-ink-muted hover:text-ink",
            )}
            href={swapLocaleInPath(pathname, entry.code)}
            key={entry.code}
            title={entry.name}
          >
            <span aria-hidden>{entry.flag}</span>
          </Link>
        );
      })}
    </div>
  );
}
