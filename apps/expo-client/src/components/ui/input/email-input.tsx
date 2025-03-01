import { cn } from "@/lib/utils";
import * as React from "react";
import { TextInput, View, type TextInputProps } from "react-native";
import Icon from "../icon";
import { MailIcon } from "lucide-react-native";

export type EmailInputProps = Omit<TextInputProps, "inputMode"> & {
  error?: boolean;
};

export const EmailInput = React.forwardRef<React.ElementRef<typeof TextInput>, EmailInputProps>(
  ({ className, placeholderClassName, onChangeText, error, ...props }, ref) => {
    return (
      <View
        className={cn(
          "h-12 rounded-md border border-input bg-background px-3 flex-row justify-center items-center",
          error && "border-destructive",
          props.editable === false && "opacity-50",
        )}
      >
        <TextInput
          ref={ref}
          inputMode="email"
          onChangeText={onChangeText || (props.onChange as unknown as (text: string) => void)}
          className={cn(
            "text-base lg:text-sm flex-1 native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground",
            className,
          )}
          placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
          {...props}
        />

        <Icon icon={MailIcon} color={"muted"} />
      </View>
    );
  },
);

EmailInput.displayName = "EmailInput";
