import { HapticTab } from "@/components/common/haptic-tab";
import SafeAreaView from "@/components/common/safe-area-view";
import Icon from "@/components/ui/icon";
import useColors from "@/hooks/use-colors";
import { Tabs } from "expo-router";
import { BellIcon, CompassIcon, HouseIcon, UserIcon } from "lucide-react-native";
import React from "react";

const Layout = () => {
  const colors = useColors();

  return (
    <SafeAreaView>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: undefined,
          tabBarStyle: [
            {
              backgroundColor: colors.background,
              elevation: 6,
              height: 60,
              paddingTop: 5,
              borderColor: colors.border,
            },
          ],
          sceneStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        {[
          {
            name: "home",
            icon: HouseIcon,
            label: "Home",
          },
          {
            name: "discover",
            icon: CompassIcon,
            label: "Discover",
          },
          {
            name: "notifications",
            icon: BellIcon,
            label: "Notifications",
          },
          {
            name: "profile",
            icon: UserIcon,
            label: "Profile",
          },
        ].map((tab, index) => (
          <Tabs.Screen
            key={index}
            name={tab.name}
            options={{
              title: tab.label,
              tabBarIcon: ({ color }) => {
                //@ts-expect-error: `color` is not a valid prop for `color`
                return <Icon icon={tab.icon} color={color} size="lg" />;
              },
              animation: "fade",
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
};

export default Layout;
