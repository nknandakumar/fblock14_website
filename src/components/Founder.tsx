"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-bg-dark border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Founder details (7 cols) */}
          <ScrollReveal
            delay={0}
            yOffset={35}
            className="lg:col-span-7 flex flex-col items-start text-left justify-center gap-4"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-accent bg-accent/5 border border-accent/20 px-3.5 py-1.5 rounded-full">
              Founder
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Founder of <br />
              <span className="text-accent font-brier">Hidden Ants Media</span>
            </h2>

            <div className="space-y-4">
              <p className="text-white/60 text-sm md:text-lg font-sans leading-relaxed max-w-xl">
                As the architect of <strong>Hidden Ants Media</strong>, Franklin leads a high-caliber digital agency that specializes in premium social strategy, professional video production, and high-impact digital activations. 
              </p>
              <p className="text-white/60 text-sm md:text-lg font-sans leading-relaxed max-w-xl">
                Hidden Ants Media manages end-to-end creative production—bridging high-end brand partnerships, creative campaigns, and modern storytelling. Together, they turn digital impressions into loyal community and commercial authority.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://hiddenantsmedia.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-accent hover:text-white border border-accent hover:border-white/20 font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Visit Hidden Hand Media
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column - Agency Logo (5 cols) */}
          <ScrollReveal
            delay={0.15}
            yOffset={40}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-full aspect-square flex items-center justify-center animate-float">
              {/* Native img avoids Next.js remote domain config issues */}
              <img
                src="https://hiddenantsmedia.vercel.app/logo.webp"
                alt="Hidden Ants Media Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_24px_rgba(255,204,1,0.2)]"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
