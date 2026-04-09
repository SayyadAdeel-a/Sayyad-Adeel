import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Adeel's ability to turn a complex AI concept into a working prototype in days is unmatched. He doesn't just write code; he builds products.",
    author: "Tech Founder",
    role: "Stealth AI Startup",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  },
  {
    content: "The level of focus on UX for an AI-first product is refreshing. Koda is a game-changer for mobile-first development.",
    author: "Senior Engineer",
    role: "FAANG",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
  },
  {
    content: "Adeel is a rare breed of developer who understands both the deep technical side of LLMs and the commercial side of SaaS.",
    author: "Product Manager",
    role: "DevTools Company",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4 italic leading-tight">Wall of Trust</h2>
          <p className="text-zinc-500 italic text-lg mx-auto max-w-2xl">Feedback from the builders and thinkers I've collaborated with.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-white text-white" />
                ))}
              </div>

              <p className="text-zinc-300 italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full border border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">{t.author}</h4>
                  <p className="text-zinc-500 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
