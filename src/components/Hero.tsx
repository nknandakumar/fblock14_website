"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowUpRight, TrendingUp, Users, Award } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  const stats = [
    {
      label: "Followers",
      value: "100K+",
      icon: <Users className="w-4 h-4 text-accent" />,
      description: "Organic community",
    },
    {
      label: "Total Views",
      value: "50M+",
      icon: <TrendingUp className="w-4 h-4 text-accent" />,
      description: "Across platforms",
    },
    {
      label: "Collaborations",
      value: "50+",
      icon: <Award className="w-4 h-4 text-accent" />,
      description: "Premium campaigns",
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-dark text-white">
      {/* Background visual detail */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column - Creator info (30% equivalent / 4 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col items-center text-center justify-center space-y-6"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-accent bg-accent/5 border border-accent/20 px-3.5 py-1.5 rounded-full">
                Official Creator
              </span>
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
                  F_BLOCK_14
                </h1>
                <span className="font-signature text-5xl text-accent block">
                  Franklin
                </span>
              </div>
              <p className="text-white/60 text-sm font-brier leading-relaxed max-w-sm mx-auto">
                Bridging the gap between raw attention and premium brand conversion.
                Focused on high-production content campaigns that drive authority and real commercial growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 justify-center">
              <a
                href="tel:+1234567890"
                className="group flex items-center gap-2 bg-accent hover:bg-white text-bg-dark font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-accent/5"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                Call Now
              </a>
              <a
                href="https://instagram.com/f_block_14"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current text-white group-hover:text-accent transition-colors"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Center Column - Large professional image (60% equivalent / 5 cols) */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[400px] lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden group border border-white/5 shadow-2xl bg-card-dark">
              <Image
                src="/heroImg.png"
                alt="Franklin Portrait - F_BLOCK_14"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column - Premium statistic cards (20% equivalent / 3 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col gap-4 justify-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card-dark border border-white/5 p-5 rounded-2xl flex flex-col gap-2 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-white/50 tracking-wider">
                    {stat.label}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </div>
                <p className="text-[10px] text-white/40 font-brier">
                  {stat.description}
                </p>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.a
              href="tel:+1234567890"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-accent border border-accent hover:bg-white hover:border-white p-5 rounded-2xl flex flex-col gap-2 transition-colors duration-300 cursor-pointer group text-bg-dark"
            >
              <div className="flex items-center justify-between text-bg-dark">
                <span className="text-xs uppercase font-bold tracking-widest">
                  Let's Partner
                </span>
                <div className="w-7 h-7 rounded-full bg-bg-dark/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4 text-bg-dark" />
                </div>
              </div>
              <div className="text-xl font-extrabold uppercase leading-tight tracking-tight mt-1">
                Call Franklin Now
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-bg-dark/60 mt-1">
                Lock Campaign Dates
              </p>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
