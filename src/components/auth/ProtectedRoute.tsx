import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const ProtectedRoute = () => {
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};