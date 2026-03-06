import { motion } from 'framer-motion'

export function ReviewCard({ review, index }) {
  return (
    <motion.div
      className="review-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="review-header">
        <div className="review-avatar" aria-hidden="true">
          {review.name.charAt(0)}
        </div>
        <div className="review-info">
          <h4>{review.name}</h4>
          <div className="review-rating" aria-label={`Rating: ${review.rating} out of 5 stars`}>
            {'⭐'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
          </div>
        </div>
      </div>
      <p className="review-text">"{review.text}"</p>
    </motion.div>
  )
}
