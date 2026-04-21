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
          className="fixed bottom-8 right-8 z-50 perspective-[1000px]"
        >
          <a href="#contact" className="group">
            <div 
              className="flex items-center gap-3 pl-5 pr-2 py-2 font-mono font-bold text-sm bg-black border border-border-visible hover:bg-text-display transition-all active:scale-95"
            >
              <span className="text-text-primary group-hover:text-black transition-colors uppercase tracking-widest text-[10px]">Hire a Builder</span>
              <div className="bg-text-display text-black p-2 border border-black group-hover:bg-black group-hover:text-text-display group-hover:border-text-display transition-all">
                <ArrowRight size={16} />
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
