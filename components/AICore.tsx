'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeProvider'

export function AICore() {
  const coreRef = useRef<THREE.Group>(null)
  const innerCoreRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()

  // Create enhanced neural network nodes with multiple layers
  const { nodes, edges, nodeColors } = useMemo(() => {
    const nodeCount = 80
    const nodes: THREE.Vector3[] = []
    const edges: [THREE.Vector3, THREE.Vector3, number][] = []
    const nodeColors: THREE.Color[] = []

    // Generate nodes on multiple sphere layers
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 1.2 + (i % 3) * 0.3 // Multiple layers
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      nodes.push(new THREE.Vector3(x, y, z))
      
      // Assign colors based on position
      const color = new THREE.Color()
      const hue = (i / nodeCount) * 0.5 + 0.5 // Cyan to blue range
      color.setHSL(hue, 0.8, 0.6)
      nodeColors.push(color)
    }

    // Connect nearby nodes with weights
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j])
        if (distance < 0.9) {
          const weight = 1 - distance / 0.9
          edges.push([nodes[i], nodes[j], weight])
        }
      }
    }

    return { nodes, edges, nodeColors }
  }, [])

  useFrame((state) => {
    if (coreRef.current) {
      const speed = typeof window !== 'undefined' && window.innerWidth < 768 ? 0.001 : 0.002
      coreRef.current.rotation.x += speed
      coreRef.current.rotation.y += speed * 1.5
    }
    
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.x += 0.003
      innerCoreRef.current.rotation.y += 0.004
      innerCoreRef.current.rotation.z += 0.002
    }
  })

  // Color palette - keep vibrant colors in both modes
  const colors = {
    primary: new THREE.Color(0x00d4ff), // Cyan
    secondary: new THREE.Color(0x7b2ff7), // Purple
    accent: new THREE.Color(0xff00ff), // Magenta
    glow: new THREE.Color(0x00ffff), // Bright cyan
    energy: new THREE.Color(0x00ff88), // Green-cyan
  }

  return (
    <group ref={coreRef}>
      {/* Outer glow sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color={colors.primary}
          emissive={colors.glow}
          emissiveIntensity={theme === 'night' ? 0.2 : 0.1}
          transparent
          opacity={theme === 'night' ? 0.15 : 0.1}
        />
      </mesh>

      {/* Main core sphere with gradient effect */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={theme === 'night' ? '#0a0a1a' : '#ffffff'}
          emissive={colors.primary}
          emissiveIntensity={theme === 'night' ? 0.4 : 0.15}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={theme === 'night' ? 0.7 : 0.4}
        />
      </mesh>

      {/* Inner rotating core */}
      <mesh ref={innerCoreRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color={colors.secondary}
          emissive={colors.accent}
          emissiveIntensity={theme === 'night' ? 0.6 : 0.2}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={theme === 'night' ? 0.8 : 0.5}
        />
      </mesh>

      {/* Neural network nodes with colors */}
      {nodes.map((node, i) => {
        const color = nodeColors[i]
        const size = 0.04 + (i % 3) * 0.01
        return (
          <mesh key={`node-${i}`} position={node}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={theme === 'night' ? 1.5 : 0.5}
            />
          </mesh>
        )
      })}

      {/* Enhanced neural network edges with animated flow */}
      {edges.map((edge, i) => {
        const start = edge[0]
        const end = edge[1]
        const weight = edge[2]
        const color = new THREE.Color().lerpColors(
          colors.primary,
          colors.secondary,
          weight
        )

        return (
          <line key={`edge-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([start.x, start.y, start.z, end.x, end.y, end.z])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={color}
              transparent
              opacity={theme === 'night' ? 0.3 + weight * 0.3 : 0.15 + weight * 0.15}
              linewidth={weight * 2}
            />
          </line>
        )
      })}

      {/* Flowing data streams with multiple colors */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        const radius = 1.4
        const height = Math.sin(i * 0.5) * 0.3
        const streamColor = i % 3 === 0 
          ? colors.primary 
          : i % 3 === 1 
          ? colors.secondary 
          : colors.energy
        
        return (
          <mesh 
            key={`stream-${i}`} 
            position={[
              Math.cos(angle) * radius, 
              Math.sin(angle) * radius + height, 
              Math.cos(angle * 2) * 0.2
            ]}
          >
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial
              color={streamColor}
              emissive={streamColor}
              emissiveIntensity={theme === 'night' ? 2.5 : 0.8}
            />
          </mesh>
        )
      })}

      {/* Energy rings */}
      {Array.from({ length: 3 }).map((_, i) => {
        const radius = 1.3 + i * 0.2
        const ringColor = i === 0 ? colors.primary : i === 1 ? colors.secondary : colors.accent
        return (
          <mesh key={`ring-${i}`} rotation={[Math.PI / 2, 0, i * Math.PI / 3]}>
            <torusGeometry args={[radius, 0.01, 8, 32]} />
            <meshStandardMaterial
              color={ringColor}
              emissive={ringColor}
              emissiveIntensity={theme === 'night' ? 0.8 : 0.3}
              transparent
              opacity={theme === 'night' ? 0.6 : 0.3}
            />
          </mesh>
        )
      })}

      {/* Pulsing energy orbs */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const distance = 1.6
        const orbColor = i % 2 === 0 ? colors.energy : colors.accent
        return (
          <mesh 
            key={`orb-${i}`}
            position={[
              Math.cos(angle) * distance,
              Math.sin(angle * 2) * 0.5,
              Math.sin(angle) * distance
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color={orbColor}
              emissive={orbColor}
              emissiveIntensity={theme === 'night' ? 3 : 1}
            />
          </mesh>
        )
      })}
    </group>
  )
}
