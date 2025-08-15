"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface HeroBackgroundProps {
  src: string;
  alt: string;
  className?: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({
  src,
  alt,
  className = "",
}) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <motion.div
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
      style={{ scale, opacity }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
    </motion.div>
  );
};

export default HeroBackground;
