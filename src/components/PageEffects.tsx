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
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none text-bg-dark overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            {/* Stair columns background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {[...Array(6)].map((_, i) => {
                // Calculate distance from center (for 6 columns, center is between index 2 and 3)
                const delayIndex = Math.abs(i - 2.5) - 0.5; 
                return (
                  <motion.div
                    key={i}
                    className="absolute top-0 bottom-0 bg-accent"
                    style={{
                      left: `${(i * 100) / 6}%`,
                      width: `calc(${100 / 6}% + 1.5px)`, // Overlap slightly to prevent sub-pixel gaps
                    }}
                    initial={{ y: 0 }}
                    exit={{
                      y: "100%",
                      transition: {
                        duration: 1.2,
                        ease: [0.85, 0, 0.15, 1], // Extra smooth easing curve
                        delay: 0.12 * delayIndex, // Slightly longer delay to spread paint load
                      },
                    }}
                  />
                );
              })}
            </div>

            <motion.div 
              className="flex flex-col items-center relative z-10"
              exit={{ 
                opacity: 0, 
                y: 80,
                transition: { duration: 0.6, ease: [0.85, 0, 0.15, 1] } 
              }}
            >
              {/* Static Brand Name */}
              <div className="text-lg font-semibold  md:text-4xl font-black uppercase font-sans text-center mt-2">
                F_BLOCK_14
              </div>
              {/* Massive Elegant Counter */}
              <div className="overflow-hidden h-28 md:h-36 flex items-center justify-center">
                <motion.span 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-7xl md:text-8xl lg:text-9xl font-black tracking-wider font-sans select-none tabular-nums"
                >
                  {Math.round(progress).toString().padStart(3, "0")}
                </motion.span>
              </div>

              
            </motion.div>
            
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: 0.6 }} // Delayed slightly to de-congest page load paints
        className="flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </ReactLenis>
  );
}
