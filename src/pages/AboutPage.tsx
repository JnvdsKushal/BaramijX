import { motion } from "motion/react";
import { Lightbulb, Handshake, Shield } from "lucide-react";
import SEO from "../components/SEO";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to deliver cutting-edge solutions.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We work as partners with our clients, ensuring solutions are tailored to their specific needs.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We build trust through transparency, ethical practices, and delivering on our promises.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - Strategic Technology Partners"
        description="Learn about BaramijX's mission to empower businesses through digital innovation, our core values, and our experienced team of consultants."
        canonical="https://baramijx.com/about"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')] bg-cover bg-center opacity-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 bg-white/90 backdrop-blur-sm text-primary rounded-full text-[14px] font-[600] shadow-lg">
              About BaramijX
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[48px] sm:text-[64px] lg:text-[72px] font-[800] text-white mb-6 leading-tight drop-shadow-lg"
          >
            Technology Solutions for Tomorrow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/90 text-[18px] sm:text-[20px] max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            At BaramijX, we create innovative digital solutions that help businesses thrive in an ever-changing technological landscape.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 border-b border-border"
        >
          <h2 className="text-[32px] font-[700] mb-6 text-foreground relative inline-block">
            Who We Are
            <span className="absolute bottom-[-8px] left-0 w-[50px] h-[4px] bg-gradient-to-r from-primary to-[#7c3aed] rounded-sm"></span>
          </h2>
          <p className="text-[18px] text-muted-foreground mb-6 leading-relaxed">
            BaramijX is a technology solutions provider dedicated to helping businesses leverage digital innovation for growth and efficiency.
          </p>

          <p className="text-[16px] text-foreground mb-6 leading-relaxed">
            Founded with a vision to simplify complex technology, we've grown into a trusted partner for organizations seeking to transform their digital capabilities. Our approach combines technical expertise with practical business understanding.
          </p>

          <div className="bg-[#f8fafc] border-l-4 border-primary rounded-r-lg p-6 my-8">
            <p className="text-[20px] md:text-[22px] italic text-primary font-[500] leading-relaxed">
              "Our mission is to empower organizations with intelligent technology solutions that drive innovation and create sustainable value."
            </p>
          </div>

          <p className="text-[16px] text-foreground leading-relaxed">
            We believe that effective technology should be accessible, intuitive, and aligned with real business needs. Our solutions are designed to solve today's challenges while preparing for tomorrow's opportunities.
          </p>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 border-b border-border"
        >
          <h2 className="text-[32px] font-[700] mb-6 text-foreground relative inline-block">
            Our Values
            <span className="absolute bottom-[-8px] left-0 w-[50px] h-[4px] bg-gradient-to-r from-primary to-[#7c3aed] rounded-sm"></span>
          </h2>
          <p className="text-[18px] text-muted-foreground mb-8 leading-relaxed">
            These principles guide our work and define our approach to every project and partnership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#dbeafe] to-[#ede9fe] rounded-full flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[20px] font-[600] mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Approach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <h2 className="text-[32px] font-[700] mb-6 text-foreground relative inline-block">
            Our Approach
            <span className="absolute bottom-[-8px] left-0 w-[50px] h-[4px] bg-gradient-to-r from-primary to-[#7c3aed] rounded-sm"></span>
          </h2>
          <p className="text-[18px] text-muted-foreground mb-6 leading-relaxed">
            We follow a structured yet flexible methodology to ensure successful project outcomes.
          </p>

          <p className="text-[16px] text-foreground mb-6 leading-relaxed">
            Our process begins with understanding your unique challenges and objectives. We then design tailored solutions that balance innovation with practicality.
          </p>

          <p className="text-[16px] text-foreground mb-6 leading-relaxed">
            We emphasize clear communication throughout each project phase, from initial concept to final implementation and beyond. This collaborative approach ensures that our solutions not only meet technical requirements but also deliver tangible business value.
          </p>

          <p className="text-[16px] text-foreground leading-relaxed">
            Whether you're looking to streamline operations, enhance customer experiences, or explore new digital opportunities, BaramijX provides the expertise and support to help you achieve your goals.
          </p>
        </motion.section>
      </main>
    </div>
  );
}