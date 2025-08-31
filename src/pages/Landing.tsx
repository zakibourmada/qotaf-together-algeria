import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Logo } from '@/components/qotaf/Logo';
import { KPICard } from '@/components/qotaf/KPICard';
import { RoleSelector } from '@/components/qotaf/RoleSelector';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Recycle, Users, Award, MapPin, ArrowRight, Github, Heart } from 'lucide-react';
import { mockStats, mockLeaderboard } from '@/lib/mock-data';

export const Landing: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = (roleId: string) => {
    console.log('Selected role:', roleId);
    // Navigate to appropriate dashboard/onboarding
  };

  const features = [
    {
      icon: Recycle,
      titleAr: 'جمع مستدام',
      titleEn: 'Sustainable Collection',
      descAr: 'نظام شامل لجمع القوارير البلاستيكية وإعادة تدويرها',
      descEn: 'Comprehensive system for collecting and recycling plastic bottles'
    },
    {
      icon: Users,
      titleAr: 'مجتمع متطوعين',
      titleEn: 'Volunteer Community',
      descAr: 'شبكة من المتطوعين والجمعيات تعمل معًا لخدمة البيئة',
      descEn: 'Network of volunteers and associations working together for the environment'
    },
    {
      icon: Award,
      titleAr: 'مبادرات خيرية',
      titleEn: 'Charitable Initiatives',
      descAr: 'توجيه عائدات البيع لدعم المبادرات الإنسانية في الجزائر',
      descEn: 'Channeling proceeds to support humanitarian initiatives in Algeria'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Logo size="lg" className="justify-center" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-arabic leading-tight">
              {language === 'ar' 
                ? 'معاً نجمع القوارير البلاستيكية لمساعدة الجزائر'
                : 'Together We Collect Plastic Bottles to Help Algeria'
              }
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              {language === 'ar'
                ? 'منصة مفتوحة المصدر لجمع القوارير البلاستيكية وتوجيه العائدات للمبادرات الخيرية'
                : 'Open-source platform for collecting plastic bottles and channeling proceeds to humanitarian initiatives'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto"
                onClick={() => user ? handleRoleSelect('citizen') : navigate('/auth')}
              >
                {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                {language === 'ar' ? 'اعرف أكثر' : 'Learn More'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === 'ar' ? 'إنجازاتنا حتى الآن' : 'Our Impact So Far'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar' 
                ? 'أرقام حقيقية تعكس تأثير مجتمع قطاف' 
                : 'Real numbers reflecting the impact of the Qotaf community'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard
              title={language === 'ar' ? 'إجمالي الكيلوغرامات' : 'Total Kilograms'}
              value={mockStats.totalKg.toLocaleString()}
              icon={Recycle}
              trend={{ value: 12, isPositive: true }}
            />
            <KPICard
              title={language === 'ar' ? 'إجمالي القوارير' : 'Total Bottles'}
              value={mockStats.totalBottles.toLocaleString()}
              icon={Recycle}
              trend={{ value: 8, isPositive: true }}
            />
            <KPICard
              title={language === 'ar' ? 'عمليات الجمع' : 'Total Pickups'}
              value={mockStats.totalPickups.toLocaleString()}
              icon={MapPin}
              trend={{ value: 15, isPositive: true }}
            />
            <KPICard
              title={language === 'ar' ? 'المستخدمون' : 'Active Users'}
              value={mockStats.totalUsers.toLocaleString()}
              icon={Users}
              trend={{ value: 20, isPositive: true }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === 'ar' ? 'كيف يعمل قطاف؟' : 'How Does Qotaf Work?'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نظام بسيط وفعال يجمع بين المواطنين والمتطوعين والجمعيات لخدمة البيئة والمجتمع'
                : 'A simple and effective system that brings together citizens, volunteers, and associations to serve the environment and community'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-float transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {language === 'ar' ? feature.titleAr : feature.titleEn}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === 'ar' ? feature.descAr : feature.descEn}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === 'ar' ? 'انضم إلى مجتمع قطاف' : 'Join the Qotaf Community'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar' 
                ? 'اختر دورك في المبادرة وابدأ رحلتك معنا' 
                : 'Choose your role in the initiative and start your journey with us'
              }
            </p>
          </div>
          
          <RoleSelector onRoleSelect={handleRoleSelect} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'مستعد للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {language === 'ar'
                ? 'انضم إلى آلاف الجزائريين الذين يساهمون في بناء مستقبل أفضل لبلدنا'
                : 'Join thousands of Algerians contributing to building a better future for our country'
              }
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => navigate('/auth')}
            >
              {language === 'ar' ? 'انضم الآن مجاناً' : 'Join Now for Free'}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Logo size="md" className="justify-center mb-8 text-background" />
            <div className="flex justify-center items-center gap-6 mb-8">
              <Button variant="ghost" size="sm" className="text-background hover:text-foreground">
                <Github className="h-5 w-5 mr-2" />
                {language === 'ar' ? 'مفتوح المصدر' : 'Open Source'}
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-foreground">
                <Heart className="h-5 w-5 mr-2" />
                {language === 'ar' ? 'صُنع بحب في الجزائر' : 'Made with love in Algeria'}
              </Button>
            </div>
            <p className="text-background/70">
              © 2024 {language === 'ar' ? 'قطاف - جميع الحقوق محفوظة' : 'Qotaf - All rights reserved'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};