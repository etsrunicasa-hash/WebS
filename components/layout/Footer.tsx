import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/fr";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
  const navigation = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/catalog`, label: dictionary.nav.catalog },
    { href: `/${locale}/about`, label: dictionary.nav.about },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  const legalItems = [
    [dictionary.legal.registeredNameLabel, dictionary.legal.registeredName],
    [dictionary.legal.iceLabel, dictionary.legal.ice],
    [dictionary.legal.rcLabel, dictionary.legal.rc],
    [dictionary.legal.ifLabel, dictionary.legal.if],
    [dictionary.legal.capitalLabel, dictionary.legal.capital],
    [dictionary.legal.legalFormLabel, dictionary.legal.legalForm],
    [dictionary.legal.creationDateLabel, dictionary.legal.creationDate],
    [dictionary.legal.statusLabel, dictionary.legal.status],
  ];

  return (
    <footer className="border-t border-black/6 bg-[#0f1512] text-white">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.1fr_0.7fr_0.95fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-5">
            <div className="relative h-24 w-[5.25rem] shrink-0 overflow-hidden sm:h-28 sm:w-[6.125rem]">
              <Image
                alt={dictionary.imageAlts.logo}
                className="object-contain"
                fill
                sizes="(max-width: 640px) 84px, 98px"
                src="/Runi_Logo_NoBG.png"
              />
            </div>
            <div>
              <p className="font-serif text-3xl leading-none tracking-[-0.04em]">
                {dictionary.site.shortName}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/68">
                {dictionary.site.name}
              </p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/72">
            {dictionary.site.tagline}
          </p>
          <div className="space-y-2 text-sm leading-7 text-white/72">
            <p>
              {dictionary.footer.addressLabel}: {dictionary.legal.address}
            </p>
            <p>
              {dictionary.footer.phoneLabel}: {dictionary.legal.phone}
            </p>
            <p>
              {dictionary.footer.emailLabel}: {dictionary.legal.email}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            {dictionary.footer.navigationTitle}
          </h2>
          <nav className="mt-5 flex flex-col gap-3 text-sm text-white/78">
            {navigation.map((item) => (
              <Link className="hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            {dictionary.footer.legalTitle}
          </h2>
          <dl className="mt-5 space-y-3 text-sm leading-6 text-white/78">
            {legalItems.map(([label, value]) => (
              <div className="grid grid-cols-[140px_1fr] gap-3" key={label}>
                <dt className="text-white/44">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="container-shell flex flex-col gap-2 py-4 text-xs uppercase tracking-[0.18em] text-white/44 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {dictionary.site.name}
          </p>
          <p>{dictionary.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
