"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CodeTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const codeLines = [
    "// Desarrollador Full Stack",
    "const experiencia = {",
    "  años: 4,",
    "  especialidad: 'Aplicaciones web modernas',",
    "  enfoque: 'Código limpio + Interfaces elegantes',",
    "};",
    "",
    "// Soluciones escalables",
    "function resolverProblemas(usuarios) {",
    "  return usuarios.map(usuario => ({",
    "    experiencia: 'exceptional',",
    "    resultado: 'satisfaccion'",  
    "  }));",
    "}",
    "",
    "// Código ejemplo",
    "const proyecto = new Proyecto({",
    "  stack: ['React', 'TypeScript', 'Next.js'],",
    "  estado: 'completado',",
    "  calidad: 'premium',",
    "});",
  ];

  useEffect(() => {
    const lineTimer = setInterval(() => {
      if (currentLine < codeLines.length - 1) {
        setCurrentLine(prev => prev + 1);
        setCurrentText(codeLines[currentLine]);
      } else {
        // Reiniciar cuando termina
        setTimeout(() => {
          setCurrentLine(0);
          setCurrentText("");
        }, 3000);
      }
    }, 150);

    return () => clearInterval(lineTimer);
  }, [currentLine, codeLines]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 h-full min-h-[500px] font-mono text-sm overflow-hidden">
      <div className="flex items-center mb-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-muted-foreground text-xs ml-2">terminal.js</div>
      </div>
      
      <div className="text-green-400 mb-1">$ desarrollador-info</div>
      
      <div className="text-foreground space-y-1">
        {codeLines.slice(0, currentLine).map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="flex"
          >
            <span className="text-muted-foreground mr-4 select-none">{'>'}</span>
            <span>{line}</span>
          </motion.div>
        ))}
        
        <motion.div 
          key={currentLine}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="flex"
        >
          <span className="text-muted-foreground mr-4 select-none">{'>'}</span>
          <span>{currentText}</span>
          {showCursor && <span className="text-green-400 ml-1 animate-pulse">|</span>}
        </motion.div>
      </div>
    </div>
  );
};

export { CodeTerminal };