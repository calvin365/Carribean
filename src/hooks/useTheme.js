import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.add('light-theme')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(prev => !prev)

  return { isDarkMode, toggleTheme }
}
