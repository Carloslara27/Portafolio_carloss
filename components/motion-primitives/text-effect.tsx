"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextEffectProps {
  children: string
  preset?: "fade-in" | "fade-in-blur" | "slide-up"
  per?: "word" | "char"
  className?: string
}

export function TextEffect({ children, preset = "fade-in", per = "word", className }: TextEffectProps) {
  const units = per === "word" ? children.split(" ") : children.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const getVariant = () => {
    switch (preset) {
      case "fade-in-blur":
        return {
          hidden: { opacity: 0, filter: "blur(10px)" },
          visible: { opacity: 1, filter: "blur(0px)" },
        }
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  const item = getVariant()

  return (
    <motion.span className={cn("inline-block", className)} variants={container} initial="hidden" animate="visible">
      {units.map((unit, i) => (
        <motion.span key={i} variants={item} className="inline-block">
          {unit}
          {per === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  )
}
