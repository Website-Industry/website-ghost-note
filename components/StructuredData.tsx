import React from 'react';

interface StructuredDataProps {
  data: object;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Schema Organization pour Ghost-Note
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ghost-note.fr/#organization',
  name: 'Ghost-Note',
  description: 'Transmission musicale organique à Toulouse. Cours individuels, ateliers collectifs, CDMC.',
  url: 'https://ghost-note.fr',
  logo: 'https://ghost-note.fr/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toulouse',
    postalCode: '31000',
    addressCountry: 'FR',
  },
  founder: {
    '@type': 'Person',
    name: 'Marc Charton',
    url: 'https://marc-charton.fr',
  },
  sameAs: [
    // Ajouter les réseaux sociaux quand disponibles
  ],
};

// Schema Course pour les formats
export const courseSchema = (courseName: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: courseName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Ghost-Note',
    url: 'https://ghost-note.fr',
  },
  url: url,
  inLanguage: 'fr',
  courseMode: 'onSite',
});

export default StructuredData;
