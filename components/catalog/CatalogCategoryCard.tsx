import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { Dictionary } from "@/messages/fr";

type Category = Dictionary["catalog"]["categories"][number];

type CatalogCategoryCardProps = {
  category: Category;
  href: string;
  imageSrc: string;
  variant?: "preview" | "catalog";
};

const variantClasses = {
  preview: "min-h-[21rem]",
  catalog: "min-h-[23rem]",
};

export function CatalogCategoryCard({
  category,
  href,
  imageSrc,
  variant = "preview",
}: CatalogCategoryCardProps) {
  return (
    <Link className="group block h-full" href={href}>
      <article
        className={cn(
          "relative overflow-hidden rounded-lg border border-line bg-[#111814] text-white shadow-[0_30px_80px_rgba(17,24,20,0.18)]",
          variantClasses[variant],
        )}
      >
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          sizes={
            variant === "preview"
              ? "(max-width: 1280px) 50vw, 33vw"
              : "(max-width: 1280px) 50vw, 33vw"
          }
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111814] via-[#111814]/52 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
          <h3 className="font-serif text-4xl leading-none tracking-[-0.05em] text-white sm:text-5xl">
            {category.name}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/76">
            {category.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {category.tags.map((tag) => (
              <span
                className="rounded-sm border border-white/16 bg-white/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/82"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
