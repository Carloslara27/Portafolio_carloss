"use client"

import { motion } from "framer-motion"
import { PortfolioCard } from "./portfolio-card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos con Stripe, y panel de administración.",
    image: "/modern-ecommerce-platform.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Firebase", "Material-UI"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "AI Chat Assistant",
    description: "Asistente de chat impulsado por IA con procesamiento de lenguaje natural y respuestas contextuales.",
    image: "/ai-chat-interface.png",
    tags: ["Next.js", "OpenAI", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, i) => (
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
