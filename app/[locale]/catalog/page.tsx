import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CatalogCategoryCard } from "@/components/catalog/CatalogCategoryCard";
import { CatalogSection } from "@/components/catalog/CatalogSection";
import { buttonStyles } from "@/components/ui/Button";
import { getCatalogCategoryImage } from "@/lib/catalog";
import { getDictionary, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/utils";

type CatalogPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: CatalogPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/catalog",
    title: dictionary.seo.catalog.title,
    description: dictionary.seo.catalog.description,
  });
}

export default async function CatalogPage({ params }: CatalogPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <div className="section-space pt-14 sm:pt-18">
      <div className="container-shell space-y-12">
        <section className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div className="space-y-5">
            <p className="section-eyebrow">{dictionary.catalog.hero.eyebrow}</p>
            <h1 className="section-title max-w-4xl text-balance text-ink">
              {dictionary.catalog.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-ink-muted">
              {dictionary.catalog.hero.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className={buttonStyles({ size: "lg" })} href={`/${locale}/contact`}>
                {dictionary.catalog.hero.primaryCta}
              </Link>
              <Link
                className={buttonStyles({ size: "lg", variant: "secondary" })}
                href={`/${locale}`}
              >
                {dictionary.catalog.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="card-surface p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              {dictionary.catalog.filtersLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {dictionary.catalog.categories.map((category) => (
                <Link
                  className="rounded-sm border border-line bg-white/80 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink hover:border-brand-primary hover:text-brand-primary"
                  href={`#${category.id}`}
                  key={category.id}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.catalog.categories.map((category) => (
            <CatalogCategoryCard
              category={category}
              href={`#${category.id}`}
              imageSrc={getCatalogCategoryImage(category.id)}
              key={category.id}
              variant="catalog"
            />
          ))}
        </section>

        <div className="space-y-12">
          {dictionary.catalog.categories.map((category) => (
            <CatalogSection
              category={category}
              dictionary={dictionary}
              imageSrc={getCatalogCategoryImage(category.id)}
              key={category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
