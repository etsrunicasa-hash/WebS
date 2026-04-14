import Image from "next/image";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/Button";
import { homeHeroImageSets } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/fr";

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Hero({ locale, dictionary }: HeroProps) {
  return (
    <section className="section-space pt-14 sm:pt-18">
      <div className="container-shell">
        <div className="grid gap-12 xl:grid-cols-[0.74fr_1.26fr] xl:items-start">
          <div className="space-y-8 xl:sticky xl:top-28">
            <p className="section-eyebrow">{dictionary.home.hero.eyebrow}</p>
            <div className="space-y-5">
              <div className="relative h-32 w-24 overflow-hidden sm:h-40 sm:w-30">
                <Image
                  alt={dictionary.imageAlts.logo}
                  className="object-contain"
                  fill
                  priority
                  sizes="120px"
                  src="/Runi_Logo_NoBG.png"
                />
              </div>
              <h1 className="section-title max-w-3xl text-balance text-ink sm:text-[5.4rem]">
                {dictionary.home.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
                {dictionary.home.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className={buttonStyles({ size: "lg" })}
                href={`/${locale}/catalog`}
              >
                {dictionary.home.hero.primaryCta}
              </Link>
              <Link
                className={buttonStyles({ size: "lg", variant: "secondary" })}
                href={`/${locale}/about`}
              >
                {dictionary.home.hero.secondaryCta}
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {dictionary.catalog.categories.map((category) => (
                <Link
                  className="rounded-sm border border-line bg-white/78 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink hover:border-brand-primary hover:text-brand-primary"
                  href={`/${locale}/catalog#${category.id}`}
                  key={category.id}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {dictionary.home.hero.stats.map((item) => (
                <div className="card-surface p-5" key={item.label}>
                  <p className="font-serif text-3xl leading-none tracking-[-0.04em] text-ink">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-ink-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-[1.16fr_0.84fr]">
              <figure className="card-surface relative min-h-[29rem] overflow-hidden sm:min-h-[36rem]">
                <Image
                  alt={dictionary.imageAlts.collage.IMG_0599}
                  className="object-cover"
                  fill
                  loading="eager"
                  priority
                  sizes="(max-width: 1280px) 100vw, 48vw"
                  src={homeHeroImageSets.hero[0]}
                />
              </figure>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <figure className="card-surface relative min-h-[14rem] overflow-hidden sm:min-h-[17rem]">
                  <Image
                    alt={dictionary.imageAlts.collage.IMG_0601}
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1280px) 50vw, 24vw"
                    src={homeHeroImageSets.hero[1]}
                  />
                </figure>
                <figure className="card-surface relative min-h-[14rem] overflow-hidden sm:min-h-[17rem]">
                  <Image
                    alt={dictionary.imageAlts.collage.IMG_0607}
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1280px) 50vw, 24vw"
                    src={homeHeroImageSets.hero[2]}
                  />
                </figure>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <figure className="card-surface relative min-h-[14rem] overflow-hidden">
                <Image
                  alt={dictionary.imageAlts.collage.IMG_0603}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1280px) 50vw, 20vw"
                  src={homeHeroImageSets.strip[0]}
                />
              </figure>
              <figure className="card-surface relative min-h-[14rem] overflow-hidden">
                <Image
                  alt={dictionary.imageAlts.collage.IMG_0605}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1280px) 50vw, 20vw"
                  src={homeHeroImageSets.strip[1]}
                />
              </figure>
              <figure className="card-surface relative min-h-[14rem] overflow-hidden">
                <Image
                  alt={dictionary.imageAlts.collage.IMG_0608}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1280px) 50vw, 20vw"
                  src={homeHeroImageSets.strip[2]}
                />
              </figure>
            </div>

            <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
              <figure className="card-surface relative min-h-[14rem] overflow-hidden">
                <Image
                  alt={dictionary.imageAlts.collage.IMG_0610}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1280px) 50vw, 24vw"
                  src={homeHeroImageSets.strip[3]}
                />
              </figure>
              <figure className="card-surface relative min-h-[14rem] overflow-hidden">
                <Image
                  alt={dictionary.imageAlts.collage.IMG_0613}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1280px) 50vw, 28vw"
                  src={homeHeroImageSets.strip[4]}
                />
              </figure>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-ink-muted">
              {dictionary.home.hero.collageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
