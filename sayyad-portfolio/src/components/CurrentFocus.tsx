import { Activity, Globe, Send, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

const currentFocus = [
  {
    icon: Activity,
    title: "BUILDING KODA APP",
    description: "Developing a futuristic mobile-first workspace that lets you ship code from your phone.",
    status: "PROTOTYPING"
  },
  {
    icon: Globe,
    title: "PUBLIC LOGGING",
    description: "Documenting my daily progress as a young builder and creator in Swat, Pakistan.",
    status: "ACTIVE"
  },
  {
    icon: Send,
    title: "FREELANCE OPS",
    description: "Ready to work on automation, AI tools, and SaaS projects. Let's build something together.",
    status: "AVAILABLE"
  }
];

export default function CurrentFocus() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="focus" className="py-24 sm:py-32 bg-black border-b border-border-visible" ref={triggerRef}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3"
          >
            <Terminal className="w-4 h-4 text-text-secondary" />
            <span className="label-text">CURRENTLY WORKING ON</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-text-display uppercase glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Mission Critical <span className="text-text-secondary">Focus</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentFocus.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="card-surface p-8 group relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="font-mono text-[8px] text-text-disabled tracking-[0.2em]">{item.status}</span>
              </div>
              
              <div className="w-12 h-12 bg-black border border-border-visible flex items-center justify-center mb-8 group-hover:border-text-secondary transition-colors">
                <item.icon className="w-5 h-5 text-text-display" />
              </div>
              
              <h3 className="text-lg font-display font-bold text-text-display mb-4 tracking-tight">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">{item.description}</p>
              
              <div className="pt-4 border-t border-border border-dashed flex justify-between items-center">
                <span className="label-text">PROJECT {index + 1}</span>
                <div className="h-1 w-8 bg-text-secondary opacity-30" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
