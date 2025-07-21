import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ShieldCheck, GitMerge, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

// --- START: Inlined Dependencies ---

// 1. UI Components (Placeholders)
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
    philosophyTitle: "The Ownership Philosophy",
    philosophySubtitle: "Why owning your AI workforce is the future of business automation and security.",
    ownVsRent: "Own vs. Rent",
    ownVsRentDesc1: "Traditional AI services charge you monthly fees forever - you're essentially renting computational power.",
    ownVsRentDesc2: "Our AI employees are physical assets you own outright. No recurring costs, no vendor lock-in.",
    ownVsRentDesc3: "Just like owning a building vs. renting office space - ownership builds equity and provides security.",
    securitySovereignty: "The Security of Sovereignty",
    securitySovereigntyDesc1: "Your data never leaves your premises. Complete control over your information.",
    securitySovereigntyDesc2: "No internet dependency for core operations - your AI works even offline.",
    securitySovereigntyDesc3: "Meet the strictest compliance requirements (HIPAA, GDPR, SOX) without compromise.",
    maestroOrchestra: "Maestro & Orchestra",
    maestroOrchestraDesc1: "Each AI employee operates independently but can be orchestrated centrally.",
    maestroOrchestraDesc2: "The Maestro dashboard gives you complete visibility and control over your AI workforce.",
    maestroOrchestraDesc3: "Scale from one unit to hundreds, all managed from a single interface.",
    comparisonTitle: "Traditional AI vs. NAS AI",
    feature: "Feature",
    traditionalAI: "Traditional AI (Rent)",
    nasAI: "NAS AI (Own)",
    monthlyCosts: "Monthly Costs",
    dataLocation: "Data Location",
    internetDependency: "Internet Dependency",
    customization: "Customization",
    vendorLockIn: "Vendor Lock-in",
    assetValue: "Asset Value",
    highRisk: "High Risk",
    zeroRisk: "Zero Risk",
    depreciableAsset: "Depreciable Asset",
    rental: "$0 (Rental)",
    theirServers: "Their Servers",
    alwaysRequired: "Always Required",
    limited: "Limited",
    yourPremises: "Your Premises",
    optional: "Optional",
    completeControl: "Complete Control",
    ctaTitle: "Ready to Own Your AI Workforce?",
    ctaSubtitle: "Join the ownership revolution. Stop paying monthly fees and start building digital assets.",
    exploreButton: "Explore AI Employees",
  },
  ar: {
    philosophyTitle: "فلسفة التملّك",
    philosophySubtitle: "لماذا امتلاك قوة العمل الذكية الخاصة بك هو مستقبل أتمتة الأعمال والأمان.",
    ownVsRent: "امتلك مقابل استأجر",
    ownVsRentDesc1: "خدمات الذكاء الاصطناعي التقليدية تفرض عليك رسومًا شهرية إلى الأبد - أنت تستأجر قوة حاسوبية.",
    ownVsRentDesc2: "موظفونا الذكاء الاصطناعي هم أصول مادية تمتلكها بالكامل. لا تكاليف متكررة، لا تقييد بمورد.",
    ownVsRentDesc3: "تمامًا مثل امتلاك مبنى مقابل استئجار مساحة مكتبية - الملكية تبني قيمة وتوفر الأمان.",
    securitySovereignty: "أمان السيادة",
    securitySovereigntyDesc1: "بياناتك لا تغادر مقرك أبدًا. تحكم كامل في معلوماتك.",
    securitySovereigntyDesc2: "لا يوجد اعتماد على الإنترنت للعمليات الأساسية - يعمل الذكاء الاصطناعي الخاص بك حتى بدون اتصال.",
    securitySovereigntyDesc3: "تلبية أشد متطلبات الامتثال (HIPAA, GDPR, SOX) دون تنازلات.",
    maestroOrchestra: "المايسترو والأوركسترا",
    maestroOrchestraDesc1: "يعمل كل موظف ذكاء اصطناعي بشكل مستقل ولكن يمكن تنسيقه مركزيًا.",
    maestroOrchestraDesc2: "تمنحك لوحة تحكم المايسترو رؤية وتحكمًا كاملين في قوة عمل الذكاء الاصطناعي الخاصة بك.",
    maestroOrchestraDesc3: "توسع من وحدة واحدة إلى المئات، كلها تدار من واجهة واحدة.",
    comparisonTitle: "الذكاء الاصطناعي التقليدي مقابل NAS AI",
    feature: "الميزة",
    traditionalAI: "الذكاء الاصطناعي التقليدي (إيجار)",
    nasAI: "NAS AI (ملكية)",
    monthlyCosts: "التكاليف الشهرية",
    dataLocation: "موقع البيانات",
    internetDependency: "الاعتماد على الإنترنت",
    customization: "التخصيص",
    vendorLockIn: "التقييد بالمورد",
    assetValue: "قيمة الأصل",
    highRisk: "مخاطرة عالية",
    zeroRisk: "مخاطرة صفر",
    depreciableAsset: "أصل قابل للإهلاك",
    rental: "0$ (إيجار)",
    theirServers: "خوادمهم",
    alwaysRequired: "مطلوب دائمًا",
    limited: "محدود",
    yourPremises: "مقرك الخاص",
    optional: "اختياري",
    completeControl: "تحكم كامل",
    ctaTitle: "هل أنت مستعد لامتلاك قوة عمل الذكاء الاصطناعي الخاصة بك؟",
    ctaSubtitle: "انضم إلى ثورة الملكية. توقف عن دفع الرسوم الشهرية وابدأ في بناء الأصول الرقمية.",
    exploreButton: "استكشف الموظفين الذكاء الاصطناعي",
  }
};
const t = (key, language) => translations[language][key] || key;

// 3. Language Context Hook
const useLanguage = () => {
    const [language, setLanguage] = React.useState('en');
    return { language, setLanguage, isRTL: language === 'ar' };
};

// --- END: Inlined Dependencies ---


const PhilosophyPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const sections = [
    { titleKey: "ownVsRent", icon: Home, contentKeys: ["ownVsRentDesc1", "ownVsRentDesc2", "ownVsRentDesc3"] },
    { titleKey: "securitySovereignty", icon: ShieldCheck, contentKeys: ["securitySovereigntyDesc1", "securitySovereigntyDesc2", "securitySovereigntyDesc3"] },
    { titleKey: "maestroOrchestra", icon: GitMerge, contentKeys: ["maestroOrchestraDesc1", "maestroOrchestraDesc2", "maestroOrchestraDesc3"] },
  ];

  const comparisonData = [
      { featureKey: 'monthlyCosts', traditional: '$500-5000+/month', nas: '$0/month' },
      { featureKey: 'dataLocation', traditional: 'theirServers', nas: 'yourPremises' },
      { featureKey: 'internetDependency', traditional: 'alwaysRequired', nas: 'optional' },
      { featureKey: 'customization', traditional: 'limited', nas: 'completeControl' },
      { featureKey: 'vendorLockIn', traditional: 'highRisk', nas: 'zeroRisk' },
      { featureKey: 'assetValue', traditional: 'rental', nas: 'depreciableAsset' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{t('philosophyTitle', language)}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('philosophySubtitle', language)}</p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-sm border-white/10 overflow-hidden">
                <div className={`grid grid-cols-1 md:grid-cols-3 items-center ${index === 1 ? 'md:flex-row-reverse' : ''}`}>
                   <div className={`p-8 text-center flex flex-col items-center justify-center h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 ${index === 1 ? 'md:order-2' : ''}`}>
                    <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-4 border-2 border-cyan-400/50">
                        <section.icon className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{t(section.titleKey, language)}</h2>
                   </div>
                   <div className="md:col-span-2 p-8 space-y-4">
                    {section.contentKeys.map((paragraphKey) => (
                        <p key={paragraphKey} className="text-lg text-white/90 leading-relaxed flex items-start">
                            <ArrowRight className="w-5 h-5 text-cyan-400 mr-3 mt-1.5 flex-shrink-0" />
                            <span>{t(paragraphKey, language)}</span>
                        </p>
                    ))}
                   </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mt-20"
        >
            <h2 className="text-3xl font-bold text-center mb-10 text-white">{t('comparisonTitle', language)}</h2>
            <Card className="bg-slate-800/50 border-white/10 p-0">
                <div className="grid grid-cols-3 text-center font-bold p-4 border-b border-white/10">
                    <h3 className="text-lg text-white text-left">{t('feature', language)}</h3>
                    <h3 className="text-lg text-red-400">{t('traditionalAI', language)}</h3>
                    <h3 className="text-lg text-green-400">{t('nasAI', language)}</h3>
                </div>
                <div className="divide-y divide-white/10">
                    {comparisonData.map(item => (
                        <div key={item.featureKey} className="grid grid-cols-3 items-center text-center p-4">
                            <p className="text-white/90 text-left">{t(item.featureKey, language)}</p>
                            <p className="text-red-400 flex items-center justify-center"><XCircle className="w-5 h-5 mr-2 hidden sm:inline"/><span>{typeof item.traditional === 'string' && item.traditional.startsWith('$') ? item.traditional : t(item.traditional, language)}</span></p>
                            <p className="text-green-400 flex items-center justify-center"><CheckCircle className="w-5 h-5 mr-2 hidden sm:inline"/><span>{typeof item.nas === 'string' && item.nas.startsWith('$') ? item.nas : t(item.nas, language)}</span></p>
                        </div>
                    ))}
                </div>
            </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-10 border border-cyan-400/30">
            <h2 className="text-3xl font-bold mb-4 text-white">{t('ctaTitle', language)}</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">{t('ctaSubtitle', language)}</p>
            <Button
                onClick={() => navigate('/showroom')}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 font-bold"
            >
                {t('exploreButton', language)}
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PhilosophyPage;
