"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// Custom Star Icon Component
function StarIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface TestimonialCardProps {
  author: string;
  text: string;
  delay: number;
  rating: number;
}

interface StarRatingProps {
  rating: number;
}

function TestimonialCard({ author, text, delay, rating }: TestimonialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#14B8A6]/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.03, 
        y: -8,
        boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)",
        backgroundColor: "rgba(240, 253, 250, 0.95)"
      }}
    >
      {/* Subtle gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 to-[#06B6D4]/5 rounded-2xl"
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <motion.p 
          className="text-[#134E4A] leading-relaxed mb-6 text-base font-primary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          "{text}"
        </motion.p>
        <div className="flex items-center justify-between">
          <motion.p 
            className="text-[#134E4A]/80 font-semibold text-sm font-secondary"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.3 }}
          >
            - {author}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.4, type: "spring" }}
          >
            <StarRating rating={rating} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center justify-end">
      {[...Array(rating)].map((_, i) => (
        <StarIcon
          key={i}
          className="h-5 w-5 text-[#F59E0B]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialMarquee() {
  const testimonials = [
    "Cocofuel has completely changed my hydration game! I stay properly hydrated throughout the day and my recovery is so much faster. - Emily J.",
    "I've tried countless hydration products, but Cocofuel is different. It's natural, tastes amazing, and gives me the deep rehydration I need. - Sarah L.", 
    "No more sugary, artificial drinks that leave me feeling worse. Cocofuel delivers essential electrolytes and natural coconut water powder. - Alex M.",
    "Life is busy, and proper hydration shouldn't be complicated. Cocofuel offers a quick, convenient, and portable rehydration solution. - Jordan K.",
    "When I'm properly hydrated, my mind is sharp and focused. Cocofuel helps me achieve sustained mental clarity. - Maya T."
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div 
        className="flex gap-12 whitespace-nowrap will-change-transform"
        animate={{ x: [0, "-50%"] }}
        transition={{ 
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ width: "200%" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <div key={i} className="text-[#134E4A]/70 text-base italic flex-shrink-0 px-6 font-primary">
            "{testimonial}"
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SocialProof() {
  const testimonials = [
    {
      author: "Emily J., Marketing Coordinator",
      text: "Cocofuel has completely changed my hydration game! As a marketing coordinator, I used to feel parched and mentally foggy every afternoon. Since I started using Cocofuel, I stay properly hydrated throughout the day, my recovery after workouts is so much faster, and I no longer feel that constant dehydration. It's truly helped me reclaim my optimal balance!",
      rating: 5
    },
    {
      author: "Sarah L., Fitness Enthusiast", 
      text: "I've tried countless hydration products, but nothing ever felt right – too sugary, too artificial, or just didn't work. Cocofuel is different. It's natural, tastes amazing, and gives me the deep rehydration I need to power through my hikes and yoga sessions. I feel so much more in control of my hydration now.",
      rating: 5
    }
  ];

  return (
    <section id="social-proof" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]">
      {/* Tropical island-inspired background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0]/15 via-transparent to-[#BFDBFE]/12"></div>
      
      {/* Floating organic shapes */}
      <motion.div 
        animate={{ 
          y: [-25, 25],
          rotate: [0, 8],
          scale: [1, 1.15]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-16 right-12 w-40 h-40 bg-gradient-to-br from-[#06B6D4]/25 to-[#10B981]/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [20, -20],
          rotate: [0, -6],
          scale: [1.3, 1]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-20 left-8 w-32 h-32 bg-gradient-to-br from-[#14B8A6]/30 to-[#F59E0B]/20 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-[#134E4A]/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Don't just take our word for it. Hear from real people who have embraced Cocofuel and transformed their hydration journey. Their experiences reflect the very rehydration transformation you're seeking – from feeling depleted and dehydrated to optimally balanced and recovered.
          </motion.p>
          
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6 font-secondary text-[#134E4A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="bg-gradient-to-r from-[#14B8A6] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Real Stories, Real Results
            </motion.span>
          </motion.h3>
          
          <motion.div 
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <StarRating rating={5} />
            <span className="text-[#134E4A]/70 text-lg font-medium">(4.9/5) based on customer reviews</span>
          </motion.div>
          
          <motion.p 
            className="text-[#134E4A]/60 text-sm italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            "Featured as a top rehydration essential by Well+Good and MindBodyGreen."
          </motion.p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <motion.div 
          className="mb-20 py-8 bg-gradient-to-r from-white/60 to-[#F0FDFA]/80 backdrop-blur-sm rounded-2xl border border-[#14B8A6]/10 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TestimonialMarquee />
        </motion.div>

        {/* Individual Testimonial Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              author={testimonial.author}
              text={testimonial.text}
              rating={testimonial.rating}
              delay={index * 0.2}
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
