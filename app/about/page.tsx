"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Award, Clock, Heart, Lightbulb, Target, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { TeamCard } from "@/components/team-card"

export default function AboutPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])

  const values = [
    {
      icon: <Target className="h-8 w-8 text-purple-500" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that drive business growth.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-cyan-400" />,
      title: "Innovation",
      description: "We stay ahead of trends to deliver cutting-edge marketing solutions.",
    },
    {
      icon: <Heart className="h-8 w-8 text-fuchsia-500" />,
      title: "Client-Centric",
      description: "Your success is our success. We're committed to exceeding expectations.",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Agility",
      description: "We adapt quickly to market changes and evolving client needs.",
    },
  ]

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "15+ years of experience in digital marketing and brand strategy.",
      image: "/placeholder.svg?height=400&width=300&text=CEO",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" },
        { platform: "email", url: "mailto:alex@advortex.com" },
      ],
    },
    {
      name: "Jamie Chen",
      role: "Creative Director",
      bio: "Award-winning designer with a passion for creating memorable brand experiences.",
      image: "/placeholder.svg?height=400&width=300&text=Creative+Director",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "instagram", url: "https://instagram.com" },
        { platform: "github", url: "https://github.com" },
      ],
    },
    {
      name: "Taylor Wilson",
      role: "Head of Strategy",
      bio: "Data-driven strategist who transforms insights into actionable marketing plans.",
      image: "/placeholder.svg?height=400&width=300&text=Strategy+Lead",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Jordan Smith",
      role: "Technical Lead",
      bio: "Expert in marketing technology and implementing innovative digital solutions.",
      image: "/placeholder.svg?height=400&width=300&text=Tech+Lead",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "github", url: "https://github.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Morgan Lee",
      role: "SEO Specialist",
      bio: "Search engine optimization expert with a track record of improving rankings.",
      image: "/placeholder.svg?height=400&width=300&text=SEO+Expert",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Casey Johnson",
      role: "Content Strategist",
      bio: "Storyteller who crafts compelling narratives that engage and convert audiences.",
      image: "/placeholder.svg?height=400&width=300&text=Content+Strategist",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "instagram", url: "https://instagram.com" },
      ],
    },
    {
      name: "Riley Thompson",
      role: "Social Media Manager",
      bio: "Social media expert who builds communities and drives engagement across platforms.",
      image: "/placeholder.svg?height=400&width=300&text=Social+Media",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "instagram", url: "https://instagram.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Avery Martinez",
      role: "Data Analyst",
      bio: "Analytics specialist who turns complex data into actionable marketing insights.",
      image: "/placeholder.svg?height=400&width=300&text=Data+Analyst",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "github", url: "https://github.com" },
      ],
    },
    {
      name: "Quinn Roberts",
      role: "UX Designer",
      bio: "User experience designer focused on creating intuitive and engaging digital experiences.",
      image: "/placeholder.svg?height=400&width=300&text=UX+Designer",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "instagram", url: "https://instagram.com" },
        { platform: "github", url: "https://github.com" },
      ],
    },
    {
      name: "Sam Patel",
      role: "PPC Specialist",
      bio: "Pay-per-click advertising expert who maximizes ROI across digital ad platforms.",
      image: "/placeholder.svg?height=400&width=300&text=PPC+Specialist",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Drew Wilson",
      role: "Email Marketing Specialist",
      bio: "Email campaign strategist who drives conversions through personalized messaging.",
      image: "/placeholder.svg?height=400&width=300&text=Email+Marketing",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" },
      ],
    },
    {
      name: "Cameron Blake",
      role: "Video Production Lead",
      bio: "Video storyteller who creates compelling visual content for brands.",
      image: "/placeholder.svg?height=400&width=300&text=Video+Production",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "instagram", url: "https://instagram.com" },
      ],
    },
  ]

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "Advortex was established with a mission to transform digital marketing.",
    },
    {
      year: "2017",
      title: "First Major Client",
      description: "Partnered with a Fortune 500 company, leading to 300% growth.",
    },
    {
      year: "2019",
      title: "International Expansion",
      description: "Opened offices in London and Singapore to serve global clients.",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Won multiple awards for innovative marketing campaigns.",
    },
    {
      year: "2023",
      title: "Technology Innovation",
      description: "Launched proprietary marketing analytics platform.",
    },
    {
      year: "2025",
      title: "Looking Forward",
      description: "Continuing to push boundaries in digital marketing excellence.",
    },
  ]

  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section ref={targetRef} className="relative py-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6"
              >
                We Are{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                  Advortex
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                A team of passionate marketers, strategists, and creatives dedicated to transforming brands through
                innovative digital solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-12 w-12 rounded-full border-2 border-background overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=100&width=100&text=Team${i}`}
                          alt={`Team member ${i}`}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Meet our team of experts</p>
                    <p className="text-xs text-muted-foreground">Passionate about your success</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                    >
                      <Link href="/contact">
                        Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>
            </div>

            <div className="relative h-[500px] w-full">
              <motion.div style={{ y: y1 }} className="absolute top-0 left-[10%] h-64 w-48 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=200&text=Team+Meeting"
                  alt="Team at work"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                style={{ y: y2 }}
                className="absolute top-[20%] right-[10%] h-72 w-56 rounded-lg overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=300&width=200&text=Office+Space"
                  alt="Office space"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                style={{ y: y3 }}
                className="absolute bottom-0 left-[20%] h-60 w-64 rounded-lg overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=300&width=200&text=Creative+Process"
                  alt="Creative process"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-6"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              From humble beginnings to industry leadership
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} md:justify-between`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:order-1"}`}>
                    <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-primary font-medium">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-b from-background/90 to-background/80">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-4xl mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              The talented individuals behind our success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                index={index}
                socials={member.socials}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-medium mb-4">Join Our Team</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals to join our growing team. Check out our open positions.
              </p>
              <MagneticButton>
                <Button asChild variant="outline" className="group">
                  <Link href="/careers" className="inline-flex items-center">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-gradient-to-b from-background/80 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-4xl mb-4"
            >
              Awards & Recognition
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Our commitment to excellence has been recognized by the industry
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 flex items-center gap-4"
              >
                <Award className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-medium">Marketing Excellence Award {2020 + i}</h3>
                  <p className="text-sm text-muted-foreground">For outstanding campaign performance</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
