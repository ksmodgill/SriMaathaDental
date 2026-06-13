import { Clock, HeartPulse, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LazyMap } from "@/components/ui/LazyMap";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clinic } from "@/data/site";

const contactDetails = [
  {
    label: "Phone Number",
    value: clinic.phone,
    href: clinic.phoneHref,
    icon: Phone,
  },
  {
    label: "Emergency Number",
    value: clinic.emergencyPhone,
    href: clinic.emergencyHref,
    icon: HeartPulse,
  },
  {
    label: "Email",
    value: clinic.email,
    href: clinic.emailHref,
    icon: Mail,
    wide: true,
  },
  {
    label: "Address",
    value: clinic.fullAddress,
    href: clinic.googleBusinessHref,
    icon: MapPin,
    wide: true,
  },
];

export function ContactLocation() {
  return (
    <section id="contact" className="bg-[#f7fafc] py-14 sm:py-16 lg:py-20">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Contact & Location"
          title="Visit Sri Maatha Multispeciality Dental Hospital in Karimnagar"
          description="Call the clinic, WhatsApp your dental concern, or open directions to Doctor Street, Azmath Pura before you visit."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                const external = detail.href.startsWith("http");

                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`group rounded-[1.75rem] border border-border-soft bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-2xl hover:shadow-navy-950/10 ${detail.wide ? "sm:col-span-2" : ""}`}
                    style={{ transitionDelay: `${index * 20}ms` }}
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-navy-950 transition group-hover:bg-navy-950 group-hover:text-white">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                      {detail.label}
                    </p>
                    <p className="mt-2 break-words text-base font-extrabold leading-7 text-navy-950">
                      {detail.value}
                    </p>
                  </a>
                );
              })}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="h-full overflow-hidden rounded-[2rem] border border-border-soft bg-white shadow-sm">
              <div className="relative min-h-72 overflow-hidden bg-blue-50">
                <LazyMap
                  title="Google Map location for Sri Maatha Multispeciality Dental Hospital"
                  src={clinic.mapEmbedSrc}
                />
              </div>

              <div className="p-6">
                <div className="mb-5 rounded-[1.5rem] bg-navy-950 p-5 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-500">
                    Map & Directions
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                    Doctor Street, Azmath Pura, Karimnagar
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/84">
                    Use Google Maps to find the hospital beside Sudha Nursing
                    Home and plan your visit.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-[#f8fbfd] p-5">
                  <div className="flex items-start gap-3">
                    <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-700" />
                    <div className="text-sm leading-7 text-slate-600">
                      <p className="font-extrabold text-navy-950">
                        Business Hours
                      </p>
                      <p>{clinic.weekdayHours}</p>
                      <p>{clinic.sundayHours}</p>
                      <p>{clinic.emergencyHours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <ButtonLink href={clinic.phoneHref} variant="emergency" className="w-full">
                    <Phone aria-hidden="true" className="size-4" />
                    Call the Clinic
                  </ButtonLink>
                  <ButtonLink href={clinic.whatsappHref} variant="whatsapp" className="w-full">
                    <MessageCircle aria-hidden="true" className="size-4" />
                    WhatsApp Your Concern
                  </ButtonLink>
                  <ButtonLink href={clinic.googleBusinessHref} variant="secondary" className="w-full">
                    <MapPin aria-hidden="true" className="size-4" />
                    Open Google Profile
                  </ButtonLink>
                  <ButtonLink href={clinic.directionsHref} variant="secondary" className="w-full">
                    <Navigation aria-hidden="true" className="size-4" />
                    Get Directions
                  </ButtonLink>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
