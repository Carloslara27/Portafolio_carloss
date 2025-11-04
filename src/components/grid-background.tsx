"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface GridLine {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  size: number;
}

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

    // Initialize grid lines
    const initLines = () => {
      const lines: GridLine[] = [];
      const lineCount = 80;

      for (let i = 0; i < lineCount; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 100 + 50,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.05 + 0.01,
          opacity: Math.random() * 0.1 + 0.05,
          size: Math.random() * 1.5 + 0.5,
        });
      }

      linesRef.current = lines;
    };

    initLines();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
      animate={{ opacity: 0.07 }}
      transition={{ duration: 3 }}
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}