import { Code2, Server, Bot, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { use3DTransform } from '@/hooks/use3DTransform';
import { useRef } from 'react';
import { useGlassEffect } from '@/hooks/useGlassEffect';

const skillCategories = [
  {
    name: "Primary Agents",
    icon: Bot,
    skills: ["Claude Code", "GitHub Copilot", "Google Gemini", "Cursor AI"]
  },
  {
    name: "Frontend Deployed",
    icon: Code2,
    skills: ["React.js", "Next.js", "Flutter", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Backend Deployed",
    icon: Server,
    skills: ["Supabase", "Node.js", "Edge Functions", "PostgreSQL", "REST APIs"]
  },
  {
    name: "Orchestration & Tools",
    icon: Terminal,
    skills: ["Prompt Engineering", "System Architecture", "Git/GitHub", "Vercel"]
  }
];

export default function Skills() {
  const { ref: triggerRef, isInView } = useScrollTrigger();
  const { isMobile } = useGlassEffect();

  return (
    <section id="skills" className="py-24 bg-zinc-950" ref={triggerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div 
            className="max-w-xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4 italic leading-tight">My AI Command Center</h2>
            <p className="text-zinc-500 italic">Primary Agents: Claude Code, GitHub Copilot, Google Gemini. My co-pilots for architecture, code generation, and rapid debugging.</p>
          </motion.div>
          <motion.div 
            className="text-zinc-500 text-sm font-medium tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Technologies I Deploy via AI
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} isInView={isInView} isMobile={isMobile} />
          ))}
        </div>

      </div>
    </section>
  );
}

function SkillCard({ category, index, isInView, isMobile }: any) {
  const cardRef = useRef(null);
  const { rotation } = use3DTransform(cardRef);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div 
        ref={cardRef}
        style={!isMobile ? {
          perspective: '1000px',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out'
        } : {}}
      >
        <GlassCard 
          opacity="med"
          className="group p-8 rounded-3xl transition-all hover:scale-105 hover:-translate-y-1"
        >
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
            <category.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-4 italic">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill: string, sIndex: number) => (
              <motion.span 
                key={sIndex}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 group-hover:text-white transition-colors border border-white/5 shadow-sm"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + sIndex * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}
