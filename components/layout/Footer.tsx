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

  const contactItems = [
    [dictionary.footer.addressLabel, dictionary.legal.address],
    [dictionary.footer.phoneLabel, dictionary.legal.phone],
    [dictionary.footer.faxLabel, dictionary.legal.fax],
    [dictionary.footer.gsmLabel, dictionary.legal.gsm],
    [dictionary.footer.emailLabel, dictionary.legal.email],
  ];

  return (
    <footer className="border-t border-black/6 bg-[#0f1512] text-white">
      <div className="container-shell grid gap-8 py-8 lg:grid-cols-[0.95fr_0.65fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative h-[8rem] w-[7rem] shrink-0 overflow-hidden sm:h-[8.75rem] sm:w-[7.75rem]">
              <Image
                alt={dictionary.imageAlts.logo}
                className="object-contain"
                fill
                sizes="(max-width: 640px) 112px, 124px"
                style={{ transform: "scale(1.24, 1.06)" }}
                src="/Runi_Logo_NoBG.png"
              />
            </div>
            <div>
              <p className="font-serif text-[2rem] leading-none tracking-[-0.04em]">
                {dictionary.site.shortName}
              </p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-white/68">
                {dictionary.site.name}
              </p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/72">
            {dictionary.site.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            {dictionary.footer.navigationTitle}
          </h2>
          <nav className="mt-4 flex flex-col gap-2 text-sm text-white/78">
            {navigation.map((item) => (
              <Link className="hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            {dictionary.footer.contactTitle}
          </h2>
          <dl className="mt-4 space-y-2 text-sm leading-6 text-white/78">
            {contactItems.map(([label, value]) => (
              <div className="grid grid-cols-[88px_1fr] gap-3" key={label}>
                <dt className="text-white/44">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="container-shell flex flex-col gap-2 py-3 text-xs uppercase tracking-[0.18em] text-white/44 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {dictionary.site.name}
          </p>
          <p>{dictionary.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
