import React from "react";
import SafeAreaView from "@/components/common/safe-area-view";
import { FlatList, View } from "react-native";
import { NEWS } from "@/mock-data/news";
import NewsCardLong from "@/components/common/news-card-long";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar1Icon, SettingsIcon } from "lucide-react-native";
import Icon from "@/components/ui/icon";
import { H3 } from "@/components/ui/h3";
import { P } from "@/components/ui/p";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter()

  return (
    <SafeAreaView scrollable={false}>
      <FlatList
        data={NEWS}
        ListHeaderComponent={
          <View className="gap-4">

            <View className="flex-row justify-between items-center border-b border-border">
              <View className="flex-row items-end gap-2 justify-center">
                <H3 className="text-2xl">
                  Tilak Thapa
                </H3>
                <Text>
                  (@jrTilak)
                </Text>
              </View>
              <Button
                onPress={() => router.push("/settings")}
                variant={"ghost"} size={"icon"} className="rounded-full">
                <Icon icon={SettingsIcon} color="foreground" />
              </Button>
            </View>

            <View className="flex-row gap-6 items-end">
              <Avatar className="size-32 rounded-md" alt="name">
                <AvatarImage
                  source={{
                    uri: "https://gravatar.com/avatar/1292ff8df7042930cc44df5a9da5583d?s=400&d=robohash&r=g",
                  }}
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <View className="gap-2.5">
                <View className="flex-row items-center justify-center gap-2.5">
                  <View className="items-center text-center">
                    <Text className="font-bold text-xl">
                      42
                    </Text >
                    <Text className="text-sm text-muted-foreground">
                      Following
                    </Text>
                  </View>
                  <Separator orientation="vertical" />
                  <View className="items-center text-center">
                    <Text className="font-bold text-xl">
                      42
                    </Text >
                    <Text className="text-sm text-muted-foreground">
                      Stories Read
                    </Text>
                  </View>
                  <Separator orientation="vertical" />
                  <View className="items-center text-center">
                    <Text className="font-bold text-xl">
                      42
                    </Text >
                    <Text className="text-sm text-muted-foreground">
                      Days Streak
                    </Text>
                  </View>
                </View>
                <Button className="w-full" variant={"outline"} >
                  <Text>
                    Edit Profile
                  </Text>
                </Button>
              </View>
            </View>

            <View className="gap-1">


              <P>
                Empowering your business journey with expert insights and influential perspectives.
              </P>

              {/* joined on */}
              <View className="flex items-center gap-1 flex-row">
                <Icon icon={Calendar1Icon} color="muted-foreground" size={"sm"} />
                <Text className="text-sm text-muted-foreground">Joined 1 min ago</Text>
              </View>
            </View>

            <Separator className="mb-4" />

          </View>
        }
        renderItem={({ item }) => {

          return <NewsCardLong {...item} className="mb-4 px-4" />;
        }}
        contentContainerClassName="px-4 pb-6"
      />
    </SafeAreaView>
  );
};

export default Profile;
