import { useState } from "react";
import logoLight from "@/assets/logo-light.png";
import TermsOfServiceModal from "./TermsOfServiceModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const Footer = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start">
            <div>
              <img 
                src={logoLight} 
                alt="Alpine Capital Partners" 
                className="h-6 sm:h-8 w-auto mb-3 sm:mb-4"
              />
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Discreet wealth management.<br />By invitation only.
              </p>
            </div>
            
            <div className="sm:text-center">
              <p className="text-foreground text-xs sm:text-sm font-medium tracking-widest mb-2">
                OFFICE LOCATIONS
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Zurich · Geneva · London · Dubai
              </p>
            </div>
            
            <div className="sm:col-span-2 md:col-span-1 md:text-right space-y-2">
              <button 
                onClick={() => setPrivacyOpen(true)}
                className="block text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setTermsOpen(true)}
                className="block text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6 sm:py-8">
          <div className="text-center space-y-2 px-4">
            <p className="text-muted-foreground text-[10px] sm:text-xs">
              © 2026 Swiss Enigma Asset Management. All rights reserved.
            </p>
            <p className="text-muted-foreground/70 text-[10px] sm:text-xs max-w-3xl mx-auto leading-relaxed">
              This site is for informational purposes only. Submission does not constitute an offer. 
              All investments carry risk. Consult qualified professionals before making investment decisions.
            </p>
          </div>
        </div>
      </div>

      <TermsOfServiceModal open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyPolicyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </footer>
  );
};

export default Footer;
