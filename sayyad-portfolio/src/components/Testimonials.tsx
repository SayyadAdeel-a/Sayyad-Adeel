import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { Terminal, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    text: "Adeel's ability to turn complex AI concepts into working SaaS prototypes in days is unmatched. He doesn't just write code; he builds products.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    name: "Briana Patton",
    role: "Stealth AI Founder",
    origin: "SAN_FRANCISCO_NODE"
  },
  {
    text: "Building in public with Adeel has been an education. His focus on Koda's mobile-first DX is a masterclass in modern build tools.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    name: "Bilal Ahmed",
    role: "Senior DevTools Engineer",
    origin: "LONDON_NODE"
  },
  {
    text: "The integration of Gemini and OpenAI into the workflow was seamless. Exceptional understanding of the AI-first stack.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    name: "Saman Malik",
    role: "Product Lead @ AI Startup",
    origin: "DUBAI_NODE"
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
    name: "Omar Raza",
    role: "SaaS CEO",
    origin: "KARACHI_NODE"
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab",
    name: "Zainab Hussain",
    role: "Project Manager",
    origin: "SINGAPORE_NODE"
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aliza",
    name: "Aliza Khan",
    role: "Business Analyst",
    origin: "TORONTO_NODE"
  },
  {
    text: "Adeel is a rare breed of developer who understands both the deep technical side of LLMs and the commercial side of SaaS.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan",
    name: "Farhan Siddiqui",
    role: "Tech Entrepreneur",
    origin: "AUSTIN_NODE"
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sana",
    name: "Sana Sheikh",
    role: "Product Designer",
    origin: "BERLIN_NODE"
  },
  {
    text: "Using these AI-first architectures, our online presence and conversions significantly improved.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan",
    name: "Hassan Ali",
    role: "E-commerce Manager",
    origin: "SYDNEY_NODE"
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black py-24 sm:py-32 relative overflow-hidden border-t border-border-visible">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-grid opacity-[0.04]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-visible to-transparent" />
      
      <div className="container z-10 mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border-visible">
              <Terminal size={12} className="text-accent" />
              <div className="label-text text-[9px] text-text-display">PEER_VALIDATION_PROTOCOL</div>
            </div>
            <div className="h-px w-12 bg-border-visible hidden sm:block" />
            <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border-visible">
              <ShieldCheck size={12} className="text-success" />
              <div className="label-text text-[9px] text-text-display">TR_AUTH_V2</div>
            </div>
          </div>

          <h2 className="text-5xl sm:text-7xl font-display font-bold tracking-tighter text-text-display text-center leading-[0.85] uppercase glow-text">
            Wall of <br />
            <span className="text-text-secondary">Verified</span> Trust
          </h2>
          
          <div className="mt-8 flex flex-col items-center">
            <p className="text-center text-text-secondary text-lg font-sans max-w-lg leading-relaxed">
              Analyzing transmission quality across <span className="text-text-primary">global builder nodes</span>. Independent third-party feedback verified by automated protocol.
            </p>
            
            <div className="mt-10 flex gap-12 items-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-display font-bold text-text-display">9+</div>
                <div className="label-text text-[8px] opacity-50 uppercase tracking-[0.2em]">GLOBAL_NODES</div>
              </div>
              <div className="h-8 w-px bg-border-visible" />
              <div className="flex flex-col items-center">
                <div className="text-2xl font-display font-bold text-text-display">100%</div>
                <div className="label-text text-[8px] opacity-50 uppercase tracking-[0.2em]">UPTIME_RATING</div>
              </div>
              <div className="h-8 w-px bg-border-visible" />
              <div className="flex flex-col items-center">
                <div className="text-2xl font-display font-bold text-text-display">A++</div>
                <div className="label-text text-[8px] opacity-50 uppercase tracking-[0.2em]">SLA_GRADE</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[850px] overflow-hidden relative">
          {/* Side Gradients for depth */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={50} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
        </div>

        <div className="mt-20 flex flex-col items-center group">
          <div className="relative h-[2px] w-full max-w-4xl bg-border-visible mb-6 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-accent/50 animate-[scanline_8s_linear_infinite]" />
          </div>
          <div className="label-text text-[9px] tracking-[0.5em] text-text-disabled group-hover:text-text-primary transition-colors">
            END_OF_VALIDATED_TRANSMISSIONS // SYSTEM_ID: 0x9F_SAFE
          </div>
          <div className="mt-4 flex gap-1.5">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-border-visible hover:bg-accent transition-colors cursor-crosshair" title={`NODE_${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

