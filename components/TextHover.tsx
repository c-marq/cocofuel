"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface TextHoverProps {
  text: string;
  className?: string;
  hoverColors?: string[];
  splitType?: "chars" | "words";
}

const TextHover: React.FC<TextHoverProps> = ({
  text,
  className = "",
  hoverColors = ["text-coral", "text-amber", "text-mint", "text-sky", "text-lavender"],
  splitType = "words",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const words = text.split(" ");
  const chars = text.split("");

  const getRandomColor = () => {
    return hoverColors[Math.floor(Math.random() * hoverColors.length)];
  };

  if (splitType === "words") {
    return (
      <div className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2 cursor-pointer transition-colors duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <span className={hoveredIndex === index ? getRandomColor() : ""}>
              {word}
            </span>
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <span className={hoveredIndex === index ? getRandomColor() : ""}>
            {char === " " ? "\u00A0" : char}
          </span>
        </motion.span>
      ))}
    </div>
  );
};

export default TextHover;
