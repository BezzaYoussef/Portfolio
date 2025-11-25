'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeProvider'

export function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const { theme } = useTheme()

  const { positions, velocities, colors } = useMemo(() => {
    const count = 300
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    // Color palette - keep vibrant colors in both modes
    const colorPalette = [
      new THREE.Color(0x00d4ff), // Cyan
      new THREE.Color(0x7b2ff7), // Purple
      new THREE.Color(0xff00ff), // Magenta
      new THREE.Color(0x00ffff), // Bright cyan
      new THREE.Color(0x00ff88), // Green-cyan
    ]

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Random position in a sphere
      const radius = 8 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // Random velocity with some direction
      const speed = 0.005 + Math.random() * 0.01
      velocities[i3] = (Math.random() - 0.5) * speed
      velocities[i3 + 1] = (Math.random() - 0.5) * speed
      velocities[i3 + 2] = (Math.random() - 0.5) * speed

      // Assign random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return { positions, velocities, colors }
  }, [])

  const velocitiesRef = useRef(velocities)
  const timeRef = useRef(0)

  useFrame((state) => {
    if (particlesRef.current) {
      timeRef.current += 0.01
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const velocities = velocitiesRef.current

      for (let i = 0; i < positions.length; i += 3) {
        // Update position
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        // Add subtle orbital motion
        const distance = Math.sqrt(
          positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2
        )
        
        // Wrap around if too far
        if (distance > 15) {
          const scale = 8 / distance
          positions[i] *= scale
          positions[i + 1] *= scale
          positions[i + 2] *= scale
        }

        // Add pulsing effect
        const pulse = Math.sin(timeRef.current + i * 0.1) * 0.1 + 1
        positions[i] *= pulse
        positions[i + 1] *= pulse
        positions[i + 2] *= pulse
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors={true}
        transparent
        opacity={0.7}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
