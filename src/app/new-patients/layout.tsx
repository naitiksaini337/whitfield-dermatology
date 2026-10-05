import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patients | Whitfield Dermatology",
  description: "Information for new patients at Whitfield Dermatology in Nashville, including financing, insurance, forms, and what to expect during your first visit.",
};

export default function NewPatientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
