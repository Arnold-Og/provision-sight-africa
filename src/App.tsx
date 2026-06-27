import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Technology = lazy(() => import("./pages/Technology"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Impact = lazy(() => import("./pages/Impact"));
const OutreachDetail = lazy(() => import("./pages/OutreachDetail"));
const Research = lazy(() => import("./pages/Research"));
const Team = lazy(() => import("./pages/Team"));
const Partners = lazy(() => import("./pages/Partners"));
const JoinMission = lazy(() => import("./pages/JoinMission"));
const Contact = lazy(() => import("./pages/Contact"));
const Demo = lazy(() => import("./pages/Demo"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AccessibilityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/technology" element={<Technology />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/impact" element={<Impact />} />
                  <Route
                    path="/impact/outreach/:id"
                    element={<OutreachDetail />}
                  />
                  <Route path="/research" element={<Research />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/join" element={<JoinMission />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </AccessibilityProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
