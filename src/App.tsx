import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

// Services
import CustomWebsites from "./pages/services/CustomWebsites";
import LeadGeneration from "./pages/services/LeadGeneration";
import SocialMedia from "./pages/services/SocialMedia";
import GrowthAnalytics from "./pages/services/GrowthAnalytics";

// Company
import AboutUs from "./pages/company/AboutUs";
import OurStory from "./pages/company/OurStory";
import Careers from "./pages/company/Careers";
import Press from "./pages/company/Press";

// Resources
import Blog from "./pages/resources/Blog";
import CaseStudies from "./pages/resources/CaseStudies";
import Resources from "./pages/resources/Resources";
import HelpCenter from "./pages/resources/HelpCenter";

// Legal
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import GDPR from "./pages/legal/GDPR";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          
          {/* Services */}
          <Route path="/services/custom-websites" element={<CustomWebsites />} />
          <Route path="/services/lead-generation" element={<LeadGeneration />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/growth-analytics" element={<GrowthAnalytics />} />
          
          {/* Company */}
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/company/our-story" element={<OurStory />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/press" element={<Press />} />
          
          {/* Resources */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/resources" element={<Resources />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          
          {/* Legal */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal/gdpr" element={<GDPR />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
