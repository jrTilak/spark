import { cn } from "@/lib/utils";
import * as React from "react";
import { TextInput, View, type TextInputProps } from "react-native";
import Icon from "../icon";
import { LucideIcon } from "lucide-react-native";

export type InputWithIconProps = TextInputProps & {
  icon: LucideIcon
  error?: boolean;
};

export const InputWithIcon = React.forwardRef<React.ElementRef<typeof TextInput>, InputWithIconProps>(
  ({ className, placeholderClassName, onChangeText, icon, error, ...props }, ref) => {
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
          onChangeText={onChangeText || (props.onChange as unknown as (text: string) => void)}
          className={cn(
            "text-base lg:text-sm flex-1 native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground",
            className,
          )}
          placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
          {...props}
        />

        <Icon icon={icon} color={"muted"} />
      </View>
    );
  },
);

InputWithIcon.displayName = "InputWithIcon";
