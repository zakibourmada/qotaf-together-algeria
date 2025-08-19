import React from 'react';
import { Logo } from '@/components/qotaf/Logo';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { Button } from '@/components/ui/enhanced-button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const { language, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { 
      labelAr: 'الرئيسية', 
      labelEn: 'Home', 
      href: '/' 
    },
    { 
      labelAr: 'كيف يعمل', 
      labelEn: 'How It Works', 
      href: '/how-it-works' 
    },
    { 
      labelAr: 'الإحصائيات', 
      labelEn: 'Stats', 
      href: '/stats' 
    },
    { 
      labelAr: 'اتصل بنا', 
      labelEn: 'Contact', 
      href: '/contact' 
    }
  ];

  return (
    <nav className={`bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="sm" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {/* Nav Links */}
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {language === 'ar' ? item.labelAr : item.labelEn}
                  </a>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <Button variant="outline" size="sm">
                  {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
                </Button>
                <Button variant="hero" size="sm">
                  {language === 'ar' ? 'انضم الآن' : 'Join Now'}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-border">
              <div className="flex items-center px-2 gap-3">
                <LanguageToggle />
                <Button variant="outline" size="sm" className="flex-1">
                  {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  {language === 'ar' ? 'انضم الآن' : 'Join Now'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};