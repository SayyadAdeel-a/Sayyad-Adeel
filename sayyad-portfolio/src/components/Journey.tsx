import RadialOrbitalTimeline from "./ui/radial-orbital-timeline";
import { GraduationCap, Target, Rocket, Zap, Code } from "lucide-react";
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
    <section id="journey" className="py-40 bg-black relative overflow-hidden" ref={triggerRef}>
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 mb-32 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <div className="w-12 h-[2px] bg-accent" />
              <h2 className="text-5xl md:text-7xl font-display font-black text-text-display leading-none tracking-tighter">
                TECHNICAL <br />
                <span className="text-text-secondary italic">CHRONOLOGY.</span>
              </h2>
            </div>
          </motion.div>

          <motion.p 
            className="text-lg text-text-secondary leading-relaxed max-w-xl pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A trace of my evolution from a curious learner to an AI-native orchestrator. Each milestone represents a major technical breakthrough or production deployment.
          </motion.p>
        </div>

        {/* Visual Timeline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <GlassCard 
            className="h-[800px] border-white/5 relative overflow-hidden"
            opacity="low"
            blur="lg"
            with3D={true}
            interactive={false}
          >
            <RadialOrbitalTimeline timelineData={journeyData} />
            
            {/* Minimalist Legend */}
            <div className="absolute bottom-12 right-12 flex flex-col gap-4 font-mono text-[10px] text-text-disabled tracking-widest uppercase">
              <div className="flex items-center gap-4 px-4 py-2 border border-white/5 bg-zinc-900/50 backdrop-blur-md">
                <div className="w-2 h-2 bg-text-display" />
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-4 px-4 py-2 border border-white/5 bg-zinc-900/50 backdrop-blur-md">
                <div className="w-2 h-2 border border-accent animate-pulse" />
                <span className="text-accent">Active Mission</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
