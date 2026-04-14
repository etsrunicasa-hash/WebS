import type { Dictionary } from "@/messages/fr";

type ExperienceSectionProps = {
  dictionary: Dictionary;
};

export function ExperienceSection({ dictionary }: ExperienceSectionProps) {
  return (
    <section className="section-space bg-white/45">
      <div className="container-shell">
        <div className="max-w-3xl space-y-5">
          <p className="section-eyebrow">{dictionary.home.experience.eyebrow}</p>
          <h2 className="section-title text-balance text-ink">
            {dictionary.home.experience.title}
          </h2>
          <p className="text-base leading-8 text-ink-muted">
            {dictionary.home.experience.body}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {dictionary.home.experience.timeline.map((item) => (
            <article className="card-surface p-6" key={item.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-secondary">
                {item.year}
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.04em] text-ink">
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
