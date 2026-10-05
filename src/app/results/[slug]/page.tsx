
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
