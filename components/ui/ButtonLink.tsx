import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "emergency" | "whatsapp" | "ghost";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-navy-950 text-white shadow-[0_18px_36px_rgba(11,31,58,0.22)] hover:bg-navy-800",
  secondary:
    "border border-border-soft bg-white text-navy-950 hover:border-gold-500 hover:bg-cream-50",
  emergency:
    "bg-gold-500 text-navy-950 shadow-[0_18px_36px_rgba(201,164,92,0.25)] hover:bg-gold-600",
  whatsapp:
    "bg-teal-800 text-white shadow-[0_18px_36px_rgba(18,107,99,0.25)] hover:bg-teal-900",
  ghost: "text-navy-950 hover:bg-blue-50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-[-0.01em] transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-gold-500",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
