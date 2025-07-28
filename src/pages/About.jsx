import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Lightbulb, Zap, Globe, Building, GraduationCap, Calendar, MapPin, Mail, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ksrceLogo from '../assets/ksrcelogo.jpg'

const About = () => {
  const paperPresentationForm = "https://forms.gle/PBczrgC8ZxyRJC2R6"
  const workshopForm = "https://forms.gle/K8A1bDuZq5EtQrcr6"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About GRID 2K25
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            National Level Technical Symposium - Spring Fest 2025
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* KSRCE College */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <Card className="shadow-lg h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={ksrceLogo} 
                    alt="KSRCE Logo" 
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-xl">K.S.R. College of Engineering</CardTitle>
                    <CardDescription>An Autonomous Institution</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  K.S.R. College of Engineering, established in 1994, is a premier engineering institution 
                  located in Tiruchengode, Tamil Nadu. The college is committed to providing quality 
                  education and fostering innovation in engineering and technology.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full">
                    <Award className="h-4 w-4 text-green-500" />
                    <span className="text-xs font-medium text-green-600">NAAC A++</span>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-500/20 px-3 py-1 rounded-full">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span className="text-xs font-medium text-blue-600">NBA Accredited</span>
                  </div>
                  <div className="flex items-center gap-1 bg-purple-500/20 px-3 py-1 rounded-full">
                    <Award className="h-4 w-4 text-purple-500" />
                    <span className="text-xs font-medium text-purple-600">AICTE Approved</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Building className="h-4 w-4" />
                    <span>Tiruchengode, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Globe className="h-4 w-4" />
                    <span>www.ksrce.ac.in</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* EEE Department */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="shadow-lg h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Department of EEE</CardTitle>
                    <CardDescription>Electrical and Electronics Engineering</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The Department of Electrical and Electronics Engineering at KSRCE is dedicated to 
                  excellence in education and research. Our department focuses on power systems, 
                  control systems, and emerging technologies in electrical engineering.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Key Areas:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Power Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Control Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Smart Grid</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>IoT & Automation</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>Experienced Faculty Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <BookOpen className="h-4 w-4" />
                    <span>Modern Laboratories</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Lightbulb className="h-4 w-4" />
                    <span>Industry Collaborations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* GRID Symposium */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="shadow-lg h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">GRID 2K25</CardTitle>
                    <CardDescription>National Level Technical Symposium</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  GRID 2K25 is a prestigious national-level technical symposium organized by the 
                  EEE Association of KSRCE. The event focuses on "Smart and eco-friendly Innovation 
                  in Electrical Engineering" with workshops, paper presentations, and technical events.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Event Highlights:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Paper & Project Presentations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>National Level Workshops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Technical & Non-Technical Events</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Industry Expert Sessions</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>August 22-23, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>KSRCE Campus, Tiruchengode</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Mail className="h-4 w-4" />
                    <span>eeeagrid@ksrce.ac.in</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Event Theme Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="shadow-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-200 dark:border-purple-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                Event Theme: "Smart and eco-friendly Innovation in Electrical Engineering"
              </CardTitle>
              <CardDescription className="text-lg">
                Exploring the future of electrical engineering with sustainable and intelligent solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Smart Technologies:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• IoT and Smart Grid Systems</li>
                    <li>• Renewable Energy Integration</li>
                    <li>• Electric Vehicle Technologies</li>
                    <li>• Power Electronics & Converters</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Eco-friendly Focus:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Sustainable Energy Solutions</li>
                    <li>• Green Building Technologies</li>
                    <li>• Energy Efficiency Systems</li>
                    <li>• Environmental Impact Assessment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="shadow-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-200 dark:border-yellow-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                Register Now for GRID 2K25
              </CardTitle>
              <CardDescription className="text-lg">
                Join us for this exciting technical symposium
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Paper Presentation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Present your research on smart and eco-friendly innovations in electrical engineering
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <a href={paperPresentationForm} target="_blank" rel="noopener noreferrer">
                      Register for Paper Presentation
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="text-center space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Workshops</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Join our national level workshops with hands-on experience
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <a href={workshopForm} target="_blank" rel="noopener noreferrer">
                      Register for Workshops
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default About 