import { ArrowRight } from "lucide-react";
import { clinic, treatments } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedTreatments() {
  return (
    <section id="treatments" className="bg-[#f7fafc] py-14 sm:py-16 lg:py-20">
      <div className="container-premium">
        <SectionHeader
          eyebrow="Treatment Guidance"
          title="Care for the Dental Concerns Patients Usually Delay"
          description="Tooth pain, missing teeth, braces, aligners, smile changes and children's dental visits become easier to handle when the problem is explained clearly first."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;

            return (
              <MotionReveal key={treatment.title} delay={index * 0.045}>
                <article className="group flex h-full flex-col rounded-[2rem] border border-border-soft bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-2xl hover:shadow-navy-950/10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-navy-950 transition group-hover:bg-navy-950 group-hover:text-white">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>
                    <span className="rounded-full bg-cream-50 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-gold-700">
                      Patient Concern
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-navy-950 sm:text-[1.35rem]">
                    {treatment.seoTitle}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {treatment.description}
                  </p>
                  <div className="mt-5 rounded-2xl bg-[#f8fbfd] p-4">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-600">
                      What This Helps With
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {treatment.benefit}
                    </p>
                  </div>
                  <ButtonLink
                    href={clinic.whatsappHref}
                    variant="secondary"
                    className="mt-6 w-full px-5 sm:w-auto"
                    ariaLabel={`${treatment.cta} at Sri Maatha Dental`}
                  >
                    {treatment.cta}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition group-hover:translate-x-1"
                    />
                  </ButtonLink>
                </article>
              </MotionReveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href={clinic.whatsappHref} variant="whatsapp">
            WhatsApp Your Treatment Question
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
