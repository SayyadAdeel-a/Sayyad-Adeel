import { Code2, Layout, Terminal, Blocks, Search, Smartphone, Bot, Zap, Video } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';

export default function Skills() {
  const skillList = [
    { name: "AI Development", icon: Bot },
    { name: "No-Code Tools", icon: Blocks },
    { name: "Web App Building", icon: Code2 },
    { name: "Mobile App Prototyping", icon: Smartphone },
    { name: "Automation Workflows", icon: Zap },
    { name: "Prompt Engineering", icon: Terminal },
    { name: "Video Editing", icon: Video },
    { name: "UI Design", icon: Layout },
    { name: "Basic SEO", icon: Search },
  ];

  return (
    <section id="skills" className="relative py-24 bg-zinc-950 overflow-hidden">
      <BGPattern variant="dots" size={24} fill="#ffffff08" mask="fade-edges" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Skills & Tools</h2>
          <div className="h-1 w-20 bg-white/20 mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skillList.map((skill, index) => (
            <div 
              key={index}
              className="inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-4 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-1 group"
            >
              <skill.icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
