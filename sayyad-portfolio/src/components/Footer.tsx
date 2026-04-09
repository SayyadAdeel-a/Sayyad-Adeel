import React from 'react';
import { Mail } from 'lucide-react';
import { GitHubIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from '@/components/Icons';

interface SocialLink {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | typeof Mail;
  href: string;
  color: string;
}

export default function Footer(): React.ReactElement {
  const socialLinks: SocialLink[] = [
    { icon: GitHubIcon, href: "https://github.com/SayyadAdeel-a", color: "hover:text-white" },
    { icon: InstagramIcon, href: "https://instagram.com/buildwithsayyad", color: "hover:text-ai-cyan" },
    { icon: TwitterIcon, href: "#", color: "hover:text-white" },
    { icon: LinkedInIcon, href: "#", color: "hover:text-ai-purple" },
    { icon: Mail, href: "mailto:adeelsayyad.a@gmail.com", color: "hover:text-ai-cyan" }
  ];

  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-ai-purple/5 to-transparent pointer-events-none" />
      
      <div className="glass-panel py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="text-white font-heading font-bold text-2xl tracking-tighter flex items-center gap-2">
                Sayyad <span className="text-ai-cyan text-glow-cyan text-3xl">.</span>
              </div>
              <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
                Architecting autonomous ecosystems and high-fidelity SaaS tools from Swat, Pakistan.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-6">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-zinc-500 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em]">
                © 2026 Syed Sikandar Shah
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center md:text-left">
              <a href="#about" className="hover:text-ai-cyan transition-colors">History</a>
              <a href="#journey" className="hover:text-ai-purple transition-colors">Manifesto</a>
              <a href="#projects" className="hover:text-ai-magenta transition-colors">Artifacts</a>
              <a href="#services" className="hover:text-ai-cyan transition-colors">Solutions</a>
              <a href="#testimonials" className="hover:text-ai-purple transition-colors">Wall</a>
              <a href="#contact" className="hover:text-ai-magenta transition-colors">Vector</a>
            </div>

          </div>
        </div>
      </div>
      
      {/* Absolute Bottom Strip */}
      <div className="bg-bg-deep py-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center">
            <span className="text-[9px] font-medium text-zinc-700 uppercase tracking-[0.5em]">
              Precision Engineered for the Age of Autonomy
            </span>
        </div>
      </div>
    </footer>
  );
}


