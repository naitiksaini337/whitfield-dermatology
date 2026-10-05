"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useVelocity } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

interface GalleryItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  link: string;
  badge: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "01",
    tag: "SURGICAL EXCELLENCE",
    title: "Mohs Micrographic Suite",
    description: "On-site CLIA-certified pathology lab ensuring same-day 99% clear margins with microscopic margin mapping.",
    image: "/images/clinic_interior.jpg",
    link: "/services/mohs-surgery",
    badge: "99% Clear Margins",
  },
  {
    id: "02",
    tag: "AESTHETIC ATELIER",
    title: "Bespoke Facial Sculpting",
    description: "Natural dermal architecture and micro-dosed neurotoxins by board-certified physicians, never overfilled.",
    image: "/images/service_skin.jpg",
    link: "/services/botox-fillers",
    badge: "Physician-Injected",
  },
  {
    id: "03",
    tag: "CLINICAL SANCTUARY",
    title: "Private Belle Meade Suites",
    description: "Designed for serenity, acoustic privacy, and calm medical elegance with dedicated recovery lounges.",
    image: "/images/derm_patient.jpg",
    link: "/new-patients",
    badge: "Unrushed Consultations",
  },
  {
    id: "04",
    tag: "PHOTOMEDICINE",
    title: "Dual-Wavelength Laser Suite",
    description: "Targeted vascular, pigmentary, and fractional skin resurfacing tailored to Fitzpatrick types I through VI.",
    image: "/images/clinic_interior.jpg",
    link: "/services/laser-therapy",
    badge: "Multi-Platform Technology",
  },
  {
    id: "05",
    tag: "RESTORATIVE DERM",
    title: "Cellular Skin Remodeling",
    description: "Medical-grade polynucleotide microneedling and bioactive serums for scar revision and collagen rejuvenation.",
    image: "/images/service_skin.jpg",
    link: "/services/microneedling-prp",
    badge: "Autologous Protocols",
  },
];

export function HorizontalScrollGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth scroll interpolation
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 24,
    stiffness: 90,
    mass: 0.3,
  });

  // Translate horizontally from 0% to the end of the container, leaving 100vw so the last item is on screen
  const x = useTransform(smoothProgress, [0, 1], ["calc(0% + 0vw)", "calc(-100% + 100vw)"]);

  // Dynamic progress indicator width
  const progressWidth = useTransform(smoothProgress, [0, 1], ["8%", "100%"]);

  // Measure scroll velocity for dynamic 3D bending exclusively within this horizontal scroll section
  const scrollVelocity = useVelocity(smoothProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 24,
    stiffness: 120,
    mass: 0.35,
  });

  // Dynamic 3D bending & perspective skew of the horizontal reel
  const skewX = useTransform(smoothVelocity, [-1.5, 0, 1.5], [4.5, 0, -4.5]);
  const rotateY = useTransform(smoothVelocity, [-1.5, 0, 1.5], [6, 0, -6]);
  const scale = useTransform(smoothVelocity, [-1.5, 0, 1.5], [0.97, 1, 0.97]);

  const [currentIndex, setCurrentIndex] = React.useState(1);
  React.useEffect(() => {
    return smoothProgress.on("change", (latest: number) => {
      const totalItems = galleryItems.length;
      const newIndex = Math.min(Math.max(1, Math.round(latest * (totalItems - 1)) + 1), totalItems);
      setCurrentIndex(newIndex);
    });
  }, [smoothProgress]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[280vh] bg-cream border-t border-b border-line/60"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-10 px-6 sm:px-12 lg:px-16">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-line/80 text-rose-deep text-xs font-medium uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scroll to Explore Across Clinics & Treatments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ink tracking-tight font-normal">
              Where Medical Rigor Meets <span className="italic text-rose-deep">Restorative Artistry</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-widest text-stone font-medium hidden sm:inline-block">
              Vertical Scroll moves Gallery Horizontally
            </span>
            {/* Scroll progress bar */}
            <div className="w-36 h-1.5 bg-line/80 rounded-full overflow-hidden">
              <motion.div 
                style={{ width: progressWidth }} 
                className="h-full bg-rose-deep rounded-full transition-all"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Moving Reel with 3D Page Bending & Skew */}
        <div className="relative my-auto w-full overflow-visible py-4">
          <motion.div 
            style={{
              x,
              skewX,
              rotateY,
              scale,
              transformPerspective: 1200,
              transformOrigin: "center center",
            }} 
            className="flex w-max gap-8 sm:gap-10 items-center will-change-transform"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative flex-shrink-0 w-[320px] sm:w-[420px] lg:w-[480px] rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-line/70 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container with subtle horizontal zoom */}
                <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden bg-blush">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 320px, (max-width: 1200px) 420px, 480px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Floating Tag Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-line/60 rounded-full px-3.5 py-1 text-[11px] font-medium tracking-widest text-ink uppercase">
                    {item.tag}
                  </div>

                  <div className="absolute top-4 right-4 bg-rose-deep/90 text-white rounded-full px-3 py-1 text-[11px] font-medium tracking-wide flex items-center gap-1.5 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="font-serif italic text-rose-deep text-lg font-normal">
                      {item.id}
                    </span>
                    <Link
                      href={item.link}
                      className="w-9 h-9 rounded-full bg-cream border border-line flex items-center justify-center text-ink group-hover:bg-rose-deep group-hover:text-white transition-colors"
                      aria-label={`Learn more about ${item.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-serif text-ink mb-2 tracking-tight group-hover:text-rose-deep transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Ending Call to Action Card */}
            <div className="flex-shrink-0 w-[300px] sm:w-[380px] p-8 sm:p-10 rounded-3xl bg-blush border border-line flex flex-col justify-center items-start">
              <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold mb-3">
                Begin Your Care
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-ink mb-4 font-normal leading-tight">
                Experience tailored dermatology in Nashville.
              </h3>
              <p className="text-sm text-stone mb-6 leading-relaxed">
                Same-week consultations available for urgent skin concerns and comprehensive skin cancer screenings.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-ink hover:bg-rose-deep text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Footer Navigation Info */}
        <div className="flex items-center justify-between text-xs text-stone border-t border-line/60 pt-4">
          <span>{`0${currentIndex} / 0${galleryItems.length}`} CLINICAL ARCHIVE</span>
          <span>EST. 2012 — NASHVILLE, TN</span>
        </div>

      </div>
    </section>
  );
}
