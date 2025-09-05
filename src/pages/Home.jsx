import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Calendar, MapPin, Award } from 'lucide-react'
import { useCounterAnimation } from '../hooks/use-counter-animation'
import { useState, useEffect, useRef } from 'react'

const Home = () => {
  const [stats, setStats] = useState({
    totalRegistrations: 247,
    uniqueColleges: 24,
    citiesRepresented: 17
  })
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  // Counter animations with different delays for staggered effect - only trigger when visible
  const { count: totalCount } = useCounterAnimation(
    isVisible ? stats.totalRegistrations : 0, 
    2500, 
    0
  )
  const { count: collegesCount } = useCounterAnimation(
    isVisible ? stats.uniqueColleges : 0, 
    2000, 
    500
  )
  const { count: citiesCount } = useCounterAnimation(
    isVisible ? stats.citiesRepresented : 0, 
    2000, 
    1000
  )

  // Intersection Observer to detect when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the section is fully visible
      }
    )

    const currentRef = statsRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Update stats when registrations change - load from database
  useEffect(() => {
    const updateStats = async () => {
      try {
        // Keep static values as requested - no database needed
        setStats({
          totalRegistrations: 247,
          uniqueColleges: 24,
          citiesRepresented: 17
        })
      } catch (error) {
        console.error('Error loading stats:', error)
      }
    }

    // Initial load with static values
    updateStats()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Faded Gradient Transition Section - theme adaptive */}
      <div className="h-12 w-full bg-gradient-to-b from-transparent to-[#f4f4f5] dark:to-blue-900" />

      {/* Registration Stats Section */}
      <section 
        ref={statsRef}
        className="py-16 bg-gradient-to-b from-[#f4f4f5] to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Registration Statistics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the growing community of participants
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className=""
          >
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-yellow-500">
                  Registration Statistics
                </CardTitle>
                <CardDescription>
                  Join the growing community of participants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-bold text-yellow-500 mb-2">
                      {totalCount}+
                    </div>
                    <p className="text-sm text-muted-foreground">Total Registrations</p>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-bold text-yellow-500 mb-2">
                      {collegesCount}+
                    </div>
                    <p className="text-sm text-muted-foreground">Unique Colleges</p>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-bold text-yellow-500 mb-2">
                      {citiesCount}+
                    </div>
                    <p className="text-sm text-muted-foreground">Cities Represented</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

