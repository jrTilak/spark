import { cn } from "@/lib/utils";
import * as Slot from "@rn-primitives/slot";
import type { SlottableTextProps, TextRef } from "@rn-primitives/types";
import * as React from "react";
import { Text as RNText } from "react-native";

export const TextClassContext = React.createContext<string | undefined>(undefined);

export type TextProps = SlottableTextProps;

export const Text = React.forwardRef<TextRef, TextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;

    return (
      <Component
        className={cn("text-base font-regular text-foreground", textClass, className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Text.displayName = "Text";
