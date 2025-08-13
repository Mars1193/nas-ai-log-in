import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutUsPage: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('aboutUsOpeningTitle'),
      content: t('aboutUsOpeningContent'),
    },
    {
      title: t('aboutUsCreedTitle'),
      content: t('aboutUsCreedContent'),
    },
    {
      title: t('aboutUsPathsTitle'),
      content: t('aboutUsPathsContent'),
    },
    {
      title: t('aboutUsVisionTitle'),
      content: t('aboutUsVisionContent'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-white min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        {t('aboutUsTitle')}
      </motion.h1>

      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 border border-white/10 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">{section.title}</h2>
            <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
