import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50 perspective-3d"
        >
          <a href="#contact" className="group">
            <GlassCard 
              className="flex items-center gap-3 pl-5 pr-2 py-2"
              opacity="med"
              blur="lg"
              with3D={true}
            >
              <div className="flex items-center gap-2">
                <Zap size={10} className="text-accent animate-pulse shadow-[0_0_8px_rgba(215,25,33,0.5)]" />
                <span className="text-text-primary group-hover:text-text-display transition-colors uppercase tracking-widest text-[10px] font-mono font-bold">Work With Me</span>
              </div>
              <div className="bg-text-display text-black p-2 rounded-full group-hover:bg-white transition-all">
                <ArrowRight size={16} />
              </div>
              
              {/* Internal scanning line */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity animate-[scanline_2s_linear_infinite]" />
            </GlassCard>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
