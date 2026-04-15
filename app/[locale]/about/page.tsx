import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

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

  return (
    <main className="py-14 sm:py-20 lg:py-24">
      <section className="container-shell max-w-[780px]">
        <div className="mx-auto mb-8 flex justify-center sm:mb-10">
          <div className="relative h-[11rem] w-[8.875rem] sm:h-[13rem] sm:w-[10.5rem]">
            <Image
              alt={dictionary.imageAlts.logo}
              className="object-contain"
              fill
              priority
              sizes="(max-width: 640px) 142px, 168px"
              src="/Runi_Logo_Cropped.png"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="section-eyebrow">{dictionary.about.hero.eyebrow}</p>
          <h1 className="mt-4 font-serif text-[clamp(3rem,12vw,4.5rem)] font-semibold leading-none tracking-tight text-neutral-800 sm:mt-5">
            {dictionary.about.hero.title}
          </h1>
        </div>

        <div className="mt-8 border-t border-line pt-8 sm:mt-10 sm:pt-10">
          <div className="space-y-5 text-base leading-8 text-neutral-800 sm:space-y-6 sm:text-lg sm:leading-relaxed">
            {dictionary.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
