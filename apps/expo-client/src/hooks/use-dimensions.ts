import { Dimensions } from "react-native";
import { useEffect, useState } from "react";

export function useDimensions() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
    screen: Dimensions.get("screen"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );

    return () => subscription.remove();
  }, []);

  return dimensions;
}
