import { useState } from 'react';
import { ExternalLink, Terminal, Activity, Zap, Box, Layers, Shield, Cpu, Monitor, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WaitlistModal from './WaitlistModal';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';
import { MagneticWrapper } from './ui/MagneticWrapper';

const projects = [
  {
    id: "PRJ-001",
    title: "Koda - AI Mobile IDE",
    description: "Engineering the first professional-grade code editor for Android. Directed AI agents to implement a custom Monaco-based engine with full ANSI terminal support, enabling high-performance development on the move.",
    highlights: ["Custom Monaco-inspired engine", "Multi-agent tool use architecture", "Integrated ANSI terminal", "Real-time sync & deployment"],
    image: "/koda-mockup.png",
    link: "#",
    btnText: "Join Waitlist",
    isWaitlist: true,
    status: "ACTIVE_BUILD",
    tech: ["Flutter", "OpenAI", "Edge Runtime"],
    metrics: { cpu: "84%", latency: "12ms", uptime: "99.9%" },
    featured: true,
    icon: Cpu
  },
  {
    id: "PRJ-001B",
    title: "Nudge - Minimalist CRM",
    description: "Orchestrated the build of a 'zero-friction' CRM for solo freelancers. Designed to handle high-throughput client data with automated 'nudges' and integrated pro features via Firebase & PostHog.",
    highlights: ["Rapid Client Onboarding", "Chronological Activity Logs", "Automated Smart Reminders", "Integrated Pro Upgrades"],
    image: "/nudge-mockup.png",
    link: "https://nudge-crm.vercel.app/",
    btnText: "Live Demo →",
    tech: ["Next.js 16", "Firebase", "PostHog", "Tailwind v4"],
    metrics: { cpu: "14%", latency: "18ms", uptime: "100%" },
    featured: false,
    icon: Shield
  },
  {
    id: "PRJ-002",
    title: "TenReq Tracker",
    description: "Streamlining the rental ecosystem. Orchestrated the build of a real-time request tracking system that eliminates tenant-landlord friction through automated status updates.",
    highlights: ["Automated status workflows", "Transparent activity logs", "Real-time notification node"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "https://tenreq.qzz.io/",
    btnText: "Live Demo →",
    tech: ["React", "Supabase", "Node.js"],
    metrics: { cpu: "12%", latency: "45ms", uptime: "100%" },
    icon: Activity
  },
  {
    id: "PRJ-003",
    title: "DataWall",
    description: "Next-gen data infrastructure for modern teams. Directed the architecture of a custom dashboard builder with atomic state management and encrypted synchronization pipelines.",
    highlights: ["Atomic state synchronization", "Zero-trust access control", "Modular architecture"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    btnText: "Review Stack",
    tech: ["Next.js", "Supabase", "TypeScript"],
    metrics: { cpu: "31%", latency: "28ms", uptime: "99.8%" },
    icon: Database
  },
  {
    id: "PRJ-004",
    title: "AutoVideo AI",
    description: "Automating visual storytelling. Designed a batch processing pipeline that leverages LLMs for script-to-video synthesis, reducing production overhead.",
    highlights: ["Script-to-video synthesis", "Scene detection", "Batch render pipeline"],
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    btnText: "Coming Soon",
    tech: ["Python", "OpenAI", "FFmpeg"],
    metrics: { cpu: "92%", latency: "140ms", uptime: "N/A" },
    icon: Box
  },
  {
    id: "PRJ-005",
    title: "everywheres.app",
    description: "Context-aware productivity. Engineered a geofenced habit system that triggers specific workflows based on spatial coordinates, with privacy-first encryption.",
    highlights: ["Spatial triggers", "Privacy-first", "Cross-platform sync"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
    link: "https://everywheres.app",
    btnText: "Visit Site",
    tech: ["React Native", "Supabase", "Maps"],
    metrics: { cpu: "08%", latency: "110ms", uptime: "100%" },
    icon: Monitor
  },
  {
    id: "PRJ-006",
    title: "Creator Hub",
    description: "Consolidating the creator tech stack. Directed the rapid development of 60+ integrated micro-services for digital entrepreneurs and researchers.",
    highlights: ["60+ micro-services", "High-throughput API", "Researcher-first UX"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    link: "https://vidtoolbox.qzz.io/",
    btnText: "Explore Tools →",
    tech: ["React", "AI APIs"],
    metrics: { cpu: "44%", latency: "32ms", uptime: "99.9%" },
    icon: Layers
  }
];

function ProjectCard({ project, index, isInView, onClick }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.1 
      }}
      className={`${project.featured ? 'lg:col-span-2' : ''} h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <GlassCard 
        className={`group h-full flex flex-col relative transition-all duration-500 overflow-hidden ${isHovered ? 'border-accent/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]' : ''}`}
        with3D={true}
        opacity="med"
        blur="md"
      >
        {/* Status Header */}
        <div className="flex items-center justify-between border-b border-border-visible px-5 py-4 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className={`w-1.5 h-1.5 rounded-none ${isHovered ? 'bg-text-display' : 'bg-text-disabled opacity-30'} transition-all duration-300`} />
            <span className="label-text text-[9px] tracking-[0.3em] font-black uppercase">NODE_{index + 1}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-success rounded-full animate-pulse" />
            <span className="label-text text-[9px] text-text-display tracking-[0.2em]">{project.status || 'STABLE'}</span>
          </div>
        </div>

        {/* Viewport Area */}
        <div className={`relative overflow-hidden bg-black ${project.featured ? 'h-[450px]' : 'h-72'}`}>
          <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none z-10" />
          
          <motion.img 
            src={project.image} 
            alt={project.title}
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? 'grayscale(0%) brightness(0.8)' : 'grayscale(100%) brightness(0.4)',
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover"
          />
          
          {/* Hover Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-[1px] p-8 flex flex-col justify-end z-20"
              >
                <div className="flex gap-4">
                  {project.tech?.map((t: string, ti: number) => (
                    <span key={ti} className="label-text text-white/60 text-[9px] tracking-widest border-l border-white/20 pl-3">
                      {t.toUpperCase()}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-10 pointer-events-none z-10" />
          
          {/* Tech Tags */}
          <div className="absolute bottom-6 left-6 flex flex-wrap gap-2.5 z-30">
            {project.tech?.slice(0, 2).map((t: string, ti: number) => (
              <span key={ti} className="label-text bg-black/90 text-text-display px-3 py-1.5 border border-border-visible backdrop-blur-md text-[8px] tracking-[0.2em]">
                {t}
              </span>
            ))}
          </div>
          
          {/* Floating Icon */}
          {project.icon && (
            <div className="absolute top-6 left-6 z-30 p-2.5 bg-black/60 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <project.icon className="w-4 h-4 text-accent" />
            </div>
          )}
        </div>

        {/* Project Description & Data */}
        <div className="p-10 space-y-8 flex-grow flex flex-col relative bg-surface/5">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <h3 className={`font-dot font-black text-text-display uppercase tracking-[-0.04em] group-hover:text-accent transition-colors duration-500 leading-none ${project.featured ? 'text-5xl sm:text-7xl' : 'text-3xl'}`}>
                {project.title}
              </h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed max-w-lg border-l border-border-visible pl-6 py-1">
                {project.description}
              </p>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="flex items-center gap-4">
              <Terminal size={14} className="text-accent opacity-60" />
              <div className="label-text text-[9px] text-text-disabled tracking-[0.4em]">HIGHLIGHTS</div>
              <div className="h-px flex-grow bg-border-visible/30" />
            </div>
            <ul className="space-y-4">
              {project.highlights.map((highlight: string, hIndex: number) => (
                <li key={hIndex} className="flex items-center gap-5 font-mono text-[11px] text-text-secondary group/item">
                  <span className="text-[10px] text-text-disabled opacity-30 group-hover/item:opacity-100 group-hover/item:text-accent transition-all">0{hIndex + 1}</span>
                  <span className="group-hover/item:text-text-display transition-colors tracking-wide leading-tight">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="pt-8 flex items-center justify-between border-t border-border-visible/50 mt-auto">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-accent/20" />
              <span className="font-mono text-[9px] text-text-disabled tracking-widest uppercase">STABLE</span>
            </div>

            {project.link !== "#" || project.btnText === "Join Waitlist" ? (
              <MagneticWrapper strength={0.2}>
                <a 
                  href={project.link} 
                  className={`group/btn relative inline-flex items-center gap-4 font-mono text-[10px] font-black uppercase tracking-[0.3em] py-4 px-10 transition-all ${project.isWaitlist ? 'bg-text-display text-black hover:bg-white' : 'border border-border-visible text-text-display hover:border-text-display hover:bg-white/5'}`}
                >
                  {project.btnText}
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </MagneticWrapper>
            ) : (
              <div className="flex items-center gap-4 font-mono text-[10px] font-black uppercase tracking-[0.3em] py-4 px-10 border border-border-visible text-text-disabled opacity-30 cursor-not-allowed">
                {project.btnText}
                <Box size={14} />
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("");
  const { ref: triggerRef, isInView } = useScrollTrigger();

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-40 bg-black border-b border-border-visible relative overflow-hidden perspective-3d" ref={triggerRef}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-accent/5 rounded-full blur-[160px] pointer-events-none opacity-30" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-16 w-1 bg-accent shadow-[0_0_15px_rgba(215,25,33,0.5)]" />
              <div className="space-y-1.5">
                <h2 className="text-6xl sm:text-8xl font-dot font-black tracking-[-0.04em] text-text-display uppercase leading-[0.85]">
                  Featured <span className="text-text-secondary opacity-40 outline-text-white italic">Work</span>
                </h2>
              </div>
            </div>
            <p className="font-sans text-text-secondary text-xl pl-8 border-l border-border-visible/50 leading-relaxed max-w-xl py-1">
              High-fidelity digital artifacts engineered with autonomous agents. 
              Each node represents a distinct operational milestone in technical orchestration.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-end gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex gap-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`w-1.5 h-8 border-x border-border-visible/30 ${i < 4 ? 'bg-accent/40' : 'bg-transparent'}`} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isInView={isInView} 
                onClick={() => {
                  if (project.isWaitlist) {
                    setActiveProject(project.title);
                    setIsModalOpen(true);
                  }
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="mt-24 flex justify-center"
          >
            <MagneticWrapper strength={0.2}>
              <button 
                onClick={() => setShowAll(!showAll)}
                className="group/more relative flex items-center gap-8 font-mono text-[11px] font-black uppercase tracking-[0.4em] py-6 px-16 border border-border-visible text-text-display hover:border-text-display transition-all bg-surface/10 backdrop-blur-md overflow-hidden"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-2 h-2 rounded-none ${showAll ? 'bg-accent' : 'bg-text-display'}`} />
                  <span>{showAll ? 'SHOW LESS' : 'VIEW FULL ARCHIVE'}</span>
                </div>
                <Activity size={16} className={`relative z-10 transition-transform duration-700 ${showAll ? 'rotate-180 text-accent' : 'group-hover/more:rotate-90'}`} />
              </button>
            </MagneticWrapper>
          </motion.div>
        )}
      </div>

      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projectTitle={activeProject} 
      />
    </section>
  );
}
