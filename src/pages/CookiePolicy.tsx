import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Cookie, Shield, Settings, Globe } from "lucide-react";
import SEO from "../components/SEO";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Cookie Policy" 
        description="Learn about how BaramijX uses cookies to improve your experience and how you can manage your cookie preferences."
        canonical="https://baramijx.com/cookie-policy"
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
                <Cookie className="w-4 h-4" />
                Cookie Information
              </span>
            </div>
            <h1 className="mb-4">Cookie Policy</h1>
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
              <p>This Cookie Policy explains how BaramijX ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website <strong>baramijx.com</strong> or use our services. This policy should be read alongside our <Link to="/privacy-policy" className="text-[#2563EB] hover:underline">Privacy Policy</Link> which provides more information about how we collect, use, and protect your personal data.</p>
              <p>As an IT consulting and digital marketing company, we use cookies to enhance your experience, analyze website performance, and deliver targeted marketing services. We are committed to being transparent about our use of cookies and giving you control over your privacy preferences.</p>
            </div>
          </section>

          {/* What Are Cookies */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">What Are Cookies?</h2>
            <div className="space-y-6 text-gray-700">
              <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Cookie className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg mb-3">Session Cookies</h3>
                  <p>Temporary cookies that expire when you close your browser. They help with navigation and remembering your actions during a browsing session.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Cookie className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg mb-3">Persistent Cookies</h3>
                  <p>Remain on your device for a set period (days, months, or years). They remember your preferences and settings across multiple visits.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg mb-3">First-Party Cookies</h3>
                  <p>Set by the website you're visiting. These are generally considered safer as they can only be read by the domain that created them.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg mb-3">Third-Party Cookies</h3>
                  <p>Set by domains other than the one you're visiting. These are often used for advertising and analytics services.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">How We Use Cookies</h2>
            <div className="space-y-6 text-gray-700">
              <p>We use cookies for the following purposes:</p>
              
              <div>
                <h3 className="text-xl mb-3">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Performance & Analytics Cookies</h3>
                <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Functional Cookies</h3>
                <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Marketing & Advertising Cookies</h3>
                <p>These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users, and thereby more valuable for publishers and third-party advertisers.</p>
              </div>
            </div>
          </section>

          {/* Types of Cookies We Use */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Types of Cookies We Use</h2>
            <div className="space-y-6 text-gray-700">
              <p>Below is a detailed list of cookies we use on our website:</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#2563EB] to-[#7c3aed] text-white">
                      <th className="text-left p-4">Cookie Name</th>
                      <th className="text-left p-4">Purpose</th>
                      <th className="text-left p-4">Duration</th>
                      <th className="text-left p-4">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">baramijx_session</td>
                      <td className="p-4">Maintains user session state across page requests</td>
                      <td className="p-4">Session</td>
                      <td className="p-4">Essential</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">XSRF-TOKEN</td>
                      <td className="p-4">Security cookie to prevent cross-site request forgery</td>
                      <td className="p-4">Session</td>
                      <td className="p-4">Essential</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">baramijx_consent</td>
                      <td className="p-4">Remembers your cookie consent preferences</td>
                      <td className="p-4">1 year</td>
                      <td className="p-4">Functional</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">_ga</td>
                      <td className="p-4">Google Analytics - Distinguishes unique users</td>
                      <td className="p-4">2 years</td>
                      <td className="p-4">Analytics</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">_gid</td>
                      <td className="p-4">Google Analytics - Distinguishes unique users</td>
                      <td className="p-4">24 hours</td>
                      <td className="p-4">Analytics</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">_gat</td>
                      <td className="p-4">Google Analytics - Throttles request rate</td>
                      <td className="p-4">1 minute</td>
                      <td className="p-4">Analytics</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">_fbp</td>
                      <td className="p-4">Facebook Pixel - Tracks conversions from Facebook ads</td>
                      <td className="p-4">3 months</td>
                      <td className="p-4">Marketing</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">_hjSession_*</td>
                      <td className="p-4">Hotjar - Session recording and heatmaps</td>
                      <td className="p-4">Session</td>
                      <td className="p-4">Analytics</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4">_hjAbsoluteSessionInProgress</td>
                      <td className="p-4">Hotjar - Tracks user's first pageview session</td>
                      <td className="p-4">30 minutes</td>
                      <td className="p-4">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#2563EB] p-6 rounded">
                <div className="flex items-start gap-3 mb-3">
                  <Settings className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-1" />
                  <h3 className="text-lg">Third-Party Cookies</h3>
                </div>
                <p className="mb-3">We use services from third parties that may set their own cookies. These include:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance measurement</li>
                  <li><strong>Facebook Pixel:</strong> For tracking conversions from Facebook advertising</li>
                  <li><strong>LinkedIn Insight Tag:</strong> For LinkedIn advertising and analytics</li>
                  <li><strong>Hotjar:</strong> For user behavior analysis and heatmaps</li>
                  <li><strong>HubSpot:</strong> For marketing automation and CRM</li>
                </ul>
                <p className="mt-3">These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies.</p>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Managing Your Cookie Preferences</h2>
            <div className="space-y-6 text-gray-700">
              <p>You have the right to choose which cookies you accept. Here's how you can manage your preferences:</p>
              
              <div>
                <h3 className="text-xl mb-3">Cookie Consent Banner</h3>
                <p>When you first visit our website, you'll see a cookie consent banner where you can:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Learn more about our cookie usage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Browser Settings</h3>
                <p>Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:</p>
                
                <div className="grid md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2 text-[#2563EB]">🌐</div>
                    <p className="mb-2"><strong>Google Chrome</strong></p>
                    <p className="text-sm">Settings → Privacy and Security → Cookies</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2 text-[#2563EB]">🦊</div>
                    <p className="mb-2"><strong>Mozilla Firefox</strong></p>
                    <p className="text-sm">Options → Privacy & Security → Cookies</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2 text-[#2563EB]">🧭</div>
                    <p className="mb-2"><strong>Safari</strong></p>
                    <p className="text-sm">Preferences → Privacy → Cookies</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2 text-[#2563EB]">🔷</div>
                    <p className="mb-2"><strong>Microsoft Edge</strong></p>
                    <p className="text-sm">Settings → Cookies and Site Permissions</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-3">Opting Out of Specific Services</h3>
                <p>You can opt out of specific third-party cookie tracking:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#2563EB] hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Facebook:</strong> Adjust your Facebook ad preferences in your Facebook account settings</li>
                  <li><strong>LinkedIn:</strong> Opt out through your LinkedIn account settings</li>
                  <li><strong>Digital Advertising Alliance:</strong> Visit <a href="http://optout.aboutads.info" className="text-[#2563EB] hover:underline" target="_blank" rel="noopener noreferrer">optout.aboutads.info</a> to opt out of personalized advertising</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Your Rights Regarding Cookies</h2>
            <div className="space-y-6 text-gray-700">
              <p>Under data protection laws such as GDPR and CCPA, you have certain rights regarding cookies and tracking technologies:</p>
              
              <div>
                <h3 className="text-xl mb-3">Right to Information</h3>
                <p>You have the right to be informed about what cookies are used on our website and for what purposes.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Right to Consent</h3>
                <p>For non-essential cookies, we require your explicit consent before setting them on your device.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Right to Withdraw Consent</h3>
                <p>You can withdraw your cookie consent at any time by clearing cookies in your browser settings or using our cookie preference center.</p>
              </div>

              <div>
                <h3 className="text-xl mb-3">Right to Object</h3>
                <p>You have the right to object to the processing of your personal data through cookies for marketing purposes.</p>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12 pb-8 border-b border-gray-200">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Changes to This Cookie Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or services. When we make changes, we will:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Post the updated policy on our website</li>
                <li>Provide notice of significant changes through our website or email</li>
                <li>Reset cookie preferences if changes significantly affect your rights</li>
              </ul>
              <p>We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.</p>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl mb-6 text-[#2563EB]">Impact of Disabling Cookies</h2>
            <div className="space-y-6 text-gray-700">
              <p>If you choose to disable cookies, please be aware that:</p>
              
              <div>
                <h3 className="text-xl mb-3">Essential Functionality</h3>
                <p>Some parts of our website may not function properly without essential cookies. You may not be able to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Access secure areas of our website</li>
                  <li>Complete forms or submit information</li>
                  <li>Use certain features that require cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">User Experience</h3>
                <p>Disabling functional cookies may affect:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Personalized settings and preferences</li>
                  <li>Language and location settings</li>
                  <li>Remembered login details</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-3">Analytics & Marketing</h3>
                <p>Disabling analytics and marketing cookies means:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>We won't be able to analyze your website usage</li>
                  <li>You may see irrelevant advertising</li>
                  <li>We can't measure the effectiveness of our marketing campaigns</li>
                </ul>
              </div>
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
          <h3 className="text-2xl mb-6">Questions About Our Cookie Policy?</h3>
          <p className="text-gray-700 mb-6">If you have any questions or concerns about our use of cookies, please contact us:</p>
          
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
            <strong>Related Policies:</strong> For more information about how we handle your personal data, please review our <Link to="/privacy-policy" className="text-[#2563EB] hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-[#2563EB] hover:underline">Terms of Service</Link>.
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