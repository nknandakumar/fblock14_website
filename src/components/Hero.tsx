"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Play, Briefcase } from "lucide-react";
import ButtonCrossArrow from "./ButtonCrossArrow";
import HoverNavLink from "./HoverNavLink";

export default function Hero() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && document.body.classList.contains("loader-finished")) {
      setLoaderFinished(true);
    } else {
      const handleFinished = () => setLoaderFinished(true);
      window.addEventListener("loaderFinished", handleFinished);
      return () => window.removeEventListener("loaderFinished", handleFinished);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as const;

  const portraitVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as const;

  const floatBadge1 = {
    hidden: { opacity: 0, x: -35, y: -25, rotate: -8 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: -3,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as const;

  const floatBadge2 = {
    hidden: { opacity: 0, x: 35, y: -25, rotate: 8 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 3,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as const;

  const floatBadge3 = {
    hidden: { opacity: 0, x: -35, y: 25 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as const;

  const floatBadge4 = {
    hidden: { opacity: 0, x: 35, y: 25 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  } as const;

  const backgroundAssets = [
    { type: "video", url: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865760/simpleone_ecivnt.mp4" },
    { type: "photo", url: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781943708/copy_of_screenshot_20260619_124644_instagram_vmnpyb.jpg" },
    { type: "video", url: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865794/samsungbhadravathi_xbj6ri.mp4" },
    { type: "video", url: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865787/kitkat_u6obay.mp4" },
    { type: "photo", url: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1781943549/IMG-20260620-WA0015_ayppni.jpg" },
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
          animate={loaderFinished ? "visible" : "hidden"}
          className="flex flex-col items-center text-center space-y-8 w-full"
        >
          {/* 1. Top Status Ticker (Star Separator Scroll) */}
          <motion.div 
            variants={itemVariants} 
            className="w-full max-w-[280px] min-[380px]:max-w-sm sm:max-w-lg mx-auto overflow-hidden relative select-none py-1 pointer-events-none"
          >
            {/* Fade out edges */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-bg-dark to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-bg-dark to-transparent z-10" />

            <div 
              className="flex animate-marquee gap-8 w-max items-center whitespace-nowrap will-change-transform"
              style={{ animationDuration: "45s" }}
            >
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-neutral-400/90 uppercase font-sans">
                  <span><span className="text-accent">★</span> Promotional Reels</span>
                  <span><span className="text-accent">★</span> Podcast Features</span>
                  <span><span className="text-accent">★</span> Sponsored Content</span>
                  <span><span className="text-accent">★</span> 100K Followers</span>
                  <span><span className="text-accent">★</span> 50M+ Views</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.div variants={itemVariants} className="space-y-3 px-2">
            <h1 className="text-xl min-[380px]:text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-[1.1]">
              <span className="block sm:inline">Shivamogga's Leading <span className="text-accent">Digital Creator.</span></span>
              <span className="block text-sm min-[380px]:text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white/90 tracking-wide mt-2.5 font-sans uppercase">
                PROMOTING BUSINESSES THROUGH CONTENT
              </span>
            </h1>
          </motion.div>

          {/* 3. Sub-description */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-xs min-[380px]:text-sm sm:text-base max-w-[680px] mx-auto leading-relaxed px-4"
          >
           Franklin helps brands grow through high-performing promotional reels, creator-led campaigns, and podcast collaborations that connect businesses with engaged audiences across Karnataka.
          </motion.p>

          {/* 4. CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <ButtonCrossArrow href="/contact" text="Start a Collab" />
            <HoverNavLink href="#portfolio" text="See My Work" isButton />
          </motion.div>

          {/* Interactive Middle Showcase Reels Marquee (Between CTA Buttons and Franklin Image) */}
          {loaderFinished && (
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
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.2,
                }
              }
            }}
            className="w-full flex justify-center items-center mt-6 px-4 relative max-w-xl mx-auto"
          >
            {/* Franklin Image Card */}
            <motion.div
              variants={portraitVariants}
              className="relative text-center w-full max-w-[420px] aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10 bg-neutral-950 shadow-[0_0_80px_rgba(245,193,24,0.15)] group transition-all duration-500 hover:border-accent/30 z-10"
            >
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
                <span className="font-bold font-brier  text-5xl sm:text-6xl text-accent block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Franklin
                </span>
              </div>
            </motion.div>

            {/* Scattered Floating stat badges */}
            {/* Top-Left: rotate -3deg */}
            <motion.div
              variants={floatBadge1}
              whileHover={{ scale: 1.08, rotate: -1, transition: { duration: 0.2 } }}
              className="absolute top-8 left-[-15px] min-[380px]:left-[-5px] sm:left-[-40px] lg:left-[-100px] z-20 select-none cursor-pointer scale-[0.72] min-[380px]:scale-[0.88] sm:scale-100 origin-left"
            >
              <div className="flex items-center gap-2 bg-neutral-900/90 border border-accent/20 border-l-4 border-l-accent p-2.5 sm:p-3.5 rounded-xl shadow-2xl backdrop-blur-md">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="font-black text-white text-[11px] sm:text-sm">5 Years</div>
                  <div className="text-[8px] sm:text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">In Content</div>
                </div>
              </div>
            </motion.div>

            {/* Top-Right: rotate 3deg */}
            <motion.div
              variants={floatBadge2}
              whileHover={{ scale: 1.08, rotate: 1, transition: { duration: 0.2 } }}
              className="absolute top-14 right-[-15px] min-[380px]:right-[-5px] sm:right-[-40px] lg:right-[-100px] z-20 select-none cursor-pointer scale-[0.72] min-[380px]:scale-[0.88] sm:scale-100 origin-right"
            >
              <div className="flex items-center gap-2 bg-neutral-900/90 border border-accent/20 border-l-4 border-l-accent p-2.5 sm:p-3.5 rounded-xl shadow-2xl backdrop-blur-md">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="font-black text-white text-[11px] sm:text-sm">100K+</div>
                  <div className="text-[8px] sm:text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Followers</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom-Left: static */}
            <motion.div
              variants={floatBadge3}
              whileHover={{ scale: 1.08, rotate: 2, transition: { duration: 0.2 } }}
              className="absolute bottom-24 left-[-20px] min-[380px]:left-[-10px] sm:left-[-60px] lg:left-[-120px] z-20 select-none cursor-pointer scale-[0.72] min-[380px]:scale-[0.88] sm:scale-100 origin-left"
            >
              <div className="flex items-center gap-2 bg-neutral-900/90 border border-accent/20 border-l-4 border-l-accent p-2.5 sm:p-3.5 rounded-xl shadow-2xl backdrop-blur-md">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-current animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="font-black text-white text-[11px] sm:text-sm">50M+</div>
                  <div className="text-[8px] sm:text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Video Views</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom-Right: static */}
            <motion.div
              variants={floatBadge4}
              whileHover={{ scale: 1.08, rotate: -2, transition: { duration: 0.2 } }}
              className="absolute bottom-16 right-[-20px] min-[380px]:right-[-10px] sm:right-[-60px] lg:right-[-120px] z-20 select-none cursor-pointer scale-[0.72] min-[380px]:scale-[0.88] sm:scale-100 origin-right"
            >
              <div className="flex items-center gap-2 bg-neutral-900/90 border border-accent/20 border-l-4 border-l-accent p-2.5 sm:p-3.5 rounded-xl shadow-2xl backdrop-blur-md">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse" />
                <div className="text-left leading-tight">
                  <div className="font-black text-white text-[11px] sm:text-sm">100+</div>
                  <div className="text-[8px] sm:text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-0.5">Brands Worked With</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
