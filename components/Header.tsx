import { Clock, HeartPulse, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { clinic, navItems } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const desktopNavItems = [
    { label: "Home", href: "#hero" },
    ...navItems.filter(
      (item) => item.label !== "Why Choose Us" && item.label !== "FAQ",
    ),
  ];

  return (
    <header className="sticky top-0 z-[70] border-b border-border-soft/80 bg-white shadow-[0_18px_50px_rgba(11,31,58,0.08)]">
      <div className="container-premium flex min-h-20 items-center justify-between gap-5">
        <Link href="#hero" className="group flex min-w-0 items-center gap-3">
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
              className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-navy-950"
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

        <input
          id="mobile-nav-toggle"
          type="checkbox"
          className="peer sr-only lg:hidden"
          aria-label="Toggle mobile menu"
        />
        <label
          htmlFor="mobile-nav-toggle"
          className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white text-navy-950 shadow-sm peer-checked:[&_.close-icon]:block peer-checked:[&_.menu-icon]:hidden lg:hidden"
        >
          <Menu aria-hidden="true" className="menu-icon size-5" />
          <X aria-hidden="true" className="close-icon hidden size-5" />
        </label>

        <div className="absolute inset-x-0 top-full hidden max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-border-soft bg-white px-4 py-4 shadow-xl shadow-navy-950/8 peer-checked:block sm:px-6 lg:hidden">
          <nav aria-label="Mobile navigation" className="pb-24">
            <section>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-700">
                Menu
              </p>
              <div className="mt-3 grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl bg-[#f8fbfd] px-4 py-3 text-sm font-extrabold text-navy-950 hover:bg-blue-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>

            <div className="my-4 h-px bg-border-soft" />

            <section>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-700">
                  Clinic Contact
                </p>
                <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-600">
                  <a
                    href={clinic.phoneHref}
                    className="flex items-center gap-3 font-bold text-navy-950"
                  >
                    <Phone aria-hidden="true" className="size-4 text-gold-700" />
                    {clinic.phone}
                  </a>
                  <a
                    href={clinic.emergencyHref}
                    className="flex items-center gap-3 font-bold text-navy-950"
                  >
                    <HeartPulse aria-hidden="true" className="size-4 text-gold-700" />
                    Emergency: {clinic.emergencyPhone}
                  </a>
                  <a href={clinic.emailHref} className="flex items-center gap-3 break-all">
                    <Mail aria-hidden="true" className="size-4 shrink-0 text-gold-700" />
                    {clinic.email}
                  </a>
                  <p className="flex items-start gap-3">
                    <Clock aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold-700" />
                    {clinic.weekdayHours}
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold-700" />
                    {clinic.fullAddress}
                  </p>
                </div>
              </div>
            </section>

            <div className="my-4 h-px bg-border-soft" />

            <section>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-700">
                Quick Actions
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <ButtonLink href={clinic.phoneHref} variant="secondary" className="w-full border-gold-500">
                  <Phone aria-hidden="true" className="size-4" />
                  Call Now
                </ButtonLink>
                <ButtonLink href={clinic.whatsappHref} variant="whatsapp" className="w-full">
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
