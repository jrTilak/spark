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

type Props<T> = {
  header: {
    title: string,
    description: string
  }
  data: T[]
  renderItem: (item: T) => React.ReactElement,
  extraData?: unknown
  skip: Partial<{
    onSkip: () => void
    disabled: boolean
    hide: boolean
  }>
  next: Partial<{
    onNext: () => void
    disabled: boolean
  }>
  noOfColumns?: number
}

const PersonalizeLayout = <T,>({ header, data, next, skip, renderItem, extraData, noOfColumns = 1 }: Props<T>) => {
  const dimensions = useWindowDimensions();

  return (
    <SafeAreaView>
      <View className="flex-1">
        <View className="bg-background pb-3 p-4 pt-9">
          <H3>
            {header.title}
          </H3>
          <P>
            {header.description}
          </P>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => renderItem(item)}
          contentContainerClassName="gap-4 p-6"
          style={{ height: dimensions.height - 130 }}
          extraData={extraData}
          numColumns={noOfColumns}
          {...noOfColumns > 1 && { columnWrapperClassName: "gap-4" }}
        />

        <View className="gap-2.5 mt-5 align-bottom p-4 absolute bottom-0 w-full bg-background py-4">
          <P className="text-center" size="sm">
            You can always change your preferences later.
          </P>
          {skip.hide ?
            <View className="flex-row justify-between gap-4 ">
              <Button className="flex-1" onPress={next?.onNext}>
                <Text>Let&apos; go</Text>
                <Icon
                  icon={ChevronRightIcon}
                  color={"foreground"}
                  size={"md"}
                  className="relative"
                  style={{ top: -2 }}
                />
              </Button>
            </View>
            : <View className="flex-row justify-between  gap-4 ">
              <Button
                variant={"ghost"}
                className="flex-[1]"
                disabled={skip?.disabled}
                onPress={skip?.onSkip}
              >
                <Text>Skip</Text>
              </Button>
              <Button
                className="flex-[2]"
                disabled={next?.disabled}
                onPress={next?.onNext}
              >
                <Text>
                  Next
                </Text>
                <Icon
                  icon={ChevronRightIcon}
                  color={"primary-foreground"}
                  size={"md"}
                  className="relative"
                  style={{ top: -2 }}
                />
              </Button>
            </View>}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalizeLayout;
