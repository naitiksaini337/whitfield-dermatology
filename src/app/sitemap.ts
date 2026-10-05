import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  // Core Pages
  const routes = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/providers", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/results", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/new-patients", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/financing-insurance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/book", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/testimonials", priority: 0.75, changeFrequency: "weekly" as const },
    { url: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/areas", priority: 0.8, changeFrequency: "monthly" as const },
    // Legal & Policies
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/hipaa-notice", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // Specific Clinical Service Pages
  const serviceSlugs = [
    "mohs-surgery",
    "skin-cancer-screenings",
    "botox-fillers",
    "laser-therapy",
    "chemical-peels",
    "microneedling-prp",
    "medical-facials",
    "hair-transplant",
    "acne-scars",
    "eczema-psoriasis",
    "rosacea",
    "pigmentation",
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `/services/${slug}`,
    priority: slug === "mohs-surgery" || slug === "skin-cancer-screenings" ? 0.9 : 0.85,
    changeFrequency: "weekly" as const,
  }));

  // Geographic Service Areas in Greater Nashville Metro
  const areaSlugs = [
    "nashville-tn",
    "franklin-tn",
    "brentwood-tn",
    "murfreesboro-tn",
    "hendersonville-tn",
    "mt-juliet-tn",
    "spring-hill-tn",
    "gallatin-tn",
  ];

  const areaRoutes = areaSlugs.map((slug) => ({
    url: `/areas/${slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  // Evidence-based Clinical Articles / Blog Posts
  const blogSlugs = [
    "dermatologist-cost-nashville",
    "skin-check-guide",
    "hair-transplant-guide",
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const allEntries = [...routes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];

  return allEntries.map((entry) => ({
    url: `${baseUrl}${entry.url}`,
    lastModified: currentDate,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
