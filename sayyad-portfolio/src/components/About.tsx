import { Target, User, Rocket, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-ai-cyan/20 bg-ai-cyan/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ai-cyan shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              <User size={12} />
              Architect Profile
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tight text-white leading-[1.05]">
              AI Engineer turning complex logic into <br />
              <span className="text-gradient-ai text-glow-cyan">high-fidelity SaaS.</span>
            </h2>
 
            <div className="space-y-8 text-lg sm:text-xl text-zinc-400 leading-relaxed font-sans max-w-xl">
              <p>
                Based in <span className="text-white font-medium italic">Swat, Pakistan</span>, I am an AI & SaaS builder specializing in full-stack engineering with a focus on autonomous agentic systems and high-performance mobile interfaces.
              </p>
              <p>
                My approach is <span className="text-white font-medium">Model-First</span>. I don't just build layouts; I architect ecosystems where Gemini and OpenAI models drive human productivity at scale. Currently shipping products weekly to the global market.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-8 rounded-[2rem] glass-2 group transition-all duration-500 hover:glass-3 hover:-translate-y-1 border-ai-cyan/10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-ai-cyan/10 border border-ai-cyan/20 group-hover:bg-ai-cyan/20 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-500">
                  <Target className="w-6 h-6 text-ai-cyan" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Precision Logic</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Atomic software design focused on horizontal and vertical scalability.</p>
              </div>
              <div className="p-8 rounded-[2rem] glass-2 group transition-all duration-500 hover:glass-3 hover:-translate-y-1 border-ai-purple/10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-ai-purple/10 border border-ai-purple/20 group-hover:bg-ai-purple/20 group-hover:shadow-[0_0_20px_rgba(123,97,255,0.1)] transition-all duration-500">
                  <Rocket className="w-6 h-6 text-ai-purple" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">AI Velocity</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Rapid deployment cycles using automated agentic coding workflows.</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ai-purple/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-md animate-fade-in delay-300">
              <div className="transform hover:-rotate-2 transition-transform duration-1000 ease-out">
                <div className="rounded-[3.5rem] p-3 glass-2 shadow-2xl relative overflow-hidden group border-white/10 hover:border-white/20">
                  <div className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-bg-deep relative">
                    <img 
                      src="/profile.jpg"
                      alt="Sayyad Adeel"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-90 grayscale hover:grayscale-0"
                      onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/20 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 p-6 rounded-[2rem] glass-3 border-white/20 backdrop-blur-3xl shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-2">
                    <div className="text-white font-heading font-bold text-2xl mb-1">Sayyad Adeel</div>
                    <div className="text-ai-cyan text-[10px] font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
                       <div className="h-1.5 w-1.5 rounded-full bg-ai-cyan animate-pulse" />
                       Founder & Lead AI Engineer
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles size={12} className="text-yellow-500" />
                      <span className="text-zinc-500 text-[10px] uppercase tracking-widest leading-none">Pakistan-based SaaS Builder</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -left-16 bottom-16 hidden sm:block transform hover:scale-110 transition-all duration-700 z-20 cursor-default">
                <div className="rounded-[2.5rem] glass-3 p-8 border-ai-cyan/30 shadow-[0_0_40px_rgba(0,255,255,0.15)] backdrop-blur-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-ai-cyan animate-pulse shadow-[0_0_12px_rgba(0,255,255,0.9)]" />
                    <span className="text-[10px] font-extrabold tracking-[0.4em] uppercase text-zinc-400">Current Sprint</span>
                  </div>
                  <div className="text-2xl font-heading font-bold text-white leading-tight">"Architecting Koda: <br/><span className="text-ai-cyan">The mobile IDE</span>"</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

