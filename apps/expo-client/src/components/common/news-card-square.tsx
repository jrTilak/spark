import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Share2, Eye, MessageSquare } from "lucide-react-native";
import { Image, View } from "react-native";
import { H3 } from "../ui/h3";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { NewsItem } from "@/mock-data/news";
import { num } from "@/lib/num";

type Props = NewsItem;

export default function NewsCardSquare(props: Props) {
  return (
    <Card className="overflow-hidden">
      <View className="relative w-full h-44">
        <Image
          source={require("@/mock-data/watch.png")}
          alt="Person in mask with gorilla costume"
          resizeMethod="scale"
          resizeMode="cover"
          className="w-full h-full bg-muted"
        />
      </View>
      <CardContent className="p-4">
        <H3 className="text-xl font-bold leading-tight mb-1">{props.title}</H3>

        <View className="flex items-center justify-between mt-4 flex-row">
          <View className="flex items-center gap-2 flex-row">
            <Avatar className="h-6 w-6" alt="CNN">
              <AvatarImage src="/placeholder.svg?height=24&width=24" />
              <AvatarFallback className="bg-red-600 text-white text-xs">CNN</AvatarFallback>
            </Avatar>
            <Text className="text-sm font-medium">{props.publisher.name}</Text>
          </View>

          <View className="flex items-center justify-center gap-2 text-muted-foreground text-xs flex-row">
            <Icon icon={Clock} size={"xs"} color="mutedForeground" />
            <Text className="text-sm text-muted-foreground">3 days ago</Text>
          </View>
        </View>

        <View className="flex items-center justify-between mt-3 pt-3 border-t border-border flex-row">
          <View className="flex items-center gap-5 flex-row">
            <View className="flex items-center gap-1 flex-row">
              <Icon icon={Eye} size={"sm"} color="mutedForeground" />
              <Text className="text-xs text-muted-foreground">
                {num.formatAsK(props.viewsCount)}
              </Text>
            </View>
            <View className="flex items-center gap-1 flex-row">
              <Icon icon={MessageSquare} size={"sm"} color="mutedForeground" />
              <Text className="text-xs text-muted-foreground">
                {num.formatAsK(props.commentCount)}
              </Text>
            </View>
          </View>

          <Button size={"icon"} variant={"ghost"} className="p-1 rounded-full hover:bg-accent">
            <Icon icon={Share2} size={"sm"} color="mutedForeground" />
          </Button>
        </View>
      </CardContent>
    </Card>
  );
}
