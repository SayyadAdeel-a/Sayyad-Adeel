export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm font-medium tracking-widest uppercase text-center md:text-left leading-relaxed">
            © 2026 Sayyad Adeel — Building AI tools from Swat, Pakistan
          </div>
          <div className="flex gap-8 text-xs font-bold text-zinc-600 uppercase tracking-widest">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
