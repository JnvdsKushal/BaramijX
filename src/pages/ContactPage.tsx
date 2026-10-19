import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Instagram, ChevronLeft, ChevronRight, RefreshCw, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import SEO from "../components/SEO";
import { submitContact } from "../lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    referral: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const officeImages = [
    {
      url: "https://images.unsplash.com/photo-1560922604-d08a31f8f7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzY5NDk3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Our Office Building"
    },
    {
      url: "https://images.unsplash.com/photo-1558959357-685f9c7ace7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBsb2JieSUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3NjM3OTEyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Reception & Lobby"
    },
    {
      url: "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBpbnRlcmlvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM3OTEyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Workspace"
    },
    {
      url: "https://images.unsplash.com/photo-1703355685952-03ed19f70f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NjM3NTIwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Meeting Rooms"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === officeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, officeImages.length]);

  const handlePrevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? officeImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === officeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitContact(formData);
      if (result.success) {
        setSubmitStatus('success');
        toast.success(result.message);
        setFormData({ name: "", email: "", phone: "", company: "", message: "", referral: "" });
      } else {
        setSubmitStatus('error');
        toast.error(result.message);
      }
    } catch {
      setSubmitStatus('error');
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact BaramijX for inquiries about our digital consulting, SEO, and web development services. We're here to help your business grow."
        canonical="https://baramijx.com/contact"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')] bg-cover bg-center opacity-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-primary rounded-full text-[14px] font-[600] shadow-lg">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[48px] sm:text-[64px] lg:text-[72px] font-[800] text-white mb-6 leading-tight drop-shadow-lg"
          >
            Get in Touch with BaramijX
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/90 text-[18px] sm:text-[20px] max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            Have questions, ideas, or need support? Use the form below and our team will get back to you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-[28px] font-[700] mb-6 text-foreground">
              Connect With Us
            </h2>
            <p className="text-muted-foreground text-[16px] mb-8 leading-relaxed">
              Our team of technology experts is ready to help you transform your ideas into reality. Reach out through any channel that works for you.
            </p>

            {/* Quick Contact Box */}
            <div className="mb-8 p-6 bg-[#1E3A8A] text-white rounded-2xl shadow-xl">
              <h3 className="text-[20px] font-[700] mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-[14px] mb-4 opacity-90">
                Call us directly for urgent inquiries
              </p>
              <a
                href="tel:+19724823020"
                className="inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-xl text-[16px] font-[700] hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                +1 (972) 482-3020
              </a>
              <p className="mt-4 text-[13px] opacity-80">
                Available Mon-Fri, 9am-6pm PST
              </p>
            </div>

            <div className="space-y-6">
              {/* Office Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] font-[600] text-foreground mb-1">
                    Our Office
                  </h3>
                  <p className="text-muted-foreground text-[14px]">
                    3020 Charles Dr<br />
                    Wylie, TX 75098<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] font-[600] text-foreground mb-1">
                    Phone Number
                  </h3>
                  <a href="tel:+19724823020" className="text-muted-foreground text-[14px] hover:text-primary transition-colors">
                    +1 (972) 482-3020
                  </a>
                  <p className="text-muted-foreground text-[14px]">Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] font-[600] text-foreground mb-1">
                    Email Address
                  </h3>
                  <a href="mailto:hello@baramijx.com" className="text-muted-foreground text-[14px] hover:text-primary transition-colors block">
                    hello@baramijx.com
                  </a>
                  <p className="text-muted-foreground text-[13px]">For general inquiries</p>
                  <a href="mailto:sales@baramijx.com" className="text-muted-foreground text-[14px] hover:text-primary transition-colors block mt-1">
                    sales@baramijx.com
                  </a>
                  <p className="text-muted-foreground text-[13px]">For project discussions</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[18px] font-[600] text-foreground mb-1">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground text-[14px]">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {/* X (formerly Twitter) — matches footer icon & href */}
              <a href="https://x.com/BaramijX" target="_blank" rel="noopener noreferrer" aria-label="Follow BaramijX on X" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/baramijx" target="_blank" rel="noopener noreferrer" aria-label="BaramijX on LinkedIn" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/baramijx" target="_blank" rel="noopener noreferrer" aria-label="BaramijX on Instagram" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Office Images Carousel */}
            <div className="mt-8 bg-white rounded-xl shadow-md border border-border overflow-hidden">
              <div className="relative h-80 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <ImageWithFallback
                      src={officeImages[currentImageIndex].url}
                      alt={officeImages[currentImageIndex].title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    {/* Image Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h4 className="text-white text-[18px] font-[600]">
                        {officeImages[currentImageIndex].title}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {officeImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                        }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-md h-80">
              <iframe
                title="BaramijX Office Location"
                src="https://maps.google.com/maps?q=3020%20Charles%20Dr%2C%20Wylie&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-border"
          >
            <h2 className="text-[28px] font-[700] mb-3 text-foreground">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground text-[14px] mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-[500] text-foreground mb-2">
                    Full Name <span className="text-[#06b6d4]">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-6 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[14px] font-[500] text-foreground mb-2">
                    Email Address <span className="text-[#06b6d4]">*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-6 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[14px] font-[500] text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-6 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[14px] font-[500] text-foreground mb-2">
                    Company / Organization
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-6 rounded-xl"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[14px] font-[500] text-foreground mb-2">
                  How can we help you? <span className="text-[#06b6d4]">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your needs, questions, or how we can assist you..."
                  className="w-full px-4 py-4 rounded-xl resize-none"
                  required
                />
              </div>

              {/* Referral Source */}
              <div>
                <label htmlFor="referral" className="block text-[14px] font-[500] text-foreground mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-white text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="search">Search Engine (Google, etc.)</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral / Recommendation</option>
                  <option value="event">Event / Conference</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Form Actions */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-6 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white hover:scale-105'
                    }`}
                >
                  {isSubmitting ? (
                    <><RefreshCw className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : submitStatus === 'success' ? (
                    <><CheckCircle className="w-5 h-5" /> Sent Successfully!</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </Button>
                <p className="text-[13px] text-muted-foreground text-center mt-4">
                  If you're looking for a detailed project estimate, please use our{" "}
                  <a href="/get-quote" className="text-primary hover:underline font-[500]">
                    Get a Quote page
                  </a>
                  .
                </p>
              </div>

              <p className="text-[13px] text-muted-foreground text-center mt-4">
                By submitting this form, you agree to our{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . We'll get back to you as soon as possible.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}