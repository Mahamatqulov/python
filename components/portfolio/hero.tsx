"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { TerminalWindow } from "./terminal-window";

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-purple-400 dark:text-purple-300 font-medium"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white"
              >
                Jamshidbek
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300"
              >
                Python Developer & AI Enthusiast
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
            >
              I craft elegant solutions with Python, building everything from
              web applications to machine learning models. Passionate about
              clean code and innovative technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-200/20 dark:border-slate-700/20 hover:bg-purple-500/20 transition-colors"
                >
                  <link.icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end space-y-8"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96"
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl" />
              <div className="absolute inset-4 bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/20" />

              {/* Profile Image */}
              <div className="relative w-full h-full p-4">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Python Developer"
                  className="w-full h-full object-cover rounded-full border-4 border-white/30 dark:border-slate-700/30 shadow-2xl"
                />

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-lg">🐍</span>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-2 -left-4 w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold">⚡</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Terminal Window - Made smaller */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TerminalWindow />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
