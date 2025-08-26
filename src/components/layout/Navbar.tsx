// import React from 'react';
// import { Logo } from '@/components/qotaf/Logo';
// import { LanguageToggle } from '@/components/ui/language-toggle';
// import { Button } from '@/components/ui/enhanced-button';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Menu, X } from 'lucide-react';

// interface NavbarProps {
//   className?: string;
// }

// export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
//   const { language, isRTL } = useLanguage();
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const navItems = [
//     {
//       labelAr: 'الرئيسية',
//       labelEn: 'Home',
//       href: '/'
//     },
//     {
//       labelAr: 'كيف يعمل',
//       labelEn: 'How It Works',
//       href: '/how-it-works'
//     },
//     {
//       labelAr: 'الإحصائيات',
//       labelEn: 'Stats',
//       href: '/stats'
//     },
//     {
//       labelAr: 'اتصل بنا',
//       labelEn: 'Contact',
//       href: '/contact'
//     }
//   ];

//   return (
//     <nav className={`bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 ${className}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Logo size="sm" />
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="flex items-center gap-8">
//               {/* Nav Links */}
//               <div className="flex items-center gap-6">
//                 {navItems.map((item) => (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     {language === 'ar' ? item.labelAr : item.labelEn}
//                   </a>
//                 ))}
//               </div>

//               {/* Actions */}
//               <div className="flex items-center gap-3">
//                 <LanguageToggle />
//                 <Button variant="outline" size="sm">
//                   {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
//                 </Button>
//                 <Button variant="hero" size="sm">
//                   {language === 'ar' ? 'انضم الآن' : 'Join Now'}
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-border">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
//                 >
//                   {language === 'ar' ? item.labelAr : item.labelEn}
//                 </a>
//               ))}
//             </div>
//             <div className="pt-4 pb-3 border-t border-border">
//               <div className="flex items-center px-2 gap-3">
//                 <LanguageToggle />
//                 <Button variant="outline" size="sm" className="flex-1">
//                   {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
//                 </Button>
//                 <Button variant="hero" size="sm" className="flex-1">
//                   {language === 'ar' ? 'انضم الآن' : 'Join Now'}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

import React from "react";
// Importations de vos composants personnalisés (chemins d'origine)
import { Logo } from "@/components/qotaf/Logo";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { Button } from "@/components/ui/enhanced-button";
import { useLanguage } from "@/contexts/LanguageContext";

// Importations pour le routage et les icônes
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Importations pour l'animation
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation(); // Hook pour connaître la page active

  const navItems = [
    { labelAr: "الرئيسية", labelEn: "Home", href: "/" },
    { labelAr: "كيف يعمل", labelEn: "How It Works", href: "/how-it-works" },
    { labelAr: "الإحصائيات", labelEn: "Stats", href: "/stats" },
    { labelAr: "اتصل بنا", labelEn: "Contact", href: "/contact" },
  ];

  // Ferme le menu mobile lors d'un changement de page
  React.useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);

  // Définition des animations pour le menu mobile
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.05 },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <nav
        className={`bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <Logo size="sm" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Nav Links */}
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {language === "ar" ? item.labelAr : item.labelEn}
                  </Link>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <Button asChild variant="outline" size="sm">
                  <Link to="/login">
                    {language === "ar" ? "تسجيل الدخول" : "Login"}
                  </Link>
                </Button>
                <Button asChild variant="hero" size="sm">
                  <Link to="/register">
                    {language === "ar" ? "انضم الآن" : "Join Now"}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Mobile Menu Content */}
              <div className="flex flex-col h-full pt-8">
                {/* Nav Links */}
                <motion.div className="flex flex-col gap-6 text-center">
                  {navItems.map((item) => (
                    <motion.div key={item.href} variants={mobileLinkVariants}>
                      <Link
                        to={item.href}
                        className={`block text-2xl font-medium transition-colors ${
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-foreground hover:text-primary/80"
                        }`}
                      >
                        {language === "ar" ? item.labelAr : item.labelEn}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Divider and Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3 } }}
                  className="mt-auto pb-16 flex flex-col gap-4"
                >
                  <div className="h-px bg-border w-1/2 mx-auto" />
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full"
                  >
                    <Link to="/login">
                      {language === "ar" ? "تسجيل الدخول" : "Login"}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="hero" className="w-full">
                    <Link to="/register">
                      {language === "ar" ? "انضم الآن" : "Join Now"}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
