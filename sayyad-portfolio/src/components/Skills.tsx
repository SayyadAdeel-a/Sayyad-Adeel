import { Code2, Server, Bot, Terminal, Cpu, Zap, Activity, HardDrive, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

const skillCategories = [
  {
    name: "AI AGENTS",
    icon: Bot,
    code: "0x_AGENT_STACK",
    load: 94,
    status: "READY",
    skills: ["CLAUDE_CODE", "COPILOT", "GEMINI_PRO", "CURSOR_AI"]
  },
  {
    name: "FRONTEND CORE",
    icon: Code2,
    code: "0x_FRONT_DEPL",
    load: 88,
    status: "OPTIMIZED",
    skills: ["REACT_JS", "NEXT_JS", "FLUTTER", "TYPESCRIPT"]
  },
  {
    name: "BACKEND LOGIC",
    icon: Server,
    code: "0x_BACK_DEPL",
    load: 72,
    status: "STABLE",
    skills: ["SUPABASE", "NODE_JS", "EDGE_FUNCTIONS", "POSTGRES"]
  },
  {
    name: "ORCHESTRATION",
    icon: Cpu,
    code: "0x_SYS_ARCH",
    load: 91,
    status: "CRITICAL",
    skills: ["PROMPT_ENG", "GIT_HUB", "VERCEL", "AUTOMATION"]
  }
];

export default function Skills() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="skills" className="py-32 bg-black border-b border-border-visible relative overflow-hidden" ref={triggerRef}>
      {/* Decorative side indicators */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-20 hidden xl:flex">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-1 h-12 bg-border-visible" />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-4 py-1.5 px-3 border border-border-visible bg-surface/50"
            >
              <Terminal className="w-4 h-4 text-accent" />
              <span className="label-text text-[10px] tracking-[0.3em]">COMMAND_CENTER / SKILL_SET</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl sm:text-6xl font-display font-bold tracking-tighter text-text-display uppercase glow-text leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Agent <span className="text-text-secondary opacity-30">&</span> Logic <br />
              Orchestration
            </motion.h2>
          </div>

          <motion.div 
            className="flex flex-col items-end gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <div className="flex items-center gap-4 px-4 py-2 border border-border-visible bg-surface/30">
              <Activity size={14} className="text-success" />
              <span className="font-mono text-[10px] text-text-secondary">SYSTEM_LOAD: 74.2%</span>
            </div>
            <span className="font-mono text-[8px] text-text-disabled uppercase">Kernel_Version: 6.4.12-AG</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Bottom Technical Bar */}
        <div className="mt-20 pt-8 border-t border-border-visible/50 flex flex-wrap gap-12 justify-center opacity-40">
          <div className="flex items-center gap-3">
            <Zap size={14} />
            <span className="label-text text-[9px]">High Throughput</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield size={14} />
            <span className="label-text text-[9px]">End-to-End Encryption</span>
          </div>
          <div className="flex items-center gap-3">
            <HardDrive size={14} />
            <span className="label-text text-[9px]">Edge Optimized</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function SkillCard({ category, index, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
      className="h-full"
    >
      <div 
        className="group p-8 card-surface h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:ring-1 hover:ring-text-display/20"
      >
        {/* Module Header */}
        <div className="flex justify-between items-start mb-10">
          <div className="w-14 h-14 bg-black border border-border-visible flex items-center justify-center group-hover:border-text-display transition-all duration-500 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]">
            <category.icon className="w-6 h-6 text-text-display group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-right">
            <span className="font-mono text-[9px] text-text-disabled tracking-[0.2em] block mb-1">{category.code}</span>
            <span className={`font-mono text-[8px] px-2 py-0.5 border ${category.status === 'CRITICAL' ? 'border-accent/40 text-accent' : 'border-success/40 text-success'} bg-black`}>
              {category.status}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-display font-bold text-text-display mb-8 uppercase tracking-tighter group-hover:translate-x-2 transition-transform">
          {category.name}
        </h3>
        
        {/* Load Indicator */}
        <div className="mb-8 space-y-2">
          <div className="flex justify-between items-end">
            <span className="label-text text-[8px] opacity-50">USAGE_CAPACITY</span>
            <span className="font-mono text-[10px] text-text-display">{category.load}%</span>
          </div>
          <div className="h-1.5 w-full bg-border-visible/30 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={isInView ? { width: `${category.load}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
              className={`h-full ${category.status === 'CRITICAL' ? 'bg-accent' : 'bg-text-display'}`}
            />
          </div>
        </div>
        
        {/* Skill List */}
        <div className="grid grid-cols-1 gap-4 mt-auto">
          {category.skills.map((skill: string, sIndex: number) => (
            <div key={sIndex} className="flex items-center justify-between group/item">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-border-visible group-hover/item:bg-text-display transition-colors" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary group-hover/item:text-text-display transition-colors">
                  {skill}
                </span>
              </div>
              <span className="font-mono text-[8px] opacity-0 group-hover/item:opacity-30 transition-opacity">OK</span>
            </div>
          ))}
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
          <category.icon size={120} strokeWidth={1} />
        </div>

        <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity" />
      </div>
    </motion.div>
  );
}
