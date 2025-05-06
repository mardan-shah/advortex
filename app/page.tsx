"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, ChevronRight, Globe, Sparkles, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { HeroGlobe } from "@/components/hero-globe"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ClientLogos } from "@/components/client-logos"

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive traffic, engagement, and conversions across digital channels.",
      link: "/services/digital-marketing",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
      title: "Brand Strategy",
      description: "Develop a compelling brand identity that resonates with your target audience and stands out.",
      link: "/services/brand-strategy",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-fuchsia-500" />,
      title: "Growth Marketing",
      description: "Data-driven approaches to scale your business and achieve sustainable growth.",
      link: "/services/growth-marketing",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Social Media",
      description: "Build community and drive engagement with strategic social media management.",
      link: "/services/social-media",
    },
  ]

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"
          />
          <HeroGlobe />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Award-Winning Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-500 to-cyan-400"
            >
              Transform Your <br />
              Digital Presence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-xl"
            >
              We craft cutting-edge marketing strategies that drive growth, engagement, and measurable results for
              forward-thinking brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                >
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronRight className="h-8 w-8 rotate-90 text-muted-foreground/50" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-b from-background to-background/95">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-4xl mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive marketing solutions tailored to your business goals
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <MagneticButton>
              <Button asChild variant="outline" className="group">
                <Link href="/services" className="inline-flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-background/95 to-background/90">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-4xl mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Success stories from businesses we've helped transform
            </motion.p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gradient-to-b from-background/90 to-background/80">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-lg font-medium mb-10 text-muted-foreground"
          >
            Trusted by Industry Leaders
          </motion.h3>

          <ClientLogos />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 z-0" />
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container relative z-10"
        >
          <div className="bg-background/40 backdrop-blur-lg border border-border/40 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-4">Ready to Elevate Your Brand?</h2>
                <p className="text-muted-foreground mb-6">
                  Let's collaborate to create a marketing strategy that drives real results for your business.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Customized marketing strategies",
                    "Data-driven approach",
                    "Dedicated account manager",
                    "Regular performance reports",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <div className="bg-background/70 backdrop-blur-sm border border-border/60 rounded-xl p-6 w-full max-w-md">
                  <h3 className="font-medium text-xl mb-4">Schedule a Free Consultation</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Our team will analyze your current marketing efforts and provide actionable insights.
                  </p>
                  <MagneticButton className="w-full">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                    >
                      <Link href="/book-call">Book Your Call Now</Link>
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
