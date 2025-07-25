import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

interface StaffMember {
  id: string
  position: string
  salary: number
  benefits: number
  overhead: number
}

interface SelectedAIEmployee {
  id: number
  quantity: number
}

interface ROIResult {
  breakdown: {
    currentStaff: {
      monthly: number
      annual: number
      positions: number
    }
    aiEmployees: {
      monthly: number
      annual: number
      count: number
    }
    savings: {
      monthly: number
      annual: number
      timeframe: number
      percentage: number
    }
    metrics: {
      roiPercentage: number
      paybackPeriod: number
      breakEvenPoint: number
      costReduction: number
    }
    projections: {
      year1: number
      year2: number
      year3: number
      year5: number
    }
  }
  summary: {
    currentMonthlyCost: number
    aiMonthlyCost: number
    monthlySavings: number
    annualSavings: number
    roiPercentage: number
    paybackPeriod: number
    timeframeSavings: number
  }
  recommendations: {
    strongROI: boolean
    quickPayback: boolean
    significantSavings: boolean
    message: string
  }
}

export function useROICalculator() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ROIResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth() // Keep user if it's intended to be used later, otherwise remove

  const calculateROI = async (
    currentStaffData: StaffMember[],
    selectedAiEmployees: SelectedAIEmployee[],
    timeframe: 'monthly' | 'quarterly' | 'yearly' = 'yearly'
  ) => {
    if (!currentStaffData.length || !selectedAiEmployees.length) {
      setError('Please provide staff data and select AI employees')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.functions.invoke('roi-calculator', {
        body: {
          currentStaffData,
          selectedAiEmployees,
          timeframe
        }
      })

      if (error) {
        throw error
      }

      setResult(data.data)
    } catch (err: any) {
      console.error('Error calculating ROI:', err)
      setError(err.message || 'Failed to calculate ROI')
    } finally {
      setLoading(false)
    }
  }

  const clearResult = () => {
    setResult(null)
    setError(null)
  }

  return {
    calculateROI,
    result,
    loading,
    error,
    clearResult
  }
}
