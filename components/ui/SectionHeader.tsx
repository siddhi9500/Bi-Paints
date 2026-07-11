import { Sparkle, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
  icon?: LucideIcon;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
  icon: Icon = Sparkle,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 text-small font-medium uppercase tracking-[0.14em]",
          light ? "text-white/70" : "text-primary"
        )}
      >
        <Icon size={14} strokeWidth={2} fill={Icon === Sparkle ? "currentColor" : "none"} />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-h2 font-normal max-w-xl",
          light ? "text-white" : "text-heading"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-body max-w-lg",
            light ? "text-white/70" : "text-ink"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
