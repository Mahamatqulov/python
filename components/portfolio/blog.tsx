"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function Blog() {
  const posts = [
    {
      title: "Building Scalable APIs with FastAPI",
      excerpt:
        "Learn how to create high-performance APIs using FastAPI, including best practices for authentication, validation, and documentation.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Tutorial",
      image: "/placeholder.svg?height=200&width=400",
      slug: "building-scalable-apis-fastapi",
    },
    {
      title: "Machine Learning Model Deployment Strategies",
      excerpt:
        "Explore different approaches to deploying ML models in production, from simple REST APIs to sophisticated MLOps pipelines.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Machine Learning",
      image: "/placeholder.svg?height=200&width=400",
      slug: "ml-model-deployment-strategies",
    },
    {
      title: "Python Performance Optimization Tips",
      excerpt:
        "Discover practical techniques to optimize your Python code for better performance, including profiling and memory management.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Python",
      image: "/placeholder.svg?height=200&width=400",
      slug: "python-performance-optimization",
    },
  ]

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on Python development, AI, and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/20 dark:border-slate-700/20 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500 hover:bg-purple-600">{post.category}</Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col h-full">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white line-clamp-2">{post.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-3">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200/20 dark:border-slate-700/20">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full justify-between group mt-4">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
