import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "emergency" | "whatsapp" | "ghost";
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variants = {
  primary:
    "bg-navy-950 text-white shadow-[0_18px_36px_rgba(11,31,58,0.22)] hover:bg-navy-800",
  secondary:
    "border border-border-soft bg-white text-navy-950 hover:border-navy-800 hover:bg-cream-50",
  emergency:
    "bg-navy-950 text-white shadow-[0_18px_36px_rgba(11,31,58,0.22)] hover:bg-navy-800",
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
  onClick,
}: ButtonLinkProps) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-[-0.01em] transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-navy-800",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
