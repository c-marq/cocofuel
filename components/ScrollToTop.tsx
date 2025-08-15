"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  // Show button when scrolled down 300px
  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', updateVisibility);
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  // Magnetic effect on hover
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    setMousePosition({
      x: (e.clientX - centerX) * 0.2,
      y: (e.clientY - centerY) * 0.2
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Morphing arrow SVG with path animation
  const ArrowIcon = ({ className }: { className?: string }) => (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.path
        d="M12 19V5M5 12L12 5L19 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 0.8, ease: "easeInOut" },
          opacity: { duration: 0.3, delay: 0.1 }
        }}
      />
    </motion.svg>
  );

  // Floating particles effect
  const ParticleOrb = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute w-1 h-1 bg-white/40 rounded-full"
      initial={{ scale: 0, x: 0, y: 0 }}
      animate={isHovered ? {
        scale: [0, 1, 0],
        x: [0, Math.random() * 40 - 20],
        y: [0, Math.random() * 40 - 20],
      } : { scale: 0 }}
      transition={{
        duration: 1.5,
        delay,
        repeat: isHovered ? Infinity : 0,
        repeatDelay: 0.5
      }}
    />
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.8
          }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative w-14 h-14 bg-gradient-to-br from-coral via-amber to-mint rounded-full shadow-lg border border-white/10 overflow-hidden group focus:outline-none focus:ring-4 focus:ring-coral/50"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              rotate: { duration: 0.6, repeat: isHovered ? Infinity : 0, repeatDelay: 2 }
            }}
            style={{
              boxShadow: isHovered 
                ? "0 20px 40px rgba(255, 107, 107, 0.4), 0 0 30px rgba(255, 211, 61, 0.3)" 
                : "0 10px 20px rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Animated background shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={isHovered ? {
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              } : { x: '-100%', opacity: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 0.5
              }}
            />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <ParticleOrb key={i} delay={i * 0.1} />
            ))}

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={isHovered ? {
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6]
              } : { scale: 1, opacity: 0 }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeOut"
              }}
            />

            {/* Arrow icon with morphing animation */}
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <motion.div
                animate={isHovered ? {
                  y: [-2, 2, -2],
                  rotateX: [0, 180, 360]
                } : { y: 0, rotateX: 0 }}
                transition={{
                  y: { duration: 2, repeat: isHovered ? Infinity : 0, ease: "easeInOut" },
                  rotateX: { duration: 1, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }
                }}
              >
                <ArrowIcon />
              </motion.div>
            </div>

            {/* Magnetic trail effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-coral/50 to-amber/50 blur-xl"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.5, 0.8, 0.5] : 0
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-2 bg-slate-800/90 backdrop-blur-sm text-white text-sm rounded-lg border border-slate-700/50 whitespace-nowrap shadow-lg"
              >
                Back to top
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-800/90"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
