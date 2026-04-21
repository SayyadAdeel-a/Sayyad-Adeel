import { Mail, ArrowRight, Terminal, Globe, User, MessageSquare, ShieldCheck, Zap, Network } from 'lucide-react';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

export default function Contact() {
  const { ref: triggerRef, isInView } = useScrollTrigger();
  const socialLinks = [
    { name: "Email", icon: Mail, value: "adeelsayyad.a@gmail.com", href: "mailto:adeelsayyad.a@gmail.com" },
    { name: "LinkedIn", icon: LinkedInIcon, value: "Adeel Sayyad", href: "https://www.linkedin.com/in/adeel-sayyad-a51187219/" },
    { name: "GitHub", icon: GitHubIcon, value: "SayyadAdeel-a", href: "https://github.com/SayyadAdeel-a" },
    { name: "Instagram", icon: InstagramIcon, value: "@buildwithsayyad", href: "https://instagram.com/buildwithsayyad" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-black border-t border-border-visible relative overflow-hidden" ref={triggerRef}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-visible to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-20 lg:items-start relative z-10">
          
          <motion.div 
            className="max-w-xl space-y-12"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <div className="p-1.5 bg-surface border border-border-visible">
                  <Network className="w-3.5 h-3.5 text-text-secondary" />
                </div>
                <span className="label-text text-[10px] tracking-[0.3em]">COMMS_PROTOCOL / ESTABLISH_LINK</span>
              </div>
              
              <h2 className="text-6xl sm:text-7xl font-display font-bold tracking-tighter text-text-display leading-[0.85] uppercase glow-text">
                Let’s talk <br />
                <span className="text-text-secondary italic">the future.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="relative pl-6 border-l border-border-visible">
                <div className="absolute -left-[1px] top-0 w-[1px] h-12 bg-accent shadow-[0_0_8px_rgba(215,25,33,0.5)]" />
                <p className="text-xl text-text-secondary font-sans leading-relaxed max-w-md">
                  Open for freelance projects, architectural consultations, and deep-tech collaborations in the <span className="text-text-primary">AI SaaS ecosystem</span>.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-visible border border-border-visible">
                <div className="p-6 bg-black space-y-3 hover:bg-surface-raised transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="label-text text-[8px] text-text-disabled uppercase">Availability</div>
                    <div className="w-2 h-2 bg-success rounded-full shadow-[0_0_8px_rgba(74,158,92,0.5)] animate-pulse" />
                  </div>
                  <div className="font-mono text-xs text-text-display tracking-widest uppercase">Q2_ACTIVE (OPEN)</div>
                  <div className="h-0.5 w-full bg-border-visible overflow-hidden">
                    <div className="h-full w-3/4 bg-success" />
                  </div>
                </div>
                <div className="p-6 bg-black space-y-3 hover:bg-surface-raised transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="label-text text-[8px] text-text-disabled uppercase">Latency</div>
                    <Zap size={10} className="text-warning" />
                  </div>
                  <div className="font-mono text-xs text-text-display tracking-widest uppercase">&lt; 24H_RESPONSE</div>
                  <div className="h-0.5 w-full bg-border-visible overflow-hidden">
                    <div className="h-full w-full bg-warning/50 animate-[scanline_4s_linear_infinite]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="label-text text-text-disabled text-[9px] uppercase tracking-[0.4em] mb-4">Network_Entry_Points</div>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group transition-all"
                  >
                    <div className="p-3 bg-surface border border-border-visible group-hover:border-text-display group-hover:bg-black transition-all">
                      <link.icon className="w-4 h-4 text-text-secondary group-hover:text-text-display transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-grow w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-surface border border-border-visible p-1 relative overflow-hidden group">
              {/* Form Header */}
              <div className="flex items-center justify-between border-b border-border-visible px-6 py-5 bg-black/40 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Terminal size={14} className="text-accent" />
                  <span className="label-text text-[10px] text-text-display tracking-widest">MESSAGE_UPLOAD_INTERFACE_v2.4</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-2 px-2 py-0.5 border border-white/5 bg-white/5">
                    <div className="w-1 h-1 bg-success rounded-full" />
                    <span className="label-text text-[7px] text-success">ENCRYPTION_ACTIVE</span>
                  </div>
                  <ShieldCheck size={14} className="text-text-disabled group-hover:text-success transition-colors" />
                </div>
              </div>

              <div className="p-8 sm:p-12 relative">
                {/* Background ID watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-black text-white/[0.02] select-none pointer-events-none">
                  SEND
                </div>

                <form 
                  action="https://formspree.io/f/mjgpdolb" 
                  method="POST"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 relative z-10"
                >
                  <div className="relative group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="label-text text-[8px] text-text-disabled group-focus-within:text-text-display transition-colors uppercase tracking-[0.2em]">01_Identity_Token</span>
                      <User size={10} className="text-text-disabled group-focus-within:text-accent transition-colors" />
                    </div>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      placeholder="FULL_NAME"
                      className="w-full bg-transparent border-b-2 border-border-visible focus:border-accent py-4 text-text-primary placeholder:text-text-disabled/20 focus:outline-none transition-all font-mono text-sm tracking-widest"
                    />
                  </div>

                  <div className="relative group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="label-text text-[8px] text-text-disabled group-focus-within:text-text-display transition-colors uppercase tracking-[0.2em]">02_Return_Node</span>
                      <Globe size={10} className="text-text-disabled group-focus-within:text-accent transition-colors" />
                    </div>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      placeholder="EMAIL_ADDRESS"
                      className="w-full bg-transparent border-b-2 border-border-visible focus:border-accent py-4 text-text-primary placeholder:text-text-disabled/20 focus:outline-none transition-all font-mono text-sm tracking-widest"
                    />
                  </div>

                  <div className="sm:col-span-2 relative group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="label-text text-[8px] text-text-disabled group-focus-within:text-text-display transition-colors uppercase tracking-[0.2em]">03_Transmission_Payload</span>
                      <MessageSquare size={10} className="text-text-disabled group-focus-within:text-accent transition-colors" />
                    </div>
                    <textarea 
                      name="message" 
                      rows={4}
                      required
                      placeholder="Define vision, project parameters, or system ping..."
                      className="w-full bg-black/40 border-2 border-border-visible focus:border-accent p-6 text-text-primary placeholder:text-text-disabled/20 focus:outline-none transition-all font-mono text-sm resize-none tracking-tight leading-relaxed"
                    />
                    <div className="absolute bottom-4 right-4 label-text text-[7px] text-text-disabled opacity-40">BYTES_REMAINING: 2048</div>
                  </div>
                  
                  <div className="sm:col-span-2 space-y-6">
                    <motion.button 
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      className="w-full relative overflow-hidden bg-text-display text-black py-6 font-display font-black uppercase tracking-[0.4em] text-sm hover:bg-white transition-all shadow-[0_10px_40px_rgba(255,255,255,0.1)] group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-4">
                        Initialize Connection
                        <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    </motion.button>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-0.5">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className={`w-1 h-3 ${i < 6 ? 'bg-accent/40' : 'bg-white/5'}`} />
                          ))}
                        </div>
                        <span className="label-text text-[7px] text-text-disabled tracking-widest">TRANSMIT_POWER: 85%</span>
                      </div>
                      <span className="label-text text-[7px] text-text-disabled uppercase tracking-widest group-hover:text-success transition-colors">Awaiting_Input_Data</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

