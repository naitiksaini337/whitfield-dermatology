import Link from "next/link";
import { siteConfig } from "@/config/site";

export function CtaBand() {
  return (
    <section className="bg-blush py-16 px-4 sm:px-6 lg:px-8 border-t border-line text-center mt-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-fraunces text-ink mb-6">Ready for healthy skin?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link href="/book" className="bg-rose text-white px-8 py-4 rounded-full text-base font-medium hover:bg-rose-deep transition-colors w-full sm:w-auto shadow-sm">
            Book an Appointment
          </Link>
          <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="px-8 py-4 rounded-full text-base font-medium text-ink border border-line hover:border-rose transition-colors w-full sm:w-auto bg-white">
            {siteConfig.contact.phone}
          </a>
        </div>
        <p className="text-sm text-stone">{siteConfig.location.address}, {siteConfig.location.city}</p>
      </div>
    </section>
  );
}
