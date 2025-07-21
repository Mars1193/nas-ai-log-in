import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'

export function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    async function handleAuthCallback() {
      try {
        // Get the hash fragment from the URL
        const hashFragment = window.location.hash

        if (hashFragment && hashFragment.length > 0) {
          // Exchange the auth code for a session
          const { data, error } = await supabase.auth.exchangeCodeForSession(hashFragment)

          if (error) {
            console.error('Error exchanging code for session:', error.message)
            // Redirect to error page or show error message
            navigate('/auth?error=' + encodeURIComponent(error.message))
            return
          }

          if (data.session) {
            // Successfully signed in, redirect to dashboard
            navigate('/dashboard')
            return
          }
        }

        // If we get here, something went wrong
        navigate('/auth?error=' + encodeURIComponent('No session found'))
      } catch (error: any) {
        console.error('Auth callback error:', error)
        navigate('/auth?error=' + encodeURIComponent(error.message || 'Authentication failed'))
      }
    }

    handleAuthCallback()
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-cyan mx-auto mb-4"></div>
        <p className="text-silver-mist">Completing authentication...</p>
      </div>
    </div>
  )
}