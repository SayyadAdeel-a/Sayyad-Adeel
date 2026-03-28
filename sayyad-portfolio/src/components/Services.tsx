import React from 'react';
import { Bot, Zap, Video, Search } from 'lucide-react';

const services = [
  {
    title: "AI Tool Development",
    description: "Building AI-powered web and mobile apps using modern no-code and AI workflows.",
    icon: Bot,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400"
  },
  {
    title: "SaaS & Automation",
    description: "Creating tools that automate tasks and solve real-world problems for users.",
    icon: Zap,
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Video Editing & Design",
    description: "Creating content, visuals, and simple branding with 1 year of experience.",
    icon: Video,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400"
  },
  {
    title: "Basic SEO",
    description: "Optimizing projects and websites for better discoverability and organic reach.",
    icon: Search,
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What I Do</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto italic">
            Turning complex problems into elegant, automated solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.08] hover:-translate-y-1 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex gap-6">
                <div className={`flex-shrink-0 p-4 rounded-2xl bg-zinc-900 border border-white/10 transition-transform group-hover:scale-110`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-white/20 transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
