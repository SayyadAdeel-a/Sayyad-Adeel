import { User, ShieldCheck, Cpu, Fingerprint, Activity, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';

export default function About() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-black border-b border-border-visible" ref={triggerRef}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-visible to-transparent" />
      
      {/* Perspective Decorative Layer (Spec Section 6.3) */}
      <div className="absolute top-1/4 -right-12 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none opacity-50" />
      
      <div className="absolute top-0 right-0 p-8 opacity-40 pointer-events-none select-none z-20">
        <div className="font-mono text-[9px] text-text-secondary text-right leading-relaxed tracking-widest flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
            <span>SYS_OS: NOTHING_CORE_V1.0</span>
          </div>
          <div>LOC: 34.7717° N, 72.3602° E</div>
          <div className="text-text-disabled">BUILD_HASH: 0x8F2C4E...</div>
          <div className="mt-2 py-0.5 px-2 bg-white/5 border border-white/10 text-white">STATUS: OPERATIONAL</div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3">
              <div className="p-1.5 bg-surface border border-border-visible">
                <User className="w-3.5 h-3.5 text-text-secondary" />
              </div>
              <span className="label-text">IDENTITY_MANIFEST / 0x01</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl tracking-tighter text-text-display uppercase leading-[0.8] glow-text">
                AI-native <br />
                <span className="text-text-secondary">orchestrator</span> <br />
                <span className="relative inline-block">
                  shipping 
                  <span className="absolute -bottom-2 right-0 w-12 h-1 bg-accent/30" />
                </span> 
                <span className="text-accent italic"> SaaS</span>.
              </h2>
              
              <div className="flex gap-4 pt-2">
                <div className="label-text text-[9px] px-2 py-0.5 border border-border-visible bg-black">MODEL_AGNOSTIC</div>
                <div className="label-text text-[9px] px-2 py-0.5 border border-border-visible bg-black">RAPID_PROTOTYPING</div>
                <div className="label-text text-[9px] px-2 py-0.5 border border-border-visible bg-black">FULL_STACK</div>
              </div>
            </div>

            <div className="space-y-8 text-lg text-text-secondary leading-relaxed font-sans max-w-xl">
              <div className="relative pl-6 border-l border-border-visible">
                <div className="absolute -left-[1px] top-0 w-[1px] h-12 bg-accent shadow-[0_0_8px_rgba(215,25,33,0.5)]" />
                <p>
                  Based in <span className="text-text-primary font-bold">Swat, Pakistan</span>, I am a builder who leverages the world's most advanced AI models as my primary engineering team.
                </p>
              </div>
              <p className="opacity-80">
                My expertise lies in prompt engineering, debugging AI outputs, and integrating multiple AI agents to build functional, production-ready apps at lightspeed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard className="flex items-start gap-4 p-6" opacity="low" blur="sm" interactive={false}>
                <div className="p-2 border border-border-visible bg-black/40">
                  <Cpu className="w-5 h-5 text-text-primary" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono font-bold text-text-display uppercase tracking-widest">Problem Solver</h4>
                  <p className="text-[9px] font-mono text-text-disabled mt-1 uppercase tracking-wider leading-tight">Translating logic into scalable value systems</p>
                </div>
              </GlassCard>
              <GlassCard className="flex items-start gap-4 p-6" opacity="low" blur="sm" interactive={false}>
                <div className="p-2 border border-border-visible bg-black/40">
                  <ShieldCheck className="w-5 h-5 text-text-primary" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono font-bold text-text-display uppercase tracking-widest">Agent Lead</h4>
                  <p className="text-[9px] font-mono text-text-disabled mt-1 uppercase tracking-wider leading-tight">Directing autonomous digital squads for E2E delivery</p>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <div className="relative flex flex-col items-center lg:items-end justify-center w-full perspective-3d">
            <div className="w-full max-w-md space-y-8">
              
              <GlassCard 
                className="relative group p-1"
                with3D={true}
                opacity="high"
                blur="lg"
              >
                {/* Image Frame with Technical Marks */}
                <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-accent opacity-40 z-20" />
                <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-white opacity-20 z-20" />
                
                <div className="aspect-[4/5] bg-surface relative overflow-hidden">
                  <img 
                    src="/profile.jpg"
                    alt="Sayyad Adeel"
                    className="w-full h-full object-cover filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop")}
                  />
                  
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Live HUD Overlays */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1 z-20">
                    <div className="font-mono text-[8px] text-text-display bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/10 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                      REC: STREAM_LIVE_FEED
                    </div>
                    <div className="font-mono text-[7px] text-white/50 bg-black/40 px-2 py-0.5 border border-white/5">
                      FPS: 60.0 // BITRATE: 12.4 Mbps
                    </div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-sm border-t border-white/10 z-20">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <div className="font-display text-2xl font-bold tracking-tight text-text-display uppercase leading-none">Sayyad Adeel</div>
                        <div className="label-text text-accent font-bold tracking-[0.2em]">CORE_ORCHESTRATOR</div>
                      </div>
                      <div className="text-right">
                        <div className="label-text text-[7px] opacity-40">SYS_ID: 9823-XA</div>
                        <div className="label-text text-[7px] opacity-40">VER: 2.0.4-LTS</div>
                        <div className="mt-1 flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-2 h-0.5 ${i < 4 ? 'bg-accent shadow-[0_0_5px_rgba(215,25,33,0.5)]' : 'bg-white/10'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard 
                className="p-6 overflow-hidden relative group"
                opacity="med"
                blur="md"
                with3D={true}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1 border border-accent/20 bg-accent/5">
                      <Terminal size={12} className="text-accent" />
                    </div>
                    <span className="label-text text-text-display text-[9px]">CURRENT_OPERATIONAL_FOCUS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Activity size={10} className="text-success animate-pulse" />
                    <span className="font-mono text-[8px] text-success tracking-widest uppercase">Active</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-lg font-sans text-text-primary border-l-2 border-accent/50 pl-4 py-1 italic leading-relaxed">
                    "Redefining the boundaries of rapid software delivery through multi-agent AI alignment."
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-black/40 border border-border-visible">
                      <div className="label-text text-[7px] opacity-50 mb-1">PROJECT_TARGET</div>
                      <div className="font-mono text-[10px] text-text-display uppercase tracking-wider">Koda_Mobile_DX</div>
                    </div>
                    <div className="p-3 bg-black/40 border border-border-visible">
                      <div className="label-text text-[7px] opacity-50 mb-1">LOAD_CAPACITY</div>
                      <div className="font-mono text-[10px] text-text-display uppercase tracking-wider">87%_UTILIZED</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 p-1 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Fingerprint className="w-24 h-24 text-white" />
                </div>
              </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
