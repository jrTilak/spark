import React from "react";
import { SafeAreaView as SafeAreaViewNative } from "react-native-safe-area-context";
import LoadingScreen from "../loaders/loading-screen";
import { ScrollView } from "react-native";
import KeyboardAvoidingView from "./keyboard-avoiding-view";
import StatusBar from "./status-bar";

type Props = {
  loading?: boolean;
  children: React.ReactNode;
};

/**
 *  SafeAreaView with some default props
 */
const SafeAreaView = ({ loading, children }: Props) => {

  return (
    <SafeAreaViewNative className="bg-background h-full">
      <StatusBar />
      {loading ? (
        <LoadingScreen />
      ) : (
        <KeyboardAvoidingView>
          <ScrollView
            contentContainerStyle={{
              height: "100%",
            }}
          >
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </SafeAreaViewNative>
  );
};

export default SafeAreaView;
