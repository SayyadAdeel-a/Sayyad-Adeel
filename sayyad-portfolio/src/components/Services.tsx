import { Bot, Zap, Cpu, Layers } from 'lucide-react';

const services = [
  {
    title: "AI Tool Development",
    description: "Building autonomous AI agents and high-fidelity LLM integrations. I specialize in turning complex models into user-ready SaaS products.",
    icon: Bot,
    color: "from-ai-cyan/20 to-ai-purple/20",
    iconColor: "text-ai-cyan",
    tag: "Agentic Systems"
  },
  {
    title: "High-Performance SaaS",
    description: "Engineering scalable web and mobile platforms with a focus on speed, reliability, and modern architecture including Supabase and Next.js.",
    icon: Zap,
    color: "from-ai-purple/20 to-ai-magenta/20",
    iconColor: "text-ai-purple",
    tag: "Cloud-Native"
  },
  {
    title: "Mobile App Architecture",
    description: "Creating premium mobile experiences with Flutter and React Native. Focusing on performance-first, cross-platform solutions like Koda.",
    icon: Cpu,
    color: "from-ai-magenta/20 to-ai-cyan/20",
    iconColor: "text-ai-magenta",
    tag: "Flutter / RX"
  },
  {
    title: "Custom Automation",
    description: "Designing bespoke automation workflows that reduce manual overhead and increase velocity using custom scripts and background services.",
    icon: Layers,
    color: "from-ai-cyan/20 to-white/10",
    iconColor: "text-white",
    tag: "Full-Stack Ops"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-ai-cyan/20 bg-ai-cyan/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ai-cyan">
              Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight text-white leading-tight">
              Engineering the <br/>
              <span className="text-gradient-ai">Intelligence Layer.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-md italic text-lg leading-relaxed font-sans">
            Specialized in deploying agentic systems that bridge the gap between AI research and production SaaS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-[3rem] p-[1px] transition-all duration-700 hover:-translate-y-2"
            >
              {/* Animated Border Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-40 transition-opacity duration-1000 blur-xl`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]`} />
              
              <div className="relative z-10 glass-2 rounded-[2.95rem] p-12 h-full flex flex-col justify-between overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-1000" />
                
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-[2rem] bg-bg-deep border border-white/10 group-hover:border-white/20 transition-all duration-700 group-hover:scale-110 shadow-2xl relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                      <service.icon className={`w-10 h-10 ${service.iconColor} relative z-10 transition-transform duration-700 group-hover:rotate-6`} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-zinc-600 pt-2 italic group-hover:text-zinc-400 transition-colors duration-700">
                      {service.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-400 leading-relaxed text-lg transition-colors duration-700 font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-ai-cyan group-hover:text-glow-cyan transition-all duration-700">
                    Architecture Optimized
                  </div>
                  <div className="h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors duration-700" />
                  <div className="h-2 w-2 rounded-full bg-white/10 group-hover:bg-ai-cyan group-hover:shadow-[0_0_10px_rgba(0,255,255,0.8)] transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
