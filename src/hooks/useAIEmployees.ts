import { useState, useEffect } from 'react'
import { supabase, AIEmployee } from '@/lib/supabase'

export function useAIEmployees() {
  const [employees, setEmployees] = useState<AIEmployee[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEmployees() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('ai_employees')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          throw error
        }

        setEmployees(data || [])
      } catch (err: any) {
        console.error('Error fetching AI employees:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchEmployees()
  }, [])

  return { employees, loading, error }
}

export function useAIEmployee(id: number) {
  const [employee, setEmployee] = useState<AIEmployee | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEmployee() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('ai_employees')
          .select('*')
          .eq('id', id)
          .maybeSingle()

        if (error) {
          throw error
        }

        setEmployee(data)
      } catch (err: any) {
        console.error('Error fetching AI employee:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchEmployee()
    }
  }, [id])

  return { employee, loading, error }
}