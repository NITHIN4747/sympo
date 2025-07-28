import { motion } from 'framer-motion'
import { Calendar, Clock, DollarSign, ExternalLink, Users, Wrench, Zap, Trophy, BookOpen, Cpu, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import gridLogo from '../assets/grid-logo.jpg'

const Events = () => {
  const paperPresentationForm = "https://forms.gle/PBczrgC8ZxyRJC2R6"
  const workshopForm = "https://forms.gle/K8A1bDuZq5EtQrcr6"

  const events = [
    {
      category: "Paper Presentation",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-blue-500",
      items: [
        {
          title: "Smart and eco-friendly Innovation in Electrical Engineering",
          description: "Present your research and innovations in smart and eco-friendly electrical engineering",
          details: [
            "Last date for Registration: 14.08.2025",
            "Last date for Paper Submission: 15.08.2025",
            "Selection Intimation: 18.08.2025",
            "Registration Fee: ₹300 per person"
          ],
          formLink: paperPresentationForm
        }
      ]
    },
    {
      category: "National Level Workshops",
      icon: <Wrench className="h-6 w-6" />,
      color: "bg-green-500",
      items: [
        {
          title: "IOT BOOTCAMP: Hands-on Experience with ARDUINO and SENSORS",
          description: "Learn IoT fundamentals with practical Arduino and sensor applications",
          details: ["Hands-on Arduino programming", "Sensor integration", "IoT project development", "Certificate provided"]
        },
        {
          title: "Design of Power Converters using MATLAB",
          description: "Master power converter design using MATLAB simulation tools",
          details: ["MATLAB simulation", "Power electronics focus", "Converter design", "Practical applications"]
        },
        {
          title: "Electric Vehicle technologies: Hands-on Experience",
          description: "Comprehensive training on electric vehicle technology and design",
          details: ["EV technology overview", "Battery management", "Motor control systems", "Industry insights"]
        }
      ],
      formLink: workshopForm
    },
    {
      category: "Hard-Skill Events",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-yellow-500",
      items: [
        {
          title: "Circuit Debugging",
          description: "Test your circuit analysis and debugging skills",
          details: ["Problem-solving challenge", "Circuit analysis", "Time-based competition", "Technical expertise"]
        },
        {
          title: "Pick and Win",
          description: "Technical quiz and rapid-fire challenge",
          details: ["Technical knowledge test", "Quick thinking required", "Exciting prizes", "Competitive spirit"]
        }
      ]
    },
    {
      category: "Soft-Skill Events",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-purple-500",
      items: [
        {
          title: "DECATHLON",
          description: "10 mini fun events to showcase your diverse talents",
          details: ["10 different events", "Team participation", "Fun and engaging activities", "All-round development"]
        }
      ]
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
            Events & Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for an exciting lineup of technical presentations, hands-on workshops, 
            and engaging competitions designed to enhance your engineering knowledge and skills.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="space-y-16">
          {events.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Header - Centered */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className={`${category.color} p-3 rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{category.category}</h2>
                </div>
              </div>

              {/* Category Items - Properly Aligned Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-w-sm"
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-semibold text-foreground text-center">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-center">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          {item.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground flex-1">{detail}</p>
                            </div>
                          ))}
                        </div>
                        
                        {item.formLink && (
                          <Button 
                            asChild 
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                          >
                            <a href={item.formLink} target="_blank" rel="noopener noreferrer">
                              Register Now
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Category-wide Registration Button - Centered */}
              {category.formLink && !category.items[0].formLink && (
                <div className="text-center mt-8">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
                  >
                    <a href={category.formLink} target="_blank" rel="noopener noreferrer">
                      Register for {category.category}
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-200 dark:border-yellow-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                Ready to Join GRID 2K25?
              </CardTitle>
              <CardDescription className="text-lg">
                Register now for paper presentation or workshops
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Paper Presentation</h4>
                  <p className="text-muted-foreground">
                    Present your research on smart and eco-friendly innovations in electrical engineering
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Registration Fee:</span>
                      <span className="font-semibold">₹300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-semibold">14.08.2025</span>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                  >
                    <a href={paperPresentationForm} target="_blank" rel="noopener noreferrer">
                      Register for Paper Presentation
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Wrench className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Workshops</h4>
                  <p className="text-muted-foreground">
                    Join our national level workshops with hands-on experience and industry experts
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Registration Fee:</span>
                      <span className="font-semibold">₹300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-semibold">14.08.2025</span>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
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

        {/* Important Dates - Improved Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-500">Important Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-background/50 rounded-lg border border-border/30">
              <Calendar className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-foreground">Day 1 - Technical Events</h4>
              <p className="text-2xl font-bold text-foreground mb-2">22nd August 2025</p>
              <p className="text-sm text-muted-foreground">Paper Presentations & Technical Competitions</p>
            </div>
            <div className="text-center p-6 bg-background/50 rounded-lg border border-border/30">
              <Calendar className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-foreground">Day 2 - Workshops</h4>
              <p className="text-2xl font-bold text-foreground mb-2">23rd August 2025</p>
              <p className="text-sm text-muted-foreground">Industry Workshops & Training Sessions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Events

