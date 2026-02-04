# Configuration du partage social pour la page Communication Gestuelle

Ce document explique comment la page Communication Gestuelle est configurée pour le partage sur les réseaux sociaux et comment tester/optimiser cette configuration.

## Configuration actuelle

La page Communication Gestuelle utilise les meta tags suivants pour le partage social :

### Meta tags Open Graph (Facebook, LinkedIn, etc.)
- **og:title** : "Communication Gestuelle dans l'Improvisation Musicale | Ghost-Note"
- **og:description** : Description optimisée avec mots-clés pertinents
- **og:image** : `/images/rythme_signe.png` (image illustrative du Rythme Signé)
- **og:url** : `https://ghost-note.fr/#/communication-gestuelle`
- **og:type** : `website`
- **og:site_name** : `Ghost-Note`
- **og:locale** : `fr_FR`

### Meta tags Twitter Card
- **twitter:card** : `summary_large_image` (affiche une grande image)
- **twitter:title** : Titre de la page
- **twitter:description** : Description de la page
- **twitter:image** : Image du Rythme Signé
- **twitter:site** : `@ghostnote_tls` (à mettre à jour avec votre handle Twitter réel)

## Tester le partage social

### 1. Facebook Sharing Debugger
1. Allez sur [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Entrez l'URL : `https://ghost-note.fr/#/communication-gestuelle`
3. Cliquez sur "Debug" puis "Scrape Again" pour rafraîchir les données
4. Vérifiez que l'image, le titre et la description s'affichent correctement

### 2. Twitter Card Validator
1. Allez sur [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Entrez l'URL : `https://ghost-note.fr/#/communication-gestuelle`
3. Vérifiez l'aperçu de la carte Twitter

### 3. LinkedIn Post Inspector
1. Allez sur [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Entrez l'URL : `https://ghost-note.fr/#/communication-gestuelle`
3. Vérifiez l'aperçu

### 4. Test manuel
1. Copiez l'URL de la page
2. Collez-la dans un nouveau post sur Facebook/Twitter/LinkedIn
3. Vérifiez que l'aperçu s'affiche correctement

## Optimisations possibles

### 1. Image optimisée pour le partage social

Les réseaux sociaux recommandent des images avec ces dimensions :
- **Facebook/LinkedIn** : 1200x630px (ratio 1.91:1)
- **Twitter** : 1200x675px (ratio 16:9)

**Recommandation** : Créer une image dédiée pour le partage social si l'image actuelle n'a pas les bonnes dimensions.

### 2. Améliorer la description

La description actuelle est optimisée, mais vous pouvez :
- Ajouter des emojis pertinents (optionnel)
- Inclure un call-to-action
- Limiter à 200 caractères pour Twitter

Exemple amélioré :
```
🎵 Découvrez le Rythme Signé et le Vocal Painting : des langages gestuels qui démocratisent la création musicale collective. Ateliers à Toulouse avec Ghost-Note.
```

### 3. Ajouter un handle Twitter

Si vous avez un compte Twitter, mettez à jour le composant `SEOHead.tsx` :
```typescript
setMetaTag('twitter:site', '@votre_handle', true);
```

### 4. Image alternative

Si l'image `rythme_signe.png` ne s'affiche pas bien sur les réseaux sociaux, vous pouvez :
- Créer une image composite avec texte
- Utiliser une image avec les bonnes dimensions
- Ajouter le logo Ghost-Note en filigrane

## Vérifier que l'image est accessible

Assurez-vous que l'image est accessible publiquement :
- L'image doit être dans `/public/images/rythme_signe.png`
- L'URL complète sera : `https://ghost-note.fr/images/rythme_signe.png`
- Testez l'URL directement dans votre navigateur

## Problèmes courants et solutions

### L'image ne s'affiche pas
- **Cause** : L'image n'est pas accessible publiquement ou l'URL est incorrecte
- **Solution** : Vérifiez que l'image est dans `/public/images/` et que l'URL est correcte

### Les meta tags ne se mettent pas à jour
- **Cause** : Cache des réseaux sociaux
- **Solution** : Utilisez les outils de débogage pour forcer le rafraîchissement

### L'aperçu ne correspond pas
- **Cause** : Les réseaux sociaux mettent en cache les données
- **Solution** : Attendez quelques minutes ou utilisez les outils de débogage pour rafraîchir

## Code actuel dans CommunicationGestuellePage.tsx

```typescript
<SEOHead
  title="Communication Gestuelle dans l'Improvisation Musicale"
  description="Découvrez le Rythme Signé et le Vocal Painting : des langages gestuels qui démocratisent la création musicale collective. Outils de libération créative pour improviser ensemble sans barrière technique. Ateliers à Toulouse avec Ghost-Note."
  url="https://ghost-note.fr/#/communication-gestuelle"
  image="/images/rythme_signe.png"
/>
```

## Prochaines étapes

1. ✅ Meta tags configurés
2. ⏳ Tester avec les outils de débogage
3. ⏳ Optimiser l'image si nécessaire (dimensions, texte)
4. ⏳ Mettre à jour le handle Twitter si vous en avez un
5. ⏳ Tester le partage réel sur les réseaux sociaux

---

**Note** : Avec HashRouter (`#` dans l'URL), certains réseaux sociaux peuvent avoir des difficultés à crawler la page. Si vous rencontrez des problèmes, envisagez de passer à BrowserRouter pour une meilleure compatibilité SEO et partage social.
