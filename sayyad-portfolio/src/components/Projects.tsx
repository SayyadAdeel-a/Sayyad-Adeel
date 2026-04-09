import { useState } from 'react';
import { ExternalLink, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const projects = [
  {
    title: "Koda - AI Mobile IDE",
    description: "The world's first professional code editor for mobile with autonomous AI agents. Ship code from your phone with live tool execution.",
    highlights: ["Built with Flutter Architecture", "AI Agent with Terminal Access", "Live Shell & Tool Execution", "Modern Monaco-based Engine"],
    image: "/koda_app_mockup_1775746659376.png",
    link: "#",
    btnText: "Join Waitlist",
    isWaitlist: true,
    status: "Building",
    tech: ["Flutter", "Gemini Pro", "Supabase"],
    featured: true
  },
  {
    title: "Tenreq - Property Sync",
    description: "A smart management ecosystem simplifying property communications through real-time sync and automated notice tracking.",
    highlights: ["Scalable Node.js Backend", "Real-time Notification Engine", "Automated Request Queue"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "https://tenreq.qzz.io/",
    btnText: "Live Demo →",
    tech: ["React", "Supabase", "Node.js"]
  },
  {
    title: "DataWall",
    description: "Enterprise-grade observability dashboard for real-time data streaming and role-based architectural visualization.",
    highlights: ["Low-latency Data Streams", "Granular RBAC System", "Dynamic Dashboard Builder"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    btnText: "Internal Tool",
    tech: ["Next.js", "Supabase", "TypeScript"]
  },
  {
    title: "AutoVideo AI",
    description: "Generative AI engine for automated video synthesis. Transforms scripts into edited media assets autonomously.",
    highlights: ["LLM-driven Scripting", "Automated FFmpeg Cycles", "Cloud Parallel Processing"],
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    btnText: "Coming Soon",
    tech: ["Python", "OpenAI API", "FFmpeg"]
  },
  {
    title: "VidToolbox Hub",
    description: "A comprehensive AI ecosystem featuring 60+ specialized generators for content modern production.",
    highlights: ["60+ Specialized AI Tools", "Content Generation Engine", "Infinite Scale Architecture"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    link: "https://vidtoolbox.qzz.io/",
    btnText: "Visit Hub →",
    tech: ["React", "Generative APIs"]
  }
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("");

  const handleBtnClick = (e: React.MouseEvent, project: typeof projects[0]) => {
    if (project.isWaitlist || project.btnText === "Coming Soon") {
      e.preventDefault();
      if (project.isWaitlist) {
        setActiveProject(project.title);
        setIsModalOpen(true);
      }
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 animate-fade-in text-center md:text-left">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ai-cyan/20 bg-ai-cyan/5 text-ai-cyan text-[10px] font-bold uppercase tracking-widest">
              <Sparkles size={12} />
              Featured Shipments
            </div>
            <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tight text-white leading-tight">
              Products <span className="text-gradient-ai text-glow-cyan">Built to Scale.</span>
            </h2>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-md">Engineering intelligent solutions for the modern AI-first world.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 group cursor-default">
            <div className="text-white font-heading font-bold text-5xl group-hover:text-ai-cyan transition-colors duration-500">8+</div>
            <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
               <Zap size={10} className="text-white/40" />
               Products Shipped
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col rounded-[3rem] glass-2 overflow-hidden transition-all duration-700 hover:glass-3 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className={`relative ${project.featured ? 'h-[28rem]' : 'h-72'} overflow-hidden`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/40 to-transparent opacity-90" />
                
                {project.status && (
                  <div className="absolute top-8 left-8 z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2 backdrop-blur-3xl">
                      <div className="h-2 w-2 rounded-full bg-ai-cyan animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                        {project.status === 'Building' ? 'Building in Public' : project.status}
                      </span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                  {project.tech?.map((t, ti) => (
                    <span key={ti} className="text-[9px] font-bold uppercase tracking-widest bg-white/5 text-white/70 px-4 py-1.5 rounded-full backdrop-blur-3xl border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 sm:p-12 space-y-8 flex-grow flex flex-col">
                <div className="space-y-4">
                  <h3 className={`font-heading font-bold text-white transition-all duration-500 ${project.featured ? 'text-4xl sm:text-5xl group-hover:text-glow-cyan' : 'text-2xl sm:text-3xl'}`}>
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] flex items-center gap-2">
                    <div className="h-px w-8 bg-zinc-800" />
                    Core Capabilities
                  </div>
                  <ul className="grid grid-cols-1 gap-4">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-4 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-ai-purple/60 shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={project.link} 
                  target={(project.isWaitlist || project.btnText === "Coming Soon") ? undefined : "_blank"} 
                  rel={(project.isWaitlist || project.btnText === "Coming Soon") ? undefined : "noopener noreferrer"}
                  onClick={(e) => handleBtnClick(e, project)}
                  className={`group/btn relative inline-flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] mt-8 py-5 px-10 rounded-2.5xl transition-all duration-500 overflow-hidden ${project.isWaitlist ? 'bg-white text-black hover:bg-ai-cyan hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black'}`}
                >
                  <span className="relative z-10">{project.btnText}</span>
                  <ExternalLink className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                  {project.isWaitlist && (
                    <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-magenta opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectTitle={activeProject} 
      />
    </section>
  );
}

