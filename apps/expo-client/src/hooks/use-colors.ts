import { COLORS } from "@/constants/colors";
import { useColorScheme } from "./use-color-schema";

/**
 *  Hook to get the current color scheme, which is according to the device's theme.
 */
const useColors = () => {
  const { colorScheme } = useColorScheme();

  return COLORS[colorScheme];
};

export default useColors;
