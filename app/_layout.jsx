import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#333",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen
        name="contact"
        options={{ title: "Contact", headerShown: false }}
      />
    </Stack>
  );
};

export default RootLayout;
