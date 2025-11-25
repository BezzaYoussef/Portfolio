'use client'

import { useLanguage } from '@/contexts/LanguageProvider'
import { useTheme } from '@/contexts/ThemeProvider'
import { motion } from 'framer-motion'

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'certifications' | 'contact'

interface NavigationProps {
  onNavigate: (section: Section) => void
}

export function Navigation({ onNavigate }: NavigationProps) {
  const { t, language } = useLanguage()
  const { theme } = useTheme()

  const navItems: { key: Section; label: string }[] = [
    { key: 'about', label: t.nav.about },
    { key: 'skills', label: t.nav.skills },
    { key: 'projects', label: t.nav.projects },
    { key: 'experience', label: t.nav.experience },
    { key: 'certifications', label: t.nav.certifications },
    { key: 'contact', label: t.nav.contact },
  ]

  return (
    <nav className="absolute bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-auto z-10">
      <div className={`flex flex-nowrap justify-center gap-2 px-4 py-3 rounded-full ${
        theme === 'night'
          ? 'glass-dark'
          : 'bg-white/80 backdrop-blur-md'
      }`}>
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition-all ${
              theme === 'night'
                ? 'text-white hover:bg-white/20'
                : 'text-black hover:bg-gray-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

