import { ArrowRight, Mail, Code2, Activity, Zap, Terminal } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { GitHubIcon, InstagramIcon } from "@/components/Icons";
import { GlassCard } from "./GlassCard";
import { MagneticWrapper } from "./MagneticWrapper";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start justify-center gap-1 group/stat">
    <span className="font-display text-4xl sm:text-5xl text-text-display leading-none group-hover:glow-text transition-all duration-500">{value}</span>
    <span className="label-text group-hover:text-text-display transition-colors">{label}</span>
  </div>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.8
    },
  },
};

export default function HeroSection() {
  return (
    <div className="relative w-full bg-black text-text-primary overflow-hidden font-sans min-h-[100dvh] flex items-center pt-24 pb-12 border-b border-border-visible perspective-3d">
      {/* Background patterns strictly fixed for performance */}
      <div className="fixed inset-0 dot-grid-subtle opacity-20 pointer-events-none z-0" />
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 -right-24 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[140px] pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-interactive/5 rounded-full blur-[120px] pointer-events-none opacity-40" />

      {/* Rotating Accent Shapes */}
      <motion.div 
        className="absolute top-1/3 left-12 hidden xl:block opacity-20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Zap className="w-10 h-10 text-accent" />
      </motion.div>
      
      {/* Background technical metadata */}
      <div className="absolute top-32 left-10 opacity-30 pointer-events-none select-none hidden 2xl:block">
        <div className="font-mono text-[9px] text-text-secondary leading-loose tracking-[0.3em] uppercase">
          [ NODE_LATENCY: 24ms ]<br />
          [ PK_UPTIME: 99.98% ]<br />
          [ AUTH_LEVEL: ROOT_S ]<br />
          [ ENCRYPTION: AES256 ]
        </div>
      </div>

      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Asymmetric 8-column layout variant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Main Content: Offset to the left */}
          <div className="lg:col-span-7 space-y-16 pt-8">
            
            <motion.div 
              className="inline-flex items-center gap-4 py-1.5 px-3 border border-border-visible bg-surface/40 backdrop-blur-md"
              variants={itemVariants}
            >
              <div className="w-1.5 h-1.5 bg-accent rounded-none shadow-[0_0_12px_rgba(215,25,33,1)] animate-pulse" />
              <span className="label-text tracking-[0.4em] text-[9px]">AI-NATIVE_ORCHESTRATOR</span>
              <div className="h-px w-8 bg-border-visible" />
              <span className="font-mono text-[8px] text-text-disabled opacity-60">BUILD_V4.2</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                className="font-dot text-[64px] sm:text-[90px] lg:text-[140px] text-text-display leading-[0.75] tracking-[-0.06em] uppercase glow-text"
                variants={itemVariants}
              >
                Architect <br />
                <span className="text-text-secondary outline-text-white bg-clip-text italic opacity-80">With AI.</span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center gap-6"
                variants={itemVariants}
              >
                <div className="h-px w-24 bg-accent shadow-[0_0_8px_rgba(215,25,33,0.4)]" />
                <span className="label-text opacity-40 text-[8px] tracking-[0.5em]">SYSTEM_DATA_STREAM_ACTIVE</span>
              </motion.div>
            </div>

            <motion.div 
              className="max-w-xl space-y-8"
              variants={itemVariants}
            >
              <p className="text-xl text-text-secondary leading-relaxed font-sans border-l border-border-visible pl-8 py-1">
                I don't just write code; I orchestrate <span className="text-text-primary">Claude Code</span>, <span className="text-text-primary">Copilot</span>, and <span className="text-text-primary">Gemini</span> to ship high-fidelity SaaS products. Engineering the gap between raw concept and industrial-grade deployment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <MagneticWrapper strength={0.3}>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-text-display px-10 py-5 text-xs font-mono font-black text-black transition-all hover:bg-white active:scale-95"
                  >
                    {/* Industrial accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/20" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/20" />
                    
                    INITIALIZE_PROJECTS
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </button>
                </MagneticWrapper>
                
                <MagneticWrapper strength={0.2}>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 border border-border-visible bg-black px-10 py-5 text-xs font-mono font-black text-text-primary transition-all hover:border-text-display hover:bg-surface/50 active:scale-95"
                  >
                    ESTABLISH_LINK
                  </button>
                </MagneticWrapper>
              </div>
            </motion.div>

            {/* Network nodes */}
            <motion.div 
              className="flex items-center gap-10 pt-8 border-t border-border-visible/50"
              variants={itemVariants}
            >
              {[
                { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com/buildwithsayyad" },
                { name: "GitHub", icon: GitHubIcon, href: "https://github.com/SayyadAdeel-a" },
                { name: "Email", icon: Mail, href: "mailto:adeelsayyad.a@gmail.com" },
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  className="text-text-secondary hover:text-text-display transition-all flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] group"
                >
                  <link.icon className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:text-accent" />
                  <span className="hidden md:inline group-hover:translate-x-1 transition-transform">{link.name}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Side Module: Offset and High Density */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:pt-20">
            <GlassCard 
              className="p-10 scanline border-accent/10"
              with3D={true}
              opacity="high"
              blur="lg"
            >
              {/* Corner metadata */}
              <div className="absolute top-4 right-4 font-mono text-[7px] text-text-disabled opacity-40 text-right uppercase">
                module_id: 0x9f_trust<br />
                sub_system: metric_v4
              </div>

              <div className="flex justify-between items-start mb-14">
                <div className="flex items-center gap-5">
                  <div className="p-3.5 bg-black/40 border border-border-visible backdrop-blur-sm relative group-hover:border-accent/40 transition-colors">
                    <Activity className="h-5 w-5 text-text-primary group-hover:text-accent transition-colors" />
                    <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-accent opacity-40" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-accent opacity-40" />
                  </div>
                  <div className="flex flex-col">
                    <span className="label-text text-[8px] opacity-50">CORE_LOGIC_STATE</span>
                    <span className="text-xs font-mono text-text-display tracking-widest uppercase">STABLE_O1</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse shadow-[0_0_8px_rgba(74,158,92,0.8)]" />
                    <span className="label-text text-[9px] text-success">ONLINE</span>
                  </div>
                  <span className="text-[7px] font-mono text-text-disabled mt-2 tracking-[0.2em]">LOAD: 14.2%</span>
                </div>
              </div>
              
              <div className="space-y-10">
                <div className="flex justify-between items-end">
                  <StatItem value="08+" label="Artifacts_Deployed" />
                  <div className="text-right space-y-1">
                    <span className="label-text text-[7px] opacity-40">Uptime_Rating</span>
                    <div className="text-sm font-mono text-success font-bold">100.0%</div>
                  </div>
                </div>
                
                <div className="h-[2px] w-full bg-border-visible relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-accent/30 to-transparent" 
                  />
                </div>
                
                <div className="flex justify-between items-end">
                  <StatItem value="12M" label="Months_Operating" />
                  <div className="text-right space-y-1">
                    <span className="label-text text-[7px] opacity-40">Efficiency_Grade</span>
                    <div className="text-sm font-mono text-text-display">A++</div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <span className="label-text text-[8px] opacity-40">SYSTEM_RESOURCE_ALLOCATION</span>
                    <span className="font-mono text-[9px] text-text-secondary">OPTIMIZED</span>
                  </div>
                  <div className="flex gap-1 h-1.5 w-full bg-border-visible/20">
                    <div className="w-1/2 bg-text-display shadow-[0_0_10px_white]" />
                    <div className="w-1/4 bg-text-secondary/40" />
                    <div className="w-1/8 bg-accent/60 shadow-[0_0_10px_rgba(215,25,33,0.4)]" />
                    <div className="flex-grow bg-white/5" />
                  </div>
                </div>
              </div>

              <div className="mt-14 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 border border-border-visible bg-black/40 px-4 py-2 label-text backdrop-blur-sm text-[8px] tracking-[0.3em]">
                  <Terminal size={12} className="text-accent" />
                  READY_FOR_TRANSMISSION
                </div>
                <div className="flex items-center gap-3 border border-border-visible bg-black/40 px-4 py-2 label-text backdrop-blur-sm text-[8px] tracking-[0.3em]">
                  <Shield size={12} className="text-interactive" />
                  ROOT_AUTH_V4
                </div>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="p-8 overflow-hidden relative group"
              with3D={true}
              opacity="med"
              blur="md"
            >
              <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Code2 className="w-40 h-40 text-text-display" />
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-accent/20" />
                  <span className="label-text text-text-display tracking-[0.4em] text-[9px]">MODULE_DEPENDENCIES</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 bg-border-visible" />
                  <div className="w-1 h-1 bg-border-visible" />
                  <div className="w-1 h-1 bg-accent shadow-[0_0_5px_red]" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { k: "runtime", v: "NEXT.JS_15" },
                  { k: "logic", v: "TYPESCRIPT_5" },
                  { k: "neural", v: "OPEN_AI_4O" },
                  { k: "storage", v: "SUPABASE_V2" },
                  { k: "styles", v: "TAILWIND_V4" },
                  { k: "infra", v: "VERCEL_PRO" },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.k} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (idx * 0.1) }}
                    className="flex justify-between items-center py-1.5 border-b border-white/5 group-hover:border-border-visible transition-colors"
                  >
                    <span className="font-mono text-[8px] text-text-disabled uppercase tracking-widest">{item.k}</span>
                    <span className="font-mono text-[9px] text-text-primary font-black">{item.v}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>
      </motion.div>
      
      {/* Scroll indicator with physics */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="label-text text-[7px] tracking-[0.5em]">DESCEND_PROTOCOL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </div>
  );
}

function Shield({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
