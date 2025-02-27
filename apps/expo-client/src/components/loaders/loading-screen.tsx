import { View, ActivityIndicator, Dimensions, Platform } from "react-native";

const LoadingScreen = () => {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get("screen").height;

  return (
    <View
      className="absolute flex justify-center items-center w-full h-full bg-primary/60 z-10"
      style={{
        height: screenHeight,
      }}
    >
      <ActivityIndicator color="#fff" size={osName === "ios" ? "large" : 50} />
    </View>
  );
};

export default LoadingScreen;
