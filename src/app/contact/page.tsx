
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
              <p className="text-lg text-ink font-medium"><a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="hover:text-rose transition-colors">{siteConfig.contact.phone}</a></p>
              <p className="text-stone"><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-rose transition-colors">{siteConfig.contact.email}</a></p>
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
              <textarea id="message" name="message" rows={4} required className="w-full border border-line rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose/50 bg-cream/50" placeholder="Please do not include sensitive medical information in this form."></textarea>
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
