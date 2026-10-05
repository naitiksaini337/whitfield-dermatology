"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowRight, Star, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MotionReveal, StaggerGroup, StaggerItem } from "@/components/motion/MotionFade";
import { HorizontalScrollGallery } from "@/components/motion/HorizontalScrollGallery";
import { InteractiveBeforeAfter } from "@/components/motion/InteractiveBeforeAfter";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { CurtainReveal, MaskedHeading } from "@/components/motion/CurtainReveal";

export default function Home() {
  const resultsRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: resultsRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Typography & Action */}
            <div className="lg:col-span-6 z-10">
              <MotionReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line text-rose-deep text-[11px] font-semibold tracking-widest uppercase mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-deep animate-pulse" />
                  <span>NASHVILLE, TN</span>
                </div>
              </MotionReveal>

              <div className="mb-8">
                <MaskedHeading 
                  as="h1" 
                  className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-ink font-fraunces font-light tracking-tight"
                  text="Clear skin."
                />
                <MaskedHeading 
                  as="h1" 
                  className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] text-ink font-fraunces font-light tracking-tight italic text-rose-deep"
                  delay={0.1}
                  text="Quiet confidence."
                />
              </div>

              <MotionReveal direction="up" delay={0.3}>
                <p className="text-lg md:text-xl leading-[1.6] text-stone mb-10 max-w-[42ch] font-light">
                  Expert dermatology and precision skin surgery. We diagnose and treat all skin conditions with board-certified physicians only. Same-week appointments available.
                </p>
              </MotionReveal>

              <MotionReveal direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <MagneticButton>
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center gap-2 bg-ink text-cream px-8 py-4 rounded-full text-sm font-medium hover:bg-rose-deep transition-colors w-full sm:w-auto"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>

                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium text-ink bg-transparent border border-line hover:border-rose transition-colors w-full sm:w-auto"
                  >
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              </MotionReveal>
              
              <MotionReveal direction="up" delay={0.5}>
                <div className="flex items-center gap-6 text-[13px] text-stone font-medium">
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-rose text-rose" /> 4.9 (427 reviews)
                  </span>
                  <span className="hidden sm:inline text-line">|</span>
                  <span className="hidden sm:inline">Board-certified MDs only</span>
                </div>
              </MotionReveal>
            </div>

            {/* Right Column: Hero Imagery */}
            <div className="lg:col-span-6 relative">
              <CurtainReveal delay={0.2}>
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden bg-blush">
                  <Image
                    src="/images/derm_patient.jpg"
                    alt="Minimalist, calm clinic interior"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent mix-blend-multiply" />
                </div>
              </CurtainReveal>
              
              <MotionReveal delay={0.6} className="absolute -bottom-6 -left-6 sm:-left-12 bg-cream p-4 rounded-xl border border-line shadow-sm hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center text-rose-deep">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone mb-1 font-semibold">Accepting New Patients</p>
                    <p className="text-sm text-ink font-medium">Green Hills Location</p>
                  </div>
                </div>
              </MotionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW (Minimalist Cards) */}
      <section className="py-24 bg-blush">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="mb-16">
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-ink font-fraunces mb-4">
              Our Expertise.
            </h2>
            <p className="text-stone text-lg max-w-2xl font-light">
              We specialize in surgical, medical, and aesthetic dermatology. Every treatment is backed by science and performed by an expert.
            </p>
          </MotionReveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Medical */}
            <StaggerItem>
              <div className="h-full bg-cream rounded-2xl p-8 border border-line hover:border-rose/50 transition-colors flex flex-col group">
                <h3 className="text-2xl font-fraunces text-ink mb-4">Medical</h3>
                <p className="text-sm text-stone mb-8 flex-1 leading-relaxed">
                  Comprehensive skin cancer screenings, acne protocols, and treatment for chronic conditions like rosacea and eczema.
                </p>
                <Link href="/services" className="inline-flex items-center text-sm font-semibold text-rose-deep group-hover:text-ink transition-colors gap-2">
                  <span>Medical services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </StaggerItem>

            {/* Surgical */}
            <StaggerItem>
              <div className="h-full bg-cream rounded-2xl p-8 border border-line hover:border-rose/50 transition-colors flex flex-col group">
                <h3 className="text-2xl font-fraunces text-ink mb-4">Surgical</h3>
                <p className="text-sm text-stone mb-8 flex-1 leading-relaxed">
                  Precise removal of skin cancers and benign lesions. We offer on-site Mohs micrographic surgery for the highest cure rates.
                </p>
                <Link href="/services/mohs-surgery" className="inline-flex items-center text-sm font-semibold text-rose-deep group-hover:text-ink transition-colors gap-2">
                  <span>Surgical care</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </StaggerItem>

            {/* Aesthetic */}
            <StaggerItem>
              <div className="h-full bg-cream rounded-2xl p-8 border border-line hover:border-rose/50 transition-colors flex flex-col group">
                <h3 className="text-2xl font-fraunces text-ink mb-4">Aesthetic</h3>
                <p className="text-sm text-stone mb-8 flex-1 leading-relaxed">
                  Natural facial sculpting with neuromodulators (like Botox), dermal fillers, and clinical-grade laser therapies.
                </p>
                <Link href="/services/botox-fillers" className="inline-flex items-center text-sm font-semibold text-rose-deep group-hover:text-ink transition-colors gap-2">
                  <span>Aesthetic options</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </StaggerItem>

          </StaggerGroup>
        </div>
      </section>

      {/* 3. HORIZONTAL SCROLL GALLERY */}
      <section className="bg-cream border-y border-line">
        <HorizontalScrollGallery />
      </section>

      {/* 4. RESULTS / BEFORE & AFTER */}
      <section ref={resultsRef} className="py-24 bg-cream overflow-hidden">
        <motion.div style={{ y: parallaxY }} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <MotionReveal direction="right">
              <div className="bg-blush rounded-2xl p-2 border border-line">
                <InteractiveBeforeAfter 
                  beforeImage="/images/before_skin.jpg"
                  afterImage="/images/after_skin.jpg"
                  treatmentName="Laser Resurfacing"
                  timeframe="6 weeks post-treatment"
                  notes="3 sessions of fractional CO2"
                />
              </div>
            </MotionReveal>

            <div>
              <MotionReveal direction="left" delay={0.1}>
                <h2 className="text-[clamp(2rem,4vw,3rem)] text-ink font-fraunces mb-6">
                  Real results. <br/>
                  <span className="italic text-rose-deep">No filters.</span>
                </h2>
                <p className="text-stone text-lg mb-8 leading-relaxed font-light">
                  We believe in transparent, realistic outcomes. Our clinical gallery showcases actual patients treated by our physicians. No generic stock photos. No AI enhancements.
                </p>
                <MagneticButton>
                  <Link
                    href="/results"
                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-ink text-ink px-8 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-cream transition-colors"
                  >
                    <span>View Patient Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </MotionReveal>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-32 bg-ink text-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal direction="up">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-fraunces font-light mb-6 text-cream">
              Ready for clear skin?
            </h2>
            <p className="text-line text-lg md:text-xl mb-10 font-light max-w-xl mx-auto">
              Secure your appointment this week. Most major insurance plans accepted.
            </p>
            <MagneticButton>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-cream text-ink px-10 py-5 rounded-full text-base font-semibold hover:bg-blush transition-colors"
              >
                <span>Book Your Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
