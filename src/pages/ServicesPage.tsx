import React, { createContext, useContext, useState } from 'react';
import { CheckCircle, Zap, Code, BarChart, Palette, Bot, Users, Settings, BrainCircuit } from 'lucide-react';

// Note: The LanguageProvider should wrap your entire application in App.tsx or main.tsx
// For this component to work, we will assume the context is provided by a parent.
const LanguageContext = createContext({ language: 'ar', setLanguage: (lang: string) => {}, isRTL: true });

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // This error will be thrown if LanguageProvider is not wrapping the app.
    // We'll provide a default value to prevent a crash for now.
    return { language: 'ar', setLanguage: () => {}, isRTL: true };
  }
  return context;
};


// Translation function
const translations = {
  en: {
    // Header
    servicesTitle: "Digital Transformation Services",
    servicesSubtitle: "Comprehensive solutions to transform your business with cutting-edge AI technology",
    
    // Service Packages
    servicePackages: "Transformation Packages",
    choosePackage: "Choose the perfect package to start your digital transformation journey",
    
    // Package Titles
    startSmart: "Start Smart",
    smartOperations: "Smart Operations",
    autoMarketingKit: "Auto Marketing Kit",
    fullDigitalSetup: "Full Digital Setup",
    
    // Package Descriptions
    startSmartDesc: "Perfect foundation for new businesses entering the digital world",
    smartOperationsDesc: "Optimize your current operations with intelligent automation",
    autoMarketingKitDesc: "Complete automated marketing solution for growth",
    fullDigitalSetupDesc: "Comprehensive transformation with advanced AI integration",
    
    // Features
    websiteDesign: "Professional Website Design",
    logoDesign: "Logo & Brand Identity",
    companyProfile: "Company Profile Creation",
    marketingPlan: "Strategic Marketing Plan",
    socialSetup: "Social Media Setup",
    workflowAnalysis: "Workflow Analysis & Optimization",
    toolRecommendations: "Smart Tool Recommendations",
    performanceComparison: "Performance Comparison Reports",
    lightAutomation: "Light Automation Implementation",
    teamTraining: "Team Training & Support",
    strategicContent: "Strategic Content Creation",
    readyPosts: "Ready-to-Publish Posts",
    shortVideos: "Short Video Content",
    autoScheduling: "Automated Scheduling",
    analyticsReports: "Advanced Analytics Reports",
    integratedWebsite: "Fully Integrated Website",
    brandIdentity: "Complete Brand Identity",
    comprehensiveMarketing: "Comprehensive Marketing Strategy",
    advancedAutomation: "Advanced Automation Systems",
    completeContent: "Complete Content Suite",
    comprehensiveTraining: "Comprehensive Training Program",
    
    // Additional Services
    additionalServices: "Specialized Services",
    aiDashboard: "AI Analytics Dashboard",
    advancedChatbot: "Advanced AI Chatbot",
    microApps: "Custom Micro Applications",
    legacyInsights: "Legacy System Insights",
    aiVideos: "AI-Generated Video Content",
    aiConsulting: "AI Strategy Consulting",
    
    // Implementation Process
    implementationProcess: "Implementation Process",
    assessmentTitle: "Assessment & Planning",
    assessmentDesc: "Comprehensive analysis of your current setup and future goals",
    deploymentTitle: "Smart Deployment",
    deploymentDesc: "Seamless implementation of chosen solutions with minimal disruption",
    trainingTitle: "Team Empowerment",
    trainingDesc: "Comprehensive training to ensure your team maximizes the new tools",
    optimizationTitle: "Continuous Optimization",
    optimizationDesc: "Ongoing monitoring and improvements to ensure peak performance",
    
    // CTA
    readyToRevolutionize: "Ready to Revolutionize Your Business?",
    letsDiscuss: "Let's discuss how we can transform your operations and drive unprecedented growth",
    bookFreeConsultation: "Book Free Consultation"
  },
  ar: {
    // Header
    servicesTitle: "خدمات التحول الرقمي",
    servicesSubtitle: "حلول شاملة لتحويل أعمالك باستخدام أحدث تقنيات الذكاء الاصطناعي",
    
    // Service Packages
    servicePackages: "باقات التحول الرقمي",
    choosePackage: "اختر الباقة المثالية لبدء رحلة التحول الرقمي",
    
    // Package Titles
    startSmart: "ابدأ بذكاء",
    smartOperations: "العمليات الذكية",
    autoMarketingKit: "حزمة التسويق الآلي",
    fullDigitalSetup: "الإعداد الرقمي الكامل",
    
    // Package Descriptions
    startSmartDesc: "الأساس المثالي للشركات الجديدة التي تدخل العالم الرقمي",
    smartOperationsDesc: "حسّن عملياتك الحالية مع الأتمتة الذكية",
    autoMarketingKitDesc: "حل تسويقي آلي شامل للنمو",
    fullDigitalSetupDesc: "تحول شامل مع تكامل متقدم للذكاء الاصطناعي",
    
    // Features
    websiteDesign: "تصميم موقع إلكتروني احترافي",
    logoDesign: "تصميم الشعار والهوية التجارية",
    companyProfile: "إنشاء ملف الشركة",
    marketingPlan: "خطة تسويقية استراتيجية",
    socialSetup: "إعداد وسائل التواصل الاجتماعي",
    workflowAnalysis: "تحليل وتحسين سير العمل",
    toolRecommendations: "توصيات الأدوات الذكية",
    performanceComparison: "تقارير مقارنة الأداء",
    lightAutomation: "تنفيذ الأتمتة الخفيفة",
    teamTraining: "تدريب ودعم الفريق",
    strategicContent: "إنشاء محتوى استراتيجي",
    readyPosts: "منشورات جاهزة للنشر",
    shortVideos: "محتوى فيديو قصير",
    autoScheduling: "جدولة آلية",
    analyticsReports: "تقارير تحليلية متقدمة",
    integratedWebsite: "موقع إلكتروني متكامل بالكامل",
    brandIdentity: "هوية تجارية شاملة",
    comprehensiveMarketing: "استراتيجية تسويقية شاملة",
    advancedAutomation: "أنظمة أتمتة متقدمة",
    completeContent: "مجموعة محتوى شاملة",
    comprehensiveTraining: "برنامج تدريبي شامل",
    
    // Additional Services
    additionalServices: "الخدمات المتخصصة",
    aiDashboard: "لوحة تحكم ذكية",
    advancedChatbot: "روبوت محادثة متقدم",
    microApps: "تطبيقات مصغرة مخصصة",
    legacyInsights: "رؤى الأنظمة القديمة",
    aiVideos: "محتوى فيديو بالذكاء الاصطناعي",
    aiConsulting: "استشارات استراتيجية للذكاء الاصطناعي",
    
    // Implementation Process
    implementationProcess: "عملية التنفيذ",
    assessmentTitle: "التقييم والتخطيط",
    assessmentDesc: "تحليل شامل لإعدادك الحالي والأهداف المستقبلية",
    deploymentTitle: "النشر الذكي",
    deploymentDesc: "تنفيذ سلس للحلول المختارة مع أقل تعطيل",
    trainingTitle: "تمكين الفريق",
    trainingDesc: "تدريب شامل لضمان استفادة فريقك القصوى من الأدوات الجديدة",
    optimizationTitle: "التحسين المستمر",
    optimizationDesc: "مراقبة وتحسينات مستمرة لضمان الأداء الأمثل",
    
    // CTA
    readyToRevolutionize: "هل أنت مستعد لثورة في أعمالك؟",
    letsDiscuss: "دعنا نناقش كيف يمكننا تحويل عملياتك ودفع نمو غير مسبوق",
    bookFreeConsultation: "احجز استشارة مجانية"
  }
};

const t = (key, language) => {
  return translations[language]?.[key] || translations.en[key] || key;
};

// Data structures
const transformationPackages = [
    {
        titleKey: 'startSmart',
        descriptionKey: 'startSmartDesc',
        featuresKeys: ['websiteDesign', 'logoDesign', 'companyProfile', 'marketingPlan', 'socialSetup'],
        icon: <Palette size={32} className="text-white" />
    },
    {
        titleKey: 'smartOperations',
        descriptionKey: 'smartOperationsDesc',
        featuresKeys: ['workflowAnalysis', 'toolRecommendations', 'performanceComparison', 'lightAutomation', 'teamTraining'],
        icon: <Settings size={32} className="text-white" />
    },
    {
        titleKey: 'autoMarketingKit',
        descriptionKey: 'autoMarketingKitDesc',
        featuresKeys: ['strategicContent', 'readyPosts', 'shortVideos', 'autoScheduling', 'analyticsReports'],
        icon: <BarChart size={32} className="text-white" />
    },
    {
        titleKey: 'fullDigitalSetup',
        descriptionKey: 'fullDigitalSetupDesc',
        featuresKeys: ['integratedWebsite', 'brandIdentity', 'comprehensiveMarketing', 'advancedAutomation', 'completeContent', 'comprehensiveTraining'],
        icon: <BrainCircuit size={32} className="text-white" />
    }
];

const specializedServices = [
    { titleKey: 'aiDashboard', icon: <BarChart /> },
    { titleKey: 'advancedChatbot', icon: <Bot /> },
    { titleKey: 'microApps', icon: <Code /> },
    { titleKey: 'legacyInsights', icon: <CheckCircle /> },
    { titleKey: 'aiVideos', icon: <Palette /> },
    { titleKey: 'aiConsulting', icon: <Users /> },
];

const implementationSteps = [
    { number: '01', titleKey: 'assessmentTitle', descriptionKey: 'assessmentDesc' },
    { number: '02', titleKey: 'deploymentTitle', descriptionKey: 'deploymentDesc' },
    { number: '03', titleKey: 'trainingTitle', descriptionKey: 'trainingDesc' },
    { number: '04', titleKey: 'optimizationTitle', descriptionKey: 'optimizationDesc' }
];

// Simplified motion component for display purposes
const Motion = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

const ServicesPage = () => {
    const { language, isRTL } = useLanguage();

    return (
        <div className="bg-[#050816] text-white overflow-x-hidden pt-20">
            {/* Hero Section */}
            <Motion className="relative text-center py-24 lg:py-32 px-4">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2B] via-[#050816] to-[#050816]"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] bg-clip-text text-transparent">
                        {t('servicesTitle', language)}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300">
                        {t('servicesSubtitle', language)}
                    </p>
                </div>
            </Motion>

            {/* Transformation Packages Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <Motion className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('servicePackages', language)}</h2>
                        <p className="text-slate-400 mt-2 max-w-2xl mx-auto">{t('choosePackage', language)}</p>
                    </Motion>

                    <Motion className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {transformationPackages.map((pkg, index) => (
                            <Motion 
                                key={t(pkg.titleKey, language)}
                                className="bg-[#0A0F2B] border border-slate-800 rounded-xl p-6 flex flex-col hover:border-[#00F0FF] transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                        {pkg.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{t(pkg.titleKey, language)}</h3>
                                </div>
                                <p className="text-slate-400 mb-6 flex-grow">{t(pkg.descriptionKey, language)}</p>
                                <ul className="space-y-3 text-left">
                                    {pkg.featuresKeys.map((featureKey) => (
                                        <li key={featureKey} className="flex items-start">
                                            <CheckCircle className={`w-5 h-5 text-[#00F0FF] ${isRTL ? 'ml-3' : 'mr-3'} mt-1 flex-shrink-0`} />
                                            <span className="text-slate-300">{t(featureKey, language)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Motion>
                        ))}
                    </Motion>
                </div>
            </section>
            
            {/* Specialized Services and Implementation Process */}
            <div className="py-20 px-4 bg-[#0A0F2B]">
                <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
                    {/* Specialized Services */}
                    <Motion>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('additionalServices', language)}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {specializedServices.map((service) => (
                                <Motion 
                                    key={t(service.titleKey, language)}
                                    className="flex items-center p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                                >
                                    <div className={`text-[#00F0FF] ${isRTL ? 'ml-4' : 'mr-4'}`}>{service.icon}</div>
                                    <span className="font-medium">{t(service.titleKey, language)}</span>
                                </Motion>
                            ))}
                        </div>
                    </Motion>

                    {/* Implementation Process */}
                    <Motion>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('implementationProcess', language)}</h2>
                        <div className="space-y-8">
                            {implementationSteps.map((step, index) => (
                                <Motion key={step.number} className="flex">
                                    <div className={`flex flex-col items-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
                                        <div>
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                                                <span className="text-lg font-bold text-black">{step.number}</span>
                                            </div>
                                        </div>
                                        {index < implementationSteps.length - 1 && (
                                            <div className="w-px h-16 bg-slate-700 mt-4"></div>
                                        )}
                                    </div>
                                    <div className="pb-8">
                                        <p className="mb-2 text-xl font-bold">{t(step.titleKey, language)}</p>
                                        <p className="text-slate-400">{t(step.descriptionKey, language)}</p>
                                    </div>
                                </Motion>
                            ))}
                        </div>
                    </Motion>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-20 px-4 text-center">
                 <Motion>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('readyToRevolutionize', language)}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                        {t('letsDiscuss', language)}
                    </p>
                    <button className="px-8 py-4 font-bold rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                        {t('bookFreeConsultation', language)}
                    </button>
                 </Motion>
            </section>
        </div>
    );
};

export default ServicesPage;
