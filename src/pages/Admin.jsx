import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Download, Search, Calendar, School, LogOut, Filter, BarChart3, TrendingUp, Mail, Phone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import AdminLogin from '../components/AdminLogin'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [registrations, setRegistrations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredRegistrations, setFilteredRegistrations] = useState([])
  const [filterEvent, setFilterEvent] = useState('all')
  const [sortBy, setSortBy] = useState('timestamp')
  const [sortOrder, setSortOrder] = useState('desc')

  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = localStorage.getItem('adminAuth')
    if (adminAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  // Load registrations from localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const savedRegistrations = localStorage.getItem('symposiumRegistrations')
      if (savedRegistrations) {
        const data = JSON.parse(savedRegistrations)
        setRegistrations(data)
        setFilteredRegistrations(data)
      }
    }
  }, [isAuthenticated])

  // Filter and sort registrations
  useEffect(() => {
    let filtered = registrations

    // Apply search filter
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(
        (registration) =>
          registration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          registration.college.toLowerCase().includes(searchTerm.toLowerCase()) ||
          registration.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          registration.phone.includes(searchTerm) ||
          registration.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply event filter
    if (filterEvent !== 'all') {
      filtered = filtered.filter(registration => registration.event === filterEvent)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue, bValue
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case 'college':
          aValue = a.college.toLowerCase()
          bValue = b.college.toLowerCase()
          break
        case 'event':
          aValue = a.event.toLowerCase()
          bValue = b.event.toLowerCase()
          break
        case 'timestamp':
        default:
          aValue = new Date(a.timestamp).getTime()
          bValue = new Date(b.timestamp).getTime()
          break
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    setFilteredRegistrations(filtered)
  }, [searchTerm, filterEvent, sortBy, sortOrder, registrations])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    localStorage.removeItem('adminEmail')
    setIsAuthenticated(false)
  }

  const exportToCSV = () => {
    const headers = ['Registration #', 'Name', 'College', 'Email', 'Phone', 'Event', 'Registration Date']
    const csvContent = [
      headers.join(','),
      ...filteredRegistrations.map(reg => [
        reg.registrationNumber,
        `"${reg.name}"`,
        `"${reg.college}"`,
        reg.email,
        reg.phone,
        reg.event,
        new Date(reg.timestamp).toLocaleDateString()
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `symposium_registrations_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getStatistics = () => {
    const total = registrations.length
    const uniqueColleges = [...new Set(registrations.map(reg => reg.college))].length
    const today = new Date().toDateString()
    const todayRegistrations = registrations.filter(reg => 
      new Date(reg.timestamp).toDateString() === today
    ).length
    
    const eventStats = registrations.reduce((acc, reg) => {
      acc[reg.event] = (acc[reg.event] || 0) + 1
      return acc
    }, {})

    return { total, uniqueColleges, todayRegistrations, eventStats }
  }

  const stats = getStatistics()

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage EEE Symposium 2025 registrations
            </p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">
                +{stats.todayRegistrations} today
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Colleges</CardTitle>
              <School className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.uniqueColleges}</div>
              <p className="text-xs text-muted-foreground">
                Participating institutions
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Registrations</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.todayRegistrations}</div>
              <p className="text-xs text-muted-foreground">
                New registrations today
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Latest Registration</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {registrations.length > 0 ? 
                  new Date(registrations[registrations.length - 1].timestamp).toLocaleDateString() : 
                  'None'
                }
              </div>
              <p className="text-xs text-muted-foreground">
                Most recent entry
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Event Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Event-wise Registrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(stats.eventStats).map(([event, count]) => (
                  <div key={event} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-lg font-bold">{count}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {event.replace('-', ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, college, email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={filterEvent} onValueChange={setFilterEvent}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by event" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="paper">Paper Presentation</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="technical">Technical Events</SelectItem>
                    <SelectItem value="non-technical">Non-Technical Events</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="timestamp">Registration Date</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                  </SelectContent>
                </Select>

                <Button onClick={exportToCSV} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export CSV
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Registrations Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Registered Participants ({filteredRegistrations.length})</CardTitle>
              <CardDescription>
                Showing {filteredRegistrations.length} of {registrations.length} registrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Registration #</th>
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">College</th>
                      <th className="text-left p-2">Contact</th>
                      <th className="text-left p-2">Event</th>
                      <th className="text-left p-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="p-2">
                          <Badge variant="outline">{registration.registrationNumber}</Badge>
                        </td>
                        <td className="p-2 font-medium">{registration.name}</td>
                        <td className="p-2">{registration.college}</td>
                        <td className="p-2">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Mail className="h-3 w-3" />
                              {registration.email}
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Phone className="h-3 w-3" />
                              {registration.phone}
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <Badge variant="secondary" className="capitalize">
                            {registration.event.replace('-', ' ')}
                          </Badge>
                        </td>
                        <td className="p-2 text-sm text-gray-600 dark:text-gray-400">
                          {new Date(registration.timestamp).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Admin

