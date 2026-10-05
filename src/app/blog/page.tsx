
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
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white border border-line rounded-[14px] p-6 hover:border-rose transition-all shadow-sm flex flex-col h-full">
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
