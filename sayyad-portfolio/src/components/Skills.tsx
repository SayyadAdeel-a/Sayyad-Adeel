import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';

const skills = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind v4", 
  "Framer Motion", "Node.js", "Supabase", "PostgreSQL",
  "Claude 3.5", "GPT-4o", "Gemini Pro", "Cursor AI",
  "Vercel", "GitHub Actions", "Docker", "Edge Runtime"
];

const InfiniteStream = ({ items, speed = 20, reverse = false, zIndex = 0 }: { items: string[], speed?: number, reverse?: boolean, zIndex?: number }) => {
  return (
    <div className="flex overflow-hidden group select-none py-6" style={{ transformStyle: 'preserve-3d', zIndex }}>
      <motion.div 
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <GlassCard 
            key={i} 
            className="px-12 py-6 border-white/5 hover:border-accent transition-all flex items-center justify-center min-w-[240px] shadow-weightless"
            opacity="low"
            blur="lg"
            with3D={true}
          >
            <span className="text-[11px] font-mono font-black tracking-[0.4em] text-text-secondary group-hover:text-accent uppercase transition-colors">
              {item}
            </span>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: triggerRef, isInView } = useScrollTrigger();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 1], [45, 65]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 1], [-20, -45]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]), springConfig);
  const z = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -200]), springConfig);

  return (
    <section 
      id="skills" 
      className="py-60 bg-black relative overflow-hidden perspective-container" 
      ref={triggerRef}
    >
      <div className="mx-auto max-w-[1400px] px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 mb-40 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <div className="w-16 h-[2px] bg-accent" />
              <h2 className="text-6xl md:text-8xl font-display font-black text-text-display leading-none tracking-tighter uppercase">
                Technical <br />
                <span className="text-text-secondary italic">Ecosystem.</span>
              </h2>
            </div>
          </motion.div>

          <motion.p 
            className="text-xl text-text-secondary leading-relaxed pt-12 border-t border-white/5 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A high-performance stack curated for rapid orchestration. Weightless logic, spatial interfaces.
          </motion.p>
        </div>
      </div>

      {/* Antigravity Isometric Stream Engine */}
      <div 
        ref={containerRef}
        className="relative h-[800px] flex items-center justify-center pointer-events-none sm:pointer-events-auto"
        style={{ perspective: '2000px' }}
      >
        <motion.div 
          style={{ 
            rotateX, 
            rotateZ, 
            scale,
            z,
            transformStyle: 'preserve-3d'
          }}
          className="w-[150%] flex flex-col gap-12"
        >
          <InfiniteStream items={skills.slice(0, 8)} speed={40} zIndex={30} />
          <InfiniteStream items={skills.slice(8, 16)} speed={55} reverse={true} zIndex={20} />
          <InfiniteStream items={skills.slice(4, 12)} speed={45} zIndex={10} />
        </motion.div>

        {/* Ambient Depth Shadows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-30 pointer-events-none" />
      </div>

      <div className="mx-auto max-w-[1400px] px-8 relative z-20">
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-16 pt-24 border-t border-white/5">
          {[
            { label: "Logic", value: "Autonomous Agents", desc: "Orchestrating Claude, Gemini, and OpenAI pipelines." },
            { label: "Interface", value: "Spatial UI", desc: "Crafting fluid, spring-based weightless experiences." },
            { label: "Core", value: "Production Ready", desc: "Type-safe architectures deployed at industrial scale." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.6 + (i * 0.1), duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] font-mono text-accent font-bold tracking-[0.5em] uppercase">{item.label}</span>
              <div className="space-y-3">
                <h4 className="text-3xl font-display font-black text-text-display leading-tight">{item.value}</h4>
                <p className="text-base text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
