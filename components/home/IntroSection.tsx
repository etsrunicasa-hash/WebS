import type { Dictionary } from "@/messages/fr";

type IntroSectionProps = {
  dictionary: Dictionary;
};

export function IntroSection({ dictionary }: IntroSectionProps) {
  return (
    <section className="section-space pt-0">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <p className="section-eyebrow">{dictionary.home.intro.eyebrow}</p>
          <h2 className="section-title text-balance text-ink">
            {dictionary.home.intro.title}
          </h2>
          <p className="max-w-2xl text-base leading-8 text-ink-muted">
            {dictionary.home.intro.body}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {dictionary.home.intro.highlights.map((item) => (
            <article className="card-surface p-6" key={item.title}>
              <p className="font-serif text-2xl leading-tight tracking-[-0.04em] text-ink">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
