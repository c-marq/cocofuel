"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import TextHover from "./TextHover";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Cocofuel headline animation complete!");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with scroll animation */}
      <HeroBackground
        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
        alt="Cocofuel Vibrant Energy"
      />
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-5"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center">
            {/* Split Text Animation for Headline with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <TextHover
                text="Feeling Drained and Dehydrated? Reclaim Your Optimal Balance."
                className="font-secondary font-bold text-4xl lg:text-6xl text-white leading-tight drop-shadow-2xl"
                hoverColors={["text-coral", "text-amber", "text-mint", "text-sky", "text-lavender"]}
                splitType="words"
              />
            </motion.div>
            
            {/* Subheadline with fade-in animation and hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="font-primary text-lg lg:text-xl leading-relaxed max-w-2xl"
            >
              <TextHover
                text="Cocofuel is the natural, delicious way to rehydrate, replenish essential electrolytes, and recover faster. Say goodbye to dehydration and hello to your most vibrant, balanced self."
                className="text-white drop-shadow-xl"
                hoverColors={["text-mint", "text-sky", "text-amber"]}
                splitType="words"
              />
            </motion.div>
            
            {/* Interactive Hover Button for CTA */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#80DEEA] to-[#FF8A65] hover:from-[#4DD0E1] hover:to-[#FF7043] text-white font-primary font-semibold text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-[#80DEEA]/50"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Rehydrate Now!
            </motion.button>
            
            {/* Hydration benefits indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="flex flex-wrap gap-4 text-white text-sm font-primary drop-shadow-lg justify-center"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#A5D6A7] rounded-full animate-pulse"></div>
                <span>Natural Coconut Water</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#80DEEA] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Essential Electrolytes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FFCC80] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Faster Recovery</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
