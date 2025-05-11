import { SiteFooter } from "@/components/Footer/Footer";
import { SiteHeader } from "@/components/Header/Header";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <SiteHeader />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-400">Terms and Conditions</h1>
        
        <div className="space-y-8 max-w-4xl">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">1. Introduction</h2>
            <p className="text-gray-300">
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("you" or "User") and Beehive Labs Ltd., incorporated in the British Virgin Islands, ("Company," "we," "our," or "us"), governing the purchase and use of the HealthRing device and accompanying HealthRing AI application (together, the "Services").
            </p>
            <p className="text-gray-300 mt-2">
              By purchasing the HealthRing or using any part of the Services, you confirm that you have read, understood, and agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">2. Eligibility</h2>
            <p className="text-gray-300">
              Use of the Services is limited to individuals who are at least 18 years of age. By using the Services, you represent and warrant that you meet this requirement and that all information you provide is accurate and complete.
            </p>
            <p className="text-gray-300 mt-2">
              The Services are not intended for use by individuals with medical conditions that require professional monitoring or care. You agree to consult a qualified healthcare provider before making any health-related decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">3. Product Purchase</h2>
            <p className="text-gray-300 font-medium">3.1 Order Acceptance:</p>
            <p className="text-gray-300 ml-4 mb-2">All purchases of the HealthRing are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.</p>
            
            <p className="text-gray-300 font-medium">3.2 Shipping & Risk of Loss:</p>
            <p className="text-gray-300 ml-4 mb-2">Orders will be shipped to the address provided. Title and risk of loss pass to you upon shipment. We are not liable for delays, lost shipments, or third-party delivery failures.</p>
            
            <p className="text-gray-300 font-medium">3.3 Device Compatibility:</p>
            <p className="text-gray-300 ml-4">You are solely responsible for ensuring compatibility of the HealthRing with your device and environment.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">4. No Refund or Return Policy</h2>
            <p className="text-gray-300 mb-2">
              All sales are final. We do not offer refunds, returns, or exchanges.
            </p>
            <p className="text-gray-300 mb-2">
              By placing an order, you acknowledge and accept that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>You waive any right to request a refund for any reason, including dissatisfaction, delayed delivery, or change of mind.</li>
              <li>No return of the HealthRing will be accepted under any circumstances.</li>
              <li>Chargebacks or disputes initiated through your payment provider will be contested and may result in suspension of Services.</li>
              <li>This policy is strictly enforced due to the operational and medical nature of the product.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">5. Access to the HealthRing AI App</h2>
            <p className="text-gray-300 font-medium">5.1 License:</p>
            <p className="text-gray-300 ml-4 mb-2">Upon successful activation, you are granted a limited, non-exclusive, non-transferable, revocable license to access and use the HealthRing AI app solely for your personal, non-commercial use.</p>
            
            <p className="text-gray-300 font-medium">5.2 Usage Restrictions:</p>
            <p className="text-gray-300 ml-4 mb-2">You shall not:</p>
            <ul className="list-disc pl-8 space-y-1 text-gray-300">
              <li>Copy, modify, reverse-engineer, or distribute the app or its components</li>
              <li>Circumvent access controls or authentication</li>
              <li>Share login credentials or allow third-party use</li>
            </ul>
            <p className="text-gray-300 ml-4 mt-2">
              We may suspend or terminate access for violation of these Terms without notice or liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">6. Health Disclaimers</h2>
            <p className="text-gray-300 font-medium">6.1 Not Medical Advice:</p>
            <p className="text-gray-300 ml-4 mb-2">The Services are intended solely for general wellness purposes. The HealthRing and app are not medical devices and do not diagnose, treat, cure, or prevent any disease.</p>
            
            <p className="text-gray-300 font-medium">6.2 No Professional Reliance:</p>
            <p className="text-gray-300 ml-4 mb-2">The AI health assistant provides general information and insights based on available data. You agree not to rely on this information as a substitute for professional medical advice, diagnosis, or treatment.</p>
            
            <p className="text-gray-300">
              You accept full responsibility for any decisions or actions taken based on information obtained through the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">7. User Conduct</h2>
            <p className="text-gray-300 mb-2">
              You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Use the Services for illegal, abusive, or harmful purposes</li>
              <li>Introduce viruses or other malicious code</li>
              <li>Interfere with the integrity or performance of the Services</li>
              <li>Attempt to gain unauthorized access to systems or data</li>
            </ul>
            <p className="text-gray-300 mt-2">
              Violation of this section may result in immediate suspension or termination of your account, legal action, and civil or criminal liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">8. Intellectual Property</h2>
            <p className="text-gray-300">
              All content, trademarks, technology, and other materials provided as part of the Services are owned by or licensed to Beehive Labs Ltd. and protected by applicable intellectual property laws.
            </p>
            <p className="text-gray-300 mt-2">
              You acquire no rights in or to the Services other than the limited license granted herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">9. Limitation of Liability</h2>
            <p className="text-gray-300 mb-2">
              To the fullest extent permitted by law, Beehive Labs Ltd., its directors, employees, and affiliates shall not be liable for any:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Personal injury or health outcomes related to use or reliance on the Services</li>
            </ul>
            <p className="text-gray-300 mt-2">
              Our total aggregate liability arising out of or relating to these Terms shall not exceed the amount paid by you for the HealthRing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">10. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify and hold harmless Beehive Labs Ltd. and its affiliates from any claims, liabilities, damages, losses, or expenses arising out of your use of the Services, violation of these Terms, or infringement of any rights of a third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">11. Arbitration and Class Action Waiver</h2>
            <p className="text-gray-300">
              Any dispute or claim arising from or relating to these Terms or the Services shall be resolved by binding arbitration in accordance with the rules of the British Virgin Islands International Arbitration Centre. You waive any right to bring claims as part of a class action or representative proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">12. Modifications</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. Updated versions will be posted on our website. Continued use of the Services after changes take effect constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">13. Governing Law and Jurisdiction</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of the British Virgin Islands. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in the British Virgin Islands.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">14. Contact Information</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at:
              <a href="mailto:support@beehivelabs.io" className="text-emerald-400 hover:text-emerald-300 ml-1">support@beehivelabs.io</a>
            </p>
          </section>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
} 