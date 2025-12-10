import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif text-foreground">
            Privacy Policy
          </DialogTitle>
        </DialogHeader>
        
        <DialogDescription className="sr-only">Privacy Policy for Swiss Enigma Asset Management</DialogDescription>
        
        <div className="max-h-[60vh] overflow-y-auto pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="text-foreground font-medium mb-2">1. Introduction</h3>
              <p>
                Swiss Enigma Asset Management ("Company," "we," "us," or "our") is committed to protecting your privacy 
                and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information in accordance with Swiss data protection laws and the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">2. Information We Collect</h3>
              <p className="mb-2">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Financial information relevant to investment services</li>
                <li>Professional and employment information</li>
                <li>Communications and correspondence with our team</li>
                <li>Technical data (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">3. How We Use Your Information</h3>
              <p className="mb-2">Your information is used to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Evaluate and process your access request</li>
                <li>Provide personalized wealth management services</li>
                <li>Comply with legal and regulatory obligations</li>
                <li>Communicate important updates and information</li>
                <li>Improve our services and client experience</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">4. Data Protection & Security</h3>
              <p>
                We employ industry-leading security measures to protect your personal data, including encryption, 
                secure servers, and strict access controls. Our systems are regularly audited to ensure compliance 
                with the highest security standards. We adhere to Swiss banking secrecy principles and maintain 
                absolute discretion regarding all client information.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">5. Data Sharing & Disclosure</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your data 
                only with trusted service providers who assist in our operations, subject to strict confidentiality 
                agreements, or when required by law or regulatory authorities.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">6. Data Retention</h3>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this 
                policy, or as required by applicable laws and regulations. Upon termination of our relationship, 
                we will securely delete or anonymize your data in accordance with our retention policies.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">7. Your Rights</h3>
              <p className="mb-2">Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">8. Cookies & Tracking</h3>
              <p>
                Our website may use cookies and similar technologies to enhance your browsing experience. 
                You can manage your cookie preferences through your browser settings. Essential cookies 
                required for website functionality cannot be disabled.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">9. International Transfers</h3>
              <p>
                Your data may be transferred to and processed in Switzerland and other jurisdictions where 
                we operate. We ensure appropriate safeguards are in place for any international data transfers 
                in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">10. Contact Us</h3>
              <p>
                For any questions or concerns regarding this Privacy Policy or your personal data, please contact 
                our Data Protection Officer through our official channels or speak with your relationship manager.
              </p>
            </section>

            <p className="text-xs text-muted-foreground/70 pt-4 border-t border-border">
              Last updated: January 2025
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <Button 
            onClick={() => onOpenChange(false)}
            className="w-full"
            variant="outline"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
