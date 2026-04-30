import { motion } from "framer-motion";
import { Send, Radio } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { MagneticWrapper } from "./ui/MagneticWrapper";

export default function Newsletter() {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-8">
        <GlassCard 
          className="relative overflow-hidden p-16 md:p-24 border-white/5"
          opacity="low"
          blur="lg"
          with3D={true}
          interactive={false}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none opacity-40" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-accent" />
                <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">Broadcast</span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-display font-black text-text-display tracking-tighter mb-8 leading-[0.9] uppercase">
                Follow the <br />
                <span className="text-text-secondary italic">off-grid</span> <br />
                Journey.
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed max-w-md">
                I'm shipping products weekly. Get the raw, unfiltered updates on what I'm building, learning, and failing at.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12"
            >
              <form 
                action="https://formspree.io/f/mjgpdolb" 
                method="POST"
                className="relative group"
              >
                <div className="relative">
                  <Radio className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-text-disabled group-focus-within:text-accent transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="adeel@orchestrator.com"
                    required
                    className="w-full bg-zinc-950/50 border border-white/5 rounded-full py-8 pl-16 pr-40 text-text-display placeholder:text-text-disabled/20 focus:outline-none focus:border-accent transition-all text-lg font-sans"
                  />
                  <div className="absolute right-3 top-3 bottom-3">
                    <MagneticWrapper strength={0.1}>
                      <button
                        type="submit"
                        className="h-full bg-text-display text-black px-10 rounded-full flex items-center gap-4 hover:bg-white transition-all font-display font-black text-xs uppercase shadow-[0_10px_20px_-5px_rgba(255,255,255,0.1)]"
                      >
                        Join
                        <Send size={16} />
                      </button>
                    </MagneticWrapper>
                  </div>
                </div>
              </form>

              <div className="flex items-center gap-6">
                <div className="h-[1px] w-12 bg-white/5" />
                <p className="text-[10px] font-mono text-text-disabled uppercase tracking-[0.4em]">
                  No spam. Just build logs.
                </p>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
