'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageProvider'
import { useTheme } from '@/contexts/ThemeProvider'
import { ContactForm } from './ContactForm'

type Section = 'skills' | 'projects' | 'experience' | 'about' | 'certifications' | 'contact'

interface SectionPanelProps {
  section: Section
  onClose: () => void
}

export function SectionPanel({ section, onClose }: SectionPanelProps) {
  const { t, language } = useLanguage()
  const { theme } = useTheme()

  const getContent = () => {
    switch (section) {
      case 'about':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">{t.about.title}</h3>
            
            {/* Profile Picture Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <motion.div 
                className="relative group profile-image-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Glowing border effect */}
                <div className={`absolute -inset-2 rounded-full blur-lg opacity-60 transition-opacity profile-glow ${
                  theme === 'night' 
                    ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500' 
                    : 'bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500'
                } group-hover:opacity-100`}></div>
                
                {/* Profile Image */}
                <div className={`relative rounded-full p-1.5 ${
                  theme === 'night' ? 'bg-gray-900' : 'bg-white'
                } shadow-2xl`}>
                  <img
                    src="/profile.jpg"
                    alt="Youssef Bezza"
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full object-contain border-4 border-transparent shadow-xl"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center ${
                          theme === 'night' ? 'bg-gray-800' : 'bg-gray-200'
                        }">
                          <span class="text-4xl">👤</span>
                        </div>`
                      }
                    }}
                  />
                </div>
                
                {/* Animated ring */}
                <div className={`absolute inset-0 rounded-full border-2 ${
                  theme === 'night' ? 'border-cyan-400' : 'border-blue-400'
                } opacity-50 animate-pulse`} style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
              </motion.div>
              
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-semibold mb-2">{t.hero.name}</h4>
                <p className={`text-sm mb-4 ${
                  theme === 'night' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {t.hero.role}
                </p>
                <p className="text-base leading-relaxed opacity-90 whitespace-pre-line">
                  {t.about.content}
                </p>
              </div>
            </div>
            
            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className={`p-4 rounded-lg ${
                theme === 'night'
                  ? 'glass-dark border border-cyan-500/30'
                  : 'bg-white/60 border border-blue-200'
              }`}>
                <div className={`text-2xl mb-2 ${
                  theme === 'night' ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  💻
                </div>
                <h5 className="font-semibold mb-1">
                  {language === 'en' ? 'Full-Stack' : 'Full-Stack'}
                </h5>
                <p className="text-sm opacity-80">
                  {language === 'en' ? 'Java & Node.js' : 'Java & Node.js'}
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'night'
                  ? 'glass-dark border border-purple-500/30'
                  : 'bg-white/60 border border-purple-200'
              }`}>
                <div className={`text-2xl mb-2 ${
                  theme === 'night' ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  🤖
                </div>
                <h5 className="font-semibold mb-1">
                  {language === 'en' ? 'AI/LLM' : 'IA/LLM'}
                </h5>
                <p className="text-sm opacity-80">
                  {language === 'en' ? 'RAG & NLP' : 'RAG & NLP'}
                </p>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'night'
                  ? 'glass-dark border border-pink-500/30'
                  : 'bg-white/60 border border-pink-200'
              }`}>
                <div className={`text-2xl mb-2 ${
                  theme === 'night' ? 'text-pink-400' : 'text-pink-600'
                }`}>
                  🚀
                </div>
                <h5 className="font-semibold mb-1">
                  {language === 'en' ? 'Microservices' : 'Microservices'}
                </h5>
                <p className="text-sm opacity-80">
                  {language === 'en' ? 'Scalable Systems' : 'Systèmes Scalables'}
                </p>
              </div>
            </div>
          </div>
        )
      case 'skills':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">{t.skills.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillGroup title={t.skills.backend.title} items={t.skills.backend.items} />
              <SkillGroup title={t.skills.frontend.title} items={t.skills.frontend.items} />
              <SkillGroup title={t.skills.databases.title} items={t.skills.databases.items} />
              <SkillGroup title={t.skills.ai.title} items={t.skills.ai.items} />
              <SkillGroup title={t.skills.devops.title} items={t.skills.devops.items} />
              <SkillGroup title={t.skills.languages.title} items={t.skills.languages.items} />
            </div>
          </div>
        )
      case 'projects':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">{t.projects.title}</h3>
            <div className="space-y-6">
              {t.projects.items.map((project, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-lg ${
                    theme === 'night'
                      ? 'glass-dark border border-white/10'
                      : 'bg-white/60 border border-gray-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="opacity-80 mb-3">{project.description}</p>
                    </div>
                    {(project.role || project.duration) && (
                      <div className={`mt-3 md:mt-0 md:ml-4 p-3 rounded-lg ${
                        theme === 'night'
                          ? 'bg-white/5 border border-white/10'
                          : 'bg-gray-50 border border-gray-200'
                      }`}>
                        {project.role && (
                          <p className="text-sm opacity-80 mb-1">
                            <span className="font-medium">Role:</span> {project.role}
                          </p>
                        )}
                        {project.duration && (
                          <p className="text-sm opacity-80">
                            <span className="font-medium">Duration:</span> {project.duration}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {project.details && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      theme === 'night'
                        ? 'bg-white/5 border border-white/5'
                        : 'bg-gray-50/50 border border-gray-200'
                    }`}>
                      <p className="opacity-90 whitespace-pre-line text-sm leading-relaxed">
                        {project.details}
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <p className="text-sm font-semibold mb-2 opacity-80">
                      {language === 'en' ? 'Technologies Used:' : 'Technologies Utilisées :'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className={`px-3 py-1 rounded-full text-sm ${
                            theme === 'night'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : 'bg-blue-100 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'experience':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">{t.experience.title}</h3>
            <div className="space-y-4">
              {t.experience.items.map((exp, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-lg ${
                    theme === 'night'
                      ? 'glass-dark border border-white/10'
                      : 'bg-white/60 border border-gray-200'
                  }`}
                >
                  <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                  <p className="opacity-70 mb-2">
                    {exp.company}
                    {exp.location && ` • ${exp.location}`}
                    {exp.period && ` • ${exp.period}`}
                  </p>
                  <p className="opacity-80 whitespace-pre-line text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 'certifications':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">{t.certifications.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.certifications.items.map((cert, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-lg ${
                    theme === 'night'
                      ? 'glass-dark border border-white/10'
                      : 'bg-white/60 border border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold flex-1 pr-2">{cert.name}</h4>
                    {cert.expires && (
                      <span className={`px-2 py-1 rounded text-xs ${
                        theme === 'night'
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                          : 'bg-orange-100 text-orange-700 border border-orange-200'
                      }`}>
                        {language === 'en' ? 'Expires' : 'Expire'}
                      </span>
                    )}
                  </div>
                  <p className="opacity-70 mb-2 text-sm">
                    {cert.issuer}
                  </p>
                  <div className="flex flex-col gap-1">
                    {cert.period && (
                      <p className="opacity-60 text-sm">
                        📅 {cert.period}
                      </p>
                    )}
                    {cert.credentialId && (
                      <p className="opacity-50 text-xs font-mono break-all">
                        ID: {cert.credentialId.substring(0, 20)}...
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">{t.contact.title}</h3>
            <div className="space-y-6">
              <div className={`p-5 rounded-lg ${
                theme === 'night'
                  ? 'glass-dark border border-white/10'
                  : 'bg-white/60 border border-gray-200'
              }`}>
                <p className="text-xl font-semibold mb-4">{t.contact.name}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="opacity-80">
                      <span className="font-medium">📧 Email:</span>{' '}
                      <a
                        href={`mailto:${t.contact.email}`}
                        className="hover:underline text-blue-400 break-all"
                      >
                        {t.contact.email}
                      </a>
                    </p>
                    {t.contact.phone && (
                      <p className="opacity-80">
                        <span className="font-medium">📱 Phone:</span>{' '}
                        <a
                          href={`tel:${t.contact.phone}`}
                          className="hover:underline text-blue-400"
                        >
                          {t.contact.phone}
                        </a>
                      </p>
                    )}
                    <p className="opacity-80">
                      <span className="font-medium">📍 Location:</span> {t.contact.location}
                    </p>
                    {t.contact.age && (
                      <p className="opacity-80">
                        <span className="font-medium">🎂 Age:</span> {t.contact.age}
                      </p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <p className="opacity-80">
                      <span className="font-medium">💻 GitHub:</span>{' '}
                      <a
                        href={`https://${t.contact.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-400"
                      >
                        {t.contact.github}
                      </a>
                    </p>
                    {t.contact.linkedin && (
                      <p className="opacity-80">
                        <span className="font-medium">💼 LinkedIn:</span>{' '}
                        <a
                          href={t.contact.linkedin.startsWith('http') ? t.contact.linkedin : `https://linkedin.com/in/${t.contact.linkedin.toLowerCase().replace(/\s+/g, '-')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-400"
                        >
                          {t.contact.linkedin.startsWith('http') ? 'Youssef Bezza' : t.contact.linkedin}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${
                theme === 'night'
                  ? 'glass-dark border border-white/10'
                  : 'bg-white/60 border border-gray-200'
              }`}>
                <h4 className="text-xl font-semibold mb-4">
                  {language === 'en' ? 'Send me a message' : 'Envoyez-moi un message'}
                </h4>
                <ContactForm />
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className={`max-w-4xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-y-auto rounded-2xl p-4 sm:p-8 ${
            theme === 'night'
              ? 'glass-dark text-white'
              : 'bg-white/90 text-gray-900 shadow-2xl'
          }`}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
              theme === 'night'
                ? 'hover:bg-white/20 text-white'
                : 'hover:bg-gray-200 text-gray-700'
            } transition-colors`}
          >
            ✕
          </button>
          {getContent()}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  const { theme } = useTheme()
  
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full text-sm ${
              theme === 'night'
                ? 'bg-blue-500/20 text-blue-300'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

