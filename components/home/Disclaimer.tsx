import type { Dictionary } from "@/messages/fr";

type DisclaimerProps = {
  dictionary: Dictionary;
};

export function Disclaimer({ dictionary }: DisclaimerProps) {
  return (
    <section className="pb-10 pt-2">
      <div className="container-shell">
        <p className="mx-auto max-w-3xl border-t border-line pt-5 text-center text-xs leading-6 text-ink-muted/80">
          {dictionary.home.disclaimer}
        </p>
      </div>
    </section>
  );
}
