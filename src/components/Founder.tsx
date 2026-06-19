"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-24 bg-bg-dark border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Founder details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-3">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-bg-dark bg-accent px-3 py-1 rounded-sm">
                Founder
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Founder of <br />
                <span className="text-accent">Hidden Hand Media</span>
              </h2>
            </div>

            <p className="text-white/60 text-sm font-brier leading-relaxed max-w-xl">
              As the architect of <strong>Hidden Hand Media</strong>, Franklin leads a high-caliber digital agency that specializes in premium social strategy, professional video production, and high-impact digital activations. 
            </p>
            <p className="text-white/60 text-sm font-brier leading-relaxed max-w-xl">
              Hidden Hand Media manages end-to-end creative production—bridging high-end brand partnerships, creative campaigns, and modern storytelling. Together, they turn digital impressions into loyal community and commercial authority.
            </p>

            <div className="pt-2">
              <a
                href="https://hiddenhandmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-accent hover:text-white border border-accent hover:border-white/20 font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Visit Hidden Hand Media
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Agency Logo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative group p-10 bg-card-dark/40 border border-white/5 rounded-3xl w-full max-w-[360px] aspect-square flex items-center justify-center shadow-xl overflow-hidden">
              {/* Animated hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative w-44 h-44 animate-float">
                <Image
                  src="/logo.webp"
                  alt="Hidden Hand Media Logo"
                  fill
                  sizes="176px"
                  className="object-contain filter drop-shadow-[0_4px_12px_rgba(255,204,1,0.15)] group-hover:drop-shadow-[0_8px_24px_rgba(255,204,1,0.25)] transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
