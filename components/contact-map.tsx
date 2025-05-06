"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Text } from "@react-three/drei"

function MapPin({ position, label, color = "#9333ea" }) {
  return (
    <group position={position}>
      <mesh position={[0, 1, 0]}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Regular.json"
      >
        {label}
      </Text>
    </group>
  )
}

function MapScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Map base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Grid lines */}
      <gridHelper args={[20, 20, "#333333", "#222222"]} position={[0, -0.49, 0]} />

      {/* Map pins */}
      <MapPin position={[0, 0, 0]} label="Advortex HQ" />
      <MapPin position={[3, 0, 2]} label="Client A" color="#22d3ee" />
      <MapPin position={[-2, 0, -3]} label="Client B" />
      <MapPin position={[-4, 0, 1]} label="Client C" color="#22d3ee" />
      <MapPin position={[4, 0, -2]} label="Client D" />

      <Environment preset="city" />
    </>
  )
}

export function ContactMap() {
  return (
    <div className="h-full w-full bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <MapScene />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
