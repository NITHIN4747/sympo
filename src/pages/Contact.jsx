import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Instagram, Users, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Contact = () => {
  const teamMembers = [
    {
      role: "Chief Patron",
      name: "Dr. M. VENKATESAN",
      designation: "DEAN"
    },
    {
      role: "Patron",
      name: "Dr. V. MEENAKSHI DEVI",
      designation: "PRINCIPAL"
    },
    {
      role: "Over All Co-ordinator",
      name: "Dr. P. MURUGESAN",
      designation: "Director - CR&SD"
    },
    {
      role: "Convenor",
      name: "Dr. S. RAMESH",
      designation: "HoD - EEE"
    },
    {
      role: "Association Co-ordinator",
      name: "Dr. R. SANKAR GANESH",
      designation: "ASP/EEE",
      phone: "9842752364"
    },
    {
      role: "Association Co-ordinator",
      name: "Dr. V. RAVI",
      designation: "PROF/EEE",
      phone: "9942730303"
    }
  ]

  const studentCoordinators = [
    {
      name: "A. SURENDAR",
      year: "III/EEE",
      phone: "8220299873"
    },
    {
      name: "M. NIYAS AHMMED",
      year: "III/EEE",
      phone: "7010571793"
    }
  ]

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-yellow-500 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our organizing team for any queries about GRID 2K25.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-yellow-500" />
                  <span>College Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">K.S.R. College of Engineering</h3>
                  <p className="text-muted-foreground">Tiruchengode, India</p>
                  <p className="text-sm text-muted-foreground mt-2">An Autonomous Institution</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-yellow-500" />
                  <a 
                    href="https://www.ksrce.ac.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    www.ksrce.ac.in
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-yellow-500" />
                  <a 
                    href="https://instagram.com/ksrce_official" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    @ksrce_official
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-500" />
                  <a 
                    href="mailto:eeeagrid@ksrce.ac.in"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    eeeagrid@ksrce.ac.in
                  </a>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">NAAC A++</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm font-medium">NBA Accredited</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-yellow-500" />
                  <span>Student Coordinators</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {studentCoordinators.map((coordinator, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-lg">
                    <h4 className="font-semibold text-foreground">{coordinator.name}</h4>
                    <p className="text-sm text-muted-foreground">{coordinator.year}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Phone className="h-4 w-4 text-yellow-500" />
                      <a 
                        href={`tel:${coordinator.phone}`}
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        {coordinator.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            {/* Map Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-yellow-500" />
                  <span>Find Us on Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.2347232125585!2d77.83112735118593!3d11.35855179248188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba964017038dfe3%3A0xd5a68d71e9c1aec7!2sK%20S%20R%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1753783403608!5m2!1sen!2sin"
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: '0.5rem', width: '100%', minHeight: '120px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="K S R College of Engineering Location Map"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            {/* Have Questions Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-2xl font-bold">Have Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Feel free to reach out to our student coordinators for any queries about registration, 
                  events, or general information about GRID 2K25.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:8220299873"
                    className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call A. SURENDAR
                  </a>
                  <a 
                    href="tel:7010571793"
                    className="inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold rounded-lg transition-colors"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call M. NIYAS AHMMED
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-yellow-500" />
                  <span>Organizing Committee</span>
                </CardTitle>
                <CardDescription>
                  Meet the distinguished faculty members leading GRID 2K25
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="p-4 bg-background/50 rounded-lg border border-border/30"
                  >
                    <div className="text-center">
                      <h4 className="font-semibold text-lg text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.designation}</p>
                      <div className="mt-2">
                        <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-600 text-xs font-medium rounded-full">
                          {member.role}
                        </span>
                      </div>
                      {member.phone && (
                        <div className="mt-2">
                          <a 
                            href={`tel:${member.phone}`}
                            className="text-blue-500 hover:text-blue-600 transition-colors text-sm"
                          >
                            {member.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Department Information */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-yellow-500">Department of Electrical and Electronics Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Department of EEE at KSRCE is committed to excellence in education, research, and innovation. 
                  Our symposium brings together students, faculty, and industry experts to explore the latest 
                  trends and developments in electrical and electronics engineering.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Industry-Academia Collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Research & Innovation Focus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Student Development Programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

