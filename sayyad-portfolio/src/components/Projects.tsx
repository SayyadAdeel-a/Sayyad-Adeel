import { useState } from 'react';
import { ExternalLink, Terminal, Activity, Zap, Box, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WaitlistModal from './WaitlistModal';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';

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
    featured: true
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
    featured: false
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
    metrics: { cpu: "12%", latency: "45ms", uptime: "100%" }
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
    metrics: { cpu: "31%", latency: "28ms", uptime: "99.8%" }
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
    metrics: { cpu: "92%", latency: "140ms", uptime: "N/A" }
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
    metrics: { cpu: "08%", latency: "110ms", uptime: "100%" }
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
    metrics: { cpu: "44%", latency: "32ms", uptime: "99.9%" }
  }
];

function ProjectCard({ project, index, isInView, onClick }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, delay: index * 0.05 }}
      className={`${project.featured ? 'lg:col-span-2' : ''} h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <GlassCard 
        className={`group h-full flex flex-col relative transition-all duration-500 ${isHovered ? 'glass-glow' : ''}`}
        with3D={true}
        opacity="med"
        blur="md"
      >
        {/* Hardware Status Header */}
        <div className="flex items-center justify-between border-b border-border-visible px-4 py-3 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-text-display' : 'bg-text-disabled'} transition-colors animate-pulse`} />
              <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'ACTIVE_BUILD' ? 'bg-accent' : 'bg-text-disabled opacity-30'}`} />
            </div>
            <span className="label-text text-[10px] tracking-widest">{project.id}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 opacity-50">
              <Activity size={10} />
              <span className="font-mono text-[8px]">{project.metrics.latency}</span>
            </div>
            <div className="h-4 w-[1px] bg-border-visible" />
            <span className="label-text text-[9px] text-text-display">{project.status || 'DEPLOYED'}</span>
          </div>
        </div>

        {/* Viewport Area */}
        <div className={`relative overflow-hidden bg-black ${project.featured ? 'h-96' : 'h-72'}`}>
          {/* Grid Overlay */}
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          
          <motion.img 
            src={project.image} 
            alt={project.title}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
              opacity: isHovered ? 1 : 0.4
            }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
          
          {/* Technical Metadata Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] p-6 flex flex-col justify-between z-20"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="label-text text-white text-[8px] opacity-70">CORE_ARCHITECTURE</p>
                    <p className="font-mono text-[10px] text-white">X86-64_COMPATIBLE</p>
                  </div>
                  <div className="text-right">
                    <p className="label-text text-white text-[8px] opacity-70">ENCRYPTION</p>
                    <p className="font-mono text-[10px] text-white">AES-256-GCM</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]: [string, any]) => (
                    <div key={key} className="border-l border-white/20 pl-3">
                      <p className="label-text text-white text-[8px] opacity-50">{key.toUpperCase()}</p>
                      <p className="font-mono text-xs text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 scanline opacity-0 group-hover:opacity-20 pointer-events-none z-10" />
          
          {/* Tech Stack Chips */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 transition-transform duration-500 group-hover:translate-y-[-4px] z-30">
            {project.tech?.map((t: string, ti: number) => (
              <span key={ti} className="label-text bg-black/90 text-text-display px-2 py-1 border border-border-visible backdrop-blur-md shadow-lg">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description & Data */}
        <div className="p-8 space-y-6 flex-grow flex flex-col relative bg-surface/10 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <h3 className={`font-display font-bold text-text-display uppercase tracking-tighter group-hover:glow-text transition-all duration-500 ${project.featured ? 'text-4xl' : 'text-2xl'}`}>
                {project.title}
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed max-w-lg">
                {project.description}
              </p>
            </div>
            {project.featured && (
              <div className="hidden lg:block">
                <Box size={24} className="text-text-display opacity-20" />
              </div>
            )}
          </div>

          <div className="space-y-4 flex-grow">
            <div className="flex items-center gap-3">
              <Layers size={14} className="text-text-secondary" />
              <div className="label-text text-[10px] text-text-display tracking-[0.2em]">LOG_ENTRIES.txt</div>
              <div className="h-[1px] flex-grow bg-border-visible/50" />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-3">
              {project.highlights.map((highlight: string, hIndex: number) => (
                <li key={hIndex} className="flex items-start gap-3 font-mono text-[11px] text-text-secondary leading-tight group/item">
                  <span className="text-text-display opacity-30 group-hover/item:opacity-100 transition-opacity">0{hIndex + 1}</span>
                  <span className="group-hover/item:text-text-display transition-colors">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Controls */}
          <div className="pt-6 flex items-center justify-between border-t border-border-visible mt-auto">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="label-text text-[8px] opacity-40">PERMISSIONS</span>
                <span className="label-text text-text-display text-[9px]">{project.link === '#' ? 'RESTRICTED' : 'GRANTED'}</span>
              </div>
              <div className="w-[1px] h-6 bg-border-visible" />
              <div className="flex flex-col">
                <span className="label-text text-[8px] opacity-40">NODE_VER</span>
                <span className="label-text text-text-display text-[9px]">v2.4.0</span>
              </div>
            </div>

            {project.link !== "#" || project.btnText === "Join Waitlist" ? (
              <a 
                href={project.link} 
                className={`group/btn relative inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] py-3 px-8 transition-all overflow-hidden ${project.isWaitlist ? 'bg-text-display text-black' : 'border border-border-visible text-text-display hover:border-text-display'}`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {project.btnText}
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </span>
                {!project.isWaitlist && (
                  <div className="absolute inset-0 bg-text-display translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                )}
              </a>
            ) : (
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] py-3 px-8 border border-border-visible text-text-disabled opacity-40 cursor-not-allowed">
                {project.btnText}
                <Terminal size={14} />
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
    <section id="projects" className="py-32 bg-black border-b border-border-visible relative overflow-hidden perspective-3d" ref={triggerRef}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 dot-grid-subtle opacity-10 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-[1px] bg-text-display/40" />
              <div className="space-y-1">
                <p className="label-text text-accent font-bold tracking-[0.3em]">[ SYSTEM_OUTPUTS ]</p>
                <h2 className="text-5xl sm:text-6xl font-display font-bold tracking-tighter text-text-display uppercase leading-none">
                  Project <span className="text-text-secondary opacity-50">Nodes</span>
                </h2>
              </div>
            </div>
            <p className="font-sans text-text-secondary text-lg pl-4 border-l border-border-visible/50 leading-relaxed max-w-xl">
              High-fidelity digital artifacts engineered with autonomous agents. 
              Each node represents a distinct operational milestone in technical orchestration.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-end gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <GlassCard className="flex items-center gap-2 px-4 py-2" opacity="low" blur="sm" interactive={false}>
              <Zap size={14} className="text-accent animate-pulse" />
              <span className="label-text text-text-display tracking-[0.2em]">{projects.length} UNITS_IN_TRANSIT</span>
            </GlassCard>
            <div className="flex gap-1.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`w-2 h-6 border ${i < 8 ? 'bg-text-display border-text-display' : 'border-border-visible'}`} />
              ))}
            </div>
            <span className="font-mono text-[10px] text-text-secondary opacity-50 uppercase">STABLE_DIFFUSION_SYSTEM_READY</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
            className="mt-20 flex justify-center"
          >
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group/more relative flex items-center gap-6 font-mono text-[11px] font-bold uppercase tracking-[0.3em] py-5 px-12 border border-border-visible text-text-display hover:border-text-display transition-all bg-surface/20 backdrop-blur-sm overflow-hidden"
            >
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(215,25,33,0.8)]" />
                <span>{showAll ? 'COLLAPSE_ARCHIVE' : 'EXPAND_PROJECT_ARCHIVE'}</span>
              </div>
              <Activity size={14} className={`relative z-10 transition-transform duration-700 ${showAll ? 'rotate-180 text-accent' : 'group-hover/more:rotate-90'}`} />
              
              {/* Button Hover Background */}
              <div className="absolute inset-0 bg-text-display/5 translate-y-full group-hover/more:translate-y-0 transition-transform duration-500 ease-out" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-[1px] bg-text-display opacity-0 group-hover/more:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 w-[1px] h-2 bg-text-display opacity-0 group-hover/more:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-text-display opacity-0 group-hover/more:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-text-display opacity-0 group-hover/more:opacity-100 transition-opacity" />
            </button>
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
