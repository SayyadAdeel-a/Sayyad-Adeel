import { motion } from "framer-motion";
import { Send, Rocket } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export default function Newsletter() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard opacity="low" borderGlow={true} className="relative overflow-hidden rounded-[3rem] p-12 sm:p-20">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/5 blur-3xl glass-glow-accent" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-white/5 blur-3xl glass-glow-accent" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                <Rocket size={12} className="text-white" />
                Build In Public
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter mb-6 italic leading-[1.1]">
                Follow the journey <br />
                off the grid.
              </h2>
              <p className="text-zinc-400 text-lg italic max-w-md">
                I'm shipping products weekly. Get the raw, unfiltered updates on what I'm building, learning, and failing at.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <form 
                action="https://formspree.io/f/mjgpdolb" 
                method="POST"
                className="relative group block"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Drop your email..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-full py-6 px-8 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all text-lg italic"
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-2 bottom-2 bg-white text-black rounded-full px-8 flex items-center gap-2 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all font-bold text-sm"
                >
                  Join
                  <Send size={16} />
                </motion.button>
              </form>
              <p className="mt-4 text-xs text-zinc-600 px-8 italic">
                No spam. Just build logs and early access to new SaaS tools.
              </p>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
