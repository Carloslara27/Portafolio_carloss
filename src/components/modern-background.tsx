"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FloatingShape {
  id: string;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  shape: "circle" | "square" | "triangle";
}

export function ModernBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<FloatingShape[]>([]);
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

    // Initialize floating shapes
    const initShapes = () => {
      const shapes: FloatingShape[] = [];
      const shapeCount = 20; // Reduced for better performance

      for (let i = 0; i < shapeCount; i++) {
        const size = Math.random() * 40 + 10; // 10-50px
        shapes.push({
          id: `shape-${i}`,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.2 + 0.05,
          color: i % 3 === 0 
            ? "rgba(59, 130, 246, 0.7)" // blue-500
            : i % 3 === 1
            ? "rgba(147, 51, 234, 0.7)" // purple-500
            : "rgba(16, 185, 129, 0.7)", // emerald-500
          shape: i % 3 === 0 ? "circle" : i % 3 === 1 ? "square" : "triangle"
        });
      }

      shapesRef.current = shapes;
    };

    initShapes();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear with a dark background
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)"; // Slight trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw shapes
      shapesRef.current.forEach((shape) => {
        // Update position
        shape.x += shape.speedX;
        shape.y += shape.speedY;

        // Bounce off edges
        if (shape.x <= 0 || shape.x >= canvas.width) {
          shape.speedX *= -1;
        }
        if (shape.y <= 0 || shape.y >= canvas.height) {
          shape.speedY *= -1;
        }

        // Draw shape based on type
        ctx.save();
        ctx.globalAlpha = shape.opacity;
        
        if (shape.shape === "circle") {
          // Draw a glowing circle
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
          ctx.fillStyle = shape.color;
          ctx.fill();
          
          // Add glow effect
          ctx.shadowColor = shape.color;
          ctx.shadowBlur = 15;
          ctx.fill();
        } 
        else if (shape.shape === "square") {
          // Draw a glowing square
          ctx.fillStyle = shape.color;
          ctx.fillRect(
            shape.x - shape.size / 2, 
            shape.y - shape.size / 2, 
            shape.size, 
            shape.size
          );
          
          // Add glow effect
          ctx.shadowColor = shape.color;
          ctx.shadowBlur = 15;
          ctx.fillRect(
            shape.x - shape.size / 2, 
            shape.y - shape.size / 2, 
            shape.size, 
            shape.size
          );
        } 
        else if (shape.shape === "triangle") {
          // Draw a glowing triangle
          ctx.beginPath();
          ctx.moveTo(shape.x, shape.y - shape.size / 2);
          ctx.lineTo(shape.x - shape.size / 2, shape.y + shape.size / 2);
          ctx.lineTo(shape.x + shape.size / 2, shape.y + shape.size / 2);
          ctx.closePath();
          ctx.fillStyle = shape.color;
          ctx.fill();
          
          // Add glow effect
          ctx.shadowColor = shape.color;
          ctx.shadowBlur = 15;
          ctx.fill();
        }
        
        ctx.restore();
      });

      // Draw connections between close shapes
      for (let i = 0; i < shapesRef.current.length; i++) {
        for (let j = i + 1; j < shapesRef.current.length; j++) {
          const dx = shapesRef.current[i].x - shapesRef.current[j].x;
          const dy = shapesRef.current[i].y - shapesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = 1 - distance / 200;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.2})`; // indigo-500
            ctx.lineWidth = 0.5;
            ctx.moveTo(shapesRef.current[i].x, shapesRef.current[i].y);
            ctx.lineTo(shapesRef.current[j].x, shapesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated gradient overlay for movement */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-violet-900/10 to-transparent animate-pulse"></div>
      </div>
      
      {/* Canvas for floating shapes */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Floating gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl"
        animate={{ 
          x: [-20, 40, -20],
          y: [30, -50, 30],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
        animate={{ 
          x: [30, -50, 30],
          y: [-40, 20, -40],
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-teal-600/10 to-cyan-600/10 rounded-full blur-3xl"
        animate={{ 
          x: [50, -30, 50],
          y: [40, -30, 40],
        }}
        transition={{ 
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </motion.div>
  );
}