import { Star } from "lucide-react";
import { clinic } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MotionReveal } from "@/components/ui/MotionReveal";

const reviews = [
  {
    initials: "DR",
    label: "Doctor Explains First",
    text: "Patients often feel more confident when the doctor listens first, explains the dental problem and then discusses the treatment choices.",
  },
  {
    initials: "CF",
    label: "Comfort Before Treatment",
    text: "For anxious patients, knowing the steps before treatment can make the visit feel calmer and more manageable.",
  },
  {
    initials: "RC",
    label: "Root Canal Clarity",
    text: "Patients with severe tooth pain want to know whether the tooth can be saved, how infection is handled and what recovery may involve.",
  },
  {
    initials: "DI",
    label: "Implant Planning",
    text: "Implant patients need a careful assessment of missing teeth, bone support, timing and long-term replacement options before deciding.",
  },
  {
    initials: "CH",
    label: "Children's Visits",
    text: "Parents value gentle communication, preventive guidance and a visit that helps children feel less afraid of dental care.",
  },
  {
    initials: "CC",
    label: "Clean Clinical Setting",
    text: "A clean, organized hospital environment matters to families when choosing where to go for treatment.",
  },
  {
    initials: "PS",
    label: "Staff Support",
    text: "Helpful communication from the team makes calls, visits, timing and follow-up easier for patients.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-navy-950 py-14 text-white sm:py-16 lg:py-20">
      <div className="container-premium">
        <MotionReveal>
          <div className="grid gap-6 rounded-[2rem] border border-white/12 bg-white/8 p-6 premium-shadow sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center lg:p-10">
            <div className="lg:min-w-[250px]">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-500 sm:text-sm">
                Google Rating
              </p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-black tracking-[-0.07em] sm:text-6xl">
                  {clinic.rating}
                </span>
                <span className="pb-3 text-lg font-bold text-white/84">
                  / 5
                </span>
              </div>
              <div className="mt-4 flex gap-1 text-gold-500" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-6 fill-current" aria-hidden="true" />
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-500 sm:text-sm">
                Patient Reviews
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl lg:text-[2.125rem] lg:leading-tight">
                A 5.0 Google Rating Helps New Patients Feel Safer Calling
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/84 sm:text-[1.0625rem]">
                When families in Karimnagar compare dental hospitals, a public
                Google rating gives them one more reason to call, ask questions
                and choose care with confidence.
              </p>
              <ButtonLink
                href="https://www.google.com/search?q=Sri+Maatha+Multispeciality+Dental+Hospital+Karimnagar+reviews"
                variant="emergency"
                className="mt-6"
              >
                Read More Reviews
              </ButtonLink>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="mt-10">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500 sm:text-sm">
                What Patients Often Look For
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/82">
                These patient-facing themes reflect the concerns people usually
                evaluate before choosing a dentist: clarity, comfort, cleanliness
                and support.
              </p>
            </div>

            <div
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              aria-label="Patient review themes"
            >
              {reviews.map((review) => (
                <article
                  key={review.label}
                  className="rounded-[1.75rem] border border-white/14 bg-white p-6 text-navy-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-2xl hover:shadow-navy-950/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-black text-navy-950">
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-navy-950">
                        {review.label}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
                        Patient Concern
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-1 text-gold-500" aria-label="5 star review theme">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {review.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
