import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Upload, DollarSign, Shield } from 'lucide-react';

const SellYourFacePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <DollarSign className="w-10 h-10 text-green-400" />,
      title_en: "High Earning Potential",
      description_en: "Earn a significant income by licensing your likeness for AI-driven content creation.",
      title_ar: "إمكانية تحقيق أرباح عالية",
      description_ar: "احصل على دخل كبير عن طريق ترخيص صورتك لإنشاء محتوى مدفوع بالذكاء الاصطناعي.",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-400" />,
      title_en: "Controlled Usage",
      description_en: "You have control over the types of content your digital likeness can be used for.",
      title_ar: "استخدام متحكم فيه",
      description_ar: "لديك السيطرة على أنواع المحتوى التي يمكن استخدام صورتك الرقمية فيها.",
    },
    {
      icon: <Upload className="w-10 h-10 text-purple-400" />,
      title_en: "Simple Process",
      description_en: "Our platform makes it easy to upload your data and manage your digital identity.",
      title_ar: "عملية بسيطة",
      description_ar: "منصتنا تجعل من السهل تحميل بياناتك وإدارة هويتك الرقمية.",
    },
  ];

  const faqs = [
    {
      question_en: "What is NAS-AI?",
      answer_en: "NAS-AI is a platform that allows you to sell your face to be used in AI-generated videos.",
      question_ar: "ما هو NAS-AI؟",
      answer_ar: "NAS-AI هي منصة تتيح لك بيع وجهك لاستخدامه في مقاطع الفيديو التي يتم إنشاؤها بواسطة الذكاء الاصطناعي.",
    },
    {
      question_en: "How much can I earn?",
      answer_en: "You can earn up to $100,000 per year.",
      question_ar: "كم يمكنني أن أكسب؟",
      answer_ar: "يمكنك كسب ما يصل إلى 100,000 دولار في السنة.",
    },
    {
      question_en: "Is this legal?",
      answer_en: "Yes, this is legal.",
      question_ar: "هل هذا قانوني؟",
      answer_ar: "نعم، هذا قانوني.",
    },
    {
      question_en: "How do I get started?",
      answer_en: "You can get started by signing up on our website.",
      question_ar: "كيف أبدأ؟",
      answer_ar: "يمكنك البدء عن طريق التسجيل على موقعنا.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {isArabic ? "بع وجهك للذكاء الاصطناعي" : "Sell Your Face to AI"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {isArabic
              ? "انضم إلى مستقبل إنشاء المحتوى الرقمي واكسب المال من هويتك الفريدة. بأمان وأمان."
              : "Join the future of digital content creation and monetize your unique identity. Safely and securely."}
          </p>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300">
            {isArabic ? "ابدأ الآن" : "Get Started"}
          </button>
        </motion.div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            {isArabic ? "لماذا تنضم إلينا؟" : "Why Join Us?"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-2xl text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{isArabic ? feature.title_ar : feature.title_en}</h3>
                <p className="text-gray-400">{isArabic ? feature.description_ar : feature.description_en}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How it works Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            {isArabic ? "كيف يعمل" : "How It Works"}
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-700 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { title_en: "Sign Up", desc_en: "Create your secure account.", title_ar: "سجل", desc_ar: "أنشئ حسابك الآمن." },
                { title_en: "Upload Data", desc_en: "Provide high-resolution images and voice samples.", title_ar: "تحميل البيانات", desc_ar: "قدم صورًا عالية الدقة وعينات صوتية." },
                { title_en: "Get Verified", desc_en: "Our team verifies your identity and data.", title_ar: "الحصول على التحقق", desc_ar: "يتحقق فريقنا من هويتك وبياناتك." },
                { title_en: "Start Earning", desc_en: "Get paid when your likeness is used.", title_ar: "ابدأ في الكسب", desc_ar: "احصل على أموال عند استخدام صورتك." },
              ].map((step, index) => (
                <div key={index} className="relative">
                   <div className="relative z-10 w-20 h-20 mx-auto flex items-center justify-center bg-gray-800 border-4 border-purple-500 rounded-full text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mt-4">{isArabic ? step.title_ar : step.title_en}</h3>
                  <p className="text-gray-400">{isArabic ? step.desc_ar : step.desc_en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">
            {isArabic ? "أسئلة مكررة" : "Frequently Asked Questions"}
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-6 flex justify-between items-center"
                >
                  <span className="text-xl font-semibold">{isArabic ? faq.question_ar : faq.question_en}</span>
                  <motion.span
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </motion.span>
                </button>
                {activeFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pb-6 text-gray-300"
                  >
                    {isArabic ? faq.answer_ar : faq.answer_en}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourFacePage;
