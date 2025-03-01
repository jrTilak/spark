import { cn } from "@/lib/utils";
import type { SlottableTextProps, TextRef } from "@rn-primitives/types";
import * as React from "react";
import { Text } from "./text";

export type PProps = SlottableTextProps & {
  size?: "sm" | "md" | "lg";
};

export const P = React.forwardRef<TextRef, PProps>(({ className, size = "md", ...props }, ref) => {
  return (
    <Text className={cn(`text-${size} text-muted-foreground`, className)} ref={ref} {...props} />
  );
});
P.displayName = "P";
