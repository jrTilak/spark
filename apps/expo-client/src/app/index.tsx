import Container from "@/components/common/container";
import LocalImage from "@/components/common/local-image";
import SafeAreaView from "@/components/common/safe-area-view";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/h3";
import Icon from "@/components/ui/icon";
import { P } from "@/components/ui/p";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { ChevronRightIcon } from "lucide-react-native";
import { router } from "expo-router";
import { SheetManager } from "react-native-actions-sheet";

const Welcome = () => {
  return (
    <SafeAreaView>
      <Container className="justify-center items-center">
        <LocalImage source={"logoWithName"} className="w-[130px] h-[84px]" resizeMode="contain" />
        <LocalImage
          source={"onboard"}
          className="max-w-[380px] w-4/5 h-[300px] "
          resizeMode="contain"
        />

        <View className="relative mt-5">
          <H3 className="text-center">
            The Smart Way{"\n"}
            To Stay Updated with <H3 className="text-primary">Spark</H3>
          </H3>

          <LocalImage
            source={"path"}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode="contain"
          />
        </View>

        <P size="sm" className="mt-7 text-center">
          Spark delivers real-time, personalized news tailored to your interests and location. Stay
          ahead with the latest updates, curated just for you—because staying informed should be
          smart, fast, and effortless.
        </P>

        <Button
          onPress={() => SheetManager.show("login-sheet")}
          className="w-full mt-7"
          size={"lg"}
        >
          <Text>Let&apos;s get authenticated</Text>
          <Icon
            icon={ChevronRightIcon}
            color={"background"}
            size={"md"}
            className="relative"
            style={{ top: -2 }}
          />
        </Button>
        <Button
          size={"lg"}
          onPress={() => {
            router.push("/personalize/topics");
          }}
          variant={"outline"}
          className="mt-2 w-full"
        >
          <Text className="font-medium">Skip for now</Text>
        </Button>
      </Container>
    </SafeAreaView>
  );
};

export default Welcome;
