import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';

export default function About() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="about" className="py-40 bg-black relative overflow-hidden" ref={triggerRef}>
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-24 items-start">
          
          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            {/* Minimalist Section Label */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">Identity</span>
            </div>

            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-display font-black text-text-display leading-[0.9] tracking-tighter">
                Bridging Logic <br />
                <span className="text-text-secondary italic">& Artificial</span> <br />
                Intelligence.
              </h2>
              
              <div className="max-w-xl space-y-8">
                <p className="text-xl text-text-secondary leading-relaxed font-sans border-l border-white/10 pl-8 py-2">
                  Based in <span className="text-text-primary font-bold">Swat, Pakistan</span>, I specialize in orchestrating high-fidelity SaaS products by aligning multiple AI agents into a singular production pipeline.
                </p>
                <p className="text-lg text-text-secondary/80 leading-relaxed font-sans">
                  I don't just prompt AI; I direct autonomous digital squads to solve complex engineering challenges, delivering full-stack solutions at a velocity previously unimagined.
                </p>
              </div>
            </div>

            {/* Airy Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">Expertise</span>
                <div className="flex flex-wrap gap-3">
                  {["Agent Lead", "Full-Stack Architecture", "Prompt Engineering"].map((skill, i) => (
                    <div key={i} className="px-4 py-1.5 rounded-full border border-white/5 bg-zinc-900/30 backdrop-blur-md">
                      <span className="text-[10px] font-mono text-text-secondary uppercase">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">Location</span>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-display font-bold text-text-display uppercase tracking-tight">Swat, Pakistan</span>
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Clean Visual Side Panel */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <GlassCard 
                className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border-white/5"
                with3D={true}
                opacity="low"
                blur="lg"
                interactive={false}
              >
                <img 
                  src="/profile.jpg"
                  alt="Sayyad Adeel"
                  className="w-full h-full object-cover grayscale opacity-80 filter hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                  onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop")}
                />
              </GlassCard>
            </motion.div>

            <motion.div 
              className="px-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="w-12 h-[2px] bg-accent" />
              <p className="text-sm text-text-secondary leading-relaxed italic">
                "Orchestration is the art of aligning raw AI potential with precise commercial vision."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
