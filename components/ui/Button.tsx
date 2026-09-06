import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "teal" | "outline-light";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      icon,
      iconPosition = "right",
      className,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5 font-medium",
      md: "text-sm px-5 py-2.5 rounded-xl gap-2 font-semibold",
      lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold",
    };

    const variantClasses = {
      primary:
        "bg-brand-600 hover:bg-brand-700 text-white shadow-primaryGlow hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-brand-100 hover:bg-brand-200 text-brand-700 font-semibold transition-all duration-150",
      teal:
        "bg-teal-500 hover:bg-teal-600 text-white shadow-tealGlow hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
      outline:
        "border-1.5 border-slate-300 hover:border-brand-600 hover:bg-brand-50/50 text-slate-800 hover:text-brand-700 transition-all duration-150",
      "outline-light":
        "border-1.5 border-white/30 hover:border-white hover:bg-white/10 text-white transition-all duration-150",
      ghost:
        "hover:bg-slate-100 text-slate-700 hover:text-brand-600 transition-colors",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
