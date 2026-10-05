"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, PhoneCall, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/results", label: "Results" },
    { href: "/providers", label: "Providers" },
    { href: "/new-patients", label: "New Patients" },
    { href: "/financing-insurance", label: "Financing" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-line/70 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <span className="font-fraunces text-2xl font-medium tracking-tight text-ink group-hover:opacity-80 transition-opacity">
            Whitfield Dermatology
          </span>
          <span className="w-1.5 h-1.5 bg-rose rounded-full ml-1 mb-1 animate-pulse"></span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.href} className="group relative py-6">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 relative text-[14px] font-medium text-stone hover:text-rose-deep transition-colors tracking-wide"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-max bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-line/60 p-8 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="flex gap-12 mb-6">
                      {/* Medical */}
                      <div className="flex flex-col gap-4 min-w-[140px]">
                        <span className="text-[11px] font-bold tracking-[0.15em] text-rose-deep uppercase">Medical</span>
                        <Link href="/services/skin-cancer-screenings" className="text-sm font-medium text-ink hover:text-rose-deep transition-colors">Skin Checks</Link>
                        <Link href="/services/acne-scars" className="text-sm font-medium text-ink hover:text-rose-deep transition-colors">Acne Solutions</Link>
                      </div>
                      {/* Surgical */}
                      <div className="flex flex-col gap-4 min-w-[140px]">
                        <span className="text-[11px] font-bold tracking-[0.15em] text-rose-deep uppercase">Surgical</span>
                        <Link href="/services/mohs-surgery" className="text-sm font-medium text-ink hover:text-rose-deep transition-colors">Mohs Surgery</Link>
                      </div>
                      {/* Aesthetic */}
                      <div className="flex flex-col gap-4 min-w-[140px]">
                        <span className="text-[11px] font-bold tracking-[0.15em] text-rose-deep uppercase">Aesthetic</span>
                        <Link href="/services/botox-fillers" className="text-sm font-medium text-ink hover:text-rose-deep transition-colors">Facial Sculpting</Link>
                        <Link href="/services/laser-therapy" className="text-sm font-medium text-ink hover:text-rose-deep transition-colors">Laser Resurfacing</Link>
                      </div>
                    </div>
                    {/* Bottom Links */}
                    <div className="flex items-center justify-between pt-5 border-t border-line/60">
                      <Link href="/new-patients" className="text-sm font-medium text-stone hover:text-ink transition-colors flex items-center gap-1.5">
                        Patient Info <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="/services" className="text-sm font-medium text-stone hover:text-ink transition-colors flex items-center gap-1.5">
                        All treatments <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[14px] font-medium text-stone hover:text-rose-deep transition-colors tracking-wide py-6"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 text-[14px] font-medium text-ink hover:text-rose-deep transition-colors px-3 py-1.5 rounded-full hover:bg-blush"
          >
            <PhoneCall className="w-3.5 h-3.5 text-rose-deep" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-rose-deep text-white px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-rose transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </motion.div>
        </div>

        <button 
          className="md:hidden p-2 -mr-2 text-ink rounded-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden bg-cream/95 backdrop-blur-xl border-b border-line overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-ink hover:text-rose-deep"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-ink hover:text-rose-deep"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-line flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="text-base font-medium text-stone flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-rose-deep" />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="bg-rose-deep text-center text-white px-6 py-3 rounded-full text-base font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
