"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const codeSnippets = [
  {
    language: "TypeScript",
    code: `const buildAmazingThings = () => {\n  return "Let's create something great!";\n};`,
  },
  {
    language: "React",
    code: `function Portfolio() {\n  return <Experience innovation={true} />;\n}`,
  },
]

export function CodeTerminal() {
  const [currentSnippet, setCurrentSnippet] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-muted/30 rounded-lg p-6 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-foreground/50">{codeSnippets[currentSnippet].language}</span>
      </div>
      <motion.pre
        key={currentSnippet}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-foreground/80 font-mono overflow-x-auto"
      >
        {codeSnippets[currentSnippet].code}
      </motion.pre>
    </div>
  )
}
