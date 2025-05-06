"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Building, Clock, DollarSign, Globe, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MagneticButton } from "@/components/magnetic-button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const departments = [
    { id: "all", label: "All Departments" },
    { id: "marketing", label: "Marketing" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "sales", label: "Sales" },
  ]

  const jobListings = [
    {
      id: 1,
      title: "Senior Digital Marketing Strategist",
      department: "marketing",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      posted: "2 days ago",
      description:
        "We're looking for an experienced digital marketing strategist to develop and implement comprehensive marketing strategies for our clients.",
      responsibilities: [
        "Develop and execute digital marketing strategies",
        "Analyze campaign performance and optimize for results",
        "Collaborate with creative and development teams",
        "Present strategies and results to clients",
      ],
      requirements: [
        "5+ years of experience in digital marketing",
        "Strong analytical skills and experience with marketing tools",
        "Excellent communication and presentation skills",
        "Bachelor's degree in Marketing or related field",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "design",
      location: "Remote",
      type: "Full-time",
      salary: "$80,000 - $110,000",
      posted: "1 week ago",
      description:
        "Join our creative team to design intuitive and engaging user experiences for websites and digital products.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with developers to implement designs",
        "Maintain design systems and documentation",
      ],
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in design tools like Figma and Adobe Creative Suite",
        "Portfolio demonstrating strong design skills",
        "Experience with responsive design and accessibility",
      ],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      department: "development",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100,000 - $140,000",
      posted: "3 days ago",
      description:
        "We're seeking a talented full stack developer to build and maintain web applications for our clients.",
      responsibilities: [
        "Develop and maintain web applications",
        "Write clean, efficient, and well-documented code",
        "Collaborate with designers and other developers",
        "Troubleshoot and debug applications",
      ],
      requirements: [
        "4+ years of experience in full stack development",
        "Proficiency in JavaScript, React, Node.js, and other modern frameworks",
        "Experience with database design and management",
        "Strong problem-solving skills",
      ],
    },
    {
      id: 4,
      title: "Account Manager",
      department: "sales",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      posted: "1 week ago",
      description: "We're looking for an account manager to maintain client relationships and drive business growth.",
      responsibilities: [
        "Manage client relationships and serve as the primary point of contact",
        "Identify opportunities for upselling and cross-selling",
        "Develop and present proposals to clients",
        "Monitor project progress and ensure client satisfaction",
      ],
      requirements: [
        "3+ years of experience in account management or client services",
        "Strong communication and relationship-building skills",
        "Experience in marketing or advertising industry",
        "Bachelor's degree in Business, Marketing, or related field",
      ],
    },
    {
      id: 5,
      title: "Content Strategist",
      department: "marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$75,000 - $95,000",
      posted: "5 days ago",
      description:
        "Join our team to develop and implement content strategies that engage audiences and drive conversions.",
      responsibilities: [
        "Develop content strategies aligned with marketing goals",
        "Create editorial calendars and content plans",
        "Write and edit high-quality content",
        "Analyze content performance and optimize strategies",
      ],
      requirements: [
        "3+ years of experience in content strategy or content marketing",
        "Excellent writing and editing skills",
        "Experience with SEO and content management systems",
        "Strong analytical skills",
      ],
    },
    {
      id: 6,
      title: "Social Media Manager",
      department: "marketing",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      posted: "2 weeks ago",
      description:
        "We're seeking a creative social media manager to develop and implement social media strategies for our clients.",
      responsibilities: [
        "Develop and implement social media strategies",
        "Create and schedule engaging content",
        "Monitor social media trends and platform changes",
        "Analyze performance and provide recommendations",
      ],
      requirements: [
        "3+ years of experience in social media management",
        "Experience with social media management tools",
        "Strong copywriting and visual content creation skills",
        "Understanding of social media analytics",
      ],
    },
  ]

  const filterJobs = (jobs, department, query) => {
    return jobs.filter((job) => {
      const matchesDepartment = department === "all" || job.department === department
      const matchesSearch =
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase())
      return matchesDepartment && matchesSearch
    })
  }

  const filteredJobs = filterJobs(jobListings, activeTab, searchQuery)

  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
          <Image
            src="/placeholder.svg?height=1200&width=1920&text=Join+Our+Team"
            alt="Careers Hero Background"
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Join Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Build your career at Advortex and work with talented individuals on exciting projects that make a
              difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                  onClick={() => document.getElementById("job-listings").scrollIntoView({ behavior: "smooth" })}
                >
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Join Advortex?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We offer more than just a job – we provide a career with growth opportunities and a supportive environment
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-purple-500" />,
                title: "Innovative Work",
                description:
                  "Work on cutting-edge marketing campaigns for industry-leading clients that push the boundaries of creativity and technology.",
              },
              {
                icon: <Building className="h-10 w-10 text-cyan-400" />,
                title: "Growth Opportunities",
                description:
                  "We invest in your professional development with mentorship programs, training resources, and clear career advancement paths.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-fuchsia-500" />,
                title: "Competitive Benefits",
                description:
                  "Enjoy competitive salaries, comprehensive health benefits, retirement plans, flexible work arrangements, and generous PTO.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="mb-6 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl mb-6">Our Culture & Values</h2>
              <p className="text-muted-foreground mb-6">
                At Advortex, we believe that a positive and inclusive culture is the foundation of our success. We
                foster an environment where creativity thrives, innovation is encouraged, and every team member feels
                valued and supported.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Collaboration",
                    description:
                      "We work together across disciplines, sharing knowledge and expertise to deliver exceptional results.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We embrace new ideas and technologies, constantly pushing the boundaries of what's possible.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "We strive for excellence in everything we do, setting high standards and exceeding expectations.",
                  },
                  {
                    title: "Diversity & Inclusion",
                    description:
                      "We celebrate diversity and create an inclusive environment where everyone can thrive.",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h3 className="font-medium">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <MagneticButton>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=300&text=Team+Building"
                    alt="Team building activity"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=300&text=Office+Space"
                    alt="Office space"
                    width={300}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=300&text=Team+Collaboration"
                    alt="Team collaboration"
                    width={300}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=300&text=Company+Event"
                    alt="Company event"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="job-listings" className="py-24 bg-gradient-to-b from-background/95 to-background/90">
        <div className="container">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-4xl mb-4"
            >
              Open Positions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Find your perfect role and join our team of talented professionals
            </motion.p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-2 md:flex md:flex-row">
                {departments.map((dept) => (
                  <TabsTrigger key={dept.id} value={dept.id}>
                    {dept.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="relative w-full md:w-64">
              <Input
                type="search"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" /> {job.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" /> {job.salary}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> Posted {job.posted}
                        </Badge>
                      </div>
                    </div>
                    <MagneticButton className="mt-4 md:mt-0">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                      >
                        <Link href={`/careers/${job.id}`}>
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </div>

                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Responsibilities:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">No positions found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We couldn't find any positions matching your criteria. Please try adjusting your search or check back
                  later for new opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              Our Application Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Here's what to expect when you apply for a position at Advortex
            </motion.p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Application",
                description: "Submit your application with your resume and cover letter through our online portal.",
              },
              {
                step: "02",
                title: "Initial Screening",
                description: "Our HR team will review your application and reach out for an initial phone interview.",
              },
              {
                step: "03",
                title: "Interviews",
                description:
                  "You'll meet with the hiring manager and team members for in-depth discussions about your experience and skills.",
              },
              {
                step: "04",
                title: "Offer & Onboarding",
                description: "If selected, you'll receive an offer and begin our comprehensive onboarding process.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-medium">{step.step}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl md:text-3xl mb-4">Have Questions?</h2>
              <p className="text-muted-foreground">
                If you have any questions about our open positions or the application process, feel free to reach out to
                our HR team.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Question about job application" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="Type your question here..." rows={5} />
              </div>

              <MagneticButton>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 group"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </MagneticButton>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
