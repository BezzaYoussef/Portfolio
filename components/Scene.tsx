'use client'

import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import * as THREE from 'three'
import { AICore } from './AICore'
import { OrbitingElements } from './OrbitingElements'
import { Particles } from './Particles'
import { DataStreams } from './DataStreams'
import { CameraController } from './CameraController'
import { useTheme } from '@/contexts/ThemeProvider'

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'certifications' | 'contact' | null

interface SceneProps {
  selectedSection?: Section
  onSectionChange?: (section: Section) => void
}

// Component to set scene background color
function SceneBackground() {
  const { scene } = useThree()
  const { theme } = useTheme()
  
  useEffect(() => {
    scene.background = theme === 'night' 
      ? new THREE.Color(0x0a0a1a) 
      : new THREE.Color(0xffffff)
  }, [scene, theme])
  
  return null
}

export default function Scene({ selectedSection, onSectionChange }: SceneProps) {
  const { theme } = useTheme()

  // Background: white for light mode, dark for night mode
  const bodyBgColor = theme === 'night' ? '#0a0a1a' : '#ffffff'
  
  return (
    <div className="w-full h-full" style={{ background: bodyBgColor, backgroundColor: bodyBgColor }}>
      <Canvas
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
        className="w-full h-full"
        style={{ background: bodyBgColor }}
      >
        <Suspense fallback={null}>
          <SceneBackground />
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          <CameraController />
          
          {/* Enhanced lighting setup */}
          <ambientLight intensity={theme === 'night' ? 0.4 : 0.9} />
          
          {/* Colored point lights for depth - keep colors vibrant in light mode */}
          <pointLight 
            position={[10, 10, 10]} 
            intensity={theme === 'night' ? 1.2 : 1.0}
            color={theme === 'night' ? '#00d4ff' : '#00d4ff'}
          />
          <pointLight 
            position={[-10, -10, -10]} 
            intensity={theme === 'night' ? 0.8 : 0.7}
            color={theme === 'night' ? '#7b2ff7' : '#7b2ff7'}
          />
          <pointLight 
            position={[0, 10, 0]} 
            intensity={theme === 'night' ? 0.6 : 0.6}
            color={theme === 'night' ? '#ff00ff' : '#ff00ff'}
          />
          <pointLight 
            position={[0, -10, 0]} 
            intensity={theme === 'night' ? 0.5 : 0.5}
            color={theme === 'night' ? '#00ff88' : '#00ff88'}
          />
          
          {/* Spotlight for dramatic effect */}
          <spotLight
            position={[0, 15, 0]}
            angle={0.5}
            penumbra={0.5}
            intensity={theme === 'night' ? 0.8 : 0.7}
            color={theme === 'night' ? '#00d4ff' : '#00d4ff'}
            castShadow={false}
          />
          
          <AICore />
          <OrbitingElements selectedSection={selectedSection} onSectionChange={onSectionChange} />
          <Particles />
          <DataStreams />
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={5}
            maxDistance={15}
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableDamping={true}
            dampingFactor={0.05}
            enableRotate={typeof window !== 'undefined' && window.innerWidth > 768}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

