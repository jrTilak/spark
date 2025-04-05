import React from "react";
import { SafeAreaView as SafeAreaViewNative } from "react-native-safe-area-context";
import StatusBar from "./status-bar";

type Props = {
  children: React.ReactNode;
};

/**
 *  SafeAreaView with some default props
 */
const SafeAreaView = ({ children }: Props) => {
  return (
    <SafeAreaViewNative className="bg-background h-full flex-1">
      <StatusBar />
      {children}
    </SafeAreaViewNative>
  );
};

export default SafeAreaView;
