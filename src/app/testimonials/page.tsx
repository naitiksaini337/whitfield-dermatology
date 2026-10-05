
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
