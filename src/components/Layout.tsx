import { Outlet, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { Globe, LogIn, UserPlus, LogOut, LayoutDashboard } from 'lucide-react';

const Header = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const handleLogout = async () => {
        await signOut();
        navigate('/login');
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };


    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-pane backdrop-blur-lg border-b border-slate-800">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-black gradient-text">NAS AI</Link>
                <div className="hidden lg:flex items-center gap-x-6 text-sm">
                    <Link to="/" className="hover:text-[#00F0FF]">{t('home')}</Link>
                    <Link to="/orchestra" className="hover:text-[#00F0FF]">{t('theLab')}</Link>
                    <Link to="/showroom" className="hover:text-[#00F0FF]">{t('showroom')}</Link>
                    <Link to="/services" className="hover:text-[#00F0FF]">{t('services')}</Link>
                    <Link to="/about-us" className="hover:text-[#00F0FF]">{t('aboutUs')}</Link>
                </div>
                <div className="flex items-center space-x-2">
                    <select
                        value={i18n.language}
                        onChange={(e) => changeLanguage(e.target.value)}
                        className="bg-slate-800/50 border border-white/20 rounded-lg px-3 py-1 text-white text-sm"
                    >
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                    </select>
                    {user ? (
                        <>
                            <button onClick={() => navigate('/dashboard')} className="px-4 py-2 text-sm font-bold hover:bg-slate-800 rounded-lg flex items-center gap-2"><LayoutDashboard className="w-4 h-4" /> {t('dashboard')}</button>
                            <button onClick={handleLogout} className="px-4 py-2 text-sm font-bold bg-red-600/80 hover:bg-red-700 rounded-lg flex items-center gap-2"><LogOut className="w-4 h-4" /> {t('logout')}</button>
                        </>
                    ) : (
                        <div className="hidden md:flex items-center space-x-2">
                            <Link to="/login" className="px-4 py-2 text-sm font-bold hover:bg-slate-800 rounded-lg flex items-center gap-2"><LogIn className="w-4 h-4" /> {t('login')}</Link>
                            <Link to="/signup" className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center gap-2"><UserPlus className="w-4 h-4" /> {t('signup')}</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

const Footer = () => (
    <footer className="bg-[#0A0F2B] border-t border-slate-800 py-12">
        <div className="container mx-auto px-6 text-center text-slate-400">
             <div className="text-3xl font-black gradient-text tracking-wider mb-4">NAS AI</div>
             <p>© {new Date().getFullYear()} NAS GLOBAL-AI. All rights reserved.</p>
        </div>
    </footer>
);

const Layout = () => {
    return (
        <div className="bg-[#050816] text-[#E6F1FF]">
            <Header />
            <main className="min-h-screen pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
