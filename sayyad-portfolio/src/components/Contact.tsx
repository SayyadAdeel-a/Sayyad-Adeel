import { Mail, ArrowRight, User, MessageSquare, AtSign } from 'lucide-react';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import { GlassCard } from './ui/GlassCard';
import { MagneticWrapper } from './ui/MagneticWrapper';

export default function Contact() {
  const { ref: triggerRef, isInView } = useScrollTrigger();
  const socialLinks = [
    { name: "Email", icon: Mail, value: "adeelsayyad.a@gmail.com", href: "mailto:adeelsayyad.a@gmail.com" },
    { name: "LinkedIn", icon: LinkedInIcon, value: "Adeel Sayyad", href: "https://www.linkedin.com/in/adeel-sayyad-a51187219/" },
    { name: "GitHub", icon: GitHubIcon, value: "SayyadAdeel-a", href: "https://github.com/SayyadAdeel-a" },
    { name: "Instagram", icon: InstagramIcon, value: "@buildwithsayyad", href: "https://instagram.com/buildwithsayyad" },
  ];

  return (
    <section id="contact" className="py-40 bg-black relative overflow-hidden" ref={triggerRef}>
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 mb-32 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <div className="w-12 h-[2px] bg-accent" />
              <h2 className="text-5xl md:text-7xl font-display font-black text-text-display leading-none tracking-tighter">
                START A <br />
                <span className="text-text-secondary italic">CONVERSATION.</span>
              </h2>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-start gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-lg text-text-secondary leading-relaxed max-w-sm pb-2 border-l border-white/10 pl-8">
              Open for freelance projects, architectural consultations, and deep-tech collaborations in the AI SaaS ecosystem.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Contact Info & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">Connect</span>
                <div className="flex flex-col gap-6">
                  {socialLinks.map((link, i) => (
                    <motion.a 
                      key={i}
                      href={link.href}
                      target="_blank"
                      className="group flex items-center gap-6 text-text-secondary hover:text-text-display transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                      <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-accent transition-colors">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-text-disabled uppercase tracking-widest">{link.name}</span>
                        <span className="text-sm font-medium">{link.value}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tactile Form (8 Cols) */}
          <div className="lg:col-span-8">
            <GlassCard 
              className="p-12 lg:p-20 border-white/5"
              opacity="low"
              blur="lg"
              with3D={true}
              interactive={false}
            >
              <form 
                action="https://formspree.io/f/mjgpdolb" 
                method="POST"
                className="space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono text-text-disabled uppercase tracking-[0.3em] ml-2">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-text-disabled group-focus-within:text-accent transition-colors" />
                      <input 
                        type="text" 
                        name="name" 
                        required
                        placeholder="Sayyad Adeel"
                        className="w-full bg-zinc-950/50 border border-white/5 focus:border-accent p-6 pl-16 rounded-3xl text-text-display placeholder:text-text-disabled/20 focus:outline-none transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-mono text-text-disabled uppercase tracking-[0.3em] ml-2">Email Address</label>
                    <div className="relative group">
                      <AtSign className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-text-disabled group-focus-within:text-accent transition-colors" />
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="adeel@orchestrator.com"
                        className="w-full bg-zinc-950/50 border border-white/5 focus:border-accent p-6 pl-16 rounded-3xl text-text-display placeholder:text-text-disabled/20 focus:outline-none transition-all font-sans"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-text-disabled uppercase tracking-[0.3em] ml-2">Your Message</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-6 top-8 w-4 h-4 text-text-disabled group-focus-within:text-accent transition-colors" />
                    <textarea 
                      name="message" 
                      rows={6}
                      required
                      placeholder="Describe your vision, project parameters, or questions..."
                      className="w-full bg-zinc-950/50 border border-white/5 focus:border-accent p-6 pl-16 rounded-[2.5rem] text-text-display placeholder:text-text-disabled/20 focus:outline-none transition-all font-sans resize-none"
                    />
                  </div>
                </div>

                <div className="pt-8">
                  <MagneticWrapper strength={0.2}>
                    <motion.button 
                      type="submit"
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-8 px-16 py-8 rounded-full bg-text-display text-black hover:bg-white transition-all shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]"
                    >
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-[10px] font-mono text-accent font-bold tracking-[0.3em] uppercase">Submit</span>
                        <span className="text-lg font-display font-black">SEND MESSAGE</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white transition-transform group-hover:translate-x-2">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </motion.button>
                  </MagneticWrapper>
                </div>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
