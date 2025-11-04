"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface PortfolioCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function PortfolioCard({ children, className = "", delay = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3 },
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      className={`bg-card/60 backdrop-blur-xl border border-border/80 rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  )
}
