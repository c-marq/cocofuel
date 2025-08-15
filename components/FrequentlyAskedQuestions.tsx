"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
    <div className="border-b border-slate-700">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none focus:ring-2 focus:ring-coral/50 rounded-lg px-2"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-8 text-gray-300 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
            onClick={startTerminalDemo}
            className="mt-4 text-mint hover:text-sky transition-colors duration-300"
          >
            → Click to start FAQ demo
          </button>
        )}
        
        {!isTyping && currentStep > 0 && (
          <button
            onClick={startTerminalDemo}
            className="mt-4 text-mint hover:text-sky transition-colors duration-300"
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

  const faqs = [
    {
      question: "Will I be charged after the free trial?",
      answer: "No – you can continue on the free plan or choose to upgrade, no automatic charges. We believe in transparency and giving you control over your subscription."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time, no questions asked. We make it easy to manage your account through your dashboard."
    },
    {
      question: "Is Cocofuel suitable for all diets?",
      answer: "Cocofuel is made with natural ingredients and is suitable for most dietary needs, including vegan and gluten-free diets. Please check our detailed ingredients list for full information."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most customers notice increased energy and improved hydration within the first few days. Sustained benefits typically develop over 1-2 weeks of consistent use."
    },
    {
      question: "What makes Cocofuel different from other energy drinks?",
      answer: "Unlike artificial energy drinks that cause crashes, Cocofuel uses natural coconut water and organic ingredients to provide sustained energy without the jitters or afternoon slump."
    },
    {
      question: "Is shipping free?",
      answer: "Yes! We offer free shipping on all orders over $50. Orders under $50 have a flat $5.99 shipping fee. All orders are processed within 1-2 business days."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Your{" "}
            <span className="bg-gradient-to-r from-sky to-mint bg-clip-text text-transparent">
              Questions, Answered
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about Cocofuel. Can't find what you're looking for? 
            Contact our friendly support team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Traditional FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Frequently Asked Questions</h3>
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItem === index}
                  onToggle={() => toggleItem(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Interactive Terminal FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Interactive FAQ</h3>
            <TerminalFAQ />
            
            {/* Contact CTA */}
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-coral/10 to-sky/10 border border-coral/20 rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-white font-semibold text-lg mb-2">Still have questions?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Our support team is here to help you make the best choice for your hydration needs.
              </p>
              <button className="bg-coral hover:bg-coral/80 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                Contact Support
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
