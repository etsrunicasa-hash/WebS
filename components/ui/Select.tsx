import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const baseClasses =
  "min-h-12 w-full rounded-md border border-line bg-white/90 px-4 text-sm text-ink outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return <select className={cn(baseClasses, className)} ref={ref} {...props} />;
});

Select.displayName = "Select";
