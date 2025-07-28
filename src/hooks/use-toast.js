import { useState, useCallback } from 'react'

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ title, description, variant = 'default' }) => {
    const id = Date.now()
    const newToast = { id, title, description, variant }
    
    setToasts(prev => [...prev, newToast])
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 5000)
    
    // Simple alert for now - can be enhanced with proper toast UI
    if (variant === 'destructive') {
      alert(`Error: ${description}`)
    } else {
      alert(`${title}: ${description}`)
    }
  }, [])

  return { toast, toasts }
}

