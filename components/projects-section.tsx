"use client"

import { motion } from "framer-motion"
import { PortfolioCard } from "./portfolio-card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Velox",
    description:
      "He desarrollado una página web con múltiples componentes interactivos y funcionales, como encabezados, menús, formularios, galerías y pies de página.",
    image: "/proyect1.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/Carloslara27/Velox",
    demo: "https://demo.com",
  },
  {
    title: "Voice AI – Convierte texto y voz en experiencias interactivas",
    description: "Desarrollé Voice AI, una aplicación web interactiva enfocada en mejorar la comunicación y accesibilidad mediante tecnología de voz e inteligencia artificial.",
    image: "/proyect2.png",
    tags: ["React", "Firebase", "Next.js"],
    github: "https://github.com/Carloslara27/Voice",
    demo: "https://demo.com",
  },
  {
    title: "CarpiShop",
    description: "Desarrollé una tienda de ropa utilizando un stack tecnológico compuesto por HTML, CSS, y JavaScript, donde implementé una interfaz atractiva y funcional para ofrecer una experiencia de usuario optimizada. ",
    image: "/proyect3.png",
    tags: ["PostgreSQL", "React", "ecommerce" ,"javascript" ,"cssTailwind" ,"Node.js"],
    github: "https://github.com/Carloslara27/Ropa-tienda",
    demo: "https://demo.com",
  },
    {
    title: "CRUD",
    description:"Desarrollé un sistema completo de gestión de datos con operaciones CRUD usando PHP y MySQL, con una interfaz dinámica en Bootstrap 5 basada en modales.",
    image: "/proyect4.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com/Carloslara27/crud-php",
    demo: "https://demo.com",
  },
  {
    title: "CRUD EN CI 3",
    description: "Desarrolla un sistema integral de gestión de datos que implemente las operaciones de Crear, Leer, Actualizar y Eliminar. Este proyecto estará basado en PHP y MySQL, y permitirá una gestión eficiente y sencilla de la información.",
    image: "/proyect5.png",
    tags: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/Carloslara27/crud-master",
    demo: "https://demo.com",
  },
  {
    title: "Deshboard",
    description: "Desarrollé un dashboard web moderno y funcional utilizando Next.js, enfocado en ofrecer una interfaz limpia, rápida y fácil de usar para la gestión y visualización de datos.",
    image: "/proyect6.png",
    tags: ["Next.js", "PostgreSQL", "javascript" ,"html5" ,"CSS3" ,"React" ,"Tailwind"],
    github: "https://github.com/Carloslara27/Deshboard",
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
          transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
        >
          <PortfolioCard className="h-full flex flex-col p-0 overflow-hidden group">
            <div className="relative h-48 overflow-hidden bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
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
