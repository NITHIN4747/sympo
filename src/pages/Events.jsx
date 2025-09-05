import { motion } from 'framer-motion'
import { Calendar, Clock, DollarSign, ExternalLink, Users, Wrench, Zap, Trophy, BookOpen, Cpu, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'

const Events = () => {
 
  const events = [
        {
          category: "Paper Presentation",
          icon: <BookOpen className="h-6 w-6" />,
          color: "bg-blue-500",
          // Shared theme/title for both Paper and Project Presentation
          theme: "Smart and eco-friendly Innovation in Electrical Engineering",
          items: [
            {
              title: "Paper Presentation",
              description: "Paper Presentation on smart and eco-friendly innovations in Electrical Engineering",
              details: [
                "Last date for Registration: 03.10.2025",
                "Last date for Paper Submission: 03.10.2025",
                "Selection Intimation: 06.10.2025",
                "Registration Fee: ₹300 per head",
                "Submit paper to: eeeagrid@gmail.com"
              ],

            },
            {
              title: "Project Presentation",
              description: "Showcase project prototypes and working models focused on electrical engineering innovations",
              details: [
                "Last date for Registration: 03.10.2025",
                "Last date for Project Submission: 03.10.2025",
                "Selection Intimation: 06.10.2025",
                "Registration Fee: ₹300 per head",
                "Submit project abstract to: eeeagrid@gmail.com"
              ]
            }
          ]
        },
        {
          category: "National Level Workshops",
          icon: <Wrench className="h-6 w-6" />,
          color: "bg-green-500",
          items: [
            {
              title: "IoT BOOTCAMP: Hands-on Experience with ARDUINO and SENSORS",
              description: "Hands-on experience with Arduino and sensors for IoT applications",
              details: ["Hands-on Arduino programming", "Sensor integration", "IoT project development", "Certificate provided"]
            },
            {
              title: "Design of Power Converters using MATLAB",
              description: "Design and simulation of power converters using MATLAB",
              details: ["MATLAB simulation", "Power electronics focus", "Converter design", "Practical applications"]
            },
            {
              title: "Electric Vehicle technologies: Hands-on Experience",
              description: "Electric vehicle technologies and hands-on practical sessions",
              details: ["EV technology overview", "Battery management", "Motor control systems", "Industry insights"]
            }
          ],

        },
    {
      category: "Hard-Skill Events",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-yellow-500",
      items: [
        {
          title: "Circuit Debugging",
          description: "Test your circuit analysis and debugging skills",
          details: ["Problem-solving challenge", "Circuit analysis", "Time-based competition", "Technical expertise", "Registration Fee: ₹50 per head"]
        },
        {
          title: "Pick and Win",
          description: "Technical quiz and rapid-fire challenge",
          details: ["Technical knowledge test", "Quick thinking required", "Exciting prizes", "Competitive spirit", "Registration Fee: ₹50 per head"]
        }
      ]
    },
    {
      category: "Soft-Skill Events",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-purple-500",
      items: [
        {
          title: "Decathlon (10 Events)",
          description: "Ten curated soft-skill events to showcase diverse talents",
          details: ["10 different events", "Team participation", "Fun and engaging activities", "All-round development", "Registration Fee: ₹50 per head"]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-yellow-500 bg-clip-text text-transparent mb-2">
            Events & Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for an exciting lineup of technical presentations, hands-on workshops, 
            and engaging competitions designed to enhance your engineering knowledge and skills.
          </p>
        </motion.div>

        {/* Events Sections */}
        <div className="space-y-12">
          {events.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.3 }}
              className="flex flex-col items-center"
            >
              {/* Category Header */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className={`${category.color} p-3 rounded-full text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{category.category}</h2>
                </div>
                {category.theme && (
                  <h3 className="text-xl font-semibold text-muted-foreground">{category.theme}</h3>
                )}
              </div>

              {/* Items Layout */}
              <div className={`w-full max-w-7xl ${category.category === 'National Level Workshops' ? 'flex justify-center flex-wrap gap-4' : category.items.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'}`}>
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.2 }}
                    className="w-full max-w-md"
                  >
                    <Card className="h-full bg-gradient-to-br from-card to-card/80 border-2 border-border/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="text-center pb-2">
                        <CardTitle className="text-xl font-bold text-foreground mb-1">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                            </div>
                          ))}
                        </div>
                        {item.formLink && (
                          <Button
                            asChild
                            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
            </motion.div>
          ))}
        </div>

        {/* Registration Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
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
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-3 p-3 h-full">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground text-center">Paper Presentation</h4>
                  <p className="text-muted-foreground text-center">
                    Present your research on smart and eco-friendly innovations in electrical engineering
                  </p>
                  <div className="space-y-1 text-sm w-full">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Registration Fee:</span>
                      <span className="font-semibold">₹300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-semibold">03.10.2025</span>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold h-10"
                  >
                    <Link to="/paper-registration">
                      Register for Paper Presentation
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-col items-center justify-center space-y-3 p-3 h-full">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Wrench className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground text-center">Workshops</h4>
                  <p className="text-muted-foreground text-center">
                    Join our national level workshops with hands-on experience and industry experts
                  </p>
                  <div className="space-y-1 text-sm w-full">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Registration Fee:</span>
                      <span className="font-semibold">₹300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-semibold">03.10.2025</span>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold h-10"
                  >
                    <Link to="/workshop-registration">
                      Register for Workshops
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
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
          className="mt-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4"
        >
          <h3 className="text-xl font-bold text-center mb-4 text-yellow-500">Important Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-3 bg-background/50 rounded-lg border border-border/30">
              <Calendar className="h-6 w-6 text-yellow-500 mx-auto mb-1" />
              <h4 className="font-semibold text-base mb-1 text-foreground">Day 1 - Technical Events</h4>
              <p className="text-xl font-bold text-foreground mb-1">10th October 2025</p>
              <p className="text-xs text-muted-foreground">Paper Presentations & Technical Competitions</p>
            </div>
            <div className="text-center p-3 bg-background/50 rounded-lg border border-border/30">
              <Calendar className="h-6 w-6 text-yellow-500 mx-auto mb-1" />
              <h4 className="font-semibold text-base mb-1 text-foreground">Day 2 - Workshops</h4>
              <p className="text-xl font-bold text-foreground mb-1">11th October 2025</p>
              <p className="text-xs text-muted-foreground">Industry Workshops & Training Sessions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Events

