"use client"

import { motion } from "framer-motion"
import { TextRoll } from "@/components/text-roll"
import { PortfolioCard } from "@/components/portfolio-card"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import { ProjectsSection } from "@/components/projects-section"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { BackToTop } from "@/components/back-to-top"
import ScrollProgress from "@/components/scroll-progress"
import { CodeTerminal } from "@/components/code-terminal"
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"

export default function Portfolio() {
  const roles = ["Full Stack Developer", "UI/UX Designer", "Frontend Specialist", "Creative Developer"]
  const interests = [
    "💻 Desarrollo de Software",
    "🤖 Inteligencia Artificial",
    "✈️ Viajar",
    "📚 Leer",
    "🎯 Productividad",
  ]

  return (
    <>
      <Navigation />
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />

          <motion.div
            className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full opacity-[0.03] bg-blue-500 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full opacity-[0.03] bg-purple-500 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <section id="home" className="pt-32 pb-24 relative z-10 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <TextEffect
                  children="Carlos Lara"
                  preset="fade-in-blur"
                  per="word"
                  className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-12 flex justify-center mb-12"
              >
                <TextRoll texts={roles} className="text-muted-foreground text-xl md:text-2xl font-light" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center gap-4"
              >
                <a
                  href="#contact"
                  className="px-4 py-3 flex justify-center items-center bg-foreground text-background rounded-lg font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                >
                  Contactame
                </a>
                <a
                  href="#projects"
                  className="px-4 py-3 flex justify-center items-center bg-transparent border-2 border-border hover:border-foreground/30 rounded-lg font-medium transition-all duration-300"
                >
                  Ver Proyectos
                </a>
              </motion.div>
            </div>
          </div>
          <DotPattern
            glow={true}
            className={cn(
              "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]"
            )}
          />
        </section>

        {/* About section */}
        <section id="about" className="py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground"
            >
              Sobre mí
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:w-1/3"
              >
                <PortfolioCard>
                  <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 p-1 overflow-hidden">
                        <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                          <Image
                            src="/descarga.png"
                            alt="Foto de perfil de Carlos Lara"
                            width={160}
                            height={160}
                            className="rounded-full object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-foreground/80 leading-relaxed text-base"
                    >
                      Soy un desarrollador full stack especializado en crear aplicaciones web modernas y eficientes. Con
                      más de 4 años de experiencia, me apasiona combinar un código limpio con interfaces elegantes para
                      ofrecer experiencias digitales excepcionales.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="pt-4 w-full"
                    >
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-foreground hover:text-foreground/70 text-sm font-medium transition-colors group"
                      >
                        Descubre cómo puedo ayudar a tu próximo proyecto
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.div>

                    <div className="flex flex-wrap gap-2 justify-center pt-2">
                      {interests.map((interest, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                          className="bg-muted px-4 py-2 rounded-full text-sm border border-border transition-colors hover:border-foreground/20"
                        >
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </PortfolioCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:w-2/3 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PortfolioCard delay={0.3}>
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-foreground">TechCorp Inc.</h3>
                        <span className="text-xs bg-muted px-3 py-1.5 rounded-md border border-border">
                          2022 - Presente
                        </span>
                      </div>
                      <ul className="text-sm text-foreground/70 space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-foreground mt-1">•</span>
                          <span>Lideré el desarrollo de 5+ aplicaciones web modernas</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-foreground mt-1">•</span>
                          <span>Mentoría a desarrolladores junior</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-foreground mt-1">•</span>
                          <span>Mejoré la performance en un 40%</span>
                        </li>
                      </ul>
                    </div>
                  </PortfolioCard>

                  <PortfolioCard delay={0.4}>
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-foreground">StartupXYZ</h3>
                        <span className="text-xs bg-muted px-3 py-1.5 rounded-md border border-border">
                          2020 - 2022
                        </span>
                      </div>
                      <ul className="text-sm text-foreground/70 space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-foreground mt-1">•</span>
                          <span>Construí aplicaciones responsivas con React</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-foreground mt-1">•</span>
                          <span>Colaboré con equipos de diseño en UI/UX</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-foreground mt-1">•</span>
                          <span>Integré APIs y servicios de terceros</span>
                        </li>
                      </ul>
                    </div>
                  </PortfolioCard>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="w-full"
                >
                  <PortfolioCard delay={0.5}>
                    <div className="p-1">
                      <CodeTerminal />
                    </div>
                  </PortfolioCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-20 text-center text-foreground"
            >
              Habilidades Técnicas
            </motion.h2>

            <div className="space-y-16">
              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-foreground rounded-full" />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Sass/SCSS",
                  ].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                      }}
                      whileHover={{
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className="px-5 py-3 bg-muted/50 backdrop-blur-sm rounded-lg text-sm md:text-base font-medium text-foreground border border-border hover:border-foreground/30 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-foreground rounded-full" />
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Node.js",
                    "Express",
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "REST APIs",
                    "GraphQL",
                    "Firebase",
                    "AWS",
                  ].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + i * 0.05,
                      }}
                      whileHover={{
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className="px-5 py-3 bg-muted/50 backdrop-blur-sm rounded-lg text-sm md:text-base font-medium text-foreground border border-border hover:border-foreground/30 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Herramientas & Metodologías */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-foreground rounded-full" />
                  Herramientas & Metodologías
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Git / GitHub", "Docker", "Jest", "Figma", "Vite", "Webpack", "Jira", "CI/CD", "Agile / Scrum"].map(
                    (tool, i) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + i * 0.05,
                        }}
                        whileHover={{
                          y: -2,
                          transition: { duration: 0.2 },
                        }}
                        className="px-5 py-3 bg-muted/50 backdrop-blur-sm rounded-lg text-sm md:text-base font-medium text-foreground border border-border hover:border-foreground/30 transition-all duration-200 cursor-default"
                      >
                        {tool}
                      </motion.span>
                    ),
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground"
            >
              Experiencia
            </motion.h2>

            <div className="space-y-8 max-w-4xl mx-auto">
              <PortfolioCard delay={0.2}>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">Senior Full Stack Developer</h3>
                      <p className="text-lg text-foreground/80 font-medium">TechCorp Inc.</p>
                    </div>
                    <span className="text-sm bg-muted px-4 py-2 rounded-md border border-border whitespace-nowrap self-start">
                      2022 - Presente
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm">Argentina, Lules, Tucumán</p>
                  <ul className="text-sm text-foreground/70 space-y-3 pt-2">
                    <li className="flex items-start gap-3">
                      <span className="text-foreground mt-1">•</span>
                      <span>Lideré el desarrollo de 5+ aplicaciones web modernas con React, TypeScript y Next.js</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground mt-1">•</span>
                      <span>Mentoría a desarrolladores junior y liderazgo técnico de equipos pequeños</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground mt-1">•</span>
                      <span>
                        Implementé prácticas de CI/CD y automatizaciones que redujeron el tiempo de despliegue en un 40%
                      </span>
                    </li>
                  </ul>
                </div>
              </PortfolioCard>

              <PortfolioCard delay={0.3}>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">Frontend Developer</h3>
                      <p className="text-lg text-foreground/80 font-medium">StartupXYZ</p>
                    </div>
                    <span className="text-sm bg-muted px-4 py-2 rounded-md border border-border whitespace-nowrap self-start">
                      2020 - 2022
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm">Remote</p>
                  <ul className="text-sm text-foreground/70 space-y-3 pt-2">
                    <li className="flex items-start gap-3">
                      <span className="text-foreground mt-1">•</span>
                      <span>Construí aplicaciones responsivas con React, Redux, y TypeScript</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground mt-1">•</span>
                      <span>Colaboré estrechamente con diseñadores UI/UX para implementar interfaces modernas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground mt-1">•</span>
                      <span>Integré APIs REST y servicios de terceros como Stripe, SendGrid y AWS</span>
                    </li>
                  </ul>
                </div>
              </PortfolioCard>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground"
            >
              Proyectos Destacados
            </motion.h2>
            <ProjectsSection />
          </div>
        </section>

        <section id="contact" className="py-24 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground"
            >
              Contáctame
            </motion.h2>

            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <PortfolioCard delay={0.2}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-6">Información de Contacto</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-foreground/70">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Mail className="w-5 h-5 text-foreground" />
                          </div>
                          <span className="text-base">carlosslara27@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-foreground/70">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-foreground" />
                          </div>
                          <span className="text-base">Argentina, Lules, Tucumán</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="text-2xl font-semibold text-foreground mb-6">Sígueme</h3>
                      <div className="flex gap-4">
                        {[
                          {
                            name: "GitHub",
                            icon: <Github className="w-5 h-5" />,
                            href: "https://github.com/Carloslara27",
                          },
                          {
                            name: "LinkedIn",
                            icon: <Linkedin className="w-5 h-5" />,
                            href: "https://www.linkedin.com/in/carlos-lara-163234359/",
                          },
                        ].map((social) => (
                          <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-muted/80 border border-border hover:border-foreground/30 transition-all"
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </PortfolioCard>

                <PortfolioCard delay={0.3}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-foreground">Descargar CV</h3>
                    <a
                      href="/cv-carlos-lara.pdf"
                      download="CV-Carlos-Lara.pdf"
                      className="flex items-center gap-4 p-5 bg-muted/50 rounded-lg border border-border hover:border-foreground/30 hover:bg-muted transition-all group"
                    >
                      <div className="w-12 h-12 bg-foreground/5 rounded-lg flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                        <Download className="w-6 h-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-lg">Currículum Vitae</p>
                        <p className="text-sm text-foreground/60">PDF • 150 KB</p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-foreground/40 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </PortfolioCard>
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-border relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-foreground/60 text-sm">
                © {new Date().getFullYear()} Carlos Lara. Todos los derechos reservados.
              </p>
              <div className="flex gap-8">
                {[
                  { name: "GitHub", href: "https://github.com/Carloslara27" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/carlos-lara-163234359/" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>

        <BackToTop />
      </div>
    </>
  )
}
