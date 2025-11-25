'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeProvider'
import { useLanguage } from '@/contexts/LanguageProvider'

type Section = 'skills' | 'projects' | 'experience' | 'about' | 'certifications' | 'contact' | null

interface OrbitingElementsProps {
  selectedSection?: Section
  onSectionChange?: (section: Section) => void
}

export function OrbitingElements({ selectedSection: externalSection, onSectionChange }: OrbitingElementsProps) {
  const orbit1Ref = useRef<THREE.Group>(null)
  const orbit2Ref = useRef<THREE.Group>(null)
  const orbit3Ref = useRef<THREE.Group>(null)
  const [internalSection, setInternalSection] = useState<Section>(null)
  const { theme } = useTheme()
  const { t } = useLanguage()

  const selectedSection = externalSection !== undefined ? externalSection : internalSection

  const handleSectionChange = (section: Section) => {
    if (externalSection !== undefined && onSectionChange) {
      onSectionChange(section)
    } else {
      setInternalSection(section)
    }
  }

  useFrame(() => {
    const speed = typeof window !== 'undefined' && window.innerWidth < 768 ? 0.002 : 0.005
    if (orbit1Ref.current) orbit1Ref.current.rotation.y += speed
    if (orbit2Ref.current) orbit2Ref.current.rotation.y -= speed * 0.8
    if (orbit3Ref.current) orbit3Ref.current.rotation.y += speed * 0.6
  })

  // Enhanced color palette - keep vibrant colors in both modes
  const colors = {
    primary: '#00d4ff', // Cyan
    secondary: '#7b2ff7', // Purple
    accent: '#ff00ff', // Magenta
    energy: '#00ff88', // Green-cyan
  }

  // Skills orbit (inner)
  const skills = [
    'Java', 'Spring', 'Node.js', 'React', 'TypeScript', 'AI/LLM'
  ]

  // Projects orbit (middle)
  const projects = [
    'Bidinsouk', 'AI Chat', 'SaaS Platform', 'Jumeau Numérique'
  ]

  // Experience orbit (outer)
  const experiences = [
    '2023', '2022', '2021', '2020'
  ]

  const handleClick = (section: Section) => {
    handleSectionChange(selectedSection === section ? null : section)
  }

  return (
    <>
      {/* Orbit 1: Skills */}
      <group ref={orbit1Ref}>
        {/* Category Label */}
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.4}
          color={colors.primary}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor={theme === 'night' ? '#000000' : '#ffffff'}
          outlineOpacity={0.5}
        >
          {t.nav.skills}
        </Text>
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2
          const radius = 3
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const color = i % 2 === 0 ? colors.primary : colors.secondary
          return (
            <OrbitCard
              key={`skill-${i}`}
              position={[x, 0, z]}
              label={skill}
              onClick={() => handleClick('skills')}
              color={color}
              theme={theme}
              type="skill"
            />
          )
        })}
      </group>

      {/* Orbit 2: Projects */}
      <group ref={orbit2Ref}>
        {/* Category Label */}
        <Text
          position={[0, 2, 0]}
          fontSize={0.4}
          color={colors.accent}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor={theme === 'night' ? '#000000' : '#ffffff'}
          outlineOpacity={0.5}
        >
          {t.nav.projects}
        </Text>
        {projects.map((project, i) => {
          const angle = (i / projects.length) * Math.PI * 2
          const radius = 4.5
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const color = i % 2 === 0 ? colors.accent : colors.energy
          return (
            <OrbitCard
              key={`project-${i}`}
              position={[x, 0, z]}
              label={project}
              onClick={() => handleClick('projects')}
              color={color}
              theme={theme}
              type="project"
            />
          )
        })}
      </group>

      {/* Orbit 3: Experience */}
      <group ref={orbit3Ref}>
        {/* Category Label */}
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.4}
          color={colors.secondary}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor={theme === 'night' ? '#000000' : '#ffffff'}
          outlineOpacity={0.5}
        >
          {t.nav.experience}
        </Text>
        {experiences.map((exp, i) => {
          const angle = (i / experiences.length) * Math.PI * 2
          const radius = 6
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          const color = i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent
          return (
            <OrbitCard
              key={`exp-${i}`}
              position={[x, 0, z]}
              label={exp}
              onClick={() => handleClick('experience')}
              color={color}
              theme={theme}
              type="experience"
            />
          )
        })}
      </group>

      {/* Connecting lines between orbits */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const startRadius = 3
        const endRadius = 6
        return (
          <line key={`connector-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  Math.cos(angle) * startRadius, 0, Math.sin(angle) * startRadius,
                  Math.cos(angle) * endRadius, 0, Math.sin(angle) * endRadius,
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={colors.primary}
              transparent
              opacity={theme === 'night' ? 0.15 : 0.08}
            />
          </line>
        )
      })}
    </>
  )
}

function OrbitCard({
  position,
  label,
  onClick,
  color,
  theme,
  type,
}: {
  position: [number, number, number]
  label: string
  onClick: () => void
  color: string
  theme: 'night' | 'light'
  type?: 'skill' | 'project' | 'experience'
}) {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.005
      const scale = hovered ? 1.3 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
  })

  const colorObj = new THREE.Color(color)
  
  // Calculate text position above the shape
  const textY = type === 'experience' ? 0.5 : type === 'project' ? 0.45 : 0.4

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main card */}
      <mesh>
        {type === 'experience' ? (
          <octahedronGeometry args={[0.3, 0]} />
        ) : type === 'project' ? (
          <tetrahedronGeometry args={[0.35, 0]} />
        ) : (
          <boxGeometry args={[0.4, 0.4, 0.15]} />
        )}
        <meshStandardMaterial
          color={theme === 'night' ? '#1a1a2e' : '#ffffff'}
          emissive={colorObj}
          emissiveIntensity={hovered ? (theme === 'night' ? 1.2 : 0.5) : (theme === 'night' ? 0.5 : 0.2)}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={theme === 'night' ? 0.9 : 0.7}
        />
      </mesh>

      {/* Glow effect */}
      <mesh>
        {type === 'experience' ? (
          <octahedronGeometry args={[0.35, 0]} />
        ) : type === 'project' ? (
          <tetrahedronGeometry args={[0.4, 0]} />
        ) : (
          <boxGeometry args={[0.45, 0.45, 0.2]} />
        )}
        <meshStandardMaterial
          color={colorObj}
          emissive={colorObj}
          emissiveIntensity={hovered ? (theme === 'night' ? 0.5 : 0.2) : (theme === 'night' ? 0.2 : 0.1)}
          transparent
          opacity={theme === 'night' ? 0.3 : 0.2}
        />
      </mesh>

      {/* Corner accents */}
      {type !== 'experience' && type !== 'project' && (
        <>
          {Array.from({ length: 4 }).map((_, i) => {
            const angle = (i / 4) * Math.PI * 2
            return (
              <mesh
                key={`corner-${i}`}
                position={[
                  Math.cos(angle) * 0.25,
                  Math.sin(angle) * 0.25,
                  0.1
                ]}
              >
                <sphereGeometry args={[0.03, 8, 8]} />
                <meshStandardMaterial
                  color={colorObj}
                  emissive={colorObj}
                  emissiveIntensity={theme === 'night' ? 2 : 0.8}
                />
              </mesh>
            )
          })}
        </>
      )}

      {/* Label text on each shape */}
      <Text
        position={[0, textY, 0]}
        fontSize={0.1}
        color={color}
        anchorX="center"
        anchorY="middle"
        maxWidth={1}
        outlineWidth={0.015}
        outlineColor={theme === 'night' ? '#000000' : '#ffffff'}
        outlineOpacity={0.6}
      >
        {label}
      </Text>
    </group>
  )
}

