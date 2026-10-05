import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-8 mt-auto border-t-[6px] border-rose">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* COLUMN 1 */}
          <div>
            <h3 className="font-fraunces text-xl font-medium mb-6 text-blush">Skin Health</h3>
            <ul className="space-y-4 text-[15px] text-cream/80">
              <li><Link href="/services/skin-cancer-screenings" className="hover:text-rose transition-colors">Screenings & Mole Checks</Link></li>
              <li><Link href="/services/acne-scars" className="hover:text-rose transition-colors">Acne & Scars</Link></li>
              <li><Link href="/services/eczema-psoriasis" className="hover:text-rose transition-colors">Eczema, Psoriasis & Chronic</Link></li>
              <li><Link href="/services/rosacea" className="hover:text-rose transition-colors">Rosacea</Link></li>
              <li><Link href="/services/pigmentation" className="hover:text-rose transition-colors">Melasma & Pigmentation</Link></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-fraunces text-xl font-medium mb-6 text-blush">Hair, Surgery & Therapies</h3>
            <ul className="space-y-4 text-[15px] text-cream/80">
              <li><Link href="/services/hair-transplant" className="hover:text-rose transition-colors">Hair Transplant</Link></li>
              <li><Link href="/services/mohs-surgery" className="hover:text-rose transition-colors">Mohs Surgery</Link></li>
              <li><Link href="/services/chemical-peels" className="hover:text-rose transition-colors">Chemical Peels</Link></li>
              <li><Link href="/services/laser-therapy" className="hover:text-rose transition-colors">Laser Therapy</Link></li>
              <li><Link href="/services/microneedling-prp" className="hover:text-rose transition-colors">Microneedling & PRP</Link></li>
              <li><Link href="/services/botox-fillers" className="hover:text-rose transition-colors">Botox & Fillers</Link></li>
              <li><Link href="/services/medical-facials" className="hover:text-rose transition-colors">Medical Facials</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-fraunces text-xl font-medium mb-6 text-blush">Clinic & Resources</h3>
            <ul className="space-y-4 text-[15px] text-cream/80">
              <li><Link href="/providers" className="hover:text-rose transition-colors">Providers</Link></li>
              <li><Link href="/new-patients" className="hover:text-rose transition-colors">New Patients</Link></li>
              <li><Link href="/results" className="hover:text-rose transition-colors">Results</Link></li>
              <li><Link href="/testimonials" className="hover:text-rose transition-colors">Testimonials</Link></li>
              <li><Link href="/financing-insurance" className="hover:text-rose transition-colors">Financing & Insurance</Link></li>
              <li><Link href="/blog" className="hover:text-rose transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-rose transition-colors">FAQ</Link></li>
              <li>
                <div className="flex flex-col mt-2">
                  <span className="text-cream mb-1">Areas Served</span>
                  <Link href="/areas/nashville-tn" className="hover:text-rose transition-colors">Nashville</Link>
                  <Link href="/areas/franklin-tn" className="hover:text-rose transition-colors">Franklin</Link>
                  <Link href="/areas/brentwood-tn" className="hover:text-rose transition-colors">Brentwood</Link>
                  <Link href="/areas" className="hover:text-rose transition-colors mt-1 font-medium">All locations &rarr;</Link>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-fraunces text-xl font-medium mb-6 text-blush">Contact & Trust</h3>
            <address className="not-italic text-[15px] text-cream/80 space-y-4 mb-6">
              <p>
                {siteConfig.location.address}<br />
                {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}
              </p>
              <p>
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="hover:text-rose transition-colors">{siteConfig.contact.phone}</a><br />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-rose transition-colors">{siteConfig.contact.email}</a>
              </p>
              <p>{siteConfig.hours}</p>
            </address>

            <div className="flex gap-4 mb-8">
              <a href="#" aria-label="Instagram" className="text-cream/80 hover:text-rose transition-colors">Instagram</a>
              <a href="#" aria-label="Facebook" className="text-cream/80 hover:text-rose transition-colors">Facebook</a>
              <a href="#" aria-label="YouTube" className="text-cream/80 hover:text-rose transition-colors">YouTube</a>
            </div>

            <Link href="/testimonials" className="inline-block bg-cream/10 rounded-full px-4 py-2 text-sm font-medium hover:bg-cream/20 transition-colors mb-6 border border-cream/20">
              <span className="text-rose mr-1">★</span> 4.9 — 427 Google Reviews
            </Link>

            <div className="flex flex-col gap-3 text-xs text-cream/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
                Board-Certified Dermatologists
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
                Same-Week Appointments
              </div>
              <Link href="/hipaa-notice" className="flex items-center gap-2 hover:text-rose transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne"></span>
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-rose/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
          <p>&copy; {new Date().getFullYear()} Whitfield Dermatology</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-rose transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-rose transition-colors">Terms</Link>
            <Link href="/hipaa-notice" className="hover:text-rose transition-colors">HIPAA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
