import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';

export const LandingPage = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
            >
                <source src="/videos/75463f9b-449a-4da1-881f-92a7ff8553d0.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="relative z-20 container mx-auto px-4 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {t('mainHeadline', language).split('. ')[0]}.
                    </span>
                    <br />
                    {t('mainHeadline', language).split('. ')[1]}.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto"
                >
                    {t('subHeadline', language)}
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button 
                        onClick={() => navigate('/showroom')}
                        className="px-8 py-4 font-bold rounded-lg bg-ai-gradient text-white hover:scale-105 transition-transform duration-300"
                    >
                        {t('exploreShowroom', language)}
                    </button>
                    <button 
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 font-bold rounded-lg border border-white/30 text-white bg-transparent hover:bg-white/10 transition-colors"
                    >
                        {t('bookDemo', language)}
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;
