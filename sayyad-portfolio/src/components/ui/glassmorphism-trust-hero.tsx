import { 
  ArrowRight, 
  Target, 
  Crown, 
  Star,
  Mail
} from "lucide-react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GitHubIcon, InstagramIcon } from "@/components/Icons";
import { GlassCard } from "@/components/ui/glass-card";
import { useGlassEffect } from "@/hooks/useGlassEffect";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs text-center">{label}</span>
  </div>
);

export default function HeroSection() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const { isMobile } = useGlassEffect();
  
  const parallaxStyle = !isMobile 
    ? { y: useTransform(scrollY, [0, 500], [0, -150]) }
    : {};

  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans" ref={heroRef}>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      <motion.div 
        className="absolute inset-0 z-0 bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop)] bg-cover bg-center opacity-40"
        style={{
          ...parallaxStyle,
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-48 pb-12 sm:px-6 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
            <motion.div 
              className="animate-fade-in delay-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <GlassCard opacity="high" borderGlow={true} className="inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 flex items-center gap-2">
                  AI-NATIVE PRODUCT BUILDER
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </span>
              </GlassCard>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[1.0]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)"
              }}
            >
              Architecting the Future <br />
              <span className="bg-gradient-to-br from-white via-white to-[#ffcd75] bg-clip-text text-transparent">
                with AI Agents
              </span>
            </motion.h1>

            <motion.p 
              className="max-w-xl text-lg text-zinc-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I don't just write code; I orchestrate <span className="text-white font-medium">Claude Code, Copilot, and Gemini</span> to ship scalable SaaS products at lightspeed. From concept to deployment, I solve complex problems using AI-first workflows.
            </motion.p>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  Contact Me
                </button>
              </div>

              {/* Social Link Mini-Icons */}
              <div className="flex items-center gap-6 pl-2">
                <a href="https://instagram.com/buildwithsayyad" target="_blank" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium">
                  <InstagramIcon className="w-4 h-4" />
                  @buildwithsayyad
                </a>
                <a href="https://github.com/SayyadAdeel-a" target="_blank" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium">
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
                <a href="mailto:adeelsayyad.a@gmail.com" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <GlassCard opacity="high" className="relative overflow-hidden rounded-3xl p-8">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold tracking-tight text-white">8+ Products Shipped</div>
                      <div className="text-sm text-zinc-500">Koda • Tenreq • DataWall • AutoVideo</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400 italic">Building in Public</span>
                      <span className="text-white font-medium">Active</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                      <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-white to-zinc-400" />
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/10 mb-6" />

                  <div className="grid grid-cols-3 gap-2 text-center items-start">
                    <StatItem value="12+" label="Months Shipping" />
                    <div className="w-px h-10 bg-white/10 mx-auto mt-2" />
                    <StatItem value="AI-First" label="Stack: OpenAI + Gemini" />
                    <div className="w-px h-10 bg-white/10 mx-auto mt-2" />
                    <StatItem value="Open to Work" label="SaaS & AI Collabs" />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      AVAILABLE
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                      <Crown className="w-3 h-3 text-yellow-500" />
                      PREMIUM BUILDER
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div 
              className="relative overflow-hidden rounded-3xl py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <GlassCard opacity="med" className="rounded-3xl p-0">
                <h3 className="mb-6 px-8 pt-8 text-sm font-medium text-zinc-400">Stack</h3>
                
                <div 
                  className="relative flex overflow-hidden"
                  style={{
                    maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                  }}
                >
                  <div className="animate-marquee flex gap-12 whitespace-nowrap px-4 pb-8 text-xs font-bold uppercase tracking-widest text-white/40">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-12 items-center">
                        <span>Tailwind CSS</span>
                        <span>Next.js</span>
                        <span>TypeScript</span>
                        <span>OpenAI API</span>
                        <span>Cursor AI</span>
                        <span>Supabase</span>
                        <span>Vercel</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
