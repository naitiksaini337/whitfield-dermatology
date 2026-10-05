"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/motion/MotionFade";
import { CurtainReveal, MaskedHeading } from "@/components/motion/CurtainReveal";
import { CustomCursor } from "@/components/visuals/CustomCursor";

const services = [
  {
    category: "Medical",
    items: [
      {
        title: "Skin Checks",
        subtitle: "Preventative care and mole mapping",
        desc: "A thorough examination of your skin to detect any irregularities early. We use advanced magnification (dermoscopy) to look beneath the surface.",
        image: "/images/clinic_interior.jpg",
        href: "/services/skin-cancer-screenings"
      },
      {
        title: "Acne Solutions",
        subtitle: "Clearing breakouts and fading scars",
        desc: "Customized plans targeting the root cause of acne, from topical treatments to advanced scar revision procedures.",
        image: "/images/service_skin.jpg",
        href: "/services/acne-scars"
      }
    ]
  },
  {
    category: "Surgical",
    items: [
      {
        title: "Mohs Surgery",
        subtitle: "Precise skin cancer removal",
        desc: "The gold standard for treating skin cancer. We remove the cancer layer by layer while sparing healthy tissue, ensuring a 99% cure rate.",
        image: "/images/derm_patient.jpg",
        href: "/services/mohs-surgery"
      }
    ]
  },
  {
    category: "Aesthetic",
    items: [
      {
        title: "Facial Sculpting",
        subtitle: "Botox and dermal fillers",
        desc: "Subtle, natural enhancements. We use careful micro-dosing to smooth lines and restore volume without ever looking overdone.",
        image: "/images/clinic_interior.jpg",
        href: "/services/botox-fillers"
      },
      {
        title: "Laser Resurfacing",
        subtitle: "Tone and texture refinement",
        desc: "Advanced laser technology (phototherapy) to fade sun damage, reduce redness, and stimulate collagen for smoother skin.",
        image: "/images/service_skin.jpg",
        href: "/services/laser-therapy"
      }
    ]
  }
];

export default function ServicesPortfolio() {
  return (
    <>
      <CustomCursor />
      <div className="bg-cream min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          <header className="mb-24 md:mb-40 flex flex-col md:flex-row md:items-end justify-between border-b border-line pb-12 gap-8">
            <div className="max-w-2xl">
              <MotionReveal direction="up">
                <span className="text-[10px] uppercase tracking-widest text-stone mb-6 block">Our Expertise</span>
              </MotionReveal>
              <div className="flex flex-col">
                <MaskedHeading 
                  as="h1" 
                  className="text-[clamp(3rem,6vw,5rem)] font-fraunces text-ink leading-[1.1] font-light"
                  text="Curated care for"
                />
                <MaskedHeading 
                  as="h1" 
                  className="text-[clamp(3rem,6vw,5rem)] font-fraunces text-ink leading-[1.1] font-light italic text-rose-deep"
                  text="every condition."
                  delay={0.1}
                />
              </div>
            </div>
            <MotionReveal direction="up" delay={0.2} className="max-w-sm">
              <p className="text-sm text-stone font-light leading-relaxed">
                A definitive collection of medical, surgical, and aesthetic dermatology services. Expertly delivered by board-certified physicians in a calming, minimalist environment.
              </p>
            </MotionReveal>
          </header>

          <div className="space-y-32 md:space-y-48">
            {services.map((section, sectionIdx) => (
              <section key={section.category} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                <div className="lg:col-span-3">
                  <MotionReveal direction="up">
                    <h2 className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold sticky top-32">
                      {section.category}
                    </h2>
                  </MotionReveal>
                </div>
                
                <div className="lg:col-span-9 space-y-24 md:space-y-32">
                  {section.items.map((item, itemIdx) => (
                    <article key={item.title} className="group cursor-pointer">
                      <Link href={item.href} className="block">
                        <CurtainReveal delay={0.1}>
                          <div className="relative aspect-[4/3] md:aspect-[16/9] bg-blush mb-8 md:mb-12 overflow-hidden rounded-sm">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-700" />
                          </div>
                        </CurtainReveal>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                          <MotionReveal direction="up">
                            <h3 className="text-3xl md:text-4xl font-fraunces text-ink font-light mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-rose-deep font-medium italic">
                              {item.subtitle}
                            </p>
                          </MotionReveal>
                          <MotionReveal direction="up" delay={0.1} className="flex flex-col justify-between">
                            <p className="text-sm text-stone font-light leading-relaxed mb-6">
                              {item.desc}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink group-hover:text-rose-deep transition-colors">
                              <span>View details</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </div>
                          </MotionReveal>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
