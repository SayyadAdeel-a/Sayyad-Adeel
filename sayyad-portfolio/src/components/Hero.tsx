import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GitHubIcon, InstagramIcon } from "@/components/Icons";
import { MagneticWrapper } from "./ui/MagneticWrapper";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { stiffness: 100, damping: 30 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [30, -30]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, -30]), springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100dvh] flex items-center pt-20 pb-12 overflow-hidden bg-black perspective-container"
    >
      {/* Background Spatial Text */}
      <motion.div 
        style={{ x: useTransform(x, (v) => v * 1.5), y: useTransform(y, (v) => v * 1.5), rotateX: 20, rotateY: -10 }}
        className="absolute top-20 -left-10 select-none pointer-events-none opacity-[0.03] z-0"
      >
        <span className="text-[25vw] font-black tracking-tighter leading-none uppercase">ORCHESTRA</span>
      </motion.div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-24 items-center">
          
          {/* Main Content Area */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <div className="w-16 h-[2px] bg-accent" />
              <span className="text-[10px] font-mono text-accent font-bold tracking-[0.5em] uppercase">Sayyad Adeel</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                style={{ x, y, rotateX, rotateY }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-8xl lg:text-[10rem] font-display font-black text-text-display leading-[0.85] tracking-tighter uppercase drop-shadow-diffused"
              >
                Architecting <br />
                <span className="text-text-secondary italic">Digital</span> Solutions.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[50ch] text-xl md:text-2xl text-text-secondary leading-relaxed pt-8 border-l border-white/5 pl-10"
              >
                Bridging the gap between raw concept and high-fidelity deployment. 
                I orchestrate <span className="text-text-primary">AI Agents</span> and <span className="text-text-primary font-bold">Modern Stacks</span> to ship weightless SaaS products.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-12 pt-8"
            >
              <MagneticWrapper strength={0.3}>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative flex items-center justify-center gap-6 bg-text-display px-16 py-8 rounded-full text-[11px] font-mono font-black text-black transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-diffused"
                >
                  VIEW PROJECTS
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </button>
              </MagneticWrapper>

              <div className="flex items-center gap-12">
                {[
                  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com/buildwithsayyad" },
                  { name: "GitHub", icon: GitHubIcon, href: "https://github.com/SayyadAdeel-a" },
                  { name: "Email", icon: Mail, href: "mailto:adeelsayyad.a@gmail.com" },
                ].map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank" 
                    className="text-text-secondary hover:text-accent transition-all group p-2"
                  >
                    <link.icon className="w-6 h-6 transition-transform group-hover:scale-125" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Antigravity Side Asset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-end items-center perspective-container"
          >
            <div className="relative w-[500px] h-[500px] transform-style-3d">
              {/* Dynamic Aura */}
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-[140px] floating" />
              
              <motion.div 
                style={{ rotateX: useTransform(rotateX, (v) => v * -1.5), rotateY: useTransform(rotateY, (v) => v * -1.5) }}
                className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.01] backdrop-blur-3xl shadow-diffused overflow-hidden transform-style-3d"
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] floating" />
                <div className="absolute inset-0 dot-grid-subtle opacity-10" />
                
                {/* Internal Spatial Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-ping opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/20 rounded-full animate-pulse" />
              </motion.div>

              {/* Floating Meta-Labels */}
              <motion.div 
                className="absolute -top-10 -right-4 p-6 border border-white/10 bg-zinc-900/50 backdrop-blur-2xl rounded-2xl shadow-weightless"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[10px] font-mono font-black text-accent tracking-widest uppercase">SPATIAL_ORCHESTRATION</span>
              </motion.div>

              <motion.div 
                className="absolute -bottom-12 -left-10 p-8 border border-white/5 bg-zinc-900/80 backdrop-blur-3xl rounded-3xl shadow-diffused"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-mono font-black text-text-display uppercase tracking-widest">NEXT.JS 15</span>
                  <div className="w-16 h-[2px] bg-accent" />
                  <span className="text-[8px] font-mono text-text-disabled uppercase">Production Grade</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Weightless Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[9px] font-mono font-black text-accent tracking-[0.6em] uppercase">Scroll</span>
        <div className="w-[2px] h-24 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
