import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Privacy Policy" 
        description="BaramijX is committed to protecting your privacy. Read our Privacy Policy to understand how we collect, use, and protect your data."
        canonical="https://baramijx.com/privacy-policy"
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
                <Shield className="w-4 h-4" />
                Legal Document
              </span>
            </div>
            <h1 className="mb-4">Privacy Policy</h1>
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
          {/* Introduction */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Introduction</h2>
            <div className="space-y-4 text-gray-700">
              <p>At BaramijX ("we," "our," or "us"), we are committed to protecting your privacy and handling your data with transparency and care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>baramijx.com</strong>, use our services, or interact with us through other means.</p>
              <p>As a provider of IT consulting, digital marketing, and social media services, we understand the importance of data protection. We comply with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant regulations.</p>
              <p>By accessing our website or using our services, you consent to the practices described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our website or services.</p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Information We Collect</h2>
            <div className="space-y-6 text-gray-700">
              <p>We collect several types of information from and about users of our website and services:</p>
              
              <div>
                <h3 className="text-xl mb-3">1. Personal Information You Provide</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title</li>
                  <li><strong>Account Information:</strong> Username, password, profile information</li>
                  <li><strong>Communication Data:</strong> Messages, inquiries, feedback, and other information you provide when contacting us</li>
                  <li><strong>Project Information:</strong> Details about your business, goals, and requirements for our services</li>
                  <li><strong>Billing Information:</strong> Payment details, billing address, and transaction history</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">2. Information Collected Automatically</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Usage Data:</strong> IP address, browser type, operating system, device information</li>
                  <li><strong>Website Analytics:</strong> Pages visited, time spent, navigation paths, referral sources</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies, web beacons, and similar technologies</li>
                  <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">3. Information from Third Parties</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Social Media:</strong> Information from social media platforms when you interact with our social media accounts</li>
                  <li><strong>Service Providers:</strong> Information from analytics providers, advertising networks, and search information providers</li>
                  <li><strong>Business Partners:</strong> Information from partners we collaborate with to provide services</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#2563EB] p-4 rounded">
                <p><strong>Note for Digital Marketing Services:</strong> When providing digital marketing services to clients, we may process data on behalf of our clients. In such cases, we act as a data processor and our processing is governed by separate Data Processing Agreements.</p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">How We Use Your Information</h2>
            <div className="space-y-6 text-gray-700">
              <p>We use the information we collect for various business purposes, including:</p>
              
              <div>
                <h3 className="text-xl mb-3">Service Delivery</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Providing, maintaining, and improving our IT consulting and digital marketing services</li>
                  <li>Processing your requests, inquiries, and transactions</li>
                  <li>Managing your account and providing customer support</li>
                  <li>Delivering personalized digital marketing campaigns and IT solutions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Business Operations</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Analyzing website usage to improve user experience and service offerings</li>
                  <li>Conducting market research and developing new services</li>
                  <li>Managing our business operations and administrative purposes</li>
                  <li>Complying with legal obligations and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Marketing and Communication</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Sending promotional materials, newsletters, and service updates (with your consent)</li>
                  <li>Personalizing content and advertising based on your interests</li>
                  <li>Measuring the effectiveness of our marketing campaigns</li>
                  <li>Communicating about events, webinars, and industry insights</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Security and Protection</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Detecting, preventing, and addressing fraud, security, or technical issues</li>
                  <li>Protecting the rights, property, or safety of BaramijX, our users, or others</li>
                  <li>Enforcing our terms of service and other agreements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal Basis for Processing */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Legal Basis for Processing (GDPR)</h2>
            <div className="space-y-4 text-gray-700">
              <p>For users in the European Economic Area (EEA), we process personal data based on the following legal grounds:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Contractual Necessity:</strong> Processing necessary to fulfill our contract with you</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests, balanced against your rights</li>
                <li><strong>Consent:</strong> Processing based on your explicit consent for specific purposes</li>
                <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
              </ul>
              <p>You have the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.</p>
            </div>
          </section>

          {/* How We Share Your Information */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">How We Share Your Information</h2>
            <div className="space-y-6 text-gray-700">
              <p>We may share your information in the following circumstances:</p>
              
              <div>
                <h3 className="text-xl mb-3">Service Providers</h3>
                <p>We engage trusted third-party service providers to assist with:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Website hosting and infrastructure</li>
                  <li>Analytics and marketing automation</li>
                  <li>Payment processing and billing</li>
                  <li>Customer relationship management (CRM)</li>
                  <li>Cloud storage and data backup</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Business Transfers</h3>
                <p>In connection with a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Legal Requirements</h3>
                <p>We may disclose information if required by law, court order, or government request, or to protect our rights and safety.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">With Your Consent</h3>
                <p>We may share information with third parties when you have given us explicit consent to do so.</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#2563EB] p-4 rounded">
                <p><strong>Important:</strong> We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.</p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Data Retention</h2>
            <div className="space-y-4 text-gray-700">
              <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Our retention periods are based on:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The duration of our business relationship with you</li>
                <li>Legal obligations and regulatory requirements</li>
                <li>Statutory limitation periods for potential claims</li>
                <li>Legitimate business needs for analysis and service improvement</li>
              </ul>
              <p>When personal data is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.</p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Your Privacy Rights</h2>
            <div className="space-y-6 text-gray-700">
              <p>Depending on your location and applicable laws, you may have the following rights regarding your personal information:</p>
              
              <div>
                <h3 className="text-xl mb-3">Access and Correction</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Right to Erasure:</strong> Request deletion of your personal information under certain circumstances</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Processing Controls</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your information</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Right to Data Portability:</strong> Receive your information in a structured, commonly used format</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Marketing Preferences</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Opt-Out Rights:</strong> Opt out of marketing communications at any time</li>
                  <li><strong>Cookie Preferences:</strong> Manage cookie settings through your browser</li>
                  <li><strong>Do Not Track:</strong> Some browsers offer "Do Not Track" settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">CCPA Rights (California Residents)</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Right to know what personal information is collected, used, shared, or sold</li>
                  <li>Right to delete personal information collected from you</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
              </div>

              <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
            </div>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Cookies and Tracking Technologies</h2>
            <div className="space-y-6 text-gray-700">
              <p>We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Deliver personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>

              <div>
                <h3 className="text-xl mb-3">Types of Cookies We Use</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing purposes</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Managing Cookies</h3>
                <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>View what cookies are stored</li>
                  <li>Delete individual cookies or all cookies</li>
                  <li>Block cookies from specific sites or all sites</li>
                  <li>Set preferences for different types of cookies</li>
                </ul>
                <p className="mt-2">Note that disabling cookies may affect the functionality of our website and services.</p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security</li>
                <li>Secure development practices for our services</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p>While we strive to protect your information, no security system is impenetrable. We cannot guarantee the absolute security of information transmitted to or from our website.</p>
            </div>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">International Data Transfers</h2>
            <div className="space-y-4 text-gray-700">
              <p>As an international provider of IT and digital marketing services, we may transfer, store, and process your information in countries other than your country of residence. These countries may have different data protection laws than your country.</p>
              <p>When we transfer personal information outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, such as:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Privacy Shield certification (where applicable)</li>
                <li>Binding Corporate Rules</li>
                <li>Other legally recognized transfer mechanisms</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Third-Party Links</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our website may contain links to third-party websites, plugins, or services. This Privacy Policy does not apply to third-party sites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.</p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Children's Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our website and services are not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately, and we will take steps to delete that information.</p>
            </div>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. When we make changes, we will:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Post the updated policy on our website</li>
                <li>Notify you of material changes through email or prominent notice on our website</li>
              </ul>
              <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
            </div>
          </section>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl mb-6">Contact Us</h3>
          <p className="text-gray-700 mb-6">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-[#2563EB]" />
              <span>privacy@baramijx.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5 text-[#2563EB]" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-[#2563EB]" />
              <span>123 Innovation Drive, Tech Valley, CA 94025</span>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            <strong>Data Protection Officer:</strong> For GDPR-related inquiries, contact our Data Protection Officer at <strong>dpo@baramijx.com</strong>
          </p>
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