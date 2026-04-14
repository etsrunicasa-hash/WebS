"use client";

import { useState } from "react";
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
    { href: `/${locale}/catalog`, label: dictionary.nav.catalog },
    { href: `/${locale}/about`, label: dictionary.nav.about },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 px-3 pt-2">
      <div className="container-shell">
        <div className="relative rounded-lg border border-white/55 bg-white/66 shadow-[0_24px_70px_rgba(17,24,20,0.08)] backdrop-blur-xl">
          <div className="flex min-h-[4.4rem] items-center justify-between px-4 py-2 sm:px-5">
            <Link className="flex items-center gap-3" href={`/${locale}`}>
              <div className="min-w-0">
                <p className="font-serif text-[2rem] leading-none tracking-[-0.04em] text-ink sm:text-[2.2rem]">
                  {dictionary.site.shortName}
                </p>
                <p className="text-[0.82rem] uppercase tracking-[0.18em] text-ink-muted">
                  {dictionary.site.name}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const isActive =
                  item.href === `/${locale}`
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-[1.02rem] font-medium leading-none",
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

            <div className="hidden items-center gap-2.5 lg:flex">
              <LanguageSwitcher
                label={dictionary.nav.languageSwitcherLabel}
                locale={locale}
              />
              <Link
                className={buttonStyles({
                  className: "min-h-10 px-3.5 py-2 text-[1rem]",
                  size: "md",
                  variant: "secondary",
                })}
                href={`/${locale}/contact`}
              >
                {dictionary.nav.contactCta}
              </Link>
            </div>

            <button
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              className="rounded-md border border-line px-3.5 py-2 text-[1rem] font-medium text-ink lg:hidden"
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
                        "rounded-md px-3 py-3 text-[1rem] font-medium",
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
                  className={buttonStyles({
                    className: "text-[1rem]",
                    size: "md",
                    variant: "secondary",
                  })}
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
