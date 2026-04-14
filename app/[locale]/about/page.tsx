import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaSection } from "@/components/home/CtaSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { buttonStyles } from "@/components/ui/Button";
import { getDictionary, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/utils";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/about",
    title: dictionary.seo.about.title,
    description: dictionary.seo.about.description,
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const legalItems = [
    [dictionary.legal.registeredNameLabel, dictionary.legal.registeredName],
    [dictionary.legal.iceLabel, dictionary.legal.ice],
    [dictionary.legal.rcLabel, dictionary.legal.rc],
    [dictionary.legal.ifLabel, dictionary.legal.if],
    [dictionary.legal.capitalLabel, dictionary.legal.capital],
    [dictionary.legal.legalFormLabel, dictionary.legal.legalForm],
    [dictionary.legal.creationDateLabel, dictionary.legal.creationDate],
    [dictionary.legal.addressLabel, dictionary.legal.address],
    [dictionary.legal.statusLabel, dictionary.legal.status],
  ];

  return (
    <div className="section-space pt-14 sm:pt-18">
      <div className="container-shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <p className="section-eyebrow">{dictionary.about.hero.eyebrow}</p>
            <h1 className="section-title max-w-3xl text-balance text-ink">
              {dictionary.about.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-ink-muted">
              {dictionary.about.hero.description}
            </p>
          </div>

          <div className="card-surface space-y-4 p-6">
            <p className="section-eyebrow">{dictionary.about.positioning.title}</p>
            <p className="text-sm leading-7 text-ink-muted">
              {dictionary.about.positioning.body}
            </p>
            <ul className="space-y-3 text-sm leading-7 text-ink">
              {dictionary.about.positioning.points.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <IntroSection dictionary={dictionary} />
        <ExperienceSection dictionary={dictionary} />
        <ValuesSection dictionary={dictionary} />

        <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <p className="section-eyebrow">{dictionary.about.legalIntro.title}</p>
            <h2 className="section-title max-w-2xl text-balance text-ink">
              {dictionary.about.legalIntro.title}
            </h2>
            <p className="max-w-xl text-base leading-8 text-ink-muted">
              {dictionary.about.legalIntro.body}
            </p>
            <Link
              className={buttonStyles({ size: "lg" })}
              href={`/${locale}/contact`}
            >
              {dictionary.nav.contactCta}
            </Link>
          </div>

          <div className="card-surface p-6">
            <dl className="space-y-4">
              {legalItems.map(([label, value]) => (
                <div
                  className="grid gap-2 border-b border-black/6 pb-4 sm:grid-cols-[170px_1fr]"
                  key={label}
                >
                  <dt className="text-sm font-medium text-ink-muted">{label}</dt>
                  <dd className="text-sm leading-7 text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <CtaSection dictionary={dictionary} locale={locale} />
      </div>
    </div>
  );
}
