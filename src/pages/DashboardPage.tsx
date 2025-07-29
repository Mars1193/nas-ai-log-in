import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';
import { motion } from 'framer-motion';
import { User, Cpu, BarChart2, Settings, ArrowRight } from 'lucide-react';

// Placeholder data for AI Employees
const aiEmployees = [
    { id: 1, nameKey: 'accountantTitle', status: 'Active', performance: 98.2 },
    { id: 2, nameKey: 'hrManagerTitle', status: 'Idle', performance: 95.7 },
    { id: 3, nameKey: 'purchasingSpecialistTitle', status: 'Training', performance: 89.1 },
];

// Animation Variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

const DashboardPage = () => {
    const { user } = useAuth();
    const { language, isRTL } = useLanguage();

    return (
        <div className="bg-[#050816] min-h-screen text-white p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto">
                {/* Welcome Header */}
                <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-between mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                            {t('dashboardWelcome', language)}
                        </h1>
                        <p className="text-slate-400 mt-2">{t('dashboardSubtitle', language)} {user?.name || user?.email}</p>
                    </div>
                    <button className="mt-4 sm:mt-0 px-6 py-3 font-bold rounded-lg bg-ai-gradient text-white hover:scale-105 transition-transform duration-300 flex items-center">
                        {t('manageSubscription', language)}
                        <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content: AI Employee List */}
                    <motion.div 
                        className="lg:col-span-2 space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <h2 className="text-2xl font-bold">{t('myAiEmployees', language)}</h2>
                        {aiEmployees.map((employee) => (
                            <motion.div
                                key={employee.id}
                                className="p-6 bg-[#0A0F2B] rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover-lift"
                                variants={fadeIn}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                        <Cpu className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{t(employee.nameKey as any, language)}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className={`w-2.5 h-2.5 rounded-full ${
                                                employee.status === 'Active' ? 'bg-green-500 animate-pulse' : 
                                                employee.status === 'Idle' ? 'bg-yellow-500' : 'bg-blue-500'
                                            }`}></span>
                                            <p className="text-sm text-slate-400">{t(employee.status.toLowerCase() as any, language)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                                     <div className="text-left sm:text-right">
                                        <p className="text-xs text-slate-500">{t('performance', language)}</p>
                                        <p className="font-bold text-lg text-green-400">{employee.performance}%</p>
                                     </div>
                                     <button className="px-4 py-2 text-sm font-semibold bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                                        {t('manage', language)}
                                     </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div 
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <h2 className="text-2xl font-bold">{t('overview', language)}</h2>
                        <motion.div className="p-6 bg-[#0A0F2B] rounded-xl border border-slate-800 hover-lift" variants={fadeIn}>
                            <h3 className="font-bold mb-4 flex items-center gap-2"><BarChart2 size={20} className="text-cyan-400"/> {t('performance', language)}</h3>
                            <p className="text-slate-400 text-sm">{t('performanceDesc', language)}</p>
                            <div className="h-32 mt-4 bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-500 text-xs">
                                [Performance Chart Area]
                            </div>
                        </motion.div>
                        <motion.div className="p-6 bg-[#0A0F2B] rounded-xl border border-slate-800 hover-lift" variants={fadeIn}>
                            <h3 className="font-bold mb-4 flex items-center gap-2"><Settings size={20} className="text-cyan-400"/> {t('settings', language)}</h3>
                            <p className="text-slate-400 text-sm">{t('settingsDesc', language)}</p>
                             <button className="mt-4 w-full px-4 py-2 text-sm font-semibold bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                                {t('accountSettings', language)}
                             </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
