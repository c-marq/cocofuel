"use client";

import { motion } from "framer-motion";
import TextHover from "./TextHover";

// Animated Icon Component for Problem Points
const AnimatedIcon = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
      className="text-6xl mb-4"
    >
      {children}
    </motion.div>
  );
};

// Arrow component for flow visualization
const FlowArrow = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.7 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className={`shrink-0 w-12 fill-red-400 ${extraStyle}`}
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
        />
      </g>
    </motion.svg>
  );
};
const ProblemStep = ({ imageUrl, text, description, color, delay = 0 }: { 
  imageUrl: string;
  text: string; 
  description: string;
  color: 'coral' | 'amber' | 'sky';
  delay?: number;
}) => {
  const colorVariants = {
    coral: {
      bg: 'from-coral/20 to-coral/5',
      border: 'border-coral/30',
      text: 'text-coral',
      glow: 'shadow-coral/20'
    },
    amber: {
      bg: 'from-amber/20 to-amber/5',
      border: 'border-amber/30', 
      text: 'text-amber',
      glow: 'shadow-amber/20'
    },
    sky: {
      bg: 'from-sky/20 to-sky/5',
      border: 'border-sky/30',
      text: 'text-sky', 
      glow: 'shadow-sky/20'
    }
  };

  const variant = colorVariants[color];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      viewport={{ once: true }}
      className="w-full md:w-80 flex flex-col gap-6 items-center justify-center text-center group"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
        className={`relative w-40 h-40 rounded-3xl overflow-hidden border-2 ${variant.border} shadow-2xl ${variant.glow} group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${variant.bg} z-10`}></div>
        <img 
          src={imageUrl}
          alt={text}
          className="w-full h-full object-cover object-center filter saturate-50 group-hover:saturate-100 transition-all duration-500"
        />
      </motion.div>
      
      <div className="space-y-2">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          viewport={{ once: true }}
          className={`font-secondary font-bold text-xl ${variant.text} leading-tight`}
        >
          {text}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
          viewport={{ once: true }}
          className="font-primary text-sm text-gray-400 leading-relaxed max-w-64"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

// The Daily Drain: Problem Agitation Section
// Validates Emily's struggles without mentioning Cocofuel
// Establishes deep empathy and emotional connection
const Problem = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20 lg:py-32 overflow-hidden">
      {/* Brand color accent background */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-amber/5 to-mint/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-coral/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Headline with TextHover effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <TextHover
            text="The Daily Drain: Why You're Feeling Less Than Your Best"
            className="font-secondary font-bold text-3xl lg:text-5xl text-white leading-tight max-w-4xl mx-auto"
            hoverColors={["text-coral", "text-amber", "text-mint"]}
            splitType="words"
          />
        </motion.div>

        {/* Subtext with emotional resonance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <TextHover
            text="You wake up with ambition, but by midday, a familiar fatigue sets in. Your workouts leave you more depleted than empowered. You've tried everything, but sugary drinks and artificial solutions only add to your frustration. That constant whisper of 'not enough' is eroding your ambition, leaving you wondering: Am I truly living up to my potential?"
            className="font-primary text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            hoverColors={["text-white", "text-coral", "text-amber"]}
            splitType="words"
          />
        </motion.div>

        {/* Visual Problem Flow with Brand Colors */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-16">
          <ProblemStep 
            imageUrl="https://images.unsplash.com/photo-1573497622711-5bd615bc70ae?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            text="Morning Ambition Fades" 
            description="Starting strong but losing steam by 10am"
            color="coral"
            delay={0.1}
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-coral to-amber"></div>
          </motion.div>

          <ProblemStep 
            imageUrl="https://images.unsplash.com/photo-1713947503867-3b27964f042b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            text="Midday Energy Crash" 
            description="That 2pm wall hits harder than expected"
            color="amber"
            delay={0.3}
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber to-sky"></div>
          </motion.div>

          <ProblemStep 
            imageUrl="https://images.unsplash.com/photo-1612469293045-749ac41b70a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            text="Self-Doubt Creeps In" 
            description="'Am I not cut out for this?' whispers grow louder"
            color="sky"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Problem;
