"use client"

import { motion } from "framer-motion"
import { Tooltip } from "./tooltip"

interface SkillBadgeWithLevelProps {
  icon: string
  label: string
  level: number // 1-5 scale
  color?: string
  description?: string
}

export function SkillBadgeWithLevel({ icon, label, level, color = "bg-blue-500", description }: SkillBadgeWithLevelProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -3, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 flex flex-col h-full group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold bg-gray-700/50 border border-gray-600 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{label}</span>
      </div>
      
      <div className="mt-auto pt-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 bg-gray-700/50 rounded-full h-2.5">
            <motion.div
              className={`h-2.5 rounded-full ${color}`}
              initial={{ width: 0 }}
              animate={{ width: `${(level / 5) * 100}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          <span className="text-sm text-gray-400 w-8">{level}/5</span>
        </div>
        
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className={`w-3 h-3 rounded-full mr-1 ${i < level ? color : 'bg-gray-700/50'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )

  if (description) {
    return <Tooltip content={description}>{content}</Tooltip>
  }

  return content
}