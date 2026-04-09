import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-white text-black pl-5 pr-2 py-2 rounded-full font-bold text-sm shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95"
          >
            Hire a SaaS Builder
            <div className="bg-black text-white p-2 rounded-full group-hover:bg-zinc-800 transition-colors">
              <ArrowRight size={16} />
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
