import { View, Text, Pressable, PressableProps } from "react-native";
import React from "react";
import { cn } from "@/lib/utils";

type ChipsButtonProps = Omit<PressableProps, "children"> & {
  icon: string;
  label: string;
  selected: boolean;
};

const ChipsButton = ({ icon, label, selected, className, ...props }: ChipsButtonProps) => {
  return (
    <Pressable
      className={cn(
        "flex-row active:opacity-40 items-center border border-transparent bg-card justify-between px-4 py-6 flex-1 rounded-md elevation-lg",
        selected && "border-primary",
        className,
      )}
      {...props}
    >
      <View className="flex-row items-center">
        <Text className="text-lg">{icon}</Text>
        <Text className="ml-4 text-lg text-foreground">{label}</Text>
      </View>
    </Pressable>
  );
};

export default ChipsButton;
