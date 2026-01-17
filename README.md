# Ghost-Note

Site web statique pour Ghost-Note - Marque ombrelle pour la transmission musicale.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du projet

```
├── public/          # Assets statiques (robots.txt, favicon, etc.)
├── src/
│   ├── components/  # Composants Astro réutilisables
│   ├── content/     # Content collections (événements)
│   ├── layouts/     # Layouts de base
│   ├── pages/       # Pages du site (routing automatique)
│   └── styles/      # Styles globaux (CSS + Tailwind)
├── astro.config.mjs # Configuration Astro
└── tailwind.config.mjs # Configuration Tailwind
```

## 📝 Gestion des événements

Les événements sont gérés via les content collections Astro dans `src/content/events/`.

Pour ajouter un événement, créez un fichier `.md` dans `src/content/events/` avec le frontmatter suivant :

```yaml
---
title: "Titre de l'événement"
date: "2024-03-22T18:15:00"
type: "atelier" # ou "cdmc", "cours-individuels", "autre"
city: "Toulouse"
venue: "Lieu"
duration: "2h15"
level: "Tous niveaux"
price: "Gratuit"
cta_label: "S'inscrire"
cta_url: "/contact"
---

Description de l'événement (optionnel)
```

## 🎨 Design System

Le design system utilise des variables CSS personnalisées définies dans `src/styles/global.css` :

- `--bg` : Couleur de fond
- `--fg` : Couleur de texte principal
- `--muted` : Couleur de texte secondaire
- `--accent` : Couleur d'accent

Le site supporte le mode sombre automatique via `prefers-color-scheme`.

## 🔧 Configuration

### Placeholders à remplacer

- **Site CDMC** : `https://cdmc.example` → remplacer par l'URL réelle
- **Sawup** : `https://sawup.example` → remplacer par l'URL réelle
- **Email** : `contact@ghost-note.example` → remplacer par l'email réel
- **Site URL** : `https://ghost-note.example` dans `astro.config.mjs` → remplacer par l'URL de production
- **Tarifs** : `[Tarif à définir]` → remplacer par les tarifs réels

### Formulaires

Le formulaire de contact utilise `mailto:` par défaut. Pour utiliser un service tiers :

- **Netlify Forms** : Décommenter les lignes dans `src/pages/contact.astro`
- **Formspree** : Remplacer l'action du formulaire par l'URL Formspree

## 📄 Pages

- `/` : Page d'accueil
- `/vision` : Vision et approche pédagogique
- `/formats` : Hub des formats
- `/formats/cdmc` : Page CDMC (avec lien externe)
- `/formats/ateliers` : Page ateliers
- `/formats/cours-individuels` : Page cours individuels
- `/formats/tutorat-ableton` : Page tutorat Ableton
- `/agenda` : Liste des événements avec filtres
- `/contact` : Formulaire de contact

## 🚀 Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant les sites statiques :

- **Netlify** : `npm run build` → déployer le dossier `dist/`
- **Vercel** : Connexion automatique avec détection Astro
- **GitHub Pages** : Configurer le workflow GitHub Actions
- **Autre** : Build puis upload du dossier `dist/`

## 📚 Technologies

- [Astro](https://astro.build) - Framework web moderne
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitaire
- [TypeScript](https://www.typescriptlang.org) - Typage statique

## 📝 Licence

Tous droits réservés - Ghost-Note

