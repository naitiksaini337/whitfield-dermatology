import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dermatology Services | Whitfield Dermatology",
  description: "A definitive collection of medical, surgical, and aesthetic dermatology services. Expertly delivered by board-certified physicians in a calming environment.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
