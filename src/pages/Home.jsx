import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Calendar, MapPin, Award } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Faded Gradient Transition Section - theme adaptive */}
      <div className="h-12 w-full bg-gradient-to-b from-transparent to-[#f4f4f5] dark:to-blue-900" />

      {/* Registration Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[#f4f4f5] to-blue-50 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700">
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
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">247+</div>
                    <p className="text-sm text-muted-foreground">Total Registrations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">20+</div>
                    <p className="text-sm text-muted-foreground">Unique Colleges</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
                    <p className="text-sm text-muted-foreground">Cities Represented</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

