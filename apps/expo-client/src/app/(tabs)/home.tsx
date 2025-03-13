import React from "react";
import SafeAreaView from "@/components/common/safe-area-view";
import { FlatList, View } from "react-native";
import { Button } from "@/components/ui/button";
import { Link } from "expo-router";
import Icon from "@/components/ui/icon";
import { ChevronRightIcon, SearchIcon } from "lucide-react-native";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { P } from "@/components/ui/p";
import { Text } from "@/components/ui/text";
import { NEWS } from "@/mock-data/news";
import NewsCardLong from "@/components/common/news-card-long";
import NewsCardSquare from "@/components/common/news-card-square";
import { Separator } from "@/components/ui/separator";
import { TOPICS } from "@/mock-data/topics";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <SafeAreaView scrollable={false}>
      <FlatList
        data={[null, ...NEWS]}
        ListHeaderComponent={
          <View className="gap-6">
            {/* top welcome section */}
            <View className="justify-between items-center flex-row">
              <View className="flex-row gap-2 items-center">
                <Avatar className="size-16" alt="name">
                  <AvatarImage
                    source={{
                      uri: "https://gravatar.com/avatar/1292ff8df7042930cc44df5a9da5583d?s=400&d=robohash&r=g",
                    }}
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>

                <View>
                  <P className="text-sm">Welcome back,</P>
                  <Text className="font-bold text-2xl">John Doe</Text>
                </View>
              </View>
              <Button variant={"outline"} size={"icon"} className="rounded-full">
                <Link href={"/search"}>
                  <Icon icon={SearchIcon} color="foreground" />
                </Link>
              </Button>
            </View>

            <View className="gap-2.5">
              {/* header */}
              <View className="items-center flex-row justify-between">
                <Text className="text-lg font-bold">Trending</Text>
                <Button variant={"ghost"}>
                  <Text>View all</Text>
                  <Icon icon={ChevronRightIcon} size={"sm"} color="foreground" />
                </Button>
              </View>

              {/* trending news */}
              <FlatList
                data={NEWS}
                renderItem={({ item }) => {
                  return <NewsCardSquare {...item} />;
                }}
                horizontal
                contentContainerClassName="gap-4"
              />
            </View>

            <Separator />
            <View className="items-center flex-row justify-between">
              <Text className="text-lg font-bold">Recent</Text>
              <Button variant={"ghost"}>
                <Text>View all</Text>
                <Icon icon={ChevronRightIcon} size={"sm"} color="foreground" />
              </Button>
            </View>
          </View>
        }
        renderItem={({ item }) => {
          if (item === null)
            return (
              <FlatList
                data={[{ label: "All" }, ...TOPICS]}
                renderItem={({ item }) => {
                  return (
                    <Badge variant={"outline"} className="px-4">
                      <Text className="text-lg font-normal">{item.label}</Text>
                    </Badge>
                  );
                }}
                horizontal
                contentContainerClassName="gap-4 bg-background p-4"
              />
            );

          return <NewsCardLong {...item} className="mb-4 px-4" />;
        }}
        stickyHeaderIndices={[1]}
        contentContainerClassName="px-4 pb-6"
      />
    </SafeAreaView>
  );
};

export default Index;
