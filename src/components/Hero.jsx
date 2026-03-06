import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { useState } from 'react'

export function Hero() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const SPLINE_URL = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"

  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            🏝️ Authentic Caribbean Cuisine
          </motion.div>
          <h1>
            Welcome to <br />
            <span className="gradient-text">Caribbean Food Court</span>
          </h1>
          <p>Experience the taste of the islands in Nairobi. Grilled meats, plantains, and island-inspired dishes that bring the Caribbean to your plate.</p>
          <motion.div className="hero-buttons">
            <motion.a
              href="https://wa.me/254705001002?text=Hi,%20I%20would%20like%20to%20place%20an%20order"
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 107, 53, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order now via WhatsApp"
            >
              Order Now 📱
            </motion.a>
            <motion.a
              href="#catering"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Catering Services
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          aria-label="3D Caribbean scene"
        >
          {isLoading && !hasError && (
            <div className="spline-skeleton">
              <div className="skeleton-shimmer"></div>
              <p className="loading-text">Loading 3D Experience...</p>
            </div>
          )}
          {hasError ? (
            <div className="spline-fallback">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600" alt="Caribbean food display" />
              <p>3D scene unavailable - Enjoy our delicious food!</p>
            </div>
          ) : (
            <Spline
              scene={SPLINE_URL}
              onLoad={() => setIsLoading(false)}
              onError={() => { setHasError(true); setIsLoading(false); }}
              className="spline-scene"
            />
          )}
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore our menu</p>
      </motion.div>
    </section>
  )
}
