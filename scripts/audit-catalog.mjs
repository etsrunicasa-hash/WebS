import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");

async function loadTypescript(path) {
  const source = await readFile(resolve(root, path), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const [{ fr }, { en }, { productImageCrops }, { catalogCategoryImages }] = await Promise.all([
  loadTypescript("messages/fr.ts"),
  loadTypescript("messages/en.ts"),
  loadTypescript("lib/product-image-crops.ts"),
  loadTypescript("lib/catalog.ts"),
]);
const flatten = (dictionary) => dictionary.catalog.categories.flatMap((category) =>
  category.groups.flatMap((group) => group.items.map((item) => ({
    ...item, category: category.name, categoryId: category.id, group: group.title,
  }))),
);
const products = flatten(fr);
const english = flatten(en);
assert(products.length > 0, "Le catalogue est vide.");
assert.equal(new Set(products.map((item) => item.id)).size, products.length, "Identifiants FR dupliqués.");
assert.equal(new Set(english.map((item) => item.id)).size, english.length, "Identifiants EN dupliqués.");
assert.deepEqual(products.map((item) => item.id), english.map((item) => item.id), "Catalogues FR/EN divergents.");
const metadata = new Map();
async function inspectImage(src) {
  assert(src.startsWith("/") && !src.includes(".."), `Chemin local invalide : ${src}`);
  if (!metadata.has(src)) metadata.set(src, await sharp(resolve(root, `public${src}`)).metadata());
  return metadata.get(src);
}

for (const [index, item] of products.entries()) {
  assert.equal(item.imageSrc, english[index].imageSrc, `Image FR/EN différente : ${item.id}`);
  assert.equal(item.categoryId, english[index].categoryId, `Catégorie FR/EN différente : ${item.id}`);
  if (!item.imageSrc) continue;
  assert(item.imageAlt.trim() && english[index].imageAlt.trim(), `Texte alternatif absent : ${item.id}`);
  const dimensions = await inspectImage(item.imageSrc);
  const crop = productImageCrops[item.id];
  if (crop) {
    assert.equal(crop.sourceWidth, dimensions.width, `Largeur source incorrecte : ${item.id}`);
    assert.equal(crop.sourceHeight, dimensions.height, `Hauteur source incorrecte : ${item.id}`);
    assert(crop.left >= 0 && crop.top >= 0 && crop.width > 0 && crop.height > 0, `Cadrage invalide : ${item.id}`);
    assert(crop.left + crop.width <= dimensions.width && crop.top + crop.height <= dimensions.height, `Cadrage hors image : ${item.id}`);
  }
}
for (const id of Object.keys(productImageCrops)) {
  assert(products.some((item) => item.id === id && item.imageSrc), `Cadrage orphelin : ${id}`);
}
for (const src of Object.values(catalogCategoryImages)) await inspectImage(src);

// Verify the actual deliverables and their complete FR/EN use, not only file existence.
const retouches = JSON.parse(await readFile(resolve(root, "docs/image-retouches.json"), "utf8"));
const retouchedIds = new Set();
for (const image of retouches.products) {
  const dimensions = await inspectImage(image.output);
  assert.equal(dimensions.format, "webp", `Export WebP attendu : ${image.id}`);
  assert.equal(dimensions.width, 800, `Largeur normalisée incorrecte : ${image.id}`);
  assert.equal(dimensions.height, 1200, `Hauteur normalisée incorrecte : ${image.id}`);
  assert(dimensions.hasAlpha, `Transparence absente : ${image.id}`);
  const alpha = await sharp(resolve(root, `public${image.output}`)).extractChannel("alpha").raw().toBuffer();
  assert.equal(alpha[0], 0, `Fond opaque : ${image.id}`);
  assert.equal(alpha[799], 0, `Fond opaque : ${image.id}`);
  assert.equal(alpha[alpha.length - 1], 0, `Fond opaque : ${image.id}`);
  assert(alpha.some((value) => value > 200), `Produit invisible : ${image.id}`);
  await inspectImage(image.src);
  for (const id of image.ids) {
    assert(!retouchedIds.has(id), `Retouche dupliquée : ${id}`);
    retouchedIds.add(id);
    assert(products.some((item) => item.id === id && item.imageSrc === image.output), `Retouche inutilisée : ${id}`);
  }
}
assert.deepEqual([...retouchedIds].sort(), products.filter((item) => item.imageSrc).map((item) => item.id).sort(), "Couverture incomplète des photos du catalogue.");
assert.equal(retouches.categories.length, Object.keys(catalogCategoryImages).length, "Couverture incomplète des catégories.");
for (const image of retouches.categories) {
  assert.equal(catalogCategoryImages[image.id], image.output, `Catégorie non intégrée : ${image.id}`);
  await inspectImage(image.source);
}

const missing = products.filter((item) => !item.imageSrc);
const summary = `${products.length} références ; ${products.length - missing.length} avec image ; ${missing.length} sans photo ; 0 fichier image cassé ; parité FR/EN vérifiée.`;
console.log(summary);
for (const item of missing) console.log(`Photo manquante : ${item.name} — ${item.meta} (${item.id})`);

if (process.argv.includes("--report")) {
  const sourceNotes = JSON.parse(await readFile(resolve(root, "docs/catalogue-sources.json"), "utf8"));
  const lines = [
    "# Inventaire des produits RUNI", "", summary, "",
    "Inventaire généré depuis les deux catalogues du site avec `pnpm catalog:audit --report --allow-missing`.", "",
    "Les 31 packshots et les six visuels de catégorie ont été retouchés avec les outils d’image ChatGPT le 2 octobre 2026. Les sources originales sont conservées ; les prompts et exports sont documentés dans [image-retouches.json](image-retouches.json). La présence d’un rendu retouché ne prouve pas la correspondance exacte du conditionnement. Les réserves sur les sources restent applicables.", "",
    "## Photos manquantes", "",
    ...missing.map((item) => `- **${item.name} — ${item.meta}** : ${sourceNotes[item.id]?.note || "Photo exacte non disponible dans les sources examinées."}`), "",
    "## Catalogue complet", "",
    "| Catégorie | Produit | Format du site | Image | Source et contrôle |",
    "| --- | --- | --- | --- | --- |",
  ];
  for (const item of products) {
    const info = sourceNotes[item.id];
    assert(info, `Provenance non documentée : ${item.id}`);
    const photo = item.imageSrc ? `[Voir](../public${item.imageSrc})${productImageCrops[item.id] ? " (cadrage CSS)" : ""}` : "Photo manquante";
    const source = info.url ? `[Source originale](${info.url}). ` : "";
    const original = info.originalImageSrc ? `[Photo avant retouche](../public${info.originalImageSrc}). ` : "";
    const retouch = info.retouchNote ? `${info.retouchNote} ` : "";
    lines.push(`| ${item.category} | ${item.name} | ${item.meta} | ${photo} | ${source}${original}${retouch}${info.note.replaceAll("|", "/")} |`);
  }
  await mkdir(resolve(root, "docs"), { recursive: true });
  await writeFile(resolve(root, "docs/catalogue-produits.md"), `${lines.join("\n")}\n`);
}

if (missing.length && !process.argv.includes("--allow-missing")) process.exitCode = 1;
