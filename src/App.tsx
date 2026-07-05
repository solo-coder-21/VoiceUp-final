import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

import Index from "./pages/Index";
import Demos from "./pages/Demos";
import Pricing from "./pages/Pricing";
import Customers from "./pages/Customers";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Outbound from "./pages/products/Outbound";
import Transcriptions from "./pages/products/Transcriptions";
import VoiceBots from "./pages/products/VoiceBots";
import Recording from "./pages/products/Recording";
import Analytics from "./pages/products/Analytics";

import AIVoiceConnector from "./pages/solutions/AIVoiceConnector";
import AIAnalyticsInsights from "./pages/solutions/AIAnalyticsInsights";

const queryClient = new QueryClient();

// Scroll to top on route change, but preserve hash-based anchor scrolling on the same page.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Products */}
          <Route path="/products/outbound" element={<Outbound />} />
          <Route path="/products/transcriptions" element={<Transcriptions />} />
          <Route path="/products/voicebots" element={<VoiceBots />} />
          <Route path="/products/recording" element={<Recording />} />
          <Route path="/products/analytics" element={<Analytics />} />

          {/* Solutions */}
          <Route path="/solutions/ai-voice-connector" element={<AIVoiceConnector />} />
          <Route path="/solutions/ai-analytics-insights" element={<AIAnalyticsInsights />} />

          {/* Top-level pages */}
          <Route path="/demos" element={<Demos />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />

          {/* Redirects for legacy routes from the previous site */}
          <Route path="/solutions" element={<Navigate to="/products/outbound" replace />} />
          <Route path="/contact" element={<Navigate to="/pricing" replace />} />
          <Route path="/industries" element={<Navigate to="/customers" replace />} />
          <Route path="/case-studies" element={<Navigate to="/customers" replace />} />
          <Route path="/brochure" element={<Navigate to="/about" replace />} />
          <Route path="/flyer" element={<Navigate to="/about" replace />} />
          <Route path="/blog" element={<Navigate to="/about" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
