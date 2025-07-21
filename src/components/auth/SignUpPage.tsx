
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Lock, User, Building, Phone, Eye, EyeOff, Zap, AlertCircle } from 'lucide-react';

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

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    company: '',
    phone: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signup } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signup(formData.email, formData.password);
      alert('Account created successfully! Check your email for verification.');
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
            <h1 className="text-2xl font-bold text-silver-mist mb-2">Sign Up</h1>
            <p className="text-silver-mist/70 text-sm">Create a new account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="pl-10"
                />
              </div>
            </div>

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
                  value={formData.email}
                  onChange={handleInputChange}
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
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-silver-mist/50 hover:text-neon-cyan transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="company">Company</Label>
              <div className="mt-1 relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <div className="mt-1 relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
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
              Sign Up
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
