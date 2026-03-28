import { ExternalLink, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: "Landlord Tenant Tracker",
    description: "A smart system designed to simplify communication between tenants and landlords by tracking requests and sending real-time notifications.",
    highlights: ["Request tracking dashboard", "Notifications & updates", "Real-world productivity tool"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    link: "https://tenreq.qzz.io/",
    btnText: "Live Demo →"
  },
  {
    title: "Creator Tools Hub",
    description: "An all-in-one platform featuring 60+ AI tools and generators designed to help creators work faster and automate repetitive tasks.",
    highlights: ["60+ AI powered tools", "Built for creators & students", "Productivity focused platform"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    link: "https://vidtoolbox.qzz.io/",
    btnText: "Visit Website →"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4 italic leading-tight">Featured Projects</h2>
            <p className="text-zinc-500 italic">Selected works that solve real problems through AI and automation.</p>
          </div>
          <div className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
            Scroll to explore
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-white/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
              </div>

              <div className="p-8 space-y-6 flex-grow flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 flex-grow">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Highlights</div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-white opacity-40" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white mt-4 border border-white/10 bg-white/5 py-3 px-6 rounded-full transition-all hover:bg-white hover:text-black"
                >
                  {project.btnText}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
