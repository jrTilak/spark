import SafeAreaView from "@/components/common/safe-area-view";
import React, { useState } from "react";
import { TOPICS } from "@/mock-data/topics";
import { useWindowDimensions, View } from "react-native";
import { Text } from "@/components/ui/text";
import { FlatList } from "react-native-actions-sheet";
import { H3 } from "@/components/ui/h3";
import { P } from "@/components/ui/p";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ChevronRightIcon } from "lucide-react-native";
import ChipsButton from "@/components/common/chips-button";
import { useRouter } from "expo-router";

const TopicsPage = () => {
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);
  const dimensions = useWindowDimensions();
  const router = useRouter();

  return (
    <SafeAreaView scrollable={false}>
      <View>
        <View className="bg-background pb-3 p-4 pt-9">
          <H3>Favorite Topics</H3>
          <P>
            Pick topics you love, and we&apos;ll recommend better news tailored to your interests.
          </P>
        </View>
        <FlatList
          data={TOPICS}
          renderItem={({ item }) => (
            <ChipsButton
              onPress={() => {
                setSelectedTopics((prev) => {
                  if (prev.includes(item.id)) {
                    return prev.filter((topic) => topic !== item.id);
                  }

                  return [...prev, item.id];
                });
              }}
              selected={selectedTopics.includes(item.id)}
              icon={item.icon}
              label={item.label}
            />
          )}
          contentContainerClassName="gap-4 p-6"
          style={{ height: dimensions.height - 130 }}
          columnWrapperClassName="gap-4"
          numColumns={2}
          extraData={selectedTopics}
        />

        <View className="gap-2.5 mt-5 align-bottom p-4 absolute bottom-0 w-full bg-background py-4">
          <P className="text-center" size="sm">
            You can always change your preferences later.
          </P>
          <View className="flex-row justify-between  gap-4 ">
            <Button
              onPress={() => router.push("/personalize/country")}
              variant={"ghost"}
              className="flex-[1]"
            >
              <Text>Skip</Text>
            </Button>
            <Button
              onPress={() => router.push("/personalize/country")}
              disabled={selectedTopics.length === 0}
              className="flex-[2]"
            >
              <Text>Next</Text>
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

export default TopicsPage;
