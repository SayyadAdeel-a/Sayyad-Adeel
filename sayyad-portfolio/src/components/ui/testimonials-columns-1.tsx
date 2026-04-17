"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { use3DTransform } from "@/hooks/use3DTransform";
import { useGlassEffect } from "@/hooks/useGlassEffect";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { rotation } = use3DTransform(cardRef);
  const { isMobile } = useGlassEffect();

  return (
    <div 
      ref={cardRef}
      style={!isMobile ? {
        perspective: '1000px',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out'
      } : {}}
      className="max-w-xs w-full"
    >
      <GlassCard opacity="low" hoverEffect="glow" className="p-10 rounded-3xl group">
        <div className="text-zinc-300 italic">"{testimonial.text}"</div>
        <div className="flex items-center gap-2 mt-5">
          <img
            width={40}
            height={40}
            src={testimonial.image}
            alt={testimonial.name}
            className="h-10 w-10 rounded-full grayscale border border-white/10 group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="flex flex-col">
            <div className="font-bold tracking-tight leading-5 text-white">{testimonial.name}</div>
            <div className="leading-5 tracking-tight text-cyan-400/70 font-mono text-[10px] mt-0.5">{testimonial.role}</div>
          </div>
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
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} />
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
