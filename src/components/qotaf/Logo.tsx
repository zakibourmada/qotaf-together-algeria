import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const { language } = useLanguage();
  
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <img 
          src="/lovable-uploads/fa283495-71c5-4677-bc11-babf84b5dbb7.png" 
          alt="Qotaf Logo"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-primary ${textSizeClasses[size]} leading-tight`}>
            {language === 'ar' ? 'قُطاف' : 'Qotaf'}
          </span>
          {size !== 'sm' && (
            <span className="text-sm text-muted-foreground font-medium">
              {language === 'ar' ? 'جمع تضامني' : 'Collective Impact'}
            </span>
          )}
        </div>
      )}
    </div>
  );
};