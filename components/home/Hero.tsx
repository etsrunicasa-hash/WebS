import { BrandCarousel } from "@/components/home/BrandCarousel";
import type { Locale } from "@/lib/i18n";

import { getHomeCarouselBrands } from "@/lib/catalog";
import type { Dictionary } from "@/messages/fr";

type HeroProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Hero({ dictionary, locale }: HeroProps) {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-eyebrow">{dictionary.home.hero.eyebrow}</p>
          <h1 className="mt-5 text-balance font-serif text-[clamp(3.25rem,10vw,6.5rem)] leading-[1.02] tracking-[-0.045em] text-ink sm:mt-6">
            {dictionary.home.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-7 text-ink-muted sm:mt-6 sm:text-lg sm:leading-8">
            {dictionary.home.hero.description}
          </p>
        </div>
      </div>

      <BrandCarousel
        brands={getHomeCarouselBrands(dictionary)}
        labels={dictionary.home.brands}
        locale={locale}
      />

      <div className="container-shell">
        <section className="mx-auto max-w-3xl py-12 text-center sm:py-16">
          <h2 className="font-serif text-[clamp(2.45rem,8vw,5rem)] leading-none tracking-[-0.055em] text-ink">
            {dictionary.home.company.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:mt-6 sm:text-lg sm:leading-8">
            {dictionary.home.company.body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            {dictionary.home.company.facts.map((item) => (
              <p
                className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
