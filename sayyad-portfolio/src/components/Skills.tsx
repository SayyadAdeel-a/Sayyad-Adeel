import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';

const skills = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind v4", 
  "Framer Motion", "Node.js", "Supabase", "PostgreSQL",
  "Claude 3.5", "GPT-4o", "Gemini Pro", "Cursor AI",
  "Vercel", "GitHub Actions", "Docker", "Edge Runtime"
];

const InfiniteStream = ({ items, speed = 20, reverse = false }: { items: string[], speed?: number, reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden group select-none py-4">
      <motion.div 
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <GlassCard 
            key={i} 
            className="px-10 py-5 border-white/5 hover:border-accent transition-colors flex items-center justify-center min-w-[200px]"
            opacity="low"
            blur="sm"
            with3D={true}
          >
            <span className="text-sm font-mono font-bold tracking-[0.3em] text-text-secondary group-hover:text-text-display uppercase transition-colors">
              {item}
            </span>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="skills" className="py-40 bg-black relative overflow-hidden" ref={triggerRef}>
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mb-32 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <div className="w-12 h-[2px] bg-accent" />
              <h2 className="text-5xl md:text-7xl font-display font-black text-text-display leading-none tracking-tighter">
                TECHNICAL <br />
                <span className="text-text-secondary italic">ECOSYSTEM.</span>
              </h2>
            </div>
          </motion.div>

          <motion.p 
            className="text-lg text-text-secondary leading-relaxed pt-8 border-t border-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A high-performance stack curated for rapid orchestration and production-grade stability. 
            Bridging AI logic with modern frontend architecture.
          </motion.p>
        </div>

        {/* Infinite Streams - Density 4 (Airy) */}
        <div className="space-y-8 relative">
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
          
          <InfiniteStream items={skills.slice(0, 8)} speed={30} />
          <InfiniteStream items={skills.slice(8, 16)} speed={40} reverse={true} />
          <InfiniteStream items={skills.slice(4, 12)} speed={35} />
        </div>

        {/* Bottom Status Grid - Asymmetric Detail */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
          {[
            { label: "Logic", value: "Autonomous Agents", desc: "Orchestrating Claude, Gemini, and OpenAI pipelines." },
            { label: "Interface", value: "High-Fidelity UI", desc: "Crafting fluid, spring-based kinetic experiences." },
            { label: "Core", value: "Production Ready", desc: "Type-safe architectures deployed at industrial scale." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
            >
              <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">{item.label}</span>
              <div className="space-y-2">
                <h4 className="text-2xl font-display font-bold text-text-display">{item.value}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
