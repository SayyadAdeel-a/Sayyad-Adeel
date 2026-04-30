import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Adeel's ability to turn complex AI concepts into working SaaS prototypes in days is unmatched. He doesn't just write code; he builds products.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    name: "Briana Patton",
    role: "Stealth AI Founder",
    origin: "SAN FRANCISCO"
  },
  {
    text: "Building in public with Adeel has been an education. His focus on Koda's mobile-first DX is a masterclass in modern build tools.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    name: "Bilal Ahmed",
    role: "Senior DevTools Engineer",
    origin: "LONDON"
  },
  {
    text: "The integration of Gemini and OpenAI into the workflow was seamless. Exceptional understanding of the AI-first stack.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    name: "Saman Malik",
    role: "Product Lead @ AI Startup",
    origin: "DUBAI"
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
    name: "Omar Raza",
    role: "SaaS CEO",
    origin: "KARACHI"
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab",
    name: "Zainab Hussain",
    role: "Project Manager",
    origin: "SINGAPORE"
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aliza",
    name: "Aliza Khan",
    role: "Business Analyst",
    origin: "TORONTO"
  },
  {
    text: "Adeel is a rare breed of developer who understands both the deep technical side of LLMs and the commercial side of SaaS.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan",
    name: "Farhan Siddiqui",
    role: "Tech Entrepreneur",
    origin: "AUSTIN"
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sana",
    name: "Sana Sheikh",
    role: "Product Designer",
    origin: "BERLIN"
  },
  {
    text: "Using these AI-first architectures, our online presence and conversions significantly improved.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan",
    name: "Hassan Ali",
    role: "E-commerce Manager",
    origin: "SYDNEY"
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-40 bg-black relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-8">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 mb-32 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <div className="w-12 h-[2px] bg-accent" />
              <h2 className="text-5xl md:text-7xl font-display font-black text-text-display leading-none tracking-tighter">
                SOCIAL <br />
                <span className="text-text-secondary italic">VALIDATION.</span>
              </h2>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-start gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-xl text-text-secondary leading-relaxed max-w-sm pb-2 border-l border-white/10 pl-8">
              Global feedback from founders, engineers, and creators. Independent insights from around the world.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Stream */}
        <div className="flex justify-center gap-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />

          <TestimonialsColumn testimonials={firstColumn} duration={40} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={55} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={45} />
        </div>

        {/* Bottom Status Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
          {[
            { label: "Scope", value: "9+ Locations", desc: "Collaborating across 3 continents and multiple timezones." },
            { label: "Execution", value: "100% Success", desc: "Every transmission delivered to production specifications." },
            { label: "Grade", value: "High Fidelity", desc: "Quality standards aligned with premium SaaS expectations." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.1) }}
            >
              <span className="text-[10px] font-mono text-accent font-bold tracking-[0.4em] uppercase">{item.label}</span>
              <div className="space-y-2">
                <h4 className="text-2xl font-display font-bold text-text-display">{item.value}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
