import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import useScrollToTop from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
