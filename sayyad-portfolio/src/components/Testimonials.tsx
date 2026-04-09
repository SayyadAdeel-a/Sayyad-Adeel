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
    <section id="testimonials" className="bg-zinc-950 py-24 sm:py-32 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-white/10 bg-white/5 py-1 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Wall of Trust
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white text-center italic leading-tight">
            What the builders <span className="text-zinc-500">say about us</span>
          </h2>
          <p className="text-center mt-6 text-zinc-400 text-lg italic max-w-lg">
            A look into the collaborations and products shipped in the AI-first ecosystem.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Testimonials;
