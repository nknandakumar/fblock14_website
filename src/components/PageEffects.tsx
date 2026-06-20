"use client";

import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";

function LenisController({ loading }: { loading: boolean }) {
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) {
      if (loading) {
        lenis.stop();
        lenis.scrollTo(0, { immediate: true });
      } else {
        lenis.start();
      }
    }
  }, [loading, lenis]);
  return null;
}

export default function PageEffects({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Premium fast progress loader simulation
    const duration = 1200; // 1.2 seconds loading
    const interval = 16;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
          }, 150);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Dispatch custom event and add body class when loading is done
  useEffect(() => {
    if (!loading) {
      document.body.classList.add("loader-finished");
      window.dispatchEvent(new Event("loaderFinished"));
    }
  }, [loading]);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <LenisController loading={loading} />
      
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 } 
            }}
          >
            {/* Cinematic Shutter Bars */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-[50vh] bg-[#050505]"
              exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.1 } }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#050505]"
              exit={{ y: "100%", transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.1 } }}
            />

            {/* Ambient Movie Lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,1,0.08)_0%,transparent_60%)] pointer-events-none" />

            {/* Content Container */}
            <motion.div 
              className="relative z-10 flex flex-col items-center"
              exit={{ 
                scale: 1.8, 
                opacity: 0, 
                filter: "blur(10px)", 
                transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
              }}
            >
              {/* Cinematic Studio/Brand Name */}
              <motion.h1 
                initial={{ opacity: 0, letterSpacing: "0.1em", scale: 0.95 }}
                animate={{ opacity: 1, letterSpacing: "0.3em", scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase font-sans mb-8 tracking-[0.3em] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
              >
                F_BLOCK_14
              </motion.h1>

              {/* Progress Area */}
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-xl md:text-2xl font-bold text-accent font-mono tracking-[0.2em] tabular-nums">
                    {Math.round(progress).toString().padStart(3, "0")}
                  </span>
                </motion.div>
                
                {/* Slim Cinematic Loader Line */}
                <div className="w-40 md:w-56 h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-accent shadow-[0_0_10px_rgba(245,193,24,0.8)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Cinematic Subtitle / Copyright */}
            <motion.div 
              className="absolute bottom-12 text-[8px] md:text-[10px] tracking-[0.5em] text-white/30 uppercase font-bold z-10"
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
            >
              A Franklin Production
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </ReactLenis>
  );
}
