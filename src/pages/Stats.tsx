import React from "react";
import { Helmet } from "react-helmet-async";
import { Recycle, Users, Award, MapPin } from "lucide-react";

// --- Début des composants et données de remplacement pour la démonstration ---
// Ces éléments simplifiés résolvent les erreurs d'importation en rendant le fichier autonome.

const Navbar = () => (
  <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 h-20 flex items-center px-4 sm:px-6 lg:px-8">
    <div className="font-bold text-2xl text-gray-800">Qotaf</div>
  </nav>
);

const LanguageContext = React.createContext({ language: "en" });
const useLanguage = () => React.useContext(LanguageContext);

const KPICard = ({ title, value, icon: Icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
    <div className="flex items-center justify-between">
      <p className="text-gray-500">{title}</p>
      <Icon className="h-6 w-6 text-green-600" />
    </div>
    <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
  </div>
);

const Card = ({ className, children }) => (
  <div className={`bg-white rounded-2xl border border-gray-200 ${className}`}>
    {children}
  </div>
);
const CardHeader = ({ children }) => <div className="p-6 pb-4">{children}</div>;
const CardTitle = ({ className, children }) => (
  <h3 className={`text-gray-900 ${className}`}>{children}</h3>
);
const CardContent = ({ children }) => (
  <div className="p-6 pt-0">{children}</div>
);

const Avatar = ({ children }) => (
  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
    {children}
  </div>
);
const AvatarImage = ({ src }) => (
  <img src={src} alt="" className="h-full w-full object-cover" />
);
const AvatarFallback = ({ children }) => (
  <span className="font-semibold text-gray-600">{children}</span>
);

const Progress = ({ value, className }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
    <div
      className="bg-green-600 h-2.5 rounded-full"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

// Données de simulation
const mockStats = {
  totalKg: 12580,
  totalBottles: 834500,
  totalPickups: 1120,
  totalUsers: 2345,
};

const mockLeaderboard = [
  {
    id: 1,
    name: "Ahmed Benali",
    kgCollected: 450,
    avatarUrl: "https://i.pravatar.cc/150?u=a1",
  },
  {
    id: 2,
    name: "Fatima Zohra",
    kgCollected: 410,
    avatarUrl: "https://i.pravatar.cc/150?u=a2",
  },
  {
    id: 3,
    name: "Youssef Cherif",
    kgCollected: 380,
    avatarUrl: "https://i.pravatar.cc/150?u=a3",
  },
  {
    id: 4,
    name: "Amina Haddad",
    kgCollected: 320,
    avatarUrl: "https://i.pravatar.cc/150?u=a4",
  },
];

// --- Fin des composants et données de remplacement ---

export const Stats: React.FC = () => {
  const { language } = useLanguage();
  const topContributorKg = mockLeaderboard[0]?.kgCollected || 1;

  return (
    // <LanguageContext.Provider value={{ language: 'ar' }}>
    <>
      <Helmet>
        <title>
          {language === "ar" ? "الإحصائيات - قطاف" : "Statistics - Qotaf"}
        </title>
        <meta
          name="description"
          content={
            language === "ar"
              ? "تابع تأثير مجتمع قطاف بالأرقام. شاهد إحصائيات الجمع، عدد المتطوعين، وقائمة المتصدرين."
              : "Track the impact of the Qotaf community in numbers. See collection stats, volunteer counts, and the leaderboard."
          }
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === "ar"
                  ? "تأثيرنا بالأرقام"
                  : "Our Impact in Numbers"}
              </h1>
              <p className="text-xl text-gray-600">
                {language === "ar"
                  ? "بيانات حية تعكس جهود مجتمعنا المتنامي."
                  : "Live data reflecting the efforts of our growing community."}
              </p>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <KPICard
                title={
                  language === "ar" ? "إجمالي الكيلوغرامات" : "Total Kilograms"
                }
                value={mockStats.totalKg.toLocaleString()}
                icon={Recycle}
              />
              <KPICard
                title={language === "ar" ? "إجمالي القوارير" : "Total Bottles"}
                value={mockStats.totalBottles.toLocaleString()}
                icon={Recycle}
              />
              <KPICard
                title={language === "ar" ? "عمليات الجمع" : "Total Pickups"}
                value={mockStats.totalPickups.toLocaleString()}
                icon={MapPin}
              />
              <KPICard
                title={language === "ar" ? "المستخدمون" : "Active Users"}
                value={mockStats.totalUsers.toLocaleString()}
                icon={Users}
              />
            </div>

            {/* Leaderboard */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <Award className="h-8 w-8 text-green-600" />
                  {language === "ar" ? "قائمة المتصدرين" : "Leaderboard"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockLeaderboard.map((user, index) => (
                    <div
                      key={user.id}
                      className="flex items-center gap-4 p-4 bg-gray-100/50 rounded-lg"
                    >
                      <span className="text-xl font-bold text-gray-500 w-6 text-center">
                        {index + 1}
                      </span>
                      <Avatar>
                        <AvatarImage src={user.avatarUrl} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <p className="font-semibold text-gray-900">
                          {user.name}
                        </p>
                        <Progress
                          value={(user.kgCollected / topContributorKg) * 100}
                          className="h-2 mt-1"
                        />
                      </div>
                      <div className="text-lg font-bold text-green-600 text-right">
                        {user.kgCollected.toLocaleString()}{" "}
                        {language === "ar" ? "كغ" : "kg"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
    // </LanguageContext.Provider>
  );
};
