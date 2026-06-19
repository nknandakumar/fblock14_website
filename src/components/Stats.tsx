"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Sparkles, Calendar } from "lucide-react";

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function Counter({ value, suffix, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsData = [
    {
      title: "Instagram Followers",
      value: 100,
      suffix: "K+",
      icon: (
        <svg
          className="w-5 h-5 text-accent fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      description: "Highly engaged niche audience",
    },
    {
      title: "Total Views",
      value: 50,
      suffix: " Million+",
      icon: <Play className="w-5 h-5 text-accent" fill="currentColor" />,
      description: "Viral reach across campaigns",
    },
    {
      title: "Promotions & Collabs",
      value: 100,
      suffix: "+",
      icon: <Sparkles className="w-5 h-5 text-accent" />,
      description: "Successful brand integrations",
    },
    {
      title: "Experience",
      value: 5,
      suffix: " Years",
      icon: <Calendar className="w-5 h-5 text-accent" />,
      description: "Refining media & conversion",
    },
  ];

  return (
    <section className="py-20 bg-bg-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-medium px-4 py-2 border border-white/10 rounded-full mb-2 uppercase tracking-[0.25em] ">
            Authority in Numbers
          </span>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mt-3">
            Proven Market Traction
          </h2>
          <p className="text-white/50 text-sm font-brier mt-4">
            Franklin delivers attention and conversion metrics that help premium brands stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(255, 204, 1, 0.4)" }}
              className="bg-card-dark border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-48 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Radial gradient hover accent */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,204,1,0.02)_0%,transparent_50%)] pointer-events-none" />

              <div className="flex justify-between items-start">
                <span className="text-xs uppercase font-bold text-white/50 tracking-wider max-w-[70%]">
                  {stat.title}
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>

              <div className="space-y-1 mt-auto">
                <div className="text-4xl font-black tracking-tight text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[10px] text-white/40 font-brier">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
