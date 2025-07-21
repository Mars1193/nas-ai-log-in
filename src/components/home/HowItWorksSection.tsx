import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface HowItWorksStep {
  id: string;
  number: string;
  titleKey: string;
  descriptionKey: string;
}

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const howItWorksSteps: HowItWorksStep[] = [
    {
      id: 'step1',
      number: "01",
      titleKey: "localModelsTitle",
      descriptionKey: "localModelsDescription",
    },
    {
      id: 'step2',
      number: "02",
      titleKey: "integrationTitle",
      descriptionKey: "integrationDescription",
    },
    {
      id: 'step3',
      number: "03",
      titleKey: "autonomousExecutionTitle",
      descriptionKey: "autonomousExecutionDescription",
    },
    {
      id: 'step4',
      number: "04",
      titleKey: "humanInteractionTitle",
      descriptionKey: "humanInteractionDescription",
    },
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-24 bg-gradient-to-br from-slate-900/50 to-blue-900/50">
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
              {t('howItWorksTitle')}
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('howItWorksDescription')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-6 border border-white/10">
                <span className="text-cyan-400 font-bold">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t(step.titleKey)}</h3>
              <p className="text-white/80">{t(step.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;