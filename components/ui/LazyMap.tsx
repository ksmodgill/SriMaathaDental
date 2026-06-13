"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

type LazyMapProps = {
  src: string;
  title: string;
};

export function LazyMap({ src, title }: LazyMapProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(135deg,#eaf4f8_0%,#fdf8ef_100%)] p-6 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-navy-950 shadow-sm">
        <MapPin aria-hidden="true" className="size-6" />
      </div>
      <p className="mt-4 text-base font-black text-navy-950">
        Sri Maatha Dental Location
      </p>
      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
        Load the map only when you need directions. This keeps the page faster
        on mobile networks.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-navy-950 px-5 text-sm font-bold text-white transition hover:bg-navy-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
      >
        Load Map
      </button>
    </div>
  );
}
