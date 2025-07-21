import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  Zap,
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Globe
} from 'lucide-react'

export function Footer() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  const footerLinks = {
    product: [
      { label: t('nav.showroom'), href: '/showroom' },
      { label: t('nav.calculator'), href: '/calculator' },
      { label: t('nav.services'), href: '/services' },
    ],
    company: [
      { label: t('common.aboutUs'), href: '/about' },
      { label: t('common.careers'), href: '/careers' },
      { label: t('common.contact'), href: '/contact' },
    ],
    support: [
      { label: t('common.help'), href: '/help' },
      { label: t('common.documentation'), href: '/docs' },
      { label: t('common.privacy'), href: '/privacy' },
    ]
  }

  return (
    <footer className="relative mt-20 border-t border-steel-gray/50 bg-deep-space/90 backdrop-blur-md">
      {/* Hologram overlay */}
      <div className="absolute inset-0 hologram opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="h-8 w-8 text-neon-cyan animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 text-electric-violet animate-pulse opacity-50" />
              </div>
              <div className="font-bold text-xl">
                <span className="text-neon-cyan">AI</span>
                <span className="text-electric-violet">Dealership</span>
              </div>
            </div>
            
            <p className="text-silver-mist/80 text-sm leading-relaxed">
              {t('mainHeadline')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-silver-mist/80">
                <Mail className="h-4 w-4 text-neon-cyan" />
                <span>contact@aidealership.com</span>
              </div>
              <div className="flex items-center gap-3 text-silver-mist/80">
                <Phone className="h-4 w-4 text-neon-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-silver-mist/80">
                <MapPin className="h-4 w-4 text-neon-cyan" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neon-cyan glow-text">
              {t('product')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-silver-mist/80 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-electric-violet glow-text">
              {t('company')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-silver-mist/80 hover:text-electric-violet transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neon-cyan glow-text">
              {t('support')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-silver-mist/80 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-medium text-electric-violet mb-3 text-sm">
                {t('followUs')}
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-mist/60 hover:text-neon-cyan transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-mist/60 hover:text-neon-cyan transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver-mist/60 hover:text-neon-cyan transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-steel-gray/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-silver-mist/60 text-sm">
              © 2024 AI Dealership. {t('rightsReserved')}
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-silver-mist/60 hover:text-neon-cyan transition-colors"
              >
                {t('privacyPolicy')}
              </Link>
              <Link
                to="/terms"
                className="text-silver-mist/60 hover:text-neon-cyan transition-colors"
              >
                {t('termsOfService')}
              </Link>
              <div className="flex items-center gap-2 text-silver-mist/60">
                <Globe className="h-4 w-4" />
                <span>{t('poweredBy')}</span>
                <span className="text-neon-cyan font-medium">Google Gemini AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}