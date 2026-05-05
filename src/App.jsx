import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CTA from './components/CTA'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('profile-preferences')
    if (saved) {
      const prefs = JSON.parse(saved)
      setDarkMode(prefs.darkMode || false)
    }
  }, [])

  const savePreferences = (nextDarkMode) => {
    const prefs = { darkMode: nextDarkMode }
    localStorage.setItem('profile-preferences', JSON.stringify(prefs))
  }

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      savePreferences(next)
      return next
    })
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <CTA darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
