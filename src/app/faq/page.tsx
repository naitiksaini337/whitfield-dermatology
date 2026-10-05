
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
