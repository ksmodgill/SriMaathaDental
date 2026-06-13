import Image from "next/image";
import { BadgeCheck, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
import { clinic, values } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MotionReveal } from "@/components/ui/MotionReveal";

const doctorBlur =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlYWY0ZjgnLz48Y2lyY2xlIGN4PSc1JyBjeT0nNCcgcj0nMycgZmlsbD0nI2ZkZjhlZicvPjwvc3ZnPg==";

const facts = [
  { label: "Founder & Chief Dentist", icon: BadgeCheck },
  { label: "10+ Years Experience", icon: CalendarCheck },
  { label: "Established 2021", icon: ShieldCheck },
  { label: "Patient-Focused Care", icon: Sparkles },
];

export function DoctorStory() {
  return (
    <section id="doctor" className="bg-[#f7fafc] py-14 sm:py-16 lg:py-20">
      <div className="container-premium">
        <MotionReveal>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-32 w-32 rounded-full bg-navy-950/10 blur-2xl sm:block" />
              <div className="glass-card relative overflow-hidden rounded-[2rem] p-2 sm:p-3">
                <Image
                  src="/doctor-image.png"
                  alt={`${clinic.doctor} explaining dental care to a patient at ${clinic.name}`}
                  width={1024}
                  height={682}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={doctorBlur}
                  sizes="(min-width: 1024px) 590px, min(100vw - 2rem, 1024px)"
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>

            <div>
              <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.22em] text-navy-800 sm:text-sm">
                Meet the Founder
              </p>
              <h2 className="text-balance text-2xl font-bold tracking-[-0.035em] text-navy-950 sm:text-3xl lg:text-[2.125rem] lg:leading-tight">
                Meet {clinic.doctor}, the Dentist Guiding Your Care
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[1.0625rem]">
                {clinic.doctor} is the Founder & Chief Dentist of Sri Maatha
                Multispeciality Dental Hospital in Karimnagar.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[1.0625rem]">
                Sri Maatha Multispeciality Dental Hospital was founded with a
                clear vision: families in Karimnagar should be able to receive
                careful dental care without confusion, pressure or unanswered
                questions. Dr. Vivek Reddy built the hospital around diagnosis,
                explanation, comfort and transparent treatment planning.
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="mt-8 rounded-[2rem] border border-border-soft bg-white p-5 shadow-sm sm:p-6 lg:p-7">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className="flex items-center gap-3 rounded-2xl border border-border-soft bg-white p-4 shadow-sm"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-navy-950">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="text-sm font-extrabold text-navy-950">
                      {fact.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <blockquote className="mt-5 rounded-[1.75rem] border border-navy-950/20 bg-cream-50 p-5 sm:p-6">
              <p className="text-base font-bold leading-7 text-navy-950 sm:text-lg">
                A patient should never feel rushed into dental treatment. First
                we explain the condition, the options and the reason behind each
                recommendation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy-950"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </blockquote>

            <div className="mt-5">
              <ButtonLink href={clinic.whatsappHref} variant="whatsapp">
                WhatsApp the Dental Team
              </ButtonLink>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
