"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  symbol: string;
}

interface GridLine {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  size: number;
}

export function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const linesRef = useRef<GridLine[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Array of coding symbols for particles
    const symbols = ['{', '}', '(', ')', '[', ']', ';', ':', '=', '+', '-', '*', '/', '<', '>', '!', '&', '|', '^', '~', '?', '→', 'λ', '∑', '∏'];

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 70;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 6 + 4,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.2 + 0.05,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
        });
      }

      particlesRef.current = particles;
    };

    // Initialize grid lines
    const initLines = () => {
      const lines: GridLine[] = [];
      const lineCount = 50;

      for (let i = 0; i < lineCount; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 80 + 40,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.03 + 0.01,
          opacity: Math.random() * 0.1 + 0.03,
          size: Math.random() * 1 + 0.5,
        });
      }

      linesRef.current = lines;
    };

    initParticles();
    initLines();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Draw particles (code symbols)
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.speedY *= -1;
        }

        // Draw particle symbol
        ctx.beginPath();
        ctx.fillStyle = `rgba(100, 150, 255, ${particle.opacity})`;
        ctx.fillText(particle.symbol, particle.x, particle.y);
      });

      // Draw connections between close particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const opacity = 1 - distance / 80;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity * 0.05})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw grid lines
      linesRef.current.forEach((line) => {
        // Update position
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        // Reset position if out of bounds
        if (line.x > canvas.width + 100) line.x = -100;
        if (line.x < -100) line.x = canvas.width + 100;
        if (line.y > canvas.height + 100) line.y = -100;
        if (line.y < -100) line.y = canvas.height + 100;

        // Draw line
        const x2 = line.x + Math.cos(line.angle) * line.length;
        const y2 = line.y + Math.sin(line.angle) * line.length;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 150, 255, ${line.opacity})`;
        ctx.lineWidth = line.size;
        ctx.lineCap = 'round';
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <motion.canvas
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ duration: 3 }}
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}