import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MenuCard } from './components/MenuCard'
import { ReviewCard } from './components/ReviewCard'
import { ContactForm } from './components/ContactForm'

// Import all images from the imgs folder
import food1 from './assets/imgs/unnamed.jpg'
import food2 from './assets/imgs/unnamed (1).jpg'
import food3 from './assets/imgs/unnamed (2).jpg'
import food4 from './assets/imgs/unnamed (3).jpg'
import food5 from './assets/imgs/unnamed (4).jpg'
import food6 from './assets/imgs/unnamed (5).jpg'
import food7 from './assets/imgs/unnamed (6).jpg'
import food8 from './assets/imgs/unnamed (7).jpg'
import food9 from './assets/imgs/unnamed (8).jpg'
import food10 from './assets/imgs/unnamed (9).jpg'
import food11 from './assets/imgs/unnamed (10).jpg'
import food12 from './assets/imgs/unnamed (11).jpg'
import food13 from './assets/imgs/unnamed (12).jpg'
import food14 from './assets/imgs/unnamed (13).jpg'
import food15 from './assets/imgs/unnamed (14).jpg'
import food16 from './assets/imgs/unnamed (15).jpg'
import food17 from './assets/imgs/unnamed (16).jpg'

// Import AVIF images for better performance
import chef1 from './assets/imgs/chef 1.avif'
import chef2 from './assets/imgs/chef 2.avif'
import chef3 from './assets/imgs/chef 3.avif'
import ingredient1 from './assets/imgs/ingredient 1.avif'
import ingredient2 from './assets/imgs/ingredient 2.avif'
import ingredient3 from './assets/imgs/ingredient 3.avif'
import spice1 from './assets/imgs/spice 1.avif'
import spice2 from './assets/imgs/spice 2.avif'
import spice3 from './assets/imgs/spice 3.avif'
import spice4 from './assets/imgs/spice 4.avif'

const galleryImages = [
  food1, food2, food3, food4, food5, food6, food7,
  food8, food9, food10, food11, food12, food13, food14,
  food15, food16, food17,
  chef1, chef2, chef3,
  ingredient1, ingredient2, ingredient3,
  spice1, spice2, spice3, spice4
]

const reviews = [
  { name: 'Patrick K.', rating: 5, text: 'Very good food court… warm welcoming staff… fresh, yummy and yummy food.' },
  { name: 'Vivian S.', rating: 5, text: 'Awesome restaurant with nice dishes. The tea there slaps differently.' },
  { name: 'Maina M.', rating: 5, text: 'A place offering experience… great service and delicious choma.' },
  { name: 'Rebecca M.', rating: 5, text: 'Good place to visit.' },
  { name: 'Benson M.', rating: 5, text: 'Grab lunch there, you will love it.' },
  { name: 'Cyrus K.', rating: 5, text: 'Best food, fresh and served hot.' },
  { name: 'Kabiru M.', rating: 4, text: 'Service was fast and food very good.' },
  { name: 'Eric M.', rating: 4, text: 'Nice place… very busy therefore food always fresh.' },
  { name: 'Kezia D.', rating: 4, text: 'A good place to dine but can get busy at times.' },
  { name: 'Eric K.', rating: 4, text: 'Very good nyama choma though restaurant is small and crowded.' },
  { name: 'Aki.Ni.M', rating: 4, text: 'Food amazing and hot… affordable but noisy like a dining hall.' },
  { name: 'Kyle S.', rating: 3, text: 'Waiter kept getting my order wrong… food had nearly no meat.' },
  { name: 'John T.', rating: 3, text: 'Good location but very noisy.' }
]

const popularDishes = ['Nyama Choma', 'Goat Curry', 'Pork Ribs', 'Jerk Chicken', 'Plantains', 'Fish Meals']

const menuItems = [
  { img: ingredient1, title: 'Grilled Meats', desc: 'Jerk chicken, grilled fish, and BBQ ribs with authentic Caribbean spices', price: 'From KSh 850' },
  { img: ingredient2, title: 'Plantain Dishes', desc: 'Sweet and savory plantain preparations, a Caribbean staple', price: 'From KSh 450' },
  { img: ingredient3, title: 'Rice & Peas', desc: 'Traditional Caribbean rice cooked with coconut milk and kidney beans', price: 'From KSh 550' },
  { img: spice1, title: 'Curry Dishes', desc: 'Aromatic curry goat, chicken, and vegetables with island flavors', price: 'From KSh 750' },
  { img: spice2, title: 'Wraps & More', desc: 'Caribbean-style wraps, patties, and quick bites', price: 'From KSh 400' },
  { img: spice3, title: 'Island Drinks', desc: 'Fresh juices, smoothies, and tropical beverages', price: 'From KSh 300' }
]

const features = [
  { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Trained in Caribbean cooking techniques', image: chef1 },
  { icon: '🌶️', title: 'Authentic Spices', desc: 'Imported Caribbean seasonings and jerk marinades', image: spice1 },
  { icon: '🏃', title: 'Quick Service', desc: 'Fast food court-style dining experience', image: chef2 },
  { icon: '💯', title: 'Quality Ingredients', desc: 'Fresh, locally sourced produce and meats', image: ingredient1 }
]

const stats = [
  { num: '50+', label: 'Events Catered' },
  { num: '1000+', label: 'Happy Customers' },
  { num: '5+', label: 'Years Experience' }
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Active section tracking
  useEffect(() => {
    const sections = ['home', 'menu', 'about', 'catering', 'gallery', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Mobile menu toggle
  useEffect(() => {
    const toggle = document.querySelector('.mobile-menu-toggle')
    const navLinks = document.querySelector('.nav-links')
    
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        setMobileMenuOpen(prev => !prev)
        toggle.classList.toggle('mobile-open')
        navLinks.classList.toggle('mobile-open')
      })
    }
  }, [])

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        {/* Hero Section with 3D Spline */}
        <Hero />

        {/* Menu Highlights Section */}
        <section id="menu" className="section menu" aria-label="Menu section">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Specialties</span>
            </h2>
            <div className="menu-grid">
              {menuItems.map((item, i) => (
                <MenuCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="section about" aria-label="About section">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              About <span className="gradient-text">Us</span>
            </h2>
            <div className="about-content">
              <div className="about-text">
                <p className="about-intro">
                  Located in the heart of Nairobi along Airport Road, <strong>Caribbean Food Court Kobil</strong> brings you authentic Caribbean flavors right here in Kenya.
                </p>
                <p>
                  We specialize in Caribbean-style cuisine featuring grilled meats, plantains, and island-inspired dishes. Our casual food court atmosphere makes us the perfect spot for quick meals, family gatherings, and enjoying the vibrant tastes of the Caribbean.
                </p>
                <div className="about-features">
                  {features.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      className="feature-box"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="feature-image-wrapper">
                        <img src={feature.image} alt={feature.title} className="feature-image" loading="lazy" />
                      </div>
                      <div className="feature-icon-lg" aria-hidden="true">{feature.icon}</div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="about-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img src={food1} alt="Caribbean Food Court interior" className="about-image-photo" loading="lazy" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Catering Section */}
        <section id="catering" className="section catering" aria-label="Catering services">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              <span className="gradient-text">Catering</span> Services
            </h2>
            <div className="catering-content">
              <motion.div
                className="catering-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3>Bring the Caribbean to Your Event</h3>
                <p>
                  We provide professional catering services for events, corporate gatherings, weddings, parties, and group functions. Let us bring authentic Caribbean flavors to your special occasion.
                </p>
                <ul className="catering-list">
                  <li>✓ Corporate Events & Office Lunches</li>
                  <li>✓ Weddings & Private Parties</li>
                  <li>✓ Birthday Celebrations</li>
                  <li>✓ Group Orders & Takeaway</li>
                  <li>✓ Customizable Menus</li>
                </ul>
                <motion.a
                  href="https://wa.me/254705001002?text=Hi,%20I%20would%20like%20to%20request%20a%20catering%20quote"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Quote 📱
                </motion.a>
              </motion.div>
              <motion.div
                className="catering-cards"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="stat-number">{stat.num}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="section gallery" aria-label="Photo gallery">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Photo <span className="gradient-text">Gallery</span>
            </h2>
            <div className="gallery-grid">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                >
                  <img src={img} alt={`Caribbean Food ${i + 1}`} className="gallery-image" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Reviews Section */}
        <section className="section reviews" aria-label="Customer reviews">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Customer <span className="gradient-text">Reviews</span>
            </h2>

            {/* Rating Summary */}
            <motion.div
              className="rating-summary"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              aria-label="Average rating: 4.1 out of 5 stars based on 3200+ reviews"
            >
              <div className="rating-stars" aria-hidden="true">⭐⭐⭐⭐</div>
              <div className="rating-score">4.1 / 5</div>
              <div className="rating-count">3,200+ Reviews</div>
            </motion.div>

            {/* Reviews Grid */}
            <div className="reviews-grid">
              {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} index={i} />
              ))}
            </div>

            {/* Popular Dishes */}
            <motion.div
              className="popular-dishes"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Most Mentioned Dishes 🔥</h3>
              <div className="dishes-tags">
                {popularDishes.map((dish, i) => (
                  <motion.span
                    key={dish}
                    className="dish-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {dish}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Quick Verdict */}
            <motion.div
              className="quick-verdict"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Quick Honest Verdict</h3>
              <div className="verdict-grid">
                <div className="verdict-pros">
                  <h4>👍 Pros</h4>
                  <ul>
                    <li>Good grilled meat and nyama choma</li>
                    <li>Affordable meals</li>
                    <li>Food served hot and fresh</li>
                  </ul>
                </div>
                <div className="verdict-cons">
                  <h4>👎 Cons</h4>
                  <ul>
                    <li>Can be crowded and noisy</li>
                    <li>Limited parking</li>
                    <li>Occasional service mistakes</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact" aria-label="Contact information">
          <motion.div
            className="contact-container"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Visit <span className="gradient-text">Us</span>
            </h2>
            <div className="contact-content">
              <ContactForm />

              <div className="contact-info">
                <div className="info-card">
                  <div className="info-icon" aria-hidden="true">📍</div>
                  <h4>Address</h4>
                  <p>First Floor, Catherine Ndereba Road</p>
                  <p>Airport Road (Embakasi North)</p>
                  <p>Nairobi, Kenya</p>
                </div>
                <div className="info-card">
                  <div className="info-icon" aria-hidden="true">📞</div>
                  <h4>Phone</h4>
                  <p><a href="tel:+254705001002" aria-label="Call +254 705 001 002">+254 705 001 002</a></p>
                  <p><a href="tel:+254722421237" aria-label="Call +254 722 421 237">+254 722 421 237</a></p>
                </div>
                <div className="info-card">
                  <div className="info-icon" aria-hidden="true">🌐</div>
                  <h4>Online</h4>
                  <p><a href="https://www.caribbeancaterers.co.ke" target="_blank" rel="noopener noreferrer">www.caribbeancaterers.co.ke</a></p>
                  <p>Facebook: Caribbean Food Court and Caterers</p>
                </div>
                <div className="info-card">
                  <div className="info-icon" aria-hidden="true">🕐</div>
                  <h4>Opening Hours</h4>
                  <div className="hours-grid">
                    <div><span>Mon:</span> <span>07:00 – 01:00</span></div>
                    <div><span>Tue:</span> <span>07:00 – 01:00</span></div>
                    <div><span>Wed:</span> <span>09:00 – 01:00</span></div>
                    <div><span>Thu:</span> <span>07:00 – 01:00</span></div>
                    <div><span>Fri:</span> <span>07:00 – 01:00</span></div>
                    <div><span>Sat:</span> <span>07:00 – 01:00</span></div>
                    <div><span>Sun:</span> <span className="closed">Closed</span></div>
                  </div>
                </div>
                <motion.a
                  href="https://wa.me/254705001002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Chat with us on WhatsApp"
                >
                  <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </motion.a>

                {/* Google Maps Embed */}
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821884730872!2d36.8952!3d-1.3192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1733b9c0b5a1%3A0x1234567890abcdef!2sAirport%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                    title="Caribbean Food Court Location on Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="footer-content">
            <div className="footer-brand">
              <h3>🌴 Caribbean Food Court</h3>
              <p>Authentic Caribbean Cuisine in Nairobi</p>
            </div>
            <div className="footer-links">
              <a href="#menu">Menu</a>
              <a href="#catering">Catering</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                aria-label="Follow us on Facebook"
              >
                Facebook
              </motion.a>
              <motion.a
                href="https://www.caribbeancaterers.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                aria-label="Visit our website"
              >
                Website
              </motion.a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Caribbean Food Court Kobil. All rights reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  )
}

export default App
