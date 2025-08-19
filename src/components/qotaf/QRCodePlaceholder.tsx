import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { QrCode, Download, Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface QRCodePlaceholderProps {
  code: string;
  title?: string;
  subtitle?: string;
  showActions?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const QRCodePlaceholder: React.FC<QRCodePlaceholderProps> = ({
  code,
  title,
  subtitle,
  showActions = true,
  size = 'md'
}) => {
  const { language } = useLanguage();

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  return (
    <Card className="shadow-card">
      {title && (
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <QrCode className="h-5 w-5" />
            {title}
          </CardTitle>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </CardHeader>
      )}
      
      <CardContent className="text-center space-y-4">
        {/* QR Code Placeholder */}
        <div className={`${sizeClasses[size]} mx-auto bg-gradient-to-br from-qotaf-green/10 to-qotaf-blue/10 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center p-4`}>
          <QrCode className="h-12 w-12 text-muted-foreground mb-2" />
          <div className="text-xs font-mono text-muted-foreground text-center break-all">
            {code}
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            {language === 'ar' ? 'رمز الاستجابة السريعة' : 'QR Code'}
          </div>
        </div>

        {/* Code Display */}
        <div className="bg-muted rounded-lg p-3">
          <div className="text-sm font-mono text-center">{code}</div>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              {language === 'ar' ? 'تحميل' : 'Download'}
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              {language === 'ar' ? 'مشاركة' : 'Share'}
            </Button>
          </div>
        )}

        {/* Integration Note */}
        <p className="text-xs text-muted-foreground">
          {language === 'ar' 
            ? 'سيتم دمج مولد رمز QR حقيقي في الإصدار النهائي'
            : 'Real QR code generator will be integrated in production'
          }
        </p>
      </CardContent>
    </Card>
  );
};