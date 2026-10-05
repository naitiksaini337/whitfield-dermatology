"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CurtainRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Cinematic Curtain Reveal component.
 * Uses an architectural clip-path wipe with high-luxury cubic-bezier easing.
 */
export function CurtainReveal({ children, className = "", delay = 0.1 }: CurtainRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.08 }}
        animate={
          isInView
            ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", scale: 1 }
            : { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.08 }
        }
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * MaskedHeading component.
 * Words or lines slide gracefully up from an overflow-hidden mask.
 */
export function MaskedHeading({
  text,
  as: Component = "h1",
  className = "",
  delay = 0.1,
}: {
  text: string;
  as?: any;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  return (
    <Component ref={ref} className={`flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-1">
          <motion.span
            initial={{ y: "115%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "115%", opacity: 0 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
