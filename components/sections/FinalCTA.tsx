import { Clock, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { clinic } from "@/data/site";

const trustIndicators = [
  { value: "15,000+", label: "Smiles Restored" },
  { value: "10+", label: "Years Experience" },
  { value: "5", label: "Specialist Dentists" },
  { value: "Open Till", label: "9 PM" },
];

export function FinalCTA() {
  return (
    <section id="contact-actions" className="bg-navy-950 py-12 text-white sm:py-14 lg:py-16">
      <div className="container-premium">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <MotionReveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold-500">
                Ready to Speak to the Team?
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-[-0.045em] sm:text-3xl lg:text-[2.5rem] lg:leading-tight">
                Get Clear Dental Guidance Before You Decide
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/86 sm:text-lg">
                Share your concern with Sri Maatha Multispeciality Dental
                Hospital in Karimnagar. The team can guide you on timing,
                urgency and the right next step.
              </p>

              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                <ButtonLink href={clinic.phoneHref} variant="emergency" className="w-full sm:w-auto">
                  <Phone aria-hidden="true" className="size-4" />
                  Call for Dental Guidance
                </ButtonLink>
                <ButtonLink href={clinic.whatsappHref} variant="whatsapp" className="w-full sm:w-auto">
                  <MessageCircle aria-hidden="true" className="size-4" />
                  WhatsApp Your Concern
                </ButtonLink>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-4">
                {trustIndicators.map((item) => (
                  <div
                    key={`${item.value}-${item.label}`}
                    className="rounded-2xl border border-white/12 bg-white/8 p-3.5"
                  >
                    <p className="text-2xl font-black">{item.value}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/82">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="rounded-[2rem] border border-white/12 bg-white p-5 text-navy-950 shadow-2xl shadow-navy-950/20 sm:p-6">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-navy-950">
                <Clock aria-hidden="true" className="size-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                Call, WhatsApp or Visit During Clinic Hours
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                If you have pain, swelling, a broken tooth, implant questions,
                braces concerns or a child dental issue, contact the team for
                practical guidance.
              </p>
              <div className="mt-5 space-y-2.5 rounded-[1.35rem] bg-[#f8fbfd] p-4 text-sm leading-7 text-slate-600">
                <p className="font-extrabold text-navy-950">
                  {clinic.weekdayHours}
                </p>
                <p>{clinic.sundayHours}</p>
                <p>{clinic.emergencyHours}</p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <ButtonLink href={clinic.phoneHref} variant="emergency" className="w-full">
                  <Phone aria-hidden="true" className="size-4" />
                  Call the Clinic
                </ButtonLink>
                <ButtonLink href={clinic.whatsappHref} variant="whatsapp" className="w-full">
                  <MessageCircle aria-hidden="true" className="size-4" />
                  WhatsApp
                </ButtonLink>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
