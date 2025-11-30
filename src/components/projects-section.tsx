"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import projectsData from "@/data/projects.json"
import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(projectsData.projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === selectedCategory)

  return (
    <section className="space-y-12">
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         
        </motion.h2>
        <motion.p 
          className="text-gray-400 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Una colección de proyectos en los que he trabajado, que muestran diferentes tecnologías y enfoques para la resolución de problemas.
        </motion.p>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -3 
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-gray-800/50 dark:bg-secondary text-gray-300 dark:text-secondary-foreground hover:bg-gray-700/50 dark:hover:bg-secondary/70 border border-gray-700/50 dark:border-border"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>


      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
      >
        {[
         
        ].map((stat, index) => (
          <motion.div
            >
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
