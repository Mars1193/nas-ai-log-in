import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const { user, signOut } = useAuth(); // Corrected logout to signOut
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/showroom', label: 'Showroom' },
    { path: '/services', label: 'Services' },
    { path: '/roi-calculator', label: 'ROI Calculator' },
    { path: '/philosophy', label: 'Philosophy' },
  ];
  const handleLogout = async () => {
    await signOut(); // Corrected logout to signOut
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span>NAS AI</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                location.pathname === item.path ? 'text-cyan-400' : 'text-white/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/profile" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <User className="h-4 w-4" />
                {user.email}
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;