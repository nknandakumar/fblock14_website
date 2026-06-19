"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface CollabItem {
  id: number;
  brand: string;
  campaign: string;
  description: string;
  image: string;
  type: "image" | "video";
}

export default function Collaborations() {
  const collabs: CollabItem[] = [
    {
      id: 1,
      brand: "Chrono Lux",
      campaign: "The Art of Time",
      description: "A digital campaign showcasing the intricate engineering of luxury timepieces, driving 1.2M+ organic views.",
      image: "/collab_watch.png",
      type: "video",
    },
    {
      id: 2,
      brand: "Zenith Wear",
      campaign: "Urban Techwear 2026",
      description: "Visual commercial highlighting minimalist urban techwear aesthetics, resulting in a 24% boost in brand engagement.",
      image: "/collab_fashion.png",
      type: "image",
    },
    {
      id: 3,
      brand: "Aether Sound",
      campaign: "Pure Silence",
      description: "High-production video campaign launching premium noise-canceling headphones to a tech-savvy audience.",
      image: "/collab_tech.png",
      type: "video",
    },
    {
      id: 4,
      brand: "Apex Motors",
      campaign: "Track Bound",
      description: "A cinematic review and visual-heavy campaign promoting the latest electric luxury sports car series.",
      image: "/collab_car.png",
      type: "image",
    },
  ];

  return (
    <section className="py-24 bg-bg-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mt-3">
              Brand Collaborations
            </h2>
            <p className="text-white/50 text-sm font-brier mt-4">
              Explore how Franklin partners with industry leaders to craft visual narratives that capture audience attention and elevate brand authority.
            </p>
          </div>
          <div className="hidden md:block">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors duration-300"
            >
              Partner With Us &rarr;
            </a>
          </div>
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collabs.map((collab, idx) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-card-dark border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-accent/20 transition-all duration-300 shadow-xl"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                <Image
                  src={collab.image}
                  alt={`${collab.brand} - ${collab.campaign}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Video Play Overlay */}
                {collab.type === "video" && (
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/45">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full bg-accent text-bg-dark flex items-center justify-center shadow-lg shadow-accent/20 cursor-pointer"
                    >
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </motion.div>
                  </div>
                )}

                {/* Gradient overlay on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg-dark via-bg-dark/10 to-transparent pointer-events-none" />
              </div>

              {/* Campaign details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {collab.type === "video" ? "Video Integration" : "Photo Shoot"}
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                  {collab.brand}
                </h3>
                <h4 className="text-xs font-semibold uppercase text-accent tracking-widest mt-1 mb-3">
                  {collab.campaign}
                </h4>
                <p className="text-white/60 text-sm font-brier leading-relaxed mt-auto">
                  {collab.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
