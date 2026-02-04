# Configuration BrowserRouter (sans # dans l'URL)

Le site utilise maintenant `BrowserRouter` au lieu de `HashRouter`, ce qui signifie que les URLs n'ont plus de `#` (ex: `ghost-note.fr/formats` au lieu de `ghost-note.fr/#/formats`).

## ⚠️ Configuration serveur requise

Avec `BrowserRouter`, le serveur doit être configuré pour rediriger toutes les routes vers `index.html`. Sinon, les utilisateurs obtiendront une erreur 404 en accédant directement à une URL ou en rafraîchissant la page.

## Configuration selon votre hébergeur

### Netlify

Créez un fichier `public/_redirects` (ou `netlify.toml` à la racine) :

```
/*    /index.html   200
```

Ou dans `netlify.toml` :
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

Créez un fichier `vercel.json` à la racine :

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Apache (.htaccess)

Créez un fichier `public/.htaccess` :

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx

Dans votre configuration Nginx :

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### GitHub Pages

GitHub Pages ne supporte pas nativement BrowserRouter. Vous devrez :
1. Utiliser un outil comme `gh-pages` avec un script de build
2. Ou utiliser HashRouter (garder le #)

### Serveur de développement (Vite)

Vite gère automatiquement le fallback en développement, donc pas de configuration nécessaire.

## Vérification

Après déploiement, testez :
1. Accédez directement à une URL comme `votre-site.com/formats`
2. Rafraîchissez la page (F5)
3. Les deux doivent fonctionner sans erreur 404

## Avantages de BrowserRouter

✅ URLs propres sans `#`  
✅ Meilleur SEO  
✅ Partage social amélioré  
✅ URLs plus professionnelles  

## Inconvénients

⚠️ Nécessite une configuration serveur  
⚠️ Peut nécessiter un redéploiement selon l'hébergeur  

---

**Note** : Si vous ne pouvez pas configurer le serveur, vous pouvez revenir à `HashRouter` en remplaçant `BrowserRouter` par `HashRouter` dans `App.tsx`.
