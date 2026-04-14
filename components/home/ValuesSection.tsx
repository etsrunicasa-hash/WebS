import type { Dictionary } from "@/messages/fr";

type ValuesSectionProps = {
  dictionary: Dictionary;
};

export function ValuesSection({ dictionary }: ValuesSectionProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="max-w-2xl space-y-5">
          <p className="section-eyebrow">{dictionary.home.values.eyebrow}</p>
          <h2 className="section-title text-balance text-ink">
            {dictionary.home.values.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {dictionary.home.values.items.map((item) => (
            <article className="card-surface p-6" key={item.title}>
              <h3 className="font-serif text-3xl leading-tight tracking-[-0.04em] text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
