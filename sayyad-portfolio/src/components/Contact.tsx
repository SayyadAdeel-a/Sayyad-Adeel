import { Mail, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { GitHubIcon, InstagramIcon } from '@/components/Icons';

export default function Contact() {
  const socialLinks = [
    { name: "Email", icon: Mail, value: "adeelsayyad.a@gmail.com", href: "mailto:adeelsayyad.a@gmail.com" },
    { name: "Instagram", icon: InstagramIcon, value: "@buildwithsayyad", href: "https://instagram.com/buildwithsayyad" },
    { name: "GitHub", icon: GitHubIcon, value: "SayyadAdeel-a", href: "https://github.com/SayyadAdeel-a" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-ai-cyan/10 blur-[150px] rounded-full pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ai-purple/10 blur-[130px] rounded-full pointer-events-none opacity-40 animate-pulse delay-500" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-ai-cyan/20 bg-ai-cyan/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ai-cyan">
              <MessageSquare size={12} />
              Collaboration Hub
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tight text-white leading-[1.0]">
              Let’s build the <br />
              <span className="text-gradient-ai">next intelligent era.</span>
            </h2>
            
            <p className="text-lg text-zinc-400 leading-relaxed font-sans max-w-lg">
              Open to high-impact freelance projects, strategic collaborations, and opportunities in the AI-agent ecosystem. 
              <span className="text-white font-medium italic"> Turning visions into production logic.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
               <div className="flex items-center gap-2">
                 <div className="h-3 w-3 rounded-full bg-ai-cyan animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                 <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">Available for Work</span>
               </div>
               <div className="flex items-center gap-2">
                 <Sparkles size={14} className="text-yellow-500" />
                 <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 italic">SaaS & AI Specialized</span>
               </div>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Secure Channels</h4>
              <div className="flex flex-col gap-5">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group p-6 glass-card rounded-2xl hover:border-white/20 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-bg-deep flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors">
                         <link.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-ai-cyan transition-colors">{link.name}</span>
                        <span className="text-sm font-medium text-white italic">{link.value}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-800 group-hover:text-white transition-all group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-1 glass-card rounded-[3.5rem] relative overflow-hidden">
              <div className="glass-card rounded-[3.4rem] p-8 sm:p-12 relative overflow-hidden bg-bg-deep/40">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                   <MessageSquare size={200} />
                </div>
                
                <form 
                  action="https://formspree.io/f/mjgpdolb" 
                  method="POST"
                  className="relative z-10 space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] px-2 italic">Initiator Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        placeholder="Sayyad Adeel"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white text-sm placeholder:text-zinc-800 focus:outline-none focus:border-ai-cyan/30 transition-all italic font-medium"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] px-2 italic">Neural Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="your@nexus.com"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white text-sm placeholder:text-zinc-800 focus:outline-none focus:border-ai-cyan/30 transition-all italic font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] px-2 italic">Mission Vector</label>
                    <div className="relative">
                      <select 
                        name="project_type"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white text-sm appearance-none focus:outline-none focus:border-ai-cyan/30 transition-all italic font-medium cursor-pointer"
                        required
                      >
                        <option value="" className="bg-bg-deep">Select Operation...</option>
                        <option value="AI Tool / Agent" className="bg-bg-deep">Autonomous AI Tool</option>
                        <option value="SaaS MVP" className="bg-bg-deep">Premium SaaS MVP</option>
                        <option value="Mobile App (Flutter)" className="bg-bg-deep">High-Fidelity Mobile App</option>
                        <option value="Consultation" className="bg-bg-deep">Architecture Consultation</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] px-2 italic">Transmission Detail</label>
                    <textarea 
                      name="message" 
                      rows={4}
                      required
                      placeholder="Detail your vision for the next iteration..."
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-white text-sm placeholder:text-zinc-800 focus:outline-none focus:border-ai-cyan/30 transition-all italic font-medium resize-none"
                    />
                  </div>
                  
                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="w-full group relative overflow-hidden rounded-2xl p-[1px] transition-transform active:scale-95 shadow-[0_0_30px_rgba(0,255,255,0.05)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-magenta animate-spin-slow" />
                      <div className="relative flex items-center justify-center gap-3 bg-bg-deep py-6 font-bold uppercase tracking-[0.3em] text-sm text-white transition-all group-hover:bg-transparent group-hover:text-black">
                        Transmit Request
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
