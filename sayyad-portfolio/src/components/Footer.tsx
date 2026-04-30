import { GlassCard } from "./ui/GlassCard";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-24 bg-black">
      <div className="mx-auto max-w-[1400px] px-8">
        <GlassCard 
          className="px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-12 border-white/5"
          opacity="low"
          blur="lg"
          interactive={true}
        >
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="text-text-display font-display font-black text-2xl tracking-tighter uppercase">
              SAYYAD ADEEL.
            </div>
            <div className="text-text-secondary font-mono text-[10px] uppercase tracking-[0.3em] leading-relaxed">
              © {currentYear} — Handcrafted with AI <br />
              <span className="text-text-disabled">Swat, Pakistan</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-10">
            <nav className="flex flex-wrap justify-center md:justify-end gap-12 font-mono text-[10px] text-text-secondary uppercase tracking-[0.2em]">
              <a href="#about" className="hover:text-accent transition-colors">Identity</a>
              <a href="#services" className="hover:text-accent transition-colors">Expertise</a>
              <a href="#projects" className="hover:text-accent transition-colors">Selected Works</a>
              <a href="#contact" className="hover:text-accent transition-colors">Conversation</a>
            </nav>
            
            <div className="flex gap-6 items-center">
              <div className="h-[1px] w-12 bg-white/5" />
              <div className="font-mono text-[8px] text-text-disabled tracking-[0.4em] uppercase">
                Curated for Excellence
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}
