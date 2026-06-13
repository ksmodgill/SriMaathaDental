"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { clinic } from "@/data/site";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "SHAILESH AGRAHARI",
    initials: "SA",
    text: "I recently visited Sri Maatha Multispeciality Dental Hospital for a routine check-up and dental cleaning, and my experience was excellent. From the moment I entered the facility, I was greeted by friendly and professional staff who made me feel comfortable and at ease. The hospital was clean, modern, and well maintained.",
  },
  {
    name: "ALUMALLA SRAVANTHI",
    initials: "AS",
    text: "Thank you so much for the excellent dental care. This is a great place to take care of your teeth. The best dental care I have ever experienced. The doctor is professional and every visit has been smooth and comfortable.",
  },
  {
    name: "ANUSHA NIRUMALLA",
    initials: "AN",
    text: "I was very scared before the treatment, but the doctor was professional and friendly which immediately put me at ease. I am very happy with the service and treatment.",
  },
  {
    name: "SIRIPURAM SRINIVAS",
    initials: "SS",
    text: "I had a wonderful experience at Sri Maatha Multispeciality Dental Hospital in Karimnagar. I visited for a root canal treatment and was nervous initially, but the entire process was handled with great care and professionalism.",
  },
  {
    name: "PRAKASH UMMADI",
    initials: "PU",
    text: "Well-trained dentist who explains every procedure clearly and provides treatment with perfection.",
  },
  {
    name: "PRAVEEN REDDY",
    initials: "PR",
    text: "Thank you Sri Maatha Multispeciality Dental Hospital for providing an outstanding experience that has left a lasting positive impression on me and my family. Special thanks to Dr. Vivek Reddy.",
  },
  {
    name: "SYED ZAYA ABBAS ALI",
    initials: "SA",
    text: "Sri Maatha Multispeciality Dental Hospital is one of the best dental clinics in Karimnagar. All doctors and staff are polite and provide excellent treatment with a smile.",
  },
  {
    name: "MANOHAR REDDY ALLUMALLA",
    initials: "MA",
    text: "This is one of the best dental hospitals in Karimnagar. The way they treat patients is excellent and I am completely satisfied with the treatment I received.",
  },
  {
    name: "SAIKRISHNA BOCHKAR",
    initials: "SB",
    text: "One of the best dental care hospitals. The doctor is very friendly and supportive.",
  },
  {
    name: "VAMSHI KATAM",
    initials: "VK",
    text: "Excellent doctor, very thorough and caring. Good treatment at very affordable prices with high quality care.",
  },
  {
    name: "SARALA ALUMALLA",
    initials: "SA",
    text: "I had a great experience. One of the best clinics that provides proper treatment.",
  },
  {
    name: "SUDHAKAR KATKAM",
    initials: "SK",
    text: "Good doctor. Good treatment.",
  },
  {
    name: "N REDDY",
    initials: "NR",
    text: "A very good dental hospital in Karimnagar.",
  },
];

const initialReviews = reviews.slice(0, 6);
const additionalReviews = reviews.slice(6);

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="rounded-[1.75rem] border border-white/14 bg-white p-6 text-navy-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-2xl hover:shadow-navy-950/30">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-sm font-semibold text-navy-950">
            {review.initials}
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy-950">
              {review.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-1 text-[#f59e0b]" aria-label="5 star patient review">
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
  );
}

export function Testimonials() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="reviews" className="bg-navy-950 py-14 text-white sm:py-16 lg:py-20">
      <div className="container-premium">
        <MotionReveal>
          <div className="grid gap-6 rounded-[2rem] border border-white/12 bg-white/8 p-6 premium-shadow sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center lg:p-10">
            <div className="lg:min-w-[250px]">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-50 sm:text-sm">
                Google Rating Summary
              </p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-black tracking-[-0.07em] sm:text-6xl">
                  {clinic.rating}
                </span>
                <span className="pb-3 text-lg font-bold text-white/84">
                  / 5
                </span>
              </div>
              <div className="mt-4 flex gap-1 text-[#f59e0b]" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-6 fill-current" aria-hidden="true" />
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/10 px-4 py-2 text-sm font-bold text-white">
                <Star aria-hidden="true" className="size-4 fill-current text-[#f59e0b]" />
                {clinic.rating} Google Rating
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-50 sm:text-sm">
                Patient Reviews
              </p>
              <h2 className="mt-3 text-balance text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl lg:text-[2.125rem] lg:leading-tight">
                What Our Patients Say
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/84 sm:text-[1.0625rem]">
                Read genuine experiences shared by patients who trusted Sri
                Maatha Multispeciality Dental Hospital for their dental care
                needs.
              </p>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="mt-10">
            <div
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              aria-label="Real Google patient reviews"
            >
              {initialReviews.map((review) => (
                <ReviewCard key={review.name} review={review} />
              ))}
            </div>

            <div
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
              aria-hidden={!expanded}
            >
              <div className="overflow-hidden">
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {additionalReviews.map((review) => (
                    <ReviewCard key={review.name} review={review} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded((value) => !value)}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-border-soft bg-white px-6 py-3 text-sm font-bold text-navy-950 shadow-[0_18px_36px_rgba(255,255,255,0.12)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-50 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800"
              >
                {expanded ? "Show Less Reviews" : "View More Patient Reviews"}
              </button>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
