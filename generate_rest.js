const fs = require('fs');
const path = require('path');

function create(p, content) {
  const dir = path.dirname(path.join(__dirname, p));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(__dirname, p), content);
}

// 1. Results Hub
create('src/app/results/page.tsx', `
import { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Patient Results & Before/After Gallery | Whitfield Dermatology",
  description: "View real patient transformations from our board-certified dermatologists. Actual patients. Results vary.",
};

export default function ResultsHub() {
  const cases = [
    { slug: 'mohs-on-the-nose', title: 'Mohs on the Nose', location: 'Brentwood', concern: 'Basal Cell Carcinoma' },
    { slug: 'melasma-plan', title: 'Melasma Plan', location: 'Franklin', concern: 'Pigmentation' },
    { slug: 'hair-restoration', title: 'Hair Restoration', location: 'Green Hills', concern: 'Hair Loss' },
    { slug: 'microneedling-series', title: 'Microneedling Series', location: 'East Nashville', concern: 'Acne Scars' }
  ];

  return (
    <>
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Patient Results</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Real outcomes from our clinic. Every image represents an actual patient. Results vary by individual.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map(c => (
            <Link key={c.slug} href={\`/results/\${c.slug}\`} className="group bg-white border border-line rounded-[14px] overflow-hidden hover:border-rose transition-all shadow-sm">
              <div className="aspect-video bg-blush relative flex items-center justify-center">
                <span className="text-stone font-medium">Before & After Visualization</span>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] uppercase tracking-wide text-ink">Before</div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] uppercase tracking-wide text-ink">After</div>
              </div>
              <div className="p-6">
                <div className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-2">{c.concern} &middot; {c.location}</div>
                <h2 className="text-2xl font-fraunces text-ink mb-2 group-hover:text-rose transition-colors">{c.title}</h2>
                <p className="text-[11px] text-stone uppercase tracking-wide mt-4">Actual patient. Results vary.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CtaBand />
    </>
  );
}`);

// 2. Results Slug
create('src/app/results/[slug]/page.tsx', `
import { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Patient Case Study | Whitfield Dermatology",
  description: "Detailed before and after case study. Actual patient. Results vary.",
};

export default function ResultCase() {
  return (
    <>
      <div className="bg-cream pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto">
          <nav className="flex text-sm text-stone mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li><Link href="/" className="hover:text-rose">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/results" className="hover:text-rose">Results</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-ink font-medium">Case Study</li>
            </ol>
          </nav>
          <p className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-4">MOHS SURGERY &middot; BRENTWOOD</p>
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Mohs on the Nose</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="aspect-[21/9] bg-blush rounded-2xl mb-12 relative flex items-center justify-center border border-line">
          <span className="text-stone">Detailed Before & After Imagery</span>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs uppercase tracking-wide text-ink">Before</div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs uppercase tracking-wide text-ink">After</div>
        </div>
        
        <p className="text-sm font-medium text-stone uppercase tracking-wide mb-12 text-center border-b border-line pb-8">Actual patient. Results vary.</p>

        <article className="prose prose-lg prose-headings:font-fraunces prose-headings:text-ink prose-p:text-stone max-w-none">
          <h2>The Concern</h2>
          <p>This patient presented with a new, pearly bump on the left nasal ala that occasionally bled. After a thorough examination and biopsy, it was diagnosed as a basal cell carcinoma. Given the location on the nose, preserving as much healthy tissue as possible was critical for both function and aesthetic outcome.</p>

          <h2>The Consultation</h2>
          <p>During the consultation, Dr. Whitfield discussed the diagnosis in detail. We reviewed the benefits of Mohs micrographic surgery, explaining how it offers the highest cure rate while minimizing the removal of healthy skin. The patient was understandably anxious about scarring on the face.</p>

          <h2>The Treatment Plan</h2>
          <p>We scheduled Mohs surgery in our on-site lab. The plan was to remove the tumor layer by layer, checking the margins under the microscope in real-time until the margins were clear. Once clear, we would perform a precise reconstructive closure.</p>

          <h2>The Sessions</h2>
          <p>The surgery took two stages to achieve clear margins. Because we process the tissue on-site, the patient waited comfortably in our clinic between stages. Once the cancer was entirely removed, Dr. Whitfield performed a complex linear closure designed to hide the scar within the natural folds of the nose.</p>

          <h2>The Result</h2>
          <p>At the three-month follow-up, the surgical site had healed beautifully. The patient is cancer-free and the scar is barely visible, blending seamlessly into the natural contours of the face.</p>

          <h2>Investment</h2>
          <p>Mohs surgery is a medical procedure. In this case, it was fully covered by the patient's BCBS of TN insurance plan, subject to their standard specialist copay and deductible.</p>
        </article>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 3. Providers
create('src/app/providers/page.tsx', `
import { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Our Dermatology Providers | Whitfield Dermatology",
  description: "Meet our board-certified dermatologists and PA. Medical, surgical, and aesthetic expertise in Nashville.",
};

export default function Providers() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Sarah Whitfield, MD, FAAD"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Our Providers</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            A clinic staffed exclusively by board-certified dermatologists and specially trained providers. We believe your skin deserves the highest level of medical expertise.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="aspect-[3/4] bg-blush rounded-[14px] border border-line"></div>
          <div className="md:col-span-2 prose prose-lg prose-headings:font-fraunces prose-p:text-stone">
            <h2 className="text-3xl text-ink mb-2 mt-0">Dr. Sarah Whitfield, MD, FAAD</h2>
            <p className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-6">Founder & Mohs Surgeon</p>
            <p>Dr. Whitfield is a board-certified dermatologist and fellowship-trained Mohs surgeon. She founded Whitfield Dermatology in 2011 with a vision of providing comprehensive, uncompromising skin care under one roof.</p>
            <p>She completed her dermatology residency at Vanderbilt University Medical Center and her Mohs micrographic surgery fellowship at the Mayo Clinic.</p>
          </div>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 4. New Patients
create('src/app/new-patients/page.tsx', `
import { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "New Patients | Whitfield Dermatology",
  description: "What to expect at your first visit, what to bring, and our patient policies.",
};

export default function NewPatients() {
  return (
    <>
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Welcome to the Clinic</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">Everything you need to know before your first appointment.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg prose-headings:font-fraunces prose-headings:text-ink prose-p:text-stone max-w-none">
          <h2>What to Expect</h2>
          <p>We respect your time. When you arrive, our team will guide you through a brief registration process. You will then meet with your board-certified dermatologist for a comprehensive evaluation. We listen to your concerns, perform necessary exams, and develop a clear treatment plan.</p>
          
          <h2>What to Bring</h2>
          <ul>
            <li>Your driver's license or government-issued ID</li>
            <li>Your current insurance card</li>
            <li>A list of current medications and skincare products</li>
            <li>Any relevant medical records regarding your skin condition</li>
          </ul>
        </article>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 5. Financing
create('src/app/financing-insurance/page.tsx', `
import { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Financing & Insurance | Whitfield Dermatology",
  description: "We accept most major insurance plans and offer CareCredit financing for cosmetic procedures.",
};

export default function Financing() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Do you accept Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we accept Medicare and most major commercial insurance plans."
      }
    }]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Financing & Insurance</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">Transparent pricing and clear insurance policies so you can focus on your health.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg prose-headings:font-fraunces prose-headings:text-ink prose-p:text-stone max-w-none">
          <h2>Accepted Insurance Plans</h2>
          <p>We are in-network with most major carriers for medical dermatology services (like skin checks, acne treatment, and Mohs surgery). These include:</p>
          <ul>
            <li>BlueCross BlueShield of Tennessee</li>
            <li>Aetna</li>
            <li>Cigna</li>
            <li>UnitedHealthcare</li>
            <li>Humana</li>
            <li>Medicare</li>
          </ul>
          <p>Please note that cosmetic procedures (like Botox or laser hair removal) are not covered by insurance and are strictly self-pay.</p>
          
          <h2>Self-Pay & Financing</h2>
          <p>We believe in transparent pricing for our self-pay patients and cosmetic services. We will always provide a clear quote before any treatment begins. For larger treatment plans, we accept CareCredit, which offers flexible financing options.</p>
        </article>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 6. Testimonials
create('src/app/testimonials/page.tsx', `
import { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Whitfield Dermatology",
  description: "Read what our patients have to say. 4.9 stars across 427 reviews.",
};

export default function Testimonials() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": siteConfig.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "427"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Michael T." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "The gold standard of care in Nashville."
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-4">★ 4.9 AVERAGE RATING</p>
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Patient Reviews</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[14px] border border-line">
            <div className="flex text-rose mb-4">★★★★★</div>
            <p className="text-lg text-ink font-medium mb-2">"The gold standard of care in Nashville."</p>
            <p className="text-stone">"I've been a patient here for three years. The entire staff is incredibly professional. Dr. Whitfield caught a melanoma early during my annual check. I owe my health to their thoroughness."</p>
            <p className="text-sm font-medium text-stone mt-4">— Michael T.</p>
          </div>
          <div className="bg-white p-8 rounded-[14px] border border-line">
            <div className="flex text-rose mb-4">★★★★★</div>
            <p className="text-lg text-ink font-medium mb-2">"Finally, clear skin after years of struggling."</p>
            <p className="text-stone">"I came in for severe adult acne after trying every med spa in town. Dr. Osei prescribed an actual medical regimen that worked in months. Truly life-changing."</p>
            <p className="text-sm font-medium text-stone mt-4">— Sarah J.</p>
          </div>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 7. FAQ
create('src/app/faq/page.tsx', `
import { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Whitfield Dermatology",
  description: "Answers to common questions about appointments, insurance, and treatments.",
};

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are you accepting new patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are currently accepting new patients."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          <details className="bg-white border border-line rounded-[14px] group">
            <summary className="p-6 text-lg font-medium text-ink cursor-pointer list-none flex justify-between items-center">
              Are you accepting new patients?
              <span className="text-rose group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
            </summary>
            <div className="px-6 pb-6 text-stone">Yes, we are currently accepting new patients. We strive to offer same-week appointments whenever possible.</div>
          </details>
          <details className="bg-white border border-line rounded-[14px] group">
            <summary className="p-6 text-lg font-medium text-ink cursor-pointer list-none flex justify-between items-center">
              Do I need a referral to see a dermatologist?
              <span className="text-rose group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
            </summary>
            <div className="px-6 pb-6 text-stone">In most cases, no. However, if you have an HMO insurance plan, your provider may require a referral from your primary care physician.</div>
          </details>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 8. Blog Hub
create('src/app/blog/page.tsx', `
import { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Dermatology Blog | Whitfield Dermatology",
  description: "Expert skincare advice and clinical insights from our board-certified dermatologists.",
};

export default function BlogHub() {
  const posts = [
    { slug: 'dermatologist-cost-nashville', title: 'How Much Does a Dermatologist Visit Cost in Nashville?', date: 'Oct 12, 2023' },
    { slug: 'skin-check-guide', title: 'What Really Happens During a Skin Check', date: 'Sep 28, 2023' },
    { slug: 'hair-transplant-guide', title: 'Hair Transplants: An Honest Guide from Nashville Dermatologists', date: 'Aug 14, 2023' }
  ];

  return (
    <>
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Clinical Insights</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">Evidence-based skincare advice from our physicians.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(p => (
            <Link key={p.slug} href={\`/blog/\${p.slug}\`} className="group bg-white border border-line rounded-[14px] p-6 hover:border-rose transition-all shadow-sm flex flex-col h-full">
              <p className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-3">{p.date}</p>
              <h2 className="text-xl font-fraunces text-ink mb-4 group-hover:text-rose transition-colors">{p.title}</h2>
              <div className="mt-auto text-sm font-medium text-rose-deep">Read article &rarr;</div>
            </Link>
          ))}
        </div>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 9. Blog Post
create('src/app/blog/[slug]/page.tsx', `
import { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dermatology Article | Whitfield Dermatology",
  description: "Read our latest clinical insights on dermatology.",
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does a Dermatologist Visit Cost in Nashville?",
    "author": {
      "@type": "Organization",
      "name": siteConfig.name
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-4 text-center">CLINICAL INSIGHTS</p>
        <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-12 text-center">How Much Does a Dermatologist Visit Cost in Nashville?</h1>
        <article className="prose prose-lg prose-headings:font-fraunces prose-headings:text-ink prose-p:text-stone max-w-none">
          <p>Navigating healthcare costs can be confusing. When you schedule a visit to a dermatologist, you want clear answers about what you'll be expected to pay. As a medical practice in Nashville, we believe in complete transparency.</p>
          
          <h2>Medical vs. Cosmetic Dermatology</h2>
          <p>The first factor in determining cost is the nature of your visit. Medical dermatology concerns—such as skin cancer screenings, acne treatments, rashes, or suspicious mole evaluations—are typically billed to your health insurance.</p>
          
          <h2>With Insurance</h2>
          <p>If you have health insurance, your cost is usually determined by your specialist copay or your deductible. We accept most major plans in Tennessee. For a standard medical visit, patients often pay a copay ranging from $40 to $80.</p>

          <h2>Self-Pay Pricing</h2>
          <p>For patients without insurance, or for cosmetic treatments like Botox, fillers, or chemical peels, we offer transparent self-pay pricing. A comprehensive initial consultation for a self-pay patient typically ranges between $150 and $250. This covers a thorough evaluation by a board-certified dermatologist.</p>
          
          <p>We will never begin a procedure without outlining the costs first. Your health—and your peace of mind—are our priorities.</p>
        </article>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 10. Areas Hub
create('src/app/areas/page.tsx', `
import { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Areas We Serve | Whitfield Dermatology",
  description: "Providing expert dermatology care to patients across Middle Tennessee.",
};

export default function AreasHub() {
  const areas = ['Nashville', 'Franklin', 'Brentwood', 'Murfreesboro', 'Hendersonville', 'Mt. Juliet', 'Spring Hill', 'Gallatin'];
  
  return (
    <>
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Areas We Serve</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">Located in Green Hills, we serve patients from all across Middle Tennessee.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {areas.map(a => (
            <li key={a}>
              <Link href={\`/areas/\${a.toLowerCase().replace('.', '').replace(' ', '-')}-tn\`} className="text-lg text-ink font-medium hover:text-rose transition-colors">
                {a}, TN
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <CtaBand />
    </>
  );
}
`);

// 11. Contact
create('src/app/contact/page.tsx', `
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Whitfield Dermatology",
  description: "Contact Whitfield Dermatology in Nashville, TN to schedule an appointment.",
};

export default function Contact() {
  return (
    <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Get in Touch</h1>
          <p className="text-lg text-stone mb-12">We are here to help. Contact us to schedule an appointment or ask a question.</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-2">Location</h3>
              <p className="text-lg text-ink font-medium">{siteConfig.location.address}</p>
              <p className="text-stone">{siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}</p>
              <p className="text-sm text-stone mt-2 italic">Note: Ample free parking is available in the garage behind the building.</p>
            </div>
            
            <div>
              <h3 className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-2">Contact</h3>
              <p className="text-lg text-ink font-medium"><a href={\`tel:\${siteConfig.contact.phone.replace(/\\D/g, '')}\`} className="hover:text-rose transition-colors">{siteConfig.contact.phone}</a></p>
              <p className="text-stone"><a href={\`mailto:\${siteConfig.contact.email}\`} className="hover:text-rose transition-colors">{siteConfig.contact.email}</a></p>
            </div>
            
            <div>
              <h3 className="text-[12px] font-medium tracking-[0.14em] text-rose-deep uppercase mb-2">Hours</h3>
              <p className="text-lg text-ink font-medium">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-line rounded-[14px] p-8 shadow-sm">
          <h2 className="text-2xl font-fraunces text-ink mb-6">Send a Message</h2>
          <form className="space-y-6" action="/api/contact" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full border border-line rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 bg-cream/50" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full border border-line rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 bg-cream/50" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" required className="w-full border border-line rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 bg-cream/50" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Message</label>
              <textarea id="message" name="message" rows="4" required className="w-full border border-line rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 bg-cream/50" placeholder="Please do not include sensitive medical information in this form."></textarea>
            </div>
            <button type="submit" className="w-full bg-rose text-white px-8 py-4 rounded-full text-base font-medium hover:bg-rose-deep transition-colors shadow-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
`);

// 12. Book
create('src/app/book/page.tsx', `
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment | Whitfield Dermatology",
  description: "Schedule your dermatology appointment in Nashville online.",
};

export default function Book() {
  return (
    <div className="bg-cream pt-16 pb-32 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center">
      <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6 text-center">Book Your Appointment</h1>
      <p className="text-lg text-stone max-w-2xl text-center mb-12">
        Select your reason for visit below to find a time that works for you.
      </p>
      
      <div className="w-full max-w-3xl bg-white border border-line rounded-[14px] p-12 text-center shadow-sm min-h-[400px] flex items-center justify-center">
        {/* Real scheduling widget (e.g. Nexhealth, Zocdoc) integrates here */}
        <p className="text-stone italic">The scheduling widget will load here.</p>
      </div>
    </div>
  );
}
`);

// 13. Legal pages
const legalPages = ['privacy-policy', 'terms', 'hipaa-notice'];
legalPages.forEach(p => {
  const title = p.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  create(`src/app/${p}/page.tsx`, `
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "\${title} | Whitfield Dermatology",
};

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-12">\${title}</h1>
      <article className="prose prose-lg prose-headings:font-fraunces prose-headings:text-ink prose-p:text-stone max-w-none">
        <p>This page contains the official \${title.toLowerCase()} for Whitfield Dermatology. Please contact our office if you require a printed copy.</p>
        <p>Last updated: October 2025</p>
      </article>
    </div>
  );
}
`);
});

// 14. API Contact route
create('src/app/api/contact/route.ts', `
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Validate only basic contact info, no health data
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // In production, send email or save to secure CRM here
    console.log('Contact form submission received:', { name, email, phone });
    
    return NextResponse.redirect(new URL('/contact?success=true', request.url));
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
`);
console.log("Generated remaining pages.");
