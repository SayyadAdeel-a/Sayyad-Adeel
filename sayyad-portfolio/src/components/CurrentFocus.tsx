import { Activity, Globe, Send } from 'lucide-react';

const currentFocus = [
  {
    icon: Activity,
    title: "Building Koda App",
    description: "Developing a futuristic mobile-first workspace that lets you ship code from your phone."
  },
  {
    icon: Globe,
    title: "Sharing my journey in public",
    description: "Documenting my daily progress as a young builder and creator in Swat, Pakistan."
  },
  {
    icon: Send,
    title: "Open to freelance & collaboration",
    description: "Ready to work on automation, AI tools, and SaaS projects. Let's build something together."
  }
];

export default function CurrentFocus() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Live Status</div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4 italic">What I’m Working On</h2>
          <p className="text-zinc-500 leading-relaxed">
            I'm currently focused on high-impact projects that leverage the power of automation and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentFocus.map((item, index) => (
            <div 
              key={index}
              className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 transition-all hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 ring-1 ring-white/5 group-hover:ring-white/20 transition-all">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 italic">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
