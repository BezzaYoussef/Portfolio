'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import { SectionPanel } from '@/components/SectionPanel'
import { useTheme } from '@/contexts/ThemeProvider'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })
const HeroOverlay = dynamic(() => import('@/components/HeroOverlay'), { ssr: false })
const Navigation = dynamic(() => import('@/components/Navigation').then(mod => ({ default: mod.Navigation })), { ssr: false })

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'certifications' | 'contact' | null

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<Section>(null)
  const { theme } = useTheme()

  return (
    <main 
      className="w-full h-screen relative overflow-hidden"
      style={{ backgroundColor: theme === 'night' ? '#0a0a1a' : '#ffffff' }}
    >
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading...</div>}>
        <Scene selectedSection={selectedSection} onSectionChange={setSelectedSection} />
        <HeroOverlay />
        <Navigation onNavigate={setSelectedSection} />
        {selectedSection && (
          <SectionPanel
            section={selectedSection}
            onClose={() => setSelectedSection(null)}
          />
        )}
      </Suspense>
    </main>
  )
}

