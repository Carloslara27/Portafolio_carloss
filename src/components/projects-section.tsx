"use client"

import { motion } from "framer-motion"
import { PortfolioCard } from "./portfolio-card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects.json"

// Map the imported projects to the format expected by the component
const formattedProjects = projects.map(project => ({
  title: project.title,
  description: project.description,
  image: project.image,
  tags: project.technologies,
  github: project.links.github,
  demo: project.links.live,
}))

export function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {formattedProjects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <PortfolioCard className="h-full flex flex-col p-0 overflow-hidden group">
            <div className="relative h-48 overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-sm text-foreground/70 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted px-3 py-1.5 rounded-md border border-border">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-3 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Código</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </PortfolioCard>
        </motion.div>
      ))}
    </div>
  )
}
