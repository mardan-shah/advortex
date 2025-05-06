"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function Points() {
  const { theme } = useTheme()
  const ref = useRef<THREE.Points>(null!)
  const sphere = new THREE.SphereGeometry(1.5, 48, 48)

  useFrame((state) => {
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.05
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.08
  })

  const count = 2500
  const positions = new Float32Array(count * 3)
  const radius = 1.5

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const phi = Math.acos(-1 + (2 * i) / count)
    const theta = Math.sqrt(count * Math.PI) * phi

    positions[i3] = radius * Math.cos(theta) * Math.sin(phi)
    positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
    positions[i3 + 2] = radius * Math.cos(phi)
  }

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <PointMaterial
        transparent
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        color={theme === "dark" ? "#9333ea" : "#6366f1"}
      />
    </points>
  )
}

export function HeroGlobe() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <Points />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
