import { motion } from "framer-motion";
import { Send, Rocket } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-black border-t border-border-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card-surface relative overflow-hidden p-12 sm:p-20">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="label-text py-1 px-4 border border-border-visible bg-surface mb-6 inline-flex items-center gap-2">
                <Rocket size={12} className="text-text-display" />
                BUILD_IN_PUBLIC
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-text-display tracking-tighter mb-6 leading-[1.1] uppercase glow-text">
                Follow the journey <br />
                <span className="text-text-secondary">off the grid.</span>
              </h2>
              <p className="text-text-secondary text-lg font-sans max-w-md">
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
              <div className="absolute -top-6 left-0 label-text opacity-30 text-[8px]">SUBSCRIPTION_MODULE_v1.0</div>
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
                  className="w-full bg-black border border-border-visible py-6 px-8 text-text-primary placeholder:text-text-disabled focus:outline-none focus:border-text-secondary transition-all text-lg font-mono"
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-2 bottom-2 bg-text-display text-black px-8 flex items-center gap-2 hover:bg-text-secondary transition-all font-display font-bold text-sm uppercase"
                >
                  Join
                  <Send size={16} />
                </motion.button>
              </form>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-[1px] flex-grow bg-border-visible" />
                <p className="text-[10px] label-text text-text-disabled uppercase">
                  No spam. Just build logs.
                </p>
                <div className="h-[1px] flex-grow bg-border-visible" />
              </div>
            </motion.div>
          </div>
          
          {/* Decorative technical elements */}
          <div className="absolute bottom-0 right-0 p-2 opacity-10">
            <div className="label-text text-[6px] leading-tight">
              01001110 01001111 01010100 01001000 01001001 01001110 01000111<br/>
              SY_LOG_ENABLED: TRUE<br/>
              BUFFER_SIZE: 2048KB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
