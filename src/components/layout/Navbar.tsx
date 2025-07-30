// File: src/components/layout/Navbar.tsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, LogOut, LayoutDashboard, Store, Wrench } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext'; // Step 1: Import the useAuth hook

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    // Step 2: Get user session and signOut function from the AuthContext
    const { user, signOut, loading } = useAuth();

    // Define links for guests (not logged in)
    const guestLinks = [
        { key: 'conceptTitle', path: '/#concept' },
        { key: 'howItWorksTitle', path: '/#how-it-works' },
        { key: 'useCasesTitle', path: '/#use-cases' },
        { key: 'contactUs', path: '/contact' },
    ];

    // Define links for authenticated (logged in) users
    const userLinks = [
        { key: 'dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4 mr-2" /> },
        { key: 'showroom', path: '/showroom', icon: <Store className="w-4 h-4 mr-2" /> },
        { key: 'services', path: '/services', icon: <Wrench className="w-4 h-4 mr-2" /> },
    ];

    const handleSignOut = async () => {
        await signOut();
        navigate('/'); // Redirect to home page after sign out
    };

    return (
        <nav className="relative z-50 py-6 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        {/* You can keep your SVG logo here */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104m-5.891 12.096a3.375 3.375 0 00-.695 5.122c1.885 1.32 4.17 1.32 6.055 0 1.884-1.32 4.17-1.32 6.054 0a3.375 3.375 0 00-.695-5.122M8.25 7.375H7.5a2.25 2.25 0 00-2.25 2.25v3.375c0 .621.308 1.199.793 1.568C6.65 15.095 7.24 15.5 7.875 15.5H8.25" /></svg>
                    </div>
                    <span className="text-xl font-bold text-white">{t('digitalEmployee')}</span>
                </motion.div>

                {/* Step 3: Conditionally render links based on user state */}
                <div className="hidden md:flex items-center space-x-8">
                    {!loading && user ? (
                        // Render links for logged-in users
                        userLinks.map(link => (
                            <Link key={link.key} to={link.path} className={`flex items-center text-white/80 hover:text-white transition-colors ${location.pathname === link.path ? 'text-cyan-400' : ''}`}>
                                {link.icon}
                                {t(link.key)}
                            </Link>
                        ))
                    ) : (
                        // Render links for guests
                        guestLinks.map(link => (
                             <motion.a key={link.key} href={link.path} className="text-white/80 hover:text-white transition-colors" whileHover={{ scale: 1.05 }}>{t(link.key)}</motion.a>
                        ))
                    )}
                </div>

                {/* Step 4: Conditionally render buttons based on user state */}
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
                        {!loading && user ? (
                            <Button size="sm" variant="outline" onClick={handleSignOut}>
                                <LogOut className="w-4 h-4 mr-2" />
                                {t('logout')}
                            </Button>
                        ) : (
                            <Button size="sm" onClick={() => navigate('/login')}>
                                {t('login')}
                            </Button>
                        )}
                    </motion.div>
                </div>

                {/* Mobile Menu Button - can be enhanced with conditional logic too */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
