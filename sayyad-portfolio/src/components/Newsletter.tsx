import { motion } from "framer-motion";
import { Send, Rocket } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-12 sm:p-20">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              className="relative"
            >
              <form 
                action="https://formspree.io/f/mjgpdolb" 
                method="POST"
                className="relative group"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Drop your email..."
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-full py-6 px-8 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-all text-lg italic"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-white text-black rounded-full px-8 flex items-center gap-2 hover:bg-zinc-200 transition-all font-bold text-sm"
                >
                  Join
                  <Send size={16} />
                </button>
              </form>
              <p className="mt-4 text-xs text-zinc-600 px-8 italic">
                No spam. Just build logs and early access to new SaaS tools.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
