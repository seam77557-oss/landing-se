import {
  CustomModal,
  CustomModalHeader,
  CustomModalTitle,
  CustomModalBody,
  CustomModalFooter,
} from "@/components/ui/custom-modal";
import { Button } from "@/components/ui/button";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => {
  return (
    <CustomModal open={open} onOpenChange={onOpenChange}>
      <CustomModalHeader>
        <CustomModalTitle className="text-xl font-semibold text-gray-900">Privacy Policy – SEAM LLC</CustomModalTitle>
      </CustomModalHeader>

      <CustomModalBody>
        <div className="space-y-8 text-base leading-relaxed text-gray-700">

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Introduction</h3>
            <p>
              SEAM LLC ("Company", "we", "our", or "us") is committed to protecting your personal information. This
              Privacy Policy explains how we collect, store, use, and safeguard your data when you use our services.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Company Information</h3>
            <ul className="list-disc ml-6">
              <li>Registered Name: SEAM LLC</li>
              <li>Jurisdiction: St. Vincent & the Grenadines</li>
              <li>Registered Office: St. Vincent & the Grenadines</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Information We Collect</h3>
            <p className="font-semibold">A. Personal Information</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Date of Birth</li>
              <li>Residential Address</li>
            </ul>
            <p className="font-semibold">B. Financial Information</p>
            <ul className="list-disc ml-6 mb-2">
              <li>Declared income range</li>
              <li>Investment amount</li>
              <li>Cryptocurrency wallet information</li>
            </ul>
            <p>We do not collect cookies, IP address data, analytics, or browsing behavior.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">How We Use Your Information</h3>
            <p>Your data is used strictly for:</p>
            <ul className="list-disc ml-6">
              <li>Client onboarding and verification</li>
              <li>Assessing investment suitability and profile evaluation</li>
              <li>Sending in-app / platform notifications</li>
              <li>Improving our service delivery and user experience</li>
            </ul>
            <p>We do not use your data for advertising, tracking, or external marketing.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Data Sharing</h3>
            <p>
              SEAM LLC does not share your personal or financial information with any external third parties. All
              processing is conducted internally.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Data Storage</h3>
            <p>
              All user data is stored securely on internal secure servers, protected through strict access control and
              encryption measures.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Data Retention</h3>
            <p>
              We retain your personal information as long as your account remains active. Upon account closure, data is
              deleted upon verified user request.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">User Rights</h3>
            <p>You have the absolute right to:</p>
            <ul className="list-disc ml-6">
              <li>Request deletion of your personal information</li>
            </ul>
            <p>Requests can be made via support@seamassetmanagement.com.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Communication Consent</h3>
            <p>By using the platform, you consent to receiving:</p>
            <ul className="list-disc ml-6">
              <li>In-app / platform notifications only</li>
            </ul>
            <p>
              We do not send promotional emails, WhatsApp messages, or SMS unless explicitly enabled in the future.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Security Measures</h3>
            <p>
              We implement robust internal security protocols to safeguard your data, including restricted access,
              encryption, and secure storage systems.
            </p>
          </section>

          <section>
            <h3 className="text-gray-900 font-semibold text-xl mb-3">Contact Information</h3>
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

export default PrivacyPolicyModal;
