import { Button } from "./ui/button";
import { Calendar, Download, Eye, Zap } from "lucide-react";

const Broadcast = () => {
  const latestAnnouncement = {
    title: "Q4 2024 INSTITUTIONAL REVIEW",
    date: "December 15, 2024",
    time: "14:30 GMT",
    category: "OPERATIONAL UPDATE",
    summary: "Comprehensive review of enhanced security protocols, regulatory compliance initiatives, and institutional-grade operational improvements. Complete transparency documentation available to verified members only."
  };

  return (
    <section id="broadcast" className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-surface-subtle/20">
      <div className="container-responsive max-w-5xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-card border border-border rounded-luxury px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 sm:mr-3" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">INSTITUTIONAL UPDATES</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 sm:mb-6 tracking-[0.015em]">
            LATEST OPERATIONAL
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">TRANSPARENCY</span>
          </h2>
          
          <div className="w-20 sm:w-28 lg:w-32 h-1 bg-gradient-luxury rounded-full mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto px-4">
            Real-time updates on operational excellence, regulatory compliance, and institutional developments.
          </p>
        </div>

        {/* Premium Announcement Card */}
        <div className="relative bg-card rounded-ultra p-6 sm:p-8 lg:p-10 xl:p-12 border border-border shadow-luxury group hover:shadow-elevated transition-smooth will-change-transform pt-12 sm:pt-14">
          {/* Category badge */}
          <div className="absolute -top-3 left-8 z-10">
            <div className="bg-gradient-luxury text-background px-4 py-2 rounded-lg text-xs font-bold tracking-widest shadow-luxury">
              {latestAnnouncement.category}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Content */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-ultra">
                  {latestAnnouncement.title}
                </h3>
                
                {/* Meta information */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-text-muted">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="font-semibold tracking-wide text-sm sm:text-base">{latestAnnouncement.date}</span>
                  </div>
                  <div className="hidden sm:block text-text-subtle">•</div>
                  <span className="font-medium text-sm sm:text-base">{latestAnnouncement.time}</span>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                {latestAnnouncement.summary}
              </p>
            </div>

            {/* Actions */}
            <div className="lg:col-span-1 flex flex-col space-y-3 sm:space-y-4">
              <Button variant="default" size="default" className="w-full text-sm">
                <Eye className="h-4 w-4 mr-2" />
                VIEW FULL REPORT
              </Button>
              <Button variant="outline" size="default" className="w-full text-sm">
                <Download className="h-4 w-4 mr-2" />
                DOWNLOAD DOCUMENTATION
              </Button>
            </div>
          </div>

          {/* Interaction indicator */}
          <div className="absolute inset-0 rounded-ultra border-2 border-transparent group-hover:border-primary/20 transition-ultra pointer-events-none"></div>
        </div>

        {/* Notice */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center bg-warning/5 border border-warning/20 rounded-luxury py-3 sm:py-4 px-4 sm:px-8">
            <div className="w-2 h-2 bg-warning rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <p className="text-xs sm:text-sm font-medium text-text-secondary text-center">
              <span className="text-warning font-semibold">MEMBER EXCLUSIVE:</span> Full operational reports and documentation available exclusively to verified members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Broadcast;