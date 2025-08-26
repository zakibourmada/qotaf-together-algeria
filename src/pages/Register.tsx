import React from "react";

import { Logo } from "@/components/qotaf/Logo";
import { Button } from "@/components/ui/enhanced-button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Lock, User, ArrowRight, Chrome } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Register: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-float-strong border-0">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Logo size="md" />
            </div>
            <CardTitle className="text-3xl font-bold">
              {language === "ar" ? "إنشاء حساب جديد" : "Create an Account"}
            </CardTitle>
            <CardDescription>
              {language === "ar"
                ? "انضم لمجتمعنا وساهم في التغيير"
                : "Join our community and be part of the change"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullname">
                  {language === "ar" ? "الاسم الكامل" : "Full Name"}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="fullname"
                    type="text"
                    placeholder={
                      language === "ar" ? "مثال: أحمد محمد" : "e.g. John Doe"
                    }
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === "ar" ? "البريد الإلكتروني" : "Email"}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">
                  {language === "ar" ? "كلمة المرور" : "Password"}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="hero" size="lg" className="w-full">
                {language === "ar" ? "إنشاء حساب" : "Create Account"}
                <ArrowRight
                  className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`}
                />
              </Button>
            </form>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-card px-2 text-muted-foreground text-sm">
                {language === "ar" ? "أو" : "OR"}
              </span>
            </div>

            <Button variant="outline" size="lg" className="w-full">
              <Chrome className="h-5 w-5 mr-2" />
              {language === "ar"
                ? "التسجيل باستخدام جوجل"
                : "Sign up with Google"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              {language === "ar"
                ? "لديك حساب بالفعل؟"
                : "Already have an account?"}{" "}
              <a
                href="/login"
                className="font-semibold text-primary hover:underline"
              >
                {language === "ar" ? "سجل الدخول" : "Sign In"}
              </a>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
