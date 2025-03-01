import { cn } from "@/lib/utils";
import type { SlottableTextProps, TextRef } from "@rn-primitives/types";
import * as React from "react";
import { Text } from "./text";

export type H3Props = SlottableTextProps;

export const H3 = React.forwardRef<TextRef, SlottableTextProps>(({ className, ...props }, ref) => {
  return <Text className={cn("text-3xl font-bold", className)} ref={ref} {...props} />;
});

H3.displayName = "H3";
