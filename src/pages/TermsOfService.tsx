import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, Phone, Clock, AlertTriangle, FileText } from "lucide-react";
import SEO from "../components/SEO";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Terms of Service" 
        description="Review BaramijX's Terms of Service. Understand the rules and regulations for using our website and services."
        canonical="https://baramijx.com/terms-of-service"
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Legal Agreement
              </span>
            </div>
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-xl text-blue-100">
              Last Updated: <span className="bg-white/20 px-4 py-1 rounded-full">December 7, 2025</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          {/* Important Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-12">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <h2 className="text-xl text-amber-900">Important Legal Notice</h2>
            </div>
            <p className="text-amber-800 mb-4">These Terms of Service constitute a legally binding agreement between you and BaramijX. By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our website or services.</p>
            <p className="text-amber-800">For questions about these terms, please contact us at <strong>legal@baramijx.com</strong> before using our services.</p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-12 border border-gray-200">
            <h3 className="text-xl mb-4">Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div><a href="#acceptance" className="text-[#2563EB] hover:underline">1. Acceptance of Terms</a></div>
              <div><a href="#services" className="text-[#2563EB] hover:underline">2. Services Description</a></div>
              <div><a href="#eligibility" className="text-[#2563EB] hover:underline">3. Eligibility</a></div>
              <div><a href="#accounts" className="text-[#2563EB] hover:underline">4. User Accounts</a></div>
              <div><a href="#payments" className="text-[#2563EB] hover:underline">5. Payments & Billing</a></div>
              <div><a href="#intellectual" className="text-[#2563EB] hover:underline">6. Intellectual Property</a></div>
              <div><a href="#user-content" className="text-[#2563EB] hover:underline">7. User Content</a></div>
              <div><a href="#prohibited" className="text-[#2563EB] hover:underline">8. Prohibited Activities</a></div>
              <div><a href="#third-party" className="text-[#2563EB] hover:underline">9. Third-Party Services</a></div>
              <div><a href="#disclaimers" className="text-[#2563EB] hover:underline">10. Disclaimers</a></div>
              <div><a href="#liability" className="text-[#2563EB] hover:underline">11. Limitation of Liability</a></div>
              <div><a href="#indemnification" className="text-[#2563EB] hover:underline">12. Indemnification</a></div>
              <div><a href="#termination" className="text-[#2563EB] hover:underline">13. Termination</a></div>
              <div><a href="#governing" className="text-[#2563EB] hover:underline">14. Governing Law</a></div>
              <div><a href="#disputes" className="text-[#2563EB] hover:underline">15. Dispute Resolution</a></div>
              <div><a href="#changes" className="text-[#2563EB] hover:underline">16. Changes to Terms</a></div>
              <div><a href="#contact" className="text-[#2563EB] hover:underline">17. Contact Information</a></div>
            </div>
          </div>

          {/* 1. Acceptance of Terms */}
          <section id="acceptance" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>These Terms of Service ("Terms") govern your access to and use of BaramijX's website, services, products, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.</p>
              <p>If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms, and "you" will refer to both you individually and that organization.</p>
              
              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded italic">
                <p><strong>Note:</strong> These Terms contain important provisions, including an arbitration agreement and waiver of class actions, which affect your legal rights. Please review them carefully.</p>
              </div>
            </div>
          </section>

          {/* 2. Services Description */}
          <section id="services" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">2. Services Description</h2>
            <div className="space-y-6 text-gray-700">
              <p>BaramijX provides comprehensive technology and digital marketing solutions, including but not limited to:</p>
              
              <div>
                <h3 className="text-xl mb-3">IT Consulting Services</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Digital transformation consulting</li>
                  <li>Cloud migration and infrastructure</li>
                  <li>Cybersecurity assessments</li>
                  <li>Network design and implementation</li>
                  <li>IT project management</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Digital Marketing Services</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Search engine optimization (SEO)</li>
                  <li>Social media marketing and management</li>
                  <li>Pay-per-click (PPC) advertising</li>
                  <li>Content marketing and strategy</li>
                  <li>Email marketing automation</li>
                  <li>Marketing analytics and reporting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Additional Services</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Website development and design</li>
                  <li>Mobile application development</li>
                  <li>E-commerce solutions</li>
                  <li>Marketing technology integration</li>
                  <li>Training and workshops</li>
                </ul>
              </div>

              <p>Specific service terms, deliverables, timelines, and pricing will be detailed in separate service agreements or statements of work ("Service Agreements"). In case of conflict between these Terms and a Service Agreement, the Service Agreement will prevail.</p>
            </div>
          </section>

          {/* 3. Eligibility */}
          <section id="eligibility" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">3. Eligibility</h2>
            <div className="space-y-4 text-gray-700">
              <p>To use our Services, you must:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Provide accurate and complete registration information</li>
                <li>Not be prohibited from receiving our Services under applicable laws</li>
              </ul>
              
              <div>
                <h3 className="text-xl mb-3">Business Clients</h3>
                <p>If you are using our Services for business purposes, you represent that:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Your business is duly organized and validly existing</li>
                  <li>You have authority to bind your business to these Terms</li>
                  <li>Your business complies with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. User Accounts */}
          <section id="accounts" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">4. User Accounts</h2>
            <div className="space-y-4 text-gray-700">
              <p>Certain Services require account registration. You agree to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
              </ul>
              
              <p>We reserve the right to suspend or terminate accounts that provide false information or violate these Terms.</p>
            </div>
          </section>

          {/* 5. Payments & Billing */}
          <section id="payments" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">5. Payments & Billing</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">Service Fees</h3>
                <p>Our fees are outlined in Service Agreements or on our website. We may change fees with 30 days' notice. You agree to pay all applicable fees and taxes.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Payment Terms</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Retainer Services:</strong> Monthly or quarterly payments in advance</li>
                  <li><strong>Project-Based Services:</strong> Milestone-based payments as outlined in Service Agreements</li>
                  <li><strong>Hourly Services:</strong> Invoiced monthly with payment due within 15 days</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Late Payments</h3>
                <p>Late payments may incur interest at 1.5% per month or the maximum rate allowed by law. We reserve the right to suspend services for overdue payments.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Refunds</h3>
                <p>Refund policies vary by service type and will be detailed in Service Agreements. Generally, prepaid retainers may be refundable on a pro-rata basis with 30 days' notice.</p>
              </div>
            </div>
          </section>

          {/* 6. Intellectual Property */}
          <section id="intellectual" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">6. Intellectual Property</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">Our Intellectual Property</h3>
                <p>All content on our website and Services, including text, graphics, logos, software, and trademarks, is owned by BaramijX or our licensors and is protected by intellectual property laws.</p>
                <p>We grant you a limited, non-exclusive, non-transferable license to access and use our Services for their intended purposes.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Client Materials</h3>
                <p>You retain ownership of materials you provide to us ("Client Materials"). You grant us a license to use Client Materials solely to provide our Services to you.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Deliverables</h3>
                <p>Upon full payment, ownership of final deliverables ("Deliverables") transfers to you as specified in Service Agreements. We retain rights to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Our pre-existing intellectual property used in Deliverables</li>
                  <li>Methodologies, processes, and tools developed by us</li>
                  <li>Aggregated, anonymized data for improving our services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. User Content */}
          <section id="user-content" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">7. User Content</h2>
            <div className="space-y-4 text-gray-700">
              <p>You are responsible for any content you submit through our Services ("User Content"). You represent that:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>You own or have necessary rights to User Content</li>
                <li>User Content does not violate any laws or third-party rights</li>
                <li>User Content is not malicious, defamatory, or harmful</li>
              </ul>
              
              <p>We may remove User Content that violates these Terms without notice.</p>
            </div>
          </section>

          {/* 8. Prohibited Activities */}
          <section id="prohibited" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">8. Prohibited Activities</h2>
            <div className="space-y-4 text-gray-700">
              <p>You agree not to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use our Services for illegal purposes</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our Services</li>
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Use automated systems to access our Services without permission</li>
                <li>Impersonate others or provide false information</li>
                <li>Violate others' intellectual property rights</li>
                <li>Use our Services to send spam or malicious content</li>
                <li>Attempt to circumvent payment mechanisms</li>
              </ul>
            </div>
          </section>

          {/* 9. Third-Party Services */}
          <section id="third-party" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">9. Third-Party Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our Services may integrate with or use third-party services. Your use of third-party services is governed by their terms and privacy policies. We are not responsible for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Third-party service availability or performance</li>
                <li>Content, accuracy, or practices of third parties</li>
                <li>Damages or losses from third-party services</li>
              </ul>
              
              <p>Common third-party services we may use include:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Cloud platforms (AWS, Google Cloud, Azure)</li>
                <li>Marketing tools (Google Analytics, HubSpot, Mailchimp)</li>
                <li>Social media platforms</li>
                <li>Payment processors</li>
              </ul>
            </div>
          </section>

          {/* 10. Disclaimers */}
          <section id="disclaimers" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">10. Disclaimers</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties including:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>That Services will be uninterrupted, timely, secure, or error-free</li>
                <li>That results from using our Services will meet your expectations</li>
                <li>That any errors will be corrected</li>
              </ul>
              
              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded italic my-4">
                <p><strong>Marketing Results Disclaimer:</strong> Digital marketing results vary based on numerous factors beyond our control, including market conditions, competition, and algorithm changes. We do not guarantee specific marketing results, rankings, or return on investment.</p>
              </div>

              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded italic">
                <p><strong>IT Services Disclaimer:</strong> While we implement industry-standard security measures, we cannot guarantee complete protection against all cyber threats. You are responsible for maintaining your own security protocols and backups.</p>
              </div>
            </div>
          </section>

          {/* 11. Limitation of Liability */}
          <section id="liability" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">11. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>To the maximum extent permitted by law, BaramijX and its affiliates will not be liable for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or use</li>
                <li>Damages related to business interruption</li>
                <li>Costs of substitute goods or services</li>
              </ul>
              
              <p>Our total liability for any claims under these Terms will not exceed the greater of:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The amount you paid us for Services in the 12 months preceding the claim, or</li>
                <li>$5,000 USD</li>
              </ul>
              
              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded italic">
                <p>Some jurisdictions do not allow limitations of liability, so these limitations may not apply to you.</p>
              </div>
            </div>
          </section>

          {/* 12. Indemnification */}
          <section id="indemnification" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">12. Indemnification</h2>
            <div className="space-y-4 text-gray-700">
              <p>You agree to indemnify, defend, and hold harmless BaramijX, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Your access to or use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your infringement of any intellectual property or other rights</li>
                <li>Your violation of applicable laws or regulations</li>
                <li>Any content you submit through our Services</li>
              </ul>
            </div>
          </section>

          {/* 13. Termination */}
          <section id="termination" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">13. Termination</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">By You</h3>
                <p>You may terminate your account at any time by contacting us. Termination terms for specific services are detailed in Service Agreements.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">By Us</h3>
                <p>We may suspend or terminate your access to Services if:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>You violate these Terms</li>
                  <li>You fail to pay fees when due</li>
                  <li>We discontinue the Services</li>
                  <li>Required by law or legal process</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Effect of Termination</h3>
                <p>Upon termination:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Your right to use Services immediately ceases</li>
                  <li>You remain liable for all fees incurred before termination</li>
                  <li>We may delete your account information as outlined in our Privacy Policy</li>
                  <li>Provisions that by their nature should survive will survive</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 14. Governing Law */}
          <section id="governing" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">14. Governing Law</h2>
            <div className="space-y-4 text-gray-700">
              <p>These Terms and any dispute arising from them will be governed by the laws of the State of California, United States, without regard to its conflict of law principles.</p>
              
              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded italic">
                <p><strong>International Users:</strong> If you access our Services from outside the United States, you are responsible for compliance with local laws. We make no representation that our Services are appropriate or available for use in other locations.</p>
              </div>
            </div>
          </section>

          {/* 15. Dispute Resolution */}
          <section id="disputes" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">15. Dispute Resolution</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">Informal Resolution</h3>
                <p>We prefer to resolve disputes informally. Before filing a claim, you agree to contact us at <strong>disputes@baramijx.com</strong> to attempt to resolve the dispute.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Binding Arbitration</h3>
                <p>If informal resolution fails, any dispute will be resolved through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration will take place in San Francisco, California.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Class Action Waiver</h3>
                <p>You waive any right to participate in class actions or class arbitrations. Claims must be brought individually, not as a class member.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Exceptions</h3>
                <p>Either party may seek injunctive relief in court for intellectual property infringement or unauthorized access to Services.</p>
              </div>
            </div>
          </section>

          {/* 16. Changes to Terms */}
          <section id="changes" className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">16. Changes to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may modify these Terms at any time. We will provide notice of material changes by:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Posting the updated Terms on our website</li>
                <li>Sending email notification to registered users</li>
                <li>Updating the "Last Updated" date at the top of these Terms</li>
              </ul>
              
              <p>Your continued use of Services after changes become effective constitutes acceptance of the modified Terms. If you disagree with changes, you must stop using our Services.</p>
            </div>
          </section>

          {/* 17. Contact Information */}
          <section id="contact" className="mb-12">
            <h2 className="text-2xl mb-6 text-[#2563EB]">17. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>For questions about these Terms, please contact us:</p>
              
              <div className="bg-gray-50 p-4 rounded">
                <p className="mb-2"><strong>BaramijX Legal Department</strong></p>
                <p>Email: legal@baramijx.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Innovation Drive, Tech Valley, CA 94025, USA</p>
              </div>
              
              <p>For general inquiries, please use our main contact information.</p>
            </div>
          </section>

          {/* Entire Agreement */}
          <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded italic">
            <p><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and any Service Agreements, constitute the entire agreement between you and BaramijX regarding our Services and supersede all prior agreements and understandings.</p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl mb-6">Need Help Understanding These Terms?</h3>
          <p className="text-gray-700 mb-6">Our team is available to answer your questions about our Terms of Service.</p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-[#2563EB]" />
              <span>legal@baramijx.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5 text-[#2563EB]" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-5 h-5 text-[#2563EB]" />
              <span>Mon-Fri, 9am-5pm PST</span>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link to="/">
            <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-3 rounded-lg hover:bg-[#2563EB] hover:text-white transition-all duration-300">
              ← Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}