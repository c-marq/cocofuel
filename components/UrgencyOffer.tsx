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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex justify-center gap-4 text-center">
      {Object.keys(timeLeft).length > 0 ? (
        <>
          <motion.div 
            className="bg-white/70 backdrop-blur-sm border border-[#14B8A6]/30 rounded-2xl p-4 min-w-[80px] shadow-lg"
            animate={{ 
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 10px 25px rgba(20, 184, 166, 0.1)",
                "0 15px 35px rgba(20, 184, 166, 0.2)",
                "0 10px 25px rgba(20, 184, 166, 0.1)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent font-secondary"
              key={timeLeft.days}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 360 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {formatNumber(timeLeft.days || 0)}
            </motion.div>
            <div className="text-xs text-[#134E4A]/70 uppercase tracking-wide font-primary">Days</div>
          </motion.div>
          <motion.div 
            className="bg-white/70 backdrop-blur-sm border border-[#F59E0B]/30 rounded-2xl p-4 min-w-[80px] shadow-lg"
            animate={{ 
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 10px 25px rgba(245, 158, 11, 0.1)",
                "0 15px 35px rgba(245, 158, 11, 0.2)",
                "0 10px 25px rgba(245, 158, 11, 0.1)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          >
            <motion.div 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent font-secondary"
              key={timeLeft.hours}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 360 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {formatNumber(timeLeft.hours || 0)}
            </motion.div>
            <div className="text-xs text-[#134E4A]/70 uppercase tracking-wide font-primary">Hours</div>
          </motion.div>
          <motion.div 
            className="bg-white/70 backdrop-blur-sm border border-[#10B981]/30 rounded-2xl p-4 min-w-[80px] shadow-lg"
            animate={{ 
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 10px 25px rgba(16, 185, 129, 0.1)",
                "0 15px 35px rgba(16, 185, 129, 0.2)",
                "0 10px 25px rgba(16, 185, 129, 0.1)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          >
            <motion.div 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent font-secondary"
              key={timeLeft.minutes}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 360 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {formatNumber(timeLeft.minutes || 0)}
            </motion.div>
            <div className="text-xs text-[#134E4A]/70 uppercase tracking-wide font-primary">Min</div>
          </motion.div>
          <motion.div 
            className="bg-white/70 backdrop-blur-sm border border-[#06B6D4]/30 rounded-2xl p-4 min-w-[80px] shadow-lg"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 10px 25px rgba(6, 182, 212, 0.15)",
                "0 20px 40px rgba(6, 182, 212, 0.3)",
                "0 10px 25px rgba(6, 182, 212, 0.15)"
              ]
            }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
          >
            <motion.div 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#0891B2] bg-clip-text text-transparent font-secondary"
              key={timeLeft.seconds}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 360 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {formatNumber(timeLeft.seconds || 0)}
            </motion.div>
            <div className="text-xs text-[#134E4A]/70 uppercase tracking-wide font-primary">Sec</div>
          </motion.div>
        </>
      ) : (
        <div className="text-xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">Time's up!</div>
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
      
      <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              y: [-20, 20],
              rotate: [0, 5],
              scale: [1, 1.1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/15 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              y: [15, -15],
              rotate: [0, -3],
              scale: [1.2, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-[#14B8A6]/25 to-[#06B6D4]/20 rounded-full blur-3xl"
          />
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
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent mb-4 font-secondary"
              delay={100}
            />
            <h2 className="text-4xl md:text-5xl font-bold text-[#134E4A] font-secondary">
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
            <p className="text-xl text-[#134E4A]/80 mb-6 max-w-2xl mx-auto font-primary">
              Get <span className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent font-bold text-2xl">20% off</span> your first order and start your rehydration journey today! 
              Join thousands who are transforming their hydration with Cocofuel.
            </p>
            
            {/* Special Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <motion.div 
                className="bg-white/70 backdrop-blur-sm border border-[#14B8A6]/20 rounded-2xl p-6 shadow-lg"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent text-lg font-semibold font-secondary">✨ FREE Shipping</div>
                <div className="text-[#134E4A]/70 text-sm font-primary">On your first order</div>
              </motion.div>
              <motion.div 
                className="bg-white/70 backdrop-blur-sm border border-[#F59E0B]/20 rounded-2xl p-6 shadow-lg"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent text-lg font-semibold font-secondary">🎁 Bonus Guide</div>
                <div className="text-[#134E4A]/70 text-sm font-primary">Energy optimization tips</div>
              </motion.div>
              <motion.div 
                className="bg-white/70 backdrop-blur-sm border border-[#10B981]/20 rounded-2xl p-6 shadow-lg"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent text-lg font-semibold font-secondary">💪 30-Day Guarantee</div>
                <div className="text-[#134E4A]/70 text-sm font-primary">Risk-free trial</div>
              </motion.div>
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
            <div className="text-[#134E4A] text-lg mb-4 font-semibold font-secondary">
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
              className="px-10 py-5 rounded-full bg-gradient-to-r from-coral to-amber text-white font-bold text-xl shadow-2xl border-2 border-coral/30 font-secondary"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 25px 50px rgba(255, 138, 101, 0.5)",
                borderColor: "rgba(255, 138, 101, 0.8)",
                background: "linear-gradient(to right, #FF8A65, #FFC107)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              Claim Your Discount
            </motion.button>
            
            <p className="text-[#134E4A]/70 text-sm mt-4 font-primary">
              No code required • Automatically applied at checkout
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
