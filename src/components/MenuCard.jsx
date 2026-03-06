import { motion } from 'framer-motion'

export function MenuCard({ item, index }) {
  return (
    <motion.div
      className="card menu-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="menu-image-container">
        <img src={item.img} alt={item.title} className="menu-image" loading="lazy" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <div className="menu-price">{item.price}</div>
    </motion.div>
  )
}
