import { View } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <View className="w-full flex justify-center items-center h-full px-4">{children}</View>;
};

export default Container;
