import { useState, useRef } from 'react';
import { ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WaitlistModal from './WaitlistModal';
import { GlassCard } from '@/components/ui/glass-card';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { use3DTransform } from '@/hooks/use3DTransform';
import { useGlassEffect } from '@/hooks/useGlassEffect';

const projects = [
  {
    title: "Koda - AI Mobile IDE",
    description: "Full-featured code editor for Android with AI-powered assistance. Solved mobile coding limitations by directing AI to build a Monaco-inspired editor and ANSI terminal in record time. Built by orchestrating AI agents to handle complex logic and UI generation.",
    highlights: ["Built with Flutter from scratch", "AI chat with tool use capabilities", "File explorer + ANSI terminal", "Live code execution"],
    image: "/koda-mockup.png",
    link: "#",
    btnText: "Join Waitlist",
    isWaitlist: true,
    status: "Building",
    tech: ["Flutter", "OpenAI API", "Edge Functions"],
    featured: true
  },
  {
    title: "Landlord Tenant Tracker",
    description: "A smart system designed to simplify communication. Solved tenant-landlord friction by directing AI to build a real-time tracking dashboard in record time. Built by orchestrating AI agents to handle complex logic and UI generation.",
    highlights: ["Request tracking dashboard", "Notifications & updates", "Real-world productivity tool"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "https://tenreq.qzz.io/",
    btnText: "Live Demo →",
    tech: ["React", "Supabase", "Node.js"]
  },
  {
    title: "DataWall",
    description: "Secure data visualization and management platform. Solved data silos by directing AI to build a custom dashboard builder with real-time sync in record time. Built by orchestrating AI agents to handle complex logic and UI generation.",
    highlights: ["Real-time data sync", "Role-based access control", "Custom dashboard builder"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    btnText: "Live Demo",
    tech: ["Next.js", "Supabase", "TypeScript"]
  },
  {
    title: "AutoVideo AI",
    description: "AI-powered video automation tool. Solved manual video editing by directing AI to build automated scripting and batch processing pipelines in record time. Built by orchestrating AI agents to handle complex logic and UI generation.",
    highlights: ["Automated video editing", "AI script generation", "Batch processing"],
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    btnText: "Coming Soon",
    tech: ["Python", "OpenAI API", "FFmpeg"]
  },
  {
    title: "everywheres.app",
    description: "Location-based productivity tracker. Solved habit inconsistency by directing AI to build geofenced reminders in record time. Built by orchestrating AI agents to handle complex logic and UI generation.",
    highlights: ["Geofenced reminders", "Location-based habits", "Privacy-first design"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
    link: "https://everywheres.app",
    btnText: "Visit Site",
    tech: ["React Native", "Supabase", "Maps API"]
  },
  {
    title: "Creator Tools Hub",
    description: "An all-in-one creator platform. Solved workflow fragmentation by directing AI to build 60+ integrated tools in record time. Built by orchestrating AI agents to handle complex logic and UI generation.",
    highlights: ["60+ AI powered tools", "Built for creators & students", "Productivity focused platform"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    link: "https://vidtoolbox.qzz.io/",
    btnText: "Visit Website →",
    tech: ["React", "AI APIs"]
  }
];

function ProjectCard({ project, index, isInView, isMobile }: any) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const { rotation } = use3DTransform(cardRef);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={project.featured ? 'lg:col-span-2' : ''}
    >
      <div 
        ref={cardRef}
        className="h-full"
        style={!isMobile ? {
          perspective: '1000px',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out'
        } : {}}
      >
        <GlassCard 
          opacity="low" 
          hoverEffect="glow"
          className={`group h-full flex flex-col overflow-hidden transition-all duration-300 ${project.status === 'Building' ? 'ring-1 ring-white/10' : ''}`}
        >
          <div className={`relative ${project.featured ? 'h-80' : 'h-64'} overflow-hidden`}>
            <motion.img 
              style={{ y: !isMobile ? imageY : 0, scale: 1.15 }}
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover origin-center transition-transform duration-700 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
            
            {project.status && (
              <div className="absolute top-4 left-4 z-10">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    {project.status === 'Building' ? 'Building in Public' : project.status}
                  </span>
                </div>
              </div>
            )}

            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {project.tech?.map((t: string, ti: number) => (
                <span key={ti} className="text-[9px] font-bold uppercase tracking-tight bg-white/10 text-white/70 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 space-y-6 flex-grow flex flex-col relative z-20 bg-zinc-950/80 backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`text-2xl font-bold text-white group-hover:text-zinc-300 transition-colors ${project.featured ? 'text-3xl' : ''}`}>
                  {project.title}
                </h3>
                {project.status === 'Building' && <Sparkles size={16} className="text-yellow-500 animate-pulse" />}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed min-h-12 overflow-hidden">
                {project.description}
              </p>
            </div>

            <div className="space-y-3 flex-grow">
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Major Functions</div>
              <ul className="grid grid-cols-1 gap-1.5">
                {project.highlights.map((highlight: string, hIndex: number) => (
                  <li key={hIndex} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-white opacity-40 shrink-0" />
                    <span className="truncate">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.link !== "#" || project.btnText === "Join Waitlist" ? (
              <a 
                href={project.link} 
                className={`inline-flex items-center justify-center gap-2 text-sm font-semibold mt-4 border border-white/10 py-3 px-6 rounded-full transition-all hover:glass-glow ${project.isWaitlist ? 'bg-white text-black hover:bg-zinc-200' : 'bg-white/5 text-white hover:bg-white hover:text-black'}`}
              >
                {project.btnText}
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold mt-4 border border-white/10 py-3 px-6 rounded-full bg-white/5 text-white/50 cursor-not-allowed">
                {project.btnText}
              </span>
            )}
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("");
  const { ref: triggerRef, isInView } = useScrollTrigger();
  const { isMobile } = useGlassEffect();

  return (
    <section id="projects" className="py-24 sm:py-32 bg-zinc-950" ref={triggerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4 italic leading-tight">Featured Projects</h2>
            <p className="text-zinc-500 italic text-lg">Selected products built with an AI-first mindset.</p>
          </motion.div>
          <motion.div 
            className="text-zinc-500 text-sm font-medium tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {projects.length} PRODUCTS SHIPPED / SHIPPING
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} onClick={() => {
              if (project.isWaitlist) {
                setActiveProject(project.title);
                setIsModalOpen(true);
              }
            }}>
              <ProjectCard project={project} index={index} isInView={isInView} isMobile={isMobile} />
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
