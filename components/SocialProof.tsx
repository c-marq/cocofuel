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
      className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
    >
      <p className="text-gray-300 italic mb-4 text-sm">"{text}"</p>
      <div className="flex items-center justify-between">
        <p className="text-white font-semibold text-sm">- {author}</p>
        <StarRating rating={rating} />
      </div>
    </motion.div>
  );
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-amber-400' : 'text-slate-600'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialMarquee() {
  const testimonials = [
    "Cocofuel changed my life! I used to drag myself through workouts, but now I feel energized and strong. It's truly transformative. - Emily J.",
    "Finally, a hydration solution that actually works and aligns with my values. No more sugary drinks, just pure vitality. - Sarah L.", 
    "I feel so much more in control of my health since I started using Cocofuel. It's the perfect fuel for my busy life. - Alex P.",
    "My workouts have never been better! The sustained energy keeps me going without any crashes. - Chris R.",
    "Pure, natural ingredients that actually deliver results. I'm never going back to artificial drinks. - Maya T."
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div 
        className="flex gap-8 whitespace-nowrap will-change-transform"
        animate={{ x: [0, "-50%"] }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ width: "200%" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, i) => (
          <div key={i} className="text-gray-300 text-sm italic flex-shrink-0 px-4">
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
      author: "Emily J.",
      text: "Cocofuel changed my life! I used to drag myself through workouts, but now I feel energized and strong. It's truly transformative.",
      rating: 5
    },
    {
      author: "Sarah L.", 
      text: "Finally, a hydration solution that actually works and aligns with my values. No more sugary drinks, just pure vitality.",
      rating: 5
    },
    {
      author: "Alex P.",
      text: "I feel so much more in control of my health since I started using Cocofuel. It's the perfect fuel for my busy life.",
      rating: 5
    }
  ];

  return (
    <section id="social-proof" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Hear From Our{" "}
            <span className="bg-gradient-to-r from-mint to-sky bg-clip-text text-transparent">
              Vibrant Community
            </span>
          </h3>
          <div className="flex items-center justify-center gap-2 mb-6">
            <StarRating rating={5} />
            <span className="text-gray-300 text-sm">4.9 out of 5 stars from 500+ reviews</span>
          </div>
        </motion.div>

        {/* Scrolling Testimonials */}
        <motion.div 
          className="mb-16 py-6 bg-slate-800/50 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TestimonialMarquee />
        </motion.div>

        {/* Individual Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              author={testimonial.author}
              text={testimonial.text}
              rating={testimonial.rating}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
