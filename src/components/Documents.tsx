import { Button } from "./ui/button";
import { FileText, Download, Shield, AlertTriangle } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      title: "INSTITUTIONAL OVERVIEW",
      description: "Comprehensive analysis of our investment framework, operational excellence, and fiduciary standards.",
      type: "CONFIDENTIAL",
      size: "4.2 MB",
      level: "TIER 1"
    },
    {
      title: "SECURITY & COMPLIANCE", 
      description: "Detailed security infrastructure, regulatory compliance framework, and risk management protocols.",
      type: "CLASSIFIED", 
      size: "3.1 MB",
      level: "TIER 1"
    },
    {
      title: "PERFORMANCE ATTRIBUTION",
      description: "Illustrative performance methodology and transparency framework documentation.",
      type: "REDACTED",
      size: "2.8 MB",
      level: "TIER 2",
      badge: "SAMPLE"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-gradient-hero relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      
      <div className="container-responsive relative max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-card border border-border rounded-luxury px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 sm:mr-3" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">INSTITUTIONAL DOCUMENTATION</span>
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground mb-4 sm:mb-6">
            TRANSPARENCY
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">FRAMEWORK</span>
          </h2>
          
          <div className="w-20 sm:w-28 lg:w-32 h-1 bg-gradient-luxury rounded-full mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive documentation demonstrating our commitment to operational transparency, 
            regulatory compliance, and institutional-grade standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-ultra p-6 sm:p-8 border border-border hover:border-primary/40 transition-ultra hover:shadow-luxury"
            >
              {/* Security level indicator */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-accent-gold text-background px-3 py-1 rounded-lg text-xs font-bold tracking-widest shadow-luxury">
                  {doc.level}
                </div>
              </div>

              {/* Document header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-primary/5 border border-primary/20 rounded-ultra flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/40 transition-ultra">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                {doc.badge && (
                  <span className="bg-warning/10 text-warning text-xs font-bold px-3 py-1 rounded-lg border border-warning/20 tracking-widest">
                    {doc.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4 mb-8">
                <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-ultra">
                  {doc.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed text-sm">
                  {doc.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                  <span className="text-xs font-bold text-text-muted tracking-widest uppercase">{doc.type}</span>
                  <span className="text-xs text-text-subtle font-medium">{doc.size}</span>
                </div>
              </div>

              {/* Action */}
              <Button variant="outline" size="sm" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                ACCESS DOCUMENT
              </Button>

              {/* Interaction indicator */}
              <div className="absolute inset-0 rounded-ultra border-2 border-transparent group-hover:border-primary/20 transition-ultra pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Important Disclaimer */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-destructive/5 border border-destructive/20 rounded-ultra p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-bold text-destructive text-sm tracking-wide uppercase">IMPORTANT LEGAL NOTICE</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Illustrative materials only.</span> Documentation does not constitute investment advice, 
                  performance guarantee, or solicitation. Actual results may vary significantly from projections. 
                  Investment involves substantial risk including potential total loss of capital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;