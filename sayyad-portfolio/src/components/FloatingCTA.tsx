import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

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
          initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
          className="fixed bottom-10 right-8 sm:right-12 z-[100]"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center gap-6 bg-white text-black pl-10 pr-3 py-3 rounded-full font-heading font-extrabold text-[10px] uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_80px_rgba(0,255,255,0.6)] transition-all duration-700 hover:scale-110 active:scale-95 italic overflow-hidden"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/10 via-white to-ai-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex items-center gap-3 relative z-10">
              <Zap size={16} className="text-ai-cyan animate-pulse fill-ai-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,1)] transition-all" />
              <span>Launch Project</span>
            </div>

            <div className="bg-black text-white p-4 rounded-full group-hover:bg-ai-cyan group-hover:text-black transition-all duration-700 shadow-xl group-hover:rotate-[360deg] relative z-10">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
            
            {/* Pulsing Outer Glow */}
            <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-magenta opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-700 -z-10 animate-spin-slow" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
