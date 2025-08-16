import { Suspense, ReactNode } from 'react';
import CocofuelHeader from "@/components/CocofuelHeader";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import SocialProof from "@/components/SocialProof";
import ProductShowcase from "@/components/ProductShowcase";
import CallToAction from "@/components/CallToAction";
import UrgencyOffer from "@/components/UrgencyOffer";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import ScrollToTop from "@/components/ScrollToTop";
import Pricing from "@/components/Pricing";
import Testimonials3 from "@/components/Testimonials3";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'Cocofuel - Natural Hydration & Energy',
  description: 'Discover Cocofuel\'s natural coconut water formula for sustained energy, optimal hydration, and enhanced performance without artificial ingredients.',
  keywords: 'coconut water, natural hydration, energy drink, organic, health, fitness, natural energy, coconut, hydration',
};

export default function Home(): JSX.Element {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CocofuelHeader />
      </Suspense>
      <main>
        {/* FeNAgO - The complete platform for building agentic AI-powered SaaS products */}
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <SocialProof />
        <ProductShowcase />
        <CallToAction />
        <UrgencyOffer />
        <FrequentlyAskedQuestions />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
