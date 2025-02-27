import { useColorScheme } from "./use-color-schema";
import { NAV_THEME } from "@/constants/theme";

const useColors = () => {
  const { colorScheme } = useColorScheme();

  return NAV_THEME[colorScheme];
};

export default useColors;
