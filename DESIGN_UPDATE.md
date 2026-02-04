# Mise à jour du design - Ghost-Note

## Nouveau design sombre et artistique

Le site a été mis à jour avec un design sombre par défaut, inspiré du design Carrd original mais avec des améliorations artistiques et graphiques.

## Caractéristiques principales

### 🎨 Design System
- **Thème sombre par défaut** : Fond noir (#0a0a0a) avec texte clair
- **Couleur d'accent** : Jaune doré (#fbbf24) pour les éléments interactifs
- **Effets glass** : Effet de verre dépoli sur les cartes et le header
- **Typographie** : Hiérarchie claire avec des tailles fluides

### 🖼️ Effets de parallaxe
- **Composant ParallaxImage** : Images avec effet de parallaxe au scroll
- **Vitesses ajustables** : Chaque image peut avoir sa propre vitesse de parallaxe
- **Overlay sombre** : Overlay semi-transparent pour améliorer la lisibilité du texte

### ✨ Améliorations visuelles
- **Header fixe** : Navigation fixe en haut avec effet glass
- **Cartes améliorées** : Effets hover avec glow et translation
- **Gradient text** : Texte avec dégradé pour les titres importants
- **Transitions fluides** : Animations douces sur tous les éléments interactifs

## Structure des images

Les images doivent être placées dans `public/images/` :

```
public/images/
  ├── hero.jpg      # Image principale du hero (parallaxe)
  ├── vision.jpg    # Image pour la section vision (parallaxe)
  ├── rythme.jpg    # Image pour la section rythme (parallaxe)
  └── atelier.jpg   # Image pour les ateliers (optionnel)
```

## Composants créés

### ParallaxImage.astro
Composant pour créer des images avec effet de parallaxe :
```astro
<ParallaxImage 
  src="/images/hero.jpg"
  alt="Description"
  speed={0.3}
  overlay={true}
>
  <!-- Contenu par-dessus l'image -->
</ParallaxImage>
```

### HeroSection.astro
Section hero complète avec parallaxe et CTA :
```astro
<HeroSection />
```

### ImageSection.astro
Section avec image et texte côte à côte :
```astro
<ImageSection
  image="/images/vision.jpg"
  alt="Description"
  title="Titre"
  content="Contenu texte"
  imagePosition="left"
  speed={0.4}
/>
```

## Variables CSS disponibles

```css
--bg: #0a0a0a              /* Fond principal */
--bg-secondary: #111111    /* Fond secondaire */
--fg: #f5f5f5             /* Texte principal */
--fg-muted: #d4d4d4       /* Texte atténué */
--muted: #a3a3a3          /* Texte secondaire */
--accent: #fbbf24         /* Couleur d'accent */
--accent-hover: #f59e0b   /* Accent au hover */
--border: rgba(255,255,255,0.1)  /* Bordures */
--overlay: rgba(0,0,0,0.6)       /* Overlay sombre */
```

## Classes utilitaires

- `.glass-effect` : Effet de verre dépoli
- `.gradient-text` : Texte avec dégradé
- `.glow` : Ombre lumineuse autour d'un élément
- `.parallax-container` : Container pour parallaxe
- `.parallax-image` : Image avec parallaxe
- `.parallax-overlay` : Overlay sombre
- `.parallax-content` : Contenu par-dessus l'image

## Prochaines étapes

1. **Copier les images** : Suivez les instructions dans `SETUP_IMAGES.md`
2. **Tester le parallaxe** : Scrollez la page pour voir les effets
3. **Ajuster les vitesses** : Modifiez le paramètre `speed` selon vos préférences
4. **Personnaliser les couleurs** : Ajustez les variables CSS dans `src/styles/global.css`

## Notes techniques

- Le parallaxe utilise `requestAnimationFrame` pour des performances optimales
- Les images sont chargées en lazy loading
- Le header fixe nécessite un padding-top sur le premier élément
- Les effets glass utilisent `backdrop-filter` (support moderne des navigateurs)


