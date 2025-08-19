import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { StatusChip } from './StatusChip';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Weight, Circle, Clock, User, MessageSquare } from 'lucide-react';
import { MockRequest } from '@/lib/mock-data';

interface RequestCardProps {
  request: MockRequest;
  showActions?: boolean;
  onAccept?: (requestId: string) => void;
  onViewDetails?: (requestId: string) => void;
  className?: string;
}

export const RequestCard: React.FC<RequestCardProps> = ({
  request,
  showActions = false,
  onAccept,
  onViewDetails,
  className = ''
}) => {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      language === 'ar' ? 'ar-DZ' : 'en-US',
      {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      }
    );
  };

  return (
    <Card className={`shadow-card hover:shadow-float transition-all duration-300 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-semibold text-foreground">{request.citizenName}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {request.location.address}
              </p>
            </div>
          </div>
          <StatusChip status={request.status} />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Quantity Info */}
        <div className="flex items-center gap-4">
          {request.quantity.kg && (
            <div className="flex items-center gap-1 text-sm">
              <Weight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{request.quantity.kg}</span>
              <span className="text-muted-foreground">
                {language === 'ar' ? 'كغ' : 'kg'}
              </span>
            </div>
          )}
          {request.quantity.bottles && (
            <div className="flex items-center gap-1 text-sm">
              <Circle className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{request.quantity.bottles}</span>
              <span className="text-muted-foreground">
                {language === 'ar' ? 'قارورة' : 'bottles'}
              </span>
            </div>
          )}
        </div>

        {/* Date */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{formatDate(request.createdAt)}</span>
        </div>

        {/* Notes */}
        {request.notes && (
          <div className="flex items-start gap-1 text-sm">
            <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
            <p className="text-muted-foreground">{request.notes}</p>
          </div>
        )}

        {/* QR Code if available */}
        {request.qrCode && (
          <Badge variant="outline" className="w-fit">
            {language === 'ar' ? 'رمز QR:' : 'QR Code:'} {request.qrCode}
          </Badge>
        )}

        {/* Actions */}
        {showActions && (
          <div className="flex gap-2 pt-2">
            {request.status === 'requested' && onAccept && (
              <Button 
                variant="qotaf" 
                size="sm" 
                onClick={() => onAccept(request.id)}
                className="flex-1"
              >
                {language === 'ar' ? 'قبول الطلب' : 'Accept Request'}
              </Button>
            )}
            {onViewDetails && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onViewDetails(request.id)}
                className="flex-1"
              >
                {language === 'ar' ? 'التفاصيل' : 'Details'}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};