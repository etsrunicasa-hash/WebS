"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n";
import { locales, swapLocaleInPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${locale}`;

  return (
    <div
      aria-label={label}
      className="inline-flex items-center rounded-md border border-white/50 bg-white/60 p-1 shadow-[0_18px_40px_rgba(17,24,20,0.06)] backdrop-blur-xl"
      role="group"
    >
      {locales.map((entry) => {
        const isActive = entry === locale;

        return (
          <Link
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "rounded-[6px] px-3 py-2 text-xs font-semibold tracking-[0.2em]",
              isActive
                ? "bg-brand-primary text-white"
                : "text-ink-muted hover:text-ink",
            )}
            href={swapLocaleInPath(pathname, entry)}
            key={entry}
          >
            {entry.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
