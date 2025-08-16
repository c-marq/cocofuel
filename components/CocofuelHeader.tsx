"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

const navigationLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#problem", label: "Why Cocofuel" },
  { href: "#solution", label: "Solution" },
  { href: "#benefits", label: "Benefits" },
  { href: "#social-proof", label: "Reviews" },
  { href: "#faq", label: "FAQ" }
];

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const headerHeight = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Custom hamburger icon component
function HamburgerIcon({ isOpen, className }: { isOpen: boolean; className: string }) {
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <motion.span
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white mb-1.5 origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white mb-1.5"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white origin-center"
      />
    </div>
  );
}

// Magnetic Button Component with Advanced Microinteractions
function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setMousePosition({
      x: (e.clientX - centerX) * 0.3,
      y: (e.clientY - centerY) * 0.3
    });
  };

  return (
    <motion.button
      className={`px-6 py-3 rounded-full bg-gradient-to-r from-coral to-amber text-white font-semibold text-sm shadow-lg border border-coral/20 focus:outline-none focus:ring-4 focus:ring-coral/50 relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovered ? 1.05 : 1
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 15,
        mass: 0.5
      }}
      style={{
        boxShadow: isHovered ? "0 20px 40px rgba(255, 107, 107, 0.4)" : "0 10px 20px rgba(255, 107, 107, 0.2)"
      }}
    >
      {/* Animated background shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: isHovered ? ['-100%', '100%'] : '-100%'
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Text Hover Animation Component
function AnimatedNavLink({ href, children, delay = 0, onClick }: {
  href: string;
  children: React.ReactNode;
  delay?: number;
  onClick: (href: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
      className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-coral to-amber"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-coral/20 to-amber/20 blur-sm -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 0.8
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-amber to-mint z-[70]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%"
      }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1 }}
    />
  );
}

export default function CocofuelHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu navigation
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      smoothScrollTo(href);
    }
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Main Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('#hero');
                }}
                className="flex items-center space-x-3"
              >
                <Image
                  src="/cropped_image_ (1)-Picsart-BackgroundRemover.png"
                  alt="Cocofuel Logo"
                  className="h-8 w-auto"
                  priority={true}
                  width={80}
                  height={40}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <AnimatedNavLink
                  key={link.href}
                  href={link.href}
                  delay={index * 0.1}
                  onClick={handleNavClick}
                >
                  {link.label}
                </AnimatedNavLink>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex">
              <MagneticButton>
                Fuel Your Day Now!
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-white hover:bg-slate-800 transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <HamburgerIcon isOpen={isMobileMenuOpen} className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-sm border-l border-slate-700 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                  <div className="flex items-center">
                    <Image
                      src="/cropped_image_ (1)-Picsart-BackgroundRemover.png"
                      alt="Cocofuel Logo"
                      className="h-6 w-auto"
                      width={60}
                      height={30}
                    />
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-md text-white hover:bg-slate-800 transition-colors duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <HamburgerIcon isOpen={true} className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navigationLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA Button */}
                <div className="p-6 border-t border-slate-700">
                  <MagneticButton className="w-full justify-center">
                    Fuel Your Day Now!
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
