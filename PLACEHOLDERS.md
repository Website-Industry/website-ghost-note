# Placeholders à remplacer

Ce fichier liste tous les placeholders à remplacer avant la mise en production.

## URLs externes

- **Site CDMC** : `https://cdmc.example`
  - Fichiers concernés :
    - `src/components/Footer.astro` (ligne ~30)
    - `src/pages/formats/cdmc.astro` (ligne ~50)

- **Sawup** : `https://sawup.example`
  - Fichiers concernés :
    - `src/pages/formats/tutorat-ableton.astro` (lignes ~15 et ~90)

## Email

- **Email de contact** : `contact@ghost-note.example`
  - Fichiers concernés :
    - `src/pages/contact.astro` (lignes ~15 et ~120)
    - `src/pages/contact.astro` (mentions légales)

## Configuration du site

- **URL du site** : `https://ghost-note.example`
  - Fichiers concernés :
    - `astro.config.mjs` (ligne ~6)
    - `public/robots.txt` (ligne ~3)
    - `src/layouts/BaseLayout.astro` (ligne ~13)

## Tarifs et informations

- **Tarifs cours individuels** : `[Tarif à définir]`
  - Fichiers concernés :
    - `src/pages/formats/cours-individuels.astro` (ligne ~120)

- **Hébergement** : `[À compléter]`
  - Fichiers concernés :
    - `src/pages/contact.astro` (mentions légales)

## Réseaux sociaux

- **Facebook** : `https://facebook.com/ghost-note`
  - Fichiers concernés :
    - `src/pages/contact.astro` (ligne ~110)

- **Instagram** : `https://instagram.com/ghost-note`
  - Fichiers concernés :
    - `src/pages/contact.astro` (ligne ~115)

## Images

- **Image Open Graph** : `/og-image.jpg`
  - Créer une image 1200x630px et la placer dans `public/og-image.jpg`
  - Fichiers concernés :
    - `src/layouts/BaseLayout.astro` (ligne ~12)

## Formulaires

Le formulaire de contact utilise `mailto:` par défaut. Pour utiliser un service tiers :

### Netlify Forms
1. Décommenter les lignes dans `src/pages/contact.astro` (lignes ~15-17)
2. Ajouter `data-netlify="true"` au formulaire
3. Ajouter un champ honeypot pour la sécurité

### Formspree
1. Créer un compte sur Formspree
2. Remplacer l'action du formulaire par l'URL Formspree fournie
3. Adapter les noms de champs si nécessaire

