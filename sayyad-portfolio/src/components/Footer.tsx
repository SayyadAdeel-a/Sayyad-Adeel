import { GlassCard } from "@/components/ui/glass-card";

export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlassCard opacity="low" className="rounded-3xl border-t border-white/10 px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm font-medium tracking-widest uppercase text-center md:text-left leading-relaxed">
            © 2026 Sayyad Adeel — Building AI tools from Swat, Pakistan
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
            <a href="#about" className="hover:text-white hover:glass-glow-accent transition-all px-2 py-1 rounded">About</a>
            <a href="#journey" className="hover:text-white hover:glass-glow-accent transition-all px-2 py-1 rounded">Journey</a>
            <a href="#testimonials" className="hover:text-white hover:glass-glow-accent transition-all px-2 py-1 rounded">Wall of Love</a>
            <a href="#projects" className="hover:text-white hover:glass-glow-accent transition-all px-2 py-1 rounded">Products</a>
            <a href="#contact" className="hover:text-white hover:glass-glow-accent transition-all px-2 py-1 rounded">Contact</a>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}
