"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    { name: "Work", href: "/#portfolio" },
    { name: "Metrics", href: "/#metrics" },
    { name: "Founder", href: "/#founder" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 select-none pointer-events-none">
        <nav
          className={`mx-auto w-full max-w-3xl rounded-full bg-neutral-950/85 border transition-all duration-300 flex items-center justify-between px-4  py-2.5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] pointer-events-auto ${
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
              <Link
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-bold uppercase tracking-wider text-white/70 hover:text-accent transition-colors duration-300 relative py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right CTA / Menu Button */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-white text-bg-dark font-black text-xs tracking-widest uppercase px-6 py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-accent/10"
              >
                Let's Collab
              </Link>
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
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold uppercase tracking-wider py-3 border-b border-white/5 text-white/70 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center bg-accent text-bg-dark font-black text-xs tracking-widest uppercase py-3 rounded-full hover:bg-white transition-colors duration-300"
            >
              Let's Partner
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
