import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@rn-primitives/avatar";
import * as React from "react";
import { Text } from "./text";

const Avatar = React.forwardRef<AvatarPrimitive.RootRef, AvatarPrimitive.RootProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 border border-muted shrink-0 overflow-hidden rounded-full bg-muted/30",
        className,
      )}
      {...props}
    />
  ),
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<AvatarPrimitive.ImageRef, AvatarPrimitive.ImageProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  ),
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

type AvatarFallbackProps = AvatarPrimitive.FallbackProps & {
  initials?: boolean;
};

const AvatarFallback = React.forwardRef<AvatarPrimitive.FallbackRef, AvatarFallbackProps>(
  ({ className, initials = true, children, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    >
      {typeof children === "string" && children.length >= 2 && initials ? (
        <Text>
          {children
            .split(" ")
            .map((word) => word[0]?.toUpperCase())
            .slice(0, 2)
            .join("")}
        </Text>
      ) : (
        children
      )}
    </AvatarPrimitive.Fallback>
  ),
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
