"use client";

import React, { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  treatmentName: string;
  timeframe: string;
  notes: string;
}

/**
 * Ultra-high-performance 120fps Before/After slider.
 * Uses CSS custom properties and direct compositor updates instead of React state re-renders,
 * eliminating mouse/touch lag completely.
 */
export function InteractiveBeforeAfter({
  beforeImage,
  afterImage,
  treatmentName,
  timeframe,
  notes,
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const percent = Math.max(3, Math.min(97, (x / rect.width) * 100));
    containerRef.current.style.setProperty("--slider-pos", `${percent}%`);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--slider-pos", "50%");
    }
  }, []);

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border border-line/80 shadow-sm hover:shadow-md transition-all">
      {/* Slider Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ "--slider-pos": "50%" } as React.CSSProperties}
        className="relative aspect-[4/3] w-full select-none cursor-ew-resize overflow-hidden touch-none"
      >
        {/* After Image (Base) */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src={afterImage}
            alt={`${treatmentName} - Result After Treatment`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
            priority={false}
            draggable={false}
          />
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-rose-deep shadow-sm">
            After
          </div>
        </div>

        {/* Before Image (Hardware-accelerated clip) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none will-change-[clip-path]"
          style={{
            clipPath: "inset(0 calc(100% - var(--slider-pos, 50%)) 0 0)",
          }}
        >
          <Image
            src={beforeImage}
            alt={`${treatmentName} - Baseline Condition`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover"
            priority={false}
            draggable={false}
          />
          <div className="absolute bottom-4 left-4 bg-ink/80 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm">
            Baseline
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-xl pointer-events-none will-change-[left]"
          style={{ left: "var(--slider-pos, 50%)" }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-rose-deep border border-rose-deep/20 flex items-center justify-center shadow-md">
            <div className="flex items-center gap-0.5 text-[10px] font-bold text-ink">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
        </div>
      </div>

      {/* Caption & Clinical Context */}
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-rose-deep font-semibold tracking-wider uppercase mb-1">
          <span>{treatmentName}</span>
          <span className="text-stone font-normal">{timeframe}</span>
        </div>
        <p className="text-sm text-stone leading-relaxed mb-3">{notes}</p>
        <div className="flex items-center gap-1.5 text-xs text-stone/80">
          <Sparkles className="w-3.5 h-3.5 text-rose" />
          <span>Drag left or right to compare</span>
        </div>
      </div>
    </div>
  );
}
