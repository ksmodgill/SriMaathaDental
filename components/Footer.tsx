import { Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { clinic, navItems } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

const footerIconLinks = [
  {
    label: "Go to Sri Maatha Dental homepage",
    href: "#hero",
    icon: Globe,
  },
  {
    label: "WhatsApp Sri Maatha Dental",
    href: clinic.whatsappHref,
    icon: MessageCircle,
  },
  {
    label: "Open Sri Maatha Dental Google profile",
    href: clinic.googleBusinessHref,
    icon: Share2,
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 pb-28 pt-14 text-white lg:pb-12">
      <div className="container-premium">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_0.85fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/favicon.png"
                alt={`${clinic.name} logo`}
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-2xl object-cover"
              />
              <div className="min-w-0">
                <p className="font-black leading-tight">Sri Maatha Multispeciality</p>
                <p className="font-black leading-tight">Dental Hospital</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/84">
              Dental care in Karimnagar led by {clinic.doctor}, with a focus on
              clear diagnosis, patient comfort and transparent treatment
              planning.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/82">
              Patients can call or WhatsApp for guidance on tooth pain, implants,
              braces, clear aligners, smile concerns, child dental care and
              emergency dental support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={clinic.phoneHref} variant="secondary" className="px-5">
                Call Now
              </ButtonLink>
              <ButtonLink href={clinic.whatsappHref} variant="secondary" className="px-5">
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-50">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/84">
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue-50" />
                <a href={clinic.phoneHref} className="inline-flex min-h-11 items-center rounded-lg hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-50">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue-50" />
                <a href={clinic.emergencyHref} className="inline-flex min-h-11 items-center rounded-lg hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-50">
                  Emergency: {clinic.emergencyPhone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue-50" />
                <a href={clinic.emailHref} className="inline-flex min-h-11 items-center break-all rounded-lg hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-50">
                  {clinic.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue-50" />
                <a
                  href={clinic.directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-lg hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-50"
                >
                  {clinic.fullAddress}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3" aria-label="Clinic quick links">
              {footerIconLinks.map((item) => {
                const Icon = item.icon;
                const external = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/82 transition hover:-translate-y-0.5 hover:border-blue-50 hover:bg-white/12 hover:text-white active:translate-y-0 active:scale-[0.96] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-blue-50"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:block">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-50">
                Quick Links
              </h2>
              <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/84 sm:block sm:space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-11 min-w-11 items-center rounded-lg hover:text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-blue-50">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-6 h-px bg-white/12 sm:hidden lg:block" />

            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-50">
              Business Hours
            </h2>
            <div className="mt-5 rounded-2xl border border-white/12 bg-white/8 p-4 text-sm leading-7 text-white/86">
              <p>{clinic.weekdayHours}</p>
              <p>{clinic.sundayHours}</p>
              <p>{clinic.emergencyHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-white/12 bg-white/8 p-5 text-xs leading-6 text-white/82">
          <p>
            Disclaimer: This website offers general dental awareness and contact
            guidance only. A clinical consultation is required before diagnosis,
            treatment recommendations or cost estimates can be confirmed.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm text-white/82 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <a
            href="https://sintyz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit items-center rounded-full border border-border-soft bg-white px-4 py-2 text-sm font-black text-navy-950 transition hover:bg-blue-50 active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-blue-50"
          >
            Designed and Developed by SIntyz.com
          </a>
        </div>
      </div>
    </footer>
  );
}
