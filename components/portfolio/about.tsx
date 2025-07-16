"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Zap } from "lucide-react"

export function About() {
  const skills = [
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "React",
    "TypeScript",
    "Docker",
    "AWS",
    "Machine Learning",
    "TensorFlow",
  ]

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices.",
    },
    {
      icon: Database,
      title: "Full Stack",
      description: "Experience with both frontend and backend technologies, databases, and cloud services.",
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Building intelligent applications with machine learning and artificial intelligence.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and excellent user experience.",
    },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm a passionate Python developer with 5+ years of experience building web applications, APIs, and machine
            learning solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My journey in software development started with a curiosity about how things work. Today, I specialize in
              creating robust backend systems, elegant APIs, and intelligent applications that solve real-world
              problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in AI research, contributing to open-source
              projects, or sharing knowledge through technical writing.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/20 dark:border-slate-700/20 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
