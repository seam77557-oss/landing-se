import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  attribution: string;
  rating?: number;
  clientType?: string;
}

export const TestimonialCard = ({ quote, attribution, rating = 5, clientType }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="p-8 border border-border bg-card rounded-lg hover:border-primary/30 transition-all duration-300 relative"
      whileHover={{ y: -4 }}
    >
      {/* Large decorative quote mark */}
      <div className="text-primary text-7xl font-heading leading-none absolute top-4 left-4 opacity-20">
        "
      </div>
      
      <div className="relative pt-8">
        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-foreground text-base leading-relaxed mb-6 italic">
          {quote}
        </p>
        
        {/* Attribution */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <p className="text-muted-foreground text-sm font-medium tracking-wide">
            {attribution}
          </p>
          
          {clientType && (
            <span className="text-xs text-muted-foreground tracking-wider">
              {clientType}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
