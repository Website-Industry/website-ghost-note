import React from 'react';

interface NewsletterButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const NewsletterButton: React.FC<NewsletterButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className = ''
}) => {
  const newsletterUrl = 'https://carrd.us11.list-manage.com/subscribe?u=59d5607b009efda86e6906f40&id=da87a95792';

  const baseClasses = 'inline-flex items-center justify-center gap-2 font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ghost-black rounded-full';
  
  const variantClasses = {
    primary: 'bg-ghost-gold text-ghost-black hover:bg-ghost-gold/80 focus:ring-ghost-gold',
    secondary: 'bg-ghost-orange text-white hover:bg-ghost-orange/80 focus:ring-ghost-orange',
    outline: 'border-2 border-ghost-gold text-ghost-gold hover:bg-ghost-gold/10 focus:ring-ghost-gold'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <a
      href={newsletterUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label="S'abonner à la newsletter Ghost-Note (nouvelle fenêtre)"
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
        />
      </svg>
      S'abonner à la newsletter
    </a>
  );
};

export default NewsletterButton;
