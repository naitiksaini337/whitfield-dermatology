"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";

interface PageBendWrapperProps {
  children: React.ReactNode;
}

/**
 * PageBendWrapper provides an ultra-luxurious, Awwwards-style physical page-bending effect
 * driven by the user's live scroll velocity. When scrolling vigorously, the page dynamically
 * bends in 3D perspective with subtle skew, curvature, and scale compression, feeling like
 * tactile, supple parchment.
 */
export function PageBendWrapper({ children }: PageBendWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Soft spring damping to prevent harsh snapbacks
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    stiffness: 140,
    mass: 0.4,
  });

  // Dynamic skew: bends slightly up/down based on scroll velocity (-1.2deg to 1.2deg)
  const skewY = useTransform(smoothVelocity, [-1500, 0, 1500], [1.3, 0, -1.3]);

  // Subtle 3D cylindrical curve: rolls the page forward/backward in 3D perspective
  const rotateX = useTransform(smoothVelocity, [-1500, 0, 1500], [-1.8, 0, 1.8]);

  // Elastic compression: tiny tactile squeeze when scrolling fast
  const scale = useTransform(smoothVelocity, [-2000, 0, 2000], [0.993, 1, 0.993]);

  if (!isMounted || reducedMotion) {
    return <div className="w-full">{children}</div>;
  }

  return (
    <motion.div
      style={{
        skewY,
        rotateX,
        scale,
        transformPerspective: 1400,
        transformOrigin: "center 40%",
      }}
      className="w-full will-change-transform transition-colors duration-300"
    >
      {children}
    </motion.div>
  );
}
