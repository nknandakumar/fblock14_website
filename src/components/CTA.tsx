"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ButtonCrossArrow from "./ButtonCrossArrow";

export default function CTA() {
  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com/f_block_14",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@f_block_14",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/f_block_14",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/1234567890",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.016 14.1 1.02 11.999 1.02c-5.444 0-9.866 4.372-9.87 9.802 0 1.714.452 3.393 1.312 4.88L2.435 21.93l6.212-1.61zM17.18 14.93c-.282-.142-1.67-.82-1.93-.915-.258-.095-.447-.142-.635.142-.189.284-.73.915-.895 1.103-.165.188-.33.213-.612.07-.282-.142-1.192-.438-2.27-1.401-.839-.747-1.406-1.67-1.57-1.953-.165-.283-.018-.435.123-.575.127-.126.282-.33.424-.495.142-.165.189-.283.283-.472.094-.189.047-.354-.024-.495-.071-.142-.635-1.53-.87-2.095-.23-.553-.483-.477-.66-.486-.17-.008-.364-.01-.56-.01-.197 0-.518.073-.79.37-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.063 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.67-.682 1.905-1.34.235-.657.235-1.22.165-1.34-.07-.122-.258-.19-.54-.332z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:franklin@fblock14.com",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-t from-black to-bg-dark border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,1,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Subtitle badge */}
        <ScrollReveal delay={0}>
          <span className="text-xs font-bold border border-accent rounded-full p-2 bg-accent/3 uppercase tracking-[0.1em] text-accent mb-6 inline-block">
            LET'S COLLABORATE
          </span>
        </ScrollReveal>

        {/* Huge Bold CTA Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.1] mb-6 text-white">
           LET'S PROMOTE YOUR <span className="text-accent font-sans">BUSINESS</span>
          </h2>
        </ScrollReveal>

        {/* Subtext */}
        <ScrollReveal delay={0.15}>
          <p className="text-white/60 text-sm sm:text-base font-sans max-w-lg mb-10">
            Whether you're promoting a business, launching a product, or sharing your story, let's create content that reaches the right audience.
          </p>
        </ScrollReveal>

        {/* Primary Action Button */}
        <ScrollReveal delay={0.2} yOffset={20}>
          <div className="mb-14 flex justify-center">
            <ButtonCrossArrow href="/contact" text="Start a Collab" className="md:scale-110" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
