import Image from "next/image";

import { homeCarouselImages } from "@/lib/catalog";
import type { Dictionary } from "@/messages/fr";

type HeroProps = {
  dictionary: Dictionary;
};

const carouselImages = [...homeCarouselImages, ...homeCarouselImages];

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className="pt-20 sm:pt-24">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative mx-auto mb-8 h-[11.5rem] w-[9.25rem] overflow-hidden sm:h-[14rem] sm:w-[11.25rem] lg:h-[16rem] lg:w-[13rem]">
            <Image
              alt={dictionary.imageAlts.logo}
              className="object-contain"
              fill
              priority
              sizes="(max-width: 640px) 148px, (max-width: 1024px) 180px, 208px"
              src="/Runi_Logo_Cropped.png"
            />
          </div>
          <p className="section-eyebrow">{dictionary.home.hero.eyebrow}</p>
          <h1 className="mt-5 font-serif text-[clamp(4rem,9vw,8rem)] leading-[0.86] tracking-[-0.07em] text-ink">
            {dictionary.home.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
            {dictionary.home.hero.description}
          </p>
        </div>
      </div>

      <div
        aria-label={dictionary.home.hero.collageCaption}
        className="group mt-12 overflow-hidden border-y border-line bg-white/40 sm:mt-14"
      >
        <div className="flex w-max motion-reduce:animate-none motion-reduce:[transform:none] group-hover:[animation-play-state:paused] [animation:runi-carousel_52s_linear_infinite]">
          {carouselImages.map((src, index) => (
            <figure
              className="h-[18rem] w-[78vw] shrink-0 bg-white/55 sm:h-[24rem] sm:w-[25rem] lg:h-[28rem] lg:w-[30rem]"
              key={`${src}-${index}`}
            >
              <div className="relative h-full w-full">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="object-contain"
                  fill
                  priority={index < homeCarouselImages.length}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 400px, 480px"
                  src={src}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="container-shell">
        <section className="mx-auto max-w-3xl py-14 text-center sm:py-16">
          <h2 className="font-serif text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.06em] text-ink">
            {dictionary.home.company.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
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
