import RadialOrbitalTimeline from "./ui/radial-orbital-timeline";
import { Zap, Target, Rocket, GraduationCap, Code } from "lucide-react";

const journeyData = [
  {
    id: 1,
    title: "Logic Genesis",
    date: "Early 2023",
    content: "Mastered full-stack fundamentals. Built 50+ experimental projects exploring React, Node.js, and architectural patterns.",
    category: "Learning",
    icon: GraduationCap,
    relatedIds: [2],
    status: "completed" as const,
    energy: 60,
  },
  {
    id: 2,
    title: "First Deployment",
    date: "June 2023",
    content: "Launched my first SaaS: A property management suite. Deployed to beta testers in Pakistan, providing real-world productivity value.",
    category: "Product",
    icon: Target,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Scaling Complexity",
    date: "Sept 2023",
    content: "Developed VidToolbox. Architected a multi-modular hub with 60+ toolsets, handling complex state and high-velocity rendering.",
    category: "Project",
    icon: Rocket,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 4,
    title: "AI Paradigm Shift",
    date: "Jan 2024",
    content: "Pivoted to AI-First development. Mastered agentic frameworks, shipping automated LLM workers and autonomous research tools.",
    category: "Growth",
    icon: Zap,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "The Koda Mission",
    date: "Present",
    content: "Building the world's most powerful mobile IDE. Redefining how we ship production code using agentic workflows on high-fidelity mobile interfaces.",
    category: "Focus",
    icon: Code,
    relatedIds: [4],
    status: "in-progress" as const,
    energy: 100,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-transparent overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-ai-magenta/20 bg-ai-magenta/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ai-magenta shadow-[0_0_15px_rgba(255,0,255,0.1)]">
              Evolution
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight text-white leading-tight">
              The Path of an <br/>
              <span className="text-gradient-ai italic">AI Builder.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm italic text-lg leading-relaxed font-sans group-hover:text-zinc-400 transition-colors duration-700">
            A non-linear journey through pixels, logic, and intelligent agents.
          </p>
        </div>
        
        <div className="h-[750px] p-1 glass-2 rounded-[3.5rem] relative group border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
            <div className="w-full h-full rounded-[3.4rem] bg-bg-deep/50 overflow-hidden relative">
                <RadialOrbitalTimeline timelineData={journeyData} />
                
                {/* Interface Hints */}
                <div className="absolute top-10 left-10 p-6 glass-3 border-white/20 rounded-3xl hidden lg:block backdrop-blur-3xl shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                       <div className="w-7 h-7 rounded-full border-2 border-bg-deep bg-ai-cyan shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                       <div className="w-7 h-7 rounded-full border-2 border-bg-deep bg-ai-purple shadow-[0_0_10px_rgba(123,97,255,0.5)]" />
                       <div className="w-7 h-7 rounded-full border-2 border-bg-deep bg-ai-magenta shadow-[0_0_10px_rgba(255,0,255,0.5)]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-white">Multimodal Journey</span>
                      <span className="text-[8px] text-zinc-500 uppercase tracking-widest font-bold">Node Visualization v4.2</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 text-zinc-500 text-[10px] font-extrabold uppercase tracking-[0.4em] flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 italic">
                    <div className="flex items-center gap-3 group/node cursor-default">
                        <div className="w-3 h-3 rounded-full bg-ai-cyan shadow-[0_0_15px_rgba(0,255,255,0.9)] transition-all group-hover/node:scale-125" />
                        <span className="group-hover/node:text-ai-cyan transition-colors">Completed Node</span>
                    </div>
                    <div className="flex items-center gap-3 group/node cursor-default">
                        <div className="w-3 h-3 rounded-full bg-white animate-pulse transition-all group-hover/node:scale-125" />
                        <span className="group-hover/node:text-white transition-colors">In Mutation</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
