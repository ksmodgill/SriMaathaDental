import {
  CalendarCheck,
  ClipboardCheck,
  MessageCircle,
  Stethoscope,
} from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "Consultation",
    description:
      "The visit begins with your concern, whether it is pain, sensitivity, a missing tooth, braces, a child's visit or a smile goal.",
    icon: MessageCircle,
  },
  {
    title: "Diagnosis",
    description:
      "The team evaluates the condition and explains what is happening in language patients can understand.",
    icon: ClipboardCheck,
  },
  {
    title: "Treatment",
    description:
      "Treatment begins after the clinical need, comfort steps and expected sequence are clearly discussed.",
    icon: Stethoscope,
  },
  {
    title: "Follow-Up Care",
    description:
      "After treatment, the team guides recovery, home care and follow-up so the result is protected.",
    icon: CalendarCheck,
  },
];

export function PatientJourney() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Patient Journey"
          title="What Happens After You Call or Visit"
          description="Dental anxiety often comes from uncertainty. A clear journey helps patients know what will be checked, explained and planned before treatment begins."
        />

        <div className="relative mt-10 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-border-soft lg:block" />
          <div className="absolute bottom-0 left-7 top-0 w-px bg-border-soft lg:hidden" />
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <MotionReveal key={step.title} delay={index * 0.05}>
                <article className="group relative h-full rounded-[1.75rem] border border-border-soft bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-2xl hover:shadow-navy-950/10">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-navy-950 text-white shadow-lg shadow-navy-950/15 transition group-hover:bg-gold-500 group-hover:text-navy-950">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <span className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-navy-950 sm:text-[1.35rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
