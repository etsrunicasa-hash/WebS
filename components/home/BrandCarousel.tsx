"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { getHomeCarouselBrands } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/fr";

type BrandCarouselProps = {
  brands: ReturnType<typeof getHomeCarouselBrands>;
  labels: Dictionary["home"]["brands"];
  locale: Locale;
};

export function BrandCarousel({ brands, labels, locale }: BrandCarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => setEdges({
      start: element.scrollLeft <= 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const item = element.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * ((item?.offsetWidth ?? element.clientWidth) + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <section className="brand-showcase mt-12 sm:mt-16" aria-label={labels.region}>
      <div className="container-shell">
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-8">
          <h2 className="text-lg font-medium tracking-tight text-ink sm:text-xl">{labels.title}</h2>
          <div className="flex items-center gap-5">
            <Link className="hidden text-sm text-ink-muted underline decoration-line underline-offset-4 hover:text-brand-primary sm:inline" href={`/${locale}/catalog`}>
              {labels.catalog}
            </Link>
            <div className="flex gap-2">
              <button aria-label={labels.previous} aria-controls="brand-carousel" className="brand-arrow" disabled={edges.start} onClick={() => move(-1)} type="button">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m14 6-6 6 6 6" /></svg>
              </button>
              <button aria-label={labels.next} aria-controls="brand-carousel" className="brand-arrow" disabled={edges.end} onClick={() => move(1)} type="button">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m10 6 6 6-6 6" /></svg>
              </button>
            </div>
          </div>
        </div>
        <ul className="brand-track" id="brand-carousel" ref={track} tabIndex={0} aria-label={labels.region}>
          {brands.map((brand, index) => (
            <li className="brand-slide" key={brand.brand}>
              <Link className="group block rounded-sm focus-visible:outline-offset-4" href={`/${locale}/catalog#${brand.categoryId}`}>
                <div className="brand-image">
                  <Image alt={brand.imageAlt} className="object-contain p-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] motion-reduce:transition-none sm:p-7" fill loading={index < 5 ? "eager" : "lazy"} sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 220px" src={brand.imageSrc} />
                </div>
                <div className="pt-4 sm:pt-5">
                  <h3 className="text-sm font-medium tracking-tight text-ink sm:text-base">{brand.brand}</h3>
                  <p className="mt-1 text-xs text-ink-muted sm:text-sm">{brand.category}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="mt-5 inline-block text-sm text-ink-muted underline decoration-line underline-offset-4 hover:text-brand-primary sm:hidden" href={`/${locale}/catalog`}>{labels.catalog}</Link>
      </div>
    </section>
  );
}
