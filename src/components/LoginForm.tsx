import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

const translations = {
    en: {
        title: "Welcome Back",
        description: "Sign in to access your Maestro Dashboard.",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        buttonText: "Sign In",
        loadingText: "Authenticating...",
        noAccount: "Don't have an account?",
        signUpLink: "Sign Up",
    },
    ar: {
        title: "أهلاً بعودتك",
        description: "سجل الدخول للوصول إلى لوحة تحكم المايسترو الخاصة بك.",
        emailLabel: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        buttonText: "تسجيل الدخول",
        loadingText: "جارِ المصادقة...",
        noAccount: "ليس لديك حساب؟",
        signUpLink: "إنشاء حساب",
    }
};

type Language = 'en' | 'ar';

const Button = ({ children, className, onClick, disabled = false, type = "button" }: { children: React.ReactNode, className?: string, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void, disabled?: boolean, type?: "button" | "submit" | "reset" }) => (
    <button 
        type={type}
        onClick={onClick} 
        disabled={disabled}
        className={`w-full px-8 py-3 font-bold rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white disabled:opacity-50 hover:scale-105 transition-transform duration-300 ${className}`}
    >
        {children}
    </button>
);

const Input = ({ type = 'text', placeholder, value, onChange }: { type?: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F0FF] text-white placeholder:text-slate-500"
        required
    />
);

const LoginForm = () => {
    const [lang, setLang] = useState<Language>('ar'); // Default to Arabic
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const t = (key: keyof typeof translations.en) => translations[lang][key] || key;

    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) throw error;
            
            navigate('/profile'); // Redirect to a protected page on success

        } catch (error: any) {
            setError(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-md"
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold gradient-text">{t('title')}</h1>
                <p className="text-slate-400 mt-2">{t('description')}</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 block text-left rtl:text-right">{t('emailLabel')}</label>
                    <Input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 block text-left rtl:text-right">{t('passwordLabel')}</label>
                    <Input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                 {error && <p className="text-center text-sm text-red-400">{error}</p>}
                <Button type="submit" disabled={loading} className="py-3">
                    {loading ? t('loadingText') : t('buttonText')}
                </Button>
            </form>
            <p className="text-center text-sm text-slate-400 mt-6">
                {t('noAccount')}{' '}
                <a href="/signup" className="font-medium text-[#00F0FF] hover:underline">
                    {t('signUpLink')}
                </a>
            </p>
        </motion.div>
    );
};

export default LoginForm;