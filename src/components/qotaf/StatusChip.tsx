import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, Truck, Package } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type Status = 'requested' | 'accepted' | 'picked_up' | 'delivered';

interface StatusChipProps {
  status: Status;
  className?: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({ status, className = '' }) => {
  const { language } = useLanguage();

  const statusConfig = {
    requested: {
      labelAr: 'مطلوب',
      labelEn: 'Requested',
      icon: Clock,
      variant: 'secondary' as const,
      className: 'bg-warning/10 text-warning-foreground border-warning/20'
    },
    accepted: {
      labelAr: 'مقبول',
      labelEn: 'Accepted',
      icon: CheckCircle,
      variant: 'default' as const,
      className: 'bg-info/10 text-info-foreground border-info/20'
    },
    picked_up: {
      labelAr: 'تم الجمع',
      labelEn: 'Picked Up',
      icon: Truck,
      variant: 'default' as const,
      className: 'bg-qotaf-blue/10 text-qotaf-blue border-qotaf-blue/20'
    },
    delivered: {
      labelAr: 'تم التسليم',
      labelEn: 'Delivered',
      icon: Package,
      variant: 'default' as const,
      className: 'bg-success/10 text-success-foreground border-success/20'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge 
      variant={config.variant}
      className={`${config.className} ${className} flex items-center gap-1 px-3 py-1`}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-medium">
        {language === 'ar' ? config.labelAr : config.labelEn}
      </span>
    </Badge>
  );
};