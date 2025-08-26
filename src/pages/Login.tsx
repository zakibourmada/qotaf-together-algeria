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
import { Mail, Lock, ArrowRight, Chrome } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Login: React.FC = () => {
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
              {language === "ar" ? "تسجيل الدخول" : "Welcome Back!"}
            </CardTitle>
            <CardDescription>
              {language === "ar"
                ? "أدخل بياناتك للوصول إلى حسابك"
                : "Enter your credentials to access your account"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === "ar" ? "البريد الإلكتروني" : "Email"}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={
                      language === "ar" ? "you@example.com" : "you@example.com"
                    }
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">
                    {language === "ar" ? "كلمة المرور" : "Password"}
                  </Label>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {language === "ar"
                      ? "هل نسيت كلمة المرور؟"
                      : "Forgot Password?"}
                  </a>
                </div>
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
                {language === "ar" ? "تسجيل الدخول" : "Sign In"}
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
                ? "تسجيل الدخول باستخدام جوجل"
                : "Sign in with Google"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              {language === "ar" ? "ليس لديك حساب؟" : "Don't have an account?"}{" "}
              <a
                href="/register"
                className="font-semibold text-primary hover:underline"
              >
                {language === "ar" ? "أنشئ حساباً" : "Sign Up"}
              </a>
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
