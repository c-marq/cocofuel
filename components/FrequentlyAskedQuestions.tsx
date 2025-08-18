"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

// Custom Chevron Icon
function ChevronDownIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[#14B8A6]/20 mb-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderColor: "rgba(20, 184, 166, 0.3)"
      }}
    >
      <motion.button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('FAQ button clicked:', question);
          onToggle();
        }}
        className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 cursor-pointer transition-all duration-300"
        style={{ zIndex: 10, position: 'relative' }}
        whileHover={{ 
          backgroundColor: "rgba(20, 184, 166, 0.05)",
          x: 2
        }}
        transition={{ duration: 0.2 }}
      >
        <h3 className={`text-lg font-semibold pr-4 font-secondary transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent' 
            : 'text-[#263238]'
        }`}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDownIcon className="w-5 h-5 text-[#14B8A6] flex-shrink-0" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.04, 0.62, 0.23, 0.98]
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[#263238]/80 leading-relaxed font-primary">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Terminal FAQ Component
function TerminalFAQ() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const terminalSteps = [
    { type: 'question', text: 'Q: Will I be charged after the free trial?' },
    { type: 'answer', text: 'A: No – you can continue on the free plan or choose to upgrade, no automatic charges.' },
    { type: 'question', text: 'Q: Can I cancel anytime?' },
    { type: 'answer', text: 'A: Yes, you can cancel your subscription at any time, no questions asked.' },
    { type: 'question', text: 'Q: Is Cocofuel suitable for all diets?' },
    { type: 'answer', text: 'A: Cocofuel is made with natural ingredients and is suitable for most dietary needs. Please check our ingredients list for full details.' }
  ];

  const startTerminalDemo = () => {
    console.log('Starting terminal demo...');
    setCurrentStep(0);
    setIsTyping(true);
    
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= terminalSteps.length - 1) {
          clearInterval(timer);
          setIsTyping(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-gray-400 text-sm">FAQ Terminal</div>
      </div>
      
      <div className="bg-slate-900 rounded p-4 min-h-[200px] font-mono text-sm">
        <div className="text-mint mb-2">$ cocofuel --faq</div>
        
        <div className="space-y-2">
          {terminalSteps.slice(0, currentStep + 1).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={step.type === 'question' ? 'text-coral' : 'text-gray-300'}
            >
              {step.text}
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-mint"
            >
              ▊
            </motion.div>
          )}
        </div>
        
        {!isTyping && currentStep === 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Terminal demo button clicked');
              startTerminalDemo();
            }}
            className="mt-4 text-mint hover:text-sky transition-colors duration-300 cursor-pointer bg-transparent border-none underline"
            style={{ zIndex: 10, position: 'relative' }}
          >
            → Click to start FAQ demo
          </button>
        )}
        
        {!isTyping && currentStep > 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Terminal replay button clicked');
              startTerminalDemo();
            }}
            className="mt-4 text-mint hover:text-sky transition-colors duration-300 cursor-pointer bg-transparent border-none underline"
            style={{ zIndex: 10, position: 'relative' }}
          >
            → Replay demo
          </button>
        )}
      </div>
    </div>
  );
}

// Main FAQ Component
export default function FrequentlyAskedQuestions() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState<{
    isOpen: boolean;
    formType: 'contact' | 'support';
  }>({
    isOpen: false,
    formType: 'support'
  });

  const faqs = [
    {
      question: "How is Cocofuel different from other hydration drinks?",
      answer: "Cocofuel is made from 100% pure coconut water powder with no artificial additives, sweeteners, or preservatives. Unlike sports drinks that rely on synthetic electrolytes and sugars, Cocofuel provides naturally occurring potassium, magnesium, and calcium that your body recognizes and absorbs more efficiently. Our unique freeze-drying process preserves all the natural nutrients while creating a convenient powder form that's perfect for on-the-go hydration."
    },
    {
      question: "What makes coconut water powder effective for rehydration?",
      answer: "Coconut water is nature's sports drink, containing the perfect balance of electrolytes your body needs. It has more potassium than four bananas and contains natural cytokinins that support cellular hydration and recovery. Our powder form concentrates these benefits while making them shelf-stable and travel-friendly, so you can enjoy optimal hydration anywhere, anytime."
    },
    {
      question: "How quickly will I notice improved hydration?",
      answer: "Most people notice improved energy and reduced fatigue within 15-30 minutes of consuming Cocofuel. For optimal hydration benefits, consistent daily use for 3-7 days will help your body maintain better fluid balance throughout the day. Athletes and active individuals often report faster recovery times and sustained energy during workouts when using Cocofuel regularly."
    },
    {
      question: "Is Cocofuel safe for daily use?",
      answer: "Absolutely! Cocofuel is made from 100% natural coconut water with no artificial ingredients, making it safe for daily consumption. It's naturally low in sugar and contains no stimulants, artificial colors, or preservatives. However, if you have any medical conditions or take medications, we recommend consulting with your healthcare provider before adding any new supplement to your routine."
    },
    {
      question: "What's the best time to use Cocofuel?",
      answer: "Cocofuel is versatile and effective throughout the day. Many people enjoy it first thing in the morning to kickstart hydration, before or after workouts for optimal performance and recovery, or during the afternoon energy dip instead of reaching for caffeine. For best results, we recommend consuming Cocofuel when you need sustained energy and hydration - whether that's during travel, intense work sessions, or physical activities."
    }
  ];

  const toggleItem = (index: number) => {
    console.log('Toggling FAQ item:', index, 'Current open:', openItem);
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-[#ECFDF5] to-[#F0F9FF]">
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#134E4A] mb-6 font-secondary">
            Your{" "}
            <span className="bg-gradient-to-r from-[#14B8A6] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
              Questions, Answered
            </span>
          </h2>
          <p className="text-[#134E4A]/80 text-lg max-w-2xl mx-auto font-primary">
            Everything you need to know about Cocofuel. Can't find what you're looking for? 
            Contact our friendly support team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === index}
                  onToggle={() => toggleItem(index)}
                />
              </motion.div>
            ))}
          </motion.div>
            
          {/* Contact CTA */}
          <motion.div 
            className="mt-12 p-8 bg-white/60 backdrop-blur-sm border border-[#14B8A6]/30 rounded-2xl relative z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ 
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderColor: "rgba(20, 184, 166, 0.4)",
              scale: 1.02
            }}
          >
            <h4 className="text-[#134E4A] font-bold text-xl mb-3 font-secondary">Still have questions?</h4>
            <p className="text-[#134E4A]/70 text-lg mb-6 font-primary max-w-md mx-auto">
              Our support team is here to help you make the best choice for your hydration needs.
            </p>
            <motion.button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('FAQ Contact Support button clicked - before state update');
                setContactForm({
                  isOpen: true,
                  formType: 'support'
                });
                console.log('FAQ Contact Support button clicked - after state update');
              }}
              className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] hover:from-[#F59E0B]/90 hover:to-[#F97316]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer relative z-10 font-secondary shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={contactForm.isOpen}
        onClose={() => {
          console.log('FAQ modal onClose called');
          setContactForm({ ...contactForm, isOpen: false });
        }}
        formType={contactForm.formType}
      />
    </section>
  );
}
