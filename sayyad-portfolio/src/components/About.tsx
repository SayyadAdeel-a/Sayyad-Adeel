import { Target, User, Rocket } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { use3DTransform } from '@/hooks/use3DTransform';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { useGlassEffect } from '@/hooks/useGlassEffect';

export default function About() {
  const cardRef = useRef(null);
  const { rotation } = use3DTransform(cardRef);
  const { ref: triggerRef, isInView } = useScrollTrigger();
  const { isMobile } = useGlassEffect();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-zinc-950" ref={triggerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard opacity="high" borderGlow={true} className="inline-flex items-center gap-2 rounded-full px-3 py-1">
              <User className="w-3 h-3" />
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">About Me</span>
            </GlassCard>
            
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              AI-native product builder turning ideas into <br />
              <span className="text-zinc-500 italic">shipped SaaS products.</span>
            </h2>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                Based in <span className="text-white font-medium">Swat, Pakistan</span>, I am a builder who leverages the world's most advanced AI models (Claude, Gemini, Copilot) as my engineering team. While others struggle with syntax, I focus on architecture, logic, and user value.
              </p>
              <p>
                My expertise lies in prompt engineering, debugging AI outputs, and integrating multiple AI agents to build functional, production-ready apps. I orchestrate solutions from concept to deployment at lightspeed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <GlassCard 
                opacity="med" 
                className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:scale-105 hover:-translate-y-1"
              >
                <div className="mt-1 p-2 rounded-lg bg-zinc-900 border border-white/10">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Problem Solver</h4>
                  <p className="text-sm text-zinc-500">Turning ideas into useful tools</p>
                </div>
              </GlassCard>
              <GlassCard 
                opacity="med" 
                className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:scale-105 hover:-translate-y-1"
              >
                <div className="mt-1 p-2 rounded-lg bg-zinc-900 border border-white/10">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">AI Orchestration</h4>
                  <p className="text-sm text-zinc-500">Directing agents to build quickly</p>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-md space-y-4">
              {/* PORTRAIT IMAGE CARD */}
              <motion.div 
                className="transform transition-transform duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              >
                <div 
                  ref={cardRef}
                  className="rounded-[40px] p-3 relative overflow-hidden group"
                  style={!isMobile ? {
                    perspective: '1000px',
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transition: 'transform 0.1s ease-out'
                  } : {}}
                >
                  <GlassCard opacity="high" borderGlow={true} className="rounded-[40px] p-3">
                    <div className="aspect-[4/5] overflow-hidden rounded-[32px] bg-zinc-900">
                      <img 
                        src="/profile.jpg"
                        alt="Sayyad Adeel"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop")}
                      />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10">
                      <div className="text-white font-bold">Sayyad Adeel</div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest">AI Orchestrator | Swat, Pakistan</div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
              
              <motion.div 
                className="ml-12 transform transition-transform duration-500 delay-150 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlassCard opacity="med" className="rounded-3xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-sm font-medium tracking-widest uppercase text-zinc-500">Current Status</span>
                  </div>
                  <div className="mt-2 text-xl font-medium text-white italic">"Building in public & shipping fast."</div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
