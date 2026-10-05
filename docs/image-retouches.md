# Retouches des images RUNI — 2 octobre 2026

La version locale utilise **31 packshots retouchés** pour ses **37 fiches produit illustrées**, ainsi que **six compositions de catégorie**. Les ajouts produit, les formats et les textes français/anglais ont été conservés. Les photos sources restent dans leurs dossiers d’origine.

Les retouches ont été réalisées avec l’outil intégré **image_gen de ChatGPT**, puis vérifiées visuellement. Les exports WebP sont enregistrés dans `public/optimized/products` et `public/optimized/categories` ; aucun fichier du site ne dépend du dossier de génération Codex.

## Direction et prompts

Packshots : isoler le flacon ou la canette d’origine, nettoyer les contours et le fond, harmoniser la lumière, améliorer la netteté et conserver les marques, les variantes, les couleurs et les éléments lisibles de l’étiquette. Fond réellement transparent, produit entier, sans accessoire ni ombre de sol ajoutée. Les sélections dans les affiches sont décrites individuellement par position et par référence.

Catégories : recomposer les produits présents dans l’image source au centre d’une scène large, conserver l’atmosphère et les accessoires, améliorer la lumière et les détails, retirer le titre flottant de l’affiche pour laisser le site afficher son titre. La composition ménage de l’espace sur les côtés pour les recadrages.

Les **prompts exacts de chaque retouche**, les sources, les références partageant le même visuel, les tailles et les poids sont conservés dans [image-retouches.json](image-retouches.json). Une correction ciblée a remplacé « 175CL » par « 175 ml » sur le petit flacon Imperial Nature.

## Export

- Packshots : WebP transparent, **800 × 1200 px**, qualité 90, alpha qualité 100. Normalisation des marges uniquement après la retouche ChatGPT ; aucune déformation du produit.
- Catégories : WebP, **1600 × 900 px**, qualité 90.
- Ensemble : **4 342 646 octets**, contre **20 054 775 octets** pour les fichiers sources distincts utilisés, soit **78 % de réduction**.

Les anciens cadrages CSS de photos d’affiche sont remplacés par les packshots. Le composant Next Image fournit toujours les tailles adaptées aux écrans et le chargement différé des produits.

## Traçabilité et limites des sources

La retouche est une amélioration de présentation, pas une preuve de stock ou de conditionnement. Certaines zones masquées dans les affiches ont été reconstruites et de petits détails peuvent différer des photographies. Les réserves déjà documentées sur les formats, les degrés et les millésimes restent dans [catalogue-produits.md](catalogue-produits.md). Les références qui n’avaient aucune photo restent sans image ; aucun produit manquant n’a été inventé.

Le carrousel d’accueil utilise des visuels de logos distincts ; les nouvelles compositions illustrent les catégories du catalogue et leurs aperçus sur l’accueil.

## Vérification

L’audit de catalogue contrôle toutes les fiches illustrées FR/EN, leur correspondance avec les exports, la présence des sources conservées, la taille normalisée, le format WebP et la transparence des packshots. Vérification finale : lint, TypeScript et build de production réussis. L’audit recense 42 références, dont 37 illustrées et cinq sans photo, sans fichier image cassé et avec parité FR/EN. Dans le navigateur, les 51 images du catalogue chargent dans les deux langues ; 37 fiches utilisent les 31 packshots. Les six nouvelles compositions chargent aussi sur l’accueil. À 390 px, aucun débordement horizontal ni erreur JavaScript. Les bannières conservent leur ratio 16:9 pour éviter de couper les bouteilles. Captures de contrôle dans `output/playwright`.
