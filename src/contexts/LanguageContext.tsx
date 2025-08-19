import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, getDirection } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: 'rtl' | 'ltr';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar'); // Arabic first
  
  const direction = getDirection(language);
  const isRTL = direction === 'rtl';

  useEffect(() => {
    // Set document direction and language
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Add RTL class for CSS styling
    if (isRTL) {
      document.documentElement.classList.add('rtl');
      document.documentElement.classList.remove('ltr');
    } else {
      document.documentElement.classList.add('ltr');
      document.documentElement.classList.remove('rtl');
    }
  }, [direction, isRTL, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  return {
    t: (key: string) => {
      // Simple translation function - in a real app, you'd import the translation
      const translations = {
        ar: {
          loading: 'جاري التحميل...',
          home: 'الرئيسية',
          dashboard: 'لوحة التحكم',
          // Add more as needed
        },
        en: {
          loading: 'Loading...',
          home: 'Home',
          dashboard: 'Dashboard',
          // Add more as needed
        }
      };
      
      return translations[language]?.[key] || key;
    },
    language
  };
};