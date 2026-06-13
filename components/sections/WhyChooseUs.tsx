import {
  BadgeCheck,
  HeartPulse,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { clinic } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const reasons = [
  {
    title: "Experienced Dental Team",
    description:
      "Care is guided by 10+ years of clinical experience and specialist support for different dental needs.",
    icon: Users,
  },
  {
    title: "Technology-Supported Evaluation",
    description:
      "Technology supports evaluation and planning so patients can understand the condition before treatment starts.",
    icon: Sparkles,
  },
  {
    title: "Personalized Treatment Plans",
    description:
      "Recommendations are based on the patient's dental condition, comfort, timing and long-term oral health.",
    icon: Stethoscope,
  },
  {
    title: "Transparent Consultation",
    description:
      "The team explains what is happening, why treatment may be needed and what choices are available.",
    icon: ShieldCheck,
  },
  {
    title: "Comfortable Patient Experience",
    description:
      "Calm communication helps anxious patients and first-time visitors feel more prepared during care.",
    icon: HeartPulse,
  },
  {
    title: "Emergency Dental Support",
    description:
      "Patients with severe pain, swelling or dental injury can call for timely emergency guidance.",
    icon: HeartPulse,
  },
  {
    title: "Affordable Care",
    description:
      "Treatment choices are discussed with attention to clinical need, comfort and affordability.",
    icon: BadgeCheck,
  },
  {
    title: "Multispeciality Expertise",
    description:
      "General, cosmetic, orthodontic, oral surgery, endodontic and pediatric care are available under one hospital.",
    icon: Stethoscope,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Why Patients Choose Us"
          title="Dental Care That Feels Clear Before It Feels Clinical"
          description="Patients come with different worries: tooth pain, missing teeth, braces, a child's visit, a smile concern or an emergency. The first responsibility is to make the problem understandable."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <MotionReveal key={reason.title} delay={index * 0.035}>
                <article className="group h-full rounded-[1.75rem] border border-border-soft bg-[#f8fbfd] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500 hover:bg-white hover:shadow-2xl hover:shadow-navy-950/10">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-navy-950 shadow-sm transition group-hover:bg-navy-950 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-navy-950">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2rem] bg-navy-950 p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-500">
              Not Sure Where to Start?
            </p>
            <p className="mt-2 max-w-2xl text-xl font-extrabold tracking-[-0.03em] sm:text-[1.35rem]">
              Call the dental team and describe your concern before you visit.
            </p>
          </div>
          <ButtonLink href={clinic.phoneHref} variant="emergency" className="mt-6 w-full sm:mt-0 sm:w-auto">
            <Phone aria-hidden="true" className="size-4" />
            Call for Guidance
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
