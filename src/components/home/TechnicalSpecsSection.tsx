import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TechnicalSpecsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="technical-specs" className="relative z-10 py-24 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('technicalSpecsTitle')}
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('technicalSpecsDescription')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-white/10">
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="w-24 h-24 bg-gray-700 rounded-md mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104m-4.97 12.132a9 9 0 01-2.659-4.035 1 1 0 01-.22-.772 8 8 0 012.64-3.288 3.75 3.75 0 013.288-2.64c.47-.38.562-.17 4.423 3.252 1 1 0 01.364.61 8 8 0 01-2.64 3.288 3.75 3.75 0 01-3.288 2.64 1 1 0 01-.772-.22 9 9 0 01-4.035-2.659M12 15.562V21M21 12a9 9 0 01-9 9M3 12a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">الخادم المحلي</h3>
                  <p className="text-white/80 text-sm mb-4">جهاز كمبيوتر قوي يحتوي على النظام</p>
                  <div className="bg-green-900/30 border border-green-500/30 rounded-full px-4 py-2 inline-block">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-sm">جاهز للعمل</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A9 9 0 1121 12 9 9 0 013 12m18 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">وحدة المعالجة المركبة</h4>
                <p className="text-white/80">وحدة معالجة مركزية قوية (CPU) لتشغيل النماذج الذكية</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">الذاكرة الرسومية</h4>
                <p className="text-white/80">بطاقة رسومية قوية (GPU) لتسريع معالجة البيانات</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 15h.01M7 11h.01M12 7h.01M12 15h.01M12 11h.01M17 7h.01M17 15h.01M17 11h.01M6 21h12A3 3 0 0021 18V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">الذاكرة المحلية</h4>
                <p className="text-white/80">مساحة تخزين كافية لاحتواء قاعدة البيانات والبرامج</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A9 9 0 1121 12 9 9 0 013 12m18 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">النظام التشغيلي</h4>
                <p className="text-white/80">نظام تشغيل خاص مخصص للنظام الذكي</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zM20 10a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 20.5v-10M6 10.5v-10" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">الاتصالات</h4>
                <p className="text-white/80">اتصالات سريعة بين النماذج والأدوات التنفيذية</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsSection;
