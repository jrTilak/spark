import React from "react";
import { SafeAreaView as SafeAreaViewNative } from "react-native-safe-area-context";
import LoadingScreen from "../loaders/loading-screen";
import { ScrollView, View } from "react-native";
import KeyboardAvoidingView from "./keyboard-avoiding-view";
import StatusBar from "./status-bar";

type Props = {
  loading?: boolean;
  children: React.ReactNode;
  scrollable?: boolean;
};

/**
 *  SafeAreaView with some default props
 */
const SafeAreaView = ({ loading, children, scrollable = true }: Props) => {
  return (
    <SafeAreaViewNative className="bg-background h-full">
      <StatusBar />
      {loading ? (
        <LoadingScreen />
      ) : (
        <KeyboardAvoidingView>
          {scrollable ? (
            <ScrollView
              contentContainerStyle={{
                height: "100%",
              }}
            >
              {children}
            </ScrollView>
          ) : (
            <View className="h-full">{children}</View>
          )}
        </KeyboardAvoidingView>
      )}
    </SafeAreaViewNative>
  );
};

export default SafeAreaView;
