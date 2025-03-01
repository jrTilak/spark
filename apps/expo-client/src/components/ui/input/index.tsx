import { cn } from "@/lib/utils";
import * as React from "react";
import { TextInput, type TextInputProps } from "react-native";

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextInputProps & {
    error?: boolean;
  }
>(({ className, placeholderClassName, onChangeText, error, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <TextInput
      ref={ref}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={onChangeText || (props.onChange as unknown as (text: string) => void)}
      className={cn(
        "h-12 rounded-md border border-input bg-background px-3 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground file:border-0 file:bg-transparent file:font-medium ",
        isFocused && "border-primary",
        error && "border-destructive",
        props.editable === false && "opacity-50",
        className,
      )}
      placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
