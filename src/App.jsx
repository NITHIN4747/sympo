import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import WorkshopRegistration from './pages/WorkshopRegistration'
import PaperRegistration from './pages/PaperRegistration'
import { useScrollToTop } from './hooks/use-scroll-to-top'
import './App.css'

// Wrapper component to use the scroll-to-top hook
function AppContent({ darkMode, toggleDarkMode }) {
  useScrollToTop() // This will scroll to top on route changes

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workshop-registration" element={<WorkshopRegistration />} />
        <Route path="/paper-registration" element={<PaperRegistration />} />
      </Routes>
      <Footer />
    </div>
  )
}

// Separate wrapper for standalone pages without navbar/footer

function App() {
  const [darkMode, setDarkMode] = useState(false)

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  // Apply dark mode class to document and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Router>
      <Routes>
        {/* Main app with navbar/footer */}
        <Route path="/*" element={<AppContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </Router>
  )
}

export default App
