## Cocofuel Landing Page Requirements (Windsurf Prompts)

### 1. CocofuelHeader

```
**Component Name:** CocofuelHeader

**Purpose:** To provide intuitive navigation and establish immediate brand presence while maintaining a clean, light aesthetic that reflects Cocofuel's natural rehydration focus.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Background:** Pure White (#FFFFFF) with a subtle shadow on scroll for depth, reinforcing the clean and light brand identity.
- **Text:** Charcoal Text (#263238) for navigation links, ensuring excellent contrast and readability against the light background.
- **Logo:** Prominently displayed on the left, featuring the Cocofuel logo in a clean, legible format using the brand's primary colors (Ocean Breeze #80DEEA, Coral Burst #FF8A65). Clicking the logo navigates to the homepage.
- **Hover State:** Navigation links feature a subtle Ocean Breeze (#80DEEA) underline or Sky Whisper (#B2EBF2) background highlight on hover, maintaining the light and refreshing feel.
- **Fixed Position:** The header remains fixed to the top of the viewport, ensuring constant access to navigation and the primary CTA, enhancing user convenience.

**Structure:**
- **Navigation Links:** Centered or right-aligned, providing clear links to key sections:
  - "Benefits" (links to Value Proposition section)
  - "Science" (links to Product Showcase or dedicated science section)
  - "Testimonials" (links to Social Proof section)
  - "FAQ" (links to Frequently Asked Questions section)
- **Call-to-Action Button:** A primary CTA button ("Shop Now" or "Rehydrate Now") on the far right, visually distinct using Ocean Breeze (#80DEEA) or Coral Burst (#FF8A65) colors for high visibility.
- **Mobile Toggle:** On smaller screens, navigation links collapse into a hamburger menu icon, ensuring responsive design.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Logo Hover:** Implement a subtle scale effect (1.05x) with a gentle Ocean Breeze (#80DEEA) glow, providing visual feedback and reinforcing brand recognition. This aligns with interactive elements found on React Bits for subtle engagement.
- **Menu Icon Animation:** Smooth transformation from a hamburger icon to a close icon when the mobile menu is opened/closed, enhancing user experience through clear visual cues.
- **CTA Button Hover:** Apply a scale and glow effect using the brand's primary gradient colors (Ocean Breeze to Coral Burst) on hover, providing an engaging and clear call to action. This is consistent with the 'Interactive Hover Button' concept from React Bits.
```




### 2. Hero

```
**Component Name:** Hero

**Purpose:** To instantly resonate with the user's core pain points (dehydration, fatigue, poor recovery) and present an aspirational vision of optimal hydration and vitality, immediately positioning Cocofuel as the key to unlocking their full potential through effective rehydration.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The Hero section should embody the light theme with a clean, airy, and refreshing feel. Use ample white space and subtle gradients from the Cocofuel color palette (e.g., Aqua Mist #E0F7FA, Sky Whisper #B2EBF2) for background elements.
- **Typography:** Headlines (H1) in Lato, subtext in Montserrat, utilizing Charcoal Text (#263238) for strong readability against light backgrounds.

**Headline (H1):**
"Feeling Drained and Dehydrated? Reclaim Your Optimal Balance."

**Subtext (H2/Body):**
"Cocofuel is the natural, delicious way to rehydrate, replenish essential electrolytes, and recover faster. Say goodbye to dehydration and hello to your most vibrant, balanced self."

**Imagery:**
- **Type:** High-quality, authentic, and aspirational image or short video loop.
- **Content:** A vibrant, active woman (similar to Emily Johnson) joyfully engaged in a post-workout recovery activity (e.g., stretching in a sunlit park, rehydrating after a hike with a clear, refreshed expression) with a Cocofuel product subtly visible. The setting should evoke nature, freshness, and recovery. The visual should convey replenishment, satisfaction, and optimal hydration, aligning with the light and natural brand identity.
- **Emotional Connection:** The image should make the visitor imagine themselves experiencing the same positive recovery state and hydration that Cocofuel promises.
- **Technical Specifications:** Optimized for fast loading.

**Call-to-Action (Primary Button):**
"Rehydrate Now!"

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Background Imagery:** Implement the **Scroll Media Expansion Hero** from 21st.dev for an immersive background experience. As the user scrolls, the hero image/video subtly expands or reveals more, creating a dynamic and engaging visual journey that reinforces the feeling of natural expansion and vitality. [Reference: 21st.dev Scroll Media Expansion Hero](https://21st.dev/components/scroll-media-expansion-hero)
- **Primary CTA Button:** Apply the **Interactive Hover Button** effect (similar to examples on React Bits) with a subtle scale and glow animation using Cocofuel's primary gradient colors (Ocean Breeze #80DEEA to Coral Burst #FF8A65). This provides clear visual feedback and encourages interaction. [Reference: React Bits Interactive Hover Button (conceptual, based on common patterns)](https://reactbits.dev/)

**Problem Section (Implicit within Hero):**
The Hero implicitly addresses Emily's core problem: feeling "drained," "dehydrated," and struggling with "poor recovery" and "inadequate rehydration" due to ineffective hydration solutions. The headline and subtext directly speak to these pain points, creating immediate relatability for the problem-aware avatar.

**Solution Section (Implicit within Hero):**
The Hero immediately positions Cocofuel as the rehydration solution to the identified problems. It promises to "Reclaim Your Optimal Balance," "rehydrate, replenish essential electrolytes, and recover faster," helping the user achieve their "most vibrant, balanced self."
```




### 3. Problem

```
**Component Name:** Problem

**Purpose:** To deeply resonate with the user's existing struggles related to dehydration and inadequate recovery, creating an immediate emotional connection and validating their pain points.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The Problem section should maintain the light theme, using a clean layout with ample white space. Subtle background textures or patterns in Aqua Mist (#E0F7FA) or Sky Whisper (#B2EBF2) can be used to add visual interest without being heavy.
- **Typography:** Body copy in Montserrat, using Charcoal Text (#263238) for readability. Key pain points can be highlighted with a slightly bolder weight or a subtle hint of Ocean Breeze (#80DEEA).
- **Imagery:** Images should be empathetic and relatable, avoiding overly dark or depressing tones. They should align with the light theme by featuring natural lighting and a clean aesthetic.

**Copy:**

Are you tired of feeling constantly parched, mentally foggy, and struggling to bounce back after a workout? Does the thought of another sugary sports drink or chalky electrolyte tablet make you cringe? You're not alone. In today's fast-paced world, maintaining optimal hydration and electrolyte balance is a constant battle, leading to:

*   **Midday Slumps:** That familiar feeling of hitting a wall, losing focus, and battling mental fatigue, often a direct result of insufficient hydration.
*   **Slow Recovery:** Workouts that leave you feeling more depleted than energized, with muscle cramps and prolonged soreness hindering your progress.
*   **Ineffective Solutions:** A market flooded with artificial, sugary, or inconvenient hydration options that fail to truly replenish your body or align with your health-conscious values.
*   **Self-Doubt:** The quiet frustration of not living up to your full potential, both physically and mentally, because your body isn't getting the foundational support it needs.

These are the struggles Emily Johnson, our problem-aware avatar, faces daily. She yearns for a natural, effective solution that fits her active lifestyle and helps her reclaim her vibrant self.

**Visuals/Layout:**
- **Imagery:** A relatable image depicting the struggle (e.g., a person looking tired at their desk, someone stretching a cramped muscle after a workout). The image should evoke empathy and highlight the problem without being overly negative. Ensure the image's color palette is bright and aligned with the light theme.
- **Format:** A clear, concise text block with bullet points to highlight specific pain points. The design should feel empathetic and understanding, using clean lines and a spacious layout.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Bullet Point Animation:** Consider a subtle fade-in or slide-in animation for each bullet point as it enters the viewport, drawing attention to each pain point. This can be achieved with simple CSS transitions or a lightweight animation library, similar to component reveal patterns on React Bits. [Reference: React Bits (conceptual, based on common animation patterns)](https://reactbits.dev/)
- **Image Reveal:** If multiple problem-related images are used, implement a subtle reveal effect (e.g., a gentle cross-fade or slide-up) as the user scrolls, maintaining a smooth and engaging experience. This can be inspired by image loading/reveal patterns seen on 21st.dev. [Reference: 21st.dev (conceptual, based on common image loading patterns)](https://21st.dev/)
```




### 4. Solution

```
**Component Name:** Solution

**Purpose:** To clearly position Cocofuel as the natural, effective, and convenient answer to the user's hydration and recovery challenges, offering a compelling vision of the positive transformation they can experience.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The Solution section should exude a sense of clarity, freshness, and optimism, aligning perfectly with the light theme. Use clean layouts and vibrant accents from the Cocofuel palette (e.g., Ocean Breeze #80DEEA, Sunlit Coconut #FFCC80) to highlight key benefits.
- **Typography:** Headlines in Lato, body copy in Montserrat, ensuring excellent readability and a modern feel against light backgrounds.
- **Imagery:** Product imagery should be crisp, well-lit, and convey purity and naturalness, reinforcing the light and authentic brand identity.

**Copy:**

Imagine a life where every sip revitalizes you, where your body feels optimally balanced, and your mind is crystal clear. This isn't a dream – it's the Cocofuel promise. We've meticulously crafted a premium coconut water powder enriched with essential electrolytes, designed to be your ultimate partner in rehydration and recovery.

Cocofuel is your natural solution to:

*   **Effortless Replenishment:** Simply mix with water for instant, delicious coconut water packed with electrolytes. No more sugary drinks, no more artificial ingredients, just pure, natural goodness.
*   **Accelerated Recovery:** Our unique blend helps your body bounce back faster after workouts, reducing muscle fatigue and supporting optimal performance. Feel strong, not drained, and ready for your next challenge.
*   **Sustained Vitality:** Experience a profound sense of well-being that comes from true hydration. Say goodbye to midday slumps and mental fogginess, and embrace sustained clarity and focus throughout your day.
*   **On-the-Go Convenience:** Designed for your busy lifestyle, Cocofuel comes in portable sachets, making it easy to stay hydrated wherever you are – at the gym, in the office, or on the trails.

Cocofuel isn't just a drink; it's a commitment to your best self. It's the clean, effective rehydration you've been searching for, allowing you to live a life of unwavering vitality and confidence.

**Visuals/Layout:**
- **Imagery:** A clean, inviting image of the Cocofuel product (sachet and mixed drink) in an appealing setting (e.g., next to a yoga mat, on a hiking trail, on a clean desk). The visual should convey purity, ease of use, and natural ingredients, consistent with the light theme.
- **Format:** A concise text block with bullet points highlighting key solution aspects. The design should feel empowering and hopeful, contrasting with the problem section, using clean lines and a spacious layout.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Product Showcase Animation:** When showcasing the product, consider a subtle animation for the product image or a sequence of images, perhaps a gentle pulse or a soft glow, to draw attention to its purity and effectiveness. This can be inspired by product display animations seen on React Bits. [Reference: React Bits (conceptual, based on common product display animations)](https://reactbits.dev/)
- **Benefit Highlight on Scroll:** As the user scrolls, each solution bullet point could subtly animate into view (e.g., a gentle slide-in or fade-up), emphasizing the progressive benefits of Cocofuel. This can be achieved with scroll-triggered animations, similar to content reveal patterns on 21st.dev. [Reference: 21st.dev (conceptual, based on common scroll-triggered animations)](https://21st.dev/)
```




### 5. Benefits

```
**Component Name:** Benefits

**Purpose:** To quickly convey the core rehydration value of Cocofuel through easily scannable, emotionally resonant benefits that address daily hydration struggles and recovery aspirations. This section reinforces why Cocofuel is the essential rehydration solution for their wellness journey.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The Benefits section should be visually clean and airy, utilizing the light theme with ample white space around each benefit block. Background elements can use subtle shades of Aqua Mist (#E0F7FA) or Sky Whisper (#B2EBF2).
- **Typography:** Benefit titles in Lato (bold), descriptions in Montserrat (regular), using Charcoal Text (#263238) for clarity. Icons should be modern and clean, aligning with the light aesthetic.
- **Color Palette:** Icons and key text within each benefit block should utilize Ocean Breeze (#80DEEA), Sunlit Coconut (#FFCC80), and Leafy Green (#A5D6A7) from the brand palette to highlight and add visual interest, consistent with the light theme.

**Copy:**

At Cocofuel, we believe in empowering you to live your most hydrated, balanced life. Our natural rehydration solution is designed to seamlessly integrate into your busy routine, transforming how you recover, perform, and feel throughout your day. Say goodbye to dehydration and sluggish recovery, and embrace a new era of optimal hydration and unwavering vitality.

Here’s how Cocofuel fuels your rehydration transformation:

*   **Achieve Optimal Hydration:** Tired of feeling parched and depleted? Cocofuel provides deep, effective rehydration with essential electrolytes, helping you maintain optimal fluid balance throughout your day. Imagine feeling perfectly hydrated from morning to night, ready to tackle any challenge with clarity and focus.

*   **Accelerate Recovery:** Whether it’s bouncing back from your yoga flow or recovering from a challenging hike, proper rehydration is key. Cocofuel ensures your body replenishes what it loses, reducing muscle fatigue and supporting faster recovery. Experience workouts where you feel strong and recovered, not drained and depleted.

*   **Embrace Pure Rehydration:** Ditch the sugary, artificial drinks that leave you feeling worse. Cocofuel delivers essential electrolytes and natural coconut water powder, ensuring deep, effective rehydration that truly replenishes your body. It’s the clean, refreshing solution your body craves, free from unwanted additives.

*   **Simplify Your Hydration Routine:** Life is busy, and proper hydration shouldn’t be complicated. Cocofuel offers a quick, convenient, and portable rehydration solution that fits effortlessly into your on-the-go lifestyle. Save time and effort, allowing you more moments for what truly matters – your personal growth and well-being.

*   **Maintain Mental Clarity:** When you’re properly hydrated, your mind is sharp and focused. By addressing the root causes of dehydration, Cocofuel helps you achieve sustained mental clarity that translates into better performance and confidence. Become the healthier, more focused version of yourself.

**Visuals/Layout:**
- **Format:** A visually clean grid format, featuring 5 key rehydration benefits. Each benefit should be accompanied by a relevant icon.
- **Icons/Illustrations:** Use modern, clean icons that align with the light theme (e.g., a water droplet for hydration, a refresh symbol for recovery, a coconut for natural ingredients, a clock for convenience, a brain for mental clarity).

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Benefit Card Hover Effect:** Implement an interactive hover effect on each benefit card. This could be a subtle lift, a gentle shadow expansion, or a background color change to Sky Whisper (#B2EBF2) or Ocean Breeze (#80DEEA) on hover, providing visual feedback and encouraging exploration. This aligns with common interactive card patterns seen on React Bits. [Reference: React Bits (conceptual, based on interactive card patterns)](https://reactbits.dev/)
- **Icon Animation on Hover:** When a user hovers over a benefit card, the associated icon could perform a subtle, short animation (e.g., a gentle pulse or a slight rotation), drawing attention to the specific benefit. This adds a dynamic touch without being distracting, inspired by subtle icon animations on 21st.dev. [Reference: 21st.dev (conceptual, based on subtle icon animations)](https://21st.dev/)
```




### 6. SocialProof

```
**Component Name:** SocialProof

**Purpose:** To build immediate trust and credibility by showcasing authentic experiences of others who have successfully improved their hydration and recovery with Cocofuel. This section leverages social proof to overcome skepticism and reinforce the product's rehydration effectiveness.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The Social Proof section should maintain a clean, trustworthy, and light aesthetic. Use a background of Pure White (#FFFFFF) or Light Gray Background (#CFD8DC) to ensure testimonials stand out clearly.
- **Typography:** Testimonial text in Montserrat (regular), attribution in Lato (semi-bold), using Charcoal Text (#263238) for main content and Slate Gray (#607D8B) for attribution details. Star ratings should be prominent and visually appealing.
- **Credibility Indicators:** Logos for Well+Good and MindBodyGreen should be clean, modern, and integrate seamlessly with the light theme.

**Copy:**

Don't just take our word for it. Hear from real people who have embraced Cocofuel and transformed their hydration journey. Their experiences reflect the very rehydration transformation you're seeking – from feeling depleted and dehydrated to optimally balanced and recovered.

**Testimonial 1:**
"Cocofuel has completely changed my hydration game! As a marketing coordinator, I used to feel parched and mentally foggy every afternoon. Since I started using Cocofuel, I stay properly hydrated throughout the day, my recovery after workouts is so much faster, and I no longer feel that constant dehydration. It's truly helped me reclaim my optimal balance!"

*   **Attribution:** Emily J., Marketing Coordinator

**Testimonial 2:**
"I've tried countless hydration products, but nothing ever felt right – too sugary, too artificial, or just didn't work. Cocofuel is different. It's natural, tastes amazing, and gives me the deep rehydration I need to power through my hikes and yoga sessions. I feel so much more in control of my hydration now."

*   **Attribution:** Sarah L., Fitness Enthusiast

**Ratings/Endorsements:**
*   **Customer Rating:** ★★★★★ (4.9/5) based on customer reviews
*   **Media Mention:** "Featured as a top rehydration essential by Well+Good and MindBodyGreen."

**Visuals/Layout:**
*   **Format:** Clean carousel layout for testimonials with user avatars and credentials. Each testimonial card should have a subtle shadow for depth against the light background.
*   **Star Ratings:** Clearly display ratings for overall product satisfaction.
*   **Credibility Indicators:** Feature Well+Good and MindBodyGreen logos prominently.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Testimonial Carousel Navigation:** Implement smooth, subtle slide transitions for the testimonial carousel, ensuring a seamless user experience. Navigation arrows or dots should be clean and responsive, similar to carousel components on React Bits. [Reference: React Bits (conceptual, based on carousel components)](https://reactbits.dev/)
- **Scrolling Testimonials (Optional):** For a dynamic display, consider using a continuously scrolling marquee effect for short, impactful testimonials, similar to the Marquee component from MagicUI (which is conceptually similar to some text animation patterns on 21st.dev). This can reinforce social proof without requiring user interaction. [Reference: 21st.dev (conceptual, based on text animation patterns)](https://21st.dev/)
```




### 7. ProductShowcase

```
**Component Name:** ProductShowcase

**Purpose:** To visually demonstrate Cocofuel's rehydration benefits in action, allowing users to understand how it seamlessly integrates into their daily lives to solve hydration and recovery challenges.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The Product Showcase should be visually compelling and align with the light theme, using clean layouts and vibrant imagery. Backgrounds should be Pure White (#FFFFFF) or Light Gray Background (#CFD8DC) to make the product and video content stand out.
- **Typography:** Text summaries should use Montserrat for readability, with headlines in Lato, all in Charcoal Text (#263238).
- **Color Palette:** Accents and highlights within the video or static images should subtly incorporate Ocean Breeze (#80DEEA) and Coral Burst (#FF8A65) to reinforce brand vitality.

**Content Strategy:** A short, compelling video showcasing the rehydration journey, complemented by static images for accessibility.

**Video (Primary Showcase):**
- **Duration:** 1-2 minutes
- **Narrative:** Follow a user experiencing dehydration challenges and then seamlessly integrating Cocofuel into their routine, showing the transformation from depleted to optimally hydrated and recovered.
    - **Opening Scene:** Relatable depiction of dehydration (feeling sluggish, parched during workout)
    - **Problem Introduction:** Common hydration frustrations (ineffective sports drinks, feeling depleted)
    - **Introducing Cocofuel:** Appealing shot of Cocofuel being prepared, highlighting natural coconut water powder
    - **Transformation in Action:** Dynamic visuals of improved hydration, faster recovery, mental clarity
    - **Benefit Visualization:** On-screen text highlighting "Deep Rehydration," "Faster Recovery," "Natural Electrolytes"
    - **Emotional Payoff:** User looking refreshed, balanced, and optimally hydrated

**Text Summary:**
See how Cocofuel seamlessly fits into your life, transforming your hydration, recovery, and overall well-being. From staying optimally hydrated during your busiest days to recovering faster from your toughest workouts, Cocofuel is your natural partner for sustained balance.

**Visuals/Layout:**
- **Primary Element:** Embedded video player prominently displayed.
- **Fallback Images:** High-quality images showcasing product preparation, usage scenarios, and recovery moments, all adhering to the light theme's aesthetic.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Video Expansion:** Implement the **MagicUI Hero Video Dialog** component for smooth video expansion and an immersive viewing experience upon user interaction. This allows the video to take center stage without navigating away, enhancing engagement. [Reference: MagicUI Hero Video Dialog (conceptual, based on similar video modals)](https://magicui.design/docs/components/hero-video-dialog)
- **Image Carousel/Gallery:** If using multiple fallback images, implement a smooth, interactive image carousel or gallery with subtle navigation cues (e.g., arrows, dots) and a gentle fade or slide transition between images. This can be inspired by image gallery components on React Bits. [Reference: React Bits (conceptual, based on image gallery components)](https://reactbits.dev/)
- **Scroll-Triggered Reveal:** The entire Product Showcase section could subtly animate into view as the user scrolls down the page (e.g., a gentle fade-in or slide-up effect), drawing attention to this key content. This aligns with content reveal patterns seen on 21st.dev. [Reference: 21st.dev (conceptual, based on scroll-triggered animations)](https://21st.dev/)
```




### 8. CallToAction

```
**Component Name:** CallToAction

**Purpose:** To provide clear, compelling opportunities for conversion throughout the user journey, maintaining momentum and addressing different levels of user readiness.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** CTAs should be visually prominent yet seamlessly integrated into the light theme. Use vibrant brand colors (Ocean Breeze #80DEEA, Coral Burst #FF8A65) for buttons to ensure high contrast and visibility against light backgrounds.
- **Typography:** Button text should be clear and concise, using Lato (bold) for impact, in Pure White (#FFFFFF) for readability.

**Mid-page CTA:**
"Ready to Transform Your Hydration?"
*   **Button Text:** "Start Rehydrating"
*   **Placement:** After the Value Proposition section, strategically placed to capture user interest after learning about benefits.
*   **Design:** Ocean Breeze (#80DEEA) background with Pure White (#FFFFFF) text, maintaining the light and refreshing aesthetic.

**Persistent CTA:**
*   **Format:** Subtle floating button or banner that appears after scrolling past the hero section, ensuring it's always accessible without being intrusive.
*   **Text:** "Rehydrate Now"
*   **Behavior:** Remains visible but unobtrusive, using Coral Burst (#FF8A65) for attention and urgency, aligning with the vibrant accents of the light theme.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Interactive Hover Button:** Both the Mid-page and Persistent CTAs should feature the **Interactive Hover Button** effect (similar to examples on React Bits). This includes a subtle scale effect and a gentle glow animation using the brand's primary gradient colors (Ocean Breeze to Coral Burst) on hover. This provides immediate visual feedback, enhances engagement, and reinforces the call to action. [Reference: React Bits Interactive Hover Button (conceptual, based on common patterns)](https://reactbits.dev/)
- **Subtle Appearance Animation:** The Persistent CTA could subtly fade or slide into view as the user scrolls past a certain point, drawing attention to its presence without being jarring. This aligns with scroll-triggered appearance animations seen on 21st.dev. [Reference: 21st.dev (conceptual, based on scroll-triggered animations)](https://21st.dev/)
```




### 9. UrgencyOffer

```
**Component Name:** UrgencyOffer

**Purpose:** To create urgency and incentivize immediate action through limited-time offers or exclusive deals.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The Urgency Offer section should be visually distinct yet harmonious with the light theme. Use a subtle background accent of Golden Glow (#FFD54F) to draw attention without overwhelming the clean aesthetic.
- **Typography:** Offer text in Montserrat (bold), countdown timer in a clear, legible font, all in Charcoal Text (#263238) for readability.
- **CTA Button:** The CTA button should be prominent, using Coral Burst (#FF8A65) for high visibility and urgency.

**Copy:**
"Limited Time: Get 20% off your first order and start your rehydration journey today!"

**Visual Design:**
- **Background:** Subtle Golden Glow (#FFD54F) accent with Charcoal Text (#263238).
- **Countdown Timer:** If applicable, a clean, modern countdown timer showing the time remaining for the offer.
- **CTA Button:** "Claim Your Discount" using Coral Burst (#FF8A65) color.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Countdown Timer Animation:** The countdown timer should have a subtle, continuous animation (e.g., a gentle pulse or a smooth flip for the numbers) to create a sense of urgency and draw attention to the limited-time offer. This can be inspired by dynamic timer components on React Bits. [Reference: React Bits (conceptual, based on dynamic timer components)](https://reactbits.dev/)
- **CTA Button Hover Effect:** The "Claim Your Discount" button should have a pronounced hover effect, perhaps a more significant scale and glow animation than other CTAs, to emphasize its importance and encourage immediate action. This aligns with the interactive button patterns on React Bits. [Reference: React Bits Interactive Hover Button (conceptual, based on common patterns)](https://reactbits.dev/)
- **Section Reveal:** The entire Urgency Offer section could subtly animate into view as the user scrolls, ensuring it captures their attention at the right moment. This can be achieved with scroll-triggered animations similar to those on 21st.dev. [Reference: 21st.dev (conceptual, based on scroll-triggered animations)](https://21st.dev/)
```




### 10. FrequentlyAskedQuestions

```
**Component Name:** FrequentlyAskedQuestions

**Purpose:** To address common objections and concerns about rehydration products, building confidence in Cocofuel's effectiveness and safety.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The FAQ section should maintain a clean, organized, and light aesthetic. Use a Light Gray Background (#CFD8DC) for the section to provide subtle contrast, with Pure White (#FFFFFF) for individual accordion items.
- **Typography:** Questions in Lato (semi-bold), answers in Montserrat (regular), all in Charcoal Text (#263238) for clear readability.
- **Icons:** Use clean, simple icons for expand/collapse functionality (e.g., plus/minus signs) that align with the light theme.

**Key Questions:**
1. "How is Cocofuel different from other hydration drinks?"
2. "What makes coconut water powder effective for rehydration?"
3. "How quickly will I notice improved hydration?"
4. "Is Cocofuel safe for daily use?"
5. "What's the best time to use Cocofuel?"

**Visual Design:**
- **Format:** Expandable accordion-style layout, where clicking a question reveals its answer.
- **Colors:** Light Gray Background (#CFD8DC) for the section, with individual FAQ items having a Pure White (#FFFFFF) background. Text in Charcoal Text (#263238).

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Smooth Expand/Collapse:** Implement smooth, fluid expand and collapse animations for the accordion items. This provides a polished user experience and prevents jarring content shifts. This can be achieved with CSS transitions or animation libraries, similar to UI component interactions on React Bits. [Reference: React Bits (conceptual, based on accordion/toggle components)](https://reactbits.dev/)
- **Question Hover Effect:** A subtle background highlight (e.g., Sky Whisper #B2EBF2) or a slight border change on hover for each question to indicate interactivity. This aligns with common interactive element patterns on 21st.dev. [Reference: 21st.dev (conceptual, based on interactive element patterns)](https://21st.dev/)
```




### 11. Footer

```
**Component Name:** Footer

**Purpose:** To provide comprehensive secondary navigation, legal information, and contact details while reinforcing trust and brand consistency with the light theme.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The Footer should maintain a clean, organized, and light aesthetic. Use a Light Gray Background (#CFD8DC) for subtle contrast with the main content, ensuring readability and a sense of completeness.
- **Typography:** Text in Slate Gray (#607D8B) for general information, and Charcoal Text (#263238) for headings and important links, maintaining high readability within the light theme.
- **Social Icons:** Social media icons should be clean and modern, using Ocean Breeze (#80DEEA) as their primary color to align with the brand palette.

**Structure:**
*   **Brand Statement:** "Cocofuel: Your Natural Partner for Optimal Hydration and Recovery" - positioned prominently to reinforce the brand message.
*   **Navigation Columns:** Organized into logical groups for easy access:
    *   **Product:** Benefits, Science, Ingredients, How It Works
    *   **Company:** About Us, Our Story, Sustainability, Careers
    *   **Support:** FAQ, Contact Us, Shipping & Returns, Customer Service
    *   **Connect:** Social media icons (Instagram, Facebook, Twitter, LinkedIn), Newsletter signup
*   **Legal Information:** Copyright notice, Privacy Policy, Terms of Service, Accessibility Statement - ensuring legal compliance and transparency.

**Visual Design:**
*   **Layout:** Responsive grid that stacks elegantly on mobile devices, ensuring a consistent user experience across all screen sizes.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Social Media Icons:** Implement a subtle scale effect (1.1x) and a color change to Coral Burst (#FF8A65) on hover for social media icons. This provides engaging visual feedback and encourages social engagement. This aligns with interactive icon patterns seen on React Bits. [Reference: React Bits (conceptual, based on interactive icon patterns)](https://reactbits.dev/)
- **Links:** Apply a clean animated underline using Ocean Breeze (#80DEEA) on hover for all navigation and legal links. This enhances usability and provides a modern, light feel. This can be inspired by subtle link hover effects on 21st.dev. [Reference: 21st.dev (conceptual, based on link hover effects)](https://21st.dev/)
- **Newsletter Signup:** The newsletter signup input field should feature a clear focus state with an Ocean Breeze (#80DEEA) border highlight when active, guiding user input. This is a common and effective UI interaction pattern.
```




### 12. ScrollToTop

```
**Component Name:** ScrollToTop

**Purpose:** To provide a convenient and intuitive way for users to quickly return to the top of the page, enhancing navigation and user experience, especially on longer landing pages.

**Brand Identity & Visual Design (Light Theme Emphasis):**
- **Overall Aesthetic:** The ScrollToTop button should be clean, unobtrusive, and align with the light theme. Its subtle presence should enhance the user experience without distracting from the content.
- **Colors:** Ocean Breeze (#80DEEA) background with a Pure White (#FFFFFF) icon, ensuring visibility and brand consistency against various page backgrounds.
- **Icon:** An upward-pointing arrow icon (e.g., Heroicons `arrow-up`) that is clear and easily recognizable.

**Visual Design:**
- **Format:** A small, circular floating button.
- **Placement:** Bottom-right corner of the viewport, with a slight offset from the edge, ensuring it doesn't interfere with other content.
- **Visibility:** Appears only after the user has scrolled down a certain distance (e.g., 200-300px from the top) and smoothly disappears when at the top, providing a contextual aid.

**Microinteractions (Leveraging 21st.dev & React Bits principles):**
- **Hover State:** Implement a subtle scale effect (1.1x) and a gentle shadow increase on hover, providing clear visual feedback that the button is interactive. This aligns with common interactive button patterns seen on React Bits. [Reference: React Bits (conceptual, based on interactive button patterns)](https://reactbits.dev/)
- **Click Action:** A smooth scroll animation back to the top of the page, ensuring a pleasant user experience. The animation should be fluid and not jarring, similar to smooth scrolling implementations seen on 21st.dev. [Reference: 21st.dev (conceptual, based on smooth scroll implementations)](https://21st.dev/)
- **Visibility Toggle:** The appearance and disappearance of the button should be animated (e.g., a subtle fade-in/fade-out or slide-in/slide-out) to provide a smooth transition, inspired by scroll-triggered visibility patterns on 21st.dev. [Reference: 21st.dev (conceptual, based on scroll-triggered visibility)](https://21st.dev/)
```

