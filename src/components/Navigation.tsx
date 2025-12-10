import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

interface NavigationProps {
  onAccessClick?: () => void;
}

const Navigation = ({ onAccessClick }: NavigationProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Experience", href: "#experience" },
    { label: "Access", href: "#access" },
    { label: "Trust", href: "#trust" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white border-b border-border py-2 px-4 text-center">
        <p className="text-xs md:text-sm font-body tracking-widest text-foreground">
          ADMISSION IS SELECTIVE
        </p>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-lg" : ""} border-b border-border`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }} className="flex items-center">
              <img 
                src={logoLight} 
                alt="Alpine Capital Partners" 
                className="h-8 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 font-body text-sm tracking-wider group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button 
                onClick={onAccessClick}
                size="sm" 
                className="bg-primary hover:bg-primary/90 font-body tracking-wider text-white"
              >
                Request Access
              </Button>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors font-body tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button 
                  onClick={() => { setIsMobileMenuOpen(false); onAccessClick?.(); }}
                  className="w-full bg-primary hover:bg-primary/90 font-body tracking-wider text-white"
                >
                  Request Access
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
