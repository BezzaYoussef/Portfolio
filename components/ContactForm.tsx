'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/contexts/LanguageProvider'
import { useTheme } from '@/contexts/ThemeProvider'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export function ContactForm() {
  const { t, language } = useLanguage()
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      // EmailJS configuration
      // Get these values from https://www.emailjs.com after setting up your account
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      // Check if EmailJS is configured
      if (
        SERVICE_ID === 'your_service_id' ||
        TEMPLATE_ID === 'your_template_id' ||
        PUBLIC_KEY === 'your_public_key'
      ) {
        // Fallback to mailto if EmailJS is not configured
        const mailtoLink = `mailto:${t.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
        return
      }

      // Initialize EmailJS
      emailjs.init(PUBLIC_KEY)

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: t.contact.email,
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  const labels = {
    en: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
    },
    fr: {
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Échec de l\'envoi. Veuillez réessayer.',
      required: 'Ce champ est requis',
      invalidEmail: 'Veuillez entrer une adresse email valide',
    },
  }

  const formLabels = labels[language]

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className={`block text-sm font-medium mb-2 ${
            theme === 'night' ? 'text-white' : 'text-gray-700'
          }`}
        >
          {formLabels.name} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            theme === 'night'
              ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
          } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors`}
          placeholder={formLabels.name}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className={`block text-sm font-medium mb-2 ${
            theme === 'night' ? 'text-white' : 'text-gray-700'
          }`}
        >
          {formLabels.email} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            theme === 'night'
              ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
          } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors`}
          placeholder={formLabels.email}
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className={`block text-sm font-medium mb-2 ${
            theme === 'night' ? 'text-white' : 'text-gray-700'
          }`}
        >
          {formLabels.subject} *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${
            theme === 'night'
              ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
          } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors`}
          placeholder={formLabels.subject}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className={`block text-sm font-medium mb-2 ${
            theme === 'night' ? 'text-white' : 'text-gray-700'
          }`}
        >
          {formLabels.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border resize-none ${
            theme === 'night'
              ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
          } focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors`}
          placeholder={formLabels.message}
        />
      </div>

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-lg ${
            theme === 'night'
              ? 'bg-red-500/20 border border-red-500/50 text-red-300'
              : 'bg-red-100 border border-red-300 text-red-700'
          }`}
        >
          {errorMessage || formLabels.error}
        </motion.div>
      )}

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-lg ${
            theme === 'night'
              ? 'bg-green-500/20 border border-green-500/50 text-green-300'
              : 'bg-green-100 border border-green-300 text-green-700'
          }`}
        >
          {formLabels.success}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
          theme === 'night'
            ? status === 'sending'
              ? 'bg-blue-600/50 text-white cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
            : status === 'sending'
            ? 'bg-blue-500/50 text-white cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        } disabled:opacity-50`}
      >
        {status === 'sending' ? formLabels.sending : formLabels.send}
      </button>
    </form>
  )
}

