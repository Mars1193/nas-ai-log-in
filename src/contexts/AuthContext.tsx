// File: src/contexts/AuthContext.tsx

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { supabase } from '@/lib/supabase'; // Make sure this path is correct for your project
import type { Session, User } from '@supabase/supabase-js';

// 1. Define the shape of the context data
interface AuthContextType {
    session: Session | null;
    user: User | null;
    loading: boolean;
    signOut: () => Promise<void>;
    login: (email: string, password: string) => Promise<any>;
    signup: (email: string, password: string, options?: { data?: object }) => Promise<any>;
}

// 2. Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Create the AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for an active session on initial load
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        };

        getSession();

        // Listen for changes in authentication state (login/logout)
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                setSession(session);
                setUser(session?.user ?? null);
            }
        );
        
        // Cleanup the listener when the component unmounts
        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    // Function to sign out the user
    const signOut = async () => {
        await supabase.auth.signOut();
    };

    // Function to log in the user
    const login = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data;
    };

    // Function to sign up the user
    const signup = async (email: string, password: string, options?: { data?: object }) => {
        const { data, error } = await supabase.auth.signUp({ email, password, options });
        if (error) throw error;
        return data;
    };

    const value = {
        session,
        user,
        loading,
        signOut,
        login,
        signup,
    };

    // Render children only after the initial loading is complete
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// 4. Create the custom hook to easily use the context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};