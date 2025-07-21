import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageContextType {
  language: 'en' | 'ar'
  setLanguage: (lang: 'en' | 'ar') => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()
  const [language, setLanguageState] = useState<'en' | 'ar'>(
    (localStorage.getItem('language') as 'en' | 'ar') || 'en'
  )

  const isRTL = language === 'ar'

  const setLanguage = useCallback((lang: 'en' | 'ar') => {
    setLanguageState(lang)
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
    
    // Update document direction and font
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    
    if (lang === 'ar') {
      document.documentElement.classList.add('font-arabic')
    } else {
      document.documentElement.classList.remove('font-arabic')
    }
  }, [i18n])

  useEffect(() => {
    setLanguage(language)
  }, [language, setLanguage])

  const value: LanguageContextType = {
    language,
    setLanguage,
    isRTL
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}