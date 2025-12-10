import { Shield, Lock, Eye, Link } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "KYC & Identity Protection",
      description: "Comprehensive identity verification with secure document retention policies and restricted admin access to personal information."
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "End-to-end encryption for data at rest and in transit, with SSO integration and mandatory two-factor authentication for all accounts."
    },
    {
      icon: Eye, 
      title: "Operational Controls",
      description: "Manual admin approval required for all deposits and withdrawals, with complete audit trails and activity logging for transparency."
    },
    {
      icon: Link,
      title: "On-Chain Proof",
      description: "Every payout transaction recorded on the blockchain with TronScan verification links provided to clients for independent confirmation."
    }
  ];

  return (
    <section id="security" className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-gradient-hero relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-card border border-border rounded-lg px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 sm:mr-3" />
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase">Swiss Security</span>
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-3 sm:mb-4">
            Security & <span className="text-gradient-red">Privacy</span>
          </h2>
          
          <div className="w-16 sm:w-20 h-1 bg-gradient-red rounded-full mx-auto mb-4 sm:mb-6"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Bank-grade security protocols designed to protect your assets and personal information 
            with Swiss precision and institutional oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-lg p-4 sm:p-6 lg:p-8 border border-border hover:border-primary/40 transition-all hover:shadow-luxury"
              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-all">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional security notes */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-card rounded-lg p-6 sm:p-8 lg:p-12 border border-border shadow-luxury">
          <div className="text-center">
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">
              Compliance & <span className="text-primary">Transparency</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="font-bold text-sm sm:text-base text-foreground tracking-wide">REGULATORY COMPLIANCE</p>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">Full KYC/AML procedures in accordance with applicable financial regulations and reporting requirements.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="font-bold text-sm sm:text-base text-foreground tracking-wide">AUDIT TRAIL</p>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">Complete transaction history with timestamped records and admin approval documentation for all activities.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="font-bold text-sm sm:text-base text-foreground tracking-wide">THIRD-PARTY VERIFICATION</p>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">Blockchain-based payout verification allows independent confirmation of all platform transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;