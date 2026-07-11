import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group rounded-3xl bg-white border border-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      {children}
    </div>
  );
}
