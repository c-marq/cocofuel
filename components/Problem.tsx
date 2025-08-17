"use client";

import { motion } from "framer-motion";

// Pain Point Component for Problem Validation
const PainPoint = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 191, 165, 0.15)"
      }}
      className="flex items-start space-x-4 p-8 bg-gradient-to-br from-white via-[#F0FDFA] to-[#ECFDF5] rounded-2xl shadow-lg border border-[#14B8A6]/10 hover:border-[#14B8A6]/30 transition-all duration-500 group cursor-pointer relative overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#06B6D4]/10 to-[#F97316]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-[#10B981]/10 to-[#F59E0B]/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2, type: "spring" }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.15, 
          rotate: [0, -5, 5, 0],
          boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)"
        }}
        className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#14B8A6] via-[#06B6D4] to-[#0EA5E9] flex items-center justify-center text-white shadow-lg relative z-10 group-hover:shadow-xl transition-all duration-300"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {icon}
        </motion.div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#14B8A6] to-[#06B6D4] rounded-xl opacity-0 group-hover:opacity-30 blur-md"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
      
      <div className="flex-1 relative z-10">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          viewport={{ once: true }}
          className="font-bold text-xl text-[#134E4A] mb-3 font-secondary group-hover:text-[#0F766E] transition-colors duration-300"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          viewport={{ once: true }}
          className="text-[#134E4A]/80 leading-relaxed font-primary text-base group-hover:text-[#134E4A] transition-colors duration-300"
        >
          {description}
        </motion.p>
      </div>
      
      {/* Subtle wave animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14B8A6] via-[#06B6D4] to-[#10B981] opacity-20"
        animate={{ 
          scaleX: [0, 1, 0],
          originX: [0, 0.5, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
};
// Problem validation section following B2C requirements
// Light theme with empathetic messaging and clean design
const Problem = () => {
  const painPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Feeling Constantly Parched",
      description: "No matter how much water you drink, you never feel truly hydrated, leaving you depleted and struggling to maintain your energy throughout the day."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Poor Recovery After Workouts",
      description: "Your body takes too long to bounce back, with muscle fatigue and soreness that lingers, preventing you from performing at your best and enjoying the activities you love."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Mental Fogginess",
      description: "Dehydration affects your clarity and focus, making it harder to concentrate during important moments and leaving you feeling less sharp than you know you can be."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ineffective Hydration Solutions",
      description: "The market is flooded with products that either taste terrible, contain artificial ingredients you don't want, or simply don't provide the comprehensive rehydration your active lifestyle demands."
    }
  ];

  return (
    <section id="problem" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]">
      {/* Tropical island-inspired background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0]/20 via-transparent to-[#BFDBFE]/15"></div>
      
      {/* Floating organic shapes */}
      <motion.div 
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-[#14B8A6]/15 to-[#06B6D4]/10 rounded-full blur-3xl"
      />
      
      <motion.div 
        animate={{ 
          y: [20, -20, 20],
          rotate: [0, -3, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-[#10B981]/10 to-[#F59E0B]/5 rounded-full blur-3xl"
      />
      
      <motion.div 
        animate={{ 
          x: [-30, 30, -30],
          y: [10, -10, 10]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#0EA5E9]/8 to-[#84CC16]/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Subtle wave patterns */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#14B8A6]/5 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-xl text-[#134E4A] font-primary leading-relaxed max-w-4xl mx-auto mb-10 relative"
          >
            <p className="relative z-10">
              We know you're here because you're tired of feeling drained, dehydrated, and struggling with inadequate recovery. You've tried the sugary sports drinks, the artificial electrolyte tablets, and nothing truly delivers the deep rehydration your body craves. You're not alone in this frustration.
            </p>
            {/* Subtle highlight effect */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] rounded-lg -z-10"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0F766E] font-secondary mb-12 relative"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                background: "linear-gradient(45deg, #14B8A6, #06B6D4, #10B981, #14B8A6)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Every day, you face the reality of:
            </motion.span>
          </motion.h2>
        </div>

        {/* Pain Points Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {painPoints.map((point, index) => (
            <PainPoint
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              delay={index * 0.15}
            />
          ))}
        </motion.div>

        {/* Closing empathy statement */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/80 via-[#F0FDFA]/90 to-[#ECFDF5]/80 backdrop-blur-sm border border-[#14B8A6]/20 shadow-xl">
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/10 to-[#06B6D4]/5 rounded-3xl"
            />
            <p className="relative z-10 text-xl text-[#134E4A] font-primary leading-relaxed max-w-3xl mx-auto font-medium">
              You deserve to feel optimally hydrated, recovered, and vibrant. You shouldn't have to choose between effective rehydration and natural, clean ingredients that align with your wellness values.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
