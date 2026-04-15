import Image from "next/image";

import { homeCarouselImages } from "@/lib/catalog";
import type { Dictionary } from "@/messages/fr";

type HeroProps = {
  dictionary: Dictionary;
};

const carouselImages = [...homeCarouselImages, ...homeCarouselImages];

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative mx-auto mb-7 h-[12.5rem] w-[10.125rem] overflow-hidden sm:mb-8 sm:h-[15rem] sm:w-[12.125rem] lg:h-[18rem] lg:w-[14.625rem]">
            <Image
              alt={dictionary.imageAlts.logo}
              className="object-contain"
              fill
              priority
              sizes="(max-width: 640px) 162px, (max-width: 1024px) 194px, 234px"
              src="/Runi_Logo_Cropped.png"
            />
          </div>
          <p className="section-eyebrow">{dictionary.home.hero.eyebrow}</p>
          <h1 className="mt-4 font-serif text-[clamp(3.3rem,13vw,7.5rem)] leading-[0.9] tracking-[-0.065em] text-ink sm:mt-5">
            {dictionary.home.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:mt-6 sm:text-lg sm:leading-8">
            {dictionary.home.hero.description}
          </p>
        </div>
      </div>

      <div
        aria-label={dictionary.home.hero.collageCaption}
        className="group mt-10 overflow-hidden border-y border-line bg-white/40 sm:mt-14"
      >
        <div className="flex w-max motion-reduce:animate-none motion-reduce:[transform:none] group-hover:[animation-play-state:paused] [animation:runi-carousel_52s_linear_infinite]">
          {carouselImages.map((src, index) => (
            <figure
              className="h-[15rem] w-[82vw] shrink-0 bg-white/55 sm:h-[24rem] sm:w-[25rem] lg:h-[28rem] lg:w-[30rem]"
              key={`${src}-${index}`}
            >
              <div className="relative h-full w-full">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="object-contain"
                  fill
                  priority={index < homeCarouselImages.length}
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 400px, 480px"
                  src={src}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

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
