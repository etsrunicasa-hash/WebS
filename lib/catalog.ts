export const catalogCategoryImages = {
  beer: "/category-images/beer.jpg",
  wine: "/category-images/wine.jpg",
  whisky: "/category-images/whisky.jpg",
  arak: "/category-images/arak.jpg",
  vodka: "/category-images/vodka.jpg",
  spirits: "/category-images/spirits.jpg",
} as const;

export function getCatalogCategoryImage(categoryId: string) {
  return (
    catalogCategoryImages[categoryId as keyof typeof catalogCategoryImages] ??
    "/category-images/beer.jpg"
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

export const homeCarouselImages = [
  "/images/IMG_0640.JPG",
  "/images/IMG_0646.JPG",
  "/images/IMG_0648.PNG",
  "/images/IMG_0649.jpg",
] as const;
