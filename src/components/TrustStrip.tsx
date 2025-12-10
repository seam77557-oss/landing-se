import { Shield, Eye, Layers, Crown } from "lucide-react";

const TrustStrip = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "INSTITUTIONAL GRADE",
      subtitle: "Security & Compliance",
      description: "Bank-level security protocols with regulatory oversight and continuous monitoring."
    },
    {
      icon: Eye,
      title: "FULL TRANSPARENCY", 
      subtitle: "Blockchain Verification",
      description: "Every transaction verified on-chain with immutable proof of execution and settlement."
    },
    {
      icon: Layers,
      title: "SEGREGATED CUSTODY",
      subtitle: "Asset Protection", 
      description: "Client assets held in segregated accounts with independent custodial oversight."
    },
    {
      icon: Crown,
      title: "EXCLUSIVE ACCESS",
      subtitle: "Invitation Only",
      description: "Carefully curated membership with stringent qualification and ongoing relationship management."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-surface-glass/20 backdrop-blur-md border-y border-border-subtle">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-surface-glass backdrop-blur-md border border-border-subtle rounded-luxury px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">SWISS EXCELLENCE</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 tracking-[0.015em]">
            UNCOMPROMISING STANDARDS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-surface-glass backdrop-blur-sm rounded-ultra p-6 sm:p-8 border border-border-subtle hover:border-primary/30 transition-smooth hover:shadow-elevated will-change-transform"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-ultra flex items-center justify-center group-hover:bg-primary/20 transition-ultra">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary tracking-widest uppercase mb-1">
                      {feature.title}
                    </h3>
                    <h4 className="font-semibold text-base sm:text-lg text-foreground">
                      {feature.subtitle}
                    </h4>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-luxury rounded-b-ultra transform scale-x-0 group-hover:scale-x-100 transition-ultra"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;