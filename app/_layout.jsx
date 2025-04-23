import { Slot, Stack } from "expo-router";
import { Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        {/* Groups */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* Individual Screens */}
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </>
  );
};

export default RootLayout;
