"use client";
import * as React from "react";
import { motion, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
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
      y: { type: "spring", damping: 20, stiffness: 300 },
      opacity: { duration: 0.3 },
      staggerChildren: 0.05,
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
    },
  },
};

const logoVariants: Variants = {
  expanded: { opacity: 1, x: 0, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -25, transition: { duration: 0.3 } },
};

const itemVariants: Variants = {
  expanded: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } },
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
      delay: 0.1,
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
    
    if (isExpanded && latest > previous && latest > 100) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest; 
    } 
    else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }
    
    lastScrollY.current = latest;
  });

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
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100]">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        onClick={() => !isExpanded && setExpanded(true)}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-white/10 bg-zinc-950/50 backdrop-blur-2xl h-14 transition-all relative group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]",
          !isExpanded && "cursor-pointer justify-center px-0 w-14"
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center pl-5 pr-2"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-text-display font-display font-black text-xs border border-white/10 bg-zinc-900/50">
            S
          </div>
        </motion.div>
        
        <motion.div
          className={cn(
            "flex items-center gap-1 pr-4 pl-2",
            !isExpanded && "hidden"
          )}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={itemVariants}
              onClick={(e) => scrollToSection(e, item)}
              className={cn(
                "group/item flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-all px-5 py-2.5 rounded-full relative z-10",
                activeTab === item.name ? "text-text-display" : "text-text-secondary hover:text-text-display"
              )}
            >
              {activeTab === item.name && (
                <motion.div 
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-white/10"
                  transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                />
              )}
              <item.icon className={cn("w-3.5 h-3.5 transition-colors", activeTab === item.name ? "text-accent" : "group-hover/item:text-text-display")} />
              <span className="hidden sm:inline">{item.name}</span>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-5 w-5 text-text-display" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
