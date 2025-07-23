import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Lock, Zap } from 'lucide-react';

// Re-using components from AuthPage.tsx for consistency
const Button = ({ children, className = '', ...props }: any) => (
  <button className={`px-6 py-3 rounded-lg font-medium transition-all ${className}`} {...props}>
    {children}
  </button>
);

const Card = ({ children, className = '', ...props }: any) => (
  <div className={`p-6 rounded-lg border ${className}`} {...props}>
    {children}
  </div>
);

const Input = ({ className = '', ...props }: any) => (
  <input className={`w-full px-4 py-3 rounded-lg border bg-cosmic-blue border-steel-gray text-silver-mist placeholder-silver-mist/50 focus:border-neon-cyan focus:outline-none ${className}`} {...props} />
);

const Label = ({ children, className = '', ...props }: any) => (
  <label className={`text-sm font-medium text-silver-mist ${className}`} {...props}>
    {children}
  </label>
);

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
      // On successful login, you might want to redirect the user
      // e.g., navigate('/dashboard');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <Card className="ai-card">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Zap className="h-12 w-12 text-neon-cyan animate-pulse" />
                <div className="absolute inset-0 h-12 w-12 text-electric-violet animate-pulse opacity-50" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-silver-mist mb-2">Login</h1>
            <p className="text-silver-mist/70 text-sm">Sign in to your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3">
              <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-neon-cyan to-electric-violet hover:from-electric-violet hover:to-neon-cyan text-deep-space font-semibold py-3 flex items-center justify-center gap-2"
            >
              {loading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-deep-space" />}
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};