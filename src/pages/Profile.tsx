import React from "react";
import { KPICard } from "@/components/qotaf/KPICard";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Recycle, Award, Edit, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Mock user data - replace with actual data from your state/API
const mockUser = {
  name: "Fatima Zohra",
  email: "fatima.z@example.com",
  avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  joinDate: "2023-05-12",
  stats: {
    totalKg: 125,
    totalBottles: 8340,
    initiativesSupported: 4,
  },
};

export const Profile: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-soft">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <section className="mb-12">
          <Card className="shadow-card border-0 overflow-hidden">
            <div className="bg-gradient-primary h-32" />
            <CardContent className="p-8 flex flex-col sm:flex-row items-center gap-6 -mt-16">
              <Avatar className="h-32 w-32 border-4 border-card shadow-lg">
                <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold text-foreground">
                  {mockUser.name}
                </h1>
                <p className="text-muted-foreground">{mockUser.email}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "ar" ? "عضو منذ: " : "Member since: "}
                  {new Date(mockUser.joinDate).toLocaleDateString(
                    language === "ar" ? "ar-DZ" : "en-US"
                  )}
                </p>
              </div>
              <div className="flex-grow flex justify-center sm:justify-end gap-2">
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  {language === "ar" ? "تعديل الملف الشخصي" : "Edit Profile"}
                </Button>
                <Button variant="destructive">
                  <LogOut className="h-4 w-4 mr-2" />
                  {language === "ar" ? "تسجيل الخروج" : "Logout"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* User Stats Section */}
        <section>
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {language === "ar" ? "مساهماتك" : "Your Contributions"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "ar"
                ? "تأثيرك المباشر في مجتمع قطاف"
                : "Your direct impact on the Qotaf community"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPICard
              title={
                language === "ar"
                  ? "إجمالي الكيلوغرامات"
                  : "Total Kilograms Collected"
              }
              value={mockUser.stats.totalKg.toLocaleString()}
              icon={Recycle}
            />
            <KPICard
              title={
                language === "ar"
                  ? "إجمالي القوارير"
                  : "Total Bottles Collected"
              }
              value={mockUser.stats.totalBottles.toLocaleString()}
              icon={Recycle}
            />
            <KPICard
              title={
                language === "ar"
                  ? "المبادرات المدعومة"
                  : "Initiatives Supported"
              }
              value={mockUser.stats.initiativesSupported.toLocaleString()}
              icon={Award}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
