'use client'

import { useLanguage } from '@/contexts/LanguageProvider'
import { useTheme } from '@/contexts/ThemeProvider'
import { motion } from 'framer-motion'

export default function HeroOverlay() {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Toggles */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col sm:flex-row gap-2 sm:gap-4 pointer-events-auto z-20">
        <button
          onClick={toggleTheme}
          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all text-sm sm:text-base ${
            theme === 'night'
              ? 'glass-dark text-white hover:bg-white/20'
              : 'bg-white/80 text-gray-800 hover:bg-white'
          }`}
        >
          {theme === 'night' ? '🌓' : '☀️'} <span className="hidden sm:inline">{theme === 'night' ? 'Night' : 'Light'}</span>
        </button>
        <button
          onClick={toggleLanguage}
          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all text-sm sm:text-base ${
            theme === 'night'
              ? 'glass-dark text-white hover:bg-white/20'
              : 'bg-white/80 text-gray-800 hover:bg-white'
          }`}
        >
          {language === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}
        </button>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-center px-4 md:px-6 ${
            theme === 'night' ? 'text-white' : 'text-black'
          }`}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {t.hero.name}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {t.hero.role}
          </motion.p>
          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {t.hero.bio}
          </motion.p>
        </motion.div>
      </div>

      {/* Scanning line effect */}
      {theme === 'night' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="scan-line absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />
        </div>
      )}
    </div>
  )
}

