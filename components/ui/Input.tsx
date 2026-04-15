import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const baseClasses =
  "min-h-12 w-full rounded-md border border-line bg-white/90 px-4 text-base text-ink outline-none placeholder:text-ink-muted/80 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 sm:text-sm";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return <input className={cn(baseClasses, className)} ref={ref} {...props} />;
  },
);

Input.displayName = "Input";
