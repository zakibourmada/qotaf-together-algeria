import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Users, HandHeart, Building2, Trophy, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Role {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: React.ComponentType<any>;
  color: string;
}

const roles: Role[] = [
  {
    id: 'citizen',
    nameAr: 'مواطن',
    nameEn: 'Citizen',
    descriptionAr: 'احفظ القوارير في البيت واطلب الجمع',
    descriptionEn: 'Store bottles at home and request pickup',
    icon: Users,
    color: 'qotaf'
  },
  {
    id: 'volunteer',
    nameAr: 'متطوع/جامع',
    nameEn: 'Volunteer/Collector',
    descriptionAr: 'اقبل طلبات الجمع القريبة منك',
    descriptionEn: 'Accept nearby pickup requests',
    icon: HandHeart,
    color: 'accent'
  },
  {
    id: 'association',
    nameAr: 'جمعية/نقطة تجميع',
    nameEn: 'Association/Collection Point',
    descriptionAr: 'استقبل من المتطوعين وسجل الأوزان',
    descriptionEn: 'Receive from volunteers and log weights',
    icon: Building2,
    color: 'success'
  },
  {
    id: 'sports_facility',
    nameAr: 'منشأة رياضية',
    nameEn: 'Sports Facility',
    descriptionAr: 'سجل الكميات الكبيرة واطلب الجمع',
    descriptionEn: 'Record bulk quantities and request pickup',
    icon: Trophy,
    color: 'info'
  },
  {
    id: 'public',
    nameAr: 'عام',
    nameEn: 'Public',
    descriptionAr: 'اطلع على الإحصائيات والترتيب العام',
    descriptionEn: 'View national stats and leaderboard',
    icon: Eye,
    color: 'secondary'
  }
];

interface RoleSelectorProps {
  onRoleSelect: (roleId: string) => void;
  selectedRole?: string;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({ onRoleSelect, selectedRole }) => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {roles.map((role) => {
        const Icon = role.icon;
        const isSelected = selectedRole === role.id;
        
        return (
          <Card 
            key={role.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-float ${
              isSelected ? 'ring-2 ring-primary shadow-float' : 'shadow-card hover:scale-105'
            }`}
            onClick={() => onRoleSelect(role.id)}
          >
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === 'ar' ? role.nameAr : role.nameEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'ar' ? role.descriptionAr : role.descriptionEn}
                </p>
              </div>
              <Button 
                variant={isSelected ? role.color as any : 'outline'}
                className="w-full"
              >
                {language === 'ar' ? 'اختر' : 'Select'}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};