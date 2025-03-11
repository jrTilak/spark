import SafeAreaView from "@/components/common/safe-area-view";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import { Text } from "@/components/ui/text";
import { FlatList } from "react-native-actions-sheet";
import { H3 } from "@/components/ui/h3";
import { P } from "@/components/ui/p";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ChevronRightIcon } from "lucide-react-native";
import { useRouter } from "expo-router";
import PublisherChip from "@/components/common/publisher-chip";
import { PUBLISHERS } from "@/mock-data/publishers";

const PublishersPage = () => {
  const dimensions = useWindowDimensions();
  const router = useRouter()

  return (
    <SafeAreaView scrollable={false}>
      <View>
        <View className="bg-background pb-3 p-4 pt-9">
          <H3>Your Trusted Publishers</H3>
          <P>
            Select the publishers you trust, and we&apos;ll deliver updates from them directly to your feed.
          </P>
        </View>
        <FlatList
          data={PUBLISHERS}
          renderItem={({ item }) => (
            <PublisherChip
              {...item}
            />
          )}
          contentContainerClassName="gap-6 p-6"
          style={{ height: dimensions.height - 130 }}
          columnWrapperClassName="gap-4"
          numColumns={2}
        />

        <View className="gap-2.5 mt-5 align-bottom p-4 absolute bottom-0 w-full bg-background py-4">
          <P className="text-center" size="sm">
            You can always change your preferences later.
          </P>
          <View className="flex-row justify-between gap-4 ">
            <Button
              className="flex-1"
              onPress={() => router.push("/personalize/country")}
            >
              <Text>Let&apos; go</Text>
              <Icon
                icon={ChevronRightIcon}
                color={"background"}
                size={"md"}
                className="relative"
                style={{ top: -2 }}
              />
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PublishersPage;
