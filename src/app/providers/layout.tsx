import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Providers | Whitfield Dermatology",
  description: "Meet our board-certified dermatologists and highly trained medical staff serving patients in Nashville, TN.",
};

export default function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
