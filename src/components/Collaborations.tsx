"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface ReelItem {
  id: number;
  label: string;
  videoUrl: string;
  category: string;
  tag: "commercial" | "tech";
}

// Subcomponent to handle individual video elements to prevent parent re-renders on hover
function ReelCard({ reel }: { reel: ReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return;
    if (videoRef.current) {
      videoRef.current.muted = false; // Enable audio
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay with audio policy fallback
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => {});
            }
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) return;
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false; // Enable audio
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play()
                .then(() => setIsPlaying(true))
                .catch(() => {});
            }
          });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative aspect-[9/16] rounded-[2.5rem] p-[3px] bg-gradient-to-b from-neutral-600 to-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden cursor-pointer group select-none"
    >
      {/* Inner phone body bezel frame */}
      <div className="relative w-full h-full rounded-[2.3rem] border-[10px] border-neutral-950 bg-neutral-950 overflow-hidden flex flex-col justify-end z-0">
        
        {/* Video Player */}
        <video
          ref={videoRef}
          src={reel.videoUrl}
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105"
        />

        {/* Static Play Icon Overlay (Visible when not playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/45 z-10">
            <div className="w-14 h-14 rounded-full bg-accent text-bg-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-5 h-5 fill-current translate-x-0.5" />
            </div>
          </div>
        )}

        {/* Info Overlay (Flush bottom design, no card border, just gradient overlay) */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 z-20 space-y-1.5 pointer-events-none">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-black uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-0.5 rounded-full inline-block">
              {reel.category}
            </span>
            
            {/* Pulsing soundwave active indicator */}
            {isPlaying && (
              <span className="flex items-center gap-0.5 pr-1">
                <span className="w-[2px] h-2.5 bg-accent rounded-full animate-bounce" style={{ animationDuration: "0.6s" }} />
                <span className="w-[2px] h-3.5 bg-accent rounded-full animate-bounce" style={{ animationDuration: "0.4s", animationDelay: "0.15s" }} />
                <span className="w-[2px] h-2 bg-accent rounded-full animate-bounce" style={{ animationDuration: "0.5s", animationDelay: "0.3s" }} />
              </span>
            )}
          </div>
          
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-white leading-tight">
            {reel.label.split(" | ")[0]}
          </h3>
          <p className="text-[10px] font-bold text-white/50 tracking-widest mt-1">
            {reel.label.split(" | ")[1]}
          </p>
        </div>

        {/* Dynamic Island Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] pointer-events-none">
          <div className="w-7 h-[2px] bg-neutral-900 rounded-full" />
          <div className="w-2.5 h-2.5 bg-neutral-950 rounded-full border border-neutral-900 flex items-center justify-center">
            <div className="w-1 h-1 bg-blue-900 rounded-full opacity-40" />
          </div>
        </div>

      </div>
    </div>
  );
}

// Smartphone Skeleton Loader Component
function ReelSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="relative aspect-[9/16] rounded-[2.5rem] p-[3px] bg-neutral-850 overflow-hidden"
        >
          <div className="relative w-full h-full rounded-[2.3rem] border-[10px] border-neutral-950 bg-neutral-950/60 overflow-hidden flex flex-col justify-end p-5">
            {/* Shimmering effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />

            {/* Float glass skeleton panel */}
            <div className="border border-white/5 bg-neutral-900/60 rounded-2xl p-4 space-y-2">
              <div className="h-3 bg-neutral-800 rounded w-1/3 animate-pulse" />
              <div className="h-4 bg-neutral-800 rounded w-3/4 animate-pulse" />
              <div className="h-2 bg-neutral-800 rounded w-1/2 animate-pulse" />
            </div>

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-900 rounded-full z-30" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Collaborations() {
  const [activeTab, setActiveTab] = useState<"all" | "commercial" | "tech">("all");
  const [isLoading, setIsLoading] = useState(false);

  // All 6 video reels provided by the user
  const allReels: ReelItem[] = [
    {
      id: 1,
      label: "Renault Duster Launch | 2.1M+ Views",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865782/renultduster_u9ysvb.mp4",
      category: "Automotive",
      tag: "commercial",
    },
    {
      id: 2,
      label: "Ambience Conventions | 850K+ Views",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865778/Ambience_Convention_Hal_wlntfs.mp4",
      category: "Commercial",
      tag: "commercial",
    },
    {
      id: 3,
      label: "Tech & Gadgets Campaign | 1.2M+ Views",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865789/samsung_smart.cafe_nl5ugp.mp4",
      category: "Tech & Gear",
      tag: "tech",
    },
    {
      id: 4,
      label: "Kitkat Break Time | 1.4M+ Views",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865787/kitkat_u6obay.mp4",
      category: "FMCG",
      tag: "tech",
    },
    {
      id: 5,
      label: "Lifestyle & Apparel Collab | 900K+ Views",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865771/harsha_msdg9n.mp4",
      category: "Lifestyle",
      tag: "tech",
    },
    {
      id: 6,
      label: "Skoda Launch Promo | 1.5M+ Views",
      videoUrl: "https://res.cloudinary.com/dokrpo5fl/video/upload/v1781865789/skodacar_inm0yl.mp4",
      category: "Auto Tech",
      tag: "commercial",
    },
  ];

  // Filter reels based on active tab
  const getFilteredReels = () => {
    if (activeTab === "all") return allReels;
    return allReels.filter((reel) => reel.tag === activeTab);
  };

  // Async tab switcher simulation (simulates a server fetch)
  const handleTabChange = async (tabName: "all" | "commercial" | "tech") => {
    if (tabName === activeTab) return;
    setIsLoading(true);
    // 800ms delay for simulation
    await new Promise((resolve) => setTimeout(resolve, 800));
    setActiveTab(tabName);
    setIsLoading(false);
  };

  const filteredReels = getFilteredReels();

  // 50+ Clients Logos Ribbon (Shubhagana brand names)
  const mockClients = [
    "SAMSUNG Shivamogga",
    "AMBIENT Shivamogga",
    "RENAULT Shivamogga",
    "SKODA Shivamogga",
  
    "HARSHA Shivamogga",

   
  ];

  // Triple array to create seamless loop marquee
  const marqueeClients = [...mockClients, ...mockClients, ...mockClients];

  return (
    <section id="portfolio" className="py-24 bg-bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <ScrollReveal delay={0}>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-accent bg-accent/5 border border-accent/20 px-3.5 py-1.5 rounded-full">
              Creator Portfolio
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Reels Engineered for Commercial Conversion
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/50 text-sm font-sans max-w-md mx-auto">
              Visual, high-production vertical campaigns optimized for maximum social conversion. Tap on mobile or hover on desktop to play.
            </p>
          </ScrollReveal>
        </div>

        {/* Reels Grid */}
        <div className="min-h-[500px] mt-12">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ReelSkeleton count={activeTab === "all" ? 6 : 3} />
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8"
              >
                {filteredReels.map((reel, idx) => (
                  <ScrollReveal
                    key={reel.id}
                    delay={idx * 0.1}
                    yOffset={40}
                  >
                    <ReelCard reel={reel} />
                  </ScrollReveal>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ribbon Header divider */}
        <div className="mt-28 mb-10 text-center">
          <span className=" font-semibold font-sans text-sm   uppercase tracking-[0.1em] text-white/40 block">
            Trusted by 50+ brands and businesses
          </span>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Ribbon of Client Logos */}
      <div className="w-full overflow-hidden py-8 select-none relative">
        {/* Left and Right Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-24 sm:gap-28 w-max items-center">
          {marqueeClients.map((client, idx) => (
            <div
              key={`${client}-${idx}`}
              className="text-sm sm:text-base font-black uppercase tracking-[0.3em] text-white/40 hover:text-accent transition-colors duration-300 flex items-center gap-8"
            >
              <span className="font-sans tracking-normal font-medium" >{client}</span>
              <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
