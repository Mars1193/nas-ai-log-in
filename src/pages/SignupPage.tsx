import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

const SignupPage = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user, navigate]);

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                        username: username,
                    }
                }
            });

            if (error) throw error;

            if (data.user && data.user.identities && data.user.identities.length === 0) {
                 setMessage('A user with this email already exists but is unconfirmed. Please check your email for the confirmation link.');
            } else {
                 setMessage('Please check your email to verify your account.');
            }

        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050816] text-white flex flex-col md:flex-row">
             {/* Form Section */}
             <div className="w-full md:w-1/2 flex items-center justify-center p-4">
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
                        <Link to="/login" className="font-medium text-[#00F0FF] hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
             {/* Video Section */}
             <div className="w-full md:w-1/2 h-64 md:h-screen relative overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/videos/75463f9b-449a-4da1-a81f-492a7f8553af.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
        </div>
    );
};

export default SignupPage;