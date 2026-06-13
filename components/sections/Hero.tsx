import Image from "next/image";
import { MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { clinic, heroTrust } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

const doctorBlur =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlYWY0ZjgnLz48Y2lyY2xlIGN4PSc1JyBjeT0nNCcgcj0nMycgZmlsbD0nI2ZkZjhlZicvPjwvc3ZnPg==";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#eaf4f8_54%,#fdf8ef_100%)] py-12 sm:py-14 lg:py-16"
    >
      <div className="absolute right-[-10rem] top-[-12rem] -z-10 size-[34rem] rounded-full bg-navy-950/10 blur-3xl" />
      <div className="absolute bottom-[-16rem] left-[-14rem] -z-10 size-[36rem] rounded-full bg-navy-950/10 blur-3xl" />

      <div className="container-premium">
        <div className="grid items-center gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
          <div className="animate-[heroFadeUp_0.7s_ease-out_both]">
            <a
              href={clinic.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Sri Maatha Multispeciality Dental Hospital"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border-soft bg-white/84 px-4 py-2 text-sm font-bold text-navy-950 shadow-sm transition hover:border-navy-800 hover:bg-cream-50 active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800"
            >
              <MapPin aria-hidden="true" className="size-4 text-navy-800" />
              Doctor Street, Karimnagar
            </a>

            <h1 className="mt-5 text-balance text-2xl font-bold leading-[1.4] tracking-[-0.04em] text-navy-950 sm:text-[2rem] sm:leading-[1.18] lg:text-[2.5rem] lg:leading-[1.08] xl:text-[2.8rem]">
              Advanced Dental Care for Every Smile in Karimnagar
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {clinic.name} is led by {clinic.doctor}, helping families,
              working professionals and children understand their dental concern
              before choosing the next step.
            </p>

            <div
              className="mt-5 flex flex-wrap gap-3"
              aria-label="Key trust signals"
            >
              {heroTrust.map((item) => (
                <span
                  key={item}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white bg-white/78 px-4 py-2 text-sm font-bold text-navy-950 shadow-sm"
                >
                  <ShieldCheck
                    aria-hidden="true"
                    className="size-4 text-teal-800"
                  />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <ButtonLink
                href={clinic.phoneHref}
                className="w-full sm:w-auto"
                ariaLabel={`Call ${clinic.name}`}
              >
                <Phone aria-hidden="true" className="size-4" />
                Call the Dental Team
              </ButtonLink>
              <ButtonLink
                href={clinic.whatsappHref}
                variant="whatsapp"
                className="w-full sm:w-auto"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                WhatsApp Your Concern
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">
              {clinic.weekdayHours}. {clinic.sundayHours}.{" "}
              {clinic.emergencyHours}.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] animate-[heroFadeUp_0.8s_0.12s_ease-out_both]">
            <div className="glass-card premium-shadow relative overflow-hidden rounded-[2rem] p-2 sm:p-3">
              <Image
                src="/dr-vivek-reddy.png"
                alt={`${clinic.doctor}, ${clinic.doctorRole} at ${clinic.name}`}
                width={512}
                height={512}
                priority
                placeholder="blur"
                blurDataURL={doctorBlur}
                sizes="(min-width: 1024px) 512px, min(100vw - 2rem, 520px)"
                className="h-auto w-full rounded-[1.5rem] object-contain"
              />
              <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-navy-950/88 via-navy-950/42 to-transparent px-5 pb-5 pt-20 text-white sm:inset-x-3 sm:bottom-3">
                <div className="max-w-[82%]">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white sm:text-xs">
                    {clinic.doctorRole}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-tight sm:text-base">
                    {clinic.doctor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
