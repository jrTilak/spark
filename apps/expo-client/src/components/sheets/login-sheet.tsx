import React from "react";
import { Sheet, SheetButton, SheetDescription, SheetTitle } from "../ui/sheet";
import { Text } from "../ui/text";
import { View } from "react-native";
import LocalImage from "@/components/common/local-image";

const LoginSheet = () => {
  return (
    <Sheet containerProps={{ className: "h-[250px] items-center justify-center" }}>
      <SheetTitle className="text-center">Let&apos;s login!</SheetTitle>
      <SheetDescription className="text-center">
        Please choose a login method to continue.
      </SheetDescription>
      <View className="flex flex-col gap-2 flex-1 items-center justify-center w-11/12">
        <SheetButton
          onPress={(_e, sheetRef) => {
            sheetRef?.hide();
          }}
          variant={"secondary"}
          size={"lg"}
          className="w-full"
        >
          <LocalImage source="googleIcon" className="size-6" />
          <Text>Continue with Google</Text>
        </SheetButton>

      </View>
    </Sheet>
  );
};

export default LoginSheet;
