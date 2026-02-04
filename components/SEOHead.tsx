import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Ghost-Note | Musique Organique Toulouse',
  description = 'Transmission musicale organique à Toulouse. Cours individuels, ateliers collectifs, CDMC. Une approche accessible et bienveillante pour explorer la musique sans barrières académiques.',
  image = 'https://ghost-note.fr/images/logo/logo-with-text.png',
  url = 'https://ghost-note.fr',
  type = 'website',
  noindex = false,
}) => {
  const fullTitle = title.includes('Ghost-Note') ? title : `${title} | Ghost-Note`;
  const fullUrl = url.startsWith('http') ? url : `https://ghost-note.fr${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ghost-note.fr${image}`;

  useEffect(() => {
    // Mettre à jour le titre
    document.title = fullTitle;

    // Fonction helper pour créer/mettre à jour les meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Fonction helper pour créer/mettre à jour les link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Meta tags de base
    setMetaTag('description', description);
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    }

    // Open Graph
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', fullImage, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'Ghost-Note', true);
    setMetaTag('og:locale', 'fr_FR', true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', fullImage);

    // Canonical
    setLinkTag('canonical', fullUrl);

    // Lang sur html
    document.documentElement.lang = 'fr';
  }, [fullTitle, description, fullImage, fullUrl, type, noindex]);

  return null;
};

export default SEOHead;
