import { Target, User, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <User className="w-3 h-3" />
              About Me
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
              A 17-year-old builder crafting <br />
              <span className="text-zinc-500 italic">the future of AI.</span>
            </h2>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                Based in <span className="text-white font-medium">Swat, Pakistan</span>, I focus on building AI-powered tools that turn simple ideas into real digital products. I enjoy creating SaaS tools, automations and web apps that solve real-world problems.
              </p>
              <p>
                My mission is to simplify complex workflows using AI and build products that are fast, useful and accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors hover:bg-white/[0.05]">
                <div className="mt-1 p-2 rounded-lg bg-zinc-900 border border-white/10">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Problem Solver</h4>
                  <p className="text-sm text-zinc-500">Turning ideas into useful tools</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors hover:bg-white/[0.05]">
                <div className="mt-1 p-2 rounded-lg bg-zinc-900 border border-white/10">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Fast Iteration</h4>
                  <p className="text-sm text-zinc-500">Building quickly with AI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-md space-y-4">
              {/* PORTRAIT IMAGE CARD */}
              <div className="transform hover:-translate-y-2 transition-transform duration-500">
                <div className="rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                  <div className="aspect-[4/5] overflow-hidden rounded-[32px] bg-zinc-900">
                    <img 
                      src="/my iamge.jpg"
                      alt="Sayyad Adeel"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop")}
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10">
                    <div className="text-white font-bold">Sayyad Adeel</div>
                    <div className="text-zinc-500 text-[10px] uppercase tracking-widest">AI & SaaS Builder | Swat, Pakistan</div>
                  </div>
                </div>
              </div>
              
              <div className="ml-12 transform hover:-translate-y-2 transition-transform duration-500 delay-150 relative z-10">
                <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-sm font-medium tracking-widest uppercase text-zinc-500">Current Status</span>
                  </div>
                  <div className="mt-2 text-xl font-medium text-white italic">"Building in public & shipping fast."</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
