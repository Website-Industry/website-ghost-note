import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Si l'image est externe (Unsplash), on la garde telle quelle
  // Sinon, on utilise le chemin relatif
  const imageSrc = src.startsWith('http') ? src : src;

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-slate-800 animate-pulse"
          aria-hidden="true"
        />
      )}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        style={{ 
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto',
        }}
      />
    </div>
  );
};

export default OptimizedImage;
