import { ArrowRight, Mail, Code2, Cpu, Activity, Zap } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { GitHubIcon, InstagramIcon } from "@/components/Icons";
import { GlassCard } from "./GlassCard";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start justify-center gap-1">
    <span className="font-display text-4xl sm:text-5xl text-text-display leading-none glow-text">{value}</span>
    <span className="label-text">{label}</span>
  </div>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export default function HeroSection() {
  return (
    <div className="relative w-full bg-black text-text-primary overflow-hidden font-sans min-h-screen flex items-center pt-24 pb-12 border-b border-border-visible perspective-3d">
      {/* Dot grid background with parallax-ready depth */}
      <div className="absolute inset-0 dot-grid-subtle opacity-30 pointer-events-none" />
      
      {/* Dynamic Background Accents (Spec Section 6.1) */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-interactive/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Rotating Accent Shapes (Spec Section 6.1) */}
      <motion.div 
        className="absolute top-1/3 left-10 hidden xl:block opacity-20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Zap className="w-12 h-12 text-accent" />
      </motion.div>
      
      {/* Background technical metadata */}
      <div className="absolute top-24 left-8 opacity-20 pointer-events-none select-none hidden lg:block">
        <div className="font-mono text-[8px] text-text-secondary leading-relaxed tracking-widest">
          NODE_LATENCY: 24ms<br />
          PK_UPTIME: 99.98%<br />
          AUTH_LEVEL: ROOT<br />
          ENCRYPTION: AES-256
        </div>
      </div>

      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
            
            <motion.div 
              className="inline-flex items-center gap-3 px-0"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-accent rounded-none shadow-[0_0_10px_rgba(215,25,33,0.8)] animate-pulse" />
              <span className="label-text tracking-[0.2em] glow-text-red">AI-NATIVE PRODUCT BUILDER</span>
              <div className="h-px w-12 bg-border-visible ml-2" />
              <span className="font-mono text-[8px] text-text-disabled">VER_0.4.2</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                className="font-dot text-[64px] sm:text-[90px] lg:text-[130px] text-text-display leading-[0.8] tracking-[-0.05em] uppercase glow-text"
                variants={itemVariants}
              >
                Architect <br />
                <span className="text-text-secondary outline-text-white bg-clip-text">With AI.</span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="h-px flex-grow bg-border-visible" />
                <span className="label-text opacity-40">SY_DATA_STREAM_ENABLED</span>
              </motion.div>
            </div>

            <motion.p 
              className="max-w-xl text-lg text-text-secondary leading-relaxed font-sans border-l-2 border-border-visible pl-6 py-2"
              variants={itemVariants}
            >
              I don't just write code; I orchestrate Claude Code, Copilot, and Gemini to ship scalable SaaS products at lightspeed. From concept to deployment, I solve complex problems using AI-first workflows.
            </motion.p>

            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center justify-center gap-2 border border-text-display bg-text-display px-8 py-4 text-sm font-mono font-bold text-black transition-all hover:bg-black hover:text-text-display"
                >
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-black border border-white" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black border border-white" />
                  VIEW PROJECTS
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center justify-center gap-2 border border-border-visible bg-black px-8 py-4 text-sm font-mono font-bold text-text-primary transition-colors hover:bg-surface"
                >
                  CONTACT ME
                </button>
              </div>

              {/* Social Link Mini-Icons */}
              <div className="flex items-center gap-8 pt-4 border-t border-border-visible">
                <a href="https://instagram.com/buildwithsayyad" target="_blank" className="text-text-secondary hover:text-text-display transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest group">
                  <InstagramIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="hidden sm:inline">Instagram</span>
                  <span className="sm:hidden">IG</span>
                </a>
                <a href="https://github.com/SayyadAdeel-a" target="_blank" className="text-text-secondary hover:text-text-display transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest group">
                  <GitHubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="hidden sm:inline">GitHub</span>
                  <span className="sm:hidden">GH</span>
                </a>
                <a href="mailto:adeelsayyad.a@gmail.com" className="text-text-secondary hover:text-text-display transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest group">
                  <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="hidden sm:inline">Email</span>
                  <span className="sm:hidden">EM</span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard 
              className="p-8 scanline"
              with3D={true}
              opacity="high"
              blur="lg"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[2px] h-8 bg-text-display shadow-[0_0_10px_white]" />
                <div className="absolute top-0 right-0 w-8 h-[2px] bg-text-display shadow-[0_0_10px_white]" />
              </div>

              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black/40 border border-border-visible backdrop-blur-sm">
                    <Activity className="h-5 w-5 text-text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="label-text text-[8px]">CORE_ENGINE_STATE</span>
                    <span className="text-xs font-mono text-text-display">NOMINAL</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="label-text">STATUS: ACTIVE</span>
                  <span className="text-[10px] font-mono text-success mt-1 animate-pulse">● SYSTEMS_OPTIMIZED</span>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <StatItem value="08+" label="Products Shipped" />
                  <div className="text-right">
                    <span className="label-text text-[8px]">SUCCESS_RATE</span>
                    <div className="text-xs font-mono text-text-display">100%</div>
                  </div>
                </div>
                
                <div className="h-px w-full bg-border-visible relative">
                  <div className="absolute top-0 right-0 h-px w-12 bg-text-display shadow-[0_0_10px_white]" />
                </div>
                
                <div className="flex justify-between items-end">
                  <StatItem value="12M" label="Months Shipping" />
                  <div className="text-right">
                    <span className="label-text text-[8px]">ACTIVE_NODES</span>
                    <div className="text-xs font-mono text-text-display">04</div>
                  </div>
                </div>

                <div className="h-px w-full bg-border-visible relative">
                  <div className="absolute top-0 left-0 h-px w-24 bg-text-display shadow-[0_0_10px_white]" />
                </div>
                
                <div className="flex items-center gap-4">
                  <StatItem value="AI" label="Stack Priority" />
                  <div className="flex-grow flex gap-1 h-1 bg-border-visible mt-6 overflow-hidden">
                    <div className="w-1/3 bg-text-display shadow-[0_0_10px_white]" />
                    <div className="w-1/4 bg-text-secondary" />
                    <div className="w-1/6 bg-accent shadow-[0_0_10px_rgba(215,25,33,0.5)]" />
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 border border-border-visible bg-black/40 px-3 py-1 label-text backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 bg-success rounded-none shadow-[0_0_10px_#4A9E5C] animate-pulse" />
                  AVAILABLE_FOR_HIRE
                </div>
                <div className="inline-flex items-center gap-2 border border-border-visible bg-black/40 px-3 py-1 label-text backdrop-blur-sm">
                  <Cpu className="w-3 h-3 text-interactive" />
                  NEURAL_ENGINE_V2
                </div>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="p-6 overflow-hidden relative group"
              with3D={true}
              opacity="med"
              blur="md"
            >
              <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Code2 className="w-48 h-48 text-text-display" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="label-text text-text-display">[ TECH_STACK.json ]</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-border-visible" />
                  <div className="w-1.5 h-1.5 rounded-full bg-border-visible" />
                  <div className="w-1.5 h-1.5 rounded-full bg-border-visible" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  { k: "runtime", v: "NEXT.JS" },
                  { k: "logic", v: "TYPESCRIPT" },
                  { k: "styles", v: "TAILWIND" },
                  { k: "neural", v: "OPENAI" },
                  { k: "storage", v: "SUPABASE" },
                  { k: "deploy", v: "VERCEL" },
                ].map(item => (
                  <div key={item.k} className="flex justify-between items-center py-1 border-b border-border/50 group-hover:border-border-visible transition-colors">
                    <span className="font-mono text-[9px] text-text-disabled uppercase">{item.k}</span>
                    <span className="font-mono text-[9px] text-text-primary font-bold">{item.v}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="label-text text-[8px]">SCROLL_TO_DESCEND</span>
        <div className="w-px h-12 bg-gradient-to-b from-text-display to-transparent" />
      </div>
    </div>
  );
}
