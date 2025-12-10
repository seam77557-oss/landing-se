import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ModernCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
  children?: ReactNode;
}

const ModernCard = ({ icon: Icon, title, description, delay = 0, className = "", children }: ModernCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative bg-white border border-corporate-border shadow-corporate-sm hover:shadow-corporate-hover transition-all duration-500 overflow-hidden ${className}`}
    >
      {/* Shimmer Effect on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-swiss-red/5 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative p-8">
        {Icon && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-12 h-12 text-swiss-red mb-6 group-hover:text-swiss-red-light transition-colors duration-300" strokeWidth={1.5} />
          </motion.div>
        )}
        
        <h3 className="font-heading text-2xl mb-4 text-foreground tracking-tight group-hover:text-swiss-red transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground font-body tracking-wide leading-relaxed">
          {description}
        </p>
        
        {children}
      </div>

      {/* Bottom Border Accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-swiss-red to-swiss-red-light"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ModernCard;
