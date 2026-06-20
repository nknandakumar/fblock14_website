"use client";

import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Franklin's reel for our Duster launch drove massive local footfall. The quality and reach exceeded our expectations.",
      name: "Marketing Team",
      company: "Renault Shivamogga",
      badge: "2.9L+ Views",
    },
    {
      quote: "Working with Franklin was straightforward. He understood the brief, delivered on time, and the reach was exactly what we needed.",
      name: "Brand Manager",
      company: "Simple Energy ",
      badge: "Paid Promotion",
    },
    {
      quote: "F_BLOCK_14 gave our store launch the visibility we needed. Highly recommend for any local or regional brand.",
      name: "Team",
      company: "Ambience Conventions",
      badge: "Sold Out Event",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-bg-dark border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <ScrollReveal delay={0}>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-accent bg-accent/5 border border-accent/20 px-3.5 py-1.5 rounded-full">
              WHAT BRANDS SAY
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white font-sans">
              Results That Speak For Themselves
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-sm md:text-lg font-sans max-w-xl mx-auto">
              Franklin consistently delivers cinematic content that drives metrics, conversions, and local market footfall.
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <ScrollReveal
              key={item.company}
              delay={idx * 0.1}
              yOffset={30}
              className="h-full"
            >
              <div className="bg-card-dark border-l-4 border-l-accent border-y border-r border-white/5 p-8 rounded-2xl flex flex-col justify-between min-h-[300px] transition-all duration-300 relative group overflow-hidden shadow-lg shadow-black/25 hover:-translate-y-1 hover:border-accent/35">
                {/* Radial gradient hover accent */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,204,1,0.02)_0%,transparent_50%)] pointer-events-none" />

                <div>
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent/50 group-hover:text-accent transition-colors duration-300">
                      <Quote className="w-4 h-4 fill-current" />
                    </div>
                    
                    {/* Results Badge */}
                    <span className="inline-block bg-accent text-bg-dark font-black tracking-wider uppercase text-[9px] px-3.5 py-1.5 rounded-full shadow-md shadow-accent/5">
                      {item.badge}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-white/95 text-sm sm:text-base font-sans font-medium leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="border-t border-white/5 pt-4">
                  <cite className="not-italic block">
                    <span className="text-white/90 font-bold text-xs block uppercase tracking-wider">
                      &mdash; {item.name}
                    </span>
                    <span className="text-white/40 text-[10px] font-sans font-semibold uppercase tracking-widest mt-1 block">
                      {item.company}
                    </span>
                  </cite>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
