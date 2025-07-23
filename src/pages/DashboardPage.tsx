import { useAuth } from '@/contexts/AuthContext';

const DashboardPage = () => {
    const { user } = useAuth();
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold gradient-text">Welcome to your Dashboard</h1>
            <p className="text-slate-400 mt-4">You are logged in as: {user?.email}</p>
             <p className="mt-8">Dashboard content will be provided soon.</p>
        </div>
    );
};

export default DashboardPage;