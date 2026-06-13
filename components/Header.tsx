"use client";

import { Clock, HeartPulse, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { clinic, navItems } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopNavItems = [
    { label: "Home", href: "#hero" },
    ...navItems.filter(
      (item) => item.label !== "Why Choose Us" && item.label !== "FAQ",
    ),
  ];
  const mobileNavItems = [{ label: "Home", href: "#hero" }, ...navItems];

  return (
    <header className="sticky top-0 z-[70] border-b border-border-soft/80 bg-white shadow-[0_18px_50px_rgba(11,31,58,0.08)]">
      <div className="container-premium flex min-h-20 items-center justify-between gap-5">
        <Link href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="group flex min-w-0 items-center gap-3 rounded-2xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800">
          <Image
            src="/favicon.png"
            alt={`${clinic.name} logo`}
            width={44}
            height={44}
            priority
            className="size-11 shrink-0 rounded-2xl object-cover shadow-lg shadow-navy-950/15"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold tracking-[-0.02em] text-navy-950 sm:text-base">
              Sri Maatha Multispeciality
            </span>
            <span className="block text-sm font-extrabold tracking-[-0.02em] text-navy-950 sm:text-base">
              Dental Hospital
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {desktopNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-navy-950 active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={clinic.phoneHref} variant="secondary" className="px-5">
            <Phone aria-hidden="true" className="size-4" />
            {clinic.phone}
          </ButtonLink>
          <ButtonLink href={clinic.whatsappHref} variant="whatsapp">
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white text-navy-950 shadow-sm transition active:scale-[0.96] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800 lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>

        <div
          id="mobile-navigation"
          className={cn(
            "absolute inset-x-0 top-full max-h-[calc(100svh-5rem)] overflow-hidden border-t border-border-soft bg-white shadow-xl shadow-navy-950/8 lg:hidden",
            isMobileMenuOpen ? "block" : "hidden",
          )}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex max-h-[calc(100svh-5rem)] flex-col"
          >
            <div className="overflow-y-auto px-4 py-4 sm:px-6">
              <section>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-navy-800">
                  Menu
                </p>
                <div className="mt-3 grid gap-1">
                  {mobileNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex min-h-12 items-center rounded-2xl bg-[#f8fbfd] px-4 py-3 text-sm font-extrabold text-navy-950 hover:bg-blue-50 active:scale-[0.99] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </section>

              <div className="my-4 h-px bg-border-soft" />

              <section>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-navy-800">
                    Clinic Contact
                  </p>
                  <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-600">
                    <a
                      href={clinic.phoneHref}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex min-h-11 items-center gap-3 rounded-xl font-bold text-navy-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy-800"
                    >
                      <Phone aria-hidden="true" className="size-4 text-navy-800" />
                      {clinic.phone}
                    </a>
                    <a
                      href={clinic.emergencyHref}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex min-h-11 items-center gap-3 rounded-xl font-bold text-navy-950 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy-800"
                    >
                      <HeartPulse aria-hidden="true" className="size-4 text-navy-800" />
                      Emergency: {clinic.emergencyPhone}
                    </a>
                    <a href={clinic.emailHref} onClick={() => setIsMobileMenuOpen(false)} className="flex min-h-11 items-center gap-3 break-all rounded-xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy-800">
                      <Mail aria-hidden="true" className="size-4 shrink-0 text-navy-800" />
                      {clinic.email}
                    </a>
                    <p className="flex min-h-11 items-start gap-3">
                      <Clock aria-hidden="true" className="mt-1 size-4 shrink-0 text-navy-800" />
                      {clinic.weekdayHours}
                    </p>
                    <a
                      href={clinic.directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex min-h-11 items-start gap-3 rounded-xl focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy-800"
                    >
                      <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-navy-800" />
                      {clinic.fullAddress}
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <section className="sticky bottom-0 border-t border-border-soft bg-white px-4 py-3 shadow-[0_-12px_28px_rgba(11,31,58,0.08)] sm:px-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-navy-800">
                Quick Actions
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <ButtonLink
                  href={clinic.phoneHref}
                  variant="secondary"
                  className="w-full border-navy-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone aria-hidden="true" className="size-4" />
                  Call Now
                </ButtonLink>
                <ButtonLink
                  href={clinic.whatsappHref}
                  variant="whatsapp"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  WhatsApp
                </ButtonLink>
              </div>
            </section>
          </nav>
        </div>
      </div>
    </header>
  );
}
