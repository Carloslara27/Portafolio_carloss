"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    category: string
    status: string
    year: string
    links: {
      live?: string
      github?: string
    }
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
      case "Planning":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full Stack":
        return "bg-purple-500/20 text-purple-400 border border-purple-500/30"
      case "Frontend":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30"
      case "Backend":
        return "bg-green-500/20 text-green-400 border border-green-500/30"
      case "Mobile":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/30"
      case "AI/ML":
        return "bg-pink-500/20 text-pink-400 border border-pink-500/30"
      case "Web App":
        return "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3 },
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="bg-card/60 backdrop-blur-xl border border-border/80 rounded-2xl overflow-hidden hover:bg-card/70 transition-all duration-300 group shadow-lg"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Status and Category Badges */}
        <motion.div 
          className="absolute top-3 left-3 flex gap-2"
          initial={{ opacity: 1, y: 0 }}
          whileHover={{ y: -3 }}
        >
          <span className={`${getStatusColor(project.status)} text-xs px-2 py-1 rounded-full font-medium`}>
            {project.status}
          </span>
          <span
            className={`${getCategoryColor(project.category)} text-xs px-2 py-1 rounded-full font-medium`}
          >
            {project.category}
          </span>
        </motion.div>

        {/* Year */}
        <motion.div 
          className="absolute top-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-border/50"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Calendar className="w-3 h-3" />
          {project.year}
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <motion.span 
              key={tech} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + (i * 0.05) }}
              className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full font-medium border border-border/30"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {project.links.live && (
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm px-4 py-2.5 rounded-lg transition-all font-medium shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm px-4 py-2.5 rounded-lg transition-all font-medium border border-border/50"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
