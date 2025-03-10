import { cn } from "@/lib/utils";
import React from "react";
import { KeyboardAvoidingView as KeyboardAvoidingViewNative, Platform } from "react-native";

type KeyboardAvoidingViewProps = React.ComponentProps<typeof KeyboardAvoidingViewNative>;

/**
 *  KeyboardAvoidingView with some default props
 */
const KeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps> = ({
  children,
  keyboardVerticalOffset = Platform.OS === "ios" ? 64 : 0,
  behavior = Platform.OS === "ios" ? "padding" : "height",
  className,
  ...props
}) => {
  return (
    <KeyboardAvoidingViewNative
      keyboardVerticalOffset={keyboardVerticalOffset}
      behavior={behavior}
      className={cn(className)}
      {...props}
    >
      {children}
    </KeyboardAvoidingViewNative>
  );
};

export default KeyboardAvoidingView;
