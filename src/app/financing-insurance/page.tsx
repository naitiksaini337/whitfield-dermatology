"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CreditCard, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  Calendar, 
  ArrowRight, 
  Plus, 
  Minus, 
  ExternalLink, 
  Scale, 
  Building2, 
  Receipt,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { MaskedHeading } from "@/components/motion/CurtainReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const insuranceCarriers = [
  {
    name: "BlueCross BlueShield of Tennessee",
    tier: "In-Network Provider",
    plans: "Network S, Network P, BlueCare, Federal Employee Program (FEP)",
    status: "Active Preferred",
  },
  {
    name: "Aetna Healthcare",
    tier: "In-Network Provider",
    plans: "Elect Choice, Open Choice, Choice POS II, Managed Choice",
    status: "Active Preferred",
  },
  {
    name: "Cigna Healthcare",
    tier: "In-Network Provider",
    plans: "Cigna Open Access Plus, PPO, Choice Fund",
    status: "Active Preferred",
  },
  {
    name: "UnitedHealthcare",
    tier: "In-Network Provider",
    plans: "UHC Choice, Choice Plus, Options PPO, Golden Rule",
    status: "Active Preferred",
  },
  {
    name: "Humana Choice",
    tier: "In-Network Provider",
    plans: "Humana Commercial PPO, ChoiceCare Network",
    status: "Active Preferred",
  },
  {
    name: "Medicare Part B (Original Medicare)",
    tier: "Participating Physician",
    plans: "Direct assignment accepted with all Medigap & Supplement plans",
    status: "Active Preferred",
  },
];

const financingFaqs = [
  {
    question: "How do I determine what my copay or deductible will be before my appointment?",
    answer: "Our patient financial concierge team verifies your eligibility and benefits prior to your arrival. When your digital intake details are submitted, we query your carrier's real-time portal to estimate your specialist copay, remaining annual deductible, and co-insurance percentage so there are no unexpected surprises at checkout.",
  },
  {
    question: "Can I use my Health Savings Account (HSA) or Flexible Spending Account (FSA)?",
    answer: "Yes. We accept HSA and FSA debit cards for all medically necessary services—including full-body skin checks, mole biopsies, Mohs micrographic surgery, acne treatments, and prescription medications. You can also utilize HSA/FSA funds for broad-spectrum SPF 30+ mineral sunscreens.",
  },
  {
    question: "What financing options are available for elective cosmetic procedures?",
    answer: "For aesthetic treatments (such as Sciton BBL laser therapy, Halo fractional resurfacing, neuromodulators, and dermal fillers), we offer CareCredit patient financing. Qualifying treatments feature 0% APR promotional financing for 6 and 12-month terms, as well as extended fixed-rate monthly plans up to 60 months.",
  },
  {
    question: "What happens if my insurance carrier requires a prior authorization for a treatment or prescription?",
    answer: "Our clinical coordinators handle all prior authorization paperwork directly. Whether your physician prescribes an advanced biologic therapy for severe psoriasis, an oral retinoid for cystic acne, or specialized photodynamic therapy, we submit complete clinical documentation and peer-to-peer reviews on your behalf.",
  },
  {
    question: "What if Whitfield Dermatology is out-of-network with my specific insurance policy?",
    answer: "If you carry an out-of-network plan, you are warmly welcomed as a self-pay patient. We provide transparent, upfront fee quotes prior to service and furnish an itemized CMS-1500 Superbill with all required diagnostic (ICD-10) and procedural (CPT) codes for direct reimbursement submission to your carrier.",
  },
];

export default function FinancingInsurancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Financing & Insurance Policies | Whitfield Dermatology",
    "description": "In-network insurance plans, CareCredit cosmetic financing, and transparent billing policies at Whitfield Dermatology in Nashville, TN.",
    "mainEntity": financingFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
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
            <span>FINANCIAL STEWARDSHIP</span>
            <span>&middot;</span>
            <span>IN-NETWORK TRANSPARENCY</span>
            <span>&middot;</span>
            <span>NO SURPRISES ACT</span>
          </div>

          <MaskedHeading
            text="Transparent Financing & Insurance Navigation"
            as="h1"
            className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-serif font-normal text-ink leading-[1.08] tracking-tight mb-8"
          />

          <p className="text-lg md:text-xl text-stone font-light leading-[1.75] max-w-[54ch] mb-10">
            Medical excellence demands financial clarity. We provide upfront benefit verifications, in-network carrier advocacy, and flexible patient financing so you can focus entirely on your health.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <MagneticButton>
              <Link
                href="/book"
                className="bg-ink hover:bg-rose-deep text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all shadow-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Schedule with In-Network Benefits</span>
              </Link>
            </MagneticButton>

            <a
              href="tel:6153274400"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-line bg-white/80 hover:bg-white text-ink text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-rose-deep" />
              <span>Billing Advocacy: (615) 327-4400</span>
            </a>

            <span className="text-xs uppercase tracking-widest text-stone pl-2">
              HSA & FSA Cards Accepted
            </span>
          </div>
        </div>
      </section>

      {/* 2. IN-NETWORK CARRIER MATRIX */}
      <section className="py-20 md:py-28 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold block mb-3">
            ACCEPTED MEDICAL CARRIERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight mb-4">
            Contracted In-Network Insurance Plans
          </h2>
          <p className="text-stone font-light text-base leading-relaxed">
            We are proud to be contracted in-network with Middle Tennessee&apos;s leading commercial and government insurers for all medically necessary dermatologic care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceCarriers.map((carrier, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/80 hover:bg-white border border-line/80 hover:border-rose/60 transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-cream border border-line text-rose-deep">
                    {carrier.tier}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-rose-deep" />
                </div>
                <h3 className="text-lg font-serif text-ink font-medium mb-2 group-hover:text-rose-deep transition-colors">
                  {carrier.name}
                </h3>
                <p className="text-xs text-stone font-light leading-[1.7] mb-6">
                  {carrier.plans}
                </p>
              </div>

              <div className="pt-4 border-t border-line/50 flex items-center justify-between text-[11px] text-stone">
                <span className="flex items-center gap-1.5 font-medium text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Claims Filed Directly</span>
                </span>
                <span className="uppercase tracking-widest text-[10px] text-rose-deep font-semibold">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Out of Network Support Box */}
        <div className="mt-12 p-8 rounded-3xl bg-linen/50 border border-line/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base font-serif text-ink font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4 text-rose-deep" />
              <span>Out-of-Network or Unlisted Carrier?</span>
            </h4>
            <p className="text-xs text-stone font-light leading-relaxed">
              If your policy is through another carrier, you can still receive uncompromised care at Whitfield Dermatology. We provide a complete, itemized CMS-1500 Superbill with diagnosis and CPT codes for direct reimbursement.
            </p>
          </div>
          <a
            href="tel:6153274400"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink hover:bg-rose-deep text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex-shrink-0"
          >
            <span>Verify Out-of-Network Benefits</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 3. DUAL-COLUMN DOSSIER: MEDICAL VS COSMETIC */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold block mb-3">
            COVERAGE TAXONOMY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight mb-4">
            Understanding Medical Insurance vs. Cosmetic Self-Pay
          </h2>
          <p className="text-stone font-light text-base leading-relaxed">
            In accordance with American Academy of Dermatology guidelines and insurance regulations, services are categorized strictly based on clinical necessity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Medical Dermatology Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/90 border border-line/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-rose-deep font-semibold">
                CATEGORY 01
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-cream border border-line text-ink">
                Insurance Covered
              </span>
            </div>

            <h3 className="text-2xl font-serif text-ink font-normal">
              Medically Necessary Dermatology
            </h3>

            <p className="text-xs text-stone font-light leading-relaxed">
              Treatments diagnosed to treat, prevent, or diagnose diseases of the skin, hair, and nails are submitted directly to your contracted insurance carrier.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-ink font-semibold">
                Representative Services:
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Comprehensive Full-Body Skin Cancer Screenings",
                  "Mohs Micrographic Surgery & Post-Oncology Flap Reconstruction",
                  "Diagnostic Lesion Biopsy & Histopathology Interpretation",
                  "Excisions of Cysts, Lipomas, and Dysplastic Moles",
                  "Cystic Acne & Hormonal Rosacea Medical Management",
                  "Biologic and Systemic Therapies for Severe Psoriasis and Eczema",
                  "Cryotherapy for Actinic Keratoses (Pre-Cancerous Sun Damage)",
                ].map((item, idx) => (
                  <li key={idx} className="text-xs text-stone flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-deep flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-line/60 text-xs text-stone font-light leading-relaxed">
              <strong className="font-medium text-ink block mb-1">Financial Terms:</strong>
              Subject to your policy&apos;s specialist copay, calendar-year deductible, and co-insurance. Claims are submitted by our staff on your behalf.
            </div>
          </div>

          {/* Column 2: Cosmetic & Elective Dermatology Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-linen/60 border border-line/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-rose-deep font-semibold">
                CATEGORY 02
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-white border border-line text-ink">
                Elective Self-Pay
              </span>
            </div>

            <h3 className="text-2xl font-serif text-ink font-normal">
              Aesthetic & Elective Procedures
            </h3>

            <p className="text-xs text-stone font-light leading-relaxed">
              Aesthetic and rejuvenating treatments are not covered by commercial insurance or Medicare. All services are quoted in advance with complete price transparency.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-ink font-semibold">
                Representative Services:
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Physician-Injected Neuromodulators (Botox Cosmetic, Dysport)",
                  "Hyaluronic Acid Dermal Fillers (Restylane, Juvederm Voluma)",
                  "Sciton Halo Hybrid Fractional Laser Skin Resurfacing",
                  "Forever Young BBL Photofacial & Vascular Laser Therapy",
                  "Radiofrequency Microneedling for Skin Tightening & Texture",
                  "Removal of Benign Seborrheic Keratoses & Cosmetic Skin Tags",
                  "Medical-Grade Cosmeceutical Skincare & Chemical Peels",
                ].map((item, idx) => (
                  <li key={idx} className="text-xs text-stone flex items-start gap-2.5 leading-relaxed">
                    <Sparkles className="w-3.5 h-3.5 text-rose-deep flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-line/60 text-xs text-stone font-light leading-relaxed">
              <strong className="font-medium text-ink block mb-1">Financial Terms:</strong>
              Payment is collected at the time of service. We accept all major credit cards, HSA/FSA cards (for qualifying items), and CareCredit promotional financing.
            </div>
          </div>

        </div>
      </section>

      {/* 4. CARECREDIT & FLEXIBLE FINANCING SUITE */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="p-10 md:p-14 rounded-3xl bg-white border border-line/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-rose-deep text-xs font-semibold uppercase tracking-[0.18em]">
                <CreditCard className="w-4 h-4" />
                <span>PATIENT FINANCING SOLUTIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight">
                CareCredit&reg; Healthcare Financing
              </h2>

              <p className="text-sm text-stone font-light leading-relaxed">
                We believe financial considerations should never compromise your pursuit of healthy, radiant skin. Through our partnership with CareCredit, you can divide elective treatment costs into manageable monthly installments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-cream/70 border border-line/70">
                  <span className="text-2xl font-serif text-ink block mb-1">0% APR</span>
                  <span className="text-xs font-semibold text-rose-deep uppercase tracking-wider block mb-1">6 &amp; 12-Month Terms</span>
                  <p className="text-[11px] text-stone font-light leading-relaxed">
                    No interest charged if the full promotional balance is paid within 6 or 12 months on purchases over $200.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-cream/70 border border-line/70">
                  <span className="text-2xl font-serif text-ink block mb-1">Extended</span>
                  <span className="text-xs font-semibold text-rose-deep uppercase tracking-wider block mb-1">24 to 60-Month Plans</span>
                  <p className="text-[11px] text-stone font-light leading-relaxed">
                    Fixed monthly installment options with reduced APRs for comprehensive laser or surgical cosmetic regimens.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.carecredit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink hover:bg-rose-deep text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Apply with CareCredit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-stone font-light">
                  Instant decision with no impact on your initial credit inquiry.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-blush/60 border border-line/80 space-y-4">
              <h4 className="text-sm font-serif text-ink font-medium flex items-center gap-2">
                <Receipt className="w-4 h-4 text-rose-deep" />
                <span>Accepted Payment Instruments</span>
              </h4>
              <ul className="space-y-3 text-xs text-stone font-light">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-deep flex-shrink-0" />
                  <span>Visa, MasterCard, American Express, and Discover</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-deep flex-shrink-0" />
                  <span>Health Savings Account (HSA) and FSA Debit Cards</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-deep flex-shrink-0" />
                  <span>CareCredit Healthcare Credit Cards</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-deep flex-shrink-0" />
                  <span>Certified Bank Drafts &amp; Cashier&apos;s Checks</span>
                </li>
              </ul>
              <div className="pt-3 border-t border-line/60 text-[11px] text-stone leading-relaxed">
                For administrative and patient security reasons, our practice does not keep cash on the premises.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. THE NO SURPRISES ACT & GOOD FAITH ESTIMATE */}
      <section className="py-20 md:py-28 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto border-b border-line/70">
        <div className="p-8 sm:p-10 rounded-3xl bg-linen/50 border border-line/80 space-y-4">
          <div className="flex items-center gap-3 text-rose-deep">
            <Scale className="w-5 h-5 text-rose-deep flex-shrink-0" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              FEDERAL COMPLIANCE &amp; PATIENT RIGHTS
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif text-ink font-normal">
            The Federal &ldquo;No Surprises Act&rdquo; &amp; Good Faith Estimate Pledge
          </h3>

          <p className="text-xs sm:text-sm text-stone font-light leading-[1.8]">
            Under Section 2799B-6 of the Public Health Service Act, healthcare providers are mandated to give patients who do not have insurance or who are not using insurance an itemized <strong>Good Faith Estimate (GFE)</strong> of expected charges for non-emergency medical items and services.
          </p>

          <div className="space-y-2 text-xs text-stone font-light leading-[1.7] pt-2">
            <p>
              &bull; You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services, including expected fees for examinations, biopsies, and histology.
            </p>
            <p>
              &bull; Make sure your healthcare provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask any healthcare provider for an estimate before scheduling.
            </p>
            <p>
              &bull; If you receive a bill that is at least $400 more than your Good Faith Estimate, you have the statutory right to dispute the bill through the federal dispute resolution process.
            </p>
          </div>

          <div className="pt-2 text-[11px] text-stone">
            For more information about your right to a Good Faith Estimate, visit{" "}
            <a
              href="https://www.cms.gov/nosurprises"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-deep underline hover:text-ink font-medium"
            >
              www.cms.gov/nosurprises
            </a>{" "}
            or call 1-800-985-3059.
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE FINANCIAL FAQ ACCORDION */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold block mb-3">
            CLEAR POLICIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight mb-4">
            Frequently Asked Financial Questions
          </h2>
          <p className="text-sm text-stone font-light max-w-lg mx-auto leading-relaxed">
            Detailed answers regarding copays, deductible timing, claim submissions, and insurance billing.
          </p>
        </div>

        <div className="space-y-4">
          {financingFaqs.map((faq, idx) => {
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

        <div className="mt-12 text-center">
          <p className="text-xs text-stone font-light mb-3">
            Preparing for your first consultation with us?
          </p>
          <Link
            href="/new-patients"
            className="monograph-link text-xs font-semibold text-rose-deep tracking-wider uppercase inline-flex items-center gap-1.5"
          >
            <span>Review New Patient Intake Protocol &amp; Checklist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 7. REASSURING CLINICAL APPOINTMENT INVITATION */}
      <section className="bg-blush/80 border-t border-line py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold mb-3 block">
            DEDICATED BILLING ADVOCACY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal mb-4">
            Have Questions About Your In-Network Benefits?
          </h2>
          <p className="text-base text-stone mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Our on-site patient coordinators are available Monday through Friday to verify your coverage and explain your out-of-pocket estimates before your visit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton>
              <Link
                href="/book"
                className="bg-ink hover:bg-rose-deep text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all shadow-md"
              >
                Schedule with Insurance
              </Link>
            </MagneticButton>
            <a
              href="tel:6153274400"
              className="monograph-link text-sm font-medium text-ink tracking-wide py-2"
            >
              Call Our Billing Team: (615) 327-4400 &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
