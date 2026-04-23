"use client";
import * as React from "react";
import { motion, useScroll, useMotionValueEvent, type Variants, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Menu, Zap } from "lucide-react";
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
    width: "3.5rem",
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
  const [activeTab, setActiveTab] = React.useState("Home");
  
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

  const scrollToSection = (e: React.MouseEvent, item: typeof navItems[0]) => {
    setActiveTab(item.name);
    if (item.href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    if (item.href.startsWith("#") && item.href.length > 1) {
      e.preventDefault();
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] perspective-3d">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.05 } : {}}
        whileTap={!isExpanded ? { scale: 0.98 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-border-visible/50 bg-black/40 backdrop-blur-xl h-14 transition-all relative group shadow-[0_0_40px_rgba(0,0,0,0.5)]",
          !isExpanded && "cursor-pointer justify-center px-0 w-14"
        )}
      >
        {/* Glow Border Effect */}
        <div className="absolute inset-[-1px] rounded-full bg-gradient-to-r from-transparent via-text-display/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center font-bold pl-5 pr-2"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-text-primary font-mono text-xs border border-border-visible bg-black/40 relative group-hover:border-accent/50 transition-colors overflow-hidden">
            <span className="relative z-10">S</span>
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
        
        <motion.div
          className={cn(
            "flex items-center gap-1 sm:gap-2 pr-4 pl-2 relative",
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
                scrollToSection(e, item);
              }}
              className={cn(
                "group/item flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] transition-all px-4 py-2 rounded-full relative z-10",
                activeTab === item.name ? "text-text-display" : "text-text-secondary hover:text-text-display"
              )}
            >
              {activeTab === item.name && (
                <motion.div 
                  layoutId="active-nav"
                  className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full -z-10 border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon className={cn("w-3.5 h-3.5", activeTab === item.name && "text-accent")} />
              <span className="hidden sm:inline">{item.name}</span>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            className="relative"
          >
            <Menu className="h-6 w-6 text-text-primary" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(215,25,33,0.8)]" />
          </motion.div>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 scanline opacity-5 pointer-events-none" />
      </motion.nav>

      {/* Floating Status Indicator */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute top-16 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-black/40 border border-border-visible rounded-full backdrop-blur-md pointer-events-none"
          >
            <Zap size={8} className="text-accent animate-pulse" />
            <span className="font-mono text-[8px] text-text-display tracking-widest uppercase">System_Minimized</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
