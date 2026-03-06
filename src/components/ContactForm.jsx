import { motion } from 'framer-motion'
import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      whileSubmit={{ scale: 0.98 }}
      noValidate
    >
      <h3>Send us a message</h3>
      
      {submitSuccess && (
        <div className="form-success" role="alert">
          ✅ Message sent! We'll get back to you soon.
        </div>
      )}

      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && <span id="phone-error" className="form-error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message or Order Inquiry"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
      </div>

      <motion.button
        type="submit"
        className="btn-primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </motion.form>
  )
}
