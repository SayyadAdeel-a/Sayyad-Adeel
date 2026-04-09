import { motion } from "framer-motion";
import { Send, Rocket, Sparkles } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 sm:py-32 bg-transparent font-sans relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-[3.5rem] glass-2 p-10 sm:p-24 border-white/10 group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-ai-cyan/5 blur-[120px] pointer-events-none group-hover:bg-ai-cyan/10 transition-colors duration-1000" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-ai-purple/5 blur-[120px] pointer-events-none group-hover:bg-ai-purple/10 transition-colors duration-1000" />
          
          {/* Animated Noise Pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-3 border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10 shadow-xl">
                <Rocket size={14} className="text-ai-cyan text-glow-cyan" />
                Build Logs Monthly
              </div>
              
              <h2 className="text-4xl sm:text-7xl font-heading font-bold text-white tracking-tighter mb-8 leading-[1.0]">
                Follow the journey <br />
                <span className="text-gradient-ai italic">off the grid.</span>
              </h2>
              
              <p className="text-zinc-500 text-xl max-w-md leading-relaxed font-sans group-hover:text-zinc-400 transition-colors duration-700">
                I'm shipping products weekly. Get the raw updates on what I'm architeching, learning, and failing at in the AI-agent era.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <form 
                action="https://formspree.io/f/mjgpdolb" 
                method="POST"
                className="relative group/form"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/20 to-ai-purple/20 blur-2xl opacity-0 group-focus-within/form:opacity-100 transition-opacity duration-700" />
                
                <input
                  type="email"
                  name="email"
                  placeholder="your@neural-path.com"
                  required
                  className="w-full bg-bg-deep/50 border border-white/5 rounded-3xl py-8 px-10 text-white placeholder:text-zinc-800 focus:outline-none focus:border-ai-cyan/30 focus:bg-bg-deep/80 transition-all text-lg font-medium shadow-2xl relative z-10 hover:border-white/10"
                />
                
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-white text-black rounded-2xl px-12 py-6 flex items-center justify-center gap-3 hover:bg-ai-cyan hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all font-bold text-sm uppercase tracking-widest active:scale-95 shadow-2xl relative z-10"
                  >
                    Connect
                    <Send size={18} />
                  </button>
                  
                  <div className="hidden sm:flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                    <Sparkles size={14} className="text-ai-magenta" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic">Encrypted Connection</span>
                  </div>
                </div>
              </form>
              
              <p className="mt-10 text-[10px] text-zinc-700 px-4 font-bold uppercase tracking-[0.4em] text-center lg:text-left leading-loose">
                Zero spam. Only technical insights <br/> and early access to autonomous tools.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

