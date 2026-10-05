// Legacy source-window type retained for the catalogue audit.
// Current product photographs use ChatGPT-retouched transparent WebP packshots.
export type ProductImageCrop = {
  sourceWidth: number;
  sourceHeight: number;
  left: number;
  top: number;
  width: number;
  height: number;
};

// Product packshots now have normalized canvases; no CSS source windows are needed.
export const productImageCrops: Readonly<Record<string, ProductImageCrop>> = {};
