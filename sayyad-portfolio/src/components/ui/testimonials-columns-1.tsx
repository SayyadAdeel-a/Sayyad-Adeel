"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, MapPin } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  origin?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="max-w-xs w-full">
      <GlassCard 
        className="group p-10 h-full flex flex-col border-white/5"
        opacity="low"
        blur="lg"
        with3D={true}
        interactive={true}
      >
        <div className="mb-10 relative">
          <Quote size={20} className="text-accent opacity-20 mb-6" />
          <p className="text-text-secondary font-sans text-lg leading-relaxed relative z-10 italic">
            "{testimonial.text}"
          </p>
        </div>
        
        <div className="mt-auto space-y-8">
          <div className="flex items-center gap-4 pt-8 border-t border-white/5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-accent transition-colors">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-display font-bold text-text-display text-sm uppercase tracking-tight">{testimonial.name}</div>
              <div className="text-[10px] font-mono text-text-disabled uppercase tracking-widest mt-1">{testimonial.role}</div>
            </div>
          </div>
          
          {testimonial.origin && (
            <div className="flex items-center gap-3">
              <MapPin size={10} className="text-accent" />
              <span className="text-[10px] font-mono text-text-disabled uppercase tracking-[0.3em]">{testimonial.origin}</span>
            </div>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-12 pb-12"
      >
        {[
          ...new Array(2).fill(0).map((_, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {props.testimonials.map((testimonial, i) => (
                <TestimonialCard key={`${groupIndex}-${i}`} testimonial={testimonial} />
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
