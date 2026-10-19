import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate form submission
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@baramijx.com",
      link: "mailto:hello@baramijx.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (972) 482-3020",
      link: "tel:+19724823020",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "3020 Charles Dr, Wylie, TX 75098",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#1E3A8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white/80 text-[16px] font-[600] mb-3 uppercase tracking-wide">
            Get In Touch
          </h2>
          <h3 className="text-[40px] font-[700] mb-4 text-white">
            Let's Start a Conversation
          </h3>
          <p className="text-white/70 text-[18px] max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-[14px] font-[500] mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-6 rounded-lg border border-border bg-input-background focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-[14px] font-[500] mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-6 rounded-lg border border-border bg-input-background focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-[14px] font-[500] mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-4 rounded-lg border border-border bg-input-background focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-white/90 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 font-[600]"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Office Carousel - Below form on desktop, above map on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:block hidden"
            >
              <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden">
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
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-[600] text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground text-[14px] hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-[14px]">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Office Carousel - Mobile only (above map) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:hidden block"
            >
              <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden">
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
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card p-6 rounded-xl shadow-md border border-border h-80 overflow-hidden">
                <div className="w-full h-full rounded-lg overflow-hidden">
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}