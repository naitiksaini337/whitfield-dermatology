import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { MotionReveal, StaggerGroup, StaggerItem } from "@/components/motion/MotionFade";
import { CurtainReveal, MaskedHeading } from "@/components/motion/CurtainReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "Areas We Serve | Whitfield Dermatology",
  description: "Providing expert dermatology care to patients across Middle Tennessee.",
};

const areas = [
  { name: 'Nashville', slug: 'nashville' },
  { name: 'Franklin', slug: 'franklin' },
  { name: 'Brentwood', slug: 'brentwood' },
  { name: 'Murfreesboro', slug: 'murfreesboro' },
  { name: 'Hendersonville', slug: 'hendersonville' },
  { name: 'Mt. Juliet', slug: 'mt-juliet' },
  { name: 'Spring Hill', slug: 'spring-hill' },
  { name: 'Gallatin', slug: 'gallatin' },
];

export default function AreasHub() {
  return (
    <>
      {/* 1. HEADER SECTION */}
      <section className="bg-cream pt-32 pb-24 px-4 sm:px-6 lg:px-12 border-b border-line">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <MotionReveal direction="up">
              <span className="text-[10px] uppercase tracking-widest text-stone mb-6 block">Our Reach</span>
            </MotionReveal>
            <div className="flex flex-col">
              <MaskedHeading 
                as="h1" 
                className="text-[clamp(3rem,6vw,5rem)] font-fraunces text-ink leading-[1.1] font-light"
                text="Areas we"
              />
              <MaskedHeading 
                as="h1" 
                className="text-[clamp(3rem,6vw,5rem)] font-fraunces text-ink leading-[1.1] font-light italic text-rose-deep"
                text="serve."
                delay={0.1}
              />
            </div>
          </div>
          <MotionReveal direction="up" delay={0.2} className="max-w-sm">
            <p className="text-sm text-stone font-light leading-relaxed">
              Located in the heart of Green Hills, we provide clinical and aesthetic excellence to patients from all across Middle Tennessee.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. AREAS GRID */}
      <section className="py-24 bg-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <StaggerItem key={area.slug}>
                <Link href={`/areas/${area.slug}-tn`} className="group block h-full">
                  <div className="h-full bg-cream rounded-2xl p-8 border border-line hover:border-rose/50 transition-colors flex flex-col relative overflow-hidden">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-rose-deep group-hover:bg-rose group-hover:text-cream transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-line group-hover:text-ink transition-transform group-hover:-rotate-45" />
                    </div>
                    <h3 className="text-2xl font-fraunces text-ink mb-2 group-hover:text-rose-deep transition-colors">
                      {area.name}, TN
                    </h3>
                    <p className="text-sm text-stone font-light">
                      View dermatology services in {area.name}.
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-32 bg-ink text-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal direction="up">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-fraunces font-light mb-6 text-cream">
              Book your visit.
            </h2>
            <p className="text-line text-lg md:text-xl mb-10 font-light max-w-xl mx-auto">
              Ready for clear skin? We offer same-week appointments and accept most major insurance plans.
            </p>
            <MagneticButton>
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-cream text-ink px-10 py-5 rounded-full text-base font-semibold hover:bg-blush transition-colors"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
