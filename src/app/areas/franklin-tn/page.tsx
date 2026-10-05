import { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/ui/CtaBand";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dermatologist in Franklin, TN | Whitfield Dermatology",
  description: "Expert medical and cosmetic dermatology for patients from Franklin, TN. Board-certified dermatologists offering same-week appointments.",
};

export default function AreaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": siteConfig.name,
    "areaServed": {
      "@type": "City",
      "name": "Franklin",
      "containedInPlace": {
        "@type": "State",
        "name": "Tennessee"
      }
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <div className="bg-cream pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6">Expert Dermatology for Franklin Patients</h1>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Whitfield Dermatology proudly serves the Franklin community with board-certified medical, surgical, and aesthetic care. We are conveniently located just a short drive away in Green Hills.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-lg prose-headings:font-fraunces prose-headings:text-ink prose-p:text-stone max-w-none mb-16">
          <p>Finding a trusted dermatologist who understands both complex medical conditions and aesthetic goals can be challenging. Patients from Franklin regularly visit Whitfield Dermatology because we combine rigorous medical expertise with a warm, welcoming environment.</p>
          
          <p>Our clinic is staffed exclusively by board-certified dermatologists. We do not operate as a med spa; every treatment, from routine skin checks to advanced laser therapies, is evidence-based and prioritized for your health and safety.</p>

          <h2>Popular Services for Franklin Residents</h2>
          <p>While we offer comprehensive care, patients from your area frequently visit us for:</p>
          
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <Link href="/services/skin-cancer-screenings" className="bg-white border border-line rounded-[14px] p-6 hover:border-rose transition-colors">
              <h3 className="text-lg font-medium text-ink mb-2">Skin Cancer Screenings</h3>
              <p className="text-sm text-stone mb-4">Thorough, full-body exams to detect early signs of melanoma and non-melanoma skin cancers.</p>
              <span className="text-sm font-medium text-rose-deep flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></span>
            </Link>
            <Link href="/services/botox-fillers" className="bg-white border border-line rounded-[14px] p-6 hover:border-rose transition-colors">
              <h3 className="text-lg font-medium text-ink mb-2">Aesthetic Injectables</h3>
              <p className="text-sm text-stone mb-4">Subtle, natural-looking Botox and dermal fillers administered by medical experts.</p>
              <span className="text-sm font-medium text-rose-deep flex items-center">Learn more <ArrowRight className="ml-1 w-4 h-4" /></span>
            </Link>
          </div>
          
          <h2>Convenient Care for Franklin</h2>
          <p>We know your time is valuable. That is why we are committed to offering same-week appointments whenever possible. You shouldn't have to wait months to have a concerning mole checked or to begin an acne treatment plan.</p>
        </article>
      </div>

      <CtaBand />
    </>
  );
}
