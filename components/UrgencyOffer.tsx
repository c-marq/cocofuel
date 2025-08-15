"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Countdown Timer Component
function CountdownTimer({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex justify-center gap-4 text-center">
      {Object.keys(timeLeft).length > 0 ? (
        <>
          <div className="bg-coral/20 border border-coral/30 rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl md:text-3xl font-bold text-coral">
              {formatNumber(timeLeft.days || 0)}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wide">Days</div>
          </div>
          <div className="bg-coral/20 border border-coral/30 rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl md:text-3xl font-bold text-coral">
              {formatNumber(timeLeft.hours || 0)}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wide">Hours</div>
          </div>
          <div className="bg-coral/20 border border-coral/30 rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl md:text-3xl font-bold text-coral">
              {formatNumber(timeLeft.minutes || 0)}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wide">Min</div>
          </div>
          <div className="bg-coral/20 border border-coral/30 rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl md:text-3xl font-bold text-coral">
              {formatNumber(timeLeft.seconds || 0)}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wide">Sec</div>
          </div>
        </>
      ) : (
        <div className="text-xl font-bold text-coral">Time's up!</div>
      )}
    </div>
  );
}

// Announcement Banner Component
function AnnouncementBanner({ message }: { message: string }) {
  return (
    <motion.div 
      className="w-full bg-gradient-to-r from-coral to-amber text-white text-center py-3 text-sm font-medium"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {message}
      </motion.div>
    </motion.div>
  );
}

// Split Text Animation Component
function SplitText({ text, className = "", delay = 50 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(' ');
  
  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4, 
            delay: index * (delay / 1000),
            ease: "easeOut"
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export default function UrgencyOffer() {
  // Set target date to 24 hours from now
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const targetDate = tomorrow.toISOString();

  return (
    <>
      {/* Announcement Banner */}
      <AnnouncementBanner message="🔥 Get 20% off your first month! Limited time offer - ends soon!" />
      
      <section className="py-16 px-4 bg-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-coral/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Main Headline with Split Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <SplitText 
              text="Don't Miss Out!"
              className="text-3xl md:text-4xl font-bold text-coral mb-4"
              delay={100}
            />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
              Limited-Time{" "}
              <span className="bg-gradient-to-r from-coral to-amber bg-clip-text text-transparent">
                Special Offer
              </span>
            </h2>
          </motion.div>

          {/* Offer Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Get <span className="text-coral font-bold text-2xl">20% off</span> your first month when you sign up today! 
              Join thousands who are transforming their energy with Cocofuel.
            </p>
            
            {/* Special Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 border border-coral/20 rounded-lg p-4">
                <div className="text-coral text-lg font-semibold">✨ FREE Shipping</div>
                <div className="text-gray-300 text-sm">On your first order</div>
              </div>
              <div className="bg-slate-800/50 border border-amber/20 rounded-lg p-4">
                <div className="text-amber text-lg font-semibold">🎁 Bonus Guide</div>
                <div className="text-gray-300 text-sm">Energy optimization tips</div>
              </div>
              <div className="bg-slate-800/50 border border-mint/20 rounded-lg p-4">
                <div className="text-mint text-lg font-semibold">💪 30-Day Guarantee</div>
                <div className="text-gray-300 text-sm">Risk-free trial</div>
              </div>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-white text-lg mb-4 font-semibold">
              ⏰ Offer expires in:
            </div>
            <CountdownTimer targetDate={targetDate} />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="px-10 py-5 rounded-full bg-gradient-to-r from-coral to-amber text-white font-bold text-xl shadow-2xl border-2 border-coral/30"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(255, 107, 107, 0.4)",
                borderColor: "rgba(255, 107, 107, 0.6)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Claim Your 20% Discount Now! 🚀
            </motion.button>
            
            <p className="text-gray-400 text-sm mt-4">
              No code required • Automatically applied at checkout
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
