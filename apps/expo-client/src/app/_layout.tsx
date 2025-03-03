import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";
import useLoadFonts from "@/hooks/use-load-fonts";
import { Theme, ThemeProvider, DefaultTheme, DarkTheme } from "@react-navigation/native";
import * as React from "react";
import { NAV_THEME } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-schema";
import { SheetProvider } from "react-native-actions-sheet";
import "@/lib/sheet";
import StatusBar from "@/components/common/status-bar";
import { ToastProvider } from "react-native-toast-notifications";
const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const [loaded] = useLoadFonts();
  const { isDarkColorScheme } = useColorScheme();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <SheetProvider>
              <Stack screenOptions={{ headerShown: false }} >
                <Stack.Screen name="index" />
              </Stack>
            </SheetProvider>
          </ToastProvider>
          <StatusBar />
        </QueryClientProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
