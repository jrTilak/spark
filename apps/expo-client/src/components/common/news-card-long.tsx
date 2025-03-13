import { Card, CardContent } from "@/components/ui/card";
import { NewsItem } from "@/mock-data/news";
import { Image, View, ViewProps } from "react-native";
import { H3 } from "../ui/h3";
import { P } from "../ui/p";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Icon from "../ui/icon";
import { ClockIcon, EyeIcon, MessageSquare, Share2 } from "lucide-react-native";
import { Button } from "../ui/button";
import { num } from "@/lib/num";
import { Text } from "../ui/text";
import { cn } from "@/lib/utils";

type Props = NewsItem & ViewProps;

export default function NewsCardLong({ className, ...props }: Props) {
  return (
    <Card className={cn("w-full p-4", className)}>
      <CardContent className="p-0 flex gap-4 items-start w-full">
        <View className="flex-row">
          <View className="w-[70%] gap-2.5">
            <H3 numberOfLines={2} ellipsizeMode="tail" className="text-2xl">
              {props.title}
            </H3>
            <View className="flex items-center gap-3 flex-row h-fit">
              <Avatar className="h-6 w-6" alt="Jane Cooper">
                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                <AvatarFallback>JC</AvatarFallback>
              </Avatar>
              <P className="font-medium mt-2">{props.publisher.name}</P>
            </View>
          </View>
          <View className="w-[30%] h-28">
            <Image
              source={require("@/mock-data/watch.png")}
              alt="Technology equipment"
              resizeMethod="scale"
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        </View>
        <View className="flex items-center justify-between flex-row w-full">
          <View className="flex items-center gap-4 text-sm text-muted-foreground flex-row">
            <View className="flex items-center gap-1 flex-row">
              <Icon icon={ClockIcon} color="mutedForeground" size={"sm"} />
              <Text className="text-xs text-muted-foreground">1 min ago</Text>
            </View>

            <View className="flex items-center gap-1 flex-row">
              <Icon icon={EyeIcon} color="mutedForeground" size={"sm"} />
              <Text className="text-xs text-muted-foreground">
                {num.formatAsK(props.viewsCount)}
              </Text>
            </View>

            <View className="flex items-center gap-1 flex-row">
              <Icon icon={MessageSquare} color="mutedForeground" size={"sm"} />
              <Text className="text-xs text-muted-foreground">
                {num.formatAsK(props.commentCount)}
              </Text>
            </View>
          </View>

          <View className="flex items-center gap-2 flex-row">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon icon={Share2} color="mutedForeground" size={"sm"} />
            </Button>
          </View>
        </View>
      </CardContent>
    </Card>
  );
}
