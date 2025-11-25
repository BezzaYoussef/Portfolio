'use client'

import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '@/contexts/ThemeProvider'

export function CameraController() {
  const { camera } = useThree()
  const { theme } = useTheme()
  const targetPosition = useRef(new THREE.Vector3(0, 0, 8))

  useEffect(() => {
    // Smooth camera movement
    const animate = () => {
      camera.position.lerp(targetPosition.current, 0.05)
      camera.lookAt(0, 0, 0)
    }
    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [camera])

  // Adjust camera based on theme
  useEffect(() => {
    if (theme === 'night') {
      targetPosition.current.set(0, 0, 8)
    } else {
      targetPosition.current.set(0, 0, 9)
    }
  }, [theme])

  return null
}

