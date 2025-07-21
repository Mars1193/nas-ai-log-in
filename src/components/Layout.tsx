import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { BrowserRouter, Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, LogOut, Settings, BarChart3, Zap, Home, Store, Calculator, Briefcase, Menu, Globe } from 'lucide-react';

// --- START: Inlined Dependencies & Contexts ---

// 1. Language Context & Provider
const LanguageContext = createContext(null);
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const isRTL = language === 'ar';
    
    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [isRTL, language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
};
const useLanguage = () => useContext(LanguageContext);

// 2. Auth Context & Provider (Simplified Mock)
const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Set to { email: 'test@nas.ai' } to see logged-in state
    const signOut = () => setUser(null);
    const value = { user, signOut };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);

// 3. Translations (Simplified)
const translations = {
    en: {
        home: "Home", showroom: "Showroom", services: "Services", roiCalculator: "ROI Calculator", philosophy: "Philosophy", contact: "Contact",
        login: "Login", signup: "Sign Up", dashboard: "Dashboard", profile: "Profile", logout: "Logout",
        footerSlogan: "Built with today's technology, delivering tomorrow's workforce.",
        contactUs: "Contact Us", quickLinks: "Quick Links", followUs: "Follow Us", rightsReserved: "All rights reserved.",
        stayUpdated: "Stay Updated", newsletterPlaceholder: "Enter your email...", subscribe: "Subscribe",
    },
    ar: {
        home: "الرئيسية", showroom: "صالة العرض", services: "خدماتنا", roiCalculator: "حاسبة العائد", philosophy: "الفلسفة", contact: "اتصل بنا",
        login: "دخول", signup: "تسجيل", dashboard: "لوحة التحكم", profile: "الملف الشخصي", logout: "خروج",
        footerSlogan: "مصنوع بتقنيات اليوم لأجل قوة عمل الغد.",
        contactUs: "تواصل معنا", quickLinks: "روابط سريعة", followUs: "تابعنا", rightsReserved: "جميع الحقوق محفوظة.",
        stayUpdated: "ابق على اطلاع", newsletterPlaceholder: "أدخل بريدك الإلكتروني...", subscribe: "اشتراك",
    }
};
const t = (key, lang) => translations[lang][key] || key;

// --- END: Inlined Dependencies & Contexts ---


// --- START: Inlined Components ---

const Header = () => {
    const { language, setLanguage } = useLanguage();
    const { user, signOut } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { key: 'home', path: '/' },
        { key: 'showroom', path: '/showroom' },
        { key: 'services', path: '/services' },
        { key: 'roiCalculator', path: '/roi-calculator' },
        { key: 'philosophy', path: '/philosophy' },
        { key: 'contact', path: '/contact' },
    ];

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">N</span>
                    </div>
                    <span className="text-2xl font-bold text-white">NAS AI</span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-2">
                    {navLinks.map(link => (
                        <Link key={link.key} to={link.path} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.path ? 'bg-white/10 text-cyan-400' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}>
                            {t(link.key, language)}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-3">
                    <button onClick={toggleLanguage} className="p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Toggle Language">
                        <Globe className="w-5 h-5 text-white/80" />
                    </button>
                    {user ? (
                         <div className="flex items-center gap-2">
                            <span className="text-sm text-white/80">{user.email}</span>
                            <button onClick={signOut} className="p-2 rounded-md hover:bg-red-500/20 transition-colors" aria-label="Logout">
                                <LogOut className="w-5 h-5 text-red-400" />
                            </button>
                        </div>
                    ) : (
                        <>
                            <button onClick={() => navigate('/login')} className="px-4 py-2 text-sm font-medium rounded-md hover:bg-white/10 transition-colors">{t('login', language)}</button>
                            <button onClick={() => navigate('/signup')} className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity">{t('signup', language)}</button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setMobileMenuOpen(true)} className="p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Open menu">
                        <Menu className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 z-50 bg-slate-900 p-6 lg:hidden"
                    >
                        <div className="flex justify-between items-center mb-8">
                           <span className="text-2xl font-bold text-white">Menu</span>
                           <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                               <X className="w-6 h-6 text-white"/>
                           </button>
                        </div>
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map(link => (
                                <Link key={link.key} to={link.path} onClick={() => setMobileMenuOpen(false)} className="text-xl text-white/80 hover:text-white py-2">
                                    {t(link.key, language)}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const Footer = () => {
    const { language } = useLanguage();
    const socialLinks = [
        { name: 'WhatsApp', url: 'https://wa.me/971567090064', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.52-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg> },
        { name: 'YouTube', url: 'https://www.youtube.com/@NASGLOBALAI', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
        { name: 'Instagram', url: 'https://www.instagram.com/nasglobalai', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg> },
        { name: 'X', url: 'https://x.com/nasglobalai', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
        { name: 'Facebook', url: 'https://www.facebook.com/NASGLOBALAI', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg> },
        { name: 'Pinterest', url: 'https://www.pinterest.com/nasglobalai', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 12.017c0 5.075 3.12 9.388 7.628 11.166-.1-.948-.182-2.434.022-3.322.202-.882 1.262-5.352 1.262-5.352s-.328-.655-.328-1.632c0-1.534.89-2.678 2.004-2.678 1.052 0 1.556.795 1.556 1.748 0 1.066-.672 2.653-1.022 4.128-.29.98.492 1.785 1.458 1.785 1.748 0 3.094-2.243 3.094-5.518 0-2.88-2.07-4.89-5.012-4.89-3.41 0-5.418 2.56-5.418 5.182 0 .98.348 2.034.782 2.653.094.132.11.18.082.308-.03.132-.11.46-.142.58-.032.122-.062.152-.192.094-1.22-.49-2.004-2.48-2.004-3.968 0-2.758 2.33-5.922 6.542-5.922 3.46 0 6.182 2.442 6.182 5.488 0 3.428-2.184 6.158-5.222 6.158-1.034 0-2.004-.534-2.338-1.162 0 0-.512 2.034-.638 2.55-.262 1.066-.992 2.348-1.428 3.128C9.538 23.518 10.75 24 12.017 24c6.62 0 11.983-5.367 11.983-12.017S18.637 0 12.017 0z"/></svg> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/nasglobalai', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.94 0-1.42.61-1.62 1.21-.07.21-.09.5-.09.79V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.38 1.02 3.38 3.56z"/></svg> },
        { name: 'TikTok', url: 'https://www.tiktok.com/@nasglobalai', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.77-1.8-2.59-4.28-2.49-6.65.02-1.22.22-2.42.62-3.56.81-2.27 2.87-4.01 5.02-4.48 2.19-.49 4.41.11 6.25 1.35.62.41 1.18.88 1.78 1.35V.02z"/></svg> },
    ];

    const quickLinks = [
        { key: 'home', path: '/' },
        { key: 'showroom', path: '/showroom' },
        { key: 'services', path: '/services' },
        { key: 'philosophy', path: '/philosophy' },
    ];
    return (
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t-2 border-cyan-400/20 text-white py-16 px-4">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
                <div className="md:col-span-3">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-2xl">N</span>
                        </div>
                        <span className="text-2xl font-bold text-white">NAS AI</span>
                    </div>
                    <p className="text-white/70 text-sm">{t('footerSlogan', language)}</p>
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">{t('quickLinks', language)}</h3>
                    <ul className="space-y-2">
                        {quickLinks.map(link => (
                            <li key={link.key}>
                                <Link to={link.path} className="text-white/80 hover:text-cyan-400 transition-colors">{t(link.key, language)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-3">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">{t('contactUs', language)}</h3>
                    <ul className="space-y-2 text-white/80 font-mono">
                        <li><a href="tel:+971505158010" className="hover:text-cyan-400">Call: +971 50 515 8010</a></li>
                        <li><a href="https://wa.me/971567090064" className="hover:text-cyan-400">WhatsApp: +971 56 709 0064</a></li>
                        <li><a href="mailto:sales@nasglobal-ai.com" className="hover:text-cyan-400">sales@nasglobal-ai.com</a></li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">{t('followUs', language)}</h3>
                    <div className="flex flex-wrap gap-4">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                               className="text-white/70 hover:text-cyan-400 transition-transform hover:scale-110">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-16 border-t border-white/10 pt-8 text-center text-white/60 text-sm">
                &copy; {new Date().getFullYear()} NAS GLOBAL AI. {t('rightsReserved', language)}
            </div>
        </div>
      </footer>
    );
};

const GuestRelationsAI = () => {
    // This is a placeholder for the full chat component
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white"
        >
            <AnimatePresence>
                {isOpen ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={32} /></motion.div>
                       : <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageSquare size={32} /></motion.div>}
            </AnimatePresence>
        </motion.button>
      </div>
    );
};

const Toaster = () => null; // Placeholder

// --- END: Inlined Components ---

const Layout = () => {
    return (
        <LanguageProvider>
            <AuthProvider>
                <div className="min-h-screen flex flex-col bg-slate-900 text-white">
                    <Header />
                    <main className="flex-1">
                        <Outlet />
                    </main>
                    <Footer />
                    <GuestRelationsAI />
                    <Toaster />
                </div>
            </AuthProvider>
        </LanguageProvider>
    );
};

// This is the final component that should be used in your main App.tsx
// It assumes that App.tsx will provide the <BrowserRouter>
export default Layout;