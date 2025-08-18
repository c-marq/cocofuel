"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// Custom Icons
function PlayIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}

function XMarkIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

interface ProductImage {
  src: string;
  alt: string;
  title: string;
}

function HeroVideoDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Video Thumbnail */}
      <motion.div
        className="relative cursor-pointer group"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative bg-gradient-to-br from-white/90 to-[#F0FDFA]/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-[#14B8A6]/20">
          {/* Placeholder for video thumbnail */}
          <div className="aspect-video bg-gradient-to-br from-[#14B8A6]/10 to-[#06B6D4]/15 flex items-center justify-center">
            <div className="text-center">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              </motion.div>
              <p className="text-[#134E4A] font-semibold font-secondary">Watch Cocofuel in Action</p>
              <p className="text-[#134E4A]/70 text-sm mt-1">2 min demo video</p>
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#14B8A6]/5 group-hover:bg-[#14B8A6]/10 transition-colors duration-300" />
        </div>
      </motion.div>

      {/* Video Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#134E4A]/90 via-black/80 to-[#134E4A]/90 backdrop-blur-sm"
          style={{ zIndex: 999999 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          {/* Close button positioned fixed to viewport */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="fixed top-6 right-6 text-white hover:text-white transition-all duration-300 bg-black/80 hover:bg-black/90 rounded-full p-4 border-2 border-white/80 hover:border-white shadow-2xl backdrop-blur-sm"
            style={{ zIndex: 9999999 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <XMarkIcon className="w-7 h-7" />
          </motion.button>
          
          <motion.div
            className="relative max-w-4xl w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="aspect-video bg-gradient-to-br from-[#134E4A] to-[#0F766E] rounded-2xl overflow-hidden shadow-2xl border border-[#14B8A6]/30">
              {/* Placeholder for actual video */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 10px 30px rgba(20, 184, 166, 0.3)",
                        "0 20px 50px rgba(20, 184, 166, 0.5)",
                        "0 10px 30px rgba(20, 184, 166, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <PlayIcon className="w-10 h-10 text-white ml-1" />
                  </motion.div>
                  <p className="text-xl font-semibold font-secondary mb-2">Cocofuel Product Demo</p>
                  <p className="text-[#14B8A6] text-sm">Video would play here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

function ProductImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images: ProductImage[] = [
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&h=400&fit=crop",
      alt: "Cocofuel at the gym",
      title: "Power Through Your Workout"
    },
    {
      src: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=600&h=400&fit=crop",
      alt: "Cocofuel in the office",
      title: "Stay Energized at Work"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&h=400&fit=crop",
      alt: "Cocofuel outdoors",
      title: "Fuel Your Adventures"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden rounded-2xl shadow-xl border border-[#14B8A6]/20 bg-white/50 backdrop-blur-sm">
        <motion.div
          className="flex"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ 
            duration: 0.7, 
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            damping: 20
          }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="w-full flex-shrink-0 relative"
              initial={{ opacity: 0.8 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0.8,
                scale: currentSlide === index ? 1 : 0.98
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#134E4A]/70 via-transparent to-[#14B8A6]/20" />
              <motion.div 
                className="absolute bottom-6 left-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-white text-xl font-semibold font-secondary drop-shadow-lg">{image.title}</h4>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#134E4A] hover:text-[#14B8A6] p-3 rounded-full transition-all duration-300 shadow-lg border border-[#14B8A6]/20 hover:border-[#14B8A6]/40"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 25px rgba(20, 184, 166, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#134E4A] hover:text-[#14B8A6] p-3 rounded-full transition-all duration-300 shadow-lg border border-[#14B8A6]/20 hover:border-[#14B8A6]/40"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 25px rgba(20, 184, 166, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      <div className="flex justify-center mt-8 space-x-3">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'w-8 bg-gradient-to-r from-[#14B8A6] to-[#06B6D4]' 
                : 'w-2 bg-[#14B8A6]/30 hover:bg-[#14B8A6]/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]">
      {/* Tropical island-inspired background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0]/15 via-transparent to-[#BFDBFE]/12"></div>
      
      {/* Floating organic shapes */}
      <motion.div 
        animate={{ 
          y: [-30, 30],
          rotate: [0, 10],
          scale: [1, 1.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-24 right-16 w-48 h-48 bg-gradient-to-br from-[#06B6D4]/20 to-[#10B981]/15 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          y: [25, -25],
          rotate: [0, -8],
          scale: [1.4, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-24 left-12 w-36 h-36 bg-gradient-to-br from-[#14B8A6]/25 to-[#F59E0B]/20 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6 font-secondary text-[#134E4A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See{" "}
            <motion.span
              className="bg-gradient-to-r from-[#14B8A6] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Cocofuel in Action
            </motion.span>
          </motion.h3>
          <motion.p 
            className="text-[#134E4A]/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how Cocofuel seamlessly fits into your life, transforming your hydration, recovery, and overall well-being. From staying optimally hydrated during your busiest days to recovering faster from your toughest workouts, Cocofuel is your natural partner for sustained balance.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HeroVideoDialog />
          </motion.div>

          {/* Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProductImageCarousel />
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { 
              title: "Instant Hydration", 
              desc: "Feel the difference within minutes",
              gradient: "from-[#14B8A6] to-[#06B6D4]"
            },
            { 
              title: "Sustained Energy", 
              desc: "No crashes, just steady vitality",
              gradient: "from-[#F59E0B] to-[#D97706]"
            },
            { 
              title: "Natural Formula", 
              desc: "Pure ingredients, powerful results",
              gradient: "from-[#10B981] to-[#059669]"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#14B8A6]/20 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px rgba(20, 184, 166, 0.15)"
              }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {index === 0 && (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )}
              </motion.div>
              <h4 className="text-[#134E4A] font-semibold text-xl mb-3 font-secondary">{feature.title}</h4>
              <p className="text-[#134E4A]/70 text-sm leading-relaxed font-primary">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
