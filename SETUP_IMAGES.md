# Configuration des images

Pour utiliser les effets de parallaxe avec vos photos, suivez ces étapes :

## 1. Copier les images dans le projet

Copiez les images du dossier `H:\Mon Drive\Projets\Ghost Note\Visuel\photos\` vers `public/images/` :

```bash
# Depuis le dossier du projet
mkdir -p public/images

# Copiez manuellement les fichiers suivants :
# - 36236643_1687326984669616_1430280008567357440_n.jpg → public/images/hero.jpg
# - 373632958_781447130651161_7692866884938464771_n_blurr.jpg → public/images/vision.jpg
# - Diseño-sin-título-35-1.png → public/images/rythme.jpg
# - IMG_20200118_141810.jpg → public/images/atelier.jpg
```

## 2. Structure recommandée

```
public/
  images/
    hero.jpg          # Image principale pour le hero
    vision.jpg       # Image pour la section vision
    rythme.jpg       # Image pour la section rythme
    atelier.jpg      # Image pour les ateliers
    cdmc.jpg         # Image pour CDMC (optionnel)
```

## 3. Ajuster les chemins dans le code

Les chemins sont déjà configurés dans `src/pages/index.astro` :
- `/images/hero.jpg`
- `/images/vision.jpg`
- `/images/rythme.jpg`

Si vous utilisez d'autres noms de fichiers, modifiez ces chemins dans le fichier `src/pages/index.astro`.

## 4. Optimisation des images (recommandé)

Pour de meilleures performances, optimisez les images avant de les utiliser :
- Utilisez des formats modernes (WebP) si possible
- Compressez les images pour réduire leur taille
- Assurez-vous que les images ne dépassent pas 2-3 MB chacune

## 5. Images manquantes

Si une image n'est pas trouvée, elle ne s'affichera pas mais le site continuera de fonctionner. 
Vous pouvez utiliser des placeholders temporaires en attendant d'avoir les vraies images.

