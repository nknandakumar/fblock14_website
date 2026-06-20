"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Play, Briefcase } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  } as const;

  const backgroundAssets = [
    { type: "video", url: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865782/renultduster_u9ysvb.mp4" },
    { type: "photo", url: "/collab_car.png" },
    { type: "video", url: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865778/Ambience_Convention_Hal_wlntfs.mp4" },
    { type: "photo", url: "/collab_fashion.png" },
    { type: "video", url: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865787/kitkat_u6obay.mp4" },
    { type: "photo", url: "/collab_tech.png" },
  ];

  // Repeat assets twice to create seamless loop
  const marqueeAssets = [...backgroundAssets, ...backgroundAssets];

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-bg-dark text-white">
      {/* Soft golden glow behind Franklin's image (z-0) */}
      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(245,193,24,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Main Content Container (stacked on top with relative z-10) */}
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8 w-full"
        >
          {/* 1. Top Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-full shadow-md">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Currently Accepting Brand Collaborations
            </span>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
              <span className="block">Shivamogga's Leading</span>
              <span className="block text-accent mt-1">Digital Creator.</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white/95 tracking-normal mt-3 font-sans capitalize">
                Now Taking Brand Campaigns.
              </span>
            </h1>
          </motion.div>

          {/* 3. Sub-description */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-base sm:text-lg max-w-[680px] mx-auto leading-relaxed"
          >
           Franklin helps brands grow through high-performing promotional reels, creator-led campaigns, and podcast collaborations that connect businesses with engaged audiences across Karnataka.
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-white text-bg-dark font-black text-xs tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-accent/15"
            >
              Start a Collaboration ↗
            </Link>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-850 font-black text-xs tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            >
              See My Work ↗
            </a>
          </motion.div>

          {/* Interactive Middle Showcase Reels Marquee (Between CTA Buttons and Franklin Image) */}
          {mounted && (
            <motion.div
              variants={itemVariants}
              className="w-full py-4 select-none relative max-w-3xl overflow-hidden"
            >
              {/* Fade out edges */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

              <div className="flex animate-marquee gap-5 w-max items-center will-change-transform py-2">
                {marqueeAssets.map((asset, idx) => (
                  <div
                    key={`showcase-asset-${idx}`}
                    className="w-24 sm:w-32 aspect-[9/16] relative rounded-xl overflow-hidden bg-neutral-950 border border-white/10 flex-shrink-0 shadow-md transition-all duration-300 hover:scale-105 hover:border-accent/40 cursor-pointer"
                  >
                    {asset.type === "video" ? (
                      <video
                        src={asset.url}
                        loop
                        muted
                        playsInline
                        autoPlay
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={asset.url}
                        alt="Franklin Collaboration"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 5 & 6. Franklin Image & Floating Achievement Pills */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center items-center mt-6 px-4 relative max-w-xl mx-auto"
          >
            {/* Franklin Image Card */}
            <div className="relative text-center w-full max-w-[420px] aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_0_80px_rgba(245,193,24,0.15)] group transition-all duration-500 hover:border-accent/30 z-10">
              <Image
                src="/heroImg.png"
                alt="Franklin Portrait - F_BLOCK_14"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Soft bottom fade gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />

              {/* Signature Name Overlay */}
              <div className="absolute bottom-6 inset-x-0 flex justify-center z-20 pointer-events-none select-none">
                <span className="font-signature text-5xl sm:text-6xl text-accent block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Franklin
                </span>
              </div>
            </div>

            {/* Scattered Floating stat badges */}
            {/* Top-Left: rotate -3deg */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
              whileHover={{ scale: 1.08, rotate: -1, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-10 left-[0px] sm:left-[-40px] lg:left-[-100px] z-20 select-none cursor-pointer"
            >
              <div className="flex items-center gap-3 bg-neutral-900 border border-accent/25 border-l-4 border-l-accent p-3.5 rounded-xl shadow-2xl backdrop-blur-md">
                <Award className="w-5 h-5 text-accent animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="font-black text-white text-xs sm:text-sm">5 Years</div>
                  <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">In Content</div>
                </div>
              </div>
            </motion.div>

            {/* Top-Right: rotate 3deg */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
              whileHover={{ scale: 1.08, rotate: 1, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-16 right-[0px] sm:right-[-40px] lg:right-[-100px] z-20 select-none cursor-pointer"
            >
              <div className="flex items-center gap-3 bg-neutral-900 border border-accent/25 border-l-4 border-l-accent p-3.5 rounded-xl shadow-2xl backdrop-blur-md">
                <Users className="w-5 h-5 text-accent animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="font-black text-white text-xs sm:text-sm">100K+</div>
                  <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Local Followers</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom-Left: static */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.08, rotate: 2, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-28 left-[-10px] sm:left-[-60px] lg:left-[-120px] z-20 select-none cursor-pointer"
            >
              <div className="flex items-center gap-3 bg-neutral-900 border border-accent/25 border-l-4 border-l-accent p-3.5 rounded-xl shadow-2xl backdrop-blur-md">
                <Play className="w-5 h-5 text-accent fill-current animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="font-black text-white text-xs sm:text-sm">50M+</div>
                  <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Video Views</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom-Right: static */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.08, rotate: -2, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-20 right-[-10px] sm:right-[-60px] lg:right-[-120px] z-20 select-none cursor-pointer"
            >
              <div className="flex items-center gap-3 bg-neutral-900 border border-accent/25 border-l-4 border-l-accent p-3.5 rounded-xl shadow-2xl backdrop-blur-md">
                <Briefcase className="w-5 h-5 text-accent animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="font-black text-white text-xs sm:text-sm">100+</div>
                  <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Brands Worked With</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
