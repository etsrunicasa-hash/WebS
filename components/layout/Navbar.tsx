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
    { href: `/${locale}/catalog`, label: dictionary.nav.catalog },
    { href: `/${locale}/about`, label: dictionary.nav.about },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 px-2 pt-2 sm:px-3">
      <div className="container-shell">
        <div className="relative rounded-md border border-white/55 bg-white/72 shadow-[0_24px_70px_rgba(17,24,20,0.08)] backdrop-blur-xl">
          <div className="flex min-h-[5.1rem] items-center justify-between gap-3 px-3 py-2 sm:min-h-[5.6rem] sm:px-5">
            <Link
              className="flex min-w-0 items-center gap-2.5 sm:gap-3.5"
              href={`/${locale}`}
            >
              <div className="relative h-[4.25rem] w-[3.45rem] shrink-0 overflow-hidden sm:h-[4.9rem] sm:w-[3.95rem] lg:h-[5.35rem] lg:w-[4.35rem]">
                <Image
                  alt={dictionary.imageAlts.logo}
                  className="object-contain"
                  fill
                  priority
                  sizes="(max-width: 640px) 55px, (max-width: 1024px) 63px, 70px"
                  src="/Runi_Logo_Cropped.png"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif text-[1.95rem] leading-none tracking-[-0.04em] text-ink sm:text-[2.25rem]">
                  {dictionary.site.shortName}
                </p>
                <p className="whitespace-nowrap text-[0.64rem] uppercase tracking-[0.14em] text-ink-muted sm:text-[0.78rem] sm:tracking-[0.18em]">
                  {dictionary.site.name}
                </p>
              </div>
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
              className="min-h-11 shrink-0 rounded-md border border-line bg-white/45 px-3.5 py-2 text-[0.95rem] font-medium text-ink lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
              type="button"
            >
              {isOpen ? dictionary.nav.close : dictionary.nav.menu}
            </button>
          </div>

          {isOpen ? (
            <div
              className="border-t border-black/6 px-3 py-4 sm:px-4 lg:hidden"
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
