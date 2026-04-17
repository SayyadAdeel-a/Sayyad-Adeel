import * as React from "react";
import { motion, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Journey", href: "#journey", icon: Briefcase },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants: Variants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants: Variants = {
  expanded: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -25, rotate: -180, transition: { duration: 0.3 } },
};

const itemVariants: Variants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants: Variants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    }
  },
}

export default function NavigationMenu() {
  const [isExpanded, setExpanded] = React.useState(true);
  
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest; 
    } 
    else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }
    
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    if (href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl h-12 px-2 transition-colors",
          !isExpanded && "cursor-pointer justify-center px-0"
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center font-bold px-4"
        >
          <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-zinc-950 text-xs">S</div>
        </motion.div>
        
        <motion.div
          className={cn(
            "flex items-center gap-1 sm:gap-2 pr-2",
            !isExpanded && "pointer-events-none hidden"
          )}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => {
                e.stopPropagation();
                scrollToSection(e, item.href);
              }}
              className="group flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-all px-3 py-1.5 rounded-full hover:bg-white/10 active:bg-white/15 uppercase tracking-widest relative overflow-hidden"
              style={{
                boxShadow: "0 0 0px rgba(0, 255, 200, 0)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 200, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0px rgba(0, 255, 200, 0)";
              }}
            >
              <item.icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{item.name}</span>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-5 w-5 text-white" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
