import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe, LogIn, UserPlus, LayoutDashboard, LogOut, Linkedin, Twitter, Instagram, Youtube, Music, Pin as Pinterest, Facebook } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext'; // Using the standard alias path

// --- MOCK DATA & TRANSLATIONS ---
const translations = {
    en: {
        navHome: "Home",
        navShowroom: "Showroom",
        navServices: "Services",
        navPhilosophy: "Our Philosophy",
        navContact: "Contact Us",
        navLogin: "Login",
        navSignUp: "Sign Up",
        heroTitle: "Transforming Computers into Smart Employees",
        heroSubtitle: "The integrated digital mind that intelligently performs tasks",
        heroBtnExplore: "Explore Our AI Solutions",
        heroBtnDemo: "Request a Demo",
    },
    ar: {
        navHome: "الرئيسية",
        navShowroom: "صالة العرض",
        navServices: "خدماتنا",
        navPhilosophy: "فلسفتنا",
        navContact: "تواصل معنا",
        navLogin: "تسجيل الدخول",
        navSignUp: "إنشاء حساب",
        heroTitle: "تحويل أجهزة الكمبيوتر إلى موظفين أذكياء",
        heroSubtitle: "العقل الرقمي المتكامل الذي يؤدي المهام بذكاء",
        heroBtnExplore: "استكشف حلول الذكاء الاصطناعي لدينا",
        heroBtnDemo: "طلب عرض توضيحي",
    },
};

type Language = 'en' | 'ar';

// --- REUSABLE MOCK SHADCN/UI COMPONENTS ---
const Button = ({ children, className, onClick, disabled = false, type = "button", variant }: { children: React.ReactNode, className?: string, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void, disabled?: boolean, type?: "button" | "submit" | "reset", variant?: "primary" | "secondary" | "ghost" | "signup" }) => {
    let variantClasses = "";
    switch (variant) {
        case "primary":
            variantClasses = "bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white";
            break;
        case "secondary":
            variantClasses = "bg-transparent border border-[#00F0FF] text-[#00F0FF]";
            break;
        case "ghost":
            variantClasses = "bg-transparent text-white hover:bg-slate-800";
            break;
        case "signup":
            variantClasses = "bg-gradient-to-r from-blue-500 to-purple-600 text-white";
            break;
        default:
            variantClasses = "bg-gray-700 text-white";
    }
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 ${variantClasses} ${className}`}
        >
            {children}
        </button>
    );
};

const HomePage = () => {
    const [lang, setLang] = useState<Language>('ar'); // Default to Arabic
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const t = (key: keyof typeof translations.en) => translations[lang][key] || key;

    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    const handleLogout = async () => {
        await signOut();
        navigate('/login');
    };

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const xRot = (y / height - 0.5) * 20; // Reduced rotation for subtlety
        const yRot = (x / width - 0.5) * -20; // Reduced rotation for subtlety
        setMousePosition({ x: yRot, y: xRot });
    };

    const resetMousePosition = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <div className="min-h-screen bg-[#050816] text-white">
            <header className="fixed top-0 left-0 right-0 z-50 glass-pane backdrop-blur-lg border-b border-slate-800">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-black gradient-text">NAS AI</Link>
                    <div className="hidden lg:flex items-center gap-x-6 text-sm">
                        <Link to="/" className="hover:text-[#00F0FF]">{t('navHome')}</Link>
                        <Link to="/showroom" className="hover:text-[#00F0FF]">{t('navShowroom')}</Link>
                        <Link to="/services" className="hover:text-[#00F0FF]">{t('navServices')}</Link>
                        <Link to="/philosophy" className="hover:text-[#00F0FF]">{t('navPhilosophy')}</Link>
                        <Link to="/contact" className="hover:text-[#00F0FF]">{t('navContact')}</Link>
                        <Link to="/research" className="hover:text-[#00F0FF]">Research</Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="p-2 rounded-full hover:bg-slate-800"><Globe className="w-5 h-5" /></button>
                        
                        <div className="hidden md:flex items-center space-x-4 border-l border-slate-700 pl-4 ml-2">
                             <a href="https://www.linkedin.com" target="_blank" className="text-slate-400 hover:text-white"><Linkedin size={18}/></a>
                             <a href="https://www.twitter.com" target="_blank" className="text-slate-400 hover:text-white"><Twitter size={18}/></a>
                             <a href="https://www.instagram.com" target="_blank" className="text-slate-400 hover:text-white"><Instagram size={18}/></a>
                        </div>

                        {user ? (
                            <div className="hidden md:flex items-center space-x-2">
                                <Link to="/dashboard"><Button variant="ghost" className="flex items-center gap-2"><LayoutDashboard className="w-4 h-4" /> Dashboard</Button></Link>
                                <Button onClick={handleLogout} variant="ghost" className="flex items-center gap-2 text-red-400 hover:bg-red-600/20"><LogOut className="w-4 h-4" /> Logout</Button>
                            </div>
                        ) : (
                            <div className="hidden md:flex items-center space-x-2">
                                <Link to="/login"><Button variant="ghost" className="flex items-center gap-2"><LogIn className="w-4 h-4" /> Login</Button></Link>
                                <Link to="/signup"><Button variant="signup" className="flex items-center gap-2"><UserPlus className="w-4 h-4" /> Sign Up</Button></Link>
                            </div>
                        )}
                        <button className="lg:hidden p-2 rounded-full hover:bg-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>
            </header>

            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-[#050816] z-40 pt-20">
                    <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-6 text-lg">
                        <a href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00F0FF]">{t('navHome')}</a>
                        <a href="/showroom" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00F0FF]">{t('navShowroom')}</a>
                        <a href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00F0FF]">{t('navServices')}</a>
                        <a href="/philosophy" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00F0FF]">{t('navPhilosophy')}</a>
                        <a href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#00F0FF]">{t('navContact')}</a>
                        <div className="border-t border-slate-700 w-full my-4"></div>
                        <a href="/login" className="w-full"><Button variant="ghost" className="w-full">{t('navLogin')}</Button></a>
                        <a href="/signup" className="w-full"><Button variant="signup" className="w-full">{t('navSignUp')}</Button></a>
                    </div>
                </div>
            )}

            <main>
                <section id="home" className="hero-bg min-h-screen flex items-center justify-center overflow-hidden">
                    <div className="hero-content container mx-auto px-6 text-center flex flex-col md:flex-row items-center justify-between gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" as any }}
                            className="md:w-1/2 text-center md:text-left rtl:md:text-right"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">{t('heroTitle')}</h1>
                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 mb-8">{t('heroSubtitle')}</p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse justify-center md:justify-start">
                                <Button onClick={() => navigate('/showroom')} variant="primary">{t('heroBtnExplore')}</Button>
                                <Button onClick={() => navigate('/contact')} variant="secondary">{t('heroBtnDemo')}</Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" as any }}
                            className="md:w-1/2 mt-12 md:mt-0"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={resetMousePosition}
                        >
                            <motion.div
                                className="relative"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`
                                }}
                            >
                                <div className="relative aspect-video rounded-xl glass-pane p-2 overflow-hidden">
                                    <video
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        src="/videos/75463f9b-449a-4da1-a81f-492a7f8553af.mp4" 
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="absolute inset-0 bg-black/50"></div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
        
            {/* The Footer has been removed from this component. It should be in your main Layout component. */}
        </div>
    );
};

export default HomePage;
