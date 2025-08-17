"use client";

import { motion } from "framer-motion";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function BenefitCard({ icon, title, description, delay }: BenefitCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-white via-[#F0FDFA] to-[#ECFDF5] shadow-xl border border-[#14B8A6]/15 hover:border-[#14B8A6]/40 transition-all duration-500 group cursor-pointer relative overflow-hidden"
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: delay, type: "spring", stiffness: 120 }}
      whileHover={{ 
        y: -12, 
        scale: 1.05,
        rotateY: 3,
        boxShadow: "0 25px 50px rgba(20, 184, 166, 0.2)",
        backgroundColor: "rgba(240, 253, 250, 0.95)"
      }}
    >
      {/* Floating tropical background elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#06B6D4]/12 to-[#10B981]/8 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-gradient-to-br from-[#14B8A6]/10 to-[#F59E0B]/8 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
      
      <motion.div 
        className="mb-6 text-4xl relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br from-[#14B8A6] via-[#06B6D4] to-[#10B981] flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-400"
        initial={{ scale: 0, rotate: -12 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay + 0.2, type: "spring" }}
        whileHover={{ 
          scale: 1.2, 
          rotate: 5,
          boxShadow: "0 0 25px rgba(20, 184, 166, 0.5)"
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1],
            rotate: [0, 3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: delay + 0.3 }}
        viewport={{ once: true }}
        className="font-bold text-xl text-[#134E4A] mb-4 font-secondary group-hover:text-[#0F766E] transition-colors duration-300 relative z-10"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: delay + 0.4 }}
        viewport={{ once: true }}
        className="text-[#134E4A]/85 leading-relaxed font-primary text-base group-hover:text-[#134E4A] transition-colors duration-300 relative z-10"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

// Custom animated SVG icons
function WaterDropIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path d="M12 2C8 6.667 6 9.667 6 12a6 6 0 0 0 12 0c0-2.333-2-5.333-6-10z" />
    </motion.svg>
  );
}

function RefreshIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </motion.svg>
  );
}

function CoconutIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="9" cy="9" r="1" />
      <circle cx="15" cy="9" r="1" />
      <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </motion.svg>
  );
}

function ClockIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </motion.svg>
  );
}

function BrainIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </motion.svg>
  );
}

export default function Benefits() {
  const benefits = [
    {
      icon: <WaterDropIcon />,
      title: "Achieve Optimal Hydration",
      description: "Tired of feeling parched and depleted? Cocofuel provides deep, effective rehydration with essential electrolytes, helping you maintain optimal fluid balance throughout your day."
    },
    {
      icon: <RefreshIcon />, 
      title: "Accelerate Recovery", 
      description: "Whether it's bouncing back from your yoga flow or recovering from a challenging hike, proper rehydration is key. Cocofuel ensures your body replenishes what it loses."
    },
    {
      icon: <CoconutIcon />,
      title: "Embrace Pure Rehydration",
      description: "Ditch the sugary, artificial drinks that leave you feeling worse. Cocofuel delivers essential electrolytes and natural coconut water powder, ensuring deep, effective rehydration."
    },
    {
      icon: <ClockIcon />,
      title: "Simplify Your Hydration Routine",
      description: "Life is busy, and proper hydration shouldn't be complicated. Cocofuel offers a quick, convenient, and portable rehydration solution that fits effortlessly into your on-the-go lifestyle."
    },
    {
      icon: <BrainIcon />,
      title: "Maintain Mental Clarity",
      description: "When you're properly hydrated, your mind is sharp and focused. By addressing the root causes of dehydration, Cocofuel helps you achieve sustained mental clarity."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]">
      {/* Tropical island-inspired background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0]/15 via-transparent to-[#BFDBFE]/12"></div>
      
      {/* Floating organic shapes */}
      <motion.div 
        animate={{ 
          y: [-20, 20],
          rotate: [0, 6],
          scale: [1, 1.1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#06B6D4]/20 to-[#10B981]/15 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ 
          y: [15, -15],
          rotate: [0, -4],
          scale: [1.2, 1]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-[#14B8A6]/25 to-[#F59E0B]/15 rounded-full blur-xl"
      />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 font-secondary text-[#134E4A]">
            <motion.span
              className="bg-gradient-to-r from-[#14B8A6] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              How Cocofuel Fuels Your 
            </motion.span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-[#0EA5E9] via-[#14B8A6] to-[#10B981] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Rehydration Transformation
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-[#134E4A]/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Cocofuel, we believe in empowering you to live your most hydrated, balanced life. Our natural rehydration solution is designed to seamlessly integrate into your busy routine, transforming how you recover, perform, and feel throughout your day.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.15}
            />
          ))}
        </motion.div>
        
        {/* Enhanced wave animation at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#14B8A6]/30 via-[#06B6D4]/40 to-[#10B981]/30"
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}
