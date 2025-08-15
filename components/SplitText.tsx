"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  onAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 75,
  duration = 0.5,
  ease = "easeOut",
  splitType = "chars",
  onAnimationComplete,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");
  const chars = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0.1,
        onComplete: onAnimationComplete,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: ease as any,
      },
    },
  };

  if (splitType === "words") {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
