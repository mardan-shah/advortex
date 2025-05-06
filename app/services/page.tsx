"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  BarChart,
  Globe,
  Megaphone,
  Palette,
  Search,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
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
      icon: <Palette className="h-8 w-8 text-cyan-400" />,
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
      icon: <Search className="h-8 w-8 text-purple-500" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      link: "/services/seo",
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "Social Media",
      description: "Build community and drive engagement with strategic social media management.",
      link: "/services/social-media",
    },
    {
      icon: <Megaphone className="h-8 w-8 text-fuchsia-500" />,
      title: "Content Marketing",
      description: "Create valuable content that attracts, engages, and converts your target audience.",
      link: "/services/content-marketing",
    },
    {
      icon: <BarChart className="h-8 w-8 text-purple-500" />,
      title: "Analytics & Insights",
      description: "Turn data into actionable insights to optimize your marketing performance.",
      link: "/services/analytics",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-cyan-400" />,
      title: "Mobile Marketing",
      description: "Reach customers on their mobile devices with targeted campaigns and experiences.",
      link: "/services/mobile-marketing",
    },
  ]

  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section ref={targetRef} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6"
              >
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                  Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                Comprehensive marketing solutions tailored to your business goals. We combine creativity, strategy, and
                technology to deliver exceptional results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
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

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-[400px] w-full rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Our services" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-background/30 backdrop-blur-md border border-border/40 rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Tailored Solutions</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Every service is customized to meet your specific business needs and objectives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Comprehensive marketing solutions to help your business thrive
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Process */}
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
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              How we deliver exceptional results for our clients
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] w-full rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our process" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We start by understanding your business, goals, target audience, and competitive landscape.",
                },
                {
                  number: "02",
                  title: "Strategy",
                  description:
                    "Based on our findings, we develop a customized marketing strategy aligned with your objectives.",
                },
                {
                  number: "03",
                  title: "Implementation",
                  description: "Our team executes the strategy with precision, creativity, and attention to detail.",
                },
                {
                  number: "04",
                  title: "Optimization",
                  description:
                    "We continuously monitor performance, analyze data, and make adjustments to maximize results.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-primary font-medium">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-background/90 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-border/40 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl mb-4">Ready to Transform Your Marketing?</h2>
                  <p className="text-muted-foreground mb-6">
                    Let's collaborate to create a marketing strategy that drives real results for your business.
                  </p>
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                    >
                      <Link href="/contact">
                        Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Get started" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
