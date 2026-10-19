import { useState } from "react";
import { motion } from "motion/react";
import {
  Shield,
  Clock,
  Handshake,
  TrendingUp,
  Code,
  Smartphone,
  Cloud,
  Brain,
  RefreshCw,
  PieChart,
  Send,
  Upload,
  FileText,
  X,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import SEO from "../components/SEO";
import { submitQuote } from "../lib/api";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectName: "",
    serviceCategory: "",
    description: "",
    budgetRange: "$25,000 - $50,000",
    timeline: "",
    additionalInfo: "",
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [budgetValue, setBudgetValue] = useState(3);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  const processSteps = [
    {
      number: 1,
      title: "Share Your Project",
      description: "Fill out our detailed form with your project requirements, timeline, and budget preferences.",
    },
    {
      number: 2,
      title: "Expert Analysis",
      description: "Our solutions team reviews your requirements and analyzes the best approach for your project.",
    },
    {
      number: 3,
      title: "Receive Your Quote",
      description: "Get a comprehensive quote with detailed breakdowns, timelines, and next steps within 48 hours.",
    },
    {
      number: 4,
      title: "Kick-off Meeting",
      description: "Schedule a free consultation to discuss the quote and begin your project planning.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "No Hidden Costs",
      description: "Our quotes include all development, testing, and deployment costs upfront.",
    },
    {
      icon: Clock,
      title: "48-Hour Response",
      description: "Receive your detailed quote within two business days of submission.",
    },
    {
      icon: Handshake,
      title: "No Obligation",
      description: "Getting a quote doesn't commit you to anything. Review it at your own pace.",
    },
    {
      icon: TrendingUp,
      title: "Tailored Solutions",
      description: "Every quote is customized based on your specific requirements and goals.",
    },
  ];

  const serviceCategories = [
    { value: "web-development", icon: Code, label: "Web Development" },
    { value: "mobile-app", icon: Smartphone, label: "Mobile App" },
    { value: "cloud-solutions", icon: Cloud, label: "Cloud Solutions" },
    { value: "ai-ml", icon: Brain, label: "AI/ML Solutions" },
    { value: "digital-transformation", icon: RefreshCw, label: "Digital Transformation" },
    { value: "consulting", icon: PieChart, label: "IT Consulting" },
  ];

  const timelineOptions = [
    { value: "urgent", label: "Urgent (1-2 months)" },
    { value: "standard", label: "Standard (3-6 months)" },
    { value: "flexible", label: "Flexible (6+ months)" },
    { value: "planning", label: "Just planning" },
  ];

  const faqs = [
    {
      question: "How long does it take to receive a quote?",
      answer: "We typically provide detailed quotes within 48 hours of receiving your complete project information. For complex projects requiring additional analysis, we may need up to 72 hours but will keep you informed of our progress.",
    },
    {
      question: "What's included in the quote?",
      answer: "Our quotes include a detailed breakdown of all costs: development hours, project management, quality assurance, deployment, and any third-party services or licenses. We also provide a clear timeline, milestones, and deliverables list.",
    },
    {
      question: "Is the quote binding?",
      answer: "No, receiving a quote does not obligate you to proceed. It's a detailed proposal for your review. If you decide to move forward, we'll convert the quote into a formal contract with your approval.",
    },
    {
      question: "Can I get a quote for multiple service options?",
      answer: "Yes, we can provide comparative quotes for different approaches to your project. Just mention this in your project description, and our team will prepare options with their respective pros, cons, and pricing.",
    },
    {
      question: "What if my requirements change after receiving the quote?",
      answer: "We understand that requirements can evolve. If your needs change, we can revise the quote accordingly. Major changes may require additional analysis time, but minor adjustments can often be accommodated quickly.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index));
  };

  const handleBudgetChange = (value: number) => {
    setBudgetValue(value);
    setFormData({ ...formData, budgetRange: budgetRanges[value - 1] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.projectName || !formData.serviceCategory || !formData.description || !formData.timeline) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitQuote(formData);
      if (result.success) {
        setSubmitStatus('success');
        toast.success(result.message);
        setFormData({
          name: "", email: "", phone: "", company: "", projectName: "",
          serviceCategory: "", description: "", budgetRange: "$25,000 - $50,000",
          timeline: "", additionalInfo: "",
        });
        setBudgetValue(3);
        setSelectedFiles([]);
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

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Get a Quote - Start Your Project"
        description="Request a custom quote for your IT project. Tell us about your needs and we'll provide a detailed proposal within 48 hours."
        canonical="https://baramijx.com/get-quote"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-primary rounded-full text-[14px] font-[600] shadow-lg">
              Get a Quote
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[48px] sm:text-[64px] lg:text-[72px] font-[800] text-white mb-6 leading-tight drop-shadow-lg"
          >
            Get Your Custom Project Quote
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/90 text-[18px] sm:text-[20px] max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            Tell us about your project so we can provide accurate pricing and timelines, tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[32px] md:text-[36px] font-[700] mb-12 text-foreground">
            Our Simple Quote Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-[#7c3aed] rounded-full flex items-center justify-center text-white text-[24px] font-[700] mb-6">
                  {step.number}
                </div>
                <h3 className="text-[20px] font-[600] mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border h-fit"
            >
              <h2 className="text-[24px] font-[700] mb-4 text-foreground">
                Why Get a Quote from BaramijX?
              </h2>
              <p className="text-[16px] text-muted-foreground mb-8">
                Our transparent quoting process ensures you get accurate pricing with no hidden fees.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#dbeafe] to-[#ede9fe] rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-[600] mb-1 text-foreground">
                        {benefit.title}
                      </h4>
                      <p className="text-[14px] text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-[#f0f9ff] rounded-xl border-l-4 border-primary">
                <p className="text-[14px] font-[500] mb-2 text-foreground">
                  Need immediate assistance?
                </p>
                <p className="text-[14px] text-muted-foreground">
                  Call us at{" "}
                  <a href="tel:+19724823020" className="text-primary font-[600] hover:underline">
                    +1 (972) 482-3020
                  </a>{" "}
                  for urgent inquiries.
                </p>
              </div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-border"
            >
              <h2 className="text-[24px] font-[700] mb-2 text-foreground">
                Project Quote Request
              </h2>
              <p className="text-[14px] text-muted-foreground mb-8">
                Please provide as much detail as possible for an accurate quote. All information is kept confidential.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[14px] font-[500] mb-2 text-foreground">
                      Full Name <span className="text-[#06b6d4]">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-[500] mb-2 text-foreground">
                      Email Address <span className="text-[#06b6d4]">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[14px] font-[500] mb-2 text-foreground">
                      Phone Number <span className="text-[#06b6d4]">*</span>
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[14px] font-[500] mb-2 text-foreground">
                      Company / Organization <span className="text-[#06b6d4]">*</span>
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <label htmlFor="projectName" className="block text-[14px] font-[500] mb-2 text-foreground">
                    Project Name <span className="text-[#06b6d4]">*</span>
                  </label>
                  <Input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    placeholder="e.g., E-commerce Platform Development"
                    className="w-full"
                    required
                  />
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-[14px] font-[500] mb-3 text-foreground">
                    Service Category <span className="text-[#06b6d4]">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {serviceCategories.map((service) => (
                      <div
                        key={service.value}
                        onClick={() => setFormData({ ...formData, serviceCategory: service.value })}
                        className={`flex flex-col items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.serviceCategory === service.value
                          ? "border-primary bg-[#f0f9ff] shadow-md"
                          : "border-border hover:border-primary hover:bg-[#f0f9ff]"
                          }`}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#dbeafe] to-[#ede9fe] rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-[14px] font-[500] text-center text-foreground">
                          {service.label}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="block text-[14px] font-[500] mb-2 text-foreground">
                    Project Description <span className="text-[#06b6d4]">*</span>
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please describe your project in detail, including objectives, target audience, key features, and any specific technical requirements..."
                    className="w-full resize-none"
                    required
                  />
                </div>

                {/* Budget Range Slider */}
                <div>
                  <label className="block text-[14px] font-[500] mb-3 text-foreground">
                    Estimated Budget Range <span className="text-[#06b6d4]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={budgetValue}
                      onChange={(e) => handleBudgetChange(parseInt(e.target.value))}
                      className="w-full h-3 appearance-none cursor-pointer rounded-lg"
                      style={{
                        background: `linear-gradient(to right, #1E3A8A 0%, #1E3A8A ${((budgetValue - 1) / 4) * 100}%, #e2e8f0 ${((budgetValue - 1) / 4) * 100}%, #e2e8f0 100%)`,
                      }}
                    />
                    <style>{`
                      input[type="range"]::-webkit-slider-thumb {
                        appearance: none;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background: #1E3A8A;
                        cursor: pointer;
                        border: 3px solid white;
                        box-shadow: 0 2px 10px rgba(30, 58, 138, 0.3);
                      }
                      input[type="range"]::-moz-range-thumb {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background: #1E3A8A;
                        cursor: pointer;
                        border: 3px solid white;
                        box-shadow: 0 2px 10px rgba(30, 58, 138, 0.3);
                      }
                    `}</style>
                  </div>
                  <div className="flex justify-between mt-3 text-[12px] text-muted-foreground">
                    {budgetRanges.map((range, index) => (
                      <span
                        key={index}
                        className={`${index === budgetValue - 1 ? "font-[600] text-primary" : ""
                          } ${index === 0 ? "text-left" : index === 4 ? "text-right" : "text-center"}`}
                      >
                        {range.split(" - ")[0].replace("$", "")}
                      </span>
                    ))}
                  </div>
                  <div className="text-center mt-5 px-6 py-3 bg-gradient-to-r from-[#f0f9ff] to-[#fef7ff] rounded-xl border border-primary/20">
                    <p className="text-[12px] text-muted-foreground mb-1">Selected Budget Range</p>
                    <p className="text-[22px] font-[700] bg-gradient-to-r from-primary to-[#7c3aed] bg-clip-text text-transparent">
                      {formData.budgetRange}
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-[14px] font-[500] mb-3 text-foreground">
                    Desired Timeline <span className="text-[#06b6d4]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {timelineOptions.map((option) => (
                      <div
                        key={option.value}
                        onClick={() => setFormData({ ...formData, timeline: option.value })}
                        className={`p-3 text-center border rounded-lg cursor-pointer transition-all font-[500] text-[14px] ${formData.timeline === option.value
                          ? "bg-primary text-white border-primary"
                          : "border-border hover:border-primary hover:bg-[#f0f9ff]"
                          }`}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-[14px] font-[500] mb-3 text-foreground">
                    Supporting Documents (Optional)
                  </label>
                  <label
                    htmlFor="fileInput"
                    className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary hover:bg-[#f8fafc] transition-all"
                  >
                    <Upload className="w-10 h-10 text-muted-foreground mb-4" />
                    <p className="text-[14px] text-muted-foreground mb-2">
                      Drag & drop files here or <span className="text-primary font-[500]">browse</span>
                    </p>
                    <p className="text-[12px] text-muted-foreground">
                      Max file size: 10MB (PDF, DOC, JPG, PNG)
                    </p>
                    <input
                      type="file"
                      id="fileInput"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {selectedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-[#f1f5f9] rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                            <span className="text-[14px] text-foreground">
                              {file.name} ({formatFileSize(file.size)})
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-[14px] font-[500] mb-2 text-foreground">
                    Additional Information
                  </label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any other details we should know about your project, timeline constraints, or specific concerns..."
                    className="w-full resize-none"
                  />
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-6 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white hover:scale-105'
                      }`}
                  >
                    {isSubmitting ? (
                      <><RefreshCw className="w-5 h-5 animate-spin" /> Submitting...</>
                    ) : submitStatus === 'success' ? (
                      <><CheckCircle className="w-5 h-5" /> Quote Requested!</>
                    ) : (
                      <><Send className="w-5 h-5" /> Request Quote</>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        projectName: "",
                        serviceCategory: "",
                        description: "",
                        budgetRange: "$25,000 - $50,000",
                        timeline: "",
                        additionalInfo: "",
                      });
                      setBudgetValue(3);
                      setSelectedFiles([]);
                    }}
                    className="px-8 py-6 rounded-xl"
                  >
                    Clear Form
                  </Button>
                </div>

                <p className="text-[12px] text-center text-muted-foreground pt-4">
                  By submitting this form, you agree to our Privacy Policy. We'll send your quote within 48 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] md:text-[36px] font-[700] text-center mb-12 text-foreground">
            Quote Process FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-border pb-6"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-[18px] md:text-[20px] font-[600] text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-[24px] text-primary flex-shrink-0 transition-transform duration-300" style={{ transform: openFAQ === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                >
                  <p className="text-[16px] text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}