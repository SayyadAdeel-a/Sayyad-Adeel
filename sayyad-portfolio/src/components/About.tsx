import { Target, User, Cpu, Rocket } from 'lucide-react';

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
              <div className="transform hover:-translate-y-2 transition-transform duration-500">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                  <Cpu className="w-10 h-10 text-white mb-6" />
                  <div className="text-2xl font-bold text-white mb-2">AI-First Approach</div>
                  <p className="text-zinc-400">Leveraging AI workflows to build smarter products faster.</p>
                </div>
              </div>
              
              <div className="ml-12 transform hover:-translate-y-2 transition-transform duration-500 delay-150">
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
