import { Button } from "./ui/button";
import { Crown, CheckCircle, Star, Lock } from "lucide-react";

const Exclusivity = () => {
  const qualificationCriteria = [
    "Verified accredited investor status with comprehensive due diligence",
    "Minimum liquid net worth and sophisticated investor experience", 
    "Complete regulatory compliance and enhanced KYC verification"
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-gradient-hero relative">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      <div className="decorative-safe absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] lg:w-[600px] h-64 sm:h-80 md:h-[400px] lg:h-[600px] bg-gradient-luxury opacity-5 rounded-full blur-3xl"></div>
      <div className="decorative-safe absolute bottom-0 left-0 w-56 sm:w-64 md:w-[350px] lg:w-[500px] h-56 sm:h-64 md:h-[350px] lg:h-[500px] bg-accent-gold opacity-3 rounded-full blur-3xl"></div>
      
      <div className="container-responsive relative z-10">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-card border border-border rounded-luxury px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 mb-6 sm:mb-8 lg:mb-10">
            <Lock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary mr-2 sm:mr-3 lg:mr-4" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">INVITATION EXCLUSIVE</span>
          </div>
          
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-luxury rounded-ultra flex items-center justify-center mx-auto shadow-glow">
              <Crown className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 text-background" />
            </div>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight tracking-[0.02em]">
                <span className="block">EXCLUSIVELY</span>
                <span className="block bg-gradient-luxury bg-clip-text text-transparent">CURATED</span>
              </h2>
              
              <div className="w-16 sm:w-20 lg:w-32 h-1 bg-gradient-luxury rounded-full mx-auto"></div>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-text-secondary leading-relaxed font-light max-w-4xl mx-auto px-4">
                We maintain the highest standards for membership qualification. 
                <span className="text-foreground font-medium"> Quality over quantity.</span>
                <span className="text-foreground font-medium"> Excellence over expansion.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Qualification framework */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-card rounded-ultra p-6 sm:p-8 lg:p-10 xl:p-12 border border-border shadow-luxury max-w-5xl mx-auto">
            <div className="text-center mb-8 lg:mb-10">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-3 lg:mb-4">
                QUALIFICATION FRAMEWORK
              </h3>
              <p className="text-sm sm:text-base text-text-secondary">
                Rigorous standards ensuring alignment with our institutional-grade service model
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {qualificationCriteria.map((criterion, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-surface-subtle/20 rounded-luxury border border-border-subtle group-hover:border-primary/30 transition-ultra">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-success/10 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success" />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-medium">
                      {criterion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center space-y-6 lg:space-y-10">
          <div className="space-y-4 lg:space-y-6">
            <Button variant="default" size="xl" className="w-full sm:w-auto">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
              REQUEST EXCLUSIVE ACCESS
            </Button>
            
            <p className="text-xs sm:text-sm text-text-subtle italic max-w-md mx-auto">
              Applications reviewed monthly • Limited acceptance • Invitation only
            </p>
          </div>
          
          {/* Premium status indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 lg:pt-8 border-t border-border-subtle">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs text-text-muted font-semibold tracking-wider uppercase">APPLICATIONS OPEN</span>
            </div>
            <div className="hidden sm:block text-text-subtle">•</div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-warning rounded-full"></div>
              <span className="text-xs text-text-muted font-semibold tracking-wider uppercase">LIMITED CAPACITY</span>
            </div>
            <div className="hidden sm:block text-text-subtle">•</div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-gold rounded-full"></div>
              <span className="text-xs text-text-muted font-semibold tracking-wider uppercase">INVITATION EXCLUSIVE</span>
            </div>
          </div>
        </div>

        {/* Risk disclaimer */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-border">
          <p className="text-xs text-text-subtle text-center max-w-4xl mx-auto leading-relaxed px-4">
            <span className="font-semibold text-text-muted">REGULATORY DISCLOSURE:</span> Qualification subject to comprehensive verification. 
            Investment opportunities involve substantial risk. Capital at risk. Suitability and accreditation requirements apply. 
            Investment may result in total loss of capital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;