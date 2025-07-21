import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          digitalEmployee: "Digital Employee",
          turningComputers: "Transforming Computers into Smart Employees",
          digitalMind: "The integrated digital mind that intelligently performs tasks.",
          humanAvatar: "Try the Demo",
          contactUs: "Contact Us",
          learnMore: "Learn More",
          conceptTitle: "Concept of the Digital Employee",
          conceptDescription: "The digital employee is the transformation of an advanced computer into an integrated digital mind through the integration of advanced AI models working locally with executive tools that enable this mind to perform the required tasks and present results in a human-like way.",
          howItWorksTitle: "How It Works",
          howItWorksDescription: "AI models are trained on a local database containing all the knowledge and tools the system needs, allowing them to control the mouse and keyboard to execute commands autonomously.",
          keyFeaturesTitle: "Key Features",
          keyFeaturesDescription: "The digital employee has several features that make it capable of executing complex tasks with high efficiency.",
          useCasesTitle: "Use Cases",
          useCasesDescription: "The digital employee can be used in various fields to accomplish routine and complex tasks alike.",
          technicalSpecsTitle: "Technical Specifications",
          technicalSpecsDescription: "The digital employee requires powerful hardware and high specifications to ensure optimal performance.",
          ctaTitle: "Try the Digital Employee Now",
          ctaDescription: "Contact us today to experience the digital employee and transform your way of working completely.",
          scrollDown: "Scroll Down",
        },
      },
      ar: {
        translation: {
          digitalEmployee: "الموظف الرقمي",
          turningComputers: "تحويل الكمبيوترات إلى موظفين أذكياء",
          digitalMind: "العقل الرقمي المتكامل الذي ينفذ المهام بذكاء.",
          humanAvatar: "جرب العرض التقديمي",
          contactUs: "تواصل معنا",
          learnMore: "اعرف المزيد",
          conceptTitle: "مفهوم الموظف الرقمي",
          conceptDescription: "الموظف الرقمي هو تحويل جهاز كمبيوتر متطور إلى عقل رقمي متكامل من خلال دمج نماذج ذكاء اصطناعي متقدمة تعمل محليًا مع أدوات تنفيذية تمكن هذا العقل من تنفيذ المهام المطلوبة وتقديم النتائج بأسلوب بشري.",
          howItWorksTitle: "كيف يعمل",
          howItWorksDescription: "يتم تدريب نماذج الذكاء الاصطناعي على قاعدة بيانات محلية تحتوي على كل ما يحتاجه النظام من معرفة وأدوات، مما يسمح لها بالتحكم في الماوس ولوحة المفاتيح لتنفيذ الأوامر بشكل مستقل.",
          keyFeaturesTitle: "الميزات الرئيسية",
          keyFeaturesDescription: "الموظف الرقمي يتمتع بعدة ميزات تجعله قادرًا على تنفيذ المهام المعقدة بكفاءة عالية.",
          useCasesTitle: "حالات الاستخدام",
          useCasesDescription: "يمكن استخدام الموظف الرقمي في مختلف المجالات لإنجاز المهام الروتينية والمعقدة على حد سواء.",
          technicalSpecsTitle: "المواصفات التقنية",
          technicalSpecsDescription: "يتطلب الموظف الرقمي أجهزة قوية ومواصفات عالية لضمان الأداء الأمثل.",
          ctaTitle: "جرب الموظف الرقمي الآن",
          ctaDescription: "تواصل معنا اليوم لتجربة الموظف الرقمي وتحويل طريقة عملك بالكامل.",
          scrollDown: "مرر للأسفل",
        },
      },
    },
  });

export default i18n;
