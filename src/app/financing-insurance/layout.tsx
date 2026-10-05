import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financing & Insurance | Whitfield Dermatology",
  description: "Learn about accepted insurance plans, payment options, and financing for your dermatology treatments in Nashville.",
};

export default function FinancingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
