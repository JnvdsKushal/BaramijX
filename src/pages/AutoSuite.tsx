import { useState } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2, Car, Boxes, Users, Package, Receipt, Wrench, Building2, BarChart3, ArrowRight, ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import SEO from "../components/SEO";
import autoSuiteHero from "../public/image/services/all-services/auto-suite.png";

// Set to the public path of a real asset once it exists, e.g. "/auto-suite-hero.webp".
// While null, the hero shows a branded placeholder panel instead of a broken image.
const HERO_IMAGE: string | null = autoSuiteHero;

const HERO_ALT =
  "Automotive dealership management software dashboard showing inventory and sales";
  
export default function AutoSuite() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const solutions = [
    { icon: <Car className="w-6 h-6" />, title: "Dealership Management Software", description: "Organize daily sales operations and business information for your dealership.", features: ["Vehicle sales tracking", "Customer and lead records", "Sales pipeline visibility", "Staff and branch-level reporting"] },
    { icon: <Boxes className="w-6 h-6" />, title: "Vehicle Inventory Management", description: "Maintain organized, up-to-date vehicle stock information.", features: ["Vehicle inventory records", "Specifications and status", "Stock availability visibility", "Inventory movement tracking"] },
    { icon: <Users className="w-6 h-6" />, title: "Automotive CRM", description: "Keep customer interactions organized and easy to follow up.", features: ["Customer profiles", "Enquiry and lead management", "Follow-up tracking", "Communication history"] },
    { icon: <Package className="w-6 h-6" />, title: "Spare Parts Inventory Software", description: "Manage stock and product information for spare-parts businesses.", features: ["Spare-parts catalogue", "Stock-level tracking", "Product categorization", "Supplier and purchase records"] },
    { icon: <Receipt className="w-6 h-6" />, title: "Billing & Sales Management", description: "Manage sales-related transactions and records in one place.", features: ["Billing workflows", "Sales records", "Invoice management", "Transaction reporting"] },
    { icon: <Wrench className="w-6 h-6" />, title: "Workshop & Service Centre Software", description: "Software for businesses that provide vehicle servicing, helping them organize their operations.", features: ["Job-card management", "Appointment scheduling", "Work-order tracking", "Customer and vehicle records"] },
    { icon: <Building2 className="w-6 h-6" />, title: "Multi-Branch Business Management", description: "Coordinate information across multiple locations.", features: ["Centralized business records", "Branch-level visibility", "Consolidated reporting", "Role-based access, where supported by the implementation"] },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Analytics & Reporting", description: "Review operations through organized, readable reports.", features: ["Sales summaries", "Inventory reports", "Business performance dashboards", "Operational trend analysis"] },
  ];

  const benefits = [
    "Better visibility into daily operations",
    "Organized vehicle and spare-parts inventory",
    "More structured customer and sales information",
    "Reduced manual administrative work",
    "Improved coordination across teams",
    "Clearer business reporting",
    "Software tailored to business workflows",
  ];

  const audiences = [
    "Car dealerships",
    "Two-wheeler showrooms",
    "Used-car businesses",
    "Spare-parts retailers",
    "Vehicle rental companies",
    "Workshops and service centres",
    "Multi-location automotive businesses",
  ];

  const process = [
    { step: "01", title: "Understand the Business", description: "We learn how your business sells, stocks, and serves customers today." },
    { step: "02", title: "Define Requirements", description: "Together we document what the software needs to do for your team." },
    { step: "03", title: "Design the Solution", description: "We outline workflows and screens that fit your requirements." },
    { step: "04", title: "Develop & Integrate", description: "We build the solution and connect it with other systems where agreed in scope." },
    { step: "05", title: "Test & Deploy", description: "We test with your team and roll the solution out." },
    { step: "06", title: "Support & Improve", description: "We work with you to refine the software as your business evolves." },
  ];

  const faqs = [
    { question: "What is Auto Suite?", answer: "Auto Suite is BaramijX's offering of software solutions for automotive businesses, covering areas such as vehicle sales, inventory, customer management, billing, and reporting." },
    { question: "Which automotive businesses can use these software solutions?", answer: "Dealerships, two-wheeler showrooms, used-vehicle dealers, spare-parts retailers, rental businesses, workshops and service centres, and businesses with multiple branches." },
    { question: "Can the software be customized for our business?", answer: "Yes. Solutions are tailored to your requirements. The features and scope are agreed with you during discovery." },
    { question: "Can vehicle inventory and sales records be managed together?", answer: "This is a common requirement and can be discussed as part of your solution design. The exact setup depends on your workflow." },
    { question: "Can the solution support multiple branches?", answer: "Multi-branch needs, such as centralized records and branch-level reporting, can be included in the scope. We confirm details after understanding your setup." },
    { question: "Can automotive software integrate with existing business systems?", answer: "Integration possibilities depend on the systems involved and your requirements. We assess this during requirements gathering and do not assume any specific integration in advance." },
    { question: "How can we request a quote?", answer: "Use our quote request form and describe your business and goals. Our team will follow up to discuss scope and timelines, which depend on your requirements." },
  ];

  const scrollToSolutions = () => {
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Auto Suite | Automotive Software Solutions | BaramijX"
        description="Explore automotive software solutions from BaramijX for vehicle dealerships, inventory management, customer relationships, billing, and business operations."
        canonical="https://baramijx.com/services/auto-suite"
        image={HERO_IMAGE ? `https://baramijx.com${HERO_IMAGE}` : undefined}
        breadcrumbs={[
          { name: "Home", url: "https://baramijx.com" },
          { name: "Services", url: "https://baramijx.com/services" },
          { name: "Auto Suite", url: "https://baramijx.com/services/auto-suite" },
        ]}
        serviceSchema={{
          name: "Auto Suite",
          description: "Software solutions for automotive businesses covering vehicle sales, inventory, customer management, billing, and operational reporting.",
          url: "https://baramijx.com/services/auto-suite",
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] text-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Auto Suite
                </span>
              </div>
              <h1 className="mb-6 text-[48px] font-[700] leading-tight">
                Smarter Software Solutions for the Automotive Industry
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Connect your automotive business with software solutions designed to simplify vehicle sales, inventory management, customer relationships, billing, and everyday operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-quote">
                  <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Get a Quote
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={scrollToSolutions}
                  className="glass-shine border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Explore Solutions
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                {HERO_IMAGE ? (
                  <ImageWithFallback src={HERO_IMAGE} alt={HERO_ALT} className="w-full h-auto" />
                ) : (
                  <div role="img" aria-label={HERO_ALT} className="w-full h-64 bg-white/10 flex items-center justify-center">
                    <Car className="w-16 h-16 text-white/80" />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h2 className="mb-4 text-[36px] font-[700]">One Connected View of Your Automotive Business</h2>
            <p className="text-xl text-gray-600 mb-6">
              Many automotive businesses manage sales, inventory, customer information, billing, and branch operations across separate tools, spreadsheets, and paper records.
            </p>
            <p className="text-lg text-gray-600">
              Suitable software can bring this information together, simplify workflows, and make it easier for teams to see what is happening across the business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="mb-4 text-[36px] font-[700]">Automotive Software Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Potential capabilities that can be tailored to your requirements. Scope and features are confirmed during discovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-[#1E3A8A] text-white p-3 rounded-lg w-fit mb-4">{item.icon}</div>
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="mb-4 text-[36px] font-[700]">Why Automotive Businesses Choose Software</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical improvements that come from organizing information and workflows in one place.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-[#1E3A8A] text-white p-3 rounded-lg w-fit mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-[600]">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who can benefit */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="mb-4 text-[36px] font-[700]">Who Can Benefit?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Auto Suite is designed for businesses across the automotive value chain.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.05 }}
                className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                <span className="text-gray-700">{audience}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="mb-4 text-[36px] font-[700]">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A clear path from first conversation to ongoing improvement.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-6xl mb-4 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] bg-clip-text text-transparent opacity-20">{item.step}</div>
                  <h3 className="mb-3 text-[20px] font-[600] text-[#1E3A8A]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
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
            <Link to="/services/pos-services" className="group block bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2 group-hover:text-[#2563EB] transition-colors">POS Services</h3>
              <p className="text-gray-600 text-sm">Point of Sale solutions for billing, sales tracking, and everyday transactions.</p>
            </Link>
            <Link to="/services/business-consulting" className="group block bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2 group-hover:text-[#2563EB] transition-colors">Business Consulting</h3>
              <p className="text-gray-600 text-sm">Align your software and processes with your wider business goals.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h2 className="mb-6 text-[36px] font-[700]">Ready to Modernize Your Automotive Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss software solutions tailored to your dealership, inventory, customer management, and operational needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/get-quote">
                <button className="glass-shine bg-white text-[#1E3A8A] px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Get a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}