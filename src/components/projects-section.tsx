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
          { 
            title: "Total Projects", 
            value: projectsData.projects.length,
            color: "text-blue-400 dark:text-blue-400",
            bg: "bg-blue-500/10 dark:bg-blue-500/10"
          },
          { 
            title: "Completed", 
            value: projectsData.projects.filter((p) => p.status === "Completed").length,
            color: "text-green-400 dark:text-green-400",
            bg: "bg-green-500/10 dark:bg-green-500/10"
          },
          { 
            title: "In Progress", 
            value: projectsData.projects.filter((p) => p.status === "In Progress").length,
            color: "text-yellow-400 dark:text-yellow-400",
            bg: "bg-yellow-500/10 dark:bg-yellow-500/10"
          },
          { 
            title: "Categories", 
            value: categories.length - 1,
            color: "text-purple-400 dark:text-purple-400",
            bg: "bg-purple-500/10 dark:bg-purple-500/10"
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.03 }}
            className={`${stat.bg} dark:${stat.bg} backdrop-blur-xl border border-gray-800/50 dark:border-border rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-lg`}
          >
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-sm text-gray-400 dark:text-gray-400 mt-1">{stat.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
