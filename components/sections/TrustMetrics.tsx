import { trustMetrics } from "@/data/site";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const visibleTrustMetrics = trustMetrics.filter(
  (metric) => metric.label !== "Emergency Support",
);

export function TrustMetrics() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="container-premium">
        <SectionHeader
          eyebrow="Why Patients Feel Reassured"
          title="Clear Guidance Backed by Real Clinical Experience"
          description="For many patients in Karimnagar, the first concern is not only treatment. It is knowing what is wrong, what can wait, what needs attention and what the next step will cost."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTrustMetrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <MotionReveal key={metric.label} delay={index * 0.04}>
                <article className="group h-full rounded-[1.75rem] border border-border-soft bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-2xl hover:shadow-navy-950/10">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-navy-950 transition group-hover:bg-navy-950 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-navy-950 sm:text-[2rem]">
                    {metric.value}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-navy-950">
                    {metric.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {metric.description}
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
