import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.22em] text-navy-800 sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-bold tracking-[-0.035em] text-navy-950 sm:text-3xl lg:text-[2.125rem] lg:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-[1.0625rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
