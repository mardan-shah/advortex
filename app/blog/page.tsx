"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "marketing", label: "Digital Marketing" },
    { id: "branding", label: "Branding" },
    { id: "social", label: "Social Media" },
    { id: "seo", label: "SEO" },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Trends to Watch in 2025",
      excerpt:
        "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in 2025.",
      category: "marketing",
      date: "May 1, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=600&width=800",
      featured: true,
      slug: "/blog/digital-marketing-trends-2025",
    },
    {
      id: 2,
      title: "How to Build a Brand That Resonates with Gen Z",
      excerpt:
        "Understand the unique preferences and values of Gen Z to create a brand that truly connects with this influential demographic.",
      category: "branding",
      date: "April 28, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
      slug: "/blog/brand-resonates-gen-z",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Social Media Algorithms in 2025",
      excerpt:
        "Master the latest social media algorithms to maximize your organic reach and engagement across platforms.",
      category: "social",
      date: "April 22, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=600&width=800",
      featured: true,
      slug: "/blog/social-media-algorithms-2025",
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work in 2025",
      excerpt:
        "Cut through the noise and focus on proven SEO tactics that will boost your rankings and drive organic traffic.",
      category: "seo",
      date: "April 15, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
      slug: "/blog/seo-strategies-2025",
    },
    {
      id: 5,
      title: "The Psychology of Color in Marketing",
      excerpt:
        "Explore how different colors influence consumer behavior and how to leverage color psychology in your marketing.",
      category: "marketing",
      date: "April 10, 2025",
      readTime: "4 min read",
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
      slug: "/blog/psychology-color-marketing",
    },
    {
      id: 6,
      title: "How to Create a Content Strategy That Converts",
      excerpt:
        "Learn how to develop a content strategy that not only engages your audience but also drives conversions.",
      category: "marketing",
      date: "April 5, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
      slug: "/blog/content-strategy-converts",
    },
  ]

  const featuredPosts = blogPosts.filter((post) => post.featured)

  const filterPosts = (posts, category, query) => {
    return posts.filter((post) => {
      const matchesCategory = category === "all" || post.category === category
      const matchesSearch =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }

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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Blog</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Insights, strategies, and trends to help you excel in digital marketing and brand development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="container">
            <h2 className="font-heading text-2xl md:text-3xl mb-8">Featured Articles</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Link href={post.slug} className="block h-full">
                    <Card className="h-full border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </CardHeader>

                      <CardContent>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </CardContent>

                      <CardFooter>
                        <div className="flex items-center text-sm font-medium text-primary">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-heading text-2xl md:text-3xl">Latest Articles</h2>
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {filterPosts(blogPosts, category.id, searchQuery).map((post) => (
                      <motion.div
                        key={post.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="group"
                      >
                        <Link href={post.slug} className="block h-full">
                          <Card className="h-full border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                            <div className="relative h-48 w-full overflow-hidden">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            </div>

                            <CardHeader>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                <div className="flex items-center">
                                  <Calendar className="mr-1 h-4 w-4" />
                                  {post.date}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-4 w-4" />
                                  {post.readTime}
                                </div>
                              </div>
                              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h3>
                            </CardHeader>

                            <CardContent>
                              <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                            </CardContent>

                            <CardFooter>
                              <div className="flex items-center text-sm font-medium text-primary">
                                Read More
                                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </div>
                            </CardFooter>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-lg border border-border/40 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest marketing insights, strategies, and trends delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
