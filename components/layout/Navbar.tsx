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
    <header className="sticky top-0 z-50 border-b border-line bg-canvas">
      <div className="container-shell">
        <div className="relative">
          <div className="flex min-h-18 items-center justify-between gap-4 py-3 sm:min-h-20">
            <Link
              aria-label={dictionary.site.name}
              className="shrink-0 font-serif text-[2rem] leading-none tracking-[-0.035em] text-ink sm:text-[2.25rem]"
              href={`/${locale}`}
            >
              {dictionary.site.shortName}
            </Link>

            <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.href === `/${locale}`
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "whitespace-nowrap rounded-md px-3 py-2 text-[0.98rem] font-medium leading-none xl:text-[1.02rem]",
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
              className="min-h-11 shrink-0 rounded-md border border-line bg-transparent px-3.5 py-2 text-[0.95rem] font-medium text-ink lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
              type="button"
            >
              {isOpen ? dictionary.nav.close : dictionary.nav.menu}
            </button>
          </div>

          {isOpen ? (
            <div
              className="border-t border-line py-4 lg:hidden"
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
                        "min-h-11 rounded-md px-3 py-3 text-[1rem] font-medium",
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

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <LanguageSwitcher
                  label={dictionary.nav.languageSwitcherLabel}
                  locale={locale}
                />
                <Link
                  className={buttonStyles({
                    className: "w-full text-[1rem] sm:w-auto",
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
