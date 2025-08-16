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
        <div className="relative bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
          {/* Placeholder for video thumbnail */}
          <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber transition-colors duration-300">
                <PlayIcon className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-white font-semibold">Watch Cocofuel in Action</p>
              <p className="text-gray-300 text-sm mt-1">2 min demo video</p>
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      </motion.div>

      {/* Video Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          {/* Close button positioned fixed to viewport */}
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-6 right-6 text-white hover:text-gray-300 transition-colors z-[10001] bg-black/80 hover:bg-black rounded-full p-3 border border-white/20"
            style={{ zIndex: 10001 }}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          
          <motion.div
            className="relative max-w-4xl w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
              {/* Placeholder for actual video */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <PlayIcon className="w-16 h-16 mx-auto mb-4 text-coral" />
                  <p className="text-lg">Cocofuel Product Demo</p>
                  <p className="text-gray-300 text-sm">Video would play here</p>
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
      <div className="overflow-hidden rounded-xl shadow-2xl border border-slate-700">
        <motion.div
          className="flex"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white text-xl font-semibold">{image.title}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-coral' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="py-16 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            See{" "}
            <span className="bg-gradient-to-r from-coral to-amber bg-clip-text text-transparent">
              Cocofuel in Action
            </span>
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover how Cocofuel seamlessly integrates into your daily routine, providing 
            effortless hydration and sustained energy. Watch the transformation unfold.
          </p>
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
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { title: "Instant Hydration", desc: "Feel the difference within minutes" },
            { title: "Sustained Energy", desc: "No crashes, just steady vitality" },
            { title: "Natural Formula", desc: "Pure ingredients, powerful results" }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700">
              <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
