import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black border-t border-border-visible">
      <div className="mx-auto max-w-7xl px-6">
        <div className="card-surface px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-10 relative overflow-hidden">
          {/* Decorative Corner Element */}
          <div className="absolute -left-10 -bottom-10 opacity-5 pointer-events-none">
            <div className="w-32 h-32 border border-text-display rounded-full"></div>
            <div className="w-24 h-24 border border-text-display rounded-full mt-2 ml-2"></div>
          </div>
          
          <div className="flex flex-col gap-4 text-center md:text-left z-10">
            <div className="text-text-primary font-display font-bold text-sm uppercase tracking-tighter">
              SAYYAD ADEEL <span className="text-text-secondary">/ CORE</span>
            </div>
            <div className="text-text-secondary font-mono text-[10px] uppercase tracking-widest leading-relaxed">
              © {currentYear} — BUILT WITH AI IN SWAT, PAKISTAN<br />
              <span className="text-text-disabled">ALL LOGIC RESERVED.</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 z-10">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 font-mono text-[10px] text-text-secondary uppercase tracking-widest">
              <a href="#about" className="hover:text-text-display transition-colors border-b border-transparent hover:border-text-display py-1">About</a>
              <a href="#focus" className="hover:text-text-display transition-colors border-b border-transparent hover:border-text-display py-1">Focus</a>
              <a href="#projects" className="hover:text-text-display transition-colors border-b border-transparent hover:border-text-display py-1">Products</a>
              <a href="#contact" className="hover:text-text-display transition-colors border-b border-transparent hover:border-text-display py-1">Contact</a>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="h-[1px] w-12 bg-border-visible" />
              <div className="font-mono text-[8px] text-text-disabled tracking-[0.3em] uppercase">
                BUILD_VER: 2.4.0_STABLE
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
             <div className="font-mono text-[6px] text-text-secondary">SYS_LINK_ESTABLISHED</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
