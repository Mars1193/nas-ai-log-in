import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Briefcase, Bot, BarChart, Film, Settings, Star } from 'lucide-react';

// --- START: Inlined Dependencies ---

// 1. UI Components: Placeholders for ShadCN components
const Button = ({ children, size, variant, className, ...props }) => {
  const sizeClasses = size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base';
  const variantClasses = {
    default: 'bg-cyan-500 text-slate-900',
    outline: 'border border-white/30 text-white bg-transparent hover:bg-white/10',
  };
  return (
    <button className={`font-semibold rounded-lg shadow-lg transform transition-all duration-200 flex items-center justify-center ${sizeClasses} ${variantClasses[variant] || variantClasses.default} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className, ...props }) => (
  <div className={`rounded-2xl border bg-slate-800/50 backdrop-blur-sm ${className}`} {...props}>
    {children}
  </div>
);

// 2. Translations & Data
const translations = {
  en: {
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive packages and add-ons to transform your business into a future-proof powerhouse.",
    servicePackages: "Service Packages",
    additionalServices: "Additional Services",
    startSmart: "Start Smart",
    startSmartDesc: "Foundation package for a smart start.",
    smartOperations: "Smart Operations",
    smartOperationsDesc: "Analysis and development of smart operations.",
    autoMarketingKit: "AutoMarketing Kit",
    autoMarketingKitDesc: "Comprehensive automated marketing package.",
    fullDigitalSetup: "Full Digital Setup",
    fullDigitalSetupDesc: "The all-in-one foundation, marketing & automation solution.",
    websiteDesign: "Clean and fast website design",
    logoDesign: "Professional logo design",
    companyProfile: "Company profile setup",
    marketingPlan: "Preliminary marketing plan",
    socialSetup: "Social media accounts and cover files setup",
    workflowAnalysis: "Workflow analysis and pain point discovery",
    toolRecommendations: "Custom smart tool recommendations",
    performanceComparison: "Before/after automation performance display",
    lightAutomation: "Light automation tool development",
    teamTraining: "Team training on new tools",
    strategicContent: "Monthly strategic content plan",
    readyPosts: "500 ready-to-publish posts",
    shortVideos: "Short videos (30 seconds)",
    autoScheduling: "Automatic scheduling and publishing system",
    analyticsReports: "Engagement analysis and tracking reports",
    integratedWebsite: "Integrated website development",
    brandIdentity: "Complete brand identity",
    comprehensiveMarketing: "Comprehensive marketing plan",
    advancedAutomation: "Advanced smart automation tools",
    completeContent: "Complete content package",
    comprehensiveTraining: "Comprehensive team training on the system",
    aiDashboard: "AI Analytics Dashboard",
    aiDashboardDesc: "Get a custom dashboard to visualize your business data with AI-driven insights.",
    advancedChatbot: "Advanced Chatbot",
    advancedChatbotDesc: "Deploy a smart chatbot on your website and WhatsApp to handle customer queries 24/7.",
    microApps: "Custom Micro-Apps",
    microAppsDesc: "Need a specific task automated? We build lightweight custom apps for your unique needs.",
    legacyInsights: "Legacy Data Analysis",
    legacyInsightsDesc: "Unlock hidden insights from your old Excel sheets and databases.",
    aiVideos: "AI Avatar Videos",
    aiVideosDesc: "Produce professional videos using a virtual AI avatar, saving time and resources.",
    aiConsulting: "AI Strategy Consultation",
    aiConsultingDesc: "A one-hour session with our AI experts to roadmap your automation journey.",
    choosePlan: "Choose Plan",
    mostPopular: "Most Popular",
    comparePackages: "Compare Packages",
    getInTouch: "Get In Touch",
    getInTouchDesc: "Ready to revolutionize your operations? Contact us for a custom quote or consultation.",
  },
  ar: {
    servicesTitle: "خدماتنا",
    servicesSubtitle: "باقات شاملة وخدمات إضافية لتحويل أعمالك إلى قوة مستقبلية.",
    servicePackages: "باقات الخدمات",
    additionalServices: "خدمات إضافية",
    startSmart: "الانطلاقة الذكية",
    startSmartDesc: "الباقة التأسيسية لبداية ذكية.",
    smartOperations: "التشغيل الذكي",
    smartOperationsDesc: "تحليل وتطوير العمليات الذكية.",
    autoMarketingKit: "التسويق الذكي",
    autoMarketingKitDesc: "حزمة التسويق الآلي الشاملة.",
    fullDigitalSetup: "الحضور الكامل",
    fullDigitalSetupDesc: "الحل المتكامل للتأسيس والتسويق والأتمتة.",
    websiteDesign: "تصميم موقع إلكتروني أنيق وسريع",
    logoDesign: "شعار (لوغو) احترافي",
    companyProfile: "ملف تعريفي للشركة",
    marketingPlan: "خطة تسويق مبسطة للانطلاقة",
    socialSetup: "تجهيز حسابات السوشيال + بنرات",
    workflowAnalysis: "تحليل سير العمل وكشف النقاط الحرجة",
    toolRecommendations: "توصية بالأدوات الذكية المناسبة",
    performanceComparison: "مخططات قبل / بعد التغيير",
    lightAutomation: "تصميم أداة أتمتة بسيطة حسب الحاجة",
    teamTraining: "تدريب الفريق على الأدوات",
    strategicContent: "خطة نشر استراتيجية لشهر كامل",
    readyPosts: "تصميم 500 منشور بجودة عالية",
    shortVideos: "فيديوهات قصيرة",
    autoScheduling: "نظام نشر وجدولة تلقائي",
    analyticsReports: "تقارير تحليلات التفاعل",
    integratedWebsite: "موقع إلكتروني متكامل",
    brandIdentity: "هوية بصرية كاملة",
    comprehensiveMarketing: "خطة تسويق شاملة",
    advancedAutomation: "أدوات ذكاء اصطناعي لسير العمل",
    completeContent: "محتوى متكامل (فيديو + بوستات)",
    comprehensiveTraining: "تدريب الفريق على كل الأدوات",
    aiDashboard: "لوحة تحليلات ذكية",
    aiDashboardDesc: "احصل على لوحة تحكم مخصصة لعرض بيانات أعمالك برؤى مدفوعة بالذكاء الاصطناعي.",
    advancedChatbot: "بوت دردشة متقدم",
    advancedChatbotDesc: "نشر بوت دردشة ذكي على موقعك وواتساب للتعامل مع استفسارات العملاء 24/7.",
    microApps: "تطبيقات مصغرة مخصصة",
    microAppsDesc: "هل تحتاج إلى أتمتة مهمة معينة؟ نحن نبني تطبيقات مخصصة خفيفة لتلبية احتياجاتك الفريدة.",
    legacyInsights: "تحليل البيانات القديمة",
    legacyInsightsDesc: "اكتشف الرؤى الخفية من جداول Excel وقواعد البيانات القديمة.",
    aiVideos: "فيديوهات الأفاتار الذكي",
    aiVideosDesc: "أنتج فيديوهات احترافية باستخدام أفاتار افتراضي، مما يوفر الوقت والموارد.",
    aiConsulting: "جلسة استشارة ذكاء اصطناعي",
    aiConsultingDesc: "جلسة لمدة ساعة مع خبرائنا في الذكاء الاصطناعي لوضع خارطة طريق لرحلة الأتمتة الخاصة بك.",
    choosePlan: "اختر الباقة",
    mostPopular: "الأكثر شيوعاً",
    comparePackages: "قارن بين الباقات",
    getInTouch: "تواصل معنا",
    getInTouchDesc: "هل أنت مستعد لإحداث ثورة في عملياتك؟ تواصل معنا للحصول على عرض أسعار مخصص أو استشارة.",
  }
};

const t = (key, language) => translations[language][key] || key;

// 3. Language Context Hook
const useLanguage = () => {
    const [language, setLanguage] = React.useState('en');
    return { language, setLanguage, isRTL: language === 'ar' };
};

// --- END: Inlined Dependencies ---

const ServicesPage = () => {
    const { language } = useLanguage();

    const servicePackages = [
        {
            titleKey: "startSmart",
            descriptionKey: "startSmartDesc",
            price: language === 'ar' ? "2,500 د.إ" : "AED 2,500",
            features: ["websiteDesign", "logoDesign", "companyProfile", "marketingPlan", "socialSetup"],
            popular: false,
        },
        {
            titleKey: "smartOperations",
            descriptionKey: "smartOperationsDesc",
            price: language === 'ar' ? "حسب الطلب" : "Custom Quote",
            features: ["workflowAnalysis", "toolRecommendations", "performanceComparison", "lightAutomation", "teamTraining"],
            popular: false,
        },
        {
            titleKey: "autoMarketingKit",
            descriptionKey: "autoMarketingKitDesc",
            price: language === 'ar' ? "3,000 د.إ" : "AED 3,000",
            features: ["strategicContent", "readyPosts", "shortVideos", "autoScheduling", "analyticsReports"],
            popular: false,
        },
        {
            titleKey: "fullDigitalSetup",
            descriptionKey: "fullDigitalSetupDesc",
            price: language === 'ar' ? "8,000 د.إ" : "AED 8,000",
            features: ["integratedWebsite", "brandIdentity", "comprehensiveMarketing", "advancedAutomation", "completeContent", "comprehensiveTraining"],
            popular: true,
        }
    ];

    const additionalServices = [
        { icon: Settings, titleKey: "aiConsulting", descriptionKey: "aiConsultingDesc", price: language === 'ar' ? "300 د.إ" : "AED 300" },
        { icon: BarChart, titleKey: "aiDashboard", descriptionKey: "aiDashboardDesc" },
        { icon: Bot, titleKey: "advancedChatbot", descriptionKey: "advancedChatbotDesc" },
        { icon: Zap, titleKey: "microApps", descriptionKey: "microAppsDesc" },
        { icon: BarChart, titleKey: "legacyInsights", descriptionKey: "legacyInsightsDesc" },
        { icon: Film, titleKey: "aiVideos", descriptionKey: "aiVideosDesc" },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white py-12 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{t('servicesTitle', language)}</h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('servicesSubtitle', language)}</p>
                </motion.div>

                {/* Service Packages Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-24">
                    {servicePackages.map((pkg, index) => (
                        <motion.div
                            key={pkg.titleKey}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                        >
                            <Card className={`border-white/10 h-full flex flex-col ${pkg.popular ? 'border-2 border-purple-500 shadow-2xl shadow-purple-500/20' : ''}`}>
                                {pkg.popular && (
                                    <div className="bg-purple-500 text-white text-center py-1.5 font-bold text-sm">{t('mostPopular', language)}</div>
                                )}
                                <div className="p-8 flex-grow flex flex-col">
                                    <h2 className="text-2xl font-bold text-cyan-400 mb-2">{t(pkg.titleKey, language)}</h2>
                                    <p className="text-white/70 mb-6 flex-grow">{t(pkg.descriptionKey, language)}</p>
                                    <div className="text-3xl font-bold text-white mb-6">
                                        {pkg.price}
                                        <span className="text-sm font-normal text-white/50">{language === 'ar' ? ' / يبدأ من' : ' / starting from'}</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map(feature => (
                                            <li key={feature} className="flex items-start">
                                                <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                                                <span>{t(feature, language)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto">
                                        <Button variant={pkg.popular ? 'default' : 'outline'} className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : ''}`}>
                                            {t('choosePlan', language)}
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Services Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">{t('additionalServices', language)}</h2>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {additionalServices.map((service, index) => (
                            <motion.div
                                key={service.titleKey}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="border-white/10 h-full p-6 text-center">
                                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/50">
                                        <service.icon className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <h3 className="font-bold text-xl text-white/90 mb-2">{t(service.titleKey, language)}</h3>
                                    <p className="text-white/70 text-sm mb-4">{t(service.descriptionKey, language)}</p>
                                    {service.price && (
                                        <div className="mt-auto pt-4 border-t border-white/10">
                                            <p className="text-lg font-bold text-cyan-400">{service.price}</p>
                                        </div>
                                    )}
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="mt-24"
                >
                    <Card className="border-cyan-500/30 bg-gradient-to-r from-slate-900 to-blue-900/30">
                        <div className="p-12 text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">{t('getInTouch', language)}</h2>
                            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{t('getInTouchDesc', language)}</p>
                            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600">
                                {t('getInTouch', language)} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
