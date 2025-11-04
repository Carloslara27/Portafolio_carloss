"use client"

import { motion } from "framer-motion";

interface ModernSkillBadgeProps {
  icon?: string;
  label: string;
  level: number; // 1-5 scale
  color?: string;
  description?: string;
  delay?: number;
}

export function ModernSkillBadge({ 
  icon, 
  label, 
  level, 
  color = "from-blue-500 to-purple-500", 
  description, 
  delay = 0 
}: ModernSkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5, rotate: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: delay
      }}
      className="relative group"
    >
      {/* Skill card with gradient background */}
      <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 overflow-hidden">
        {/* Animated background layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            {icon ? (
              <motion.div 
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold text-center bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/50 group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {icon}
              </motion.div>
            ) : (
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold text-center bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/50">
                {label.charAt(0)}
              </div>
            )}
            <span className="text-gray-200 font-semibold group-hover:text-white transition-colors duration-300">
              {label}
            </span>
          </div>
          
          {/* Level indicator */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(level / 5) * 100}%` }}
                  transition={{ duration: 1, delay: 0.2 + delay }}
                />
              </div>
              <span className="text-sm text-gray-400 w-8">{level}/5</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tooltip */}
      {description && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white text-xs rounded-lg py-2 px-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 whitespace-nowrap">
          {description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
        </div>
      )}
    </motion.div>
  );
}