import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import { MotionReveal, StaggerGroup, StaggerItem } from "@/components/motion/MotionFade";
import { CurtainReveal, MaskedHeading } from "@/components/motion/CurtainReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { InteractiveBeforeAfter } from "@/components/motion/InteractiveBeforeAfter";

export const metadata: Metadata = {
  title: "Patient Results & Before/After Gallery | Whitfield Dermatology",
  description: "View real clinical outcomes from our board-certified dermatologists. Actual patients. Results vary.",
};

export default function ResultsHub() {
  const cases = [
    {
      slug: "mohs-on-the-nose",
      title: "Mohs Micrographic Reconstruction",
      location: "Brentwood, TN",
      concern: "Basal Cell Carcinoma",
      before: "/images/before_skin.jpg",
      after: "/images/after_skin.jpg",
      description: "Complete surgical margin clearance with bilobed flap aesthetic closure, leaving virtually imperceptible scarring after 6 months."
    },
    {
      slug: "melasma-plan",
      title: "Targeted Melasma Laser Protocol",
      location: "Franklin, TN",
      concern: "Pigmentation & Sun Damage",
      before: "/images/before_skin.jpg",
      after: "/images/after_skin.jpg",
      description: "Low-fluence Q-switched laser paired with medical-grade tranexamic acid regimen, clearing deep dermal pigment without rebound."
    },
    {
      slug: "hair-restoration",
      title: "Follicular Hair Regeneration",
      location: "Green Hills, TN",
      concern: "Androgenetic Alopecia",
      before: "/images/before_skin.jpg",
      after: "/images/after_skin.jpg",
      description: "Autologous PRP injections coupled with dual-mechanism medical therapy showing substantial hair shaft caliber improvement."
    },
    {
      slug: "microneedling-series",
      title: "Acne Scar Remodeling Series",
      location: "East Nashville, TN",
      concern: "Atrophic Acne Scars",
      before: "/images/before_skin.jpg",
      after: "/images/after_skin.jpg",
      description: "3 sessions of targeted medical microneedling and surgical subcision restoring smooth epidermal texture."
    }
  ];

  return (
    <>
      {/* 1. HEADER SECTION */}
      <section className="bg-cream pt-32 pb-24 px-4 sm:px-6 lg:px-12 border-b border-line">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <MotionReveal direction="up">
              <span className="text-[10px] uppercase tracking-widest text-stone mb-6 block">Clinical Archive</span>
            </MotionReveal>
            <div className="flex flex-col">
              <MaskedHeading 
                as="h1" 
                className="text-[clamp(3rem,6vw,5rem)] font-fraunces text-ink leading-[1.1] font-light"
                text="Documented clinical"
              />
              <MaskedHeading 
                as="h1" 
                className="text-[clamp(3rem,6vw,5rem)] font-fraunces text-ink leading-[1.1] font-light italic text-rose-deep"
                text="results."
                delay={0.1}
              />
            </div>
          </div>
          <MotionReveal direction="up" delay={0.2} className="max-w-sm">
            <p className="text-sm text-stone font-light leading-relaxed">
              Real outcomes from our Nashville clinic. Every image represents an actual patient treated by our board-certified dermatologists.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. FEATURED INTERACTIVE COMPARISON */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <MotionReveal className="mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold block mb-2">Featured Transformation</span>
            <h2 className="text-3xl font-fraunces text-ink font-light">Interactive Demonstration</h2>
          </MotionReveal>
          
          <MotionReveal direction="up" delay={0.1}>
            <InteractiveBeforeAfter
              beforeImage="/images/before_skin.jpg"
              afterImage="/images/after_skin.jpg"
              treatmentName="Dual-Wavelength Fractional Resurfacing"
              timeframe="12-Week Follow-up"
              notes="Patient presented with profound photo-aging and solar lentigines. Single comprehensive laser pass with 6-day recovery."
            />
          </MotionReveal>
        </div>
      </section>

      {/* 3. CASE GRID */}
      <section className="py-24 bg-blush border-t border-line/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cases.map((c) => (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/results/${c.slug}`}
                  className="group block bg-cream rounded-2xl overflow-hidden border border-line hover:border-rose/50 transition-all flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10] bg-blush overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div className="relative w-1/2 h-full overflow-hidden border-r border-cream">
                        <Image src={c.before} alt={`${c.title} Before`} fill className="object-cover" />
                        <div className="absolute bottom-4 left-4 bg-ink/80 text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-medium">
                          Baseline
                        </div>
                      </div>
                      <div className="relative w-1/2 h-full overflow-hidden">
                        <Image src={c.after} alt={`${c.title} After`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-4 right-4 bg-cream text-rose-deep text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-medium shadow-sm">
                          Outcome
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-[11px] font-semibold tracking-widest text-rose-deep uppercase mb-4">
                      <span>{c.concern}</span>
                      <span className="text-stone font-medium">{c.location}</span>
                    </div>
                    
                    <h3 className="text-2xl font-fraunces text-ink mb-4 group-hover:text-rose-deep transition-colors flex items-center justify-between">
                      <span>{c.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-stone group-hover:text-rose-deep group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </h3>
                    
                    <p className="text-sm text-stone leading-relaxed font-light mb-8 flex-grow">
                      {c.description}
                    </p>
                    
                    <div className="pt-6 border-t border-line flex items-center justify-between text-xs text-stone">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-rose" />
                        <span>Board-Certified MD</span>
                      </span>
                      <span>Actual Patient</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-32 bg-ink text-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal direction="up">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-fraunces font-light mb-6 text-cream">
              Achieve your results.
            </h2>
            <p className="text-line text-lg md:text-xl mb-10 font-light max-w-xl mx-auto">
              Secure your appointment this week. Most major insurance plans accepted.
            </p>
            <MagneticButton>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-cream text-ink px-10 py-5 rounded-full text-base font-semibold hover:bg-blush transition-colors"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}