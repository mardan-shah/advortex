"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Advortex transformed our digital presence completely. Their strategic approach to marketing helped us increase our conversion rate by 150% in just three months.",
    author: "Sarah Johnson",
    role: "CEO, TechVision",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with Advortex has been a game-changer for our brand. Their creative team developed a stunning visual identity that perfectly captures our company's values.",
    author: "Michael Chen",
    role: "Marketing Director, Innovate Inc",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The ROI we've seen since partnering with Advortex has exceeded all expectations. Their data-driven approach to marketing delivers real, measurable results.",
    author: "Emma Rodriguez",
    role: "Founder, GrowthLabs",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="border-border/40 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              <Quote className="h-12 w-12 text-primary/40 mb-6" />
              <p className="text-xl md:text-2xl mb-8 italic">"{testimonials[current].quote}"</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[current].avatar || "/placeholder.svg"}
                    alt={testimonials[current].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonials[current].author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="rounded-full border-border/40 bg-background/50 backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="rounded-full border-border/40 bg-background/50 backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
