Product Requirement: Cocofuel B2C SaaS Landing Page - Homepage
Purpose: To convert individual consumers by emotionally resonating with their pain points and showcasing Cocofuel as the simple, visually appealing, and immediate solution for vibrant energy and holistic well-being.




## Hero Section
Purpose: To instantly resonate with Emily's personal struggles (fatigue, frustration, self-doubt) and present Cocofuel as the immediate, emotionally charged solution for vibrant energy and a transformed life. The visual should evoke a positive emotional state and connect the product to a desired lifestyle.

Copy:
Headline: Tired of Feeling Drained? Reclaim Your Vibrant Energy.
Subheadline: Cocofuel makes staying hydrated effortless, transforming your workouts and fueling your ambition, naturally.
Call-to-Action: Fuel Your Day Now! (Prominent button)

UI Components:
- **Split Text Animation for Headline:**
  - Source: React Bits (https://reactbits.dev/text-animations/split-text)
  - Description: Animates text by splitting it into individual characters or words and revealing them with customizable delays and easing effects. Creates a dynamic and visually appealing entrance for textual content.
  - Code Example:
```jsx
import SplitText from "@/components/reactbits/SplitText"; // Assuming path based on Next.js app structure

const handleAnimationComplete = () => {
  console.log("Cocofuel headline animation complete!");
};

<SplitText
  text="Tired of Feeling Drained? Reclaim Your Vibrant Energy."
  className="text-5xl font-bold text-center text-white"
  delay={75} // Slightly faster to feel more energetic
  duration={0.5} // Quicker animation
  ease="power2.out" // Smooth, energetic easing
  splitType="chars" // Animate character by character
  onLetterAnimationComplete={handleAnimationComplete}
/>
```
- **Scroll Media Expansion Hero for background imagery/video:**
  - Source: 21st.dev (https://21st.dev/s/image) - Conceptually, this would involve a component that uses scroll-triggered animations (e.g., Framer Motion) to scale or reveal background media.
  - Description: A hero section where media (images or videos) expands, reveals, or subtly animates as the user scrolls down the page. This creates a sense of depth, progression, and interactivity.
  - Code Example (Conceptual, using Framer Motion for Next.js):
```jsx
import { motion, useScroll, useTransform } from "framer-motion";

function HeroBackground() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{ scale, opacity }}
    >
      <img
        src="/images/cocofuel-hero-background.jpg" // Replace with actual image/video still path
        alt="Cocofuel Vibrant Energy"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
```
- **Interactive Hover Button for CTA:**
  - Source: 21st.dev (https://21st.dev/s/call-to-action) - Conceptually, a button with subtle hover animations.
  - Description: A button that reacts with a subtle animation or visual change when the user's mouse hovers over it, indicating its interactivity.
  - Code Example (Conceptual, using Tailwind CSS for styling and Framer Motion for animation):
```jsx
import { motion } from "framer-motion";

<motion.button
  className="px-8 py-4 rounded-full bg-gradient-to-r from-coral to-lavender text-white font-semibold text-lg shadow-xl
             focus:outline-none focus:ring-4 focus:ring-sky focus:ring-opacity-50"
  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Fuel Your Day Now!
</motion.button>
```

Visual Style:
- Theme: Light theme with optional dark mode (DaisyUI themes)
- Imagery: Aspirational visual of Emily (or similar persona) joyfully engaged in a post-workout activity, radiating energy and vitality. Could be a short, high-energy video. Focus on natural light and vibrant colors from the Cocofuel palette.
- Color Palette: Primary gradient (linear-gradient(90deg, #FF6B6B 0%, #FFD93D 25%, #6BFFB3 50%, #6B99FF 75%, #B36BFF 100%)) for accents and CTA. Neutral colors (#EDF2F7 for background, #1A202C for text) for readability.
- Typography: DM Serif Display for Headline (H1), Inter for Subheadline and CTA text.



## Problem Section
Purpose: To deeply resonate with the user's current struggles and validate their feelings of fatigue, frustration, and self-doubt, establishing empathy and setting the stage for Cocofuel as the solution.

Copy:
Headline: The Daily Drain: Why You're Feeling Less Than Your Best
Subtext: You wake up with ambition, but by midday, a familiar fatigue sets in. Your workouts leave you more depleted than empowered. You've tried everything, but sugary drinks and artificial solutions only add to your frustration. That constant whisper of 'not enough' is eroding your ambition, leaving you wondering: *Am I truly living up to my potential?*

UI Components:
- **Animated Icons:**
  - Source: MagicUI (Conceptual, as specific animated icon components are not directly linked but can be created using their animation principles or a library like Lottie/SVGs with Framer Motion).
  - Description: Visually represent pain points (e.g., a wilting plant for fatigue, a tangled knot for frustration, a question mark for self-doubt) with subtle animations.
  - Code Example (Conceptual, using Framer Motion for SVG animation):
```jsx
import { motion } from "framer-motion";

function AnimatedIcon({ iconPath, altText, delay = 0 }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="w-12 h-12 text-lavender"
    >
      {/* Example: A simplified 'fatigue' icon path */}
      <path d={iconPath} />
    </motion.svg>
  );
}

// Usage example:
// <AnimatedIcon iconPath="M12 2v10M12 22v-8M5 10h14M5 14h14" altText="Fatigue Icon" />
```
- **Subtle scroll animations:**
  - Source: Framer Motion (https://www.framer.com/motion/)
  - Description: To reveal text and components as the user scrolls, creating a sense of unfolding realization and guiding attention.
  - Code Example (Conceptual, using `useInView` from Framer Motion):
```jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ScrollAnimatedText({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Usage example:
// <ScrollAnimatedText><p>You wake up with ambition...</p></ScrollAnimatedText>
```

Visual Style:
- Theme: Light theme.
- Imagery: Abstract or illustrative imagery that subtly conveys fatigue, frustration, and self-doubt without being overtly negative. Perhaps muted tones from the Cocofuel palette (e.g., a desaturated version of Sky or Lavender) to reflect the emotional state.
- Color Palette: Neutral colors for background and text. Accent colors from the primary palette can be used sparingly to highlight key phrases or icons.
- Typography: Inter for body text (Body Regular), DM Serif Display for headline (H3).



## Solution Section
Purpose: To position Cocofuel as the natural, effective, and transformative solution to the user's hydration and energy struggles, directly addressing the pain points established in the Problem Section.

Copy:
Headline: Cocofuel: Reclaim Your Vibrant Energy, Naturally.
Subtext: Imagine a life where fatigue is a distant memory, and every workout leaves you feeling strong, not drained. Cocofuel is more than just hydration; it's a catalyst for your personal evolution. Our pure, natural formula provides sustained energy and clarity, empowering you to thrive in every aspect of your life. It's time to banish the self-doubt and embrace the vibrant, unstoppable you.

UI Components:
- **Terminal component:**
  - Source: MagicUI (https://magicui.design/docs/components/terminal)
  - Description: An interactive component that simulates a command-line interface, displaying text as if it's being typed out in real-time. Can be used to present scientific facts or ingredient breakdowns in a dynamic, engaging way.
  - Code Example:
```jsx
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";

<Terminal>
  <TypingAnimation>
    <AnimatedSpan>Cocofuel: Fueling Your Potential</AnimatedSpan>
    <TypingAnimation>Natural Ingredients. Real Results.</TypingAnimation>
    <AnimatedSpan>Learn more about our science-backed formula.</AnimatedSpan>
  </TypingAnimation>
</Terminal>
```
- **Animated Cards:**
  - Source: MagicUI (Conceptual, as specific animated card components are not directly linked but can be created using their animation principles or a library like Framer Motion).
  - Description: Dynamic content presentation and interactive elements to highlight key benefits or features of Cocofuel.
  - Code Example (Conceptual, using Framer Motion):
```jsx
import { motion } from "framer-motion";

function AnimatedCard({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {children}
    </motion.div>
  );
}

// Usage example:
// <AnimatedCard><h3>Pure & Natural</h3><p>No artificial ingredients...</p></AnimatedCard>
```
- **Scroll Animations:**
  - Source: Framer Motion (https://www.framer.com/motion/)
  - Description: To reveal the solution as the user scrolls, creating a sense of progression and discovery.
  - Code Example (Conceptual, similar to Problem Section's scroll animation, applied to solution blocks):
```jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SolutionBlock({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Usage example:
// <SolutionBlock><h2>Cocofuel: Reclaim Your Vibrant Energy...</h2></SolutionBlock>
```

Visual Style:
- Theme: Light theme.
- Imagery: Clean, crisp imagery of the Cocofuel product, natural ingredients, and visuals of people experiencing vitality and energy. Focus on the Mint and Sky colors from the primary palette to convey freshness and clarity.
- Color Palette: Primary colors (Mint, Sky, Amber) for accents and visual emphasis. Neutral colors for background and text.
- Typography: DM Serif Display for headline (H3), Inter for body text (Body Regular).



## Value Proposition / Benefits Snapshot
Purpose: To quickly reinforce why Cocofuel matters to the user, highlighting 3-5 key benefits that tie directly to emotional payoffs and solve common pain points, presented in a visually clean and punchy format.

Copy:
- ✅ **Sustained Energy:** Banish the midday slump and power through your day with natural, lasting vitality.
- ✅ **Optimal Hydration:** Replenish your body effectively, feeling refreshed and ready for anything.
- ✅ **Enhanced Performance:** Transform your workouts, feeling strong and recovering faster.
- ✅ **Pure & Natural:** No artificial ingredients, no sugary crash – just clean, effective fuel.
- ✅ **Effortless Wellness:** Simple to use, perfectly portable, and seamlessly integrates into your busy life.

UI Components:
- **Icon grid with short text descriptions:**
  - Source: 21st.dev Data Display components (Conceptual, as specific components for animated icon grids are not directly linked but can be built using their principles and animation libraries).
  - Description: A visually clean grid displaying key benefits with associated icons and brief descriptions. Each benefit block should be interactive.
  - Code Example (Conceptual, using Tailwind CSS for grid and Framer Motion for animation):
```jsx
import { motion } from "framer-motion";

function BenefitCard({ icon, title, description, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    >
      <div className="mb-4 text-sky text-4xl">{icon}</div> {/* Replace with actual icon component */}
      <h6 className="text-lg font-semibold mb-2">{title}</h6>
      <p className="text-mediumGray text-sm">{description}</p>
    </motion.div>
  );
}

// Usage example in a grid:
// <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//   <BenefitCard icon="⚡" title="Sustained Energy" description="Banish the midday slump..." delay={0.1} />
//   <BenefitCard icon="💧" title="Optimal Hydration" description="Replenish your body..." delay={0.2} />
//   {/* ... more BenefitCards */}
// </div>
```
- **Animated Icons:**
  - Source: MagicUI (Conceptual, as specific animated icon components are not directly linked but can be created using their animation principles or a library like Lottie/SVGs with Framer Motion).
  - Description: Icons for each benefit that subtly animate on hover or when they scroll into view, adding visual interest and reinforcing the benefit.
  - Code Example (Integrated into `BenefitCard` above, using a placeholder for `icon` prop. Actual implementation would use SVG or a dedicated icon library component):
```jsx
// See BenefitCard component above. The `icon` prop would render an animated SVG or a component from Heroicons/similar.
// Example of an animated SVG icon (conceptual):
// import { motion } from "framer-motion";
// const AnimatedCheckmark = () => (
//   <motion.svg
//     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//     initial={{ pathLength: 0, opacity: 0 }}
//     animate={{ pathLength: 1, opacity: 1 }}
//     transition={{ duration: 0.8, ease: "easeOut" }}
//   >
//     <path d="M20 6L9 17L4 12" />
//   </motion.svg>
// );
// <BenefitCard icon={<AnimatedCheckmark />} title="Sustained Energy" description="..." />
```
- **Subtle hover effects:**
  - Source: MagicUI (Conceptual, as specific hover effect components are not directly linked but can be achieved with Tailwind CSS transitions and Framer Motion).
  - Description: Gentle visual feedback when the user hovers over each benefit block, indicating interactivity and enhancing the user experience.
  - Code Example (Integrated into `BenefitCard` above, using `whileHover` and `transition` props from Framer Motion):
```jsx
// See BenefitCard component above. The `whileHover` prop handles the scale and shadow changes.
// whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
```

Visual Style:
- Theme: Light theme.
- Imagery: Clean, minimalist icons or illustrations for each benefit, using colors from the Cocofuel primary palette (e.g., Coral, Amber, Mint, Sky, Lavender).
- Color Palette: Neutral background. Primary colors for icons and accents. Dark Blue for text.
- Typography: Inter for benefit headlines (H6) and descriptions (Body Regular).



## Social Proof
Purpose: To build trust quickly through authentic customer testimonials and ratings, leveraging social proof to reassure B2C buyers and highlight the emotional impact of Cocofuel.

Copy:
Headline: Hear From Our Vibrant Community
Testimonials:
- "Cocofuel changed my life! I used to drag myself through workouts, but now I feel energized and strong. It\'s truly transformative." - Emily J.
- "Finally, a hydration solution that actually works and aligns with my values. No more sugary drinks, just pure vitality." - Sarah L.
- "I feel so much more in control of my health since I started using Cocofuel. It\'s the perfect fuel for my busy life." - Alex P.

UI Components:
- **Testimonial Carousel:**
  - Source: MagicUI (https://magicui.design/docs/components/marquee) - adapted for testimonials.
  - Description: An infinitely scrolling component to showcase a continuous stream of positive customer feedback, reinforcing social proof and creating a dynamic display of user satisfaction.
  - Code Example:
```jsx
import { Marquee } from "@/components/magicui/marquee";

<Marquee className="--duration-[20s]">
  <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee --duration-[20s] group-hover:[animation-play-state:paused]">
    <li>"Cocofuel changed my life!" - Emily J.</li>
    <li>"Finally, a natural energy boost!" - Sarah L.</li>
    <li>"Feeling vibrant and unstoppable!" - Alex P.</li>
    <li>"My workouts have never been better!" - Chris R.</li>
  </ul>
</Marquee>
```
- **Animated Cards for individual testimonials:**
  - Source: MagicUI (Conceptual, can be built with Framer Motion).
  - Description: Individual testimonial cards that animate subtly on hover or when they enter the viewport, drawing attention to each review.
  - Code Example (Conceptual, using Framer Motion):
```jsx
import { motion } from "framer-motion";
import { useRef } from "react";

function TestimonialCard({ author, text, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
    >
      <p className="text-mediumGray italic mb-4">"{text}"</p>
      <p className="text-darkBlue font-semibold">- {author}</p>
    </motion.div>
  );
}

// Usage example:
// <TestimonialCard author="Emily J." text="Cocofuel changed my life!" delay={0.1} />
```
- **Star ratings:**
  - Source: Custom component (can be built with SVG icons or a dedicated rating library).
  - Description: Visual representation of customer ratings, providing quick credibility.
  - Code Example (Conceptual, using Heroicons for stars):
```jsx
import { StarIcon } from '@heroicons/react/20/solid'; // Assuming Heroicons installation

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-amber' : 'text-lightGray'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// Usage example:
// <StarRating rating={4.5} />
```

Visual Style:
- Theme: Light theme.
- Imagery: Authentic user-generated content (if available) or high-quality stock photos that evoke authenticity and happiness. Profile pictures for testimonials. Use a clean, inviting layout.
- Color Palette: Neutral background. Dark Blue for text. Accent colors from the primary palette for star ratings or subtle highlights.
- Typography: DM Serif Display for headline (H3), Inter for testimonial text (Body Regular) and names (Body Small).



## Product Showcase
Purpose: To visually demonstrate Cocofuel in action, allowing users to mentally test-drive the product and understand its ease of use and effectiveness in solving their problems.

Copy:
Headline: See Cocofuel in Action
Subtext: Discover how Cocofuel seamlessly integrates into your daily routine, providing effortless hydration and sustained energy. Watch the video to see the transformation.

UI Components:
- **Hero Video Dialog:**
  - Source: MagicUI (https://magicui.design/docs/components/hero-video-dialog)
  - Description: A modal dialog that plays a video, often triggered by a button or a click on a hero image. It can feature various animation styles for its appearance and disappearance, making the video presentation dynamic and impactful.
  - Code Example:
```jsx
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";

<HeroVideoDialog
  className="block dark:hidden" // Or other responsive classes
  animationStyle="from-center" // Options: from-center, from-left, from-right, from-top, from-bottom
  videoSrc="/path/to/your/cocofuel-product-demo.mp4" // Replace with actual video path
  thumbnailSrc="/path/to/your/cocofuel-video-thumbnail.jpg" // Replace with actual thumbnail path
  thumbnailAlt="Cocofuel Product Demonstration Video"
/>
```
- **Image Carousel:**
  - Source: 21st.dev Data Display components (Conceptual, can be built with a carousel library like `react-slick` or `swiper` and animated with Framer Motion).
  - Description: A dynamic carousel to showcase key UI screenshots or product usage scenarios, allowing users to swipe or click through images.
  - Code Example (Conceptual, using `swiper/react` and Framer Motion for subtle transitions):
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from "framer-motion";

function ProductImageCarousel({ images }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      loop={true}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <motion.img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// Usage example:
// <ProductImageCarousel images={[{ src: "/images/screenshot1.jpg", alt: "Cocofuel App Screenshot 1" }, { src: "/images/screenshot2.jpg", alt: "Cocofuel App Screenshot 2" }]} />
```

Visual Style:
- Theme: Light theme.
- Imagery: High-quality product photography, lifestyle shots of Cocofuel being used in various settings (e.g., gym, office, outdoors), and clear UI screenshots. The video should be dynamic and engaging, showcasing the product\"s benefits.
- Color Palette: Vibrant use of primary colors to highlight the product and its benefits. Neutral colors for background.
- Typography: DM Serif Display for headline (H3), Inter for subtext (Body Regular).



## Call-to-Action (Mid-page and Persistent)
Purpose: To provide multiple opportunities for conversion as the user scrolls, ensuring the call to action is always visible and compelling.

Copy:
Button Text: Fuel Your Day Now! / Start Your Free Trial

UI Components:
- **Prominent CTA buttons with interactive hover effects:**
  - Source: 21st.dev Form components (Conceptual, can be built with Tailwind CSS and Framer Motion for animations).
  - Description: Visually striking buttons that encourage clicks, with subtle animations on hover to provide immediate feedback.
  - Code Example (Conceptual, using Tailwind CSS for styling and Framer Motion for animation):
```jsx
import { motion } from "framer-motion";

<motion.button
  className="px-8 py-4 rounded-full bg-gradient-to-r from-coral to-lavender text-white font-semibold text-lg shadow-xl
             focus:outline-none focus:ring-4 focus:ring-sky focus:ring-opacity-50"
  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Fuel Your Day Now!
</motion.button>
```
- **Sticky header bar with a persistent CTA button:**
  - Source: Custom component (can be built with Tailwind CSS for fixed positioning and React state for visibility on scroll).
  - Description: A header bar that remains visible as the user scrolls, containing a prominent call-to-action button to ensure constant access to conversion.
  - Code Example (Conceptual, using Tailwind CSS and React `useState` and `useEffect`):
```jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function StickyCTAHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Show after scrolling 200px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg p-4 flex justify-center items-center"
    >
      <motion.button
        className="px-6 py-3 rounded-full bg-mint text-darkBlue font-semibold shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        Start Your Free Trial
      </motion.button>
    </motion.header>
  );
}
```
- **Pointer component:**
  - Source: MagicUI (https://magicui.design/docs/components/pointer)
  - Description: A subtle yet powerful microinteraction that guides user attention and provides immediate visual feedback, drawing the user's eye to important calls to action or informational areas.
  - Code Example:
```jsx
"use client";

import { Pointer } from "@/components/magicui/pointer";
import { motion } from "framer-motion";

export function CTAPointerExample() {
  return (
    <Pointer>
      <motion.div
        className="flex h-full w-full items-center justify-center rounded-lg border bg-gradient-to-r from-mint to-sky p-8 text-white font-bold text-xl shadow-lg cursor-pointer"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Discover Your Potential
      </motion.div>
    </Pointer>
  );
}
```

Visual Style:
- Theme: Light theme.
- Color Palette: Contrast is key. Use a bright, eye-catching color from the primary palette (e.g., Coral or Mint) for the button background. White text for readability. Shadow effects for prominence.
- Typography: Inter (Semibold) for button text.



## Urgency or Special Offer (Optional)
Purpose: To nudge indecisive visitors towards immediate action by creating a sense of urgency or highlighting a limited-time offer.

Copy:
Headline: Don\'t Miss Out! Limited-Time Offer:
Subtext: Get 20% off your first month when you sign up by [Date]! Join thousands who are transforming their energy with Cocofuel.

UI Components:
- **Countdown timer:**
  - Source: Custom component (can be built with React state and `setInterval` or a dedicated countdown library).
  - Description: A visual countdown to a specific date or time, creating a sense of urgency for limited-time offers.
  - Code Example (Conceptual, basic countdown timer):
```jsx
import { useState, useEffect } from "react";

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

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

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="text-center text-xl font-bold text-coral">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

// Usage example:
// <CountdownTimer targetDate="2025-12-31T23:59:59" />
```
- **Thin banner near the top of the page:**
  - Source: Custom component (can be built with Tailwind CSS for fixed positioning).
  - Description: A subtle banner at the top of the page to highlight special offers or announcements.
  - Code Example (Conceptual):
```jsx
function AnnouncementBanner({ message }) {
  return (
    <div className="w-full bg-amber text-darkBlue text-center py-2 text-sm font-medium">
      {message}
    </div>
  );
}

// Usage example:
// <AnnouncementBanner message="Get 20% off your first month! Limited time offer!" />
```
- **Animated text for urgency phrases:**
  - Source: MagicUI Split Text Animation (https://reactbits.dev/text-animations/split-text) or Framer Motion.
  - Description: Dynamic text animation to emphasize urgency-driven phrases like "Today Only!" or "Don't Miss Out!"
  - Code Example (Using SplitText from React Bits):
```jsx
import SplitText from "@/components/reactbits/SplitText";

<SplitText
  text="Today Only!"
  className="text-2xl font-bold text-coral"
  delay={50}
  duration={0.4}
  ease="power1.out"
  splitType="words"
/>
```

Visual Style:
- Theme: Light theme.
- Color Palette: Use a striking color (e.g., Coral or a functional warning yellow) to draw attention. White or Dark Blue text for readability.
- Typography: Inter (Bold) for headline, Inter (Regular) for subtext.



## Frequently Asked Questions (Optional)
Purpose: To remove lingering doubts and address common objections in a concise, reassuring, and friendly tone.

Copy:
Headline: Your Questions, Answered.
Q&A:
- Q: Will I be charged after the free trial?
  A: No – you can continue on the free plan or choose to upgrade, no automatic charges.
- Q: Can I cancel anytime?
  A: Yes, you can cancel your subscription at any time, no questions asked.
- Q: Is Cocofuel suitable for all diets?
  A: Cocofuel is made with natural ingredients and is suitable for most dietary needs. Please check our ingredients list for full details.

UI Components:
- **Accordion component:**
  - Source: 21st.dev Disclosure components (Conceptual, can be built with headless UI libraries like Radix UI or Headless UI, and animated with Framer Motion).
  - Description: An interactive component that allows users to expand and collapse content sections, ideal for FAQs to keep the page clean while providing detailed answers.
  - Code Example (Conceptual, using Radix UI Accordion and Framer Motion for animation):
```jsx
import * as Accordion from '@radix-ui/react-accordion';
import { motion } from "framer-motion";
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Example icon

function FAQItem({ question, answer }) {
  return (
    <Accordion.Item value={question} className="border-b border-lightGray">
      <Accordion.Header className="flex justify-between items-center py-4 cursor-pointer">
        <Accordion.Trigger className="flex-1 text-left text-darkBlue font-semibold text-lg flex justify-between items-center w-full">
          {question}
          <ChevronDownIcon className="w-5 h-5 text-mediumGray transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="pb-4 text-mediumGray"
        >
          {answer}
        </motion.div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

function FAQAccordion({ faqs }) {
  return (
    <Accordion.Root type="single" collapsible className="w-full max-w-2xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </Accordion.Root>
  );
}

// Usage example:
// <FAQAccordion faqs={[
//   { question: "Will I be charged after the free trial?", answer: "No – you can continue..." },
//   { question: "Can I cancel anytime?", answer: "Yes, you can cancel..." },
// ]} />
```
- **Terminal component for interactive FAQ:**
  - Source: MagicUI (https://magicui.design/docs/components/terminal)
  - Description: A unique way to answer common questions, where the question is \'typed\' and then the answer appears, creating a more engaging and less static FAQ experience.
  - Code Example:
```jsx
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";

<Terminal>
  <TypingAnimation>
    <AnimatedSpan>Q: Will I be charged after the free trial?</AnimatedSpan>
    <TypingAnimation speed={50}>
      A: No – you can continue on the free plan or choose to upgrade, no automatic charges.
    </TypingAnimation>
    <AnimatedSpan>Q: Can I cancel anytime?</AnimatedSpan>
    <TypingAnimation speed={50}>
      A: Yes, you can cancel your subscription at any time, no questions asked.
    </TypingAnimation>
  </TypingAnimation>
</Terminal>
```

Visual Style:
- Theme: Light theme.
- Color Palette: Neutral background. Dark Blue for text. Subtle use of primary colors for accordion headers or interactive elements.
- Typography: Inter (Semibold) for questions, Inter (Regular) for answers.


