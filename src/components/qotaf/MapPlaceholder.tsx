import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MapPlaceholderProps {
  className?: string;
  showStats?: boolean;
}

export const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ 
  className = '', 
  showStats = true 
}) => {
  const { language } = useLanguage();

  const mockPoints = [
    { id: 1, lat: 36.7538, lng: 3.0588, requests: 5, volunteers: 3 },
    { id: 2, lat: 36.7755, lng: 3.0597, requests: 2, volunteers: 1 },
    { id: 3, lat: 36.7372, lng: 3.0866, requests: 8, volunteers: 4 },
  ];

  return (
    <Card className={`shadow-card ${className}`}>
      <CardContent className="p-0">
        <div className="relative h-96 bg-gradient-to-br from-qotaf-green/10 to-qotaf-blue/10 rounded-lg overflow-hidden">
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 400 400"
              className="absolute inset-0"
            >
              <defs>
                <pattern 
                  id="grid" 
                  width="40" 
                  height="40" 
                  patternUnits="userSpaceOnUse"
                >
                  <path 
                    d="M 40 0 L 0 0 0 40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Mock Collection Points */}
          {mockPoints.map((point) => (
            <div
              key={point.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{
                left: `${20 + (point.id * 25)}%`,
                top: `${30 + (point.id * 15)}%`
              }}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-qotaf-green rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-qotaf-blue rounded-full border-2 border-white text-xs text-white flex items-center justify-center font-bold">
                  {point.requests}
                </div>
              </div>
            </div>
          ))}

          {/* Center Logo/Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-4xl font-bold text-primary">
              {language === 'ar' ? 'قُطاف' : 'Qotaf'}
            </div>
          </div>

          {/* Map Controls Placeholder */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center">
              <span className="text-xs font-bold">+</span>
            </div>
            <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center">
              <span className="text-xs font-bold">-</span>
            </div>
          </div>

          {/* Integration Notice */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
              <p className="text-sm text-muted-foreground">
                {language === 'ar' 
                  ? 'خريطة تفاعلية - ستتم إضافة Leaflet قريباً'
                  : 'Interactive Map - Leaflet integration coming soon'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Map Stats */}
        {showStats && (
          <div className="p-4 border-t border-border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                  <MapPin className="h-4 w-4" />
                  <span>{language === 'ar' ? 'النقاط' : 'Points'}</span>
                </div>
                <div className="text-lg font-bold text-foreground">
                  {mockPoints.length}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                  <Activity className="h-4 w-4" />
                  <span>{language === 'ar' ? 'الطلبات' : 'Requests'}</span>
                </div>
                <div className="text-lg font-bold text-foreground">
                  {mockPoints.reduce((sum, point) => sum + point.requests, 0)}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-1">
                  <Users className="h-4 w-4" />
                  <span>{language === 'ar' ? 'المتطوعون' : 'Volunteers'}</span>
                </div>
                <div className="text-lg font-bold text-foreground">
                  {mockPoints.reduce((sum, point) => sum + point.volunteers, 0)}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};