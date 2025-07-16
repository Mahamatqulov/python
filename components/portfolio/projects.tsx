"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "A comprehensive analytics platform built with Django and React, featuring machine learning insights and real-time data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Django", "React", "PostgreSQL", "TensorFlow"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "FastAPI Microservices",
      description:
        "Scalable microservices architecture with FastAPI, Docker, and Kubernetes for high-performance API development.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["FastAPI", "Docker", "Kubernetes", "Redis", "MongoDB"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "ML Model Deployment Platform",
      description: "Platform for deploying and monitoring machine learning models with automated CI/CD pipelines.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "MLflow", "AWS", "Docker", "Streamlit"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Real-time Chat Application",
      description:
        "WebSocket-based chat application with Django Channels, featuring real-time messaging and file sharing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Django", "WebSockets", "Redis", "PostgreSQL", "React"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A showcase of my recent work, from web applications to machine learning projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card className="overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/20 dark:border-slate-700/20 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300">
                <div className={`grid ${project.featured ? "lg:grid-cols-2" : ""} gap-6`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
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
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
