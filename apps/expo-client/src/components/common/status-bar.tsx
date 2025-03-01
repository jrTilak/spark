import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import React from "react";
import { useColorScheme } from "@/hooks/use-color-schema";

export type StatusBarProps = {
  hidden?: boolean;
};

const StatusBar = ({ hidden = false }: StatusBarProps) => {
  const { isDarkColorScheme } = useColorScheme();

  return <ExpoStatusBar style={isDarkColorScheme ? "light" : "dark"} hidden={hidden} />;
};

export default StatusBar;
