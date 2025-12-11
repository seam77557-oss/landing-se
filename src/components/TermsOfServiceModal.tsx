import {
  CustomModal,
  CustomModalHeader,
  CustomModalTitle,
  CustomModalBody,
  CustomModalFooter,
} from "@/components/ui/custom-modal";
import { Button } from "@/components/ui/button";

interface TermsOfServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsOfServiceModal = ({ open, onOpenChange }: TermsOfServiceModalProps) => {
  return (
    <CustomModal open={open} onOpenChange={onOpenChange}>
      <CustomModalHeader>
        <CustomModalTitle>Terms & Conditions – SEAM LLC</CustomModalTitle>
      </CustomModalHeader>

      <CustomModalBody>
        <div className="space-y-6 text-sm text-gray-600">

          <section>
            <h3 className="text-gray-900 font-medium mb-2">1. Introduction</h3>
            <p>
              These Terms & Conditions ("Terms") govern your access to and use of services provided by SEAM LLC. By creating an account or using our services, you agree to comply with these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">2. Eligibility</h3>
            <p>To use our services, you must:</p>
            <ul className="list-disc ml-6">
              <li>Be 18 years or older</li>
              <li>Be legally capable of entering into an agreement</li>
              <li>Be the controller of your own funds</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">3. Nature of Services</h3>
            <ul className="list-disc ml-6">
              <li>Asset Management & Portfolio Management</li>
              <li>Investment Advisory</li>
              <li>Market Research & Insights</li>
              <li>Financial Education & Learning Modules</li>
              <li>Cryptocurrency transfer facilitation (deposits/withdrawals)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">4. Investment Disclaimer</h3>
            <p>By investing with SEAM LLC, you acknowledge:</p>
            <ul className="list-disc ml-6">
              <li>Returns are market-dependent</li>
              <li>Past performance does not guarantee future results</li>
              <li>All investments involve inherent financial risk</li>
            </ul>
            <p>SEAM LLC does not guarantee any fixed rate of return.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">5. Deposits & Withdrawals</h3>
            <p className="font-medium">Deposits</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Accepted only via cryptocurrency</li>
              <li>Minimum investment amount: USD 1,000</li>
            </ul>
            <p className="font-medium">Withdrawals</p>
            <ul className="list-disc ml-6">
              <li>Processed within 30 business days</li>
              <li>Subject to internal verification and security protocols</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">6. Client Obligations</h3>
            <ul className="list-disc ml-6">
              <li>Provide accurate and truthful information</li>
              <li>Avoid fraudulent, suspicious, or abusive activities</li>
              <li>Comply with all verification and compliance procedures</li>
              <li>Not misuse platform services in any manner</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">7. Limitation of Liability</h3>
            <p>SEAM LLC is not liable for:</p>
            <ul className="list-disc ml-6">
              <li>Losses arising from market fluctuations</li>
              <li>Delays caused by blockchain network congestion</li>
              <li>Force majeure events including technical failures, cyber incidents, or natural disasters</li>
            </ul>
            <p>Clients acknowledge and accept that investment risks are borne solely by them.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">8. Account Termination</h3>
            <p>SEAM LLC reserves the right to terminate or suspend an account due to:</p>
            <ul className="list-disc ml-6">
              <li>Prolonged inactivity</li>
              <li>Legal or compliance-related reasons</li>
              <li>Threats to platform integrity or user safety</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">9. Governing Law</h3>
            <p>
              These Terms are governed by the laws of St. Vincent & the Grenadines. Any disputes shall fall under the exclusive jurisdiction of its courts.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">10. Referral Program</h3>
            <p>If clients participate in the referral program:</p>
            <ul className="list-disc ml-6">
              <li>They must follow all rules, eligibility conditions, and guidelines published</li>
              <li>The company may modify or withdraw the program at any time without notice</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-medium mb-2">11. Contact Information</h3>
            <p>Email: support@seamasset.com</p>
          </section>

          <p className="text-xs text-gray-400 pt-4 border-t border-gray-200">Last updated: January 2025</p>
        </div>
      </CustomModalBody>

      <CustomModalFooter>
        <Button 
          onClick={() => onOpenChange(false)}
          className="w-full bg-gray-900 text-white hover:bg-gray-800"
        >
          Close
        </Button>
      </CustomModalFooter>
    </CustomModal>
  );
};

export default TermsOfServiceModal;