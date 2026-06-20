"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 30,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setHasAnimated(true);
    } else {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Reset ONLY if the element leaves the viewport from the bottom (i.e. user scrolled up past it)
        if (rect.top > window.innerHeight) {
          controls.start("hidden");
          setHasAnimated(false);
        }
      }
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1], // Premium linear/ease reveal
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
