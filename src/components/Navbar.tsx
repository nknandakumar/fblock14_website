"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ButtonCrossArrow from "./ButtonCrossArrow";
import HoverNavLink from "./HoverNavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#portfolio" },
    { name: "Metrics", href: "/#metrics" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Founder", href: "/#founder" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 select-none pointer-events-none">
        <nav
          className={`mx-auto w-full max-w-4xl rounded-full bg-neutral-950/85 border transition-all duration-300 flex items-center justify-between px-4  py-2.5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] pointer-events-auto ${
            scrolled ? "border-accent/30 backdrop-blur-lg" : "border-white/10 backdrop-blur-md"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative  overflow-hidden  flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.webp"
                alt="F_BLOCK_14 Logo"
                className="w-10 md:w-15 h-10 md:h-15 rounded-full object-contain"
              />
            </div>
           
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <HoverNavLink 
                key={link.name}
                href={link.href}
                text={link.name}
              />
            ))}
          </div>

          {/* Right CTA / Menu Button */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <ButtonCrossArrow href="/#contact" text="Let's Collab" className="scale-90 origin-right" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white/80 hover:text-accent p-1.5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[92%] bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_25px_50px_rgba(0,0,0,0.6)] flex flex-col gap-4 text-white"
          >
            {navLinks.map((link) => (
              <HoverNavLink
                key={link.name}
                href={link.href}
                text={link.name}
                onClick={() => setIsOpen(false)}
                className="py-3 border-b border-white/5 !justify-start pl-2"
              />
            ))}
            <ButtonCrossArrow
              href="/#contact"
              onClick={() => setIsOpen(false)}
              text="Let's Partner"
              className="w-full mt-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
