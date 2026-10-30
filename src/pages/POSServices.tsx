import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Store, Receipt, Package, BarChart3, Layers, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import SEO from "../components/SEO";
import posServicesHero from "../public/image/services/all-services/pos-services-hero.png";

// Set to the public path of the real asset once it exists, e.g. "/pos-services-hero.webp".
// While null, the hero shows a branded placeholder panel instead of a broken image.
const HERO_IMAGE = posServicesHero;
const HERO_ALT = "Modern point of sale terminal in a professional business environment";

export default function POSServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const benefits = [
    { icon: <Receipt className="w-6 h-6" />, title: "Simpler Transactions", description: "Streamline everyday billing and checkout so your team can serve customers with less friction." },
    { icon: <Package className="w-6 h-6" />, title: "Inventory Visibility", description: "Keep a clearer view of what you sell and what you have on hand." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Clearer Reporting", description: "Understand sales activity with reporting that supports day-to-day decisions." },
    { icon: <Layers className="w-6 h-6" />, title: "Built Around Your Business", description: "Solutions scoped to your workflow rather than a one-size-fits-all setup." },
  ];

  const capabilities = [
    { title: "Billing & Transaction Management", description: "Tools to record, review, and manage sales transactions.", features: ["Fast checkout flows", "Transaction history", "Receipts and invoices", "Refund and return handling"] },
    { title: "Sales Tracking", description: "Keep track of sales activity across products, periods, and staff.", features: ["Daily and periodic sales summaries", "Product-level insights", "Staff activity overview"] },
    { title: "Inventory Visibility", description: "Gain insight into stock levels connected to your sales.", features: ["Product catalogue management", "Stock level overview", "Low-stock awareness"] },
    { title: "Business Reporting", description: "Turn sales data into reports that support planning.", features: ["Sales and performance reports", "Exportable data", "Custom reporting needs discussed during scoping"] },
  ];

  const industries = [
    "Retail & Specialty Stores",
    "Food & Beverage",
    "Professional & Personal Services",
    "Wholesale & Distribution",
    "Events & Pop-up Sales",
    "Multi-location Businesses",
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We learn how your business sells today and what you need from a POS." },
    { step: "02", title: "Solution Scoping", description: "We outline a solution that fits your workflow, team, and goals." },
    { step: "03", title: "Setup & Rollout", description: "We configure and roll out the solution with your team." },
    { step: "04", title: "Ongoing Support", description: "We work with you to refine the setup as your business evolves." },
  ];

  const faqs = [
    { question: "What is a POS system?", answer: "A Point of Sale (POS) system is the combination of software and tools a business uses to process sales and manage related activity such as transactions, receipts, and reporting." },
    { question: "Is POS only for restaurants and retail stores?", answer: "No. POS solutions can support many types of businesses, including service providers, wholesalers, and event-based sellers. Requirements vary, so we start by understanding your workflow." },
    { question: "Can BaramijX tailor a POS solution to my business?", answer: "Yes. The scope, features, and setup are discussed with you during a consultation so the solution reflects your actual needs." },
    { question: "How do I get started?", answer: "Submit a quote request describing your business and what you want to achieve. Our team will follow up to discuss next steps." },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="POS Solutions for Businesses | BaramijX"
        description="Explore Point of Sale solutions from BaramijX. Discover business-focused POS services designed to simplify transactions and everyday operations."
        canonical="https://baramijx.com/services/pos-services"
        image={HERO_IMAGE ? `https://baramijx.com${HERO_IMAGE}` : undefined}
        breadcrumbs={[
          { name: "Home", url: "https://baramijx.com" },
          { name: "Services", url: "https://baramijx.com/services" },
          { name: "POS Services", url: "https://baramijx.com/services/pos-services" },
        ]}
        serviceSchema={{
          name: "POS Services",
          description: "Business-focused Point of Sale solutions to simplify transactions, sales tracking, and everyday operations.",
          url: "https://baramijx.com/services/pos-services",
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] text-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="flex items-center gap-2">
                  <Store className="w-4 h-4" />
                  POS Services
                </span>
              </div>
              <h1 className="mb-6 text-[48px] font-[700] leading-tight">
                Point of Sale Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Simplify transactions and everyday operations with POS solutions designed around the way your business works.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-quote">
                  <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Request a Quote
                  </button>
                </Link>
                <Link to="/services">
                  <button className="glass-shine border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                    View All Services
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                {HERO_IMAGE ? (
                  <ImageWithFallback src={HERO_IMAGE} alt={HERO_ALT} className="w-full h-auto" />
                ) : (
                  <div
  role="img"
  aria-label={HERO_ALT}
  className="w-full h-64 bg-white/10 bg-cover bg-center rounded-xl"
  style={{
    backgroundImage: "url('/src/public/image/services/all-services/pos-services-hero.png')",
  }}
>
                    <Store className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="mb-4 text-[36px] font-[700]">POS Services Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A POS system is the center of how a business sells. BaramijX helps you choose and set up a solution that fits your operations, whatever your industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-[#1E3A8A] text-white p-3 rounded-lg w-fit mb-4">{benefit.icon}</div>
                <h3 className="mb-3 text-[20px] font-[600]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="mb-4 text-[36px] font-[700]">Key Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Typical areas a POS solution can cover. Exact capabilities are confirmed during scoping based on your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="mb-3 text-[24px] font-[600] text-[#1E3A8A]">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="mb-4 text-[36px] font-[700]">Industries We Can Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              POS is a general business tool. These are examples of businesses that commonly rely on it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                <span className="text-gray-700">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="mb-4 text-[36px] font-[700]">How We Work With You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A straightforward approach from first conversation to ongoing support.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-6xl mb-4 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] bg-clip-text text-transparent opacity-20">{item.step}</div>
                  <h3 className="mb-3 text-[20px] font-[600] text-[#1E3A8A]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[#2563EB]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[36px] font-[700] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="w-full flex justify-between items-center text-left py-2"
                >
                  <h3 className="text-[18px] font-[600] pr-4">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-[#2563EB] flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <p className="text-gray-600 mt-2 leading-relaxed">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Related Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/services/web-ecommerce-solutions" className="group block bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2 group-hover:text-[#2563EB] transition-colors">Web Design & E-commerce</h3>
              <p className="text-gray-600 text-sm">Extend your sales online with websites and e-commerce platforms built around your business.</p>
            </Link>
            <Link to="/services/business-consulting" className="group block bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2 group-hover:text-[#2563EB] transition-colors">Business Consulting</h3>
              <p className="text-gray-600 text-sm">Align your sales tools and processes with your wider business goals.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h2 className="mb-6 text-[36px] font-[700]">Talk to Us About Your POS Needs</h2>
            <p className="text-xl text-blue-100 mb-8">
              Tell us about your business and we will discuss what a POS solution could look like for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/get-quote">
                <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Request a Quote
                </button>
              </Link>
              <Link to="/contact">
                <button className="glass-shine border-2 border-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}