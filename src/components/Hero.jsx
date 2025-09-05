import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import CountdownTimer from './CountdownTimer'
import ksrceLogo from '../assets/ksrcelogo.jpg'
import gridLogo from '../assets/grid-logo.jpg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-400/10 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center w-full">
        {/* Branding Logos at the very top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center gap-14 sm:gap-24 pt-8 sm:pt-12 mb-10 sm:mb-16"
        >
          <img src={ksrceLogo} alt="KSRCE Logo" className="h-20 w-20 sm:h-28 sm:w-28 rounded-full object-cover shadow-lg" />
          <img src={gridLogo} alt="GRID Symposium Logo" className="h-20 w-20 sm:h-28 sm:w-28 object-contain shadow-lg" />
        </motion.div>

        {/* Title Block - Centered and aligned with logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-12"
        >
          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-foreground via-yellow-600 to-yellow-500 bg-clip-text text-transparent leading-tight text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block">GRID 2K25</span>
          </motion.h1>

          {/* Proudly Presents */}
          <motion.p
            className="text-xs sm:text-sm text-muted-foreground font-semibold tracking-widest uppercase mt-2 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            proudly presents
          </motion.p>

          {/* SPRING FEST - 2025 */}
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent mt-2 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SPRING FEST - 2025
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-light px-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            National Level Technical Symposium
          </motion.p>
        </motion.div>

        {/* Event Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-6 hover:bg-card/70 transition-all duration-300 touch-manipulation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mx-auto mb-2 sm:mb-3" />
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Day 1</h3>
            <p className="text-sm sm:text-base text-muted-foreground">10th October 2025</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Paper Presentations & Technical Events</p>
          </motion.div>
          
          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-6 hover:bg-card/70 transition-all duration-300 touch-manipulation"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mx-auto mb-2 sm:mb-3" />
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Day 2</h3>
            <p className="text-sm sm:text-base text-muted-foreground">11th October 2025</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Workshops & Industry Training</p>
          </motion.div>
          
          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 sm:p-6 hover:bg-card/70 transition-all duration-300 touch-manipulation sm:col-span-2 lg:col-span-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mx-auto mb-2 sm:mb-3" />
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Venue</h3>
            <p className="text-sm sm:text-base text-muted-foreground">KSRCE</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Tiruchengode, India</p>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation"
          >
            <Link to="/events">Register Now</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation"
          >
            <Link to="/events">View Events</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

