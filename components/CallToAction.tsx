"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// CSS-in-JS for gradient shimmer animation
const shimmerStyles = `
  @keyframes gradientShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;

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
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#14B8A6]/20 p-4 flex justify-center items-center shadow-lg"
    >
      <motion.button
        className="px-6 py-3 rounded-full bg-gradient-to-r from-coral to-amber text-white font-semibold shadow-lg border border-coral/20"
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 15px 30px rgba(245, 158, 11, 0.4)",
          background: "linear-gradient(to right, #FF8A65, #FFC107)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Rehydrate Now
      </motion.button>
    </motion.header>
  );
}

// Primary CTA Button
function PrimaryCTAButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.button
      className={`px-8 py-4 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] text-white font-semibold text-lg shadow-xl border border-[#14B8A6]/20 focus:outline-none focus:ring-4 focus:ring-[#14B8A6]/30 font-secondary ${className}`}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)",
        background: "linear-gradient(to right, #06B6D4, #14B8A6)"
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
      className={`px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-[#134E4A] font-semibold text-lg shadow-xl border-2 border-[#14B8A6]/30 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#14B8A6]/30 font-secondary ${className}`}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)",
        borderColor: "#14B8A6",
        background: "rgba(255, 255, 255, 0.95)"
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
      <style jsx>{shimmerStyles}</style>
      <StickyCTAHeader />
      
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              y: [-30, 30],
              rotate: [0, 10],
              scale: [1, 1.2]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#14B8A6]/20 to-[#06B6D4]/15 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              y: [25, -25],
              rotate: [0, -8],
              scale: [1.4, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#F59E0B]/25 to-[#10B981]/20 rounded-full blur-3xl"
          />
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
            <h2 className="text-5xl md:text-6xl font-bold text-[#134E4A] mb-6 font-secondary">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to{" "}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-coral via-amber to-mint bg-clip-text text-transparent relative inline-block"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundPosition: "200% center",
                }}
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradientShimmer 3s ease-in-out infinite"
                }}
              >
                Transform Your Hydration?
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-coral to-amber rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </motion.span>
            </h2>
            <p className="text-xl text-[#134E4A]/80 max-w-2xl mx-auto leading-relaxed font-primary">
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
                Start Rehydrating
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#14B8A6]/20"
          >
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent mb-2 font-secondary">30-Day</div>
              <div className="text-[#134E4A]/70 text-sm font-primary">Money-Back Guarantee</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent mb-2 font-secondary">5,000+</div>
              <div className="text-[#134E4A]/70 text-sm font-primary">Happy Customers</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent mb-2 font-secondary">4.9★</div>
              <div className="text-[#134E4A]/70 text-sm font-primary">Average Rating</div>
            </motion.div>
          </motion.div>

          {/* Urgency Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-white/70 backdrop-blur-sm border border-[#14B8A6]/30 rounded-2xl shadow-lg"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)"
            }}
          >
            <div className="text-[#F59E0B] font-semibold text-sm uppercase tracking-wide mb-2 font-secondary">
              ⏰ Limited Time Offer
            </div>
            <div className="text-[#134E4A] text-lg font-medium font-secondary">
              Get 20% off your first order + FREE shipping
            </div>
            <div className="text-[#134E4A]/70 text-sm mt-1 font-primary">
              Offer expires in 24 hours • No code required
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
