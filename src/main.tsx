
import { Toaster } from '@/components/ui/toaster';
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import './index.css'
import App from './App.tsx'

import { AuthProvider } from './contexts/AuthContext.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n';

createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <AuthProvider>
              <App />
              <Toaster />
            </AuthProvider>
          </LanguageProvider>
        </I18nextProvider>
      </React.StrictMode>,
    )
