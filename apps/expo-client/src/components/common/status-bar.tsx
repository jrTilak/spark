import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import React from "react";
import { useColorScheme } from "@/hooks/use-color-schema";

export type StatusBarProps = {
  hidden?: boolean;
};

/**
 *  StatusBar with some default props
 */
const StatusBar = ({ hidden = false }: StatusBarProps) => {
  const { isDark } = useColorScheme();

  return <ExpoStatusBar style={isDark ? "light" : "dark"} hidden={hidden} />;
};

export default StatusBar;
