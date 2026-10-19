import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCardNav, setShowCardNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Section-based color theming for navbar gradient
  const getSectionTheme = () => {
    const path = location.pathname;

    if (path === '/' || path === '/preview_page.html') {
      return {
        gradient: 'from-slate-900/80 via-slate-900/40 to-transparent',
        solid: 'bg-white',
        textAtTop: 'text-white',
        textScrolled: 'text-foreground'
      };
    } else if (path === '/about') {
      return {
        gradient: 'from-blue-950/75 via-blue-950/35 to-transparent',
        solid: 'bg-white',
        textAtTop: 'text-white',
        textScrolled: 'text-foreground'
      };
    } else if (path.startsWith('/services')) {
      return {
        gradient: 'from-indigo-950/75 via-indigo-950/35 to-transparent',
        solid: 'bg-white',
        textAtTop: 'text-white',
        textScrolled: 'text-foreground'
      };
    } else if (path.startsWith('/blog')) {
      return {
        gradient: 'from-slate-800/75 via-slate-800/35 to-transparent',
        solid: 'bg-white',
        textAtTop: 'text-white',
        textScrolled: 'text-foreground'
      };
    } else if (path === '/get-quote') {
      return {
        gradient: 'from-blue-900/75 via-blue-900/35 to-transparent',
        solid: 'bg-white',
        textAtTop: 'text-white',
        textScrolled: 'text-foreground'
      };
    } else if (path === '/contact') {
      return {
        gradient: 'from-slate-900/75 via-slate-900/35 to-transparent',
        solid: 'bg-white',
        textAtTop: 'text-white',
        textScrolled: 'text-foreground'
      };
    }

    // Default fallback
    return {
      gradient: 'from-slate-900/75 via-slate-900/35 to-transparent',
      solid: 'bg-white',
      textAtTop: 'text-white',
      textScrolled: 'text-foreground'
    };
  };

  const theme = getSectionTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      const showCard = window.scrollY > 100;
      setIsScrolled(scrolled);
      setShowCardNav(showCard);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsBlogOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsBlogOpen(false);
  };

  interface NavLink {
    label: string;
    id?: string;
    route?: string;
    hasDropdown?: boolean;
    dropdownType?: string;
  }

  interface DropdownItem {
    label: string;
    route?: string;
    id?: string;
    featured?: boolean;
  }

  const servicesDropdown: DropdownItem[] = [
    { label: "Digital Marketing & SEO", route: "/services/digital-marketing-seo" },
    { label: "Web & E-commerce Solutions", route: "/services/web-ecommerce-solutions" },
    { label: "Business Consulting", route: "/services/business-consulting" },
    { label: "Infrastructure Management", route: "/services/infrastructure-management" },
    { label: "View All Services", route: "/services", featured: true },
  ];

  const blogDropdown: DropdownItem[] = [
    { label: "Digital Transformation 2025", route: "/blog/digital-transformation-2025" },
    { label: "Cloud Migration Guide", route: "/blog/cloud-migration-guide" },
    { label: "AI Practical Applications", route: "/blog/ai-practical-applications" },
    { label: "Cybersecurity Best Practices", route: "/blog/cybersecurity-best-practices" },
    { label: "Data Analytics ROI", route: "/blog/data-analytics-roi" },
    { label: "Remote Work Technology", route: "/blog/remote-work-technology" },
    { label: "View All Articles", route: "/blog", featured: true },
  ];

  const navLinks: NavLink[] = [
    { label: "Home", id: "home" },
    { label: "About", route: "/about" },
    { label: "Services", hasDropdown: true, dropdownType: "services" },
    { label: "Blog", hasDropdown: true, dropdownType: "blog" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <>
      {/* Initial Full Width Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showCardNav ? "opacity-0 pointer-events-none" : "opacity-100"
          } ${isScrolled
            ? `${theme.solid} shadow-md`
            : `bg-gradient-to-b ${theme.gradient}`
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="cursor-pointer"
              onClick={scrollToTop}
              aria-label="BaramijX Home"
            >
              <span className={`font-[700] text-[32px] tracking-wide transition-colors duration-500 ${isScrolled ? theme.textScrolled : theme.textAtTop
                }`}>
                BaramijX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => link.dropdownType === "services" ? setIsServicesOpen(true) : setIsBlogOpen(true)}
                      onMouseLeave={() => link.dropdownType === "services" ? setIsServicesOpen(false) : setIsBlogOpen(false)}
                    >
                      <button
                        aria-expanded={link.dropdownType === "services" ? isServicesOpen : isBlogOpen}
                        aria-haspopup="true"
                        className={`flex items-center gap-1 transition-colors duration-500 hover:text-primary font-[500] ${isScrolled ? theme.textScrolled : theme.textAtTop
                          }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${(link.dropdownType === "services" ? isServicesOpen : isBlogOpen) ? "rotate-180" : ""}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {((link.dropdownType === "services" && isServicesOpen) || (link.dropdownType === "blog" && isBlogOpen)) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                          >
                            {(link.dropdownType === "services" ? servicesDropdown : blogDropdown).map((item, index) => (
                              item.route ? (
                                <Link
                                  key={index}
                                  to={item.route}
                                  onClick={() => {
                                    setIsServicesOpen(false);
                                    setIsBlogOpen(false);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className={`block w-full text-left px-6 py-4 hover:bg-primary/5 transition-colors hover:text-primary font-[500] text-[14px] border-b border-border/50 last:border-0 ${item.featured ? "bg-primary/5 text-primary" : "text-foreground"
                                    }`}
                                >
                                  {item.label}
                                </Link>
                              ) : (
                                <button
                                  key={index}
                                  onClick={() => scrollToSection(item.id ?? '')}
                                  className="w-full text-left px-6 py-4 hover:bg-primary/5 transition-colors text-foreground hover:text-primary font-[500] text-[14px] border-b border-border/50 last:border-0"
                                >
                                  {item.label}
                                </button>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    link.route ? (
                      <Link
                        to={link.route}
                        className={`transition-colors duration-500 hover:text-primary font-[500] ${isScrolled ? theme.textScrolled : theme.textAtTop
                          }`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id ?? '')}
                        className={`transition-colors duration-500 hover:text-primary font-[500] ${isScrolled ? theme.textScrolled : theme.textAtTop
                          }`}
                      >
                        {link.label}
                      </button>
                    )
                  )}
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="hidden md:block">
              <Link to="/get-quote" className="w-full">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 transition-colors duration-500 ${isScrolled ? theme.textScrolled : theme.textAtTop}`} />
              ) : (
                <Menu className={`w-6 h-6 transition-colors duration-500 ${isScrolled ? theme.textScrolled : theme.textAtTop}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => link.dropdownType === "services" ? setIsServicesOpen(!isServicesOpen) : setIsBlogOpen(!isBlogOpen)}
                        className="flex items-center justify-between w-full text-left py-2 text-foreground hover:text-primary transition-colors font-[500]"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${(link.dropdownType === "services" ? isServicesOpen : isBlogOpen) ? "rotate-180" : ""}`} />
                      </button>
                      {((link.dropdownType === "services" && isServicesOpen) || (link.dropdownType === "blog" && isBlogOpen)) && (
                        <div className="pl-4 space-y-2 mt-2">
                          {(link.dropdownType === "services" ? servicesDropdown : blogDropdown).map((item, index) => (
                            item.route ? (
                              <Link
                                key={index}
                                to={item.route}
                                onClick={() => {
                                  setIsServicesOpen(false);
                                  setIsBlogOpen(false);
                                  setIsMobileMenuOpen(false);
                                }}
                                className={`block w-full text-left py-2 hover:text-primary transition-colors text-[14px] ${item.featured ? "text-primary font-[500]" : "text-muted-foreground"
                                  }`}
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <button
                                key={index}
                                onClick={() => scrollToSection(item.id ?? '')}
                                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors text-[14px]"
                              >
                                {item.label}
                              </button>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    link.route ? (
                      <Link
                        to={link.route}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id ?? '')}
                        className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </button>
                    )
                  )}
                </div>
              ))}
              <Button
                onClick={() => {
                  navigate('/get-quote');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Card Nav - Appears on Scroll */}
      <AnimatePresence>
        {showCardNav && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
          >
            <div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl border border-border/50 px-6 py-3">
              <div className="flex items-center gap-8">
                {/* Logo */}
                <Link
                  to="/"
                  className="cursor-pointer border-r border-border/50 pr-6"
                  onClick={scrollToTop}
                  aria-label="BaramijX Home"
                >
                  <span className="font-[700] text-[24px] text-primary tracking-wide">
                    BaramijX
                  </span>
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-6">
                  {navLinks.map((link) => (
                    <div key={link.label} className="relative">
                      {link.hasDropdown ? (
                        <div
                          className="relative"
                          onMouseEnter={() => link.dropdownType === "services" ? setIsServicesOpen(true) : setIsBlogOpen(true)}
                          onMouseLeave={() => link.dropdownType === "services" ? setIsServicesOpen(false) : setIsBlogOpen(false)}
                        >
                          <button
                            aria-expanded={link.dropdownType === "services" ? isServicesOpen : isBlogOpen}
                            aria-haspopup="true"
                            className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-[500] text-[14px]"
                          >
                            {link.label}
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${(link.dropdownType === "services" ? isServicesOpen : isBlogOpen) ? "rotate-180" : ""}`} />
                          </button>

                          {/* Dropdown Menu */}
                          <AnimatePresence>
                            {((link.dropdownType === "services" && isServicesOpen) || (link.dropdownType === "blog" && isBlogOpen)) && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                              >
                                {(link.dropdownType === "services" ? servicesDropdown : blogDropdown).map((item, index) => (
                                  item.route ? (
                                    <Link
                                      key={index}
                                      to={item.route}
                                      onClick={() => {
                                        setIsServicesOpen(false);
                                        setIsBlogOpen(false);
                                        setIsMobileMenuOpen(false);
                                      }}
                                      className={`block w-full text-left px-6 py-4 hover:bg-primary/5 transition-colors hover:text-primary font-[500] text-[14px] border-b border-border/50 last:border-0 ${item.featured ? "bg-primary/5 text-primary" : "text-foreground"
                                        }`}
                                    >
                                      {item.label}
                                    </Link>
                                  ) : (
                                    <button
                                      key={index}
                                      onClick={() => scrollToSection(item.id ?? '')}
                                      className="w-full text-left px-6 py-4 hover:bg-primary/5 transition-colors text-foreground hover:text-primary font-[500] text-[14px] border-b border-border/50 last:border-0"
                                    >
                                      {item.label}
                                    </button>
                                  )
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        link.route ? (
                          <Link
                            to={link.route}
                            className="text-foreground hover:text-primary transition-colors duration-200 font-[500] text-[14px]"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <button
                            onClick={() => scrollToSection(link.id ?? '')}
                            className="text-foreground hover:text-primary transition-colors duration-200 font-[500] text-[14px]"
                          >
                            {link.label}
                          </button>
                        )
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => navigate('/get-quote')}
                  className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md ml-2"
                  size="sm"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Card Nav */}
      <AnimatePresence>
        {showCardNav && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-4 left-4 right-4 z-50 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl border border-border/50 px-4 py-3">
              <div className="flex justify-between items-center">
                {/* Logo */}
                <Link
                  to="/"
                  className="cursor-pointer"
                  onClick={scrollToTop}
                  aria-label="BaramijX Home"
                >
                  <span className="font-[700] text-[22px] text-primary tracking-wide">
                    BaramijX
                  </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  className="p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-foreground" />
                  ) : (
                    <Menu className="w-6 h-6 text-foreground" />
                  )}
                </button>
              </div>

              {/* Mobile Menu Dropdown */}
              {isMobileMenuOpen && (
                <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {link.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => link.dropdownType === "services" ? setIsServicesOpen(!isServicesOpen) : setIsBlogOpen(!isBlogOpen)}
                            className="flex items-center justify-between w-full text-left py-2 text-foreground hover:text-primary transition-colors font-[500]"
                          >
                            {link.label}
                            <ChevronDown className={`w-4 h-4 transition-transform ${(link.dropdownType === "services" ? isServicesOpen : isBlogOpen) ? "rotate-180" : ""}`} />
                          </button>
                          {((link.dropdownType === "services" && isServicesOpen) || (link.dropdownType === "blog" && isBlogOpen)) && (
                            <div className="pl-4 space-y-2 mt-2">
                              {(link.dropdownType === "services" ? servicesDropdown : blogDropdown).map((item, index) => (
                                item.route ? (
                                  <Link
                                    key={index}
                                    to={item.route}
                                    onClick={() => {
                                      setIsServicesOpen(false);
                                      setIsBlogOpen(false);
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className={`block w-full text-left py-2 hover:text-primary transition-colors text-[14px] ${item.featured ? "text-primary font-[500]" : "text-muted-foreground"
                                      }`}
                                  >
                                    {item.label}
                                  </Link>
                                ) : (
                                  <button
                                    key={index}
                                    onClick={() => scrollToSection(item.id ?? '')}
                                    className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors text-[14px]"
                                  >
                                    {item.label}
                                  </button>
                                )
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        link.route ? (
                          <Link
                            to={link.route}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-[500]"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <button
                            onClick={() => scrollToSection(link.id ?? '')}
                            className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-[500]"
                          >
                            {link.label}
                          </button>
                        )
                      )}
                    </div>
                  ))}
                  <Button
                    onClick={() => {
                      navigate('/get-quote');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
