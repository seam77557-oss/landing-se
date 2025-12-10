import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TermsOfServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsOfServiceModal = ({ open, onOpenChange }: TermsOfServiceModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif text-foreground">
            Terms of Service
          </DialogTitle>
        </DialogHeader>
        
        <DialogDescription className="sr-only">Terms of Service for Swiss Enigma Asset Management</DialogDescription>
        
        <div className="max-h-[60vh] overflow-y-auto pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="text-foreground font-medium mb-2">1. Acceptance of Terms</h3>
              <p>
                By accessing or using the services provided by Swiss Enigma Asset Management ("Company," "we," "us," or "our"), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">2. Eligibility</h3>
              <p>
                Our services are exclusively available to qualified and accredited investors as defined by applicable Swiss 
                and international regulations. By requesting access, you represent and warrant that you meet the eligibility 
                requirements and have the legal capacity to enter into binding agreements.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">3. Services Description</h3>
              <p>
                Swiss Enigma Asset Management provides private wealth management and investment advisory services. 
                Access to our services is by invitation only and subject to our sole discretion. We reserve the right 
                to decline any application without providing reasons.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">4. Confidentiality</h3>
              <p>
                All information shared between you and the Company is strictly confidential. We maintain the highest 
                standards of discretion in accordance with Swiss banking traditions. Any proprietary information, 
                investment strategies, or client communications must not be disclosed to third parties.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">5. Investment Risks</h3>
              <p>
                All investments carry inherent risks, including the potential loss of principal. Past performance 
                does not guarantee future results. You acknowledge that you understand these risks and that investment 
                decisions are made at your own discretion and risk.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">6. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, Swiss Enigma Asset Management shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising from your use of our services 
                or any investment decisions made based on information provided by us.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">7. Intellectual Property</h3>
              <p>
                All content, materials, and intellectual property on this website are owned by Swiss Enigma Asset Management 
                and are protected by applicable copyright and trademark laws. Unauthorized use is strictly prohibited.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">8. Governing Law</h3>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Switzerland. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Zurich.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">9. Modifications</h3>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services following any 
                changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-medium mb-2">10. Contact</h3>
              <p>
                For inquiries regarding these Terms of Service, please contact us through our official channels 
                or speak with your dedicated relationship manager.
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

export default TermsOfServiceModal;
