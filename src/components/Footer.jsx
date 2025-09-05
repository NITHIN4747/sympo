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
    { name: 'Contact', path: '/contact' },
  ]

  const eventLinks = [
    { name: 'Paper Presentation', path: '/paper-registration' },
    { name: 'Workshop Registration', path: '/workshop-registration' },
  ]

  const contactInfo = [
    { icon: <Phone className="h-4 w-4" />, text: 'A. SURENDAR: 8220299873' },
    { icon: <Phone className="h-4 w-4" />, text: 'M. NIYAS AHMMED: 7010571793' },
    { icon: <Mail className="h-4 w-4" />, text: 'eeeagrid@ksrce.ac.in' },
  ]

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
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
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-yellow-500 transition-colors flex items-center space-x-1 py-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
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
                href="https://instagram.com/ksrce_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-600 transition-colors p-1"
                aria-label="Follow KSRCE on Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </motion.div>
          {/* Map Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1 flex justify-center items-start"
          >
            <div className="w-full max-w-xs p-2 bg-white dark:bg-card rounded-lg shadow-md border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.2347232125585!2d77.83112735118593!3d11.35855179248188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba964017038dfe3%3A0xd5a68d71e9c1aec7!2sK%20S%20R%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1753783403608!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: '0.5rem', width: '100%', minHeight: '120px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="K S R College of Engineering Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
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
              <p className="text-xs text-muted-foreground mt-1">
                Made by CodeWave
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <span className="text-xs sm:text-sm text-muted-foreground">Tiruchengode, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

