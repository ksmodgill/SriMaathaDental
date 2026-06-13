import { MessageCircle, Phone, Rocket } from "lucide-react";
import Link from "next/link";
import { clinic } from "@/data/site";

export function StickyActions() {
  return (
    <>
      <a
        href="https://sintyz.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 hidden items-center gap-3 rounded-full border border-border-soft bg-white/94 px-4 py-3 text-sm font-black text-navy-950 shadow-2xl shadow-navy-950/12 backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold-500 hover:bg-cream-50 lg:flex"
        aria-label="Website by SIntyz.com"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-navy-950 text-gold-500">
          <Rocket aria-hidden="true" className="size-4" />
        </span>
        Website by SIntyz
      </a>

      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        <Link
          href={clinic.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp consultation"
          className="flex size-14 items-center justify-center rounded-full bg-teal-800 text-white shadow-2xl shadow-teal-800/30 transition hover:-translate-y-1 hover:bg-teal-900"
        >
          <MessageCircle aria-hidden="true" className="size-6" />
        </Link>
        <Link
          href={clinic.phoneHref}
          aria-label={`Call ${clinic.name}`}
          className="flex size-14 items-center justify-center rounded-full bg-gold-500 text-navy-950 shadow-2xl shadow-gold-500/30 transition hover:-translate-y-1 hover:bg-gold-600"
        >
          <Phone aria-hidden="true" className="size-6" />
        </Link>
      </div>

      <nav
        aria-label="Sticky contact actions"
        className="fixed inset-x-3 bottom-3 z-50 grid gap-2 rounded-[1.35rem] border border-border-soft bg-white/96 p-2 shadow-[0_-14px_34px_rgba(11,31,58,0.14)] backdrop-blur-xl lg:hidden"
      >
        <p className="text-center text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-600">
          Ask Sri Maatha Dental
        </p>
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={clinic.phoneHref}
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-gold-700 bg-white text-xs font-black text-gold-700"
          >
            <Phone aria-hidden="true" className="size-4" />
            Call Now
          </Link>
          <Link
            href={clinic.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-teal-800 text-xs font-black text-white"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </Link>
        </div>
      </nav>
    </>
  );
}
