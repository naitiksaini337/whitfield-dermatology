"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Phone, 
  Calendar, 
  ArrowRight, 
  Plus, 
  Minus, 
  Download, 
  HeartHandshake, 
  Eye, 
  Microscope,
  Car
} from "lucide-react";
import { MaskedHeading, CurtainReveal } from "@/components/motion/CurtainReveal";
import { MotionReveal, StaggerGroup, StaggerItem } from "@/components/motion/MotionFade";
import { MagneticButton } from "@/components/motion/MagneticButton";

const newPatientFaqs = [
  {
    question: "How long should I plan for my initial consultation?",
    answer: "Please allow approximately 60 minutes for your total visit. Your comprehensive physician examination and conversational consultation will take approximately 45 dedicated minutes. Because you complete our streamlined digital intake forms securely prior to arrival, your reception time is typically under 5 minutes.",
  },
  {
    question: "Will I be evaluated by a board-certified dermatologist or a mid-level assistant?",
    answer: "At Whitfield Dermatology, 100% of your clinical evaluation, dermoscopic skin examination, and procedural care is conducted directly by a board-certified physician (MD). We do not employ physician assistants or nurse practitioners for independent patient diagnostic visits.",
  },
  {
    question: "Can I address a cosmetic concern and have a full-body skin check on the same day?",
    answer: "Yes. When reserving your appointment, simply inform our concierge team that you would like a dual-focus consultation. Your physician will perform a rigorous dermoscopic skin cancer surveillance exam and subsequently provide an anatomical aesthetic analysis with personalized recommendations.",
  },
  {
    question: "What happens if my physician discovers a suspicious lesion that requires a biopsy?",
    answer: "If an atypical nevus or lesion suspicious for malignancy is identified, we perform the minimally invasive biopsy during the exact same appointment—sparing you anxiety and a secondary visit. Specimens are processed through our on-site CLIA-certified pathology lab, with definitive results typically returned in 48 to 72 hours.",
  },
  {
    question: "What is your cancellation and appointment rescheduling policy?",
    answer: "Because we dedicate 45 unhurried minutes of physician time exclusively to each patient, we respectfully require 24 business hours' notice to cancel or reschedule without a fee. This courtesy enables us to offer reserved times to patients awaiting urgent same-week evaluations.",
  },
];

const intakeChecklist = [
  {
    title: "Government-Issued Photo ID",
    desc: "A valid state driver's license, passport, or military identification to verify medical identity.",
    tag: "Required",
  },
  {
    title: "Primary & Secondary Insurance Cards",
    desc: "Physical cards or clear digital images showing member ID, group number, and copay tiers.",
    tag: "Required",
  },
  {
    title: "Complete Medication & Skincare Inventory",
    desc: "A written list or cell phone photographs of all current oral prescriptions, supplements, and active topical products (retinoids, acids, serums).",
    tag: "Essential",
  },
  {
    title: "Prior Pathology & Biopsy Records",
    desc: "Histopathology reports from outside clinics if you have a personal history of melanoma, dysplastic nevi, or skin cancer surgery.",
    tag: "If Applicable",
  },
  {
    title: "Clean, Makeup-Free Skin",
    desc: "Please arrive without foundation, heavy concealers, or opaque nail polish to ensure unobstructed dermoscopic visualization of facial pores and nailbeds.",
    tag: "Clinical Advice",
  },
];

const protocolSteps = [
  {
    step: "01",
    title: "Frictionless Digital Onboarding",
    tagline: "4 minutes from home",
    description: "Complete your medical history, review our clinical care compact, and submit insurance details through our encrypted mobile portal prior to your visit. Zero clipboard paperwork upon arrival.",
    icon: FileText,
  },
  {
    step: "02",
    title: "The 45-Minute Unrushed Consultation",
    tagline: "Physician-only dialogue",
    description: "Your board-certified dermatologist sits down with you to listen, review concerns, examine lifestyle parameters, and evaluate your skin without the standard 8-minute healthcare rush.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Polarized Optical Dermoscopy",
    tagline: "Sub-surface precision",
    description: "Every lesion from scalp to toes is analyzed using hand-held polarized dermoscopy. High-magnification micro-imaging captures baseline morphology to detect cellular shifts before they become clinical malignancies.",
    icon: Microscope,
  },
  {
    step: "04",
    title: "The Transparent Care Blueprint",
    tagline: "Clear written protocol",
    description: "Depart with a personalized therapeutic regimen, transparent prescription guidance, and direct access to our patient messaging portal. If a biopsy is performed, results arrive in 48–72 hours.",
    icon: Sparkles,
  },
];

export default function NewPatientsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "New Patient Experience & Intake Protocol | Whitfield Dermatology",
    "description": "Comprehensive guide for new patients at Whitfield Dermatology in Nashville, TN. What to expect, preparation checklist, 45-minute physician exams, and sanctuary amenities.",
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Whitfield Dermatology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2400 Crestmoor Rd, Suite 204",
        "addressLocality": "Nashville",
        "addressRegion": "TN",
        "postalCode": "37215"
      },
      "telephone": "(615) 327-4400"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. ASYMMETRIC MONOGRAPH EDITORIAL HEADER */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-rose-deep text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <span>CLINICAL SANCTUARY</span>
            <span>&middot;</span>
            <span>NASHVILLE, TN</span>
            <span>&middot;</span>
            <span>INTAKE BLUEPRINT</span>
          </div>

          <MaskedHeading
            text="The New Patient Experience at Whitfield"
            as="h1"
            className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-serif font-normal text-ink leading-[1.08] tracking-tight mb-8"
          />

          <p className="text-lg md:text-xl text-stone font-light leading-[1.75] max-w-[54ch] mb-10">
            A medical practice intentionally designed around unrushed presence, diagnostic precision, and complete peace of mind. Every exam conducted personally by a board-certified physician.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <MagneticButton>
              <Link
                href="/book"
                className="bg-ink hover:bg-rose-deep text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all shadow-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Reserve Your Consultation</span>
              </Link>
            </MagneticButton>

            <a
              href="tel:6153274400"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-line bg-white/80 hover:bg-white text-ink text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-rose-deep" />
              <span>(615) 327-4400</span>
            </a>

            <span className="text-xs uppercase tracking-widest text-stone pl-2">
              Reserved Same-Week Slots Available
            </span>
          </div>
        </div>
      </section>

      {/* 2. FOUR CLINICAL PROMISES / METRICS */}
      <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-3xl bg-linen/50 border border-line/80 hover:border-rose-deep/60 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-white border border-line/80 flex items-center justify-center text-rose-deep mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-3xl font-serif text-ink block mb-1">45 Minutes</span>
            <span className="text-xs uppercase tracking-wider text-rose-deep font-semibold block mb-2">Dedicated Exam Time</span>
            <p className="text-xs text-stone font-light leading-[1.7]">
              Ample time to review all concerns without feeling hurried or treated like a number.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-linen/50 border border-line/80 hover:border-rose-deep/60 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-white border border-line/80 flex items-center justify-center text-rose-deep mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-3xl font-serif text-ink block mb-1">100% MD Care</span>
            <span className="text-xs uppercase tracking-wider text-rose-deep font-semibold block mb-2">Zero Mid-Level Handoffs</span>
            <p className="text-xs text-stone font-light leading-[1.7]">
              Every evaluation and surgical procedure is conducted directly by a board-certified dermatologist.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-linen/50 border border-line/80 hover:border-rose-deep/60 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-white border border-line/80 flex items-center justify-center text-rose-deep mb-6 group-hover:scale-110 transition-transform">
              <Microscope className="w-6 h-6" />
            </div>
            <span className="text-3xl font-serif text-ink block mb-1">48–72 Hrs</span>
            <span className="text-xs uppercase tracking-wider text-rose-deep font-semibold block mb-2">Rapid Pathology Turnaround</span>
            <p className="text-xs text-stone font-light leading-[1.7]">
              Our on-site CLIA pathology lab ensures rapid histopathology diagnosis without weeks of waiting.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-linen/50 border border-line/80 hover:border-rose-deep/60 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-white border border-line/80 flex items-center justify-center text-rose-deep mb-6 group-hover:scale-110 transition-transform">
              <Car className="w-6 h-6" />
            </div>
            <span className="text-3xl font-serif text-ink block mb-1">Complimentary</span>
            <span className="text-xs uppercase tracking-wider text-rose-deep font-semibold block mb-2">Valet & Reserved Parking</span>
            <p className="text-xs text-stone font-light leading-[1.7]">
              Step directly into our private medical suite at 2400 Crestmoor Rd in Green Hills.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE 4-STEP INTAKE PROTOCOL */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold block mb-3">
            METHODOLOGY & JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight mb-4">
            The Four-Stage Clinical Intake Protocol
          </h2>
          <p className="text-stone font-light text-base leading-relaxed">
            From the moment you reserve your appointment to your personalized follow-up, our intake framework is orchestrated for diagnostic accuracy and effortless patient comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {protocolSteps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                className="pt-6 border-t-2 border-line hover:border-rose-deep transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif italic text-2xl text-rose-deep">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-cream border border-line flex items-center justify-center text-stone group-hover:text-rose-deep transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-serif text-ink font-medium mb-1">
                  {item.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-rose-deep/80 font-medium block mb-3">
                  {item.tagline}
                </span>
                <p className="text-xs text-stone leading-[1.75] font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. ENHANCED TEXT BOXES: WHAT TO BRING & CLINIC SANCTUARY */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: What to Bring Tactile Checklist Card */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold block mb-2">
                PATIENT CHECKLIST
              </span>
              <h2 className="text-3xl font-serif text-ink font-normal tracking-tight mb-4">
                What to Prepare for Your Initial Visit
              </h2>
              <p className="text-sm text-stone font-light leading-relaxed mb-8">
                To maximize your time with the physician and guarantee accurate clinical decision-making, please review this preparation checklist prior to arrival.
              </p>
            </div>

            <div className="space-y-4">
              {intakeChecklist.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white/80 hover:bg-white border border-line/80 hover:border-rose/60 transition-all shadow-sm flex items-start gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-cream border border-line flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-rose-deep group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-rose-deep group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-serif font-medium text-ink">
                        {item.title}
                      </h4>
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-cream border border-line text-stone">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-stone font-light leading-[1.7]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Forms Box */}
            <div className="p-6 rounded-2xl bg-blush/60 border border-line/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-serif font-medium text-ink mb-1">
                  Prefer to Complete Forms on Paper?
                </h4>
                <p className="text-xs text-stone font-light">
                  Download our complete printable New Patient Intake Package (PDF).
                </p>
              </div>
              <a
                href="#download-forms"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Digital intake forms are automatically sent via encrypted SMS & email upon appointment confirmation.");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink hover:bg-rose-deep text-white text-xs font-medium tracking-wide transition-colors flex-shrink-0 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Packet</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Sanctuary & Amenities Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="offset-frame rounded-3xl">
              <CurtainReveal className="aspect-[4/3] rounded-3xl overflow-hidden bg-blush shadow-xl relative">
                <Image
                  src="/images/service_skin.jpg"
                  alt="Whitfield Dermatology Clinical Sanctuary in Green Hills Nashville"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-40" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-line/60 shadow-md">
                  <span className="text-[10px] uppercase tracking-widest text-rose-deep font-semibold block mb-0.5">
                    CLINICAL ARCHITECTURE
                  </span>
                  <p className="text-xs font-serif italic text-ink">
                    Suite 204 &middot; Green Hills Medical Center &middot; Nashville
                  </p>
                </div>
              </CurtainReveal>
            </div>

            {/* Sanctuary Details Card */}
            <div className="p-8 rounded-3xl bg-white/80 border border-line/80 space-y-6 shadow-sm">
              <h3 className="text-lg font-serif text-ink font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-deep" />
                <span>Sanctuary Amenities & Arrival</span>
              </h3>

              <div className="space-y-4 text-xs text-stone font-light leading-[1.75]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-deep flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-ink block">Direct Address:</strong>
                    2400 Crestmoor Road, Suite 204, Nashville, TN 37215. Located opposite The Mall at Green Hills.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-rose-deep flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-ink block">Arrival & Parking:</strong>
                    Complimentary patient valet at the main entrance, or park in our reserved physician-center garage with step-free elevator access.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-rose-deep flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-ink block">Patient Chaperone Policy:</strong>
                    For full-body skin checks or procedural visits, a trained clinical medical assistant is always present to guarantee your dignity and comfort.
                  </div>
                </div>
              </div>
            </div>

            {/* Same-Week Acute Lesion Box */}
            <div className="p-6 rounded-2xl bg-ink text-cream border border-ink space-y-3 shadow-md">
              <span className="text-[10px] uppercase tracking-[0.2em] text-champagne font-semibold block">
                EXPEDITED ACCESS
              </span>
              <h4 className="text-base font-serif text-white font-normal">
                Concerned About a Rapidly Changing Mole?
              </h4>
              <p className="text-xs text-cream/80 font-light leading-relaxed">
                We reserve daily emergency triage slots for bleeding, painful, or acutely transforming lesions. Please call our clinical coordinator directly for prioritized scheduling.
              </p>
              <div className="pt-2">
                <a
                  href="tel:6153274400"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-champagne hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Emergency Triage: (615) 327-4400</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE NEW PATIENT FAQ ACCORDION */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold block mb-3">
            TRANSPARENT ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight mb-4">
            Frequently Asked New Patient Questions
          </h2>
          <p className="text-sm text-stone font-light max-w-lg mx-auto leading-relaxed">
            Everything you need to feel informed, supported, and confident prior to stepping into our practice.
          </p>
        </div>

        <div className="space-y-4">
          {newPatientFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur rounded-2xl border border-line/80 overflow-hidden transition-all duration-300 hover:border-rose/50"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left text-base font-serif text-ink flex justify-between items-center select-none hover:text-rose-deep transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full border border-line flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? "bg-rose-deep text-white" : "bg-cream text-stone"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-stone leading-[1.8] border-t border-line/40 pt-4 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Insurance & Financing Link */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone font-light mb-3">
            Have questions regarding accepted insurance plans, deductibles, or cosmetic financing?
          </p>
          <Link
            href="/financing-insurance"
            className="monograph-link text-xs font-semibold text-rose-deep tracking-wider uppercase inline-flex items-center gap-1.5"
          >
            <span>Review Financing & Insurance Information</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 6. REASSURING CLINICAL APPOINTMENT INVITATION */}
      <section className="bg-blush/80 border-t border-line py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold mb-3 block">
            UNRUSHED CARE AWAITS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal mb-4">
            Schedule Your Initial Visit with a Physician
          </h2>
          <p className="text-base text-stone mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Experience dermatology practiced as it was meant to be—with intellectual rigor, diagnostic accountability, and quiet elegance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton>
              <Link
                href="/book"
                className="bg-ink hover:bg-rose-deep text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all shadow-md"
              >
                Reserve Your Consultation
              </Link>
            </MagneticButton>
            <Link
              href="/providers"
              className="monograph-link text-sm font-medium text-ink tracking-wide py-2"
            >
              Meet Our Board-Certified Physicians &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
