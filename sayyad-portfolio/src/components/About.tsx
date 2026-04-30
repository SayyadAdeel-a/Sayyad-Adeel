import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: triggerRef, isInView } = useScrollTrigger();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), springConfig);
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 5]), springConfig);

  return (
    <section 
      id="about" 
      className="py-60 bg-black relative overflow-hidden perspective-container" 
      ref={triggerRef}
    >
      <div className="mx-auto max-w-[1400px] px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-32 items-center">
          
          <motion.div 
            className="space-y-20"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-[2px] bg-accent" />
                <span className="text-[11px] font-mono text-accent font-black tracking-[0.5em] uppercase">Identity</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-display font-black text-text-display leading-[0.85] tracking-tighter uppercase">
                Bridging Logic <br />
                <span className="text-text-secondary italic">& Artificial</span> <br />
                Intelligence.
              </h2>
            </div>
            
            <div className="max-w-xl space-y-12">
              <motion.p 
                style={{ y: y1 }}
                className="text-2xl text-text-secondary leading-relaxed font-sans border-l-2 border-accent/20 pl-12 py-4"
              >
                Based in <span className="text-text-primary font-bold">Swat, Pakistan</span>, I specialize in orchestrating high-fidelity SaaS products by aligning multiple AI agents into a singular production pipeline.
              </motion.p>
              
              <motion.p 
                style={{ y: y2 }}
                className="text-xl text-text-secondary/70 leading-relaxed font-sans"
              >
                I don't just prompt AI; I direct autonomous digital squads to solve complex engineering challenges, delivering full-stack solutions at a velocity previously unimagined.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 pt-12">
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-accent font-bold tracking-[0.5em] uppercase">Expertise</span>
                <div className="flex flex-wrap gap-4">
                  {["Agent Lead", "Full-Stack Architecture", "Prompt Engineering"].map((skill, i) => (
                    <div key={i} className="px-6 py-2 rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-weightless">
                      <span className="text-[10px] font-mono text-text-display font-bold uppercase tracking-widest">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-accent font-bold tracking-[0.5em] uppercase">Status</span>
                <div className="flex items-center gap-4 p-4 border border-white/5 bg-zinc-950/50 rounded-2xl shadow-weightless">
                  <div className="w-3 h-3 bg-success rounded-full animate-ping" />
                  <span className="text-lg font-display font-black text-text-display uppercase tracking-tighter">Available for Orchestration</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Antigravity Visual Module */}
          <div ref={containerRef} className="relative perspective-container h-[700px] flex items-center justify-center">
            <motion.div 
              style={{ y: y2, rotateX: rotate, rotateY: rotate }}
              className="relative z-10 w-full"
            >
              <GlassCard 
                className="aspect-[4/5] overflow-hidden rounded-[3rem] border-white/10 shadow-diffused"
                with3D={true}
                opacity="low"
                blur="lg"
                interactive={true}
              >
                <img 
                  src="/profile.jpg"
                  alt="Sayyad Adeel"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop")}
                />
                
                {/* Internal Spatial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">Principal</span>
                    <h3 className="text-3xl font-display font-black text-text-display tracking-tighter">SAYYAD ADEEL</h3>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 bg-white/[0.02] backdrop-blur-3xl rounded-full z-0 floating" 
            />
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-20 -left-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px] z-0" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
