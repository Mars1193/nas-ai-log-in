import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { conceptItems, ConceptItem } from '../../data/mockData';

const ConceptSection = () => {
  const { t } = useTranslation();

  return (
    <section id="concept" className="relative z-10 py-24 border-t border-white/10 bg-black/20 backdrop-blur-sm">
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
              {t('conceptTitle')}
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('conceptDescription')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-white/10">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
                <div className="text-white text-center p-6">
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 110-14 7 7 0 010 14z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t('realisticAvatar')}</h3>
                  <p className="text-white/70">{t('reportCompleted')}</p>
                  <div className="bg-green-900/30 border border-green-500/30 rounded-full px-4 py-2 inline-block">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-sm">{t('activeReady')}</span>
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
            viewport={{ once: true }}
            className="space-y-6"
          >
            {conceptItems.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 space-x-reverse">
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{t(item.titleKey)}</h3>
                  <p className="text-white/80">{t(item.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
