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
    size: "large"
  },
  {
    title: "SaaS Architecture",
    description: "Building production-grade platforms with a focus on rapid scaling, technical stability, and high-fidelity user experiences.",
    icon: Layout,
    tags: ["Next.js 15", "Supabase", "Edge Core"],
    size: "small"
  },
  {
    title: "Automation Pipelines",
    description: "Designing zero-friction automation workflows that eliminate operational overhead through intelligent triggers and state sync.",
    icon: Zap,
    tags: ["Workflow Sync", "Real-time Hubs", "Auto-Triggers"],
    size: "small"
  },
  {
    title: "Mobile Orchestration",
    description: "Extending technical capabilities to mobile environments with a focus on performance-optimized utility and tactile logic.",
    icon: Cpu,
    tags: ["Flutter", "Cross-Platform", "Tactile UI"],
    size: "medium"
  }
];

export default function Services() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="services" className="py-40 bg-black relative overflow-hidden" ref={triggerRef}>
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 mb-32 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <div className="w-12 h-[2px] bg-accent" />
              <h2 className="text-5xl md:text-7xl font-display font-black text-text-display leading-none tracking-tighter">
                CORE <br />
                <span className="text-text-secondary italic">CAPABILITIES.</span>
              </h2>
            </div>
          </motion.div>

          <motion.p 
            className="text-lg text-text-secondary leading-relaxed max-w-xl pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Engineering value through technical orchestration. My services focus on the intersection of AI logic, modern architecture, and fluid interaction.
          </motion.p>
        </div>

        {/* Airy Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <GlassCard 
                className="group h-full p-12 lg:p-16 border-white/5"
                opacity="low"
                blur="lg"
                with3D={true}
                interactive={true}
              >
                <div className="flex flex-col h-full gap-12">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-center group-hover:border-accent transition-colors">
                      <service.icon className="w-8 h-8 text-text-display group-hover:text-accent transition-colors" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-text-disabled group-hover:text-text-display transition-colors" />
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl font-display font-bold text-text-display group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg text-text-secondary leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {service.tags.map((tag, ti) => (
                      <span key={ti} className="text-[10px] font-mono text-text-disabled border border-white/5 px-3 py-1 uppercase tracking-widest bg-zinc-900/30">
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
    </section>
  );
}
