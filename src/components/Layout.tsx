import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Globe, LogIn, UserPlus, LogOut, LayoutDashboard } from 'lucide-react';

const Header = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate('/login');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-pane backdrop-blur-lg border-b border-slate-800">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="/" className="text-2xl font-black gradient-text">NAS AI</a>
                <div className="hidden lg:flex items-center gap-x-6 text-sm">
                    <a href="/" className="hover:text-[#00F0FF]">Home</a>
                    <a href="/showroom" className="hover:text-[#00F0FF]">Showroom</a>
                    <a href="/services" className="hover:text-[#00F0FF]">Services</a>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-full hover:bg-slate-800"><Globe className="w-5 h-5" /></button>
                                        {user ? (
                        <>
                            <button onClick={() => navigate('/dashboard')} className="px-4 py-2 text-sm font-bold hover:bg-slate-800 rounded-lg flex items-center gap-2"><LayoutDashboard className="w-4 h-4" /> Dashboard</button>
                            <button onClick={handleLogout} className="px-4 py-2 text-sm font-bold bg-red-600/80 hover:bg-red-700 rounded-lg flex items-center gap-2"><LogOut className="w-4 h-4" /> Logout</button>
                        </>
                    ) : (
                        <div className="hidden md:flex items-center space-x-2">
                            <a href="/login" className="px-4 py-2 text-sm font-bold hover:bg-slate-800 rounded-lg flex items-center gap-2"><LogIn className="w-4 h-4" /> Login</a>
                            <a href="/signup" className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center gap-2"><UserPlus className="w-4 h-4" /> Sign Up</a>
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
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
