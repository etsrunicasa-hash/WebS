import type { Dictionary } from "@/messages/fr";

type Category = Dictionary["catalog"]["categories"][number];

type CatalogSectionProps = {
  category: Category;
  dictionary: Dictionary;
  sectionIndex: number;
};

export function CatalogSection({
  category,
  dictionary,
  sectionIndex,
}: CatalogSectionProps) {
  return (
    <section className="scroll-mt-32 border-t border-black/6 pt-10" id={category.id}>
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="space-y-5">
          <p className="section-eyebrow">{dictionary.catalog.hero.eyebrow}</p>
          <h2 className="section-title text-balance text-ink">{category.name}</h2>
          <p className="max-w-2xl text-base leading-8 text-ink-muted">
            {category.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {category.tags.map((tag) => (
              <span
                className="rounded-sm border border-line bg-white/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink-muted"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
            {dictionary.catalog.sectionNote}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, itemIndex) => {
            const slot = String(sectionIndex * 6 + itemIndex + 1).padStart(2, "0");

            return (
              <article
                className="rounded-lg border border-dashed border-line bg-white/75 p-5"
                key={`${category.id}-${slot}`}
              >
                <div className="mb-4 aspect-[4/5] rounded-md border border-dashed border-line bg-[linear-gradient(180deg,rgba(0,116,53,0.08),rgba(17,24,20,0.04))]" />
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                  {dictionary.catalog.slotLabel} {slot}
                </p>
                <h3 className="mt-2 font-serif text-3xl leading-none tracking-[-0.04em] text-ink">
                  {dictionary.catalog.placeholderTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-muted">
                  {dictionary.catalog.placeholderBody}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
