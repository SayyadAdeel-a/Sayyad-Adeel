import { Mail, ArrowRight } from 'lucide-react';
import { GitHubIcon, InstagramIcon } from '@/components/Icons';

export default function Contact() {
  const socialLinks = [
    { name: "Email", icon: Mail, value: "adeelsayyad.a@gmail.com", href: "mailto:adeelsayyad.a@gmail.com" },
    { name: "Instagram", icon: InstagramIcon, value: "@buildwithsayyad", href: "https://instagram.com/buildwithsayyad" },
    { name: "GitHub", icon: GitHubIcon, value: "SayyadAdeel-a", href: "https://github.com/SayyadAdeel-a" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center relative z-10">
          <div className="max-w-xl space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight italic">Let’s talk <span className="text-zinc-500">about the future.</span></h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              I’m open to freelance projects, collaborations and opportunities related to AI tools, automation and SaaS.
              If you have an idea or need a tool built, let’s talk.
            </p>

            <button className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Available for Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-1">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-3xl border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-zinc-800 transition-all">
                    <link.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{link.name}</div>
                    <div className="text-lg font-medium text-white">{link.value}</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
