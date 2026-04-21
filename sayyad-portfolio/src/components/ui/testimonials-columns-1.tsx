"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Activity, Server } from "lucide-react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  origin?: string;
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
  const refId = `REF_${(index + 1).toString().padStart(3, '0')}`;
  
  return (
    <div className="max-w-xs w-full">
      <div className="card-surface p-6 group relative overflow-hidden flex flex-col h-full border-border-visible hover:border-text-secondary transition-all duration-500">
        {/* Background Dot pattern on hover */}
        <div className="absolute inset-0 dot-grid-subtle opacity-0 group-hover:opacity-[0.05] transition-opacity pointer-events-none" />
        
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent shadow-[0_0_8px_rgba(215,25,33,0.5)]" />
            <div className="label-text text-[8px] text-text-display tracking-widest">{refId}</div>
          </div>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-border-visible group-hover:bg-text-disabled transition-colors" />
            ))}
          </div>
        </div>
        
        <div className="mb-8 relative pl-4 border-l border-border-visible/50 group-hover:border-accent/30 transition-colors">
          <Quote size={12} className="text-accent opacity-40 mb-3" />
          <p className="text-text-secondary font-sans text-[13px] leading-relaxed relative z-10 italic">
            "{testimonial.text}"
          </p>
        </div>
        
        <div className="mt-auto space-y-5">
          <div className="flex items-center gap-3 pt-6 border-t border-border-visible">
            <div className="relative p-0.5 border border-border-visible bg-black group-hover:border-text-secondary transition-all duration-500 overflow-hidden">
              <img
                width={36}
                height={36}
                src={testimonial.image}
                alt={testimonial.name}
                className="h-9 w-9 grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <div className="font-display font-bold tracking-tight text-text-display text-[12px] uppercase leading-none">{testimonial.name}</div>
              <div className="label-text mt-1 text-text-disabled text-[8px] tracking-wider">{testimonial.role}</div>
            </div>
          </div>
          
          {testimonial.origin && (
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1 p-2 bg-surface border border-border-visible group-hover:bg-black transition-colors">
                <div className="flex items-center gap-1.5">
                  <Server size={8} className="text-text-disabled" />
                  <div className="label-text text-[6px] text-text-disabled uppercase">Origin_Node</div>
                </div>
                <div className="label-text text-[7px] text-text-display truncate">
                  {testimonial.origin}
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2 bg-surface border border-border-visible group-hover:bg-black transition-colors">
                <div className="flex items-center gap-1.5">
                  <Activity size={8} className="text-success" />
                  <div className="label-text text-[6px] text-text-disabled uppercase">Status_Auth</div>
                </div>
                <div className="label-text text-[7px] text-success">
                  VERIFIED
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Hover scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500 pointer-events-none" />
      </div>
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
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-8 pb-8"
      >
        {[
          ...new Array(2).fill(0).map((_, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {props.testimonials.map((testimonial, i) => (
                <TestimonialCard key={`${groupIndex}-${i}`} testimonial={testimonial} index={i} />
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

