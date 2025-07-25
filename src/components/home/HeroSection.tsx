import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.querySelector('#hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } as Transition }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as any } as Transition }
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero-section" className="relative z-10 flex items-center justify-center min-h-[90vh] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="text-center lg:text-right space-y-6">
            <motion.span 
              className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              {t('digitalEmployee')}
            </motion.span>
            <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('turningComputers')}
              </span>
            </motion.h1>
            <motion.p className="text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              {t('digitalMind')}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end pt-4">
              <Button size="lg" className="shadow-2xl transform hover:scale-105" onClick={() => navigate('/showroom')}>
                {t('humanAvatar')}
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                {t('contactUs')}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-96 bg-slate-800/50 rounded-3xl border border-white/10 backdrop-blur-lg flex items-center justify-center p-8">
                <div className="text-center">
                    <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 110-14 7 7 0 010 14z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold">{t('humanAvatar')}</h3>
                    <p className="text-white/70">{t('reportCompleted')}</p>
                </div>
            </div>
          </motion.div>
        </motion.div>
        
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <button onClick={scrollDown} className="text-white flex flex-col items-center">
                <span className="text-sm mb-2">{t('scrollDown')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
