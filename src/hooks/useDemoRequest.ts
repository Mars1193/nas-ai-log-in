import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

interface DemoRequestData {
  aiEmployeeId: number
  company?: string
  useCase?: string
  scheduledDate?: string
  contactInfo?: string
}

export function useDemoRequest() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth() // Keep user if it's intended to be used later, otherwise remove

  const requestDemo = async (requestData: DemoRequestData) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const { data, error } = await supabase.functions.invoke('demo-request', {
        body: requestData
      })

      if (error) {
        throw error
      }

      setSuccess(true)
      return data.data
    } catch (err: any) {
      console.error('Error requesting demo:', err)
      setError(err.message || 'Failed to request demo')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const clearState = () => {
    setSuccess(false)
    setError(null)
  }

  return {
    requestDemo,
    loading,
    success,
    error,
    clearState
  }
}