"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, Github, Mail } from "lucide-react"

import { cn } from "@/lib/utils"

interface SocialLink {
  platform: string
  url: string
}

interface TeamCardProps {
  name: string
  role: string
  bio: string
  image: string
  index: number
  socials?: SocialLink[]
}

export function TeamCard({ name, role, bio, image, index, socials = [] }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "facebook":
        return <Facebook className="h-4 w-4" />
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      case "github":
        return <Github className="h-4 w-4" />
      case "email":
        return <Mail className="h-4 w-4" />
      default:
        return <Linkedin className="h-4 w-4" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="team-card"
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          rotateY: 5,
          rotateX: 5,
          z: 10,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="h-full"
      >
        <div
          className={cn(
            "h-full border border-border/40 bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300",
            isHovered && "border-primary/40 shadow-lg shadow-primary/10",
          )}
        >
          <div className="relative h-80 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-500"
              style={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            />
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300",
                isHovered && "opacity-100",
              )}
            />

            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-3 translate-y-full transition-transform duration-300",
                isHovered && "translate-y-0",
              )}
            >
              {socials.length > 0
                ? socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background/90 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      {getSocialIcon(social.platform)}
                    </motion.a>
                  ))
                : // Default social icons if none provided
                  [
                    { platform: "linkedin", url: "#" },
                    { platform: "twitter", url: "#" },
                    { platform: "email", url: "#" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.url}
                      className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background/90 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      {getSocialIcon(social.platform)}
                    </motion.a>
                  ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-medium">{name}</h3>
            <p className="text-primary text-sm mb-2">{role}</p>
            <p className="text-muted-foreground text-sm">{bio}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
