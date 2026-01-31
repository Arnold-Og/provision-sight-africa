import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Features = lazy(() => import("@/components/Features"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Partners = lazy(() => import("@/components/Partners"));
const Contact = lazy(() => import("@/components/Contact"));
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
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
