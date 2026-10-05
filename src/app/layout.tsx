import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { AmbientShaderCanvas } from "@/components/visuals/AmbientShaderCanvas";
import { AuraCursor } from "@/components/visuals/AuraCursor";
import { CustomCursor } from "@/components/visuals/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Board-Certified Nashville Dermatologist`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: `${siteConfig.name} | Nashville Dermatologist`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Nashville Dermatology Practice`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Nashville Dermatologist`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Interconnected Schema Graph for Entity Optimization (GEO & SEO)
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization / Dermatology Clinic Entity
      {
        "@type": ["MedicalBusiness", "DermatologyClinic", "Organization"],
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "legalName": "Whitfield Dermatology, PLLC",
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/logo.png`,
        "image": `${siteConfig.url}/og-image.jpg`,
        "telephone": siteConfig.contact.phone,
        "email": siteConfig.contact.email,
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Credit Card, Insurance, HSA, FSA",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.location.address,
          "addressLocality": siteConfig.location.city,
          "addressRegion": siteConfig.location.state,
          "postalCode": siteConfig.location.zip,
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.1054,
          "longitude": -86.8128,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:30",
            "closes": "17:30",
          },
        ],
        "medicalSpecialty": [
          "Dermatology",
          "SurgicalDermatology",
          "CosmeticDermatology",
          "MohsSurgery",
        ],
        "sameAs": [
          "https://www.linkedin.com/company/whitfield-dermatology",
          "https://www.wikidata.org/wiki/Q11190",
          "https://maps.google.com/?cid=1084291823901928374",
          "https://www.healthgrades.com/physician/dr-sarah-whitfield-x94lm",
          "https://www.doximity.com/pub/sarah-whitfield-md",
          "https://www.instagram.com/whitfielddermatology",
          "https://www.facebook.com/whitfielddermatology",
        ],
        "founder": {
          "@id": `${siteConfig.url}/providers#dr-sarah-whitfield`,
        },
        "medicalDirector": {
          "@id": `${siteConfig.url}/providers#dr-sarah-whitfield`,
        },
        "employee": [
          { "@id": `${siteConfig.url}/providers#dr-sarah-whitfield` },
          { "@id": `${siteConfig.url}/providers#dr-amara-osei` },
          { "@id": `${siteConfig.url}/providers#dr-james-calloway` },
        ],
        "areaServed": siteConfig.areasServed.map((area) => ({
          "@type": "City",
          "name": area,
          "containedInPlace": {
            "@type": "State",
            "name": "Tennessee",
          },
        })),
      },
      // 2. WebSite Entity
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "inLanguage": "en-US",
      },
      // 3. Person Entity: Dr. Sarah Whitfield
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/providers#dr-sarah-whitfield`,
        "name": "Dr. Sarah Whitfield, MD, FAAD",
        "givenName": "Sarah",
        "familyName": "Whitfield",
        "honorificPrefix": "Dr.",
        "honorificSuffix": "MD, FAAD",
        "jobTitle": "Founder & Chief Mohs Surgeon",
        "worksFor": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "medicalSpecialty": "Mohs Micrographic Surgery & Cutaneous Oncology",
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Mayo Clinic Rochester",
            "description": "ACGME Mohs Micrographic Surgery & Cutaneous Oncology Fellowship",
          },
          {
            "@type": "EducationalOrganization",
            "name": "Vanderbilt University Medical Center",
            "description": "Dermatology Residency (Chief Resident)",
          },
          {
            "@type": "EducationalOrganization",
            "name": "University of Virginia School of Medicine",
            "description": "Doctor of Medicine (Alpha Omega Alpha)",
          },
        ],
        "sameAs": [
          "https://www.healthgrades.com/physician/dr-sarah-whitfield-x94lm",
          "https://www.doximity.com/pub/sarah-whitfield-md",
          "https://www.linkedin.com/in/sarah-whitfield-md",
        ],
      },
      // 4. Person Entity: Dr. Amara Osei
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/providers#dr-amara-osei`,
        "name": "Dr. Amara Osei, MD, FAAD",
        "givenName": "Amara",
        "familyName": "Osei",
        "honorificPrefix": "Dr.",
        "honorificSuffix": "MD, FAAD",
        "jobTitle": "Director of Aesthetic Dermatology & Photomedicine",
        "worksFor": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "medicalSpecialty": "Aesthetic Dermatology & Multi-Platform Lasers",
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Harvard Medical School",
            "description": "Doctor of Medicine (Magna Cum Laude)",
          },
          {
            "@type": "EducationalOrganization",
            "name": "Vanderbilt University Medical Center",
            "description": "Dermatology Residency",
          },
        ],
        "sameAs": [
          "https://www.healthgrades.com/physician/dr-amara-osei-y73pz",
          "https://www.doximity.com/pub/amara-osei-md",
          "https://www.linkedin.com/in/amara-osei-md",
        ],
      },
      // 5. Person Entity: Dr. James Calloway
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/providers#dr-james-calloway`,
        "name": "Dr. James Calloway, MD, FAAD",
        "givenName": "James",
        "familyName": "Calloway",
        "honorificPrefix": "Dr.",
        "honorificSuffix": "MD, FAAD",
        "jobTitle": "Surgical Specialist & Follicular Medicine",
        "worksFor": {
          "@id": `${siteConfig.url}/#organization`,
        },
        "medicalSpecialty": "Micro-FUE Hair Restoration & Cutaneous Surgery",
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Johns Hopkins University School of Medicine",
            "description": "Doctor of Medicine",
          },
          {
            "@type": "EducationalOrganization",
            "name": "Columbia University Medical Center",
            "description": "Dermatology Residency",
          },
        ],
        "sameAs": [
          "https://www.healthgrades.com/physician/dr-james-calloway-k82qm",
          "https://www.doximity.com/pub/james-calloway-md",
          "https://www.linkedin.com/in/james-calloway-md",
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="relative flex flex-col min-h-screen bg-cream text-ink font-sans selection:bg-rose/20 overflow-x-hidden">
        {/* Hardware-accelerated WebGL ambient silk & rose-gold shader */}
        <AmbientShaderCanvas />
        {/* Subtle warm cursor glow on desktop */}
        <AuraCursor />
        {/* Luxury Two-Element Precision Cursor with Warm Brass & Spring Physics */}
        <CustomCursor />
        
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
