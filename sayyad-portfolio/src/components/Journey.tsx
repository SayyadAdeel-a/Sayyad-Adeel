import RadialOrbitalTimeline from "./ui/radial-orbital-timeline";
import { Zap, Target, Rocket, GraduationCap, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

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
    <section id="journey" className="py-24 bg-zinc-950 overflow-hidden relative" ref={triggerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4 italic leading-tight">My Journey</h2>
          <p className="text-zinc-500 italic max-w-2xl">
            A visual representation of my growth, the projects I've built, and the milestones I've reached in the world of tech and AI.
          </p>
        </motion.div>
        
        <motion.div 
          className="h-[700px] border border-white/5 rounded-[2.5rem] shadow-2xl relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <RadialOrbitalTimeline timelineData={journeyData} />
            
            {/* Legend or hint */}
            <div className="absolute bottom-10 left-10 text-zinc-500 text-xs flex items-center gap-4 pointer-events-none z-10">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                    <span className="backdrop-blur-sm bg-black/20 px-2 py-1 rounded">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20 border border-white shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                    <span className="backdrop-blur-sm bg-black/20 px-2 py-1 rounded">In Progress</span>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
