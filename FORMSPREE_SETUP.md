# Configuration Formspree pour le formulaire de contact

Ce guide explique comment configurer Formspree pour recevoir les emails du formulaire de contact du site Ghost-Note.

## Étape 1 : Créer un compte Formspree

1. Allez sur [https://formspree.io](https://formspree.io)
2. Cliquez sur "Sign Up" et créez un compte (gratuit jusqu'à 50 soumissions/mois)
3. Vérifiez votre email pour activer votre compte

## Étape 2 : Créer un nouveau formulaire

1. Une fois connecté, cliquez sur "New Form"
2. Donnez un nom à votre formulaire (ex: "Contact Ghost-Note")
3. Formspree vous génère automatiquement une URL unique, par exemple :
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
4. **Copiez cette URL** - vous en aurez besoin pour le code

## Étape 3 : Configurer les notifications email

1. Dans les paramètres du formulaire, allez dans "Settings"
2. Dans "Email Notifications", ajoutez votre adresse email où vous souhaitez recevoir les messages
3. Vous pouvez personnaliser le sujet et le format de l'email reçu

## Étape 4 : Modifier le code du formulaire

Ouvrez le fichier `pages/AboutContact.tsx` et modifiez la fonction `handleSubmit` :

### Remplacez cette partie :

```typescript
if (Object.keys(newErrors).length === 0) {
  // Ici on pourrait envoyer le formulaire
  console.log('Formulaire soumis:', formData);
}
```

### Par ce code :

```typescript
if (Object.keys(newErrors).length === 0) {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        format: formData.format,
        message: formData.message,
        _subject: `Nouveau message de ${formData.name} - ${formData.format}`
      })
    });
    
    if (response.ok) {
      // Message de succès
      alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', format: 'individuel', message: '' });
      setErrors({});
    } else {
      const errorData = await response.json();
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.');
      console.error('Erreur Formspree:', errorData);
    }
  } catch (error) {
    alert('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
    console.error('Erreur:', error);
  }
}
```

**Important :** Remplacez `YOUR_FORM_ID` par l'ID réel de votre formulaire Formspree.

## Étape 5 : Ajouter un état de chargement (optionnel mais recommandé)

Pour améliorer l'expérience utilisateur, vous pouvez ajouter un état de chargement :

1. Ajoutez un état dans le composant :
```typescript
const [isSubmitting, setIsSubmitting] = useState(false);
```

2. Modifiez la fonction `handleSubmit` :
```typescript
if (Object.keys(newErrors).length === 0) {
  setIsSubmitting(true);
  try {
    // ... code d'envoi ...
  } finally {
    setIsSubmitting(false);
  }
}
```

3. Modifiez le bouton de soumission :
```typescript
<button 
  type="submit"
  disabled={isSubmitting}
  className="w-full py-5 bg-ghost-orange text-white rounded-full font-bold text-lg hover:bg-ghost-orange/80 transition-all focus:outline-none focus:ring-2 focus:ring-ghost-orange focus:ring-offset-2 focus:ring-offset-ghost-black disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
</button>
```

## Étape 6 : Tester le formulaire

1. Démarrez votre serveur de développement : `npm run dev`
2. Allez sur la page de contact
3. Remplissez et soumettez le formulaire
4. Vérifiez que vous recevez bien l'email sur l'adresse configurée dans Formspree

## Personnalisation avancée (optionnel)

### Personnaliser le template d'email reçu

Dans Formspree, vous pouvez personnaliser le format de l'email reçu :
- Aller dans "Settings" > "Email Notifications"
- Modifier le template pour inclure toutes les informations du formulaire

### Ajouter un reCAPTCHA (recommandé pour éviter le spam)

1. Dans Formspree, activez reCAPTCHA dans les paramètres
2. Formspree vous donnera une clé publique
3. Ajoutez le script reCAPTCHA dans votre `index.html`

### Redirection après envoi

Vous pouvez rediriger vers une page de remerciement au lieu d'afficher une alerte :

```typescript
if (response.ok) {
  // Redirection vers une page de remerciement
  window.location.href = '/merci';
}
```

## Dépannage

### Le formulaire ne s'envoie pas
- Vérifiez que l'URL Formspree est correcte
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que votre compte Formspree est activé

### Vous ne recevez pas les emails
- Vérifiez votre dossier spam
- Vérifiez que l'email est bien configuré dans Formspree
- Vérifiez les logs dans votre dashboard Formspree

### Erreur CORS
- Formspree gère automatiquement CORS, mais si vous avez des problèmes, vérifiez que vous utilisez bien la méthode POST et les headers corrects

## Ressources

- [Documentation Formspree](https://help.formspree.io/)
- [Exemples de code Formspree](https://help.formspree.io/hc/en-us/articles/360056979234-React)
- [Limites du plan gratuit](https://formspree.io/plans)

---

**Note :** N'oubliez pas de remplacer `YOUR_FORM_ID` par votre véritable ID de formulaire Formspree avant de déployer le site en production.
