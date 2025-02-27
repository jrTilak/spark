import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable } from "react-native";
import { TextClassContext } from "./text";

const buttonVariants = cva("group flex flex-row items-center justify-center rounded-md gap-2", {
  variants: {
    variant: {
      default: "bg-primary active:opacity-90",
      ghost: "active:bg-accent",
      secondary: "bg-secondary active:opacity-80",
      outline: "border border-input active:bg-accent",
    },
    size: {
      default: "h-12 px-5 py-3 native:h-12",
      sm: "h-10 rounded-md px-3",
      lg: "h-16 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const buttonTextVariants = cva("text-sm native:text-base font-semibold text-foreground", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      ghost: "group-active:text-accent-foreground",
      secondary: "text-secondary-foreground group-active:text-secondary-foreground",
      outline: "group-active:text-accent-foreground",
    },
    size: {
      default: "",
      sm: "",
      lg: "native:text-lg",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
        <Pressable
          className={cn(
            props.disabled && "opacity-50",
            buttonVariants({ variant, size, className }),
          )}
          ref={ref}
          role="button"
          {...props}
        />
      </TextClassContext.Provider>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
