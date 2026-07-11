import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "group/btn inline-flex items-center gap-2.5 rounded-[10px] font-medium whitespace-nowrap transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-dark",
        outline: "border border-black/15 text-heading hover:border-primary hover:text-primary",
        white: "bg-white text-heading hover:bg-cream",
      },
      size: {
        md: "px-6 py-3 text-body",
        sm: "px-5 py-2.5 text-small",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  icon?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  href,
  onClick,
  className,
  children,
  icon = true,
  variant,
  size,
  type = "button",
}: ButtonProps) {
  const classes = cn(buttonStyles({ variant, size }), className);
  const content = (
    <>
      {children}
      {icon && (
        <span className="flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5">
          <ArrowRight size={14} strokeWidth={2.25} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
