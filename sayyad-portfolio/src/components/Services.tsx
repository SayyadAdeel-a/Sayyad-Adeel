import { Bot, Zap, Layout, Cpu, Activity, Settings, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';

const services = [
  {
    title: "AI AGENT SYSTEMS",
    description: "Building autonomous AI-powered web and mobile apps using modern agent frameworks and advanced LLM orchestrations.",
    icon: Bot,
    code: "0x_AGENT_CORE",
    tech: ["CLAUDE_CODE", "GEMINI_PRO", "COPILOT"],
    id: "MOD-01",
    accent: true
  },
  {
    title: "SAAS ARCHITECTURE",
    description: "Creating full-stack SaaS platforms that automate complex workflows and solve real-world problems with scalable logic.",
    icon: Layout,
    code: "0x_SAAS_BLDR",
    tech: ["NEXT.JS", "SUPABASE", "VERCEL"],
    id: "MOD-02",
    accent: false
  },
  {
    title: "AUTOMATION PIPELINES",
    description: "Designing end-to-end automation systems that streamline operations and reduce manual overhead through intelligent triggers.",
    icon: Zap,
    code: "0x_AUTO_PIPE",
    tech: ["EDGE_FUNCTIONS", "CRON_JOBS", "WEBHOOKS"],
    id: "MOD-03",
    accent: false
  },
  {
    title: "MOBILE SOLUTIONS",
    description: "Developing responsive, cross-platform mobile experiences that bring powerful tools to your pocket.",
    icon: Cpu,
    code: "0x_MOB_DEV",
    tech: ["FLUTTER", "REACT_NATIVE", "KODA"],
    id: "MOD-04",
    accent: false
  }
];

export default function Services() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-black border-y border-border-visible overflow-hidden perspective-3d" ref={triggerRef}>
      {/* Background decorative grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      
      {/* Parallax Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3"
            >
              <Terminal className="w-4 h-4 text-text-secondary" />
              <span className="label-text">CORE_OPERATIONS / CAPABILITIES</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl sm:text-7xl font-display font-bold tracking-tighter text-text-display uppercase glow-text leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Logic <br />
              <span className="text-text-secondary">&</span> Utility
            </motion.h2>
          </div>
          
          <motion.div 
            className="hidden lg:flex flex-col items-end font-mono text-[8px] text-text-disabled space-y-1"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          >
            <span>[ SYSTEM_READY ]</span>
            <span>[ NODES_ACTIVE: 04 ]</span>
            <span>[ LOAD_BALANCER: OPTIMIZED ]</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard 
                className="group h-full"
                opacity="med"
                blur="md"
                with3D={true}
                accent={service.accent}
              >
                <div className="p-10 flex flex-col h-full relative">
                  {/* ID Label */}
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-text-disabled group-hover:text-text-display transition-colors">
                    {service.id}
                  </div>

                  <div className="flex items-center gap-6 mb-10">
                    <div className="p-5 bg-black/40 border border-border-visible group-hover:border-text-secondary transition-colors relative backdrop-blur-sm">
                      <service.icon className="w-7 h-7 text-text-display" />
                      {/* Tiny corner dots */}
                      <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-text-display opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-text-display opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="h-px flex-grow bg-border-visible" />
                    <span className="font-mono text-[9px] text-text-disabled tracking-[0.2em] group-hover:text-text-secondary transition-colors">{service.code}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-text-display mb-6 uppercase tracking-tighter group-hover:glow-text transition-all">{service.title}</h3>
                  <p className="font-sans text-text-secondary leading-relaxed text-base mb-10 flex-grow max-w-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3 h-3 text-success animate-pulse" />
                      <span className="label-text text-[8px]">CORE_SPECIFICATIONS</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((t, ti) => (
                        <span key={ti} className="font-mono text-[9px] text-text-secondary border border-border-visible px-3 py-1 uppercase tracking-widest bg-black/40 group-hover:text-text-display group-hover:border-text-secondary transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative scanning line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-text-display/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-1px] group-hover:animate-[scanline_2s_linear_infinite]" />
                  
                  {/* Hover mechanical details */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                    <Settings className="w-12 h-12 text-text-display animate-spin-slow" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
