import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Shield, Lock, Crown, ChevronDown, Eye, Target, Award, Globe, CheckCircle2, TrendingUp, Users, Calendar, FileText, ShieldCheck, Globe2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PhilosophyCard } from "@/components/PhilosophyCard";
import { ProcessStep } from "@/components/ProcessStep";
import { TrustBadge } from "@/components/TrustBadge";
import { TestimonialCard } from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-swiss-alps.jpg";
import boardroomImage from "@/assets/corporate-boardroom.jpg";

const ACCESS_URL = "https://www.seamasset.com";

const Index = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation accessUrl={ACCESS_URL} />
      
      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Parallax speed={-10} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
        </Parallax>

        
        <Parallax speed={3} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-foreground mb-4 sm:mb-6 tracking-wider leading-tight px-4"
          >
            Wealth Doesn't Shout.<br />It Whispers.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 font-light tracking-wide max-w-3xl mx-auto px-4"
          >
            Discreet wealth management for those who value silence over spectacle.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
          >
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-body tracking-wider shadow-lg hover:shadow-primary/20 transition-all w-full sm:w-auto px-6 sm:px-8"
            >
              <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer">Request Private Access</a>
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-xs sm:text-sm tracking-wide mb-8 sm:mb-12 lg:mb-16 px-4"
          >
            Admission is selective. Submitting an application does not guarantee access.
          </motion.p>

          {/* Statistics strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 border-t border-border pt-6 sm:pt-8 px-4"
          >
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground mb-1">150+</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">SELECT CLIENTS</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground mb-1">$180 M+</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">ASSETS MANAGED</div>
            </div>
            <div className="text-center min-w-[100px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground mb-1">40+</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">YEARS HERITAGE</div>
            </div>
          </motion.div>
        </Parallax>

        {/* Scroll indicator - positioned relative to hero section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section id="who-we-are" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 relative bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[10px] sm:text-xs text-primary tracking-widest">01 / ABOUT</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4 sm:mb-6 tracking-wider">
                Discreet Wealth Management.<br className="hidden sm:block" />Redefined.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                We represent a lineage of discretion. An institution built not on noise, but on legacy. 
                Our doors open only to those who understand that true wealth requires stewardship, not spectacle.
              </p>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Multi-generational wealth preservation strategies</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Absolute privacy and regulatory compliance</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground text-xs sm:text-sm">Bespoke portfolio architecture</span>
                </div>
              </div>

              <div className="border-l-2 border-primary pl-3 sm:pl-4 italic text-muted-foreground text-xs sm:text-sm">
                "Legacy isn't inherited. It's engineered."
              </div>
            </motion.div>
            
            <Parallax speed={-5}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <img 
                  src={boardroomImage} 
                  alt="Alpine Capital Partners" 
                  style={{borderRadius:"20px",}}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover  opacity-90 dark:opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 group-hover:border-primary/30 transition-colors" />
              </motion.div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Parallax speed={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[10px] sm:text-xs text-primary tracking-widest mb-3 sm:mb-4 block">02 / PHILOSOPHY</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4 sm:mb-6 tracking-wider">
                Built for the Few Who Know
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                Our principles are non-negotiable. They guide every decision, every relationship, every legacy we help build.
              </p>
            </motion.div>
          </Parallax>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Parallax speed={-2}>
              <PhilosophyCard
                icon={Eye}
                title="Confidentiality"
                description="Your privacy is our foundation. Absolute discretion in every interaction, protected by top-grade secrecy and modern encryption."
                number="01"
              />
            </Parallax>
            <Parallax speed={0}>
              <PhilosophyCard
                icon={Target}
                title="Precision"
                description="Calculated strategies executed with Swiss-engineered exactitude. Every decision backed by rigorous analysis and decades of expertise."
                number="02"
              />
            </Parallax>
            <Parallax speed={2}>
              <PhilosophyCard
                icon={Crown}
                title="Exclusivity"
                description="Limited membership. Selective criteria. Uncompromising standards. We maintain our excellence by remaining deliberately small."
                number="03"
              />
            </Parallax>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              variant="link" 
              className="text-primary hover:text-primary/80 text-base tracking-wider group"
            >
              <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer">
                Request Access 
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE SECTION */}
      <section id="experience" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(230, 0, 38, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(230, 0, 38, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(230, 0, 38, 0.2) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] sm:text-xs text-primary tracking-widest mb-6 sm:mb-8 block">03 / THE EXPERIENCE</span>

            <Parallax speed={5}>
              <motion.div 
                className="w-20 h-20 border border-primary/30 mx-auto mb-8 flex items-center justify-center relative"
                whileHover={{ scale: 1.1, borderColor: "rgba(230, 0, 38, 0.5)" }}
              >
                <Lock className="w-10 h-10 text-primary" strokeWidth={1.5} />
                <div className="absolute inset-0 border border-primary/0 hover:border-primary/20 transition-all duration-500" style={{ transform: 'rotate(45deg)' }} />
              </motion.div>
            </Parallax>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6 sm:mb-8 tracking-wider">
              A Gateway, Not a Catalogue
            </h2>
            
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto">
              We do not advertise services. We extend invitations.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our membership is deliberately limited. Access requires qualification, patience, and commitment to our principles.
            </p>

            {/* Counter stats */}
            <div className="flex justify-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 flex-wrap">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-2xl sm:text-3xl font-heading text-foreground">140</span>
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">SEATS AVAILABLE</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-2xl sm:text-3xl font-heading text-foreground">374</span>
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">ON WAITLIST</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-2xl sm:text-3xl font-heading text-foreground">7</span>
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider">YRS AVG RELATION</div>
              </div>
            </div>
            
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90 tracking-wider text-white shadow-lg hover:shadow-primary/30 transition-all"
            >
              <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer">Request Access</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* HOW ACCESS WORKS SECTION */}
      <section id="access" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">04 / PROCESS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-4 sm:mb-6 tracking-tight">How Access Works</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A structured approach designed for serious inquiries
            </p>
          </motion.div>
          
          {/* Horizontal Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50" style={{ top: '2rem' }} />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <ProcessStep 
                  number="01"
                  title="Submit Application"
                  description="Complete our confidential inquiry form. We review all applications personally within 48 hours."
                  icon={FileText}
                  timeline="24-48 Hours"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <ProcessStep 
                  number="02"
                  title="Qualification Review"
                  description="Our team conducts a thorough assessment of your financial profile and requirements to ensure mutual compatibility."
                  icon={Shield}
                  timeline="Within 48 Hours"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <ProcessStep 
                  number="03"
                  title="Private Onboarding"
                  description="Upon approval, we arrange a discreet consultation within our team to establish your account and customize our service to your needs."
                  icon={CheckCircle2}
                  timeline="1-2 Days"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS SECTION */}
      <section id="trust" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">05 / TRUST</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-4 sm:mb-6 tracking-tight">Built on Trust</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Three generations of proven excellence
            </p>
          </motion.div>
          
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto"
          >
            <div className="text-center p-4 sm:p-6 md:p-8 bg-card border border-border rounded-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary mb-2 sm:mb-3">98%</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wider uppercase">Client Retention</div>
            </div>
            <div className="text-center p-4 sm:p-6 md:p-8 bg-card border border-border rounded-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary mb-2 sm:mb-3">24</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wider uppercase">Countries Served</div>
            </div>
            <div className="text-center p-4 sm:p-6 md:p-8 bg-card border border-border rounded-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary mb-2 sm:mb-3">UHNI</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wider uppercase">Clients</div>
            </div>
            <div className="text-center p-4 sm:p-6 md:p-8 bg-card border border-border rounded-lg">
              <div className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary mb-2 sm:mb-3">150+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wider uppercase">Clients</div>
            </div>
          </motion.div>
          
          {/* Trust Badges */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <TrustBadge 
              icon={ShieldCheck} 
              title="Swiss Ideology" 
              subtitle="Top Grade Security"
            />
            <TrustBadge 
              icon={Globe2} 
              title="Global Reach" 
              subtitle="24 countries"
            />
            <TrustBadge 
              icon={Lock} 
              title="Invitation Only" 
              subtitle="Exclusive access"
            />
            <TrustBadge 
              icon={Award} 
              title="Heritage" 
              subtitle="Since 1947"
            />
          </motion.div>
          
          {/* Testimonials */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <TestimonialCard 
              quote="The level of discretion and expertise is unparalleled. They've managed our family's wealth for over two decades."
              attribution="European Industrialist"
              clientType="Private Client"
            />
            <TestimonialCard 
              quote="Their understanding of international structures and tax optimization is exceptional. A true partner in wealth preservation."
              attribution="Tech Entrepreneur"
              clientType="UHNW Client"
            />
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="apply" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 bg-muted/20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(230, 0, 38, 0.1) 50px, rgba(230, 0, 38, 0.1) 51px)',
            backgroundSize: '200% 200%'
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Decorative frame */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="absolute -inset-2 border border-primary/10" />
              <div className="relative bg-card px-6 py-2 border border-border">
                <span className="text-xs text-primary tracking-widest">LIMITED SPOTS REMAINING</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4 sm:mb-6 tracking-wider">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
              Submit your application. If qualified, you'll hear from us.
            </p>

            <div className="mb-8">
              <Button 
                asChild
                size="xl" 
                className="bg-primary hover:bg-primary/90 tracking-wider text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all relative group"
              >
                <a href={ACCESS_URL} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Submit Application</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>
            
            <p className="text-muted-foreground text-xs tracking-wide">
              Your information is encrypted and handled with absolute confidentiality.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      
    </div>
  );
};

export default Index;
