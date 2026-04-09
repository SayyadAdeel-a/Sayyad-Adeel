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

          <div className="flex-grow">
            <form 
              action="https://formspree.io/f/mjgpdolb" 
              method="POST"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-all italic"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-all italic"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2">Project Type</label>
                <select 
                  name="project_type"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white appearance-none focus:outline-none focus:border-white/30 transition-all italic"
                  required
                >
                  <option value="" className="bg-zinc-950">Select what we're building...</option>
                  <option value="AI Tool / Agent" className="bg-zinc-950">AI Tool / Agent</option>
                  <option value="SaaS MVP" className="bg-zinc-950">SaaS MVP</option>
                  <option value="Mobile App (Flutter)" className="bg-zinc-950">Mobile App (Flutter)</option>
                  <option value="Consultation" className="bg-zinc-950">Consultation</option>
                </select>
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2">Message</label>
                <textarea 
                  name="message" 
                  rows={4}
                  required
                  placeholder="Tell me about your vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-all italic"
                />
              </div>
              
              <div className="sm:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full group flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-bold text-sm hover:bg-zinc-200 transition-all active:scale-[0.98]"
                >
                  Initiate Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                >
                  <link.icon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
