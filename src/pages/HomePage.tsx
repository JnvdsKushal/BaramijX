import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Blog from "../components/Blog";
import SEO from "../components/SEO";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="w-full">
      <SEO 
        title="Digital Consulting & IT Solutions" 
        description="BaramijX empowers businesses with expert IT strategy, cloud solutions, and digital transformation consulting. Transform your business today."
      />
      <Hero />
      <About />
      <Services />
      <Blog />
    </div>
  );
}