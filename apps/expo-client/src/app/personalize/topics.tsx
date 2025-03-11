import SafeAreaView from "@/components/common/safe-area-view";
import React, { useState } from "react";
import { TOPICS } from "@/mock-data/topics";
import { Pressable, useWindowDimensions, View } from "react-native";
import { Text } from "@/components/ui/text";
import { FlatList } from "react-native-actions-sheet";
import { H3 } from "@/components/ui/h3";
import { P } from "@/components/ui/p";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ChevronRightIcon } from "lucide-react-native";
import { cn } from "@/lib/utils";

const TopicsPage = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView scrollable={false}>
      <View>
        <View className="bg-background pb-3 p-4 pt-9">
          <H3>Choose Your Favorite Topics</H3>
          <P>
            Pick topics you love, and we&apos;ll recommend better news tailored to your interests.
          </P>
        </View>
        <FlatList
          data={TOPICS}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setSelectedTopics((prev) => {
                  if (prev.includes(item.label)) {
                    return prev.filter((topic) => topic !== item.label);
                  }

                  return [...prev, item.label];
                });
              }}
              className={cn(
                "flex-row active:opacity-40 items-center border border-transparent bg-card justify-between px-4 py-6 flex-1 rounded-md elevation-lg",
                selectedTopics.includes(item.label) && "border-primary",
              )}
            >
              <View className="flex-row items-center">
                <Text className="text-lg">{item.icon}</Text>
                <Text className="ml-4 text-lg">{item.label}</Text>
              </View>
            </Pressable>
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
            <Button variant={"ghost"} className="flex-[1]">
              <Text>Skip</Text>
            </Button>
            <Button disabled={selectedTopics.length === 0} className="flex-[2]">
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
