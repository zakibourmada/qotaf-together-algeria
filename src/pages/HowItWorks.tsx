import React from "react";
import { Helmet } from "react-helmet-async";
import { Users, Recycle, Heart, ArrowDown } from "lucide-react";

const LanguageContext = React.createContext({ language: "en" });
const useLanguage = () => React.useContext(LanguageContext);

const Card = ({ className, children }) => (
  <div className={`bg-white rounded-2xl border border-gray-200 ${className}`}>
    {children}
  </div>
);
const CardHeader = ({ className, children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
const CardTitle = ({ className, children }) => (
  <h3 className={`text-gray-900 ${className}`}>{children}</h3>
);
const CardContent = ({ className, children }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export const HowItWorks: React.FC = () => {
  const { language } = useLanguage();

  const steps = [
    {
      icon: Recycle,
      titleAr: "الخطوة 1: جمع القوارير",
      titleEn: "Step 1: Collect Bottles",
      descAr:
        "يقوم المواطنون بجمع القوارير البلاستيكية في منازلهم أو أحيائهم. كل قارورة تحدث فرقًا!",
      descEn:
        "Citizens collect plastic bottles in their homes or neighborhoods. Every bottle makes a difference!",
    },
    {
      icon: Users,
      titleAr: "الخطوة 2: التنسيق مع المتطوعين",
      titleEn: "Step 2: Coordinate with Volunteers",
      descAr:
        "باستخدام المنصة، يتم إعلام المتطوعين والجمعيات بنقاط الجمع لتنظيم عمليات الاستلام بكفاءة.",
      descEn:
        "Using the platform, volunteers and associations are notified of collection points to efficiently organize pickups.",
    },
    {
      icon: Heart,
      titleAr: "الخطوة 3: دعم المبادرات الخيرية",
      titleEn: "Step 3: Support Charitable Initiatives",
      descAr:
        "يتم بيع البلاستيك المجمع، وتوجيه العائدات بالكامل لدعم المشاريع الإنسانية والخيرية في جميع أنحاء الجزائر.",
      descEn:
        "The collected plastic is sold, and the proceeds are fully channeled to support humanitarian and charitable projects across Algeria.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{language === "ar" ? "كيف يعمل قطاف" : "How Qotaf Works"}</title>
        <meta
          name="description"
          content={
            language === "ar"
              ? "اكتشف كيف يساهم نظام قطاف في جمع البلاستيك ودعم المشاريع الخيرية في ثلاث خطوات بسيطة."
              : "Discover how the Qotaf system helps collect plastic and support charities in three simple steps."
          }
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <main className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === "ar"
                ? "آلية عمل بسيطة لتأثير كبير"
                : "A Simple Process for a Big Impact"}
            </h1>
            <p className="text-xl text-gray-600 mb-16">
              {language === "ar"
                ? "نؤمن بأن التغيير يبدأ بخطوات صغيرة ومنظمة. إليك كيف نعمل معًا."
                : "We believe change starts with small, organized steps. Here’s how we work together."}
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <Card className="w-full max-w-sm text-center shadow-lg hover:shadow-2xl transition-all duration-300 z-10">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {language === "ar" ? step.titleAr : step.titleEn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {language === "ar" ? step.descAr : step.descEn}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <ArrowDown className="h-12 w-12 text-green-600/50 md:hidden" />
                )}
              </React.Fragment>
            ))}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-green-600/20 -translate-y-1/2" />
          </div>
        </main>
      </div>
    </>
    // </LanguageContext.Provider>
  );
};
