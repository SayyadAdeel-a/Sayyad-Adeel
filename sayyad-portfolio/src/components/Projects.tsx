import { useState } from 'react';
import { ExternalLink, Activity, Zap, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WaitlistModal from './WaitlistModal';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';
import { MagneticWrapper } from './ui/MagneticWrapper';

const projects = [
  {
    id: "PRJ-KODA",
    title: "Koda AI",
    category: "Development Engine",
    description: "The first professional-grade code editor for mobile. Monaco-powered with full ANSI terminal support.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
    link: "#",
    btnText: "Join Waitlist",
    isWaitlist: true,
    size: "large",
    accent: "blue"
  },
  {
    id: "PRJ-NUDGE",
    title: "Nudge CRM",
    category: "Productivity",
    description: "Zero-friction CRM for solo freelancers. Automated follow-ups and high-throughput data management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
    link: "https://nudge-crm.vercel.app/",
    btnText: "Live Demo",
    size: "small"
  },
  {
    id: "PRJ-TENREQ",
    title: "TenReq",
    category: "Ecosystem",
    description: "Real-time rental request tracking system eliminating tenant-landlord friction.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "https://tenreq.qzz.io/",
    btnText: "Live Demo",
    size: "small"
  },
  {
    id: "PRJ-DATAWALL",
    title: "DataWall",
    category: "Infrastructure",
    description: "Atomic state dashboard builder with zero-trust access control pipelines.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    btnText: "Review Stack",
    size: "medium"
  },
  {
    id: "PRJ-EVERYWHERES",
    title: "Everywheres",
    category: "Mobile Utility",
    description: "Context-aware productivity habit system triggered by spatial coordinates.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
    link: "https://everywheres.app",
    btnText: "Visit Site",
    size: "small"
  }
];

function ProjectCard({ project, index, isInView, onClick }: any) {
  const [isHovered, setIsHovered] = useState(false);

  const getGridClasses = () => {
    switch (project.size) {
      case 'large': return 'lg:col-span-2 lg:row-span-2';
      case 'medium': return 'lg:col-span-2';
      default: return 'lg:col-span-1';
    }
  };

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
      className={`${getGridClasses()} group flex flex-col gap-6`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container - Density 4 (Airy) */}
      <div 
        className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900/20 aspect-[4/3] lg:aspect-auto h-full min-h-[300px] cursor-pointer"
        onClick={onClick}
      >
        <GlassCard 
          className="h-full border-white/5 transition-all duration-700"
          with3D={true}
          opacity="low"
          blur="lg"
          interactive={true}
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.img 
              src={project.image} 
              alt={project.title}
              animate={{ 
                scale: isHovered ? 1.05 : 1,
                filter: isHovered ? 'grayscale(0%) brightness(0.8)' : 'grayscale(100%) brightness(0.5)',
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Category Tag */}
          <div className="absolute top-8 left-8 z-20">
            <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-accent uppercase">{project.category}</span>
            </div>
          </div>

          {/* Magnetic Interaction Indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <Plus className="w-8 h-8" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* External Labels - Asymmetric Gallery Style */}
      <div className="px-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-display font-bold text-text-display group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono text-text-disabled uppercase tracking-widest">{project.id}</span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
          {project.description}
        </p>
      </div>
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
    <section id="projects" className="py-40 bg-black relative overflow-hidden" ref={triggerRef}>
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mb-32 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <div className="w-12 h-[2px] bg-accent" />
              <h2 className="text-5xl md:text-7xl font-display font-black text-text-display leading-none tracking-tighter">
                SELECTED <br />
                <span className="text-text-secondary italic">WORKS.</span>
              </h2>
            </div>
          </motion.div>

          <motion.p 
            className="text-xl text-text-secondary leading-relaxed max-w-xl pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Each artifact represents a distinct milestone in technical orchestration. Engineered for impact, polished for production.
          </motion.p>
        </div>

        {/* Bento 2.0 Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
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
                  } else if (project.link !== "#") {
                    window.open(project.link, '_blank');
                  }
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* View Archive CTA */}
        {projects.length > 3 && (
          <div className="mt-40 flex justify-center">
            <MagneticWrapper strength={0.2}>
              <button 
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-8 px-16 py-8 rounded-full border border-white/10 hover:border-accent transition-all bg-zinc-900/50 backdrop-blur-xl"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[10px] font-mono text-accent font-bold tracking-[0.3em] uppercase">Archive</span>
                  <span className="text-lg font-display font-black text-text-display">
                    {showAll ? 'CLOSE REPOSITORY' : 'VIEW FULL ARCHIVE'}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                  <Plus className="w-6 h-6" />
                </div>
              </button>
            </MagneticWrapper>
          </div>
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
