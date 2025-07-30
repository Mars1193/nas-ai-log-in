// File: src/pages/AuthCallback.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // The onAuthStateChange listener in AuthContext will handle the session.
    // We just need to redirect to the dashboard.
    navigate('/dashboard');
  }, [navigate]);
  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
      <p>Please wait while we are authenticating...</p>
    </div>
  );
};
export default AuthCallback;