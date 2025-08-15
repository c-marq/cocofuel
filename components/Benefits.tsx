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
      className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-800 shadow-lg border border-slate-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
    >
      <motion.div 
        className="mb-4 text-4xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h6 className="text-lg font-semibold mb-2 text-white">{title}</h6>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
}

// Custom animated SVG icons
function BoltIcon({ color }: { color: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path d="m13 2-3 7h5l-3 7" />
    </motion.svg>
  );
}

function BeakerIcon({ color }: { color: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </motion.svg>
  );
}

function FireIcon({ color }: { color: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </motion.svg>
  );
}

function SparklesIcon({ color }: { color: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </motion.svg>
  );
}

function HeartIcon({ color }: { color: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" />
    </motion.svg>
  );
}

export default function Benefits() {
  const benefits = [
    {
      icon: <BoltIcon color="#FFD93D" />,
      title: "Sustained Energy",
      description: "Banish the midday slump and power through your day with natural, lasting vitality."
    },
    {
      icon: <BeakerIcon color="#6B99FF" />, 
      title: "Optimal Hydration", 
      description: "Replenish your body effectively, feeling refreshed and ready for anything."
    },
    {
      icon: <FireIcon color="#FF6B6B" />,
      title: "Enhanced Performance",
      description: "Transform your workouts, feeling strong and recovering faster."
    },
    {
      icon: <SparklesIcon color="#6BFFB3" />,
      title: "Pure & Natural",
      description: "No artificial ingredients, no sugary crash – just clean, effective fuel."
    },
    {
      icon: <HeartIcon color="#B36BFF" />,
      title: "Effortless Wellness",
      description: "Simple to use, perfectly portable, and seamlessly integrates into your busy life."
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Why Cocofuel Matters
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Five key benefits that transform your daily experience, addressing your deepest pain points with natural, effective solutions.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-red-400 to-purple-500 text-white font-semibold text-lg shadow-xl
                     focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Experience These Benefits Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
