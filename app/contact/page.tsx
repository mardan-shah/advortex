"use client"

import Link from "next/link"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MagneticButton } from "@/components/magnetic-button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: "",
    services: [],
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const services = [...prev.services]
      if (services.includes(service)) {
        return { ...prev, services: services.filter((s) => s !== service) }
      } else {
        return { ...prev, services: [...services, service] }
      }
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: "",
        message: "",
        services: [],
      })

      // Show success message
      setShowSuccess(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
          <Image
            src="/placeholder.svg?height=1200&width=1920&text=Contact+Us"
            alt="Contact Hero Background"
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
              Get in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Have a project in mind? Let's discuss how we can help you achieve your marketing goals.
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
                  onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })}
                >
                  Send a Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-call">Schedule a Call</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Phone className="h-8 w-8 text-primary" />,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                description: "Mon-Fri from 9am to 6pm",
              },
              {
                icon: <Mail className="h-8 w-8 text-primary" />,
                title: "Email Us",
                info: "hello@advortex.com",
                description: "We'll respond within 24 hours",
              },
              {
                icon: <MapPin className="h-8 w-8 text-primary" />,
                title: "Visit Us",
                info: "123 Marketing St, Suite 100",
                description: "San Francisco, CA 94103",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="font-medium mb-1">{item.info}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
              id="contact-form"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"></div>

              <div className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-bl from-purple-500/20 to-transparent transform rotate-45 translate-x-16 -translate-y-8"></div>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center justify-between">
                        Your Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center justify-between">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Services You're Interested In</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Digital Marketing",
                        "Brand Strategy",
                        "Web Development",
                        "SEO Optimization",
                        "Social Media",
                        "Content Creation",
                      ].map((service) => (
                        <div
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`
                            cursor-pointer rounded-md border p-2 text-sm text-center transition-all
                            ${
                              formData.services.includes(service)
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }
                          `}
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Project Budget</Label>
                    <RadioGroup
                      name="budget"
                      value={formData.budget}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                      className="flex flex-wrap gap-6"
                    >
                      {["$5K - $10K", "$10K - $25K", "$25K - $50K", "$50K+"].map((budget) => (
                        <div key={budget} className="flex items-center space-x-2">
                          <RadioGroupItem value={budget} id={budget.replace(/\s+/g, "")} />
                          <Label htmlFor={budget.replace(/\s+/g, "")}>{budget}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center justify-between">
                      Your Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <MagneticButton>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 group"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                  </MagneticButton>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Static Map Image instead of 3D Map */}
              <div className="h-[500px] rounded-lg overflow-hidden relative bg-background/50 backdrop-blur-sm border border-border/40 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-background/80"></div>
                <Image
                  src="/placeholder.svg?height=1000&width=1000&text=Interactive+Map"
                  alt="Office locations map"
                  fill
                  className="object-cover opacity-80"
                />

                {/* Map Pins */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-purple-500 animate-ping absolute"></div>
                    <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                  </div>
                  <div className="mt-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium">
                    Advortex HQ
                  </div>
                  <div className="hidden group-hover:block absolute top-full mt-2 bg-background/90 backdrop-blur-md border border-border/40 rounded-md p-3 w-48 z-10">
                    <p className="text-sm font-medium">Advortex Headquarters</p>
                    <p className="text-xs text-muted-foreground">123 Marketing St, Suite 100</p>
                    <p className="text-xs text-muted-foreground">San Francisco, CA 94103</p>
                  </div>
                </div>

                <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 animate-ping absolute"></div>
                    <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
                  </div>
                  <div className="mt-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium">
                    Client A
                  </div>
                  <div className="hidden group-hover:block absolute top-full mt-2 bg-background/90 backdrop-blur-md border border-border/40 rounded-md p-3 w-48 z-10">
                    <p className="text-sm font-medium">TechVision Inc</p>
                    <p className="text-xs text-muted-foreground">456 Innovation Ave</p>
                    <p className="text-xs text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>

                <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-purple-500 animate-ping absolute"></div>
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                  </div>
                  <div className="mt-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium">
                    Client B
                  </div>
                  <div className="hidden group-hover:block absolute top-full mt-2 bg-background/90 backdrop-blur-md border border-border/40 rounded-md p-3 w-48 z-10">
                    <p className="text-sm font-medium">GrowthLabs</p>
                    <p className="text-xs text-muted-foreground">789 Business Blvd</p>
                    <p className="text-xs text-muted-foreground">Chicago, IL 60601</p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 animate-ping absolute"></div>
                    <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
                  </div>
                  <div className="mt-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium">
                    Client C
                  </div>
                  <div className="hidden group-hover:block absolute top-full mt-2 bg-background/90 backdrop-blur-md border border-border/40 rounded-md p-3 w-48 z-10">
                    <p className="text-sm font-medium">EcoFriendly</p>
                    <p className="text-xs text-muted-foreground">321 Green St</p>
                    <p className="text-xs text-muted-foreground">Seattle, WA 98101</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-48 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Modern+Office+Exterior"
                    alt="Office exterior"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-medium">Our San Francisco Office</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Creative+Workspace"
                    alt="Office interior"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-medium">Modern Workspace</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Find answers to common questions about our services
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What services does Advortex offer?",
                answer:
                  "Advortex offers a comprehensive range of marketing services including digital marketing, brand strategy, social media management, SEO optimization, content marketing, and web development.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A website redesign might take 6-8 weeks, while an ongoing marketing campaign could run for several months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer:
                  "Yes, we work with businesses of all sizes, from startups to enterprise-level companies. Our strategies are tailored to meet the specific needs and budget of each client.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "Our pricing is project-based and depends on the scope, timeline, and resources required. We provide detailed proposals with transparent pricing after understanding your specific needs during our initial consultation.",
              },
              {
                question: "How do you measure success?",
                answer:
                  "We establish clear KPIs at the beginning of each project and provide regular reports tracking progress. Metrics may include website traffic, conversion rates, engagement rates, lead generation, and ROI.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "While we have experience across many industries, we have particular expertise in technology, e-commerce, healthcare, finance, and professional services. Our diverse team brings relevant insights to each sector.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-border/40 rounded-lg p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
          <Image
            src="/placeholder.svg?height=1000&width=1920&text=Marketing+Team+Meeting"
            alt="CTA Background"
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-4">Ready to Transform Your Brand?</h2>
            <p className="text-muted-foreground mb-8">
              Let's start a conversation about your marketing goals and how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                >
                  <Link href="/book-call">Schedule a Call</Link>
                </Button>
              </MagneticButton>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Message Sent Successfully
            </DialogTitle>
            <DialogDescription>
              Thank you for reaching out! We've received your message and will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
            <p className="text-sm text-green-800 dark:text-green-300">
              A confirmation email has been sent to your inbox with a copy of your message.
            </p>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setShowSuccess(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
