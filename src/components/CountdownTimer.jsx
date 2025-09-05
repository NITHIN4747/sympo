import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Event date: October 10, 2025 (Day 1 of the symposium)
    const targetDate = new Date('2025-10-10T09:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Update immediately
    updateCountdown()

    // Update every second
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto"
    >
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center mb-4 sm:mb-6 text-foreground">
        Event Starts In
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="text-center"
          >
            <motion.div
              key={unit.value}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black font-bold rounded-lg p-3 sm:p-4 lg:p-6 mb-2 sm:mb-3"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl block">
                {unit.value.toString().padStart(2, '0')}
              </span>
            </motion.div>
            <span className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-sm sm:text-base text-muted-foreground mt-4 sm:mt-6"
      >
        Don't miss out on this exciting opportunity!
      </motion.p>
    </motion.div>
  )
}

export default CountdownTimer

