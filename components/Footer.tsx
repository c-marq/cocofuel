"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import config from "@/config";
import ContactForm from "./ContactForm";

// Animated Footer Link Component with Microinteractions
const FooterLink = ({ 
  href, 
  label, 
  delay = 0, 
  external = false 
}: { 
  href: string; 
  label: string; 
  delay?: number; 
  external?: boolean; 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      {external ? (
        <a
          href={href}
          className="relative block text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10 text-sm">{label}</span>
          
          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-coral to-amber"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-coral/10 to-amber/10 blur-sm -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.1 : 0.8
            }}
            transition={{ duration: 0.2 }}
          />
        </a>
      ) : (
        <Link
          href={href}
          onClick={handleClick}
          className="relative block text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="relative z-10 text-sm">{label}</span>
          
          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-mint to-sky"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-mint/10 to-sky/10 blur-sm -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.1 : 0.8
            }}
            transition={{ duration: 0.2 }}
          />
        </Link>
      )}
    </motion.div>
  );
};

// Contact Form Link Component
const ContactFormLink = ({ 
  label, 
  formType, 
  delay = 0 
}: { 
  label: string; 
  formType: 'contact' | 'support'; 
  delay?: number; 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      onClick={() => {
        const event = new CustomEvent('openContactForm', { detail: { formType } });
        window.dispatchEvent(event);
      }}
      className="relative block text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer w-full text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 text-sm">{label}</span>
      
      {/* Animated underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-coral to-amber"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-coral/10 to-amber/10 blur-sm -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 0.8
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
};

const CocofuelFooter = () => {
  const [contactForm, setContactForm] = useState<{
    isOpen: boolean;
    formType: 'contact' | 'support';
  }>({
    isOpen: false,
    formType: 'contact'
  });

  // Listen for contact form events
  React.useEffect(() => {
    const handleOpenContactForm = (event: CustomEvent) => {
      setContactForm({
        isOpen: true,
        formType: event.detail.formType
      });
    };

    window.addEventListener('openContactForm', handleOpenContactForm as EventListener);
    
    return () => {
      window.removeEventListener('openContactForm', handleOpenContactForm as EventListener);
    };
  }, []);

  return (
    <>
      {/* Contact Form Modal */}
      <ContactForm
        isOpen={contactForm.isOpen}
        onClose={() => setContactForm({ ...contactForm, isOpen: false })}
        formType={contactForm.formType}
      />
      
      <footer className="relative bg-slate-900 overflow-hidden">
      {/* Brand Color Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-[5%] w-64 h-64 bg-gradient-to-r from-coral/20 to-amber/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-[5%] w-64 h-64 bg-gradient-to-r from-mint/15 to-sky/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lavender/10 to-coral/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo & Brand */}
            <Link
              href="/#"
              className="flex items-center space-x-3 group w-fit"
            >
              <div className="relative">
                <Image
                  src="/cropped_image_ (1)-Picsart-BackgroundRemover.png"
                  alt="Cocofuel Logo"
                  className="h-8 w-auto transition-all duration-300 group-hover:scale-110"
                  width={80}
                  height={40}
                  priority={true}
                />
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-coral/30 to-amber/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="text-white font-bold text-2xl font-serif tracking-wide">
                COCOFUEL
              </span>
            </Link>

            {/* Brand Description */}
            <div className="space-y-4">
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                Reclaim your vibrant energy, naturally. Premium coconut water hydration that transforms your wellness journey from fatigue to unstoppable vitality.
              </p>
              
              {/* Brand Tagline */}
              <p className="text-sm font-medium bg-gradient-to-r from-coral via-amber to-mint bg-clip-text text-transparent">
                REFRESH • REHYDRATE • REPEAT
              </p>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Cocofuel. All rights reserved.
            </p>
          </div>

          {/* Links Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-secondary font-bold text-lg mb-6">
              <span className="bg-gradient-to-r from-coral to-amber bg-clip-text text-transparent">
                Links
              </span>
            </h3>
            <div className="space-y-3">
              <ContactFormLink 
                label="Contact Us" 
                formType="contact"
                delay={0.1}
              />
              <ContactFormLink 
                label="Support" 
                formType="support"
                delay={0.2}
              />
            </div>
          </motion.div>

          {/* Legal Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-secondary font-bold text-lg mb-6">
              <span className="bg-gradient-to-r from-mint to-sky bg-clip-text text-transparent">
                Legal
              </span>
            </h3>
            <div className="space-y-3">
              <FooterLink 
                href="/tos" 
                label="Terms of Use" 
                delay={0.1}
              />
              <FooterLink 
                href="/privacy-policy" 
                label="Privacy Policy" 
                delay={0.2}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Built with 💚 for your wellness journey
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default CocofuelFooter;
