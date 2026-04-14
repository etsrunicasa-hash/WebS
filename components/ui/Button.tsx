import type { ButtonHTMLAttributes, JSX, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md border text-sm font-medium tracking-[0.02em] transition focus-visible:outline-none";

const sizeClasses = {
  md: "min-h-11 px-4 py-2.5",
  lg: "min-h-12 px-5 py-3",
};

const variantClasses = {
  primary:
    "border-brand-primary bg-brand-primary text-white hover:border-brand-secondary hover:bg-brand-secondary",
  secondary:
    "border-line bg-white/70 text-ink hover:border-brand-primary hover:text-brand-primary",
  ghost: "border-transparent bg-transparent text-ink hover:bg-black/4",
};

type ButtonStylesInput = {
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
};

export function buttonStyles({
  className,
  size = "md",
  variant = "primary",
}: ButtonStylesInput = {}) {
  return cn(baseClasses, sizeClasses[size], variantClasses[variant], className);
}

export function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={buttonStyles({ className, size, variant })} {...props}>
      {children}
    </button>
  );
}
