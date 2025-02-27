import React from "react";
import { SafeAreaView as SAV } from "react-native-safe-area-context";
import LoadingScreen from "../loaders/loading-screen";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/hooks/use-color-schema";

type Props = {
  loading?: boolean;
  children: React.ReactNode;
};

const SafeAreaView = ({ loading, children }: Props) => {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <SAV className="bg-background h-full">
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      {loading ? (
        <LoadingScreen />
      ) : (
        <ScrollView
          contentContainerStyle={{
            height: "100%",
          }}
        >
          {children}
        </ScrollView>
      )}
    </SAV>
  );
};

export default SafeAreaView;
