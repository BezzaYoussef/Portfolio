'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeProvider'

export function DataStreams() {
  const streamsRef = useRef<THREE.Group>(null)
  const { theme } = useTheme()

  const streams = useMemo(() => {
    const count = 20
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2
      const radius = 2 + Math.random() * 2
      const height = (Math.random() - 0.5) * 3
      
      // Keep vibrant colors in both modes
      const colors = ['#00d4ff', '#7b2ff7', '#ff00ff', '#00ffff', '#00ff88']
      
      return {
        position: new THREE.Vector3(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ),
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.5 + Math.random() * 0.5,
        size: 0.02 + Math.random() * 0.03,
      }
    })
  }, [theme])

  useFrame((state) => {
    if (streamsRef.current) {
      streamsRef.current.rotation.y += 0.001
      streamsRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const stream = streams[i]
          child.position.y += Math.sin(state.clock.elapsedTime * stream.speed) * 0.01
        }
      })
    }
  })

  return (
    <group ref={streamsRef}>
      {streams.map((stream, i) => (
        <mesh key={`stream-${i}`} position={stream.position}>
          <sphereGeometry args={[stream.size, 8, 8]} />
          <meshStandardMaterial
            color={stream.color}
            emissive={stream.color}
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  )
}

