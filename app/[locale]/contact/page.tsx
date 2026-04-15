import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/forms/ContactForm";
import { getDictionary, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/utils";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/contact",
    title: dictionary.seo.contact.title,
    description: dictionary.seo.contact.description,
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  const contactDetails = [
    [dictionary.legal.addressLabel, dictionary.legal.address],
    [dictionary.legal.phoneLabel, dictionary.legal.phone],
    [dictionary.legal.emailLabel, dictionary.legal.email],
    [dictionary.legal.registeredNameLabel, dictionary.legal.registeredName],
  ];

  return (
    <div className="section-space pt-10 sm:pt-14 lg:pt-18">
      <div className="container-shell space-y-10 sm:space-y-12">
        <section className="max-w-3xl space-y-4 sm:space-y-5">
          <p className="section-eyebrow">{dictionary.contact.hero.eyebrow}</p>
          <h1 className="section-title text-balance text-ink">
            {dictionary.contact.hero.title}
          </h1>
          <p className="text-base leading-7 text-ink-muted sm:leading-8">
            {dictionary.contact.hero.description}
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          <aside className="space-y-6">
            <div className="card-surface p-5 sm:p-6">
              <p className="section-eyebrow">{dictionary.contact.details.title}</p>
              <h2 className="mt-4 font-serif text-[2.3rem] leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
                {dictionary.contact.details.officeTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-muted">
                {dictionary.contact.details.intro}
              </p>

              <dl className="mt-6 space-y-4">
                {contactDetails.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                      {label}
                    </dt>
                    <dd className="mt-1 break-words text-sm leading-7 text-ink">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <section className="card-surface p-5 sm:p-8">
            <div className="mb-6 space-y-3">
              <p className="section-eyebrow">{dictionary.contact.form.title}</p>
              <h2 className="font-serif text-[2.3rem] leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
                {dictionary.contact.form.title}
              </h2>
              <p className="text-sm leading-7 text-ink-muted">
                {dictionary.contact.form.intro}
              </p>
            </div>

            <ContactForm dictionary={dictionary} locale={locale} />
          </section>
        </section>
      </div>
    </div>
  );
}
