import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

const navItems = ['Home', 'Menu', 'About', 'Catering', 'Contact']

export function Navbar({ activeSection }) {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-content">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">🌴 CARIBBEAN</span>
        </motion.div>
        
        <div className="nav-links" role="menubar">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, color: '#ff6b35' }}
              className={activeSection === item.toLowerCase() ? 'active' : ''}
              role="menuitem"
              aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </motion.button>

        <button className="mobile-menu-toggle" aria-label="Toggle mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  )
}
