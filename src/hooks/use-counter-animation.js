import { useState, useEffect } from 'react'

export const useCounterAnimation = (targetValue, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (targetValue === 0) return

    setIsAnimating(true)
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime - delay

      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(targetValue)
        setIsAnimating(false)
      }
    }

    requestAnimationFrame(animate)
  }, [targetValue, duration, delay])

  return { count, isAnimating }
} 