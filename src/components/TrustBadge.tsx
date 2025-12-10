import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export const TrustBadge = ({ icon: Icon, title, subtitle }: TrustBadgeProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-8 border border-border bg-card rounded-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
      whileHover={{ y: -4 }}
    >
      {/* Icon Container */}
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
      </div>
      
      {/* Title */}
      <p className="text-foreground text-base font-medium tracking-wide mb-1">
        {title}
      </p>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-muted-foreground text-xs tracking-wide">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
