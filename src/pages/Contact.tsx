import React from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, Send } from "lucide-react";

const LanguageContext = React.createContext({ language: "en", isRTL: false });
const useLanguage = () => React.useContext(LanguageContext);

const Button = ({ variant, size, className, children, ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
      size === "lg" ? "h-12 px-8 text-lg" : "h-10 px-4"
    } ${
      variant === "hero" ? "bg-green-600 text-white hover:bg-green-700" : ""
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input = ({ id, type = "text", placeholder }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
);

const Textarea = ({ id, placeholder, rows }) => (
  <textarea
    id={id}
    placeholder={placeholder}
    rows={rows}
    className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
);

const Label = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="text-sm font-medium leading-none text-gray-800"
  >
    {children}
  </label>
);

// --- Fin des composants de remplacement ---

export const Contact: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    // Pour tester la version arabe, vous pouvez envelopper le composant comme ceci :
    // <LanguageContext.Provider value={{ language: 'ar', isRTL: true }}>
    <>
      <Helmet>
        <title>
          {language === "ar" ? "اتصل بنا - قطاف" : "Contact Us - Qotaf"}
        </title>
        <meta
          name="description"
          content={
            language === "ar"
              ? "هل لديك سؤال أو اقتراح؟ تواصل مع فريق قطاف. نحن هنا للمساعدة."
              : "Have a question or a suggestion? Get in touch with the Qotaf team. We are here to help."
          }
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <main className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === "ar" ? "تواصل معنا" : "Get in Touch"}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === "ar"
                  ? "نحن نسعد دائمًا بسماع آرائكم ومقترحاتكم. املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن."
                  : "We are always happy to hear your opinions and suggestions. Fill out the form below and we will get back to you as soon as possible."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Formulaire de Contact */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/10">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {language === "ar" ? "الاسم الكامل" : "Full Name"}
                    </Label>
                    <Input
                      id="name"
                      placeholder={
                        language === "ar" ? "اسمك هنا..." : "Your name here..."
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {language === "ar"
                        ? "البريد الإلكتروني"
                        : "Email Address"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={
                        language === "ar"
                          ? "you@example.com"
                          : "you@example.com"
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {language === "ar" ? "الموضوع" : "Subject"}
                    </Label>
                    <Input
                      id="subject"
                      placeholder={
                        language === "ar"
                          ? "كيف يمكننا مساعدتك؟"
                          : "How can we help?"
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {language === "ar" ? "رسالتك" : "Your Message"}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={
                        language === "ar"
                          ? "اكتب رسالتك بالتفصيل..."
                          : "Type your message in detail..."
                      }
                      rows={6}
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    <span>
                      {language === "ar" ? "إرسال الرسالة" : "Send Message"}
                    </span>
                    <Send className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                  </Button>
                </form>
              </div>

              {/* Informations de Contact */}
              <div className="space-y-8 pt-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {language === "ar" ? "معلومات مباشرة" : "Direct Information"}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </h4>
                      <p className="text-gray-600">
                        {language === "ar"
                          ? "أرسل لنا بريدًا إلكترونيًا مباشرة"
                          : "Send us an email directly"}
                      </p>
                      <a
                        href="mailto:contact@qotaf.dz"
                        className="text-green-600 font-medium hover:underline"
                      >
                        contact@qotaf.dz
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {language === "ar" ? "الهاتف" : "Phone"}
                      </h4>
                      <p className="text-gray-600">
                        {language === "ar"
                          ? "اتصل بنا خلال ساعات العمل"
                          : "Call us during working hours"}
                      </p>
                      <a
                        href="tel:+213000000000"
                        className="text-green-600 font-medium hover:underline"
                        dir="ltr"
                      >
                        +213 (0) 5 00 00 00 00
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
    // </LanguageContext.Provider>
  );
};
