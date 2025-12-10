import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface PhilosophyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number?: string;
}

export const PhilosophyCard = ({ icon: Icon, title, description, number }: PhilosophyCardProps) => {
  return (
    <motion.div 
      className="group relative p-5 sm:p-6 md:p-8 border border-border bg-card backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:-translate-y-2 hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        {number && (
          <div className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center border border-border bg-background text-xs text-muted-foreground font-heading">
            {number}
          </div>
        )}
        
        <div className="relative mb-4 inline-block">
          <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="w-8 h-8 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-lg sm:text-xl font-heading text-foreground mb-2 sm:mb-3 tracking-wide group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
