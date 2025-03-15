import { Publisher } from "@/mock-data/publishers";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { View } from "react-native";
import { Text } from "../ui/text";
import { Button } from "../ui/button";
type Props = Publisher;

const PublisherChip = (props: Props) => {
  return (
    <View className="flex-1 items-center justify-center gap-2">
      <Avatar alt={props.name} className="w-20 h-20">
        <AvatarImage source={{ uri: props.icon }} />
        <AvatarFallback>{props.name}</AvatarFallback>
      </Avatar>
      <Text numberOfLines={1} ellipsizeMode="tail" className="text-center">
        {props.name}
      </Text>
      <Button variant={"secondary"} size={"sm"} className="w-full border-primary">
        <Text>Follow</Text>
      </Button>
    </View>
  );
};

export default PublisherChip;
