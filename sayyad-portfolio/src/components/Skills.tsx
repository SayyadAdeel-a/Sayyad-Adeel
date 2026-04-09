import { Code2, Server, Bot, Terminal } from 'lucide-react';

const skillCategories = [
  {
    name: "Frontend",
    icon: Code2,
    skills: ["React.js", "Next.js", "Flutter", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Supabase", "Node.js", "Edge Functions", "PostgreSQL", "REST APIs"]
  },
  {
    name: "AI & ML",
    icon: Bot,
    skills: ["OpenAI API", "Google Gemini", "Prompt Engineering", "AI Agent Frameworks"]
  },
  {
    name: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git/GitHub", "Vercel", "Cursor IDE", "Figma", "CI/CD"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4 italic leading-tight">My Stack</h2>
            <p className="text-zinc-500 italic">Built for speed, scale, and intelligence.</p>
          </div>
          <div className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
            Modern AI-First Architecture
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md transition-all hover:bg-white/[0.05] hover:border-white/10"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 italic">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 group-hover:text-white transition-colors border border-white/5 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
