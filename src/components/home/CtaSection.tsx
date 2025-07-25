import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="contact" className="relative z-10 py-24 bg-gradient-to-br from-blue-900/80 to-purple-900/80">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-white/80 mb-10">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/contact')}>{t('contactUs')}</Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/showroom')}>{t('learnMore')}</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;