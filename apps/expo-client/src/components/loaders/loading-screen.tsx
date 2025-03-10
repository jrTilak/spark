import useColors from "@/hooks/use-colors";
import { View, ActivityIndicator, Dimensions, Platform } from "react-native";

/**
 *  Loading screen component
 */
const LoadingScreen = () => {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get("screen").height;
  const colors = useColors();

  return (
    <View
      className="absolute flex justify-center items-center w-full h-full bg-background z-10"
      style={{
        height: screenHeight,
      }}
    >
      <ActivityIndicator color={colors.foreground} size={osName === "ios" ? "large" : 50} />
    </View>
  );
};

export default LoadingScreen;
