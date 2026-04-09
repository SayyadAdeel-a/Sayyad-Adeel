import { 
  ArrowRight, 
  Target, 
  Crown, 
  Star,
  Mail,
  Zap
} from "lucide-react";
import { GitHubIcon, InstagramIcon } from "@/components/Icons";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default group">
    <span className="text-xl font-bold text-white sm:text-2xl group-hover:text-ai-cyan transition-colors">{value}</span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold sm:text-[10px] text-center">{label}</span>
  </div>
);

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex items-center bg-transparent text-white overflow-hidden font-sans">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.5s; }
        .delay-400 { animation-delay: 0.7s; }
        .delay-500 { animation-delay: 0.9s; }
      `}</style>

      {/* Hero Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ai-cyan/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-ai-purple/10 rounded-full blur-[140px] mix-blend-screen animate-pulse delay-700" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-3 rounded-full border border-ai-cyan/20 bg-ai-cyan/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.05)]">
                <div className="h-2 w-2 rounded-full bg-ai-cyan animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ai-cyan italic">
                  Architecting Autonomous Futures
                </span>
              </div>
            </div>

            <h1 className="animate-fade-in delay-200 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold tracking-tight leading-[0.9] text-white">
              Ship AI tools <br />
              <span className="text-gradient-ai">faster than ever.</span>
            </h1>

            <p className="animate-fade-in delay-300 max-w-xl text-lg sm:text-xl text-zinc-400 leading-relaxed font-sans">
              I architect <span className="text-white font-medium">high-fidelity AI ecosystems</span> and SaaS products that scale. 
              Currently shipping <span className="italic text-ai-cyan font-bold">Koda</span> — the mobile-first IDE.
            </p>

            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full sm:w-auto overflow-hidden rounded-full p-[1px] transition-transform active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-magenta animate-spin-slow" />
                <div className="relative flex items-center justify-center gap-2 rounded-full bg-bg-deep px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all group-hover:bg-transparent group-hover:text-black">
                  Explore Artifacts
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
              >
                Connect
              </button>
            </div>

            {/* Social Icons */}
            <div className="animate-fade-in delay-500 flex items-center gap-8 pl-1 pt-4">
              <a href="https://instagram.com/buildwithsayyad" target="_blank" className="text-zinc-500 hover:text-ai-cyan transition-all hover:scale-110">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://github.com/SayyadAdeel-a" target="_blank" className="text-zinc-500 hover:text-ai-purple transition-all hover:scale-110">
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a href="mailto:adeelsayyad.a@gmail.com" className="text-zinc-500 hover:text-ai-magenta transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="animate-fade-in delay-500 relative z-20 glass-card p-1 rounded-[3rem] shadow-2xl">
              <div className="glass-card rounded-[2.8rem] p-8 sm:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-ai-cyan/20 blur-[60px] rounded-full" />
                
                <div className="relative z-10 flex flex-col space-y-10">
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-ai-cyan/20 to-ai-purple/20 border border-white/10 shadow-inner">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-4xl font-heading font-bold tracking-tight text-white italic">8+</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ai-cyan">SaaS Shipped</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-zinc-500 italic flex items-center gap-2">
                        <Zap size={12} className="text-yellow-500" />
                        Live Metrics
                      </span>
                      <span className="text-white">Active Growth</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5 border border-white/5 p-[1px]">
                      <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-magenta" />
                    </div>
                    <div className="flex justify-between text-[9px] text-zinc-500 font-medium">
                      <span>Koda v1.2</span>
                      <span>92% User Love</span>
                    </div>
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="grid grid-cols-2 gap-8 items-start">
                    <StatItem value="12+" label="Months Shipping" />
                    <StatItem value="AI-1st" label="Stack Focused" />
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-ai-cyan/30 bg-ai-cyan/10 px-4 py-1.5 text-[9px] font-bold tracking-widest text-ai-cyan">
                      <div className="h-2 w-2 rounded-full bg-ai-cyan animate-pulse" />
                      AUTO-BUILDING
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-ai-purple/30 bg-ai-purple/10 px-4 py-1.5 text-[9px] font-bold tracking-widest text-ai-purple uppercase">
                      <Crown size={12} className="text-yellow-500" />
                      AI Architect
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Marquee Mini Card */}
            <div className="animate-fade-in delay-500 mt-8 glass-card rounded-3xl py-6 overflow-hidden relative">
              <h3 className="mb-4 px-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 italic">Core Ecosystem</h3>
              
              <div 
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4 text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex gap-12 items-center italic">
                      <span>Tailwind CSS v4</span>
                      <span>Next.js 15</span>
                      <span>Gemini 3.5</span>
                      <span>Claude 3.7</span>
                      <span>Supabase</span>
                      <span>Agentic Workflows</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Background Decorative Gradient */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-80 h-80 bg-ai-magenta/10 blur-[100px] rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
