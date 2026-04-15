import Link from "next/link";

import { CatalogCategoryCard } from "@/components/catalog/CatalogCategoryCard";
import { buttonStyles } from "@/components/ui/Button";
import { getCatalogCategoryImage } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/fr";

type CatalogPreviewSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function CatalogPreviewSection({
  locale,
  dictionary,
}: CatalogPreviewSectionProps) {
  return (
    <section className="section-space pt-2 sm:pt-4">
      <div className="container-shell space-y-7 sm:space-y-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="section-eyebrow">{dictionary.catalog.preview.eyebrow}</p>
            <h2 className="section-title text-balance text-ink">
              {dictionary.catalog.preview.title}
            </h2>
            <p className="text-base leading-8 text-ink-muted">
              {dictionary.catalog.preview.description}
            </p>
          </div>

          <Link
            className={buttonStyles({
              className: "w-full sm:w-fit",
              size: "lg",
              variant: "secondary",
            })}
            href={`/${locale}/catalog`}
          >
            {dictionary.catalog.preview.cta}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {dictionary.catalog.categories.map((category) => (
            <CatalogCategoryCard
              category={category}
              href={`/${locale}/catalog#${category.id}`}
              imageSrc={getCatalogCategoryImage(category.id)}
              key={category.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
