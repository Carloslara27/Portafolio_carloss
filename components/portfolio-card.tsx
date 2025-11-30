"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PortfolioCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function PortfolioCard({ children, delay = 0, className }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "bg-card border border-border rounded-xl p-8 hover:border-foreground/20 transition-colors duration-300",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
