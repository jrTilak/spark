import LocalImage from "@/components/common/local-image";
import SafeAreaView from "@/components/common/safe-area-view";
import { H3 } from "@/components/ui/h3";
import { Platform, ScrollView, View } from "react-native";
import KeyboardAvoidingView from "@/components/common/keyboard-avoiding-view";

type Props = {
  children: React.ReactNode;
  label: string;
}

const AuthLayout = ({ children, label }: Props) => {

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View className="w-full flex justify-center px-4 py-8 mt-20">
            <LocalImage source={"logoWithName"} resizeMode="contain" className="w-[150px] h-[50px]" />

            <H3 className="mt-9 font-semibold">
              {label}
            </H3>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AuthLayout;
