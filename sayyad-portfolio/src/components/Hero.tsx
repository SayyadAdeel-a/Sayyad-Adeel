import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GitHubIcon, InstagramIcon } from "@/components/Icons";
import { MagneticWrapper } from "./ui/MagneticWrapper";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-12 overflow-hidden bg-black selection:bg-accent selection:text-white">
      {/* Background Text Overlay - Asymmetric Variance 8 */}
      <div className="absolute top-20 -left-10 select-none pointer-events-none opacity-[0.02] transform -rotate-12">
        <span className="text-[20vw] font-black tracking-tighter leading-none">ORCHESTRATOR</span>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-[1400px] mx-auto px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          
          {/* Main Content Area */}
          <div className="space-y-12">
            <motion.div 
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <div className="w-12 h-[1px] bg-accent" />
              <span className="label-text tracking-[0.5em] text-[10px] text-accent font-bold">SAYYAD ADEEL</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-text-display leading-[0.9] tracking-tighter"
                variants={itemVariants}
              >
                Architecting <br />
                <span className="text-text-secondary italic">Digital</span> Solutions.
              </motion.h1>
              
              <motion.p 
                className="max-w-[55ch] text-lg md:text-xl text-text-secondary leading-relaxed font-sans pt-4"
                variants={itemVariants}
              >
                Bridging the gap between raw concept and high-fidelity deployment. 
                I orchestrate <span className="text-text-primary">AI Agents</span> and <span className="text-text-primary">Modern Web Stacks</span> to ship production-grade SaaS products.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-8 pt-6"
              variants={itemVariants}
            >
              <MagneticWrapper strength={0.3}>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative flex items-center justify-center gap-4 bg-text-display px-12 py-5 text-[10px] font-mono font-black text-black transition-all hover:bg-white active:scale-95"
                >
                  VIEW PROJECTS
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </MagneticWrapper>

              <div className="flex items-center gap-10">
                {[
                  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com/buildwithsayyad" },
                  { name: "GitHub", icon: GitHubIcon, href: "https://github.com/SayyadAdeel-a" },
                  { name: "Email", icon: Mail, href: "mailto:adeelsayyad.a@gmail.com" },
                ].map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank" 
                    className="text-text-secondary hover:text-accent transition-all group"
                  >
                    <link.icon className="w-5 h-5 transition-transform group-hover:scale-125" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Asymmetric Side Asset - The "Floating Orb" */}
          <motion.div 
            className="hidden lg:flex justify-end items-center"
            variants={itemVariants}
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Central Orb with Liquid Glass Materiality */}
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
              <motion.div 
                className="absolute inset-10 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Internal Moving Mesh - Perpetual Motion */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] animate-pulse" />
                <div className="absolute inset-0 dot-grid-subtle opacity-10" />
                
                {/* Animated Scanline */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-accent/20 animate-[scanline_4s_linear_infinite]" />
              </motion.div>

              {/* Orbiting Elements - Asymmetric Density */}
              <motion.div 
                className="absolute -top-4 right-10 p-4 border border-white/10 bg-white/[0.05] backdrop-blur-xl text-[8px] font-mono tracking-widest text-accent uppercase"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                ORCHESTRATING_AI
              </motion.div>

              <motion.div 
                className="absolute -bottom-8 -left-4 p-6 border border-white/10 bg-white/[0.05] backdrop-blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-text-display">NEXT.JS 15</span>
                  <div className="w-12 h-[2px] bg-accent" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 right-10 flex flex-col items-center gap-4 opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="label-text text-[8px] vertical-text transform rotate-180">SCROLL</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
