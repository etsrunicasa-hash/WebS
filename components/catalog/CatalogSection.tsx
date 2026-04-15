import Image from "next/image";

import type { Dictionary } from "@/messages/fr";

type Category = Dictionary["catalog"]["categories"][number];

type CatalogSectionProps = {
  category: Category;
  dictionary: Dictionary;
  imageSrc: string;
};

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getDisplayVolume(meta?: string) {
  if (!meta) {
    return "";
  }

  const match = meta.match(/(\d+(?:[.,]\d+)?\s?(?:cl|ml|l))/i);

  return match ? match[1].toUpperCase() : "";
}

function getDisplayQualifier(meta?: string, volume?: string) {
  if (!meta) {
    return "";
  }

  if (!volume) {
    return meta;
  }

  return meta
    .replace(new RegExp(escapeRegex(volume), "i"), "")
    .replace(/[•·]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function CatalogSection({
  category,
  dictionary,
  imageSrc,
}: CatalogSectionProps) {
  return (
    <section className="scroll-mt-28 border-t border-black/6 pt-8 sm:scroll-mt-32 sm:pt-10" id={category.id}>
      <div className="space-y-8 sm:space-y-10">
        <div className="overflow-hidden rounded-md border border-line bg-white shadow-[0_28px_70px_rgba(17,24,20,0.08)]">
          <div className="grid md:grid-cols-[0.42fr_0.58fr]">
            <div className="flex min-h-[12rem] flex-col justify-between bg-[linear-gradient(135deg,#6a9955_0%,#4d7f41_100%)] p-5 text-white sm:min-h-[13rem] sm:p-8">
              <div className="space-y-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70">
                  {dictionary.catalog.hero.eyebrow}
                </p>
                <h2 className="font-serif text-[3rem] leading-none tracking-[-0.05em] text-white sm:text-6xl">
                  {category.name}
                </h2>
                <p className="max-w-md text-sm leading-7 text-white/78 sm:text-base sm:leading-8">
                  {category.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    className="rounded-sm border border-white/16 bg-white/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/84"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[12rem] border-t border-line bg-[#f0efe9] sm:min-h-[16rem] md:border-t-0 md:border-l">
              <Image
                alt=""
                aria-hidden="true"
                className="object-cover object-center"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                src={imageSrc}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(240,239,233,0.15),rgba(240,239,233,0.02))]" />
            </div>
          </div>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {category.groups.map((group) => (
            <section className="space-y-5" key={group.title}>
              <div className="pb-1">
                <h3 className="font-serif text-[2rem] leading-none tracking-[-0.04em] text-ink sm:text-[2.2rem]">
                  {group.title}
                </h3>
                {group.description ? (
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-muted">
                    {group.description}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => {
                  const displayVolume = getDisplayVolume(item.meta);
                  const displayQualifier = getDisplayQualifier(item.meta, displayVolume);

                  return (
                    <article
                      className="overflow-hidden rounded-md border border-[#d9dfd7] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(244,246,240,0.96)_52%,rgba(229,236,226,0.92))] p-3 shadow-[0_24px_50px_rgba(17,24,20,0.06)] sm:p-4"
                      key={item.id}
                    >
                      <div className="relative mb-4 flex min-h-[13rem] items-end justify-center overflow-hidden rounded-sm border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(240,244,236,0.7))] p-4 sm:mb-5 sm:min-h-[15rem]">
                        <div className="absolute inset-x-10 bottom-5 h-4 rounded-full bg-[radial-gradient(circle,rgba(17,24,20,0.22),rgba(17,24,20,0))]" />
                        {item.imageSrc ? (
                          <Image
                            alt={item.imageAlt || item.name}
                            className="relative z-10 object-contain p-3 drop-shadow-[0_18px_20px_rgba(17,24,20,0.18)] sm:p-4"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            src={item.imageSrc}
                          />
                        ) : (
                          <div className="relative z-10 flex h-full w-full items-end justify-center">
                            <div className="mb-5 h-40 w-16 rounded-t-[2rem] rounded-b-md border border-[#cfd7ca] bg-[linear-gradient(180deg,#ffffff,#e8eee3)] shadow-[0_18px_20px_rgba(17,24,20,0.12)]" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-primary/80">
                          {group.title}
                        </p>
                        {displayVolume ? (
                          <p className="text-[2.9rem] font-semibold uppercase leading-none tracking-[-0.08em] text-ink sm:text-6xl">
                            {displayVolume}
                          </p>
                        ) : null}
                        <h4 className="break-words font-serif text-[1.75rem] leading-none tracking-[-0.04em] text-ink sm:text-[1.9rem]">
                          {item.name}
                        </h4>
                        {displayQualifier ? (
                          <p className="text-sm font-medium leading-6 text-[#7b6846]">
                            {displayQualifier}
                          </p>
                        ) : null}
                        {item.description ? (
                          <p className="pt-1 text-sm leading-7 text-ink-muted">{item.description}</p>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
