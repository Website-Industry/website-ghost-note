import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-ghost-orange focus:text-white focus:rounded focus:font-bold focus:outline-none focus:ring-2 focus:ring-ghost-gold"
    >
      Aller au contenu principal
    </a>
  );
};

export default SkipLink;
