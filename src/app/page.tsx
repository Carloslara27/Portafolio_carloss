"use client";

import { motion } from "framer-motion";
import { TextRoll } from "@/components/text-roll";
import { PortfolioCard } from "@/components/portfolio-card";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { ProjectsSection } from "@/components/projects-section";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import Image from "next/image";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { BackToTop } from "@/components/back-to-top";
import ScrollProgress from "@/components/scroll-progress";
import { CodeTerminal } from "@/components/code-terminal";

export default function Portfolio() {
  const roles = ["Full Stack Developer", "UI/UX Designer", "Frontend Specialist", "Creative Developer"];
  const interests = ["💻 Desarrollo de Software", "🤖 Inteligencia Artificial", "✈️ Viajar", "📚 Leer", "🎯 Productividad"];

  return (
    <>
      <Navigation />
      <ScrollProgress />
      <div className="min-h-screen bg-gradient-to-br from-background via-card/5 to-background text-foreground relative overflow-hidden">
        
       
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Círculos grandes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`big-${i}`}
              className="absolute w-64 h-64 rounded-full opacity-10 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl"
              animate={{
                x: [0, (i % 2 === 0 ? 100 : -100), 0],
                y: [0, (i < 3 ? -100 : 100), 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
              style={{
                top: `${10 + (i * 15) % 80}%`,
                left: `${(i * 20) % 80}%`,
              }}
            />
          ))}

          {/* Círculos pequeños */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute w-24 h-24 rounded-full opacity-15 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl"
              animate={{
                x: [0, Math.sin(i) * 80, 0],
                y: [0, Math.cos(i) * 60, 0],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 8 + (i % 3) * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i,
              }}
              style={{
                top: `${(i * 7) % 100}%`,
                left: `${(i * 13) % 100}%`,
              }}
            />
          ))}
        </div>

        {/* Hero section */}
        <section id="home" className="pt-24 pb-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-4">
                <TextEffect 
                  children="Carlos Lara" 
                  preset="fade-in-blur" 
                  per="word" 
                  className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"/>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="h-10 flex justify-center">
                <TextRoll texts={roles} className="text-muted-foreground text-lg h-6" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center gap-4">
              <a 
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30">
                Contactame
              </a>
              <a 
                href="#projects"
                className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 border border-gray-700/50 text-foreground rounded-full font-medium transition-all duration-300">
                Ver Proyectos
              </a>
            </motion.div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sobre mí
            </motion.h2>
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="md:w-1/3">
                <PortfolioCard>
                  <div className="flex flex-col items-center text-center space-y-6">
                   
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                      className="relative">
                      <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 overflow-hidden">
                        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                          <Image
                            src="/descarga.png"
                            alt="Foto de perfil de Carlos Lara"
                            width={144}
                            height={144}
                            className="rounded-full object-cover w-full h-full"/>
                        </div>
                      </div>
                     
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                      className="text-foreground leading-relaxed px-2">
                      Soy un desarrollador full stack especializado en crear aplicaciones web modernas y eficientes. 
                      Con más de 4 años de experiencia, me apasiona combinar un código limpio con interfaces elegantes 
                      para ofrecer experiencias digitales excepcionales. Me enfoco en soluciones escalables que resuelvan 
                      problemas reales para los usuarios.
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                      className="pt-2">
                      <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                        Descubre cómo puedo ayudar a tu próximo proyecto
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {interests.map((interest, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="bg-gray-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-foreground border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </PortfolioCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="md:w-2/3 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PortfolioCard delay={0.3}>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="text-xl font-semibold text-foreground">
                          TechCorp Inc.
                        </motion.h3>
                        <motion.span
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="text-xs bg-blue-500/20 px-2 py-1 rounded">
                          2022 - Presente
                        </motion.span>
                      </div>
                      <ul className="text-sm text-foreground/80 space-y-2">
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                          className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>Lideré el desarrollo de 5+ aplicaciones web modernas</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.5 }}
                          className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>Mentoría a desarrolladores junior</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.6 }}
                          className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Mejoré la performance en un 40%</span>
                        </motion.li>
                      </ul>
                    </div>
                  </PortfolioCard>

                  <PortfolioCard delay={0.4}>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="text-xl font-semibold text-foreground">
                          StartupXYZ
                        </motion.h3>
                        <motion.span
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="text-xs bg-purple-500/20 px-2 py-1 rounded">
                          2020 - 2022
                        </motion.span>
                      </div>
                      <ul className="text-sm text-foreground/80 space-y-2">
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                          className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>Construí aplicaciones responsivas con React</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.5 }}
                          className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>Colaboré con equipos de diseño en UI/UX</span>
                        </motion.li>
                        <motion.li 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.4, delay: 0.6 }}
                          className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>Integré APIs y servicios de terceros</span>
                        </motion.li>
                      </ul>
                    </div>
                  </PortfolioCard>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  className="w-full">
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

        {/* Skills */}

    <section id="skills" className="py-20 relative z-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
    >
      Habilidades Técnicas
    </motion.h2>

    <div className="space-y-14">
      {/* Frontend */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-5 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
            Frontend
          </span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
            'HTML5', 'CSS3', 'Tailwind CSS', 'Sass/SCSS'
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                scale: 1.04,
                boxShadow: "0 6px 16px -4px rgba(59, 130, 246, 0.25)",
                borderColor: "rgba(96, 165, 250, 0.5)",
                transition: { duration: 0.2 },
              }}
              className="px-4 py-2.5 bg-gray-900/40 backdrop-blur-sm rounded-xl text-sm md:text-base font-medium text-foreground border border-gray-700/40 hover:border-blue-500/50 transition-all duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="group">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-5 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold">
            Backend
          </span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Node.js', 'Express', 'Python', 'PostgreSQL',
            'MongoDB', 'REST APIs', 'GraphQL', 'Firebase', 'AWS'
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.1 + i * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                scale: 1.04,
                boxShadow: "0 6px 16px -4px rgba(16, 185, 129, 0.25)",
                borderColor: "rgba(34, 197, 94, 0.5)",
                transition: { duration: 0.2 },
              }}
              className="px-4 py-2.5 bg-gray-900/40 backdrop-blur-sm rounded-xl text-sm md:text-base font-medium text-foreground border border-gray-700/40 hover:border-emerald-500/50 transition-all duration-200">
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Herramientas & Metodologías */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="group">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-5 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent font-bold">
            Herramientas & Metodologías
          </span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Git / GitHub', 'Docker', 'Jest', 'Figma',
            'Vite', 'Webpack', 'Jira', 'CI/CD', 'Agile / Scrum'
          ].map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.2 + i * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                scale: 1.04,
                boxShadow: "0 6px 16px -4px rgba(139, 92, 246, 0.25)",
                borderColor: "rgba(168, 85, 247, 0.5)",
                transition: { duration: 0.2 },
              }}
              className="px-4 py-2.5 bg-gray-900/40 backdrop-blur-sm rounded-xl text-sm md:text-base font-medium text-foreground border border-gray-700/40 hover:border-purple-500/50 transition-all duration-200">
              {tool}
            </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

        {/* Experience */}
        <section id="experience" className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experiencia
            </motion.h2>
            <div className="space-y-8">
              <PortfolioCard delay={0.3}>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="text-xl font-semibold text-foreground">
                      Senior Full Stack Developer - TechCorp Inc.
                    </motion.h3>
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="text-xs bg-blue-500/20 px-2 py-1 rounded">
                      2022 - Presente
                    </motion.span>
                  </div>
                  <p className="text-foreground/80 text-sm">Argentina Lules, Tucuman</p>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Lideré el desarrollo de 5+ aplicaciones web modernas con React, TypeScript y Next.js</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Mentoría a desarrolladores junior y liderazgo técnico de equipos pequeños</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Implementé prácticas de CI/CD y automatizaciones que redujeron el tiempo de despliegue en un 40%</span>
                    </motion.li>
                  </ul>
                </div>
              </PortfolioCard>

              <PortfolioCard delay={0.4}>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="text-xl font-semibold text-foreground">
                      Frontend Developer - StartupXYZ
                    </motion.h3>
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="text-xs bg-purple-500/20 px-2 py-1 rounded">
                      2020 - 2022
                    </motion.span>
                  </div>
                  <p className="text-foreground/80 text-sm">Remote</p>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Construí aplicaciones responsivas con React, Redux, y TypeScript</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Colaboré estrechamente con diseñadores UI/UX para implementar interfaces modernas</span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Integré APIs REST y servicios de terceros como Stripe, SendGrid y AWS</span>
                    </motion.li>
                  </ul>
                </div>
              </PortfolioCard>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Proyectos Destacados
            </motion.h2>
            <ProjectsSection />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contáctame
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-22">
              <div className="lg:col-span-1 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="w-full max-w-md space-y-8">
                  <PortfolioCard delay={0.9}>
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-foreground">Información de Contacto</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                          <Mail className="w-5 h-5 text-blue-400" />
                          <span>carlosslara27@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                          <MapPin className="w-5 h-5 text-purple-400" />
                          <span>Argentina Lules, Tucuman</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Sígueme</h3>
                        <div className="flex gap-4">
                          {[
                            { name: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/Carloslara27" },
                            { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/carlos-lara-163234359/" },
                          ].map((social, i) => (
                            <motion.a
                              key={social.name}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl text-foreground/80 hover:text-foreground hover:bg-gray-700/50 border border-gray-700/50 transition-all">
                              {social.icon}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PortfolioCard>

                  <PortfolioCard delay={1}>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Descargar CV</h3>
                      <a 
                        href="/cv-carlos-lara.pdf"
                        download="CV-Carlos-Lara.pdf"
                        className="flex items-center gap-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-700/50 transition-colors">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <Download className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Currículum Vitae</p>
                          <p className="text-xs text-foreground/60">PDF • 150 KB</p>
                        </div>
                      </a>
                    </div>
                  </PortfolioCard>
                </motion.div>
              </div>

             
            </div>
          </div>
        </section>

        {/* Footeer */}
        <footer className="py-12 border-t border-border/50 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-foreground/60">
                © {new Date().getFullYear()} Carlos Lara. Todos los derechos reservados.
              </p>
              <div className="mt-4 flex justify-center gap-6">
                {[
                  { name: "GitHub", href: "https://github.com/Carloslara27" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/carlos-lara-163234359/" },
                ].map((link, i) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors">
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
  );
}