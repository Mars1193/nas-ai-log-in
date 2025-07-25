import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { User, Settings, History, LogOut } from 'lucide-react';

export const ProfilePage = () => {
    const { user, signOut } = useAuth(); // Changed logout to signOut
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(); // Changed logout to signOut
        navigate('/login');
    };

    if (!user) {
        return <div className="flex items-center justify-center h-full"><p>Loading...</p></div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <User className="w-12 h-12 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">{user.email?.split('@')[0]}</h1>
                        <p className="text-slate-400">{user.email}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Content Area */}
                    <div className="md:col-span-2 p-6 bg-[#0A0F2B] rounded-xl border border-slate-800">
                        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
                        <p className="text-slate-400">Welcome to your personal dashboard. Here you can manage your AI Employees and view their performance.</p>
                        {/* More content can be added here, like a list of AI employees */}
                    </div>

                    {/* Sidebar */}
                    <div className="p-6 bg-[#0A0F2B] rounded-xl border border-slate-800 space-y-4">
                        <h3 className="font-bold">Account Settings</h3>
                        <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                            <Settings className="w-5 h-5 text-slate-400" />
                            <span>Manage Profile</span>
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
                            <History className="w-5 h-5 text-slate-400" />
                            <span>Purchase History</span>
                        </button>
                        <div className="pt-4 border-t border-slate-800">
                             <button
                                 onClick={handleLogout}
                                className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/40 transition-colors"
                            >
                                <LogOut className="w-5 h-5" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
