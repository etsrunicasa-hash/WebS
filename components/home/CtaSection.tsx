import Link from "next/link";

import { buttonStyles } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/fr";

type CtaSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function CtaSection({ locale, dictionary }: CtaSectionProps) {
  return (
    <section className="section-space pt-0">
      <div className="container-shell">
        <div className="card-surface overflow-hidden p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="section-eyebrow text-brand-primary">
                {dictionary.nav.contact}
              </p>
              <h2 className="section-title max-w-2xl text-balance text-ink">
                {dictionary.home.cta.title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-ink-muted">
                {dictionary.home.cta.body}
              </p>
            </div>

            <Link className={buttonStyles({ size: "lg" })} href={`/${locale}/contact`}>
              {dictionary.home.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
