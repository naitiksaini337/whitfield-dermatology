import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/ui/CtaBand";
import { siteConfig } from "@/config/site";
import { Calendar, UserCheck, ShieldCheck, Clock, ArrowLeft } from "lucide-react";

interface PostData {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  displayDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    credentials: string;
    id: string;
    image: string;
    sameAs: string;
  };
  reviewer: {
    name: string;
    credentials: string;
    id: string;
  };
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
    }[];
  };
}

const postsData: Record<string, PostData> = {
  "dermatologist-cost-nashville": {
    slug: "dermatologist-cost-nashville",
    title: "How Much Does a Dermatologist Visit Cost in Nashville?",
    description: "A transparent breakdown of medical versus cosmetic dermatology pricing, insurance coverage, copays, and self-pay fees in Nashville, TN.",
    datePublished: "2023-10-12T08:00:00-05:00",
    dateModified: "2026-09-18T10:00:00-05:00",
    displayDate: "September 18, 2026 (Updated)",
    readTime: "6 min read",
    author: {
      name: "Dr. Sarah Whitfield, MD, FAAD",
      role: "Founder & Chief Mohs Surgeon",
      credentials: "Board-Certified Dermatologist · Mayo Clinic Fellowship",
      id: `${siteConfig.url}/providers#dr-sarah-whitfield`,
      image: "/images/doctor_portrait.jpg",
      sameAs: "https://www.healthgrades.com/physician/dr-sarah-whitfield-x94lm",
    },
    reviewer: {
      name: "Dr. Sarah Whitfield, MD, FAAD",
      credentials: "Board-Certified Dermatologist",
      id: `${siteConfig.url}/providers#dr-sarah-whitfield`,
    },
    content: {
      intro: "Navigating healthcare costs in Middle Tennessee can be frustratingly opaque. When scheduling a dermatology consultation in Nashville, patients deserve upfront clarity regarding what insurance covers, typical out-of-pocket deductibles, and self-pay cosmetic pricing.",
      sections: [
        {
          heading: "Medical vs. Cosmetic Dermatology: The Billing Division",
          body: [
            "The primary determinant of dermatology visit costs is whether the diagnosis qualifies as medically necessary or elective cosmetic. Medical concerns—such as full-body skin cancer surveillance, suspicious pigmented lesions, acute cystic acne, eczema flares, and atypical mole biopsies—are billed through major medical insurance.",
            "Cosmetic procedures—including physician neuromodulators (Botox/Dysport), dermal volumizers (Juvederm/Restylane), and elective laser resurfacing—are self-pay services not covered by commercial insurance or Medicare.",
          ],
        },
        {
          heading: "What to Expect When Using Insurance in Tennessee",
          body: [
            "If your insurance plan is in-network (such as BlueCross BlueShield of Tennessee, Aetna, Cigna, or UnitedHealthcare), your initial financial responsibility is typically your specialist copayment or plan deductible.",
            "For standard medical evaluations, in-network specialist copays generally range between $40 and $80. If you have a high-deductible health plan (HDHP), the negotiated contracted rate for a comprehensive exam usually runs between $140 and $210 prior to meeting your deductible.",
          ],
        },
        {
          heading: "Transparent Self-Pay Fee Schedule",
          body: [
            "For patients without insurance or those seeking out-of-network care, transparency is essential. At Whitfield Dermatology, self-pay new patient consultations with a board-certified dermatologist are established at a flat $195 fee.",
            "Procedural costs such as liquid nitrogen cryotherapy or shave biopsies are itemized clearly prior to treatment, ensuring patients are never confronted with surprise billing statements.",
          ],
        },
      ],
    },
  },
  "skin-check-guide": {
    slug: "skin-check-guide",
    title: "What Really Happens During a Full-Body Skin Cancer Screening",
    description: "An evidence-based guide detailing what occurs during a comprehensive dermatologic skin check, from dermoscopy examination to biopsy protocols.",
    datePublished: "2023-09-28T08:00:00-05:00",
    dateModified: "2026-09-15T14:30:00-05:00",
    displayDate: "September 15, 2026 (Updated)",
    readTime: "7 min read",
    author: {
      name: "Dr. Sarah Whitfield, MD, FAAD",
      role: "Founder & Chief Mohs Surgeon",
      credentials: "Board-Certified Dermatologist · Mayo Clinic Fellowship",
      id: `${siteConfig.url}/providers#dr-sarah-whitfield`,
      image: "/images/doctor_portrait.jpg",
      sameAs: "https://www.healthgrades.com/physician/dr-sarah-whitfield-x94lm",
    },
    reviewer: {
      name: "Dr. Sarah Whitfield, MD, FAAD",
      credentials: "Board-Certified Dermatologist",
      id: `${siteConfig.url}/providers#dr-sarah-whitfield`,
    },
    content: {
      intro: "Many first-time dermatology patients feel nervous about what a full-body skin examination entails. Understanding the clinical protocol—conducted with privacy, precision, and polarized dermoscopy—replaces anxiety with diagnostic peace of mind.",
      sections: [
        {
          heading: "The 360-Degree Anatomical Examination",
          body: [
            "A physician-conducted skin check evaluates the entire cutaneous envelope, from the scalp to the soles of the feet and interdigital spaces. Skin cancers—including malignant melanoma, basal cell carcinoma, and squamous cell carcinoma—frequently develop in non-sun-exposed regions.",
            "Patients change into a clinical gown in private. The exam is conducted methodically section-by-section, ensuring full privacy while leaving no anatomical zone uninspected.",
          ],
        },
        {
          heading: "Polarized Light Dermoscopy: Sub-Surface Precision",
          body: [
            "Our physicians utilize polarized handheld dermoscopes that eliminate surface glare, magnifying skin architecture by 10x. This allows early detection of atypical pigment networks, vascular patterns, and architectural chaos months before they become visible to the naked eye.",
          ],
        },
        {
          heading: "When Is a Biopsy Necessary?",
          body: [
            "If a lesion exhibits atypical criteria (asymmetry, border irregularity, color variegation, or evolving characteristics), a minor local anesthetic biopsy is performed in-office. Results from our CLIA-certified pathology lab are available within days.",
          ],
        },
      ],
    },
  },
  "hair-transplant-guide": {
    slug: "hair-transplant-guide",
    title: "Hair Transplants: An Honest Guide from Nashville Dermatologists",
    description: "Clinical evaluation of Follicular Unit Extraction (FUE), medical trichology, PRP, and realistic candidacy criteria by board-certified specialists.",
    datePublished: "2023-08-14T08:00:00-05:00",
    dateModified: "2026-09-10T16:00:00-05:00",
    displayDate: "September 10, 2026 (Updated)",
    readTime: "8 min read",
    author: {
      name: "Dr. James Calloway, MD, FAAD",
      role: "Surgical Specialist & Follicular Medicine",
      credentials: "Board-Certified Dermatologist · Johns Hopkins Alumnus",
      id: `${siteConfig.url}/providers#dr-james-calloway`,
      image: "/images/doctor_portrait.jpg",
      sameAs: "https://www.healthgrades.com/physician/dr-james-calloway-k82qm",
    },
    reviewer: {
      name: "Dr. Sarah Whitfield, MD, FAAD",
      credentials: "Board-Certified Dermatologist · Mohs Surgeon",
      id: `${siteConfig.url}/providers#dr-sarah-whitfield`,
    },
    content: {
      intro: "Hair restoration marketing is flooded with overpromised results and unregulated commercial medspas. In this clinical guide, board-certified physician Dr. James Calloway provides an honest, evidence-based review of follicular medicine and modern micro-FUE transplantation.",
      sections: [
        {
          heading: "Understanding the Underlying Pathology First",
          body: [
            "Surgical grafting without proper diagnostic trichology is a recipe for long-term aesthetic failure. Before any surgical intervention is recommended, our physicians confirm whether hair loss is driven by androgenetic alopecia, inflammatory scarring alopecias (such as lichen planopilaris), or telogen effluvium.",
            "Non-surgical medical stabilization using oral 5-alpha reductase inhibitors, topical vasodilators, and autologous PRP is often established first to safeguard existing native follicles.",
          ],
        },
        {
          heading: "The Micro-FUE Advantage: Natural Angulation & Donor Preservation",
          body: [
            "Modern follicular unit extraction harvests follicular groupings one-by-one using delicate 0.8mm to 0.9mm micro-punches. This avoids the linear scar of older strip harvesting methods and allows precision placement following the natural spiral and angulation of the patient's native hairline.",
          ],
        },
      ],
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData[slug];

  if (!post) {
    return {
      title: "Article Not Found | Whitfield Dermatology",
    };
  }

  const postUrl = `${siteConfig.url}/blog/${slug}`;

  return {
    title: `${post.title} | Whitfield Dermatology`,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postsData[slug];

  if (!post) {
    notFound();
  }

  const postUrl = `${siteConfig.url}/blog/${slug}`;

  // Rich Schema.org Article / MedicalWebPage with Provenance Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${postUrl}#webpage`,
    "url": postUrl,
    "name": post.title,
    "headline": post.title,
    "description": post.description,
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "inLanguage": "en-US",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "author": {
      "@type": "Person",
      "@id": post.author.id,
      "name": post.author.name,
      "jobTitle": post.author.role,
      "description": post.author.credentials,
      "sameAs": post.author.sameAs,
      "worksFor": {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    "reviewedBy": {
      "@type": "Person",
      "@id": post.reviewer.id,
      "name": post.reviewer.name,
      "jobTitle": "Physician Reviewer",
      "description": post.reviewer.credentials,
      "worksFor": {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    "publisher": {
      "@type": "MedicalBusiness",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.png`,
      },
    },
    "medicalSpecialty": "Dermatology",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-cream border-b border-line pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone hover:text-rose-deep transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Clinical Insights</span>
          </Link>

          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>PEER-REVIEWED CLINICAL GUIDE</span>
          </div>

          <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-serif font-normal text-ink mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Visible Author & Provenance Byline for E-E-A-T & GEO Trust */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-line/70 text-xs text-stone">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-line bg-blush">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-ink">{post.author.name}</p>
                <p className="text-[11px] text-stone">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 border-l border-line/70 pl-6">
              <Calendar className="w-3.5 h-3.5 text-rose-deep" />
              <span>{post.displayDate}</span>
            </div>

            <div className="flex items-center gap-1.5 border-l border-line/70 pl-6">
              <Clock className="w-3.5 h-3.5 text-rose-deep" />
              <span>{post.readTime}</span>
            </div>

            <div className="flex items-center gap-1.5 border-l border-line/70 pl-6">
              <UserCheck className="w-3.5 h-3.5 text-rose-deep" />
              <span>Medically Reviewed by {post.reviewer.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg prose-headings:font-serif prose-headings:text-ink prose-p:text-stone prose-p:leading-[1.8] max-w-none">
          <p className="text-xl text-ink font-light leading-relaxed mb-10 border-l-2 border-rose-deep pl-6 italic">
            {post.content.intro}
          </p>

          {post.content.sections.map((sec, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-serif text-ink mb-4 font-normal">
                {sec.heading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-stone mb-4 font-light">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>

        {/* Author Bio Box */}
        <div className="mt-16 p-8 rounded-3xl bg-blush/60 border border-line/80 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-line bg-white flex-shrink-0">
            <Image
              src={post.author.image}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-rose-deep font-semibold block mb-1">
              About the Author
            </span>
            <h3 className="text-lg font-serif text-ink font-medium mb-1">
              {post.author.name}
            </h3>
            <p className="text-xs text-stone mb-3">{post.author.credentials}</p>
            <p className="text-xs text-stone leading-relaxed font-light">
              Physician leader at Whitfield Dermatology, dedicated to transparent clinical education, evidence-based skin surgery, and patient autonomy across Middle Tennessee.
            </p>
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
