import { Slot, Stack } from "expo-router";
import { Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext";
import { useUser } from "../hooks/useUser";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];
  

  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        {/* Groups */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

        {/* Individual Screens */}
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;
