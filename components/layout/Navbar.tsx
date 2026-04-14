"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { buttonStyles } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/messages/fr";

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Navbar({ locale, dictionary }: NavbarProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/catalog`, label: dictionary.nav.catalog },
    { href: `/${locale}/about`, label: dictionary.nav.about },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="container-shell">
        <div className="relative rounded-lg border border-white/55 bg-white/66 shadow-[0_24px_70px_rgba(17,24,20,0.08)] backdrop-blur-xl">
          <div className="flex min-h-20 items-center justify-between px-4 sm:px-5">
            <Link className="flex items-center gap-4" href={`/${locale}`}>
              <div className="relative h-20 w-[4.5rem] shrink-0 overflow-hidden sm:h-24 sm:w-[5.25rem]">
                <Image
                  alt={dictionary.imageAlts.logo}
                  className="object-contain"
                  fill
                  preload
                  sizes="(max-width: 640px) 72px, 84px"
                  src="/Runi_Logo_NoBG.png"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-3xl leading-none tracking-[-0.04em] text-ink">
                  {dictionary.site.shortName}
                </p>
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-ink-muted">
                  {dictionary.site.name}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {navItems.map((item) => {
                const isActive =
                  item.href === `/${locale}`
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-md px-4 py-2 text-sm font-medium",
                      isActive
                        ? "bg-black/5 text-ink"
                        : "text-ink-muted hover:text-ink",
                    )}
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitcher
                label={dictionary.nav.languageSwitcherLabel}
                locale={locale}
              />
              <Link
                className={buttonStyles({ size: "md", variant: "secondary" })}
                href={`/${locale}/contact`}
              >
                {dictionary.nav.contactCta}
              </Link>
            </div>

            <button
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              className="rounded-md border border-line px-3 py-2 text-sm font-medium text-ink lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
              type="button"
            >
              {isOpen ? dictionary.nav.close : dictionary.nav.menu}
            </button>
          </div>

          {isOpen ? (
            <div
              className="border-t border-black/6 px-4 py-4 lg:hidden"
              id="mobile-navigation"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive =
                    item.href === `/${locale}`
                      ? pathname === item.href
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm font-medium",
                      isActive
                          ? "bg-black/5 text-ink"
                          : "text-ink-muted hover:text-ink",
                      )}
                      href={item.href}
                      key={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-4 flex items-center justify-between gap-4">
                <LanguageSwitcher
                  label={dictionary.nav.languageSwitcherLabel}
                  locale={locale}
                />
                <Link
                  className={buttonStyles({ size: "md", variant: "secondary" })}
                  href={`/${locale}/contact`}
                  onClick={() => setIsOpen(false)}
                >
                  {dictionary.nav.contactCta}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
