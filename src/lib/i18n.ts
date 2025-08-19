export type Language = 'ar' | 'en';

export interface TranslationKeys {
  // Common
  loading: string;
  error: string;
  success: string;
  cancel: string;
  confirm: string;
  save: string;
  edit: string;
  delete: string;
  back: string;
  next: string;
  
  // Navigation
  home: string;
  dashboard: string;
  profile: string;
  logout: string;
  login: string;
  register: string;
  
  // Landing
  hero_title: string;
  hero_subtitle: string;
  join_as_citizen: string;
  join_as_volunteer: string;
  join_as_association: string;
  join_as_sports_facility: string;
  learn_more: string;
  
  // Stats
  total_kg: string;
  total_bottles: string;
  total_pickups: string;
  
  // Roles
  citizen: string;
  volunteer: string;
  association: string;
  sports_facility: string;
  public: string;
  
  // Status
  requested: string;
  accepted: string;
  picked_up: string;
  delivered: string;
  
  // Actions
  create_request: string;
  accept_request: string;
  scan_qr: string;
  schedule_pickup: string;
}

const translations: Record<Language, TranslationKeys> = {
  ar: {
    // Common
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    save: 'حفظ',
    edit: 'تعديل',
    delete: 'حذف',
    back: 'رجوع',
    next: 'التالي',
    
    // Navigation
    home: 'الرئيسية',
    dashboard: 'لوحة التحكم',
    profile: 'الملف الشخصي',
    logout: 'تسجيل الخروج',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    
    // Landing
    hero_title: 'قُطاف - معاً نجمع القوارير البلاستيكية لمساعدة الجزائر',
    hero_subtitle: 'منصة مفتوحة المصدر لجمع القوارير البلاستيكية وتوجيه العائدات للمبادرات الخيرية',
    join_as_citizen: 'انضم كمواطن',
    join_as_volunteer: 'انضم كمتطوع',
    join_as_association: 'انضم كجمعية',
    join_as_sports_facility: 'انضم كمنشأة رياضية',
    learn_more: 'اعرف أكثر',
    
    // Stats
    total_kg: 'إجمالي الكيلوغرامات',
    total_bottles: 'إجمالي القوارير',
    total_pickups: 'إجمالي عمليات الجمع',
    
    // Roles
    citizen: 'مواطن',
    volunteer: 'متطوع',
    association: 'جمعية',
    sports_facility: 'منشأة رياضية',
    public: 'عام',
    
    // Status
    requested: 'مطلوب',
    accepted: 'مقبول',
    picked_up: 'تم الجمع',
    delivered: 'تم التسليم',
    
    // Actions
    create_request: 'إنشاء طلب جمع',
    accept_request: 'قبول الطلب',
    scan_qr: 'مسح رمز الاستجابة',
    schedule_pickup: 'جدولة الجمع',
  },
  
  en: {
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    back: 'Back',
    next: 'Next',
    
    // Navigation
    home: 'Home',
    dashboard: 'Dashboard',
    profile: 'Profile',
    logout: 'Logout',
    login: 'Login',
    register: 'Register',
    
    // Landing
    hero_title: 'Qotaf - Together We Collect Plastic Bottles to Help Algeria',
    hero_subtitle: 'Open-source platform for collecting plastic bottles and channeling proceeds to humanitarian initiatives',
    join_as_citizen: 'Join as Citizen',
    join_as_volunteer: 'Join as Volunteer',
    join_as_association: 'Join as Association',
    join_as_sports_facility: 'Join as Sports Facility',
    learn_more: 'Learn More',
    
    // Stats
    total_kg: 'Total Kilograms',
    total_bottles: 'Total Bottles',
    total_pickups: 'Total Pickups',
    
    // Roles
    citizen: 'Citizen',
    volunteer: 'Volunteer',
    association: 'Association',
    sports_facility: 'Sports Facility',
    public: 'Public',
    
    // Status
    requested: 'Requested',
    accepted: 'Accepted',
    picked_up: 'Picked Up',
    delivered: 'Delivered',
    
    // Actions
    create_request: 'Create Request',
    accept_request: 'Accept Request',
    scan_qr: 'Scan QR Code',
    schedule_pickup: 'Schedule Pickup',
  }
};

export const getTranslation = (lang: Language, key: keyof TranslationKeys): string => {
  return translations[lang][key];
};

export const getDirection = (lang: Language): 'rtl' | 'ltr' => {
  return lang === 'ar' ? 'rtl' : 'ltr';
};