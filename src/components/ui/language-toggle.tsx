import React from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 font-medium"
    >
      <Languages className={`h-4 w-4 ${isRTL ? 'rotate-0' : 'rotate-0'}`} />
      <span className="text-sm">
        {language === 'ar' ? 'English' : 'العربية'}
      </span>
    </Button>
  );
};