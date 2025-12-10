import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  timeline?: string;
}

export const ProcessStep = ({ number, title, description, icon: Icon, timeline }: ProcessStepProps) => {
  return (
    <motion.div 
      className="relative bg-card border border-border rounded-lg p-5 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group h-full"
      whileHover={{ y: -4 }}
    >
      {/* Step Number Badge */}
      <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 bg-primary text-primary-foreground w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-heading text-lg sm:text-xl font-bold shadow-lg">
        {number}
      </div>
      
      {/* Icon */}
      {Icon && (
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 mt-3 sm:mt-4 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
        </div>
      )}
      
      {/* Title */}
      <h4 className="text-lg sm:text-xl font-heading text-foreground tracking-wide text-center mb-2 sm:mb-3">
        {title}
      </h4>
      
      {/* Timeline Badge */}
      {timeline && (
        <div className="flex justify-center mb-3 sm:mb-4">
          <span className="text-[10px] sm:text-xs text-primary tracking-wider bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 border border-primary/20 rounded-full">
            {timeline}
          </span>
        </div>
      )}
      
      {/* Description */}
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed text-center">
        {description}
      </p>
    </motion.div>
  );
};
