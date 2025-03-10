import { View, ViewProps } from "react-native";
import React from "react";
import { cn } from "@/lib/utils";

type Props = ViewProps;

/**
 * Container for a page to give constant padding
 */
const Container = ({ children, className }: Props) => {
  return <View className={cn("w-full flex  h-full px-4 flex-1", className)}>{children}</View>;
};

export default Container;
