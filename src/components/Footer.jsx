import { motion } from 'framer-motion'
import { Globe, Instagram, Mail, Phone, MapPin, Award, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import ksrceLogo from '../assets/ksrcelogo.jpg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Register', path: '/register' },
    { name: 'Contact', path: '/contact' },
  ]

  const eventLinks = [
    { name: 'Paper Presentation', url: 'https://forms.gle/G9rPeUuGVztqBXz96' },
    { name: 'Workshop Registration', url: 'https://forms.gle/72smJvTNLHSqvC6K7' },
  ]

  const contactInfo = [
    { icon: <Phone className="h-4 w-4" />, text: 'A. SURENDAR: 8220299873' },
    { icon: <Phone className="h-4 w-4" />, text: 'M. NIYAS AHMMED: 7010571793' },
    { icon: <Mail className="h-4 w-4" />, text: 'eeeagrid@ksrce.ac.in' },
  ]

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* College Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src={ksrceLogo} 
                alt="KSRCE Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">KSRCE</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">An Autonomous Institution</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              K.S.R. College of Engineering, Tiruchengode - Leading the way in engineering education and innovation.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-green-500/20 px-2 sm:px-3 py-1 rounded-full">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span className="text-xs font-medium text-green-600">NAAC A++</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 bg-blue-500/20 px-2 sm:px-3 py-1 rounded-full">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                <span className="text-xs font-medium text-blue-600">NBA</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-yellow-500 transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Event Registration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Event Registration</h3>
            <ul className="space-y-1 sm:space-y-2">
              {eventLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-yellow-500 transition-colors flex items-center space-x-1 py-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-2 sm:space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-yellow-500">{info.icon}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">{info.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-3 sm:space-x-4 pt-2">
              <a
                href="https://www.ksrce.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-600 transition-colors p-1"
                aria-label="Visit KSRCE website"
              >
                <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://instagram.com/ksrceofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-600 transition-colors p-1"
                aria-label="Follow KSRCE on Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-6 sm:mt-8 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {currentYear} GRID 2K25 - K.S.R. College of Engineering
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Department of Electrical and Electronics Engineering
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <span className="text-xs sm:text-sm text-muted-foreground">Tiruchengode, India</span>
            </div>
          </div>
        </motion.div>

        {/* Symposium Branding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/30"
        >
          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-foreground to-yellow-500 bg-clip-text text-transparent">
            GRID 2K25
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">Smart and eco-friendly Innovation in Electrical Engineering</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-3 sm:mt-4">
            <div className="text-xs text-muted-foreground">22-23 August 2025</div>
            <div className="hidden sm:block w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="text-xs text-muted-foreground">Tiruchengode, India</div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

