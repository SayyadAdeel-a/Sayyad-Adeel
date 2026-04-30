import RadialOrbitalTimeline from "./ui/radial-orbital-timeline";
import { Zap, Target, Rocket, GraduationCap, Code, Timer, BarChart3, Binary } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { GlassCard } from "./ui/GlassCard";

const journeyData = [
  {
    id: 1,
    title: "The Beginning",
    date: "Early 2023",
    content: "Dived into web development, mastering HTML, CSS, and JavaScript. Completed 50+ tutorials and built 5 foundational web apps.",
    category: "Learning",
    icon: GraduationCap,
    relatedIds: [2],
    status: "completed" as const,
    energy: 60,
  },
  {
    id: 2,
    title: "Landlord-Tenant Tracker",
    date: "June 2023",
    content: "Launched my first production app. A productivity tool for property management deployed to 10+ beta testers for real-world feedback.",
    category: "Product",
    icon: Target,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Creator Tools Hub",
    date: "September 2023",
    content: "Developed VidToolbox, a comprehensive platform with 60+ AI-powered modules. First taste of scaling a complex SaaS project.",
    category: "Project",
    icon: Rocket,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 4,
    title: "AI Integration Mastery",
    date: "January 2024",
    content: "Deep dived into AI Agent frameworks and LLM integrations. Mastered OpenAI SDK and Gemini API, shipping 3 automated AI tools in 4 weeks.",
    category: "Growth",
    icon: Zap,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "Koda - Mobile First Dev",
    date: "March 2024",
    content: "The current mission: 'Ship code from your phone'. Building a revolutionary mobile IDE. 100+ commits and 5 core modules ready.",
    category: "Present",
    icon: Code,
    relatedIds: [4],
    status: "in-progress" as const,
    energy: 100,
  },
];

export default function Journey() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="journey" className="py-24 sm:py-32 bg-black overflow-hidden relative border-b border-border-visible perspective-3d" ref={triggerRef}>
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-interactive/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Timer className="w-4 h-4 text-text-secondary" />
              <span className="label-text text-text-display">CHRONOLOGY / HISTORY</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-display font-bold tracking-tighter text-text-display mb-8 uppercase leading-none glow-text">
              Operational <br />
              Timeline
            </h2>
            
            <p className="font-sans text-text-secondary text-lg leading-relaxed border-l-2 border-border-visible pl-6">
              A trace of my evolution from a curious learner to an AI-native orchestrator. Each node represents a major deployment or technical breakthrough.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-4 min-w-[240px]"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-4 flex items-center justify-between" opacity="low" blur="sm" interactive={false}>
              <div className="flex items-center gap-3">
                <BarChart3 className="w-4 h-4 text-success" />
                <span className="label-text text-[10px]">TOTAL MILESTONES</span>
              </div>
              <span className="font-mono text-text-display font-bold">05</span>
            </GlassCard>
            <GlassCard className="p-4 flex items-center justify-between" opacity="low" blur="sm" interactive={false}>
              <div className="flex items-center gap-3">
                <Binary className="w-4 h-4 text-interactive" />
                <span className="label-text text-[10px]">COMMIT STATUS</span>
              </div>
              <span className="font-mono text-text-display font-bold">STABLE</span>
            </GlassCard>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GlassCard 
            className="h-[700px] relative overflow-hidden group"
            opacity="med"
            blur="lg"
            with3D={true}
          >
              {/* Background elements for the visualization */}
              <div className="absolute inset-0 dot-grid-subtle opacity-30 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-visible to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-visible to-transparent" />
              
              <RadialOrbitalTimeline timelineData={journeyData} />
              
              {/* Legend / Status Indicators */}
              <div className="absolute bottom-8 right-8 font-mono text-text-secondary text-[8px] flex flex-col items-end gap-3 pointer-events-none z-10 uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-3 px-3 py-1.5 border border-border-visible bg-black/80 backdrop-blur-sm">
                      <span className="text-text-display">COMPLETED</span>
                      <div className="w-2 h-2 bg-text-display"></div>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-1.5 border border-border-visible bg-black/80 backdrop-blur-sm">
                      <span className="text-text-display">IN PROGRESS</span>
                      <div className="w-2 h-2 border border-text-display animate-pulse"></div>
                  </div>
              </div>

              {/* Corner metadata */}
              <div className="absolute top-4 left-4 font-mono text-[8px] text-text-disabled opacity-50 select-none">
                TIMELINE V2.4<br />
                PROJECT HISTORY
              </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
