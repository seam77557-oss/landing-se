import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "What makes this platform different?",
      answer: "Our platform focuses on selective access, human verification of all operations, and complete transparency through segregated balance tracking and on-chain payout proof. We prioritize quality over quantity by maintaining limited membership."
    },
    {
      question: "How do I know payouts are real?",
      answer: "Every payout is recorded on the blockchain and we provide TronScan verification links to all verified clients. This allows independent confirmation of all transactions without relying solely on platform reporting."
    },
    {
      question: "Can I withdraw my principal at any time?",
      answer: "Withdrawal requests are subject to admin approval and processing schedules. Detailed withdrawal policies and procedures are shared with verified members after successful KYC completion."
    },
    {
      question: "Do you publish performance or ROI information?",
      answer: "We do not publish performance metrics or ROI figures publicly as part of our selective disclosure policy. Investment details and historical data are shared only after successful verification and acceptance."
    },
    {
      question: "How long does the approval process take?",
      answer: "The verification process typically takes 3-7 business days depending on document completeness and current application volume. We review applications monthly and notify all applicants of their status."
    },
    {
      question: "What documents are required for verification?",
      answer: "Required documents include government-issued photo ID, proof of address, and completion of our investor questionnaire. Additional documentation may be requested based on jurisdiction and investment level."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-gradient-hero relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-card border border-border rounded-lg px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase">Swiss Support</span>
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-3 sm:mb-4">
            Frequently Asked <span className="text-gradient-red">Questions</span>
          </h2>
          
          <div className="w-16 sm:w-20 h-1 bg-gradient-red rounded-full mx-auto mb-4 sm:mb-6"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto px-4">
            Common questions about our platform, process, and policies.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <div
                key={index}
                className="group bg-card rounded-lg border border-border hover:border-primary/40 transition-all shadow-sm hover:shadow-luxury overflow-hidden"
              >
                <button
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between hover:bg-surface-subtle/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground pr-4 sm:pr-6 lg:pr-8 group-hover:text-primary transition-all">
                    {item.question}
                  </h3>
                  
                  <div className="flex-shrink-0">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg border border-primary/20 flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary group-hover:bg-primary/20'}`}>
                      {isOpen ? (
                        <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
                      ) : (
                        <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                      )}
                    </div>
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                    <div className="pt-3 sm:pt-4 border-t border-border-subtle">
                      <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help */}
        <div className="mt-8 sm:mt-10 lg:mt-16 text-center">
          <div className="bg-card rounded-lg p-4 sm:p-6 lg:p-8 border border-border shadow-sm max-w-lg mx-auto">
            <p className="text-text-secondary mb-3 sm:mb-4 font-medium text-sm sm:text-base">
              Have additional questions?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-bold transition-all group text-sm sm:text-base"
            >
              Contact our team 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;