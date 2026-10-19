import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, AlertCircle, Info } from "lucide-react";
import SEO from "../components/SEO";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Disclaimer" 
        description="Read the BaramijX Disclaimer regarding professional advice, website content, and liability limitations."
        canonical="https://baramijx.com/disclaimer"
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
                <Info className="w-4 h-4" />
                Legal Disclaimer
              </span>
            </div>
            <h1 className="mb-4">Disclaimer</h1>
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
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <h2 className="text-xl text-amber-900">Important Notice</h2>
            </div>
            <p className="text-amber-800">The information provided by BaramijX ("we," "our," or "us") on our website and through our services is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>
          </div>

          {/* General Disclaimer */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">General Disclaimer</h2>
            <div className="space-y-4 text-gray-700">
              <p>The information on this website and in our services is provided with the understanding that BaramijX is not engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal, or other competent advisors.</p>
              <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of this website or our services, or reliance on any information provided on the website or through our services. Your use of the website and your reliance on any information is solely at your own risk.</p>
            </div>
          </section>

          {/* Website Content */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Website Content</h2>
            <div className="space-y-4 text-gray-700">
              <p>The content on our website is subject to change without notice. We make no commitment to update the materials on our website, though we strive to keep all information current and accurate.</p>
              <p>BaramijX may revise these disclaimers at any time without notice. By using this website, you are agreeing to be bound by the current version of this disclaimer.</p>
              <div className="bg-blue-50 border-l-4 border-[#2563EB] p-4 rounded">
                <p><strong>Note:</strong> While we endeavor to ensure that the information on this website is correct, we do not warrant its completeness or accuracy. We shall not be liable for any errors or omissions in the information provided.</p>
              </div>
            </div>
          </section>

          {/* Professional Services */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Professional Services Disclaimer</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl mb-3">IT Consulting Services</h3>
                <p>Our IT consulting services are based on industry best practices and our professional experience. However:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Technology landscapes change rapidly, and solutions that work today may need adjustment tomorrow</li>
                  <li>We cannot guarantee specific outcomes or results from implementing our recommendations</li>
                  <li>Security measures recommended are based on current threats and may need updating</li>
                  <li>System performance and uptime may be affected by factors outside our control</li>
                  <li>Third-party software and services are subject to their own terms and limitations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Digital Marketing Services</h3>
                <p>Digital marketing results are influenced by many factors beyond our control. We cannot guarantee:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Specific rankings in search engine results</li>
                  <li>Specific increases in website traffic, leads, or sales</li>
                  <li>Return on investment (ROI) for marketing campaigns</li>
                  <li>Social media engagement or follower growth rates</li>
                  <li>Protection against algorithm changes by search engines or social platforms</li>
                  <li>Conversion rates or customer acquisition costs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Business Consulting</h3>
                <p>Our business consulting advice is based on the information you provide and general business principles. We cannot:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Guarantee business growth or profitability</li>
                  <li>Predict market conditions or competitive responses</li>
                  <li>Ensure regulatory compliance in all jurisdictions</li>
                  <li>Warrant the success of strategic initiatives</li>
                </ul>
              </div>
            </div>
          </section>

          {/* External Links */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">External Links Disclaimer</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with BaramijX. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
              <p>We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
            </div>
          </section>

          {/* Testimonials and Case Studies */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Testimonials and Case Studies</h2>
            <div className="space-y-4 text-gray-700">
              <p>Testimonials and case studies on our website represent the experiences of specific clients and may not be indicative of future results. Results may vary based on numerous factors including:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Industry and market conditions</li>
                <li>Client resources and commitment</li>
                <li>Scope and duration of services</li>
                <li>Starting position and baseline metrics</li>
                <li>External market factors and competition</li>
              </ul>
              <p>Past performance does not guarantee future results. Your individual results may differ.</p>
            </div>
          </section>

          {/* Third-Party Products and Services */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Third-Party Products and Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>In the course of providing our services, we may recommend or utilize third-party products, software, platforms, or services. Please be aware that:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>We are not responsible for the performance, availability, or support of third-party products</li>
                <li>Third-party products are subject to their own terms of service and privacy policies</li>
                <li>Pricing, features, and availability of third-party products may change without notice</li>
                <li>We may receive referral fees or commissions from some third-party providers</li>
                <li>Integration with third-party services may be affected by API changes or service interruptions</li>
              </ul>
            </div>
          </section>

          {/* Technical Limitations */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Technical Limitations</h2>
            <div className="space-y-4 text-gray-700">
              <p>While we strive to provide accurate and up-to-date information and services, we acknowledge the following limitations:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Our website may experience downtime for maintenance or due to technical issues</li>
                <li>Information displayed may be delayed or contain inaccuracies due to technical constraints</li>
                <li>Security measures cannot guarantee absolute protection against all cyber threats</li>
                <li>Data transmission over the internet is not completely secure</li>
                <li>Software and systems may contain bugs or errors despite quality assurance efforts</li>
              </ul>
            </div>
          </section>

          {/* No Warranties */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">No Warranties</h2>
            <div className="space-y-4 text-gray-700">
              <p>Our website and services are provided on an "as is" and "as available" basis without any warranties, express or implied, including but not limited to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or completeness of information</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Security or freedom from viruses or harmful components</li>
              </ul>
              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded italic mt-4">
                <p>Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.</p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>To the fullest extent permitted by applicable law, BaramijX shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Your use or inability to use our website or services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our website</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted through our website by any third party</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the services</li>
              </ul>
            </div>
          </section>

          {/* Indemnification */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Indemnification</h2>
            <div className="space-y-4 text-gray-700">
              <p>You agree to defend, indemnify, and hold harmless BaramijX and its licensee and licensors, and their employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Your use of and access to the website or services</li>
                <li>Your violation of any term of these disclaimers</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that your use of our services caused damage to a third party</li>
              </ul>
            </div>
          </section>

          {/* Jurisdictional Issues */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Jurisdictional Issues</h2>
            <div className="space-y-4 text-gray-700">
              <p>We make no representation that materials on our website or services are appropriate or available for use in all locations. Those who choose to access this website from other locations do so on their own initiative and are responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
              <p>We reserve the right to limit the availability of the website and/or the provision of any content, program, product, service, or other feature described or available on the website to any person, entity, geographic area, or jurisdiction, at any time and in our sole discretion.</p>
            </div>
          </section>

          {/* Changes to Disclaimer */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Changes to This Disclaimer</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may update this disclaimer from time to time. We will notify you of any changes by posting the new disclaimer on this page and updating the "Last Updated" date.</p>
              <p>You are advised to review this disclaimer periodically for any changes. Changes to this disclaimer are effective when they are posted on this page.</p>
              <p>Your continued use of our website and services after any modifications to this disclaimer will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified disclaimer.</p>
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
          <h3 className="text-2xl mb-6">Questions About This Disclaimer?</h3>
          <p className="text-gray-700 mb-6">If you have any questions about this disclaimer or require clarification, please contact us:</p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-[#2563EB]" />
              <span>legal@baramijx.com</span>
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
            <strong>Related Policies:</strong> Please also review our <Link to="/privacy-policy" className="text-[#2563EB] hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-[#2563EB] hover:underline">Terms of Service</Link>.
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