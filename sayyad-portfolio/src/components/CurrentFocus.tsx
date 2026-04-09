import { Activity, Globe, Send, Sparkles } from 'lucide-react';

const currentFocus = [
  {
    icon: Activity,
    title: "The Koda Mission",
    description: "Developing a futuristic mobile-first workspace that lets you ship production code directly from your phone.",
    tag: "Mobile IDE"
  },
  {
    icon: Globe,
    title: "Public Iteration",
    description: "Documenting my evolution as a young AI builder and SaaS creator based in Swat, Pakistan.",
    tag: "Creator Economy"
  },
  {
    icon: Send,
    title: "Strategic Partnerships",
    description: "Currently open to high-fidelity projects involving autonomous agents, RAG, and premium SaaS architecture.",
    tag: "Open to Work"
  }
];

export default function CurrentFocus() {
  return (
    <section className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-ai-cyan/20 bg-ai-cyan/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ai-cyan">
            <Activity size={12} />
            Live Processing
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-bold tracking-tight text-white leading-tight">
            Current <span className="text-gradient-ai italic">Computational Focus.</span>
          </h2>
          <p className="text-zinc-500 leading-relaxed font-sans text-lg italic">
            Maintaining high-velocity execution on projects that define the frontier of human-AI collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentFocus.map((item, index) => (
            <div 
              key={index}
              className="relative group p-10 rounded-[2.5rem] glass-card border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 bg-bg-deep/40"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-bg-deep border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/5 shadow-xl">
                  <item.icon className="w-8 h-8 text-white transition-colors duration-500 group-hover:text-ai-cyan" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 italic pt-2">
                   {item.tag}
                </span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-4 italic leading-tight uppercase tracking-tight group-hover:text-ai-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans group-hover:text-zinc-300 transition-colors">
                {item.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-zinc-500">Processing...</span>
                <Sparkles size={12} className="text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
