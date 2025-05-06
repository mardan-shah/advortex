"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", label: "All" },
    { id: "branding", label: "Branding" },
    { id: "digital", label: "Digital Marketing" },
    { id: "social", label: "Social Media" },
    { id: "web", label: "Web Development" },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "TechVision Rebrand",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete brand transformation for a leading tech company.",
      results: ["150% increase in brand recognition", "200% increase in website traffic"],
      link: "/case-studies/tech-vision",
    },
    {
      id: 2,
      title: "GrowthLabs Digital Campaign",
      category: "digital",
      image: "/placeholder.svg?height=600&width=800",
      description: "Multi-channel digital marketing campaign to drive user acquisition.",
      results: ["300% ROI", "25,000 new leads generated"],
      link: "/case-studies/growth-labs",
    },
    {
      id: 3,
      title: "EcoFriendly Social Strategy",
      category: "social",
      image: "/placeholder.svg?height=600&width=800",
      description: "Comprehensive social media strategy for sustainable product launch.",
      results: ["500% increase in engagement", "1M+ organic impressions"],
      link: "/case-studies/eco-friendly",
    },
    {
      id: 4,
      title: "Innovate Inc Website Redesign",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete website overhaul with focus on conversion optimization.",
      results: ["75% increase in conversion rate", "50% reduction in bounce rate"],
      link: "/case-studies/innovate-inc",
    },
    {
      id: 5,
      title: "FitLife App Launch",
      category: "digital",
      image: "/placeholder.svg?height=600&width=800",
      description: "Integrated marketing campaign for fitness app launch.",
      results: ["100,000+ downloads in first month", "Featured in App Store"],
      link: "/case-studies/fit-life",
    },
    {
      id: 6,
      title: "Luxury Brand Identity",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Premium brand identity for high-end fashion retailer.",
      results: ["35% increase in average order value", "Expanded to 3 new markets"],
      link: "/case-studies/luxury-brand",
    },
  ]

  const filteredCaseStudies = filter === "all" ? caseStudies : caseStudies.filter((study) => study.category === filter)

  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Case Studies
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Explore our portfolio of successful projects and see how we've helped businesses achieve their marketing
              goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={
                  filter === category.id ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-0" : ""
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredCaseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Link href={study.link} className="block h-full">
                    <div className="relative h-full overflow-hidden rounded-lg border border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-background/70 backdrop-blur-sm">
                            {categories.find((c) => c.id === study.category)?.label}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{study.description}</p>

                        <div className="space-y-2 mb-4">
                          {study.results.map((result, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{result}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center text-sm font-medium text-primary">
                          View Case Study
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-border/40 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">Ready to Be Our Next Success Story?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to create a marketing strategy that drives real results for your business.
              </p>
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                >
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
