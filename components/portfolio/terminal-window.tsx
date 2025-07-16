"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TerminalWindow() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  const codeLines = [
    "# Welcome to my portfolio",
    "class PythonDeveloper:",
    "    def __init__(self, name):",
    "        self.name = name",
    "        self.skills = ['Python', 'Django', 'FastAPI']",
    "        self.passion = 'Building amazing things'",
    "",
    "    def introduce(self):",
    "        return f'Hi, I\\'m {self.name}!'",
    "",
    "dev = PythonDeveloper('Mukhammadjon')",
    "print(dev.introduce())",
    "# Output: Hi, I'm Alex Chen!",
  ]

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine]
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setCurrentChar(currentChar + 1)
        }, 50)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setCurrentLine(currentLine + 1)
          setCurrentChar(0)
        }, 500)
        return () => clearTimeout(timer)
      }
    }
  }, [currentLine, currentChar, codeLines])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-700/50 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-slate-400 text-sm font-mono">portfolio.py</div>
          <div className="w-12"></div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm">
          {codeLines.map((line, lineIndex) => (
            <div key={lineIndex} className="min-h-[1.5rem] flex">
              <span className="text-slate-500 mr-4 select-none">{String(lineIndex + 1).padStart(2, "0")}</span>
              <div className="flex-1">
                {lineIndex < currentLine && <span className="text-slate-300">{line}</span>}
                {lineIndex === currentLine && (
                  <>
                    <span className="text-slate-300">{line.substring(0, currentChar)}</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      className="bg-purple-400 text-slate-900 px-0.5"
                    >
                      {line[currentChar] || " "}
                    </motion.span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
