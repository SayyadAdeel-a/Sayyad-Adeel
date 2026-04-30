import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
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
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-12 right-12 z-50"
        >
          <a href="#contact" className="group block">
            <GlassCard 
              className="flex items-center gap-6 pl-8 pr-3 py-3 rounded-full border-white/10"
              opacity="low"
              blur="lg"
              with3D={true}
              interactive={true}
            >
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-mono text-accent font-bold tracking-[0.4em] uppercase">Connect</span>
                <span className="text-sm font-display font-bold text-text-display">START PROJECT</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-text-display text-black flex items-center justify-center group-hover:bg-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </GlassCard>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
