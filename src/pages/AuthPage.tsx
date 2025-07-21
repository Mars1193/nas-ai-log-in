import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  Mail,
  Lock,
  User,
  Building,
  Phone,
  Eye,
  EyeOff,
  Zap,
  AlertCircle
} from 'lucide-react'

// Temporary components
const Button = ({ children, className = '', ...props }: any) => (
  <button className={`px-6 py-3 rounded-lg font-medium transition-all ${className}`} {...props}>
    {children}
  </button>
)

const Card = ({ children, className = '', ...props }: any) => (
  <div className={`p-6 rounded-lg border ${className}`} {...props}>
    {children}
  </div>
)

const Input = ({ className = '', ...props }: any) => (
  <input className={`w-full px-4 py-3 rounded-lg border bg-cosmic-blue border-steel-gray text-silver-mist placeholder-silver-mist/50 focus:border-neon-cyan focus:outline-none ${className}`} {...props} />
)

const Label = ({ children, className = '', ...props }: any) => (
  <label className={`text-sm font-medium text-silver-mist ${className}`} {...props}>
    {children}
  </label>
)

export function AuthPage() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const { signInWithEmail, signUpWithEmail, signInWithGoogle } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const errorParam = searchParams.get('error')
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    company: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (isSignUp) {
        await signUpWithEmail(formData.email, formData.password, formData.fullName)
        // Show success message for signup
        setError(null)
        alert(language === 'ar' 
          ? 'تم إنشاء الحساب بنجاح! يرجى فحص بريدك الإلكتروني لتأكيد الحساب.'
          : 'Account created successfully! Please check your email to confirm your account.'
        )
      } else {
        await signInWithEmail(formData.email, formData.password)
        navigate('/dashboard')
      }
    } catch (err: any) {
      setError(err.message || (language === 'ar' ? 'حدث خطأ أثناء المصادقة' : 'An error occurred during authentication'))
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)
    
    try {
      await signInWithGoogle()
      // Google auth will redirect to callback
    } catch (err: any) {
      setError(err.message || (language === 'ar' ? 'خطأ في تسجيل الدخول باستخدام Google' : 'Error signing in with Google'))
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="ai-card">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <Zap className="h-12 w-12 text-neon-cyan animate-pulse" />
                  <div className="absolute inset-0 h-12 w-12 text-electric-violet animate-pulse opacity-50" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-silver-mist mb-2">
                {isSignUp ? t('auth.signUp') : t('auth.signIn')}
              </h1>
              <p className="text-silver-mist/70 text-sm">
                {isSignUp 
                  ? (language === 'ar' ? 'إنشاء حساب جديد للوصول إلى معرض الذكاء الاصطناعي' : 'Create a new account to access the AI showroom')
                  : (language === 'ar' ? 'سجل الدخول إلى حسابك' : 'Sign in to your account')
                }
              </p>
            </div>

            {/* Error Messages */}
            {(error || errorParam) && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">
                  {error || decodeURIComponent(errorParam || '')}
                </p>
              </div>
            )}

            {/* Google Sign In */}
            <div className="mb-6">
              <Button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-steel-gray hover:border-neon-cyan transition-colors bg-cosmic-blue text-silver-mist"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                {t('auth.signInWith')} Google
                {loading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-neon-cyan ml-2" />}
              </Button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-steel-gray" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-cosmic-blue text-silver-mist/70">
                  {language === 'ar' ? 'أو' : 'or'}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <Label htmlFor="fullName">{t('auth.fullName')}</Label>
                  <div className="mt-1 relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required={isSignUp}
                      placeholder={t('auth.fullName')}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="email">{t('auth.email')}</Label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t('auth.email')}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">{t('auth.password')}</Label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder={t('auth.password')}
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

              {isSignUp && (
                <>
                  <div>
                    <Label htmlFor="company">{t('auth.company')}</Label>
                    <div className="mt-1 relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder={t('auth.company')}
                        value={formData.company}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">{t('auth.phone')}</Label>
                    <div className="mt-1 relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-silver-mist/50" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={t('auth.phone')}
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-neon-cyan to-electric-violet hover:from-electric-violet hover:to-neon-cyan text-deep-space font-semibold py-3 flex items-center justify-center gap-2"
              >
                {loading && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-deep-space" />}
                {isSignUp ? t('auth.createAccount') : t('auth.signIn')}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError(null)
                }}
                className="text-sm text-neon-cyan hover:text-electric-violet transition-colors"
              >
                {isSignUp 
                  ? `${t('auth.alreadyHaveAccount')} ${t('auth.signIn')}`
                  : `${t('auth.noAccount')} ${t('auth.signUp')}`
                }
              </button>
            </div>

            {!isSignUp && (
              <div className="mt-4 text-center">
                <button className="text-sm text-silver-mist/70 hover:text-neon-cyan transition-colors">
                  {t('auth.forgotPassword')}
                </button>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}