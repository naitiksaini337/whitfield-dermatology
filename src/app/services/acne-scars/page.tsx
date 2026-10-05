import { Metadata } from "next";
import { ServiceLayout } from "@/components/layout/ServiceLayout";

export const metadata: Metadata = {
  title: "Acne & Acne Scars in Nashville, TN | Whitfield Dermatology",
  description: "Medical-grade clearing plans for teen and adult acne, plus advanced scar revision. Board-certified dermatology in Green Hills.",
};

export default function Page() {
  return (
    <ServiceLayout
      slug="acne-scars"
      title="Acne & Acne Scars"
      description="Medical-grade clearing plans for teen and adult acne, plus advanced scar revision."
      faqs={[
        { question: "Is this treatment covered by insurance?", answer: "Many medical dermatology visits are covered by insurance. Cosmetic procedures are typically self-pay. We will verify your benefits during consultation." },
        { question: "How long does a consultation take?", answer: "Initial consultations typically last 30 minutes. This gives our board-certified dermatologists ample time to review your medical history and examine your skin." },
        { question: "When will I see results?", answer: "Results vary by patient and condition. Some treatments offer immediate improvement, while others require a series of sessions over several months for optimal outcomes." }
      ]}
      relatedLinks={[
        { title: "View Patient Results", href: "/results" },
        { title: "New Patient Guide", href: "/new-patients" }
      ]}
      blogLink={{ title: "Read our latest dermatology insights", href: "/blog" }}
    >
      <p className="lead">At Whitfield Dermatology in Nashville, we approach acne & acne scars with a precise, evidence-based methodology. Our goal is not just temporary relief, but long-term skin health.</p>
      
      <h3>What happens at your visit</h3>
      <ul>
        <li><strong>Comprehensive Evaluation:</strong> We start by listening. Your medical history, previous treatments, and daily routine inform our approach.</li>
        <li><strong>Detailed Assessment:</strong> Our board-certified dermatologists examine your skin closely to ensure an accurate diagnosis.</li>
        <li><strong>Customized Plan:</strong> We outline a clear, actionable treatment plan tailored to your specific needs and lifestyle.</li>
      </ul>
      
      <h3>Good to know</h3>
      <ul>
        <li>Treatments are performed or directly supervised by board-certified dermatologists.</li>
        <li>We provide transparent pricing and clear timelines for all procedures.</li>
        <li>Our Green Hills clinic offers a comfortable, private environment for all consultations.</li>
      </ul>
      
      <h3>Why Whitfield Dermatology</h3>
      <ul>
        <li><strong>Expertise:</strong> We are a medical practice, not a med spa. Every treatment decision is rooted in medical science.</li>
        <li><strong>Accessibility:</strong> We prioritize same-week appointments because your skin concerns shouldn't wait.</li>
      </ul>
      
      <p>Whether you're dealing with a chronic condition or seeking aesthetic enhancement, our team is equipped to provide the highest standard of care in Middle Tennessee.</p>
    </ServiceLayout>
  );
}
