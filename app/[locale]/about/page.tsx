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
    <main className="px-4 py-20 sm:py-24">
      <section className="mx-auto max-w-[760px]">
        <div className="mx-auto mb-10 flex justify-center">
          <div className="relative h-[10rem] w-[8.125rem] sm:h-[12rem] sm:w-[9.75rem]">
            <Image
              alt={dictionary.imageAlts.logo}
              className="object-contain"
              fill
              priority
              sizes="(max-width: 640px) 130px, 156px"
              src="/Runi_Logo_Cropped.png"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="section-eyebrow">{dictionary.about.hero.eyebrow}</p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-none tracking-tight text-neutral-800 sm:text-6xl">
            {dictionary.about.hero.title}
          </h1>
        </div>

        <div className="mt-10 border-t border-line pt-10">
          <div className="space-y-6 text-lg leading-relaxed text-neutral-800">
            {dictionary.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
