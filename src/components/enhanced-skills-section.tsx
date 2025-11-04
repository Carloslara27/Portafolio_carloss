"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  description: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

const SkillCategoryCard = ({ 
  category, 
  skills,
  isSelected,
  onClick
}: { 
  category: SkillCategory; 
  skills: Skill[];
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`p-4 rounded-xl border cursor-pointer transition-all ${
        isSelected 
          ? "bg-blue-500/10 border-blue-500/30 shadow-lg shadow-blue-500/20" 
          : "bg-gray-800/50 border-gray-700/50 hover:border-gray-600/50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="font-semibold text-white">{category.name}</h3>
        <span className="ml-auto text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
          {skills.length}
        </span>
      </div>
    </motion.div>
  );
};

const SkillItem = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl">{skill.icon}</span>
          <h4 className="font-medium text-white">{skill.name}</h4>
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Nivel</span>
            <span>{skill.level}/5</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(skill.level / 5) * 100}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute z-10 bottom-full left-0 w-full mb-2 p-3 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-xl"
          >
            <p className="text-sm text-gray-300">{skill.description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const SkillCategorySection = ({ 
  category,
  skills,
  isVisible
}: { 
  category: SkillCategory; 
  skills: Skill[];
  isVisible: boolean;
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700/50">
          <span className="text-2xl">{category.icon}</span>
          <h2 className="text-2xl font-bold text-white">{category.name}</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default function EnhancedSkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: "⚛️",
      skills: [
        {
          name: "React",
          level: 5,
          category: "Frontend",
          icon: "⚛️",
          description: "Biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables"
        },
        {
          name: "Next.js",
          level: 5,
          category: "Frontend",
          icon: "▲",
          description: "Framework de React para aplicaciones web modernas con renderizado SSR y SSG"
        },
        {
          name: "TypeScript",
          level: 5,
          category: "Frontend",
          icon: "🟦",
          description: "Extensión de JavaScript que agrega tipado estático para mayor seguridad y mantenibilidad"
        },
        {
          name: "Tailwind CSS",
          level: 5,
          category: "Frontend",
          icon: "🎨",
          description: "Framework CSS utilitario para crear diseños personalizados rápidamente"
        },
        {
          name: "CSS3/SASS",
          level: 5,
          category: "Frontend",
          icon: "🖌️",
          description: "Lenguaje de estilos para diseño web con preprocesador SASS avanzado"
        },
        {
          name: "JavaScript",
          level: 5,
          category: "Frontend",
          icon: "🟨",
          description: "Lenguaje de programación esencial para desarrollo web frontend y backend"
        },
        {
          name: "HTML5",
          level: 5,
          category: "Frontend",
          icon: "🌐",
          description: "Lenguaje de marcado estándar para estructura de contenido web"
        },
        {
          name: "Vue.js",
          level: 4,
          category: "Frontend",
          icon: "💚",
          description: "Framework progresivo de JavaScript para construir interfaces de usuario"
        }
      ]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          level: 5,
          category: "Backend",
          icon: "🟢",
          description: "Entorno de ejecución de JavaScript para aplicaciones backend escalables"
        },
        {
          name: "Python",
          level: 4,
          category: "Backend",
          icon: "🐍",
          description: "Lenguaje versátil para desarrollo backend, análisis de datos y automatización"
        },
        {
          name: "PostgreSQL",
          level: 5,
          category: "Backend",
          icon: "🗄️",
          description: "Sistema de base de datos relacional potente y escalable"
        },
        {
          name: "AWS",
          level: 4,
          category: "Backend",
          icon: "☁️",
          description: "Plataforma de servicios en la nube de Amazon para infraestructura escalable"
        },
        {
          name: "MongoDB",
          level: 4,
          category: "Backend",
          icon: "🔒",
          description: "Base de datos NoSQL orientada a documentos para aplicaciones modernas"
        },
        {
          name: "Express.js",
          level: 5,
          category: "Backend",
          icon: "⚡",
          description: "Framework de Node.js para construir APIs y aplicaciones web"
        },
        {
          name: "Django",
          level: 4,
          category: "Backend",
          icon: "🐍",
          description: "Framework web de Python para desarrollo rápido y seguro"
        },
        {
          name: "GraphQL",
          level: 4,
          category: "Backend",
          icon: "📊",
          description: "Lenguaje de consulta para APIs con mayor flexibilidad que REST"
        }
      ]
    },
    {
      name: "Herramientas",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          level: 5,
          category: "Herramientas",
          icon: "🌱",
          description: "Sistema de control de versiones para colaboración y control de código"
        },
        {
          name: "Docker",
          level: 4,
          category: "Herramientas",
          icon: "🐳",
          description: "Plataforma para contenerizar y desplegar aplicaciones en cualquier entorno"
        },
        {
          name: "Jest",
          level: 4,
          category: "Herramientas",
          icon: "🧪",
          description: "Framework de testing para JavaScript con cobertura de código"
        },
        {
          name: "Webpack",
          level: 4,
          category: "Herramientas",
          icon: "📦",
          description: "Empaquetador de módulos para optimizar y construir aplicaciones web"
        },
        {
          name: "Figma",
          level: 4,
          category: "Herramientas",
          icon: "🎨",
          description: "Herramienta de diseño colaborativo para interfaces y prototipos"
        },
        {
          name: "Jira",
          level: 4,
          category: "Herramientas",
          icon: "📋",
          description: "Herramienta de gestión de proyectos y seguimiento de tareas"
        },
        {
          name: "VS Code",
          level: 5,
          category: "Herramientas",
          icon: "💻",
          description: "Editor de código extensible y potente para desarrollo diario"
        },
        {
          name: "Linux",
          level: 4,
          category: "Herramientas",
          icon: "🐧",
          description: "Sistema operativo de código abierto para desarrollo y servidor"
        }
      ]
    },
    {
      name: "Otros",
      icon: "🌟",
      skills: [
        {
          name: "CI/CD",
          level: 4,
          category: "Otros",
          icon: "🔄",
          description: "Integración y entrega continua para automatizar despliegues"
        },
        {
          name: "Testing",
          level: 4,
          category: "Otros",
          icon: "🧪",
          description: "Pruebas unitarias, integración y end-to-end para calidad de software"
        },
        {
          name: "Scrum",
          level: 4,
          category: "Otros",
          icon: "📊",
          description: "Metodología ágil para gestión de proyectos de desarrollo"
        },
        {
          name: "API Design",
          level: 5,
          category: "Otros",
          icon: "🔌",
          description: "Diseño de APIs RESTful y GraphQL con documentación clara"
        },
        {
          name: "UI/UX",
          level: 4,
          category: "Otros",
          icon: "🎨",
          description: "Diseño de interfaces de usuario con enfoque en experiencia"
        },
        {
          name: "Agile",
          level: 4,
          category: "Otros",
          icon: "🏃",
          description: "Metodología ágil para desarrollo iterativo e incremental"
        },
        {
          name: "Design Patterns",
          level: 4,
          category: "Otros",
          icon: "🎯",
          description: "Patrones de diseño para soluciones reutilizables en desarrollo"
        },
        {
          name: "Microservices",
          level: 3,
          category: "Otros",
          icon: "🧩",
          description: "Arquitectura de microservicios para aplicaciones escalables"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Mis Habilidades
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora mis habilidades técnicas y profesionales organizadas por categorías.
            Cada habilidad representa años de experiencia y dominio práctico.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <SkillCategoryCard
              key={index}
              category={category}
              skills={category.skills}
              isSelected={selectedCategory === index}
              onClick={() => setSelectedCategory(index)}
            />
          ))}
        </div>

        {categories.map((category, index) => (
          <SkillCategorySection
            key={index}
            category={category}
            skills={category.skills}
            isVisible={selectedCategory === index}
          />
        ))}
      </div>
    </section>
  );
}