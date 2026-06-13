import {
  BadgeCheck,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    title: "Diagnostic-Led Evaluation",
    description:
      "Evaluation comes first, so the team can identify the cause of pain, infection, alignment concerns or missing tooth problems before planning care.",
    icon: Microscope,
  },
  {
    title: "Equipment-Supported Dentistry",
    description:
      "Equipment-supported care helps the team plan general, cosmetic, orthodontic and complex treatments with better clarity.",
    icon: Sparkles,
  },
  {
    title: "Comfortable Treatment Rooms",
    description:
      "A calm treatment setting helps patients feel informed and supported, especially during longer or anxiety-producing visits.",
    icon: HeartPulse,
  },
  {
    title: "Precision Dentistry",
    description:
      "Planning is especially important for implants, root canal treatment, braces, aligners and cosmetic smile improvements.",
    icon: BadgeCheck,
  },
  {
    title: "Sterilization Standards",
    description:
      "A structured clinical environment supports safer and more organized care for every patient visit.",
    icon: ShieldCheck,
  },
];

export function TechnologyFacilities() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="container-premium">
        <MotionReveal>
          <SectionHeader
            eyebrow="Technology & Facilities"
            title="Clinical Planning That Helps Patients Understand the Next Step"
            description="Technology is valuable only when it helps the doctor explain the condition better and helps the patient make a calmer decision."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <MotionReveal key={feature.title} delay={index * 0.035}>
                  <article className="group h-full rounded-[1.5rem] border border-border-soft bg-[#f8fbfd] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold-500 hover:bg-white hover:shadow-2xl hover:shadow-navy-950/10">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-white text-navy-950 shadow-sm transition group-hover:bg-navy-950 group-hover:text-white">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-navy-950 sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
