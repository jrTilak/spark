import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";
import useLoadFonts from "@/hooks/use-load-fonts";
import { SheetProvider } from "react-native-actions-sheet";
import "@/lib/register-sheets";
import StatusBar from "@/components/common/status-bar";
import { ToastProvider } from "react-native-toast-notifications";
import { ThemeProvider } from "@/providers/theme-provider";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const [loaded] = useLoadFonts();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    if (loaded && isThemeLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isThemeLoaded]);


  return (
    <GestureHandlerRootView>
      <ThemeProvider onThemeLoaded={() => setIsThemeLoaded(true)}>
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
