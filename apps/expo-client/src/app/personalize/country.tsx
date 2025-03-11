import SafeAreaView from "@/components/common/safe-area-view";
import React, { useState } from "react";
import { useWindowDimensions, View } from "react-native";
import { Text } from "@/components/ui/text";
import { FlatList } from "react-native-actions-sheet";
import { H3 } from "@/components/ui/h3";
import { P } from "@/components/ui/p";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ChevronRightIcon } from "lucide-react-native";
import ChipsButton from "@/components/common/chips-button";
import { COUNTRIES } from "@/mock-data/countries";

const CountryPage = () => {
  const [selectedCountries, setSelectedCountries] = useState<number[]>([]);
  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView scrollable={false}>
      <View>
        <View className="bg-background pb-3 p-4 pt-9">
          <H3>Preferred Countries</H3>
          <P>
            Choose the countries you&apos;re interested in, and we&apos;ll keep you updated with the latest news from those regions.
          </P>

        </View>
        <FlatList
          data={COUNTRIES}
          renderItem={({ item }) => (
            <ChipsButton
              onPress={() => {
                setSelectedCountries((prev) => {
                  if (prev.includes(item.id)) {
                    return prev.filter((topic) => topic !== item.id);
                  }

                  return [...prev, item.id];
                });
              }}
              selected={selectedCountries.includes(item.id)}
              icon={item.flag}
              label={item.name}
            />
          )}
          contentContainerClassName="gap-4 p-6"
          style={{ height: dimensions.height - 130 }}
          columnWrapperClassName="gap-4"
          numColumns={2}
          extraData={selectedCountries}
        />

        <View className="gap-2.5 mt-5 align-bottom p-4 absolute bottom-0 w-full bg-background py-4">
          <P className="text-center" size="sm">
            You can always change your preferences later.
          </P>
          <View className="flex-row justify-between  gap-4 ">
            <Button variant={"ghost"} className="flex-[1]">
              <Text>Skip</Text>
            </Button>
            <Button disabled={selectedCountries.length === 0} className="flex-[2]">
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

export default CountryPage;
