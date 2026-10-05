import { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Book an Appointment | Whitfield Dermatology",
  description: "Schedule your dermatology appointment in Nashville online.",
};

export default function Book() {
  return (
    <div className="bg-cream pt-16 pb-32 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center">
      <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-fraunces text-ink mb-6 text-center">Book Your Appointment</h1>
      <p className="text-lg text-stone max-w-2xl text-center mb-12">
        Select your reason for visit below to find a time that works for you.
      </p>
      
      <BookClient />
    </div>
  );
}
