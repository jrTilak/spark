import { View } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
};

/**
 * Container for a page to give constant padding
 */
const Container = ({ children }: Props) => {
  return <View className="w-full flex justify-center items-center h-full px-4 flex-1">{children}</View>;
};

export default Container;
