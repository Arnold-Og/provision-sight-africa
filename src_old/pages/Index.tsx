import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionViewTracker from "@/components/SectionViewTracker";

const About = lazy(() => import("@/components/About"));
const Features = lazy(() => import("@/components/Features"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Partners = lazy(() => import("@/components/Partners"));
const Contact = lazy(() => import("@/components/Contact"));
const BetaCTA = lazy(() => import("@/components/BetaCTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <About />
        <Features />
        <Testimonials />
        <Partners />
        <Contact />
        <BetaCTA />
        <Footer />
      </Suspense>
      <SectionViewTracker />
    </div>
  );
};

export default Index;
