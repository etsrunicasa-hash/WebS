import { CatalogPreviewSection } from "@/components/home/CatalogPreviewSection";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Hero } from "@/components/home/Hero";
import { buildMetadata } from "@/lib/utils";
import { getDictionary, isLocale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildMetadata({
    locale,
    title: dictionary.seo.home.title,
    description: dictionary.seo.home.description,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero dictionary={dictionary} locale={locale} />
      <CatalogPreviewSection dictionary={dictionary} locale={locale} />
    </>
  );
}
