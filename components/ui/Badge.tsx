import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "teal" | "amber" | "coral" | "slate" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "purple",
  className,
  icon,
}: BadgeProps) {
  const variantClasses = {
    purple: "bg-brand-100 text-brand-700 border-brand-200/60",
    teal: "bg-teal-50 text-teal-700 border-teal-200/60",
    amber: "bg-amber-50 text-amber-700 border-amber-200/60",
    coral: "bg-rose-50 text-rose-700 border-rose-200/60",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    outline: "bg-transparent text-slate-700 border-slate-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border",
        variantClasses[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
