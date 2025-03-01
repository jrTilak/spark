import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@rn-primitives/label";
import * as React from "react";

const Label = React.forwardRef<LabelPrimitive.TextRef, LabelPrimitive.TextProps>(
  ({ className, onPress, onLongPress, onPressIn, onPressOut, ...props }, ref) => (
    <LabelPrimitive.Root
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <LabelPrimitive.Text
        ref={ref}
        className={cn("text-foreground native:text-base font-medium leading-none", className)}
        {...props}
      />
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
