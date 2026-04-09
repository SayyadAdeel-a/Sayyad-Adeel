import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Adeel's ability to turn complex AI concepts into working SaaS prototypes in days is unmatched. He doesn't just write code; he builds products.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    name: "Briana Patton",
    role: "Stealth AI Founder",
  },
  {
    text: "Building in public with Adeel has been an education. His focus on Koda's mobile-first DX is a masterclass in modern build tools.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    name: "Bilal Ahmed",
    role: "Senior DevTools Engineer",
  },
  {
    text: "The integration of Gemini and OpenAI into the workflow was seamless. Exceptional understanding of the AI-first stack.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    name: "Saman Malik",
    role: "Product Lead @ AI Startup",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar",
    name: "Omar Raza",
    role: "SaaS CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aliza",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Adeel is a rare breed of developer who understands both the deep technical side of LLMs and the commercial side of SaaS.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan",
    name: "Farhan Siddiqui",
    role: "Tech Entrepreneur",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sana",
    name: "Sana Sheikh",
    role: "Product Designer",
  },
  {
    text: "Using these AI-first architectures, our online presence and conversions significantly improved.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-transparent py-24 sm:py-32 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex justify-center mb-6">
             <div className="inline-flex items-center gap-2 rounded-full border border-ai-cyan/20 bg-ai-cyan/5 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-ai-cyan">
              Validation
            </div>
          </div>

          <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tight text-white text-center leading-[1.05]">
            Global Builder <br />
            <span className="text-gradient-ai text-glow-cyan">Testimonials.</span>
          </h2>
          <p className="text-center mt-8 text-zinc-500 text-lg leading-relaxed max-w-lg font-sans italic opacity-80">
            Collaborating with founders and engineers to architect the next wave of intelligent agents.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={35} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-purple/5 blur-[150px] rounded-full pointer-events-none opacity-20" />
    </section>
  );
};

export default Testimonials;
