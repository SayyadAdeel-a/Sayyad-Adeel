"use client";
import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

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
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 sm:p-10 rounded-[2.5rem] glass-card border-white/5 shadow-2xl max-w-xs w-full group/card transition-all duration-500 hover:-translate-y-2 hover:border-white/20" key={i}>
                  <div className="text-zinc-400 font-sans italic leading-relaxed text-sm sm:text-base">"{text}"</div>
                  <div className="flex items-center gap-4 mt-8">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full grayscale group-hover/card:grayscale-0 transition-all duration-700 border-2 border-white/10"
                    />
                    <div className="flex flex-col">
                      <div className="font-heading font-bold tracking-tight text-white leading-tight uppercase text-xs">{name}</div>
                      <div className="leading-5 opacity-60 tracking-widest text-zinc-500 text-[10px] font-bold uppercase">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
