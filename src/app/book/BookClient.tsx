"use client";

import { useState } from "react";
import { Calendar, Stethoscope, Sparkles, AlertCircle, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BookClient() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const reasons = [
    {
      id: "medical",
      icon: Stethoscope,
      title: "Medical Dermatology",
      desc: "Acne, eczema, rashes, psoriasis, or general concerns."
    },
    {
      id: "annual",
      icon: Calendar,
      title: "Annual Skin Check",
      desc: "Full body exam for skin cancer screening and mole checks."
    },
    {
      id: "cosmetic",
      icon: Sparkles,
      title: "Cosmetic Consultation",
      desc: "Botox, fillers, laser treatments, or skincare regimens."
    },
    {
      id: "urgent",
      icon: AlertCircle,
      title: "Urgent / Acute Concern",
      desc: "Sudden rash, painful spot, or rapidly changing mole."
    }
  ];

  if (step === 2) {
    return (
      <div className="w-full max-w-3xl bg-white border border-line rounded-[14px] p-8 shadow-sm text-center">
        <CheckCircle2 className="w-16 h-16 text-rose mx-auto mb-6" />
        <h2 className="text-2xl font-fraunces text-ink mb-4">Request Received</h2>
        <p className="text-lg text-stone mb-8">
          Thank you for choosing Whitfield Dermatology. Our scheduling team has received your request for a {reasons.find(r => r.id === selectedReason)?.title} and will contact you shortly to confirm a time that works for you.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center bg-rose text-white px-8 py-4 rounded-full text-base font-medium hover:bg-rose-deep transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl bg-white border border-line rounded-[14px] p-8 shadow-sm">
      <h2 className="text-xl font-medium text-ink mb-6">1. Reason for Visit</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reasons.map((reason) => (
          <button 
            key={reason.id}
            onClick={() => setSelectedReason(reason.id)}
            className={`flex items-start text-left p-6 rounded-xl border transition-colors group ${selectedReason === reason.id ? 'border-rose bg-rose/5' : 'border-line hover:border-rose'}`}
          >
            <reason.icon className={`w-6 h-6 mt-1 shrink-0 ${selectedReason === reason.id ? 'text-rose' : 'text-rose'}`} />
            <div className="ml-4">
              <span className={`block font-medium transition-colors ${selectedReason === reason.id ? 'text-rose' : 'text-ink group-hover:text-rose'}`}>{reason.title}</span>
              <span className="block text-sm text-stone mt-1">{reason.desc}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-line flex items-center justify-between">
        <p className="text-sm text-stone italic">For true medical emergencies, please dial 911.</p>
        <button 
          onClick={() => setStep(2)}
          disabled={!selectedReason}
          className={`flex items-center font-medium transition-colors ${selectedReason ? 'text-rose hover:text-rose-deep' : 'text-rose opacity-50 cursor-not-allowed'}`}
        >
          Continue <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
