import { Crown, Calculator, Shuffle, FileText, ShieldCheck, Headphones, TrendingUp, Globe } from "lucide-react";
import { Button } from "./ui/button";

const Features = () => {
  const features = [
    {
      icon: Crown,
      category: "ACCESS",
      title: "Exclusive Opportunities",
      description: "Curated investment vehicles unavailable to retail markets. Institutional-grade allocations with enhanced due diligence."
    },
    {
      icon: TrendingUp,
      category: "PERFORMANCE", 
      title: "Sophisticated Analytics",
      description: "Real-time portfolio optimization with risk-adjusted return modeling and advanced performance attribution."
    },
    {
      icon: Shuffle,
      category: "LIQUIDITY",
      title: "Flexible Redemptions", 
      description: "Structured liquidity options with segregated withdrawal protocols and priority execution frameworks."
    },
    {
      icon: FileText,
      category: "REPORTING",
      title: "Institutional Reporting",
      description: "Comprehensive audit trails with regulatory-grade documentation and real-time transaction verification."
    },
    {
      icon: ShieldCheck,
      category: "SECURITY", 
      title: "Military-Grade Protection",
      description: "Multi-layered security architecture with biometric access controls and quantum-resistant encryption."
    },
    {
      icon: Headphones,
      category: "SERVICE",
      title: "Dedicated Relationship Management",
      description: "Personal investment committee with 24/7 concierge support and priority execution services."
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-gradient-hero relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center bg-surface-glass backdrop-blur-md border border-border-subtle rounded-luxury px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 sm:mr-3" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">GLOBAL EXCELLENCE</span>
          </div>
          
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 lg:mb-6 leading-tight tracking-[0.015em]">
            INSTITUTIONAL
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">INFRASTRUCTURE</span>
          </h2>
          
          <div className="w-20 sm:w-32 h-1 bg-gradient-luxury rounded-full mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Purpose-built for sophisticated investors who demand institutional-grade infrastructure, 
            transparent operations, and uncompromising fiduciary standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-16 mt-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-ultra p-6 lg:p-8 hover:border-primary/40 hover:shadow-elevated transition-smooth scroll-optimized will-change-transform"
              >
                {/* Category badge - positioned inside the card */}
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-gradient-luxury text-background px-3 py-1 rounded-lg text-xs font-bold tracking-widest shadow-sm">
                    {feature.category}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 lg:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/5 border border-primary/20 rounded-ultra flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/40 transition-smooth">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary group-hover:text-primary/90 transition-smooth" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3 lg:space-y-4">
                  <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="mt-12 lg:mt-20 text-center">
          <div className="bg-surface-glass backdrop-blur-xl rounded-ultra p-8 lg:p-12 border border-border-subtle max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-3 lg:mb-4">
              Ready to Elevate Your Portfolio?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join an exclusive community of sophisticated investors who demand transparency, 
              performance, and institutional-grade service.
            </p>
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              SCHEDULE CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;