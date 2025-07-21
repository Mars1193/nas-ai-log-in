import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, LogOut } from 'lucide-react';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { key: 'home', path: '/' },
        { key: 'showroom', path: '/showroom' },
        { key: 'services', path: '/services' },
        { key: 'roiCalculator', path: '/roi-calculator' },
        { key: 'philosophy', path: '/philosophy' },
        { key: 'contact', path: '/contact' },
    ];

    return (
        <nav className="relative z-50 py-6 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2"
                >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104m-5.891 12.096a3.375 3.375 0 00-.695 5.122c1.885 1.32 4.17 1.32 6.055 0 1.884-1.32 4.17-1.32 6.054 0a3.375 3.375 0 00-.695-5.122M8.25 7.375H7.5a2.25 2.25 0 00-2.25 2.25v3.375c0 .621.308 1.199.793 1.568C6.65 15.095 7.24 15.5 7.875 15.5H8.25" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-white">{t('digitalEmployee')}</span>
                </motion.div>
                <div className="hidden md:flex items-center space-x-8">
                    <motion.a href="#concept" className="text-white/80 hover:text-white transition-colors" whileHover={{ scale: 1.05 }}>{t('conceptTitle')}</motion.a>
                    <motion.a href="#how-it-works" className="text-white/80 hover:text-white transition-colors" whileHover={{ scale: 1.05 }}>{t('howItWorksTitle')}</motion.a>
                    <motion.a href="#use-cases" className="text-white/80 hover:text-white transition-colors" whileHover={{ scale: 1.05 }}>{t('useCasesTitle')}</motion.a>
                    <motion.a href="#contact" className="text-white/80 hover:text-white transition-colors" whileHover={{ scale: 1.05 }}>{t('contactUs')}</motion.a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <select
                        value={i18n.language}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        className="bg-slate-800/50 border border-white/20 rounded-lg px-3 py-1 text-white"
                    >
                        <option value="ar">العربية</option>
                        <option value="en">English</option>
                    </select>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <Button size="sm" onClick={() => navigate('/showroom')}>{t('learnMore')}</Button>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
