import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, GitBranch, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { useNavigate } from 'react-router-dom';

// --- هياكل البيانات لمحتوى الصفحة ---
const corePrinciples = [
    {
        icon: <Shield size={32} className="text-cyan-400" />,
        titleKey: 'ownVsRentTitle',
        descriptionKey: 'ownVsRentDesc',
    },
    {
        icon: <Lock size={32} className="text-cyan-400" />,
        titleKey: 'securitySovereigntyTitle',
        descriptionKey: 'securitySovereigntyDesc',
    },
    {
        icon: <Users size={32} className="text-cyan-400" />,
        titleKey: 'maestroOrchestraTitle',
        descriptionKey: 'maestroOrchestraDesc',
    }
];

const comparisonData = [
    { featureKey: 'monthlyCosts', traditionalKey: 'highRecurring', nasAiKey: 'zeroRecurring' },
    { featureKey: 'dataLocation', traditionalKey: 'theirServers', nasAiKey: 'yourPremises' },
    { featureKey: 'internetDependency', traditionalKey: 'alwaysRequired', nasAiKey: 'optional' },
    { featureKey: 'customization', traditionalKey: 'limited', nasAiKey: 'completeControl' },
    { featureKey: 'vendorLockIn', traditionalKey: 'highRisk', nasAiKey: 'zeroRisk' },
    { featureKey: 'assetValue', traditionalKey: 'zeroRental', nasAiKey: 'depreciableAsset' },
];

// --- متغيرات الحركة ---
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
};

const PhilosophyPage = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="bg-[#050816] text-white overflow-x-hidden">
            {/* --- قسم الهيرو --- */}
            <motion.section 
                className="relative text-center py-24 lg:py-32 px-4"
                initial="hidden" animate="visible" variants={fadeIn}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2B] via-[#050816] to-[#050816]"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('/path-to-abstract-bg.svg')]"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {t('philosophyTitle', language)}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300">
                        {t('philosophySubtitle', language)}
                    </p>
                </div>
            </motion.section>

            {/* --- قسم المبادئ الأساسية --- */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {corePrinciples.map((principle, index) => (
                            <motion.div 
                                key={index}
                                className="bg-[#0A0F2B] border border-slate-800 rounded-xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                                variants={fadeIn}
                            >
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-cyan-500/50">
                                    {principle.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{t(principle.titleKey, language)}</h3>
                                <p className="text-slate-400 leading-relaxed">{t(principle.descriptionKey, language)}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- قسم منصة القيادة (الجديد) --- */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeIn}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold">{t('maestroPlatformTitle', language)}</h2>
                        </div>
                        <div className="bg-[#0A0F2B] border border-slate-800 rounded-2xl p-8 md:p-12 text-center">
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                                {t('maestroPlatformDesc', language)}
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center mt-8 shadow-2xl shadow-blue-500/20">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('symphonyToAchievementTitle', language)}</h3>
                            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                                {t('symphonyToAchievementDesc', language)}
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-cyan-300">
                                {t('areYouReady', language)}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- قسم المقارنة --- */}
            <section className="py-20 px-4 bg-[#0A0F2B]">
                <div className="container mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">{t('comparisonTitle', language)}</h2>
                    </motion.div>
                    <motion.div 
                        className="max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <div className="bg-[#050816] rounded-xl border border-slate-800 overflow-hidden">
                            <div className="grid grid-cols-3 p-4 bg-slate-800 font-bold">
                                <div>{t('feature', language)}</div>
                                <div className="text-center text-red-400">{t('traditionalAI', language)}</div>
                                <div className="text-center text-green-400">{t('nasAI', language)}</div>
                            </div>
                            {comparisonData.map((row, index) => (
                                <motion.div key={index} className="grid grid-cols-3 p-4 border-t border-slate-800 items-center" variants={fadeIn}>
                                    <div className="font-semibold">{t(row.featureKey, language)}</div>
                                    <div className="text-center text-red-400">{t(row.traditionalKey, language)}</div>
                                    <div className="text-center text-green-400">{t(row.nasAiKey, language)}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- قسم دعوة للعمل (CTA) --- */}
            <section className="py-20 px-4 text-center">
                 <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeIn}
                 >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('readyToOwn', language)}</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-8">{t('joinOwnershipRevolution', language)}</p>
                    <button 
                        onClick={() => navigate('/showroom')}
                        className="px-8 py-4 font-bold rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white hover:scale-105 transition-transform duration-300 flex items-center mx-auto"
                    >
                        {t('exploreProducts', language)}
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                 </motion.div>
            </section>
        </div>
    );
};

export default PhilosophyPage;
