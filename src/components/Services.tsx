"use client";

import { motion } from "framer-motion";
import { Video, Handshake, Mic, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Promotional Reels",
      description: "High-production short-form content made for your brand — scripted, shot, and optimised for reach and conversion.",
      icon: <Video className="w-6 h-6 text-accent" />,
    },
    {
      title: "Brand Collaborations",
      description: "Long-term ambassador deals, product integrations, and campaign partnerships with Franklin's engaged audience.",
      icon: <Handshake className="w-6 h-6 text-accent" />,
    },
    {
      title: "Podcast Features",
      description: "Get your brand in front of a loyal listener base through sponsored segments or featured conversations on Franklin's podcast.",
      icon: <Mic className="w-6 h-6 text-accent" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-bg-dark border-t border-white/5 relative overflow-hidden">
      {/* Background glow detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full filter blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-accent bg-accent/5 border border-accent/20 px-3.5 py-1.5 rounded-full">
            WHAT YOU CAN BOOK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white font-sans">
            Three Ways Brands Work With Franklin
          </h2>
          <p className="text-white/50 text-sm md:text-lg font-sans max-w-xl mx-auto">
            Leverage premium creative content, audience placement, and media activations engineered for high commercial growth.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, borderColor: "rgba(255, 204, 1, 0.2)" }}
              className="bg-card-dark border-t-4 border-t-accent border-x border-b border-white/5 p-8 rounded-3xl flex flex-col justify-between min-h-[320px] transition-all duration-300 relative group overflow-hidden shadow-lg shadow-black/30"
            >
              {/* Radial gradient hover accent */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,204,1,0.02)_0%,transparent_50%)] pointer-events-none" />
              
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA Link */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300 group/link"
                >
                  Enquire
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
