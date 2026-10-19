import { Linkedin, Instagram, Mail, ArrowUp, Facebook, MessageCircle } from "lucide-react";
import { TextPressureEffect } from "./TextPressureEffect";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    // If we're on the home page, just scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Handle scrolling when navigating with hash
  useEffect(() => {
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

  const quickLinks = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Services", route: "/services" },
    { label: "Blog", route: "/blog" },
    { label: "Contact", route: "/contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/110243033/admin/dashboard/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/baramijx?utm_source=qr&igsh=dzJtZjYycHZ5M2Ez", label: "Instagram" },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: "https://x.com/BaramijX", 
      label: "X (formerly Twitter)" 
    },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584359174427", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/0000000000", label: "WhatsApp" },
    { icon: Mail, href: "mailto:hello@baramijx.com", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three column layout on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Left Column - Company Info (full width on mobile, 1/3 on desktop) */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-[28px] font-[700] mb-4 text-white block">
              BaramijX
            </span>
            <p className="text-white/80 text-[14px] leading-relaxed mb-6">
              Empowering businesses through innovative digital consulting solutions.
              We transform challenges into opportunities and help you achieve
              sustainable growth in the digital age.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Middle Column - Quick Links (side by side on mobile with Legal) */}
          <div>
            <h4 className="text-[16px] font-[600] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.route}
                    className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Legal (side by side on mobile with Quick Links) */}
          <div>
            <h4 className="text-[16px] font-[600] mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-white/80 hover:text-white text-[14px] transition-colors duration-200"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-[14px]">
            © {new Date().getFullYear()} BaramijX. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}