'use client';

import { motion } from 'framer-motion';
import TextHover from './TextHover';

const Solution = () => {
  return (
    <section id="solution" className="relative py-20 px-4 bg-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Brand Color Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-mint/30 to-sky/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-coral/20 to-amber/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-lavender/10 to-mint/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-6 lg:px-8 py-3 lg:py-4 rounded-full bg-gradient-to-r from-mint/20 to-sky/20 border border-mint/30 backdrop-blur-sm mb-8"
          >
            <span className="font-secondary font-semibold text-mint text-sm lg:text-base tracking-wide uppercase">
              Your Natural Solution
            </span>
          </motion.div>

          {/* Main Headline with TextHover */}
          <TextHover
            text="Cocofuel: Reclaim Your Vibrant Energy, Naturally."
            className="font-secondary font-bold text-4xl lg:text-6xl xl:text-7xl text-white leading-tight max-w-5xl mx-auto mb-8"
            hoverColors={["text-mint", "text-coral", "text-sky", "text-amber"]}
            splitType="words"
          />

          {/* Subtext with TextHover */}
          <TextHover
            text="Imagine a life where fatigue is a distant memory, and every workout leaves you feeling strong, not drained. Cocofuel is more than just hydration; it's a catalyst for your personal evolution. Our pure, natural formula provides sustained energy and clarity, empowering you to thrive in every aspect of your life. It's time to banish the self-doubt and embrace the vibrant, unstoppable you."
            className="font-primary text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
            hoverColors={["text-white", "text-mint", "text-sky"]}
            splitType="words"
          />
        </motion.div>

        {/* Solution Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {/* Natural Formula */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-mint/10 to-mint/5 border border-mint/20 backdrop-blur-sm hover:from-mint/20 hover:to-mint/10 hover:border-mint/40 transition-all duration-500 hover:scale-105"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-mint/30 to-mint/10 border border-mint/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="font-secondary font-bold text-xl lg:text-2xl text-mint mb-4">
                100% Natural Formula
              </h3>
              
              <p className="font-primary text-gray-400 leading-relaxed">
                Pure coconut water enhanced with natural electrolytes. No artificial additives, just nature's perfect hydration solution.
              </p>
            </div>
          </motion.div>

          {/* Sustained Energy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-amber/10 to-amber/5 border border-amber/20 backdrop-blur-sm hover:from-amber/20 hover:to-amber/10 hover:border-amber/40 transition-all duration-500 hover:scale-105"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-amber/30 to-amber/10 border border-amber/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="font-secondary font-bold text-xl lg:text-2xl text-amber mb-4">
                Sustained Energy
              </h3>
              
              <p className="font-primary text-gray-400 leading-relaxed">
                No crashes, no jitters. Our balanced formula provides steady, reliable energy that lasts throughout your entire day.
              </p>
            </div>
          </motion.div>

          {/* Mental Clarity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="group relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-sky/10 to-sky/5 border border-sky/20 backdrop-blur-sm hover:from-sky/20 hover:to-sky/10 hover:border-sky/40 transition-all duration-500 hover:scale-105"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-sky/30 to-sky/10 border border-sky/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="font-secondary font-bold text-xl lg:text-2xl text-sky mb-4">
                Enhanced Clarity
              </h3>
              
              <p className="font-primary text-gray-400 leading-relaxed">
                Clear your mental fog and sharpen your focus. Feel confident and unstoppable in everything you pursue.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Terminal Component for Scientific Facts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm">
            {/* Terminal Header */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-sm text-gray-400">~/cocofuel/science</span>
            </div>

            {/* Terminal Content */}
            <div className="font-mono text-sm lg:text-base">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <span className="text-mint">$</span> <span className="text-white">analyze ingredients --natural</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mb-6 text-gray-300 leading-relaxed"
              >
                <div className="mb-2">✓ <span className="text-mint">Coconut Water:</span> 600mg natural potassium</div>
                <div className="mb-2">✓ <span className="text-amber">Natural Electrolytes:</span> Optimal hydration balance</div>
                <div className="mb-2">✓ <span className="text-sky">Zero Artificial:</span> No synthetic additives</div>
                <div className="mb-2">✓ <span className="text-coral">Bioavailability:</span> 94% absorption rate</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-mint"
              >
                Analysis complete. ✓ Cocofuel delivers superior hydration naturally.
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 lg:px-12 py-4 lg:py-6 bg-gradient-to-r from-mint to-sky text-white font-secondary font-bold text-lg lg:text-xl rounded-full hover:from-mint/90 hover:to-sky/90 transition-all duration-300 shadow-2xl hover:shadow-mint/25"
          >
            Experience the Transformation
            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
