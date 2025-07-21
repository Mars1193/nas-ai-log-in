import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'

interface ChatMessage {
  id: string
  role: 'user' | 'ai'
  content: string
  timestamp: string
}

export function useAIChat(aiEmployeeId: number) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(`session_${Date.now()}_${Math.random()}`)
  const { user } = useAuth()

  const sendMessage = async (message: string) => {
    if (!message.trim()) return

    setLoading(true)

    // Add user message immediately
    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])

    try {
      // Call the AI chat edge function
      const { data, error } = await supabase.functions.invoke('ai-employee-chat', {
        body: {
          message,
          aiEmployeeId,
          sessionId,
          conversationHistory: messages
        }
      })

      if (error) {
        throw error
      }

      // Add AI response
      const aiMessage: ChatMessage = {
        id: `ai_${Date.now()}`,
        role: 'ai',
        content: data.data.reply,
        timestamp: data.data.timestamp
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error: any) {
      console.error('Error sending message:', error)
      
      // Add error message
      const errorMessage: ChatMessage = {
        id: `error_${Date.now()}`,
        role: 'ai',
        content: 'I apologize, but I\'m having trouble responding right now. Please try again.',
        timestamp: new Date().toISOString()
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  const clearMessages = () => {
    setMessages([])
  }

  return {
    messages,
    loading,
    sendMessage,
    clearMessages,
    sessionId
  }
}