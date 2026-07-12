import * as React from "react";

import { cn } from "@/lib/utils";

function Button({ className, type = "button", ...props }: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button"
      type={type}
      className={cn(
        "inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Button };
