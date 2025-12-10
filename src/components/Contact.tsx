import { useState } from "react";
import { Button } from "./ui/button";
import { Mail, MessageSquare, Check, Shield, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    netWorth: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", netWorth: "", message: "" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-surface-subtle/30">
        <div className="container-responsive max-w-2xl">
          <div className="text-center bg-card rounded-ultra p-10 sm:p-12 lg:p-16 shadow-elevated border border-border will-change-transform" style={{ contain: 'layout style paint' }}>
            <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
              <Check className="h-10 w-10 text-background" />
            </div>
            <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
              APPLICATION RECEIVED
            </h3>
            <div className="space-y-4">
              <p className="text-xl text-text-secondary leading-relaxed">
                Thank you for your interest in exclusive membership access.
              </p>
              <p className="text-text-muted">
                Our qualification committee will review your application and respond 
                to selected candidates within 48-72 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 xl:py-32 bg-surface-subtle/30">
      <div className="container-responsive">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-card border border-border rounded-luxury px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 sm:mr-3" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">CONFIDENTIAL INQUIRY</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 lg:mb-6 tracking-[0.015em]">
            REQUEST EXCLUSIVE
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">ACCESS</span>
          </h2>
          
          <div className="w-16 sm:w-24 lg:w-32 h-1 bg-gradient-luxury rounded-full mx-auto mb-6 sm:mb-8"></div>
          
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto px-4">
            Begin your qualification process with our confidential application system. 
            All communications are encrypted and handled with absolute discretion.
          </p>
        </div>

        <div className="bg-card rounded-ultra p-6 sm:p-8 lg:p-10 xl:p-12 shadow-elevated border border-border max-w-3xl mx-auto will-change-transform" style={{ contain: 'layout style paint' }}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-foreground tracking-wide uppercase">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-surface-subtle/50 border border-border-subtle rounded-luxury focus:ring-2 focus:ring-primary/40 focus:border-primary transition-ultra font-medium"
                  placeholder="Enter your full legal name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-foreground tracking-wide uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-surface-subtle/50 border border-border-subtle rounded-luxury focus:ring-2 focus:ring-primary/40 focus:border-primary transition-ultra font-medium"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone and Net Worth row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-foreground tracking-wide uppercase">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-surface-subtle/50 border border-border-subtle rounded-luxury focus:ring-2 focus:ring-primary/40 focus:border-primary transition-ultra font-medium"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="netWorth" className="block text-sm font-bold text-foreground tracking-wide uppercase">
                  Approximate Net Worth *
                </label>
                <select
                  id="netWorth"
                  name="netWorth"
                  value={formData.netWorth}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-surface-subtle/50 border border-border-subtle rounded-luxury focus:ring-2 focus:ring-primary/40 focus:border-primary transition-ultra font-medium"
                >
                  <option value="">Select range</option>
                  <option value="1M-5M">$1M - $5M</option>
                  <option value="5M-10M">$5M - $10M</option>
                  <option value="10M-25M">$10M - $25M</option>
                  <option value="25M-50M">$25M - $50M</option>
                  <option value="50M+">$50M+</option>
                </select>
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold text-foreground tracking-wide uppercase">
                Investment Objectives & Experience *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 bg-surface-subtle/50 border border-border-subtle rounded-luxury focus:ring-2 focus:ring-primary/40 focus:border-primary transition-ultra font-medium resize-vertical"
                placeholder="Describe your investment experience, objectives, and interest in our exclusive opportunities..."
              />
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full shadow-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-3"></div>
                    PROCESSING APPLICATION...
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-5 w-5 mr-3" />
                    SUBMIT CONFIDENTIAL APPLICATION
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Alternative contact methods */}
          <div className="mt-12 pt-8 border-t border-border-subtle">
            <div className="text-center space-y-6">
              <h4 className="font-semibold text-text-secondary text-sm tracking-wide uppercase">
                Alternative Contact Methods
              </h4>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="mailto:exclusive@apexcapital.com"
                  className="inline-flex items-center text-primary hover:text-accent-gold font-medium transition-ultra"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  exclusive@apexcapital.com
                </a>
                
                <div className="text-text-subtle">•</div>
                
                <a 
                  href="tel:+1-555-APEX-001"
                  className="inline-flex items-center text-primary hover:text-accent-gold font-medium transition-ultra"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) APEX-001
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;