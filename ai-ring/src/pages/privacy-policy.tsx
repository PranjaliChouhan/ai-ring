import { SiteFooter } from "@/components/Footer/Footer";
import { SiteHeader } from "@/components/Header/Header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <SiteHeader />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-400">Privacy Policy</h1>
        
        <div className="space-y-8 max-w-4xl">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">1. Introduction</h2>
            <p className="text-gray-300">
              This Privacy Policy describes how Beehive Labs Ltd. ("we", "us", or "our") collects, uses, discloses, and protects your personal data in connection with the HealthRing and HealthRing AI application ("Services").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">2. Information We Collect</h2>
            <p className="text-gray-300 mb-2">We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Personal identifiers: name, email address, contact details</li>
              <li>Payment information: collected and processed by Stripe</li>
              <li>Health data: heart rate, sleep metrics, movement, temperature, and other biometric data generated by your use of the HealthRing</li>
              <li>App usage data: logs, preferences, and interaction history</li>
              <li>Chatbot interactions: text inputs and queries submitted to the AI assistant</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">3. Use of Your Data</h2>
            <p className="text-gray-300 mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Provide and improve our Services</li>
              <li>Generate personalized health insights and reports</li>
              <li>Enhance AI chatbot responses</li>
              <li>Communicate updates, support messages, and promotional material (where applicable)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">4. AI Chatbot Disclaimer</h2>
            <p className="text-gray-300">
              Interactions with the HealthRing AI chatbot are processed and analyzed to improve response accuracy. These interactions may be stored for model refinement. Do not share sensitive personal or medical information through the chatbot.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">5. Legal Basis for Processing (GDPR Compliance)</h2>
            <p className="text-gray-300 mb-2">For users in the European Union, our legal basis for collecting and processing personal data includes:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Your consent</li>
              <li>Performance of a contract (e.g., product delivery and app access)</li>
              <li>Compliance with legal obligations</li>
              <li>Legitimate interests in operating and improving the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">6. Sharing of Information</h2>
            <p className="text-gray-300 mb-2">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Service providers (e.g., Stripe, hosting platforms) under strict confidentiality obligations</li>
              <li>Regulators or law enforcement, if required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">7. Data Security</h2>
            <p className="text-gray-300">
              We implement industry-standard technical and organizational safeguards to protect your personal data. However, no system is impenetrable. You are responsible for keeping your login credentials confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">8. Data Retention</h2>
            <p className="text-gray-300">
              We retain your data only as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">9. Your Rights</h2>
            <p className="text-gray-300 mb-2">
              Depending on your jurisdiction, you may have rights to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Access, correct, or delete your data</li>
              <li>Object to or restrict processing</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="text-gray-300 mt-2">
              You may contact us at support@beehivelabs.io to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">10. Children's Privacy</h2>
            <p className="text-gray-300">
              The Services are not intended for individuals under 18. We do not knowingly collect data from children. If we become aware of such data, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">11. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. Changes take effect upon publication. Your continued use of the Services constitutes acceptance of the revised Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">12. Contact Us</h2>
            <p className="text-gray-300">
              If you have questions or concerns about this Privacy Policy or your data, please contact us at: 
              <a href="mailto:support@beehivelabs.io" className="text-emerald-400 hover:text-emerald-300 ml-1">support@beehivelabs.io</a>
            </p>
          </section>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
} 