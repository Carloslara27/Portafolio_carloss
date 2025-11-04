"use client"

import { motion } from "framer-motion"
import { Tooltip } from "./tooltip"

interface SkillBadgeProps {
  icon: string
  label: string
  color?: string
  description?: string
}

export function SkillBadge({ icon, label, color = "bg-blue-500/20", description }: SkillBadgeProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -3, rotate: 1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold ${color} border border-gray-700/30 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{label}</span>
    </motion.div>
  )

  if (description) {
    return <Tooltip content={description}>{content}</Tooltip>
  }

  return content
}
