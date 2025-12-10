import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Award, Lock, ChevronDown } from "lucide-react";
import heroLuxuryOffice from "../assets/hero-luxury-office.jpg";
import heroSwissAlps from "../assets/hero-swiss-alps.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroLuxuryOffice, heroSwissAlps];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const trustIndicators = [
    { icon: Shield, text: "FINMA Regulated" },
    { icon: Award, text: "ISO 27001" },
    { icon: Lock, text: "Swiss Jurisdiction" }
  ];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1.1 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt={`Swiss Banking ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-corporate-navy/95 via-corporate-dark/85 to-corporate-navy/90" />
        
        {/* Animated Mesh Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(230, 0, 38, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(230, 0, 38, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Glassmorphic Border Frame */}
        <div className="absolute inset-8 border border-white/10 backdrop-blur-sm pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-2 border border-white/20 bg-white/5 backdrop-blur-md rounded-sm">
              <span className="text-white/90 text-xs md:text-sm font-body tracking-widest uppercase flex items-center gap-2">
                <Lock className="w-3 h-3" />
                Est. Swiss Banking Tradition
              </span>
            </div>
          </motion.div>

          {/* Main Heading with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-4 sm:mb-6 tracking-tighter">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="block"
              >
                SWISS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="block bg-gradient-to-r from-swiss-red via-swiss-red-light to-swiss-red bg-clip-text text-transparent"
              >
                ENIGMA
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-10"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-heading tracking-wide mb-3 sm:mb-4">
              L E G A C Y
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/75 font-body tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
              Selective access to generations of Swiss banking excellence. Uncompromising discretion 
              for those who value tradition, precision, and absolute privacy.
            </p>
          </motion.div>

          {/* CTAs with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-4"
          >
            <Button
              size="lg"
              className="group rounded-sm bg-swiss-red hover:bg-swiss-red-dark font-body tracking-corporate px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,0,38,0.5)] w-full sm:w-auto"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Request Access
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-swiss-red-light to-swiss-red"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            
            <Button
              size="lg"
              variant="transparent"
              className="rounded-sm font-body tracking-corporate px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
            >
              View Credentials
            </Button>
          </motion.div>

          {/* Trust Indicators with Stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4"
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 sm:gap-3 text-white/80 bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm border border-white/10 cursor-default"
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs md:text-sm font-body tracking-corporate uppercase">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/60" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;
