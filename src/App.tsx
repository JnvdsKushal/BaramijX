import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { CookieBanner } from "./components/CookieBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GetQuotePage from "./pages/GetQuotePage";
import DigitalMarketingSEO from "./pages/DigitalMarketingSEO";
import WebEcommerceSolutions from "./pages/WebEcommerceSolutions";
import BusinessConsulting from "./pages/BusinessConsulting";
import InfrastructureManagement from "./pages/InfrastructureManagement";
import AllServices from "./pages/AllServices";
import AllBlogs from "./pages/AllBlogs";
import DigitalTransformation2025 from "./pages/blog/DigitalTransformation2025";
import CloudMigrationGuide from "./pages/blog/CloudMigrationGuide";
import AIPracticalApplications from "./pages/blog/AIPracticalApplications";
import CybersecurityBestPractices from "./pages/blog/CybersecurityBestPractices";
import DataAnalyticsROI from "./pages/blog/DataAnalyticsROI";
import RemoteWorkTechnology from "./pages/blog/RemoteWorkTechnology";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change (but not if there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden w-full flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/services/digital-marketing-seo" element={<DigitalMarketingSEO />} />
            <Route path="/services/web-ecommerce-solutions" element={<WebEcommerceSolutions />} />
            <Route path="/services/business-consulting" element={<BusinessConsulting />} />
            <Route path="/services/infrastructure-management" element={<InfrastructureManagement />} />
            <Route path="/blog" element={<AllBlogs />} />
            <Route path="/blog/digital-transformation-2025" element={<DigitalTransformation2025 />} />
            <Route path="/blog/cloud-migration-guide" element={<CloudMigrationGuide />} />
            <Route path="/blog/ai-practical-applications" element={<AIPracticalApplications />} />
            <Route path="/blog/cybersecurity-best-practices" element={<CybersecurityBestPractices />} />
            <Route path="/blog/data-analytics-roi" element={<DataAnalyticsROI />} />
            <Route path="/blog/remote-work-technology" element={<RemoteWorkTechnology />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-quote" element={<GetQuotePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}