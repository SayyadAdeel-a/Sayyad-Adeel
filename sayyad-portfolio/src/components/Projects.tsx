import { useState, useRef } from 'react';
import { Plus, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getGridClasses = () => {
    switch (project.size) {
      case 'large': return 'lg:col-span-2 lg:row-span-2';
      case 'medium': return 'lg:col-span-2';
      default: return 'lg:col-span-1';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${getGridClasses()} group relative flex flex-col perspective-container`}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full"
        onClick={onClick}
      >
        <GlassCard 
          className="h-full border-white/5 shadow-diffused cursor-pointer overflow-hidden rounded-[3rem]"
          with3D={true}
          opacity="low"
          blur="lg"
          interactive={true}
        >
          {/* Spatial Metadata */}
          <div className="absolute top-10 left-10 z-40" style={{ transform: "translateZ(50px)" }}>
            <div className="px-6 py-2 rounded-full bg-black/50 backdrop-blur-3xl border border-white/10 shadow-weightless">
              <span className="text-[10px] font-mono font-black tracking-[0.4em] text-accent uppercase">{project.category}</span>
            </div>
          </div>

          {/* Project Image */}
          <div className="absolute inset-0 z-0">
            <motion.img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
          </div>

          {/* Bottom Info Layer */}
          <div className="absolute bottom-0 left-0 right-0 p-12 z-30 bg-gradient-to-t from-black via-black/40 to-transparent" style={{ transform: "translateZ(30px)" }}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-4xl md:text-5xl font-display font-black text-text-display group-hover:text-accent transition-colors tracking-tighter uppercase leading-none">
                  {project.title}
                </h3>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-text-display group-hover:text-black transition-all">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xl text-text-secondary leading-relaxed max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {project.description}
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
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
    <section id="projects" className="py-60 bg-black relative overflow-hidden" ref={triggerRef}>
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Antigravity Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-24 mb-48 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-[2px] bg-accent" />
                <span className="text-[11px] font-mono text-accent font-black tracking-[0.5em] uppercase">Archive</span>
              </div>
              <h2 className="text-6xl md:text-[7rem] font-display font-black text-text-display leading-[0.85] tracking-tighter uppercase">
                Selected <br />
                <span className="text-text-secondary italic">Works.</span>
              </h2>
            </div>
          </motion.div>

          <motion.p 
            className="text-2xl text-text-secondary leading-relaxed max-w-sm pb-4 border-l border-white/5 pl-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Each artifact represents a distinct milestone in technical orchestration. Engineered for impact, polished for production.
          </motion.p>
        </div>

        {/* 3D Bento Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
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

        {/* Spatial Archive Toggle */}
        {projects.length > 3 && (
          <div className="mt-60 flex justify-center">
            <MagneticWrapper strength={0.2}>
              <button 
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-12 px-20 py-10 rounded-full border border-white/10 hover:border-accent transition-all bg-zinc-900/50 backdrop-blur-2xl shadow-diffused"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[10px] font-mono text-accent font-black tracking-[0.4em] uppercase">Status_Registry</span>
                  <span className="text-2xl font-display font-black text-text-display uppercase tracking-tighter">
                    {showAll ? 'CLOSE ARCHIVE' : 'EXPAND ARCHIVE'}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:rotate-90">
                  <Plus className="w-8 h-8" />
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
