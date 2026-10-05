
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Whitfield Dermatology",
};

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-12">Terms</h1>
      <article className="prose prose-lg prose-headings:font-fraunces prose-headings:text-ink prose-p:text-stone max-w-none">
        <p>This page contains the official terms for Whitfield Dermatology. Please contact our office if you require a printed copy.</p>
        <p>Last updated: October 2025</p>
      </article>
    </div>
  );
}
