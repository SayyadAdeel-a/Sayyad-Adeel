import { Bot, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

const services = [
  {
    title: "AI Tool Development",
    description: "Building AI-powered web and mobile apps using modern AI agent frameworks and LLM integrations.",
    icon: Bot,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400"
  },
  {
    title: "SaaS & Automation",
    description: "Creating full-stack SaaS platforms that automate complex workflows and solve real-world problems.",
    icon: Zap,
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400"
  }
];

export default function Services() {
  const { ref: triggerRef, isInView } = useScrollTrigger();

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-zinc-950" ref={triggerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            What I Do
          </motion.h2>
          <motion.p 
            className="text-zinc-500 max-w-2xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Turning complex problems into elegant, automated solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <GlassCard 
                opacity="med" 
                borderGlow={true}
                className="group relative rounded-3xl p-8 transition-all hover:-translate-y-2 overflow-hidden"
                style={{
                  boxShadow: "0 0 0px rgba(0, 200, 255, 0)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 200, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0px rgba(0, 200, 255, 0)";
                }}
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
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
