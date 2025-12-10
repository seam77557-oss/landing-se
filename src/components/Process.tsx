import { FileText, Shield, Wallet, Bell } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Apply",
      description: "Submit questionnaire and identity documents."
    },
    {
      number: "02", 
      icon: Shield,
      title: "Verification",
      description: "KYC is reviewed; acceptance is notified."
    },
    {
      number: "03",
      icon: Wallet,
      title: "Allocation",
      description: "Fund wallet and create your plan; balances become trackable."
    },
    {
      number: "04",
      icon: Bell,
      title: "Ongoing",
      description: "Receive announcements, downloadable statements, and on-chain payout proofs."
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-surface-subtle/50">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-card border border-border rounded-luxury px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 mb-4 sm:mb-6 lg:mb-8">
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">INSTITUTIONAL PROCESS</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 lg:mb-4 leading-tight tracking-[0.015em]">
            EXCLUSIVE
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">ACCESS PROTOCOL</span>
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-luxury rounded-full mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            A rigorous, secure process designed for ultra-high-net-worth institutional clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - hidden on mobile and tablet */}
          <div className="hidden xl:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-luxury opacity-30"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center group">
                  {/* Connection dot - only on very large screens */}
                  <div className="hidden xl:flex absolute top-20 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card shadow-luxury z-10"></div>
                  
                  {/* Number indicator for mobile/tablet */}
                  <div className="xl:hidden absolute -top-3 -left-3 w-8 h-8 bg-gradient-luxury rounded-full flex items-center justify-center text-background text-sm font-bold z-10 shadow-luxury">
                    {index + 1}
                  </div>
                  
                  <div className="bg-card border border-border rounded-ultra p-4 sm:p-6 lg:p-8 hover:border-primary/40 hover:shadow-elevated min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col transition-smooth scroll-optimized will-change-transform">
                    {/* Step number - larger screens only */}
                    <div className="hidden xl:block text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary/20 mb-3 lg:mb-4">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6 flex-shrink-0 pt-2 xl:pt-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 border border-primary/20 rounded-ultra flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:border-primary/40 transition-smooth">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary group-hover:text-primary/90 transition-smooth" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-foreground mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm lg:text-base text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Institutional Notice */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-card border border-border rounded-ultra p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-text-subtle leading-relaxed">
              <span className="text-primary font-semibold">CONFIDENTIAL:</span> Performance metrics and investment details are disclosed exclusively to verified institutional clients post-approval. 
              All investment vehicles carry inherent risk. Past performance does not guarantee future results. 
              This platform operates under strict regulatory compliance and fiduciary standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;