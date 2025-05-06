"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  index: number
}

export function ServiceCard({ icon, title, description, link, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
          z: 10,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="h-full"
      >
        <Card
          className={cn(
            "h-full border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 overflow-hidden",
            isHovered && "border-primary/40 shadow-lg shadow-primary/10",
          )}
        >
          <CardHeader>
            <div className="mb-2">{icon}</div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              href={link}
              className={cn(
                "inline-flex items-center text-sm font-medium transition-colors",
                isHovered ? "text-primary" : "text-muted-foreground",
              )}
            >
              Learn more
              <ArrowRight className={cn("ml-1 h-4 w-4 transition-transform", isHovered && "translate-x-1")} />
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  )
}
