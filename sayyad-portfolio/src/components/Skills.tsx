import { Code2, Server, Bot, Terminal } from 'lucide-react';

const skillCategories = [
  {
    name: "Frontend Architecture",
    icon: Code2,
    skills: ["React 19", "Next.js 15", "Flutter 3.x", "TypeScript", "Tailwind v4"],
    color: "group-hover:text-ai-cyan"
  },
  {
    name: "Backend & Infra",
    icon: Server,
    skills: ["Supabase", "Node.js", "PostgreSQL", "Edge Functions", "Redis"],
    color: "group-hover:text-ai-purple"
  },
  {
    name: "Artificial Intelligence",
    icon: Bot,
    skills: ["OpenAI / Gemini", "LangChain", "Agentic Ops", "Vector DBs", "RAG"],
    color: "group-hover:text-ai-magenta"
  },
  {
    name: "Dev Performance",
    icon: Terminal,
    skills: ["Git/GitHub", "Vercel", "Cursor AI", "Figma", "CI/CD Pipelines"],
    color: "group-hover:text-white"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-ai-cyan/5 blur-[150px] rounded-full pointer-events-none opacity-30" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-ai-purple/20 bg-ai-purple/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ai-purple">
              Toolbox
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight text-white leading-tight">
              My Foundry of <br/>
              <span className="text-gradient-ai italic">Modern Tech.</span>
            </h2>
          </div>
          <div className="text-zinc-500 text-[10px] font-bold tracking-[0.4em] uppercase py-2 italic border-b border-white/10">
            Model-First Developer Stack
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group glass-2 p-12 rounded-[3rem] transition-all duration-700 hover:glass-3 hover:-translate-y-2 border-white/5 hover:border-white/20 relative overflow-hidden"
            >
              {/* Animated Accent Glow */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-ai-cyan/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="w-20 h-20 rounded-[2rem] bg-bg-deep border border-white/10 flex items-center justify-center mb-10 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 shadow-2xl relative">
                <div className={`absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-[2rem]`} />
                <category.icon className={`w-10 h-10 text-white transition-all duration-700 ${category.color} group-hover:drop-shadow-[0_0_8px_currentColor]`} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-8 leading-tight tracking-tight uppercase">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="text-[10px] font-extrabold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full bg-white/5 text-zinc-500 group-hover:text-zinc-300 transition-all duration-500 border border-white/5 hover:border-white/20 hover:bg-white/10 active:scale-95"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Decorative Edge */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
