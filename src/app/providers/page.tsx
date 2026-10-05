"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Award, 
  GraduationCap, 
  Microscope, 
  ShieldCheck, 
  Calendar, 
  ArrowUpRight, 
  Sparkles,
  BookOpen,
  MapPin,
  CheckCircle2,
  Plus,
  Minus,
  FileCheck,
  Stethoscope,
  HeartHandshake
} from "lucide-react";
import { MaskedHeading, CurtainReveal } from "@/components/motion/CurtainReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";

const providers = [
  {
    id: "whitfield",
    name: "Dr. Sarah Whitfield, MD, FAAD",
    role: "Founder & Chief Mohs Surgeon",
    credentials: "Board-Certified Dermatologist · Fellowship-Trained Mohs Surgeon",
    category: "mohs",
    education: [
      "Vanderbilt University Medical Center — Dermatology Residency (Chief Resident)",
      "Mayo Clinic Rochester — ACGME Mohs Micrographic Surgery & Cutaneous Oncology Fellowship",
      "University of Virginia School of Medicine — Doctor of Medicine (Alpha Omega Alpha)",
    ],
    bio: "Dr. Whitfield founded the clinic in 2011 to establish a higher standard of cutaneous surgery in Middle Tennessee. Having completed over 15,000 Mohs surgical cases, she is recognized internationally for her expertise in early melanoma surveillance and complex facial reconstruction following skin cancer extirpation.",
    quote: "Surgical precision and artistic restoration cannot be separated. When we remove a skin cancer, our obligation to the patient only ends when the scar has faded into natural grace.",
    image: "/images/doctor_portrait.jpg",
    specialties: ["Mohs Micrographic Surgery", "Melanoma & Non-Melanoma Oncology", "Facial Reconstructive Flaps", "High-Risk Mole Mapping"],
    honor: "Top Dermatologist — Nashville Lifestyles (2018–2025)",
    publications: [
      "Journal of the American Academy of Dermatology: Margin Assessment in High-Risk Cutaneous Squamous Cell Carcinoma (2021)",
      "Dermatologic Surgery: Aesthetic Outcomes in Nasal Alar Reconstructive Flaps (2023)",
    ],
  },
  {
    id: "osei",
    name: "Dr. Amara Osei, MD, FAAD",
    role: "Director of Aesthetic Dermatology & Pigment",
    credentials: "Board-Certified Dermatologist · Harvard & Vanderbilt Alumna",
    category: "aesthetic",
    education: [
      "Harvard Medical School — Doctor of Medicine (Magna Cum Laude)",
      "Vanderbilt University Medical Center — Dermatology Residency",
      "American Society for Dermatologic Surgery — Advanced Laser & Cosmetic Preceptorship",
    ],
    bio: "Dr. Osei bridges cutting-edge photomedicine with nuanced anatomical restoration. She is a recognized thought leader in melasma management, multi-platform laser therapies, and tailored treatments for diverse skin types and Fitzpatrick phototypes I through VI.",
    quote: "True aesthetic dermatology never announces itself. The goal of every neuromodulator or laser pulse is to restore cellular vitality, not create an altered caricature.",
    image: "/images/doctor_portrait.jpg",
    specialties: ["Dual-Wavelength Pigment Laser", "Physician Neuromodulators & Fillers", "Skin of Color & Melasma", "Acne Scar Remodeling"],
    honor: "ASDS Cutting Edge Research Fellow",
    publications: [
      "Lasers in Surgery and Medicine: Picosecond Photomechanical Remodeling in Refractory Melasma (2022)",
      "Cutis: Safety Profiles of Fractional Thulium 1927nm Lasers in Fitzpatrick Skin Types IV-VI (2024)",
    ],
  },
  {
    id: "calloway",
    name: "Dr. James Calloway, MD, FAAD",
    role: "Surgical Specialist & Follicular Medicine",
    credentials: "Board-Certified Dermatologist · Johns Hopkins Alumnus",
    category: "trichology",
    education: [
      "Johns Hopkins University School of Medicine — Doctor of Medicine",
      "Columbia University Medical Center — Dermatology Residency",
      "International Society of Hair Restoration Surgery — Active Surgical Member",
    ],
    bio: "Dr. Calloway leads our procedural surgery and trichology clinic. His surgical practice emphasizes minimally invasive follicular unit extraction (FUE), complex benign tumor excisions, and evidence-based restorative protocols for inflammatory and genetic alopecias.",
    quote: "Hair restoration and cutaneous surgery demand disciplined bio-mimicry. Every follicle has a trajectory, an angle, and an individual blood supply that must be honored.",
    image: "/images/doctor_portrait.jpg",
    specialties: ["Micro-FUE Hair Transplantation", "Autologous PRP Trichology", "Cyst & Lipoma Excision", "Psoriasis & Biologic Medicine"],
    honor: "Member, American College of Mohs Surgery",
    publications: [
      "International Journal of Trichology: High-Density Follicular Unit Angulation in Androgenetic Alopecia (2023)",
      "Journal of Cutaneous Pathology: Histopathologic Differentiation of Scarring versus Non-Scarring Alopecias (2022)",
    ],
  },
];

const credentialFaqs = [
  {
    question: "What is the difference between a Board-Certified Dermatologist and a MedSpa injector?",
    answer: "A board-certified dermatologist completes 4 years of medical school followed by 4 years of intensive hospital residency (over 12,000 to 16,000 hours of direct patient care) accredited by the ACGME and certified by the American Board of Dermatology. MedSpas frequently employ non-physicians with weekend certification courses. At Whitfield, every aesthetic and medical consultation is diagnosed and performed directly by a board-certified physician.",
  },
  {
    question: "What does ACGME Fellowship Training in Mohs Micrographic Surgery signify?",
    answer: "Mohs fellowship is the gold standard in cutaneous oncology. Only a select cohort of dermatologists are admitted to rigorous 1-2 year ACGME-accredited programs (such as the Mayo Clinic fellowship Dr. Whitfield completed). It involves thousands of verified surgical removals, simultaneous microscopic histopathologic margin interpretations, and complex facial reconstructive flap designs.",
  },
  {
    question: "How do I determine which physician I should schedule with?",
    answer: "Dr. Sarah Whitfield specializes in skin cancer surveillance, biopsies, and Mohs micrographic surgery. Dr. Amara Osei leads cosmetic injectables, multi-wavelength lasers, and pigment disorders. Dr. James Calloway oversees hair restoration, trichology, cyst excisions, and general medical dermatology. If your needs span both medical and aesthetic care, our patient concierge will orchestrate a coordinated plan.",
  },
  {
    question: "Do the doctors perform their own cosmetic injections and laser passes?",
    answer: "Yes, without exception. At Whitfield Dermatology, neuromodulators (Botox/Dysport), dermal fillers (Restylane/Juvederm), Sciton Halo laser passes, and surgical excisions are never delegated to nurses or medical assistants. Your facial anatomy is evaluated and treated exclusively by physician hands.",
  },
];

export default function ProvidersPage() {
  const [filter, setFilter] = useState<string>("all");
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>({
    whitfield: "philosophy",
    osei: "philosophy",
    calloway: "philosophy",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const setTabForProvider = (providerId: string, tab: string) => {
    setActiveTabs((prev) => ({ ...prev, [providerId]: tab }));
  };

  const filteredProviders = filter === "all" 
    ? providers 
    : providers.filter((p) => p.category === filter);

  return (
    <>
      {/* 1. ASYMMETRIC MONOGRAPH EDITORIAL HEADER */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-rose-deep text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <span>FACULTY DOSSIER</span>
            <span>&middot;</span>
            <span>NASHVILLE, TN</span>
            <span>&middot;</span>
            <span>BOARD-CERTIFIED ONLY</span>
          </div>

          <MaskedHeading
            text="The Physicians of Whitfield Dermatology"
            as="h1"
            className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-serif font-normal text-ink leading-[1.08] tracking-tight mb-8"
          />

          <p className="text-lg md:text-xl text-stone font-light leading-[1.75] max-w-[54ch] mb-10">
            Founded on the rare principle that every medical consultation, surgical excision, and aesthetic procedure must be delivered personally by a board-certified physician. Never passed off. Never rushed.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <MagneticButton>
              <Link
                href="/book"
                className="bg-ink hover:bg-rose-deep text-cream px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all shadow-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Schedule with a Physician</span>
              </Link>
            </MagneticButton>

            <span className="text-xs uppercase tracking-widest text-stone pl-2">
              Unrushed 45-Minute Consultations
            </span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-16 flex flex-wrap gap-2 pt-8 border-t border-line/50">
          {[
            { id: "all", label: "Full Faculty" },
            { id: "mohs", label: "Mohs & Cutaneous Surgery" },
            { id: "aesthetic", label: "Aesthetic & Laser Photomedicine" },
            { id: "trichology", label: "Follicular Medicine & Trichology" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
                filter === btn.id
                  ? "bg-ink text-white shadow-sm"
                  : "bg-white/80 hover:bg-white text-stone hover:text-ink border border-line"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. THE 4 PILLARS OF OUR CREDENTIALING STANDARD */}
      <section className="py-20 md:py-28 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto border-b border-line/70">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="pt-6 border-t-2 border-line hover:border-rose-deep transition-colors group">
            <span className="font-serif italic text-2xl text-rose-deep block mb-3 group-hover:translate-x-1 transition-transform">01</span>
            <h3 className="text-lg font-serif text-ink font-medium mb-2">100% Board-Certified</h3>
            <p className="text-xs text-stone leading-[1.7] font-light">
              Every physician completed a four-year medical degree followed by a rigorous three-year accredited dermatology residency.
            </p>
          </div>

          <div className="pt-6 border-t-2 border-line hover:border-rose-deep transition-colors group">
            <span className="font-serif italic text-rose-deep block text-2xl mb-3 group-hover:translate-x-1 transition-transform">02</span>
            <h3 className="text-lg font-serif text-ink font-medium mb-2">Mayo &amp; Vanderbilt Trained</h3>
            <p className="text-xs text-stone leading-[1.7] font-light">
              Our faculty members bring pedigree from premier institutions with published clinical trials in peer-reviewed journals.
            </p>
          </div>

          <div className="pt-6 border-t-2 border-line hover:border-rose-deep transition-colors group">
            <span className="font-serif italic text-rose-deep block text-2xl mb-3 group-hover:translate-x-1 transition-transform">03</span>
            <h3 className="text-lg font-serif text-ink font-medium mb-2">Physician-Only Procedures</h3>
            <p className="text-xs text-stone leading-[1.7] font-light">
              Biopsies, laser resurfacing, injectables, and Mohs surgery are performed directly by our doctors, ensuring strict diagnostic accountability.
            </p>
          </div>

          <div className="pt-6 border-t-2 border-line hover:border-rose-deep transition-colors group">
            <span className="font-serif italic text-rose-deep block text-2xl mb-3 group-hover:translate-x-1 transition-transform">04</span>
            <h3 className="text-lg font-serif text-ink font-medium mb-2">CLIA-Audited Pathology</h3>
            <p className="text-xs text-stone leading-[1.7] font-light">
              Our in-house histology laboratory operates under continuous external quality controls with same-day frozen section confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. IN-DEPTH PHYSICIAN MONOGRAPH DOSSIERS WITH INTERACTIVE TABS */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto space-y-32">
        {filteredProviders.map((p, idx) => {
          const currentTab = activeTabs[p.id] || "philosophy";

          return (
            <div 
              key={p.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-line/60 last:border-none last:pb-0"
            >
              {/* Left Column: Portrait with Architectural .offset-frame */}
              <div className="lg:col-span-5 relative">
                <div className="offset-frame rounded-3xl">
                  <CurtainReveal className="aspect-[4/5] rounded-3xl overflow-hidden bg-blush shadow-xl relative">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-30" />
                    
                    {/* Floating Honor Tag */}
                    <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-line/60 shadow-md flex items-center justify-between text-xs">
                      <span className="font-serif italic text-ink">{p.honor}</span>
                      <ShieldCheck className="w-4 h-4 text-rose-deep" />
                    </div>
                  </CurtainReveal>
                </div>

                {/* Consultation Booking Button */}
                <div className="mt-10 text-center lg:text-left">
                  <MagneticButton>
                    <Link
                      href="/book"
                      className="inline-flex items-center gap-2 bg-ink hover:bg-rose-deep text-cream px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5 text-champagne" />
                      <span>Consult with {p.name.split(",")[0]}</span>
                    </Link>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Monograph Dossier & Credentials */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-rose-deep text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                    <span>{(idx + 1).toString().padStart(2, "0")} / FACULTY PROFILE</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight mb-2">
                    {p.name}
                  </h2>
                  <p className="text-sm font-serif italic text-rose-deep text-lg mb-1">{p.role}</p>
                  <p className="text-xs uppercase tracking-wider text-stone font-medium">{p.credentials}</p>
                </div>

                {/* Biography Narrative */}
                <div className="text-sm sm:text-base text-stone font-light leading-[1.8]">
                  <p>{p.bio}</p>
                </div>

                {/* Interactive Monograph Tabs */}
                <div className="border border-line/80 rounded-3xl overflow-hidden bg-white/80 shadow-sm">
                  {/* Tab Navigation */}
                  <div className="flex border-b border-line bg-cream/40 overflow-x-auto">
                    {[
                      { id: "philosophy", label: "Clinical Philosophy", icon: HeartHandshake },
                      { id: "pedigree", label: "Academic Pedigree", icon: GraduationCap },
                      { id: "specialties", label: "Areas of Practice", icon: Microscope },
                      { id: "publications", label: "Publications", icon: BookOpen },
                    ].map((tab) => {
                      const Icon = tab.icon;
                      const isActive = currentTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setTabForProvider(p.id, tab.id)}
                          className={`flex items-center gap-2 px-5 py-3.5 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all border-b-2 -mb-[2px] ${
                            isActive
                              ? "border-rose-deep text-rose-deep bg-white font-semibold"
                              : "border-transparent text-stone hover:text-ink hover:bg-white/50"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab Content Panes */}
                  <div className="p-6 sm:p-8">
                    {currentTab === "philosophy" && (
                      <div className="p-6 rounded-2xl bg-blush/60 border border-line/80 relative">
                        <span className="font-serif text-5xl text-rose/30 absolute -top-3 left-4 select-none">&ldquo;</span>
                        <p className="font-serif italic text-ink text-base sm:text-lg leading-relaxed relative z-10">
                          {p.quote}
                        </p>
                      </div>
                    )}

                    {currentTab === "pedigree" && (
                      <div className="space-y-4">
                        <h4 className="text-xs uppercase tracking-widest text-ink font-semibold flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-rose-deep" />
                          <span>Residencies, Fellowships &amp; Honors</span>
                        </h4>
                        <ul className="space-y-3">
                          {p.education.map((edu, eIdx) => (
                            <li key={eIdx} className="text-xs text-stone flex items-start gap-3 leading-relaxed">
                              <span className="w-2 h-2 rounded-full bg-rose-deep mt-1.5 flex-shrink-0" />
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {currentTab === "specialties" && (
                      <div className="space-y-4">
                        <h4 className="text-xs uppercase tracking-widest text-ink font-semibold">
                          Procedural &amp; Diagnostic Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2.5">
                          {p.specialties.map((spec) => (
                            <span
                              key={spec}
                              className="px-4 py-2 rounded-full bg-white border border-line text-xs font-medium text-ink shadow-sm flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-rose-deep" />
                              <span>{spec}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentTab === "publications" && (
                      <div className="space-y-4">
                        <h4 className="text-xs uppercase tracking-widest text-ink font-semibold flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-rose-deep" />
                          <span>Peer-Reviewed Papers &amp; Clinical Investigations</span>
                        </h4>
                        <ul className="space-y-3">
                          {p.publications.map((pub, pubIdx) => (
                            <li key={pubIdx} className="text-xs text-stone flex items-start gap-2.5 leading-relaxed">
                              <span className="font-serif italic text-rose-deep font-semibold mt-0.5">&bull;</span>
                              <span>{pub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* 4. PHYSICIAN CREDENTIALS FAQ ACCORDION */}
      <section className="py-24 md:py-32 px-6 sm:px-12 lg:px-24 max-w-4xl mx-auto border-t border-line/70">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold block mb-3">
            RIGOROUS STANDARDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal tracking-tight mb-4">
            Understanding Board-Certification in Dermatology
          </h2>
          <p className="text-sm text-stone font-light max-w-lg mx-auto leading-relaxed">
            Why academic credentials, ACGME surgical fellowships, and physician-only care represent a higher clinical benchmark.
          </p>
        </div>

        <div className="space-y-4">
          {credentialFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur rounded-2xl border border-line/80 overflow-hidden transition-all duration-300 hover:border-rose/50"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
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
      </section>

      {/* 5. REASSURING CLINICAL APPOINTMENT INVITATION */}
      <section className="bg-blush/80 border-t border-line py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-rose-deep font-semibold mb-3 block">
            GUARANTEED PHYSICIAN ACCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink font-normal mb-4">
            Meet with Our Board-Certified Dermatologists
          </h2>
          <p className="text-base text-stone mb-8 max-w-xl mx-auto font-light leading-relaxed">
            We reserve dedicated urgent and screening appointments each week. Experience care where your questions are heard and your health comes first.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <MagneticButton>
              <Link
                href="/book"
                className="bg-ink hover:bg-rose-deep text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all shadow-md"
              >
                Schedule Your Consultation
              </Link>
            </MagneticButton>
            <Link
              href="/services"
              className="monograph-link text-sm font-medium text-ink tracking-wide py-2"
            >
              Explore Our Services Catalogue &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
