import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const baseClasses =
  "min-h-36 w-full rounded-md border border-line bg-white/90 px-4 py-3 text-base text-ink outline-none placeholder:text-ink-muted/80 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 sm:text-sm";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return <textarea className={cn(baseClasses, className)} ref={ref} {...props} />;
});

Textarea.displayName = "Textarea";
