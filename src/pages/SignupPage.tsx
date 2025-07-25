import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext'; // Import useAuth

const SignupPage = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const { signup } = useAuth(); // Use signup from AuthContext

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => { // Added type for e
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            await signup(email, password, { data: { full_name: fullName, username: username } }); // Use signup function from AuthContext
            setMessage('Please check your email to verify your account.');
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-[#0A0F2B] rounded-xl shadow-lg border border-slate-800">
                <h1 className="text-3xl font-bold text-center gradient-text">Create Your Future Account</h1>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="text-sm font-bold text-gray-400 block mb-1">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F0FF]"
                            required
                        />
                    </div>
                     <div>
                        <label className="text-sm font-bold text-gray-400 block mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F0FF]"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-400 block mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F0FF]"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-400 block mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F0FF]"
                            required
                        />
                    </div>
                    {error && <p className="text-center text-sm text-red-500">{error}</p>}
                    {message && <p className="text-center text-sm text-green-500">{message}</p>}
                    <button
                         type="submit"
                         disabled={loading}
                        className="w-full px-8 py-4 font-bold rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white disabled:opacity-50 hover:scale-105 transition-transform duration-300"
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                 <p className="text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <a href="/login" className="font-medium text-[#00F0FF] hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;