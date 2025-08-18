"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "How is Cocofuel different from other hydration drinks?",
    answer: (
      <div className="space-y-3 leading-relaxed text-[#134E4A]/80 font-primary">
        <p>Cocofuel is made from 100% pure coconut water powder with no artificial additives, sweeteners, or preservatives. Unlike sports drinks that rely on synthetic electrolytes and sugars, Cocofuel provides naturally occurring potassium, magnesium, and calcium that your body recognizes and absorbs more efficiently.</p>
        <p>Our unique freeze-drying process preserves all the natural nutrients while creating a convenient powder form that's perfect for on-the-go hydration.</p>
      </div>
    ),
  },
  {
    question: "What makes coconut water powder effective for rehydration?",
    answer: (
      <div className="space-y-3 leading-relaxed text-[#134E4A]/80 font-primary">
        <p>Coconut water is nature's sports drink, containing the perfect balance of electrolytes your body needs. It has more potassium than four bananas and contains natural cytokinins that support cellular hydration and recovery.</p>
        <p>Our powder form concentrates these benefits while making them shelf-stable and travel-friendly, so you can enjoy optimal hydration anywhere, anytime.</p>
      </div>
    ),
  },
  {
    question: "How quickly will I notice improved hydration?",
    answer: (
      <div className="space-y-3 leading-relaxed text-[#134E4A]/80 font-primary">
        <p>Most people notice improved energy and reduced fatigue within 15-30 minutes of consuming Cocofuel. For optimal hydration benefits, consistent daily use for 3-7 days will help your body maintain better fluid balance throughout the day.</p>
        <p>Athletes and active individuals often report faster recovery times and sustained energy during workouts when using Cocofuel regularly.</p>
      </div>
    ),
  },
  {
    question: "Is Cocofuel safe for daily use?",
    answer: (
      <div className="space-y-3 leading-relaxed text-[#134E4A]/80 font-primary">
        <p>Absolutely! Cocofuel is made from 100% natural coconut water with no artificial ingredients, making it safe for daily consumption. It's naturally low in sugar and contains no stimulants, artificial colors, or preservatives.</p>
        <p>However, if you have any medical conditions or take medications, we recommend consulting with your healthcare provider before adding any new supplement to your routine.</p>
      </div>
    ),
  },
  {
    question: "What's the best time to use Cocofuel?",
    answer: (
      <div className="space-y-3 leading-relaxed text-[#134E4A]/80 font-primary">
        <p>Cocofuel is versatile and effective throughout the day. Many people enjoy it first thing in the morning to kickstart hydration, before or after workouts for optimal performance and recovery, or during the afternoon energy dip instead of reaching for caffeine.</p>
        <p>For best results, we recommend consuming Cocofuel when you need sustained energy and hydration - whether that's during travel, intense work sessions, or physical activities.</p>
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li 
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#14B8A6]/20 shadow-lg mb-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="relative flex gap-2 items-center w-full py-6 px-6 text-base font-semibold text-left md:text-lg transition-all duration-300"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        whileHover={{ 
          backgroundColor: "rgba(20, 184, 166, 0.05)",
          x: 2
        }}
        transition={{ duration: 0.2 }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 font-secondary transition-colors duration-300 ${
            isOpen 
              ? "bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent" 
              : "text-[#134E4A]"
          }`}
        >
          {item?.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-6 h-6 ml-auto"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke={isOpen ? "#14B8A6" : "#134E4A"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={accordion}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1]
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">{item?.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

const FAQ = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]" id="faq">
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
        className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-[#14B8A6]/15 to-[#06B6D4]/10 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ 
          y: [20, -20],
          rotate: [0, -5],
          scale: [1.3, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-16 left-12 w-32 h-32 bg-gradient-to-br from-[#F59E0B]/20 to-[#10B981]/15 rounded-full blur-xl"
      />

      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        <motion.div 
          className="flex flex-col text-left basis-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="inline-block font-semibold bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent mb-4 font-secondary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FAQ
          </motion.p>
          <motion.h2 
            className="sm:text-4xl text-3xl font-bold text-[#134E4A] font-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-[#134E4A]/70 mt-4 leading-relaxed font-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get answers to the most common questions about Cocofuel and discover how natural hydration can transform your daily energy and wellness.
          </motion.p>
        </motion.div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
