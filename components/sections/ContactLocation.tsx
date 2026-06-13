import Image from "next/image";
import { Clock, HeartPulse, MapPin, Navigation, Phone, Route } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clinic } from "@/data/site";

export function ContactLocation() {
  return (
    <section id="contact" className="bg-[#f7fafc] py-14 sm:py-16 lg:py-20">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Contact & Location"
          title="Visit Sri Maatha Multispeciality Dental Hospital in Karimnagar"
          description="Open one-tap directions to Doctor Street, Azmath Pura, or call the clinic before you visit."
        />

        <MotionReveal>
          <div className="mt-10 overflow-hidden rounded-[2.25rem] border border-border-soft bg-[linear-gradient(135deg,#ffffff_0%,#eaf4f8_100%)] p-3 shadow-2xl shadow-navy-950/10 sm:p-4 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:p-5">
            <a
              href={clinic.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Sri Maatha Multispeciality Dental Hospital"
              className="group block overflow-hidden rounded-[1.75rem] bg-blue-50 shadow-sm transition active:scale-[0.99] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800"
            >
              <Image
                src="/map.png"
                alt="Map location for Sri Maatha Multispeciality Dental Hospital in Karimnagar"
                width={1024}
                height={682}
                loading="lazy"
                sizes="(min-width: 1024px) 560px, calc(100vw - 2rem)"
                className="h-full min-h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>

            <div className="p-4 sm:p-5 lg:p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-navy-950 shadow-sm">
                <Route aria-hidden="true" className="size-4" />
                One-click navigation support
              </div>

              <div className="mt-5 space-y-5">
                <a
                  href={clinic.directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open directions to Sri Maatha Multispeciality Dental Hospital"
                  className="flex items-start gap-3 rounded-[1.5rem] transition hover:bg-white/60 active:scale-[0.99] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800"
                >
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-white">
                    <MapPin aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-navy-950 sm:text-2xl">
                      Sri Maatha Multispeciality Dental Hospital
                    </h3>
                    <address className="mt-3 not-italic text-sm font-semibold leading-7 text-slate-600 sm:text-base">
                      Kubra Apartment,
                      <br />
                      Doctor Street,
                      <br />
                      Beside Sudha Nursing Home,
                      <br />
                      Azmath Pura,
                      <br />
                      Karimnagar,
                      <br />
                      Telangana 505001
                    </address>
                  </div>
                </a>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-border-soft bg-white p-4">
                    <Clock aria-hidden="true" className="size-5 text-navy-800" />
                    <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-slate-600">
                      Open
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-navy-950">
                      Mon-Sat
                      <br />
                      9:00 AM - 9:00 PM
                    </p>
                  </div>
                  <a
                    href={clinic.phoneHref}
                    className="rounded-[1.5rem] border border-border-soft bg-white p-4 transition hover:-translate-y-1 hover:border-navy-800 active:translate-y-0 active:scale-[0.99] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800"
                  >
                    <Phone aria-hidden="true" className="size-5 text-navy-800" />
                    <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-slate-600">
                      Phone
                    </p>
                    <p className="mt-2 text-sm font-semibold text-navy-950">
                      {clinic.phone}
                    </p>
                  </a>
                  <a
                    href={clinic.emergencyHref}
                    className="rounded-[1.5rem] border border-border-soft bg-white p-4 transition hover:-translate-y-1 hover:border-navy-800 active:translate-y-0 active:scale-[0.99] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800 sm:col-span-2"
                  >
                    <HeartPulse aria-hidden="true" className="size-5 text-navy-800" />
                    <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-slate-600">
                      Emergency
                    </p>
                    <p className="mt-2 text-sm font-semibold text-navy-950">
                      {clinic.emergencyPhone}
                    </p>
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <ButtonLink href={clinic.directionsHref} variant="primary" className="w-full">
                    <Navigation aria-hidden="true" className="size-4" />
                    Get Directions
                  </ButtonLink>
                  <ButtonLink href={clinic.phoneHref} variant="secondary" className="w-full">
                    <Phone aria-hidden="true" className="size-4" />
                    Call Now
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
