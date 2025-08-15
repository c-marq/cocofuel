"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Custom Pointer Component
function Pointer({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none z-10"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <div className="w-6 h-6 bg-coral rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Sticky CTA Header
function StickyCTAHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4 flex justify-center items-center"
    >
      <motion.button
        className="px-6 py-3 rounded-full bg-gradient-to-r from-coral to-amber text-white font-semibold shadow-lg border border-coral/20"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 107, 107, 0.3)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Fuel Your Day Now!
      </motion.button>
    </motion.header>
  );
}

// Primary CTA Button
function PrimaryCTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.button
      className={`px-8 py-4 rounded-full bg-gradient-to-r from-coral to-amber text-white font-semibold text-lg shadow-xl border border-coral/20 focus:outline-none focus:ring-4 focus:ring-coral/50 ${className}`}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 15px 30px rgba(255, 107, 107, 0.4)",
        background: "linear-gradient(to right, #FF8A8A, #FFE55D)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
}

// Secondary CTA Button
function SecondaryCTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.button
      className={`px-8 py-4 rounded-full bg-slate-800 text-white font-semibold text-lg shadow-xl border-2 border-mint hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-mint/50 ${className}`}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 15px 30px rgba(107, 255, 179, 0.3)",
        borderColor: "#8BFFCC"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
}

export default function CallToAction() {
  return (
    <>
      <StickyCTAHeader />
      
      <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
              Ready to{" "}
              <span className="bg-gradient-to-r from-coral via-amber to-mint bg-clip-text text-transparent">
                Transform Your Energy?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands who've discovered the power of natural hydration. 
              Your vibrant, unstoppable self is just one sip away.
            </p>
          </motion.div>

          {/* Primary CTA with Pointer */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Pointer>
              <PrimaryCTAButton>
                Fuel Your Day Now! 🚀
              </PrimaryCTAButton>
            </Pointer>
          </motion.div>

          {/* Secondary Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <SecondaryCTAButton>
              Start Free Trial
            </SecondaryCTAButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-700"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">30-Day</div>
              <div className="text-gray-300 text-sm">Money-Back Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mint mb-2">5,000+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber mb-2">4.9★</div>
              <div className="text-gray-300 text-sm">Average Rating</div>
            </div>
          </motion.div>

          {/* Urgency Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-gradient-to-r from-coral/10 to-amber/10 border border-coral/20 rounded-xl"
          >
            <div className="text-coral font-semibold text-sm uppercase tracking-wide mb-2">
              ⏰ Limited Time Offer
            </div>
            <div className="text-white text-lg font-medium">
              Get 20% off your first order + FREE shipping
            </div>
            <div className="text-gray-300 text-sm mt-1">
              Offer expires in 24 hours • No code required
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
