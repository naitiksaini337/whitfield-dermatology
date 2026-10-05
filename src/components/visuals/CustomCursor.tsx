"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Luxury, high-performance custom cursor for Next.js 15+ App Router.
 * Features a zero-lag inner dot in Warm Brass (#B08D57) and a spring-damped outer hairline ring.
 */
export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates (zero lag)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring spring physics configuration: damping: 25, stiffness: 300, mass: 0.5
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    // Device check: check for coarse pointer (touchscreens / mobile)
    const touchCheck = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(touchCheck.matches);

    const onTouchMediaChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };
    touchCheck.addEventListener("change", onTouchMediaChange);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      touchCheck.removeEventListener("change", onTouchMediaChange);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  // Accessibility & touch guard
  if (!isMounted || shouldReduceMotion || isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Ring: 36px circular ring with 1px Warm Brass hairline border trailing with spring physics */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="fixed top-0 left-0 w-[36px] h-[36px] -ml-[18px] -mt-[18px] rounded-full border border-[#B08D57] pointer-events-none will-change-transform opacity-80"
      />

      {/* Inner Dot: Crisp 10px circular element in solid Warm Brass locked directly to mouse coordinates */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="fixed top-0 left-0 w-[10px] h-[10px] -ml-[5px] -mt-[5px] rounded-full bg-[#B08D57] pointer-events-none will-change-transform shadow-[0_0_8px_rgba(176,141,87,0.4)]"
      />
    </div>
  );
}
