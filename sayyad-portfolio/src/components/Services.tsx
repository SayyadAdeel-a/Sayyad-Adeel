import { Bot, Zap, Layout, Cpu, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';

const services = [
  {
    title: "AI Agent Systems",
    description: "Orchestrating autonomous digital squads using modern frameworks and advanced LLM pipelines for E2E delivery.",
    icon: Bot,
    tags: ["Agentic RAG", "Multi-Agent Logic", "Claude/Gemini"],
    offset: "0px"
  },
  {
    title: "SaaS Architecture",
    description: "Building production-grade platforms with a focus on rapid scaling, technical stability, and high-fidelity user experiences.",
    icon: Layout,
    tags: ["Next.js 15", "Supabase", "Edge Core"],
    offset: "40px"
  },
  {
    title: "Automation Pipelines",
    description: "Designing zero-friction automation workflows that eliminate operational overhead through intelligent triggers and state sync.",
    icon: Zap,
    tags: ["Workflow Sync", "Real-time Hubs", "Auto-Triggers"],
    offset: "-20px"
  },
  {
    title: "Mobile Orchestration",
    description: "Extending technical capabilities to mobile environments with a focus on performance-optimized utility and tactile logic.",
    icon: Cpu,
    tags: ["Flutter", "Cross-Platform", "Tactile UI"],
    offset: "20px"
  }
];

export default function Services() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="services" className="py-60 bg-black relative overflow-hidden perspective-container" ref={triggerRef}>
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Antigravity Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-24 mb-48 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-[2px] bg-accent" />
                <span className="text-[11px] font-mono text-accent font-black tracking-[0.5em] uppercase">Capabilities</span>
              </div>
              <h2 className="text-6xl md:text-[7rem] font-display font-black text-text-display leading-[0.85] tracking-tighter uppercase">
                Core <br />
                <span className="text-text-secondary italic">Architectures.</span>
              </h2>
            </div>
          </motion.div>

          <motion.p 
            className="text-2xl text-text-secondary leading-relaxed max-w-sm pb-4 border-l border-white/5 pl-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineering value through spatial orchestration. My services focus on the intersection of AI logic and weightless interaction.
          </motion.p>
        </div>

        {/* Spatial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
              transition={{ 
                duration: 1.5, 
                delay: index * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{ y: service.offset }}
            >
              <GlassCard 
                className="group p-16 lg:p-24 border-white/5 shadow-diffused"
                opacity="low"
                blur="lg"
                with3D={true}
                interactive={true}
              >
                <div className="flex flex-col h-full gap-16">
                  <div className="flex justify-between items-start">
                    <div className="w-20 h-20 rounded-3xl bg-zinc-900/50 border border-white/10 flex items-center justify-center group-hover:border-accent transition-all duration-700 shadow-weightless group-hover:shadow-accent">
                      <service.icon className="w-10 h-10 text-text-display group-hover:text-accent transition-colors" />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-text-display group-hover:text-black transition-all duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-4xl md:text-5xl font-display font-black text-text-display group-hover:text-accent transition-colors tracking-tighter uppercase leading-none">
                      {service.title}
                    </h3>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {service.tags.map((tag, ti) => (
                      <span key={ti} className="text-[10px] font-mono text-accent/70 border border-accent/20 px-4 py-2 rounded-full uppercase tracking-widest bg-accent/5 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_60%)] opacity-[0.03] pointer-events-none" />
    </section>
  );
}
