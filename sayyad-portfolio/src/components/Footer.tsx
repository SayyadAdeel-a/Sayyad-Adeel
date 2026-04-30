import { GlassCard } from "./ui/GlassCard";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-40 bg-black relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-8 relative z-10">
        <GlassCard 
          className="px-16 py-24 flex flex-col lg:flex-row justify-between items-center gap-20 border-white/10 shadow-weightless"
          opacity="med"
          blur="lg"
          interactive={false}
        >
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <div className="text-text-display font-display font-black text-4xl md:text-5xl tracking-tighter uppercase leading-none">
              Sayyad <br />
              <span className="text-text-secondary italic">Adeel.</span>
            </div>
            <div className="text-text-secondary font-mono text-[11px] uppercase tracking-[0.4em] leading-relaxed">
              © {currentYear} — Handcrafted with AI Logic <br />
              <span className="text-accent/50 font-bold">Swat, Pakistan</span>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-12">
            <nav className="flex flex-wrap justify-center lg:justify-end gap-16 font-mono text-[11px] text-text-secondary uppercase tracking-[0.3em]">
              {["Identity", "Expertise", "Archive", "Conversation"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-accent transition-all hover:scale-110"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="h-[1px] w-32 bg-accent/20" />
              <div className="font-mono text-[9px] text-text-disabled tracking-[0.5em] uppercase">
                Ship production grade.
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Spatial Background Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-accent/5 rounded-full blur-[150px] opacity-20 pointer-events-none" />
    </footer>
  );
}
