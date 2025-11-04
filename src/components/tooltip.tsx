"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface TooltipProps {
  children: React.ReactNode
  content: string
  position?: "top" | "bottom" | "left" | "right"
}

export function Tooltip({ children, content, position = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-3",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-3",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-3"
  }

  return (
    <div className="relative inline-block">
      <div 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute z-50 ${positionClasses[position]} bg-gray-800/90 backdrop-blur-sm text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap border border-gray-700/50 shadow-xl`}
          >
            <div className="text-center">{content}</div>
            <div className={`absolute w-2 h-2 bg-gray-800/90 border border-gray-700/50 -z-10 rotate-45 ${position === 'top' ? 'top-full left-1/2 -translate-x-1/2' : ''} ${position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2' : ''} ${position === 'left' ? 'left-full top-1/2 -translate-y-1/2' : ''} ${position === 'right' ? 'right-full top-1/2 -translate-y-1/2' : ''}`}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}