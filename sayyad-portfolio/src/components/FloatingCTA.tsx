import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

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
          className="fixed bottom-8 right-8 z-50 perspective-[1000px]"
        >
          <a href="#contact" className="group">
            <GlassCard 
              opacity="high" 
              hoverEffect="scale"
              className="flex items-center gap-3 pl-5 pr-2 py-2 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all active:scale-95"
            >
              <span className="text-white group-hover:text-cyan-100 transition-colors">Hire a SaaS Builder</span>
              <div className="bg-white text-black p-2 rounded-full group-hover:bg-cyan-400 group-hover:scale-110 transition-all">
                <ArrowRight size={16} />
              </div>
            </GlassCard>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
