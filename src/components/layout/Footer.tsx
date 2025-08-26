import React from "react";
import { Button } from "../ui/button";
import { Github, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "../qotaf/Logo";

export const Footer: React.FC = () => {
  const { language, isRTL } = useLanguage();
  return (
    <footer className="bg-foreground text-background py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Logo size="md" className="justify-center mb-8 text-background" />
          <div className="flex justify-center items-center gap-6 mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="text-background hover:text-foreground"
            >
              <Github className="h-5 w-5 mr-2" />
              {language === "ar" ? "مفتوح المصدر" : "Open Source"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-background hover:text-foreground"
            >
              <Heart className="h-5 w-5 mr-2" />
              {language === "ar"
                ? "صُنع بحب في الجزائر"
                : "Made with love in Algeria"}
            </Button>
          </div>
          <p className="text-background/70">
            © {new Date().getFullYear().toString()}{" "}
            {language === "ar"
              ? "قطاف - جميع الحقوق محفوظة"
              : "Qotaf - All rights reserved"}
          </p>
        </div>
      </div>
    </footer>
  );
};
