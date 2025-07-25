// File: src/pages/AuthCallback.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        // Redirect user to their profile page after successful sign-in
        navigate('/profile');
      }
    });
    // Cleanup subscription on component unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);
  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
      <p>Please wait while we are authenticating...</p>
    </div>
  );
};
export default AuthCallback;