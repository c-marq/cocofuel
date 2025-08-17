'use client';

import { motion } from 'framer-motion';

// Solution Benefit Component
const SolutionBenefit = ({ 
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
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 120 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        scale: 1.03,
        rotateY: 2,
        boxShadow: "0 25px 50px rgba(20, 184, 166, 0.2)"
      }}
      className="flex items-center space-x-4 p-6 bg-gradient-to-br from-white via-[#F0FDFA] to-[#ECFDF5] rounded-2xl shadow-xl border border-[#14B8A6]/15 hover:border-[#14B8A6]/40 transition-all duration-500 group cursor-pointer relative overflow-hidden"
    >
      {/* Floating tropical background elements */}
      <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#06B6D4]/12 to-[#10B981]/8 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-[#14B8A6]/10 to-[#F59E0B]/8 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: delay + 0.2, type: "spring" }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.2, 
          rotate: 5,
          boxShadow: "0 0 25px rgba(20, 184, 166, 0.5)"
        }}
        className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#14B8A6] via-[#06B6D4] to-[#10B981] flex items-center justify-center text-white shadow-lg relative z-10 group-hover:shadow-xl transition-all duration-400"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.15],
            rotate: [0, 5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
          className="text-white"
        >
          {icon}
        </motion.div>
        
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#14B8A6] to-[#06B6D4] rounded-xl opacity-0 group-hover:opacity-40 blur-lg"
          animate={{ 
            scale: [1, 1.3],
            opacity: [0, 0.4]
          }}
          transition={{ 
            duration: 1.4, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        />
        
        {/* Sparkle effect */}
        <motion.div
          className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
          animate={{ 
            scale: [0, 1],
            rotate: [0, 180]
          }}
          transition={{ 
            duration: 0.75, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>
      
      <div className="flex-1 relative z-10">
        <motion.h3
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: delay + 0.3 }}
          viewport={{ once: true }}
          className="font-bold text-lg text-[#134E4A] mb-2 font-secondary group-hover:text-[#0F766E] transition-colors duration-300"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: delay + 0.4 }}
          viewport={{ once: true }}
          className="text-[#134E4A]/85 leading-relaxed font-primary text-base group-hover:text-[#134E4A] transition-colors duration-300"
        >
          {description}
        </motion.p>
      </div>
      
      {/* Tropical wave animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14B8A6] via-[#06B6D4] to-[#10B981] opacity-25"
        animate={{ 
          scaleX: [0, 1],
          originX: [0, 1]
        }}
        transition={{ 
          duration: 1.75, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay * 0.5
        }}
      />
    </motion.div>
  );
};

const Solution = () => {
  const solutionBenefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Effortless Replenishment",
      description: "Simply mix with water for instant, delicious coconut water packed with electrolytes. No more sugary drinks, no more artificial ingredients, just pure, natural goodness."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Accelerated Recovery",
      description: "Our unique blend helps your body bounce back faster after workouts, reducing muscle fatigue and supporting optimal performance. Feel strong, not drained, and ready for your next challenge."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Sustained Vitality",
      description: "Experience a profound sense of well-being that comes from true hydration. Say goodbye to midday slumps and mental fogginess, and embrace sustained clarity and focus throughout your day."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "On-the-Go Convenience",
      description: "Designed for your busy lifestyle, Cocofuel comes in portable sachets, making it easy to stay hydrated wherever you are – at the gym, in the office, or on the trails."
    }
  ];

  return (
    <>
      <style jsx global>{`
        * {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
        }
      `}</style>
      <section id="solution" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]">
      {/* Tropical island-inspired background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0]/15 via-transparent to-[#BFDBFE]/12"></div>
      
      {/* Floating organic shapes */}
      <motion.div 
        animate={{ 
          y: [-25, 25],
          rotate: [0, 8],
          scale: [1, 1.2]
        }}
        transition={{ 
          duration: 4.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#14B8A6]/12 to-[#06B6D4]/8 rounded-full blur-3xl"
      />
      
      <motion.div 
        animate={{ 
          y: [30, -30],
          rotate: [0, -5],
          scale: [1.1, 0.9]
        }}
        transition={{ 
          duration: 5.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#10B981]/8 to-[#F59E0B]/5 rounded-full blur-3xl"
      />
      
      <motion.div 
        animate={{ 
          x: [-40, 40],
          y: [15, -15]
        }}
        transition={{ 
          duration: 6.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 6
        }}
        className="absolute top-1/3 right-1/3 w-60 h-60 bg-gradient-to-br from-[#0EA5E9]/6 to-[#84CC16]/4 rounded-full blur-2xl"
      />
      
      {/* Subtle wave patterns */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#14B8A6]/3 to-transparent"></div>
      
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
              Imagine a life where every sip revitalizes you, where your body feels optimally balanced, and your mind is crystal clear. This isn't a dream – it's the Cocofuel promise. We've meticulously crafted a premium coconut water powder enriched with essential electrolytes, designed to be your ultimate partner in rehydration and recovery.
            </p>
            {/* Subtle highlight effect */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.08 }}
              transition={{ duration: 1.5, delay: 0.6 }}
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
                duration: 5, 
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
              Cocofuel is your natural solution to:
            </motion.span>
          </motion.h2>
        </div>

        {/* Solution Benefits - 2 per row, wider cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {solutionBenefits.map((benefit, index) => (
            <SolutionBenefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Athletic Product Showcase - Centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <div className="relative">
              {/* Floating elements around image */}
              <motion.div
                animate={{ 
                  y: [-10, 10],
                  rotate: [0, 5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#14B8A6]/20 to-[#06B6D4]/20 rounded-full blur-sm"
              />
              
              <motion.div
                animate={{ 
                  x: [10, -10],
                  scale: [1, 1.1]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#10B981]/15 to-[#F59E0B]/10 rounded-full blur-sm"
              />
              
              <div className="w-full h-80 rounded-3xl shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Athletes hydrating after workout session"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14B8A6]/25 via-transparent to-[#06B6D4]/10 rounded-3xl"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mt-20 relative"
        >
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/90 via-[#F0FDFA]/95 to-[#ECFDF5]/85 backdrop-blur-sm border border-[#14B8A6]/25 shadow-2xl">
            <motion.div
              animate={{ 
                scale: [1, 1.03, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/8 to-[#06B6D4]/5 rounded-3xl"
            />
            <p className="relative z-10 text-xl text-[#134E4A] font-primary leading-relaxed max-w-3xl mx-auto font-medium">
              Cocofuel isn't just a drink; it's a commitment to your best self. It's the clean, effective rehydration you've been searching for, allowing you to live a life of unwavering vitality and confidence.
            </p>
            
            {/* Sparkle effects */}
            <motion.div
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-6 left-8 w-2 h-2 bg-[#14B8A6] rounded-full"
            />
            <motion.div
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, -180, -360]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-8 right-10 w-1.5 h-1.5 bg-[#06B6D4] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Solution;
