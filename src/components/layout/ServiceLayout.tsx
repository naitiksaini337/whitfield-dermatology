"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  Calendar, 
  Plus, 
  Minus,
  CheckCircle2
} from "lucide-react";
import { CurtainReveal, MaskedHeading } from "@/components/motion/CurtainReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { MotionReveal } from "@/components/motion/MotionFade";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  faqs: { question: string; answer: string }[];
  relatedLinks: { title: string; href: string }[];
  blogLink: { title: string; href: string };
  slug: string;
}

// Curated architectural & clinical imagery for each monograph
const serviceImages: Record<string, string> = {
  "mohs-surgery": "/images/derm_patient.jpg",
  "skin-cancer-screenings": "/images/clinic_interior.jpg",
  "acne-scars": "/images/service_skin.jpg",
  "botox-fillers": "/images/derm_patient.jpg",
  "laser-therapy": "/images/clinic_interior.jpg",
  "microneedling-prp": "/images/service_skin.jpg",
  "chemical-peels": "/images/derm_patient.jpg",
  "hair-transplant": "/images/clinic_interior.jpg",
  "eczema-psoriasis": "/images/service_skin.jpg",
  "rosacea": "/images/derm_patient.jpg",
  "pigmentation": "/images/clinic_interior.jpg",
  "medical-facials": "/images/service_skin.jpg",
};

export function ServiceLayout({
  title,
  description,
  children,
  faqs,
  relatedLinks,
  blogLink,
  slug,
}: ServiceLayoutProps) {
  const heroImage =
    serviceImages[slug] ||
    "/images/derm_patient.jpg";

  const serviceUrl = `${siteConfig.url}/services/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalProcedure", "Service"],
        "@id": `${serviceUrl}#service`,
        "name": title,
        "description": description,
        "url": serviceUrl,
        "provider": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Middle Tennessee",
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `${siteConfig.url}/book`,
          "servicePhone": siteConfig.contact.phone,
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${serviceUrl}#webpage`,
        "url": serviceUrl,
        "name": `${title} | Whitfield Dermatology`,
        "headline": title,
        "description": description,
        "datePublished": "2023-01-15T08:00:00-06:00",
        "dateModified": "2026-09-20T11:00:00-05:00",
        "inLanguage": "en-US",
        "author": {
          "@type": "Person",
          "@id": `${siteConfig.url}/providers#dr-sarah-whitfield`,
          "name": "Dr. Sarah Whitfield, MD, FAAD",
          "jobTitle": "Chief Mohs Surgeon & Founder",
          "sameAs": "https://www.healthgrades.com/physician/dr-sarah-whitfield-x94lm",
        },
        "reviewedBy": {
          "@type": "Person",
          "@id": `${siteConfig.url}/providers#dr-sarah-whitfield`,
          "name": "Dr. Sarah Whitfield, MD, FAAD",
        },
        "publisher": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "mainEntity": {
          "@id": `${serviceUrl}#service`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${serviceUrl}#faq`,
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. ASYMMETRIC SPLIT HERO (EDITORIAL MONOGRAPH ARCHITECTURE) */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto border-b border-line/70">
        
        {/* Editorial Eyebrow & Monograph Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-line/60 text-xs tracking-[0.2em] uppercase text-stone font-medium">
          <div className="flex items-center gap-2 text-rose-deep font-semibold">
            <span>CLINICAL MONOGRAPH</span>
            <span>&middot;</span>
            <span>NASHVILLE, TN</span>
            <span>&middot;</span>
            <span>VOL. XIV</span>
          </div>
          <nav className="flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            <span>/</span>
            <span className="text-ink font-semibold">{title}</span>
          </nav>
        </div>

        {/* 55% / 45% Asymmetric Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: 55% Editorial Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush border border-line text-rose-deep text-xs font-semibold uppercase tracking-[0.18em] mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BOARD-CERTIFIED DERMATOLOGIST PROTOCOL</span>
            </div>

            <MaskedHeading
              text={`${title} in Nashville, TN`}
              as="h1"
              className="text-[clamp(2.5rem,4.6vw,4rem)] font-serif font-normal text-ink leading-[1.08] tracking-tight mb-6"
            />

            <p className="text-lg md:text-xl text-stone font-light leading-[1.75] mb-10 max-w-[52ch]">
              {description}
            </p>

            {/* Paired CTAs: Primary Espresso Pill + Secondary Unlacquered Monograph Link */}
            <div className="flex flex-wrap items-center gap-6">
              <MagneticButton>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-rose-deep px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow-md"
                >
                  <Calendar className="w-4 h-4 text-champagne" />
                  <span>Reserve Consultation</span>
                </Link>
              </MagneticButton>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="monograph-link text-sm font-medium text-ink tracking-wide py-1"
              >
                Direct Clinic Line: {siteConfig.contact.phone}
              </a>
            </div>

            {/* Micro Details Bar */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-line/60">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-stone block mb-1">Setting</span>
                <span className="text-sm font-serif text-ink font-medium">Green Hills Suite</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-stone block mb-1">Availability</span>
                <span className="text-sm font-serif text-rose-deep font-medium">Same-Week Guaranteed</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-stone block mb-1">Physician</span>
                <span className="text-sm font-serif text-ink font-medium">MD / FAAD In Person</span>
              </div>
            </div>
          </div>

          {/* Right: 45% Image with Signature Architectural .offset-frame */}
          <div className="lg:col-span-5 relative">
            <div className="offset-frame rounded-3xl">
              <CurtainReveal className="rounded-3xl shadow-xl bg-blush aspect-[4/5] relative">
                <Image
                  src={heroImage}
                  alt={`${title} at Whitfield Dermatology`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-40" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-line/60 shadow-lg">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif italic text-ink text-sm">Whitfield Dermatology Atelier</span>
                    <span className="text-rose-deep font-semibold uppercase tracking-wider">Belle Meade</span>
                  </div>
                </div>
              </CurtainReveal>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 4-COLUMN STRUCTURED PROCESS & PROTOCOL STEPS */}
      <section className="py-20 md:py-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto border-b border-line/70">
        <MotionReveal className="mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold mb-2 block">
            CLINICAL METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal">
            Four Pillars of Your Treatment Protocol
          </h2>
        </MotionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="pt-6 border-t-2 border-line hover:border-rose-deep transition-colors duration-300">
            <span className="font-serif text-2xl text-rose-deep italic block mb-3">01</span>
            <h3 className="text-lg font-serif text-ink font-medium mb-2">Diagnostic Mapping</h3>
            <p className="text-xs text-stone leading-[1.7]">
              Microscopic dermatoscopic examination and high-resolution clinical imaging to establish an exact baseline.
            </p>
          </div>

          <div className="pt-6 border-t-2 border-line hover:border-rose-deep transition-colors duration-300">
            <span className="font-serif text-2xl text-rose-deep italic block mb-3">02</span>
            <h3 className="text-lg font-serif text-ink font-medium mb-2">Physician Execution</h3>
            <p className="text-xs text-stone leading-[1.7]">
              Procedures are delivered personally by a board-certified dermatologist, upholding surgical and aesthetic rigor.
            </p>
          </div>

          <div className="pt-6 border-t-2 border-line hover:border-rose-deep transition-colors duration-300">
            <span className="font-serif text-2xl text-rose-deep italic block mb-3">03</span>
            <h3 className="text-lg font-serif text-ink font-medium mb-2">Barrier Preservation</h3>
            <p className="text-xs text-stone leading-[1.7]">
              Post-care regenerative formulas calibrated to protect epidermal lipids, accelerate repair, and avert pigment rebound.
            </p>
          </div>

          <div className="pt-6 border-t-2 border-line hover:border-rose-deep transition-colors duration-300">
            <span className="font-serif text-2xl text-rose-deep italic block mb-3">04</span>
            <h3 className="text-lg font-serif text-ink font-medium mb-2">Documented Follow-Up</h3>
            <p className="text-xs text-stone leading-[1.7]">
              Structured milestone reviews at 2, 6, and 12 weeks to assess cellular remodeling and verify complete satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL MONOGRAPH ARTICLE & PHYSICIAN DOSSIER */}
      <section className="py-20 md:py-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Monograph Sidebar & Axioms (4 cols) */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Physician Quote Box */}
            <div className="p-8 rounded-3xl bg-blush border border-line/80 relative overflow-hidden">
              <span className="font-serif text-6xl text-rose/30 absolute -top-4 -left-1 select-none pointer-events-none">&ldquo;</span>
              <p className="font-serif italic text-ink text-lg leading-relaxed relative z-10 mb-4">
                Skin health should feel restored, not altered. A medical clinic should offer sanctuary, quiet precision, and genuine scientific empathy.
              </p>
              <div className="pt-4 border-t border-line/60">
                <p className="text-xs font-semibold text-rose-deep uppercase tracking-wider">Dr. Sarah Whitfield, MD</p>
                <p className="text-[11px] text-stone">Fellow, American Academy of Dermatology</p>
              </div>
            </div>

            {/* Treatment Specifications Card */}
            <div className="p-8 rounded-3xl bg-white/90 backdrop-blur border border-line shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold mb-6">
                Clinical Parameters
              </h3>
              <dl className="space-y-4 text-xs">
                <div className="flex justify-between py-2 border-b border-line/50">
                  <dt className="text-stone">Consultation</dt>
                  <dd className="font-semibold text-ink">30–45 Minutes, Unrushed</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-line/50">
                  <dt className="text-stone">Credential</dt>
                  <dd className="font-semibold text-ink">Board-Certified FAAD</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-line/50">
                  <dt className="text-stone">Facility</dt>
                  <dd className="font-semibold text-ink">Private Surgery & Laser Suite</dd>
                </div>
                <div className="flex justify-between py-2 border-b border-line/50">
                  <dt className="text-stone">Insurance</dt>
                  <dd className="font-semibold text-ink">Accepted for Medical/Surgical</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-stone">Financing</dt>
                  <dd className="font-semibold text-ink">CareCredit Available</dd>
                </div>
              </dl>
            </div>

            {/* Related Protocols */}
            {relatedLinks.length > 0 && (
              <div className="p-8 rounded-3xl bg-white/70 backdrop-blur border border-line">
                <h3 className="text-xs uppercase tracking-[0.2em] text-stone font-semibold mb-4">
                  Companion Protocols
                </h3>
                <ul className="space-y-3">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs font-medium text-ink hover:text-rose-deep flex items-center justify-between group transition-colors"
                      >
                        <span>{link.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone group-hover:text-rose-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          {/* Right Column: In-Depth Physician Monograph (8 cols) */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink prose-p:text-stone prose-p:leading-[1.75] prose-li:text-stone prose-a:text-rose-deep">
              {children}
            </article>

            {/* 4. CURATED COMMON QUESTIONS ACCORDION */}
            <div className="mt-20 pt-12 border-t border-line">
              <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold mb-2 block">
                PATIENT INQUIRIES
              </span>
              <h2 className="text-3xl font-serif text-ink font-normal mb-8">
                Frequently Addressed Clinical Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white/90 backdrop-blur rounded-2xl border border-line/80 overflow-hidden transition-colors duration-200 open:border-rose/50"
                  >
                    <summary className="p-6 text-base font-serif text-ink cursor-pointer list-none flex justify-between items-center select-none group-hover:text-rose-deep transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-8 h-8 rounded-full bg-cream border border-line flex items-center justify-center flex-shrink-0 text-stone group-open:bg-rose-deep group-open:text-white transition-colors">
                        <Plus className="w-4 h-4 group-open:hidden" />
                        <Minus className="w-4 h-4 hidden group-open:block" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-sm text-stone leading-[1.75] border-t border-line/40 pt-4 font-light">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Read Physician Monograph Journal Entry */}
            {blogLink && (
              <div className="mt-14 p-6 rounded-2xl bg-blush/60 border border-line flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-rose-deep font-semibold block mb-1">
                    Clinical Research Article
                  </span>
                  <p className="text-sm font-serif text-ink font-medium">{blogLink.title}</p>
                </div>
                <Link
                  href={blogLink.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-deep hover:text-ink transition-colors flex-shrink-0"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 5. EDITORIAL CONSULTATION INVITATION */}
      <section className="bg-blush/80 border-t border-line py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold mb-3 block">
            CONFIDENTIAL & UNRUSHED CARE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal mb-4">
            Begin Your Care with {title}
          </h2>
          <p className="text-base text-stone mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Same-week consultations are reserved daily at our Green Hills clinic. Experience medical rigor delivered with calm aesthetic poise.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton>
              <Link
                href="/book"
                className="bg-ink hover:bg-rose-deep text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all shadow-md"
              >
                Schedule Consultation
              </Link>
            </MagneticButton>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="px-6 py-4 rounded-full text-sm font-medium text-ink bg-white border border-line hover:border-rose transition-colors"
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
