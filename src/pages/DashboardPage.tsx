import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, BarChart3, Database, CalendarClock, Cloud, Link2, HelpCircle, Sun, Moon, Monitor } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext'; // Assuming this context provides user info

// --- Reusable UI Components (Tailored for Dashboard) ---
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-[#0A0F2B]/50 border border-slate-800 rounded-xl shadow-lg ${className}`}>
        {children}
    </div>
);

const Button = ({ children, variant, className, ...props }: { children: React.ReactNode, variant?: string, className?: string, [key: string]: any }) => {
    const baseClasses = "px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2";
    const variantClasses = {
        primary: "bg-cyan-500 text-slate-900 hover:bg-cyan-400",
        secondary: "bg-slate-700 hover:bg-slate-600 text-white",
    };
    return <button className={`${baseClasses} ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.secondary} ${className}`} {...props}>{children}</button>;
};

const Toggle = ({ children, pressed, ...props }: { children: React.ReactNode, pressed?: boolean, [key: string]: any }) => (
    <button className={`p-3 rounded-lg border ${pressed ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'}`} {...props}>
        {children}
    </button>
);

const Switch = ({ checked, onCheckedChange }: { checked: boolean, onCheckedChange: (checked: boolean) => void }) => (
    <button
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${checked ? 'bg-cyan-500' : 'bg-slate-700'}`}
    >
        <span
            aria-hidden="true"
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'}`}
        />
    </button>
);


// --- Dashboard Sections ---
const AccountSettings = () => <div><h2 className="text-2xl font-bold">Account</h2><p className="text-slate-400 mt-2">Manage your account details.</p></div>;
const UsageStats = () => <div><h2 className="text-2xl font-bold">Usage</h2><p className="text-slate-400 mt-2">View your usage statistics.</p></div>;
const DataControls = () => <div><h2 className="text-2xl font-bold">Data Controls</h2><p className="text-slate-400 mt-2">Manage your data settings.</p></div>;
const ScheduledTasks = () => <div><h2 className="text-2xl font-bold">Scheduled Tasks</h2><p className="text-slate-400 mt-2">View and manage scheduled tasks.</p></div>;
const CloudBrowser = () => <div><h2 className="text-2xl font-bold">Cloud Browser</h2><p className="text-slate-400 mt-2">Browse your cloud files.</p></div>;
const ConnectedApps = () => <div><h2 className="text-2xl font-bold">Connected Apps</h2><p className="text-slate-400 mt-2">Manage your connected applications.</p></div>;
const GetHelp = () => <div><h2 className="text-2xl font-bold">Get Help</h2><p className="text-slate-400 mt-2">Find help and support.</p></div>;

const GeneralSettings = () => {
    const [appearance, setAppearance] = useState('dark');
    const [feature1, setFeature1] = useState(true);
    const [feature2, setFeature2] = useState(true);

    return (
        <div>
            <h2 className="text-2xl font-bold text-white">Settings</h2>
            <p className="text-slate-400 mt-2 mb-8">Manage your application settings.</p>
            
            <div className="space-y-8">
                <Card className="p-6">
                    <h3 className="font-semibold text-white mb-4">General</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
                            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-2 max-w-xs">
                                <p className="text-white">English</p>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Appearance</label>
                            <div className="flex gap-2">
                                <Toggle pressed={appearance === 'light'} onClick={() => setAppearance('light')}><Sun className="w-5 h-5 mr-2" /> Light</Toggle>
                                <Toggle pressed={appearance === 'dark'} onClick={() => setAppearance('dark')}><Moon className="w-5 h-5 mr-2" /> Dark</Toggle>
                                <Toggle pressed={appearance === 'system'} onClick={() => setAppearance('system')}><Monitor className="w-5 h-5 mr-2" /> System</Toggle>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h3 className="font-semibold text-white mb-4">Notifications</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-white">Actele</p>
                                <p className="text-sm text-slate-400">Go powedrice staing quote suetoes foe souri tamples and new feature guides.</p>
                            </div>
                            <Switch checked={feature1} onCheckedChange={setFeature1} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-white">Email me when my queued task starts processing</p>
                                <p className="text-sm text-slate-400">When enabled, we'll send you a timely email once your task finishes queuing and begins processing, so</p>
                            </div>
                            <Switch checked={feature2} onCheckedChange={setFeature2} />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

// --- Main Dashboard Component ---
const DashboardPage = () => {
    const [activeView, setActiveView] = useState('settings');
    const { user } = useAuth();

    const navItems = [
        { id: 'account', label: 'Account', icon: User },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'usage', label: 'Usage', icon: BarChart3 },
        { id: 'data-controls', label: 'Data controls', icon: Database },
        { id: 'scheduled-tasks', label: 'Scheduled tasks', icon: CalendarClock },
        { id: 'cloud-browser', label: 'Cloud browser', icon: Cloud },
        { id: 'connected-apps', label: 'Connected apps', icon: Link2 },
    ];

    const helpItems = [
        { id: 'get-help', label: 'Get help', icon: HelpCircle },
    ];

    const renderContent = () => {
        switch (activeView) {
            case 'account': return <AccountSettings />;
            case 'settings': return <GeneralSettings />;
            case 'usage': return <UsageStats />;
            case 'data-controls': return <DataControls />;
            case 'scheduled-tasks': return <ScheduledTasks />;
            case 'cloud-browser': return <CloudBrowser />;
            case 'connected-apps': return <ConnectedApps />;
            case 'get-help': return <GetHelp />;
            default: return <GeneralSettings />;
        }
    };

    return (
        <div className="min-h-screen bg-[#050816] text-white flex pt-16">
            {/* Sidebar */}
            <motion.aside 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-64 bg-[#0A0F2B]/30 border-r border-slate-800 p-4 flex-col hidden md:flex"
            >
                <div className="flex-grow">
                    <div className="px-4 py-2 mb-4">
                        <h2 className="font-bold text-lg">{user?.user_metadata?.username || 'User Dashboard'}</h2>
                        <p className="text-sm text-slate-400">{user?.email}</p>
                    </div>
                    <nav className="space-y-1">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveView(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-colors ${activeView === item.id ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-slate-800/50'}`}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="border-t border-slate-800 pt-4">
                    <nav className="space-y-1">
                         {helpItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveView(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-colors ${activeView === item.id ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-slate-800/50'}`}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                 <div className="w-full max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeView}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
