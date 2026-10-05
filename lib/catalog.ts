import type { Dictionary } from "@/messages/fr";

export const catalogCategoryImages = {
  beer: "/optimized/categories/beer.webp",
  wine: "/optimized/categories/wine.webp",
  whisky: "/optimized/categories/whisky.webp",
  arak: "/optimized/categories/arak.webp",
  vodka: "/optimized/categories/vodka.webp",
  spirits: "/optimized/categories/spirits.webp",
} as const;

export function getCatalogCategoryImage(categoryId: string) {
  return (
    catalogCategoryImages[categoryId as keyof typeof catalogCategoryImages] ??
    "/optimized/categories/beer.webp"
  );
}

export const homeHeroImageSets = {
  hero: [
    "/home-images/heineken-home.jpg",
    "/home-images/vitalsberg-home.jpg",
    "/home-images/barkan-home.jpg",
  ],
  strip: [
    "/home-images/arak-home.jpg",
    "/home-images/glenscott-pour-home.jpg",
    "/home-images/glenscott-group-home.jpg",
    "/home-images/imperial-vodka-home.jpg",
    "/home-images/pastis-home.jpg",
  ],
} as const;

// Build the showcase from the live catalog, so new brand groups appear automatically.
export function getHomeCarouselBrands(dictionary: Dictionary) {
  const brands = new Map<string, {
    brand: string;
    categoryId: string;
    category: string;
    imageSrc: string;
    imageAlt: string;
  }>();

  for (const category of dictionary.catalog.categories) {
    for (const group of category.groups) {
      const product = group.items.find((item) => item.imageSrc);
      if (!product) continue;
      // The small-format Arak group belongs to the same brand as the full bottles.
      const brand = product.id.startsWith("arak-shalit-") ? "Arak Shalit" : group.title;
      if (brands.has(brand)) continue;
      brands.set(brand, {
        brand,
        categoryId: category.id,
        category: category.name,
        imageSrc: product.imageSrc,
        imageAlt: product.imageAlt,
      });
    }
  }

  return [...brands.values()];
}
