import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/qotaf/Logo';
import { toast } from '@/hooks/use-toast';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { signIn, signUp, user } = useAuth();
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!isLogin) {
        // Sign up flow
        if (password !== confirmPassword) {
          toast({
            title: language === 'ar' ? 'خطأ' : 'Error',
            description: language === 'ar' 
              ? 'كلمات المرور غير متطابقة' 
              : 'Passwords do not match',
            variant: 'destructive'
          });
          setLoading(false);
          return;
        }

        const { error } = await signUp(email, password);
        if (error) {
          toast({
            title: language === 'ar' ? 'خطأ في التسجيل' : 'Sign Up Error',
            description: error.message,
            variant: 'destructive'
          });
        } else {
          toast({
            title: language === 'ar' ? 'تم التسجيل بنجاح' : 'Registration Successful',
            description: language === 'ar' 
              ? 'تم إنشاء الحساب بنجاح. يمكنك الآن تسجيل الدخول.' 
              : 'Account created successfully. You can now sign in.',
          });
          setIsLogin(true);
        }
      } else {
        // Sign in flow
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: language === 'ar' ? 'خطأ في تسجيل الدخول' : 'Sign In Error',
            description: error.message === 'Invalid login credentials' 
              ? (language === 'ar' ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Invalid email or password')
              : error.message,
            variant: 'destructive'
          });
        } else {
          toast({
            title: language === 'ar' ? 'مرحباً بك' : 'Welcome back',
            description: language === 'ar' ? 'تم تسجيل الدخول بنجاح' : 'Successfully signed in',
          });
        }
      }
    } catch (error) {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' ? 'حدث خطأ غير متوقع' : 'An unexpected error occurred',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <div className="p-6">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Button>
        </div>
      </div>

      {/* Auth Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-card">
          <CardHeader className="text-center">
            <Logo size="md" className="justify-center mb-4" />
            <CardTitle className="text-2xl font-bold">
              {language === 'ar' ? 'انضم إلى قطاف' : 'Join Qotaf'}
            </CardTitle>
            <p className="text-muted-foreground">
              {language === 'ar' 
                ? 'ادخل إلى حسابك أو أنشئ حساباً جديداً' 
                : 'Sign in to your account or create a new one'
              }
            </p>
          </CardHeader>
          <CardContent>
            <Tabs value={isLogin ? 'login' : 'signup'} onValueChange={(value) => setIsLogin(value === 'login')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">
                  {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                </TabsTrigger>
                <TabsTrigger value="signup">
                  {language === 'ar' ? 'إنشاء حساب' : 'Sign Up'}
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    required
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {language === 'ar' ? 'كلمة المرور' : 'Password'}
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter your password'}
                      required
                      dir={isRTL ? 'rtl' : 'ltr'}
                      className={isRTL ? 'pl-10' : 'pr-10'}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className={`absolute top-0 h-full ${isRTL ? 'left-0' : 'right-0'}`}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'}
                    </label>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder={language === 'ar' ? 'أعد كتابة كلمة المرور' : 'Confirm your password'}
                        required
                        dir={isRTL ? 'rtl' : 'ltr'}
                        className={isRTL ? 'pl-10' : 'pr-10'}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className={`absolute top-0 h-full ${isRTL ? 'left-0' : 'right-0'}`}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading 
                    ? (language === 'ar' ? 'جارٍ التحميل...' : 'Loading...')
                    : isLogin 
                      ? (language === 'ar' ? 'تسجيل الدخول' : 'Sign In')
                      : (language === 'ar' ? 'إنشاء حساب' : 'Create Account')
                  }
                </Button>
              </form>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};