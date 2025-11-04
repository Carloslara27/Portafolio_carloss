'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type AnimatedPhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  borderAnimation?: boolean;
  floatingAnimation?: boolean;
  glowAnimation?: boolean;
  scaleOnHover?: boolean;
  initialDelay?: number;
  animationType?: 'spring' | 'bounce' | 'pulse' | 'float';
  children?: React.ReactNode;
};

export function AnimatedPhoto({
  src,
  alt,
  width,
  height,
  className = '',
  borderAnimation = true,
  floatingAnimation = true,
  glowAnimation = true,
  scaleOnHover = true,
  initialDelay = 0.2,
  animationType = 'spring',
  children,
}: AnimatedPhotoProps) {
  const shouldReduceMotion = useReducedMotion();

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'bounce':
        return {
          initial: { 
            scale: 0, 
            rotate: -10,
            y: 50,
            opacity: 0,
          },
          animate: { 
            scale: 1, 
            rotate: 0,
            y: shouldReduceMotion ? 0 : [0, -10, 0],
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: initialDelay,
              type: 'spring',
              stiffness: 100,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: 'reverse' as const,
            }
          }
        };

      case 'pulse':
        return {
          initial: { 
            scale: 0, 
            rotate: -10,
            opacity: 0,
          },
          animate: { 
            scale: shouldReduceMotion ? 1 : [1, 1.05, 1],
            rotate: 0,
            opacity: 1,
            transition: {
              duration: 2,
              delay: initialDelay,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: 'reverse' as const,
              ease: 'easeInOut',
            }
          }
        };

      case 'float':
        return {
          initial: { 
            scale: 0, 
            rotate: -10,
            y: 50,
            opacity: 0,
          },
          animate: { 
            scale: 1, 
            rotate: 0,
            y: shouldReduceMotion ? 0 : [0, -10, 0],
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: initialDelay,
              type: 'spring',
              stiffness: 50,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: 'loop' as const,
              ease: 'easeInOut'
            }
          }
        };

      case 'spring':
      default:
        return {
          initial: { 
            scale: 0, 
            rotate: -10,
            opacity: 0,
          },
          animate: { 
            scale: 1, 
            rotate: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: initialDelay,
              type: 'spring',
              stiffness: 100
            }
          }
        };
    }
  };

  const photoVariants :any = getAnimationVariants();

  return (<div className="">
    <motion.div
      {...photoVariants}
      className={cn('relative', className)}
      whileHover={scaleOnHover && !shouldReduceMotion ? { scale: 1.05 } : {}}
    >
      {/* Main image container */}
      <div className="w-full h-full rounded-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-full object-cover w-full h-full"
        />
      </div>

      
      {borderAnimation && !shouldReduceMotion && (
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-white/20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse' as const,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Glow effect */}
      {glowAnimation && !shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-md -z-10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse' as const,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Floating animation overlay */}
      {floatingAnimation && animationType === 'float' && !shouldReduceMotion && (
        <motion.div 
          className="absolute inset-0 rounded-full opacity-40"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Additional children elements */}
      {children}
    </motion.div></div>
  );
}