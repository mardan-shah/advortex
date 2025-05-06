"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  const logos = Array.from({ length: 8 }).map((_, i) => `/placeholder.svg?height=60&width=120`)

  return (
    <div ref={containerRef} className="overflow-hidden py-10">
      <motion.div style={{ x: x1 }} className="flex gap-8 mb-8">
        {logos.map((logo, i) => (
          <div
            key={`logo1-${i}`}
            className="flex-shrink-0 h-12 w-32 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image src={logo || "/placeholder.svg"} alt={`Client logo ${i + 1}`} fill className="object-contain" />
          </div>
        ))}
      </motion.div>

      <motion.div style={{ x: x2 }} className="flex gap-8">
        {logos.reverse().map((logo, i) => (
          <div
            key={`logo2-${i}`}
            className="flex-shrink-0 h-12 w-32 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image src={logo || "/placeholder.svg"} alt={`Client logo ${i + 9}`} fill className="object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
